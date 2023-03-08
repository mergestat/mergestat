import { makeExtendSchemaPlugin, gql } from "graphile-utils"
import { Client } from 'pg'

// ENCRYPTION_SECRET is used to encrypt credentials before they go into the DB
const { ENCRYPTION_SECRET } = process.env

// If these env vars are set (DISPLAY_PG_*) they will be accessible via the databaseConnection Query
// They are meant to be set by an operator for display in the /connect page of the UI
const { DISPLAY_PG_HOSTNAME, DISPLAY_PG_PORT, DISPLAY_PG_DATABASE, DISPLAY_PG_USER } = process.env

type AddTokenInput = {
  provider: string
  type: string
  username: string
  token: string
}

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    extend type Mutation {
      addToken(provider: UUID!, type: String!, username: String, token: String!): Boolean
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
      async addToken(_parent: any, args: AddTokenInput, context: { pgClient: Client }, _info: any) {
        try {
          await context.pgClient.query('SAVEPOINT add_token;')
          await context.pgClient.query("SELECT mergestat.add_service_auth_credential($1, $2, $3, $4, $5)", [ args.provider, args.type, args.username, args.token, ENCRYPTION_SECRET ])
          await context.pgClient.query('RELEASE SAVEPOINT add_token;')
          return true
        } catch (e) {
          await context.pgClient.query('ROLLBACK TO SAVEPOINT add_token;')
          throw e
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
