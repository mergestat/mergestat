import { makeExtendSchemaPlugin, gql } from "graphile-utils"
import { Client } from 'pg'

// FUSE_SECRET is used to encrypt credentials before they go into the DB
const { FUSE_SECRET } = process.env

// If these env vars are set (DISPLAY_PG_*) they will be accessible via the databaseConnection Query
// They are meant to be set by an operator for display in the /connect page of the UI
const { DISPLAY_PG_HOSTNAME, DISPLAY_PG_PORT, DISPLAY_PG_DATABASE, DISPLAY_PG_USER } = process.env

type ReplaceGitHubPATInput = {
  pat: string
}

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    extend type Mutation {
      replaceGitHubPAT(pat: String!): Boolean
    }
    extend type Query {
      databaseConnection: DisplayDatabaseConnection
    }
    type DisplayDatabaseConnection {
      host: String
      port: Int
      database: String
      user: String
    }
  `,
  resolvers: {
    Mutation: {
      async replaceGitHubPAT(_parent: any, args: ReplaceGitHubPATInput, context: { pgClient: Client }, _info: any) {
        try {
          await context.pgClient.query('SAVEPOINT replaceGitHubPAT;')

          // first delete all the existing PATs in the DB (for now, only allow one at a time)
          // TODO(patrickdevivo) this may eventually make more sense to handle with unique constraints/indexes in the DB
          // however the encryption adds a wrinkle to that
          await context.pgClient.query("DELETE FROM mergestat.service_auth_credentials WHERE type = 'GITHUB_PAT'")
          
          // then do an insert using the add_service_auth_credential helper in the DB
          await context.pgClient.query("SELECT mergestat.add_service_auth_credential('GITHUB_PAT', $1, $2)", [ args.pat, FUSE_SECRET ])

          await context.pgClient.query('RELEASE SAVEPOINT replaceGitHubPAT;')
        } catch (e) {
          await context.pgClient.query('ROLLBACK TO SAVEPOINT replaceGitHubPAT;')
          throw e
        } finally {
          return true
        }
      },
    },
    Query: {
      async databaseConnection(_parent: any, _args, _context: { pgClient: Client }, _info: any) {
        return {
          host: DISPLAY_PG_HOSTNAME || null,
          port: DISPLAY_PG_PORT || null,
          database: DISPLAY_PG_DATABASE || null,
          user: DISPLAY_PG_USER || null,
        }
      }
    }
  },
});
