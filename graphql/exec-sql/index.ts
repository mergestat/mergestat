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
}

module.exports = makeExtendSchemaPlugin({
  typeDefs: gql`
    input ExecSQLInput {
      query: String
      variables: [String!]
      rowLimit: Int
      disableReadOnly: Boolean
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
        // first set the pg session to use a read-only role, if readonly is true
        if (!input.disableReadOnly) {
          await context.pgClient.query("SET ROLE readaccess;")
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

        // reset the role to the one established in the initial connection
        // https://www.postgresql.org/docs/current/sql-set-role.html
        if (!input.disableReadOnly) {
          await context.pgClient.query("RESET ROLE;")
        }

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
