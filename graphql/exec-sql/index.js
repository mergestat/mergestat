"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphile_utils_1 = require("graphile-utils");
const pg_cursor_1 = __importDefault(require("pg-cursor"));
const DEFAULT_ROWS = 1000;
const MAX_ROWS = 5000;
module.exports = (0, graphile_utils_1.makeExtendSchemaPlugin)({
    typeDefs: (0, graphile_utils_1.gql) `
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
            execSQL(_parent, args, context, _info) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { input } = args;
                    if (input.trackHistory) {
                        // if trackHistory is true, then we need to track the query in the query history table
                        yield context.pgClient.query("INSERT INTO mergestat.query_history (run_by, query) VALUES ((SELECT current_user), $1);", [input.query]);
                    }
                    const start = new Date();
                    // first set the pg session to be read only, if disableReadOnly is false
                    if (!input.disableReadOnly) {
                        yield context.pgClient.query("SET TRANSACTION READ ONLY;");
                    }
                    // then create a cursor https://node-postgres.com/api/cursor for the user supplied query
                    const cursor = context.pgClient.query(new pg_cursor_1.default(input.query, input.variables, { rowMode: 'array' }));
                    // use the default row limit if none is provided
                    // cap the number of rows at MAX_ROWS
                    let rowLimit = input.rowLimit || DEFAULT_ROWS;
                    if (rowLimit > MAX_ROWS) {
                        rowLimit = MAX_ROWS;
                    }
                    let rowsToReturn = [];
                    let queryResult;
                    // execute query, close cursor, and store results
                    // done in this way because it seems like the only way we can access the column names
                    // (via the QuerResult object) is using the callback approach
                    yield (() => {
                        return new Promise((resolve, reject) => {
                            cursor.read(rowLimit, (err, rows, result) => {
                                if (err) {
                                    reject(err);
                                }
                                rowsToReturn = rows;
                                queryResult = result;
                                cursor.close((err) => {
                                    if (err) {
                                        reject(err);
                                    }
                                    resolve();
                                });
                            });
                        });
                    })();
                    const queryRunningTimeMs = (new Date()).getTime() - start.getTime();
                    return {
                        rows: rowsToReturn,
                        columns: queryResult.fields.map((f) => ({
                            name: f.name,
                            format: f.format
                        })),
                        rowCount: queryResult.rowCount,
                        queryRunningTimeMs
                    };
                });
            },
        },
    },
});
