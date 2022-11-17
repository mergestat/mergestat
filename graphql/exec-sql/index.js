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
const DEFAULT_ROWS = 100;
const MAX_ROWS = 500;
module.exports = (0, graphile_utils_1.makeExtendSchemaPlugin)({
    typeDefs: (0, graphile_utils_1.gql) `
    extend type Query {
      execSQL(query: String!, variables: [String!], rowLimit: Int, readonly: Boolean): JSON
    }
  `,
    resolvers: {
        Query: {
            execSQL(_parent, args, context, _info) {
                return __awaiter(this, void 0, void 0, function* () {
                    // first set the pg session to use a read-only role, if readonly is true
                    if (!args.disableReadOnly) {
                        yield context.pgClient.query("SET ROLE readaccess;");
                    }
                    // then create a cursor https://node-postgres.com/api/cursor for the user supplied query
                    const cursor = context.pgClient.query(new pg_cursor_1.default(args.query, args.variables));
                    // use the default row limit if none is provided
                    // cap the number of rows at MAX_ROWS
                    let rowLimit = args.rowLimit || DEFAULT_ROWS;
                    if (rowLimit > MAX_ROWS) {
                        rowLimit = MAX_ROWS;
                    }
                    // execute query, close cursor, and store results
                    const results = yield cursor.read(rowLimit);
                    cursor.close();
                    // reset the role to the one established in the initial connection
                    // https://www.postgresql.org/docs/current/sql-set-role.html
                    yield context.pgClient.query("RESET ROLE;");
                    return results;
                });
            },
        },
    },
});
