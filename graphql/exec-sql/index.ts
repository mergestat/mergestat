import { makeExtendSchemaPlugin, gql } from "graphile-utils"
import Cursor from 'pg-cursor'
import { Client, QueryResult } from 'pg'

const DEFAULT_ROWS = 100
const MAX_ROWS = 500

type ExecSQLInput = {
  query: string
  variables: [any]
  rowLimit: number
  disableReadOnly: boolean
  trackHistory: boolean
}

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    input ExecSQLInput {
      query: String
      variables: [String!]
      rowLimit: Int
      disableReadOnly: Boolean
      trackHistory: Boolean
    }

    type ExecSQLResult {
      rowCount: Int
      rows: [JSON!]
      columns: [JSON!]
    }

    extend type Query {
      execSQL(input: ExecSQLInput!): ExecSQLResult!
    }
  `,
  resolvers: {
    Query: {
      async execSQL(_parent: any, args: { input: ExecSQLInput }, context: { pgClient: Client }, _info: any) {
        const { input } = args

        if (input.trackHistory) {
          // if trackHistory is true, then we need to track the query in the query history table
          await context.pgClient.query("INSERT INTO mergestat.query_history (run_by, query) VALUES ((SELECT current_user), $1);", [input.query])
        }

        // first set the pg session to be read only, if disableReadOnly is false
        if (!input.disableReadOnly) {
          await context.pgClient.query("SET TRANSACTION READ ONLY;")
        }

        // then create a cursor https://node-postgres.com/api/cursor for the user supplied query
        const cursor = context.pgClient.query(new Cursor(input.query, input.variables, { rowMode: 'array' }))
        // use the default row limit if none is provided
        // cap the number of rows at MAX_ROWS
        let rowLimit = input.rowLimit || DEFAULT_ROWS
        if (rowLimit > MAX_ROWS) {
          rowLimit = MAX_ROWS
        }
        
        let rowsToReturn = []
        let queryResult;

        // execute query, close cursor, and store results
        // done in this way because it seems like the only way we can access the column names
        // (via the QuerResult object) is using the callback approach
        await (() => {
          return new Promise<void>((resolve, reject) => {
            cursor.read(rowLimit, (err: Error, rows: any, result: QueryResult) => {
              if (err) {
                reject(err)
              }
              rowsToReturn = rows
              queryResult = result
              cursor.close((err: Error) => {
                if (err) {
                  reject(err)
                }
                resolve()
              })
            })
          })
        })()

        return {
          rows: rowsToReturn,
          columns: queryResult.fields.map((f: any) => ({
            name: f.name,
            format: f.format
          })),
          rowCount: queryResult.rowCount,
        }
      },
    },
  },
});
