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
Object.defineProperty(exports, "__esModule", { value: true });
const graphile_utils_1 = require("graphile-utils");
// ENCRYPTION_SECRET is used to encrypt credentials before they go into the DB
const { ENCRYPTION_SECRET } = process.env;
// If these env vars are set (DISPLAY_PG_*) they will be accessible via the databaseConnection Query
// They are meant to be set by an operator for display in the /connect page of the UI
const { DISPLAY_PG_HOSTNAME, DISPLAY_PG_PORT, DISPLAY_PG_DATABASE, DISPLAY_PG_USER } = process.env;
module.exports = (0, graphile_utils_1.makeExtendSchemaPlugin)({
    typeDefs: (0, graphile_utils_1.gql) `
    extend type Mutation {
      addToken(provider: UUID!, type: String!, token: String!): Boolean
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
            addToken(_parent, args, context, _info) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield context.pgClient.query('SAVEPOINT add_token;');
                        yield context.pgClient.query("SELECT mergestat.add_service_auth_credential($1, $2, $3, $4)", [args.provider, args.type, args.token, ENCRYPTION_SECRET]);
                        yield context.pgClient.query('RELEASE SAVEPOINT add_token;');
                        return true;
                    }
                    catch (e) {
                        yield context.pgClient.query('ROLLBACK TO SAVEPOINT add_token;');
                        throw e;
                    }
                });
            },
        },
        Query: {
            databaseConnection(_parent, _args, _context, _info) {
                return __awaiter(this, void 0, void 0, function* () {
                    return {
                        host: DISPLAY_PG_HOSTNAME || null,
                        port: DISPLAY_PG_PORT || null,
                        database: DISPLAY_PG_DATABASE || null,
                        user: DISPLAY_PG_USER || null,
                    };
                });
            }
        }
    },
});
