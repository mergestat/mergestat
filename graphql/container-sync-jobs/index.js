"use strict"
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    var desc = Object.getOwnPropertyDescriptor(m, k)
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k] } }
    }
    Object.defineProperty(o, k2, desc)
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    o[k2] = m[k]
}))
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v })
}) : function (o, v) {
    o["default"] = v
})
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
        function rejected(value) { try { step(generator["throw"](value)) } catch (e) { reject(e) } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
        step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
}
Object.defineProperty(exports, "__esModule", { value: true })
const graphile_utils_1 = require("graphile-utils")
const bluebird = __importStar(require("bluebird"))
module.exports = (0, graphile_utils_1.makeExtendSchemaPlugin)({
    typeDefs: (0, graphile_utils_1.gql)`
    extend type Mutation {
      bulkEnableSync(image: UUID!, provider: UUID!): Boolean
      bulkDisableSync(image: UUID!, provider: UUID!): Boolean
    }
  `,
    resolvers: {
        Mutation: {
            bulkEnableSync(_parent, args, context, _info) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { pgClient: pg } = context
                    yield pg.query("SAVEPOINT bulk_enable_sync")
                    try {
                        const { rows: repos } = yield pg.query('SELECT * FROM public.repos WHERE repos.provider = $1', [args.provider])
                        const createSync = `
            INSERT INTO mergestat.container_syncs (repo_id, image_id) VALUES ($1, $2)
              ON CONFLICT (repo_id, image_id) DO UPDATE SET repo_id = EXCLUDED.repo_id, image_id = EXCLUDED.image_id
            RETURNING id`
                        // we iterate over each repository, creating a sync and a schedule
                        yield bluebird.mapSeries(repos, (repo) => __awaiter(this, void 0, void 0, function* () {
                            const { rows: syncs } = yield pg.query(createSync, [repo.id, args.image])
                            yield pg.query('INSERT INTO mergestat.container_sync_schedules (sync_id) VALUES ($1) ON CONFLICT DO NOTHING', [syncs[0].id])
                        }))
                        return true
                    }
                    catch (e) {
                        yield pg.query("ROLLBACK TO SAVEPOINT bulk_enable_sync")
                        throw e
                    }
                    finally {
                        yield pg.query("RELEASE SAVEPOINT bulk_enable_sync")
                    }
                })
            },
            bulkDisableSync(_parent, args, context, _info) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { pgClient: pg } = context
                    yield pg.query("SAVEPOINT bulk_disable_sync")
                    try {
                        yield pg.query(`DELETE FROM mergestat.container_sync_schedules WHERE sync_id IN (SELECT id FROM mergestat.container_syncs WHERE image_id = $1 AND repo_id IN (SELECT id FROM public.repos WHERE provider = $2))`, [args.image, args.provider])
                        return true
                    }
                    catch (e) {
                        yield pg.query("ROLLBACK TO SAVEPOINT bulk_disable_sync")
                        throw e
                    }
                    finally {
                        yield pg.query("RELEASE SAVEPOINT bulk_disable_sync")
                    }
                })
            }
        },
    },
})
