import { makeExtendSchemaPlugin, gql } from "graphile-utils"
import Cursor from 'pg-cursor'
import { Client, QueryResult } from 'pg'

const DEFAULT_ROWS = 1000
const MAX_ROWS = 5000

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
      queryRunningTimeMs: Int
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

        const start = new Date()

        // first set the pg session to be read only, if disableReadOnly is false
        if (!input.disableReadOnly) {
          await context.pgClient.query("SET TRANSACTION READ ONLY;")
        }
        else
        {
            // Check if the user is a mergestat_role_demo user and if so, set the transaction to read only
            await context.pgClient.query(
            `DO
            $do$
            BEGIN
                --Check if user has role of mergestat_role_demo and raise and error if they do
                IF EXISTS (
                    SELECT 
                        a.oid AS user_role_id
                        , a.rolname AS user_role_name
                        , b.roleid AS other_role_id
                        , c.rolname AS other_role_name
                    FROM pg_roles a
                    INNER JOIN pg_auth_members b ON a.oid=b.member
                    INNER JOIN pg_roles c ON b.roleid=c.oid 
                    WHERE a.rolname = current_user AND c.rolname = 'mergestat_role_demo'
                )
                THEN SET TRANSACTION READ ONLY;
                END IF;
            END
            $do$;`
            );
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

        const queryRunningTimeMs : number = (new Date()).getTime() - start.getTime()

        return {
          rows: rowsToReturn,
          columns: queryResult.fields.map((f: any) => ({
            name: f.name,
            format: f.format
          })),
          rowCount: queryResult.rowCount,
          queryRunningTimeMs
        }
      },
    },
  },
});
