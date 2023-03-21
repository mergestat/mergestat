import {gql, makeExtendSchemaPlugin} from "graphile-utils"
import {Client} from 'pg'

type SyncNowInput = { sync: String, queue?: String }

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    extend type Mutation { 
      syncNow(sync: UUID!, queue: String): Boolean 
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
    },
  },
});
