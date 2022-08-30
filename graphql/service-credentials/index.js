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
// FUSE_SECRET is used to encrypt credentials before they go into the DB
const { FUSE_SECRET } = process.env;
module.exports = (0, graphile_utils_1.makeExtendSchemaPlugin)({
    typeDefs: (0, graphile_utils_1.gql) `
    extend type Mutation {
      replaceGitHubPAT(pat: String!): Boolean
    }
  `,
    resolvers: {
        Mutation: {
            replaceGitHubPAT(_parent, args, context, _info) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield context.pgClient.query('BEGIN');
                        // first delete all the existing PATs in the DB (for now, only allow one at a time)
                        // TODO(patrickdevivo) this may eventually make more sense to handle with unique constraints/indexes in the DB
                        // however the encryption adds a wrinkle to that
                        yield context.pgClient.query("DELETE FROM mergestat.service_auth_credentials WHERE type = 'GITHUB_PAT'");
                        // then do an insert using the add_service_auth_credential helper in the DB
                        yield context.pgClient.query("SELECT mergestat.add_service_auth_credential('GITHUB_PAT', $1, $2)", [args.pat, FUSE_SECRET]);
                        yield context.pgClient.query('COMMIT');
                    }
                    catch (e) {
                        yield context.pgClient.query('ROLLBACK');
                        throw e;
                    }
                    finally {
                        return true;
                    }
                });
            },
        },
    },
});
