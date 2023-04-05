import {gql, makeExtendSchemaPlugin} from "graphile-utils"
import {Client} from 'pg'
import * as bluebird from 'bluebird';

type SyncNowInput = { sync: String, queue?: String }
type BulkSyncInput = { image: String, provider: String }

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    extend type Mutation { 
      syncNow(sync: UUID!, queue: String): Boolean 
      bulkEnableSync(image: UUID!, provider: UUID!): Boolean
      bulkDisableSync(image: UUID!, provider: UUID!): Boolean
    }
  `,

  resolvers: {
    Mutation: {
      async syncNow(_parent: any, args: SyncNowInput, context: { pgClient: Client }, _info: any) {
        const {pgClient: pg} = context;

        await pg.query("SAVEPOINT sync_now");
        try {
          // Enqueue a new sqlq job
          // The job's specification should match what is defined under internal/jobs/sync/podman.NewContainerSync()
          console.log(args)
          let sync = (await pg.query("SELECT * FROM mergestat.container_syncs WHERE id = $1", [args.sync])).rows[0];
          if (!sync) {
            throw Error(`sync not found`)
          }

          // create a new queue and enqueue the job; imitates sqlq.Enqueue() routine
          const queue = args.queue ?? sync?.queue ?? "default";
          const jobArgs = [queue, "container/sync", JSON.stringify({ID: sync.id})]

          await pg.query("INSERT INTO sqlq.queues (name) VALUES ($1) ON CONFLICT (name) DO NOTHING", [queue]);
          const job = (await pg.query("INSERT INTO sqlq.jobs (queue, typename, parameters) VALUES ($1, $2, $3) RETURNING *", jobArgs)).rows[0];

          // create a new execution record to link the job and the sync
          // similar to how the Golang scheduler service would do!
          await pg.query("INSERT INTO mergestat.container_sync_executions (sync_id, job_id) VALUES ($1, $2)", [sync.id, job.id]);
          return true
        } catch (e) {
          await pg.query("ROLLBACK TO SAVEPOINT sync_now");
          throw e;
        } finally {
          await pg.query("RELEASE SAVEPOINT sync_now");
        }
      },

      async bulkEnableSync(_parent: any, args: BulkSyncInput, context: { pgClient: Client }, _info: any) {
        const {pgClient: pg} = context;

        await pg.query("SAVEPOINT bulk_enable_sync");
        try {
          const {rows: repos} = await pg.query('SELECT * FROM public.repos WHERE repos.provider = $1', [args.provider]);

          const createSync = `
            INSERT INTO mergestat.container_syncs (repo_id, image_id) VALUES ($1, $2)
              ON CONFLICT (repo_id, image_id) DO UPDATE SET repo_id = EXCLUDED.repo_id, image_id = EXCLUDED.image_id
            RETURNING id`;

          // we iterate over each repository, creating a sync and a schedule
          await bluebird.mapSeries(repos, async repo => {
            const {rows: syncs} = await pg.query(createSync, [repo.id, args.image]);
            await pg.query('INSERT INTO mergestat.container_sync_schedules (sync_id) VALUES ($1)', [syncs[0].id]);
          })

          return true
        } catch (e) {
          await pg.query("ROLLBACK TO SAVEPOINT bulk_enable_sync");
          throw e;
        } finally {
          await pg.query("RELEASE SAVEPOINT bulk_enable_sync");
        }
      },

      async bulkDisableSync(_parent: any, args: BulkSyncInput, context: { pgClient: Client }, _info: any) {
        const {pgClient: pg} = context;

        await pg.query("SAVEPOINT bulk_disable_sync");
        try {
          await pg.query(`DELETE FROM mergestat.container_syncs WHERE image_id = $1 AND repo_id IN (SELECT id FROM public.repos WHERE provider = $2)`,
              [args.image, args.provider]);

          return true
        } catch (e) {
          await pg.query("ROLLBACK TO SAVEPOINT bulk_disable_sync");
          throw e;
        } finally {
          await pg.query("RELEASE SAVEPOINT bulk_disable_sync");
        }
      }
    },
  },
});
