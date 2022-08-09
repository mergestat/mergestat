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
        // first create a cursor https://node-postgres.com/api/cursor
        const cursor = context.pgClient.query(new Cursor(args.query, args.variables))
        
        // use the default row limit if none is provided
        // cap the number of rows at MAX_ROWS
        let rowLimit = args.rowLimit || DEFAULT_ROWS
        if (rowLimit > MAX_ROWS) {
          rowLimit = MAX_ROWS
        }
        
        // execute query, close cursor, and return results
        const results = await cursor.read(rowLimit)
        cursor.close()
        return results
      },
    },
  },
});
