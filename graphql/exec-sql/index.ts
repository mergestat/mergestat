import { makeExtendSchemaPlugin, gql } from "graphile-utils"
import Cursor from 'pg-cursor'
import { Client } from 'pg'

const DEFAULT_ROWS = 100
const MAX_ROWS = 500

type ExecSQLInput = {
  query: string
  variables: [any]
  rowLimit: number
}

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    extend type Query {
      execSQL(query: String!, variables: [String!], rowLimit: Int): JSON
    }
  `,
  resolvers: {
    Query: {
      async execSQL(_parent: any, args: ExecSQLInput, context: { pgClient: Client }, _info: any) {
        // first set the pg session to use a read-only role
        await context.pgClient.query("SET ROLE readaccess;")

        // then create a cursor https://node-postgres.com/api/cursor for the user supplied query
        const cursor = context.pgClient.query(new Cursor(args.query, args.variables))
        
        // use the default row limit if none is provided
        // cap the number of rows at MAX_ROWS
        let rowLimit = args.rowLimit || DEFAULT_ROWS
        if (rowLimit > MAX_ROWS) {
          rowLimit = MAX_ROWS
        }
        
        // execute query, close cursor, and store results
        const results = await cursor.read(rowLimit)
        cursor.close()

        // reset the role to the one established in the initial connection
        // https://www.postgresql.org/docs/current/sql-set-role.html
        await context.pgClient.query("RESET ROLE;")
        return results
      },
    },
  },
});
