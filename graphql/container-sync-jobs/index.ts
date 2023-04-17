import * as bluebird from 'bluebird'
import { gql, makeExtendSchemaPlugin } from "graphile-utils"
import { Client } from 'pg'

type BulkSyncInput = { image: String, provider: String }

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    extend type Mutation { 
      bulkEnableSync(image: UUID!, provider: UUID!): Boolean
      bulkDisableSync(image: UUID!, provider: UUID!): Boolean
    }
  `,

  resolvers: {
    Mutation: {
      async bulkEnableSync(_parent: any, args: BulkSyncInput, context: { pgClient: Client }, _info: any) {
        const { pgClient: pg } = context

        await pg.query("SAVEPOINT bulk_enable_sync")
        try {
          const { rows: repos } = await pg.query('SELECT * FROM public.repos WHERE repos.provider = $1', [args.provider])

          const createSync = `
            INSERT INTO mergestat.container_syncs (repo_id, image_id) VALUES ($1, $2)
              ON CONFLICT (repo_id, image_id) DO UPDATE SET repo_id = EXCLUDED.repo_id, image_id = EXCLUDED.image_id
            RETURNING id`

          // we iterate over each repository, creating a sync and a schedule
          await bluebird.mapSeries(repos, async repo => {
            const { rows: syncs } = await pg.query(createSync, [repo.id, args.image])
            await pg.query('INSERT INTO mergestat.container_sync_schedules (sync_id) VALUES ($1) ON CONFLICT DO NOTHING', [syncs[0].id])
          })

          return true
        } catch (e) {
          await pg.query("ROLLBACK TO SAVEPOINT bulk_enable_sync")
          throw e
        } finally {
          await pg.query("RELEASE SAVEPOINT bulk_enable_sync")
        }
      },

      async bulkDisableSync(_parent: any, args: BulkSyncInput, context: { pgClient: Client }, _info: any) {
        const { pgClient: pg } = context

        await pg.query("SAVEPOINT bulk_disable_sync")
        try {
          await pg.query(`DELETE FROM mergestat.container_sync_schedules WHERE sync_id IN (SELECT id FROM mergestat.container_syncs WHERE image_id = $1 AND repo_id IN (SELECT id FROM public.repos WHERE provider = $2))`,
            [args.image, args.provider])

          return true
        } catch (e) {
          await pg.query("ROLLBACK TO SAVEPOINT bulk_disable_sync")
          throw e
        } finally {
          await pg.query("RELEASE SAVEPOINT bulk_disable_sync")
        }
      }
    },
  },
})
