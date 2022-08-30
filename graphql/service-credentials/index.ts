import { makeExtendSchemaPlugin, gql } from "graphile-utils"
import { Client } from 'pg'

// FUSE_SECRET is used to encrypt credentials before they go into the DB
const { FUSE_SECRET } = process.env

type ReplaceGitHubPATInput = {
  pat: string
}

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    extend type Mutation {
      replaceGitHubPAT(pat: String!): Boolean
    }
  `,
  resolvers: {
    Mutation: {
      async replaceGitHubPAT(_parent: any, args: ReplaceGitHubPATInput, context: { pgClient: Client }, _info: any) {
        try {
          await context.pgClient.query('BEGIN')

          // first delete all the existing PATs in the DB (for now, only allow one at a time)
          // TODO(patrickdevivo) this may eventually make more sense to handle with unique constraints/indexes in the DB
          // however the encryption adds a wrinkle to that
          await context.pgClient.query("DELETE FROM mergestat.service_auth_credentials WHERE type = 'GITHUB_PAT'")
          
          // then do an insert using the add_service_auth_credential helper in the DB
          await context.pgClient.query("SELECT mergestat.add_service_auth_credential('GITHUB_PAT', $1, $2)", [ args.pat, FUSE_SECRET ])

          await context.pgClient.query('COMMIT')
        } catch (e) {
          await context.pgClient.query('ROLLBACK')
          throw e
        } finally {
          return true
        }
      },
    },
  },
});
