import { faker } from '@faker-js/faker'
import { GetRepoSyncsQuery, SyncMutation } from 'src/api-logic/graphql/generated/schema'
import SYNC_NOW from 'src/api-logic/graphql/mutations/syncs'
import GET_REPO_SYNCS from 'src/api-logic/graphql/queries/get-repo-syncs.query'
import { DynamicValues } from './constants.mock'

const queueArray = (runningSync: boolean) => ([
  {
    id: faker.random.numeric(4),
    status: runningSync ? 'RUNNING' : 'DONE',
    startedAt: '2022-09-09T04:02:27.829372+00:00',
    doneAt: '2022-09-09T04:02:30.766877+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-09T03:52:26.963527+00:00',
    doneAt: '2022-09-09T03:52:29.089611+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-09T03:42:29.214305+00:00',
    doneAt: '2022-09-09T03:42:31.311085+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T23:41:32.543022+00:00',
    doneAt: '2022-09-08T23:41:34.569006+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T22:12:26.06663+00:00',
    doneAt: '2022-09-08T22:12:28.308214+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T22:02:27.889154+00:00',
    doneAt: '2022-09-08T22:02:30.127101+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:59:29.08828+00:00',
    doneAt: '2022-09-08T21:59:31.104441+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:59:05.684596+00:00',
    doneAt: '2022-09-08T21:59:07.818641+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:58:27.095911+00:00',
    doneAt: '2022-09-08T21:58:29.372644+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:55:29.521571+00:00',
    doneAt: '2022-09-08T21:55:32.780347+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:52:26.943015+00:00',
    doneAt: '2022-09-08T21:52:29.132106+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:42:28.480305+00:00',
    doneAt: '2022-09-08T21:42:30.688397+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:32:27.51857+00:00',
    doneAt: '2022-09-08T21:32:29.59159+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:22:28.877662+00:00',
    doneAt: '2022-09-08T21:22:30.927433+00:00',
  },
  {
    id: faker.random.numeric(4),
    status: 'DONE',
    startedAt: '2022-09-08T21:12:31.069824+00:00',
    doneAt: '2022-09-08T21:12:33.336676+00:00',
  }
])

export const mockSyncsTypesData = (runningSync: boolean): GetRepoSyncsQuery => ({
  repo: {
    id: faker.datatype.uuid(),
    repo: 'https://github.com/mergestat/mergestat',
    isGithub: true,
    repoSyncs: {
      nodes: [
        {
          id: DynamicValues.syncTypeGitCommitStatId,
          syncType: 'GIT_COMMIT_STATS',
          repoSyncTypeBySyncType: {
            description: 'Retrieves commit stats for a repo'
          },
          repoSyncQueues: {
            nodes: queueArray(false)
          }
        },
        {
          id: DynamicValues.syncTypeGitFilesId,
          syncType: 'GIT_FILES',
          repoSyncTypeBySyncType: {
            description: 'Retrieves files (content and paths) of a git repo'
          },
          repoSyncQueues: {
            nodes: queueArray(runningSync)
          }
        }
      ],
    },
  }
}
)

export const apolloMockSyncsTypesData = {
  request: {
    query: GET_REPO_SYNCS,
    variables: { id: DynamicValues.syncTypeId }
  },
  result: {
    data: mockSyncsTypesData(false)
  }
}

export const apolloMockSyncsTypesRunningData = {
  request: {
    query: GET_REPO_SYNCS,
    variables: { id: DynamicValues.syncTypeId }
  },
  result: {
    data: mockSyncsTypesData(true)
  }
}

export const mockSyncNow: SyncMutation = {
  createRepoSyncQueue: {
    repoSyncQueue: {
      id: faker.random.numeric(4),
      status: 'QUEUED',
      createdAt: faker.date.recent(),
    },
  }
}

export const apolloMockSyncNow = {
  request: {
    query: SYNC_NOW,
    variables: { syncId: DynamicValues.syncTypeGitFilesId }
  },
  result: {
    data: mockSyncNow
  }
}
