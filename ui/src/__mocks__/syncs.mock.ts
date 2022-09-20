import { faker } from '@faker-js/faker'
import { AddSyncTypeMutation, GetRepoSyncsQuery, RemoveRepoMutation, SyncMutation, UpdateTagsMutation } from 'src/api-logic/graphql/generated/schema'
import { REMOVE_REPO, UPDATE_TAGS } from 'src/api-logic/graphql/mutations/repos'
import { ADD_SYNC_TYPE, SYNC_NOW } from 'src/api-logic/graphql/mutations/syncs'
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

const syncsTypesArray = [
  {
    type: 'GIT_COMMITS',
    description: 'Retrieves the commit history of a repo',
    shortName: 'Git Commits'
  },
  {
    type: 'GIT_COMMIT_STATS',
    description: 'Retrieves commit stats for a repo',
    shortName: 'Git Commit Stats'
  },
  {
    type: 'GIT_FILES',
    description: 'Retrieves files (content and paths) of a git repo',
    shortName: 'Git Files'
  },
  {
    type: 'GITHUB_PR_COMMITS',
    description: 'Retrieves commits for all pull requests in a GitHub repo',
    shortName: 'GitHub PR Commits'
  },
  {
    type: 'GITHUB_PR_REVIEWS',
    description: 'Retrieves the reviews of all pull requests in a GitHub repo',
    shortName: 'GitHub PR Reviews'
  },
  {
    type: 'GITHUB_REPO_ISSUES',
    description: 'Retrieves all the issues of a GitHub repo',
    shortName: 'GitHub Repo Issues'
  },
  {
    type: 'GITHUB_REPO_METADATA',
    description: 'Retrieves metadata about a GitHub repo',
    shortName: 'GitHub Repo Metadata'
  },
  {
    type: 'GITHUB_REPO_PRS',
    description: 'Retrieves all the pull requests of a GitHub repo',
    shortName: 'GitHub Repo Pull Requests'
  },
  {
    type: 'GITHUB_REPO_STARS',
    description: 'Retrieves all stargazers of a GitHub repo',
    shortName: 'GitHub Repo Stars'
  },
  {
    type: 'GIT_REFS',
    description: 'Retrieves all the refs of a git repo',
    shortName: 'Git Refs'
  }
]

export const mockSyncsTypesData = (runningSync: boolean, autoImported = false): GetRepoSyncsQuery => ({
  serviceAuthCredentials: {
    totalCount: 1,
  },
  repo: {
    id: DynamicValues.repoId,
    repo: 'https://github.com/mergestat/mergestat',
    isGithub: true,
    tags: ['github', 'mergestat', 'syncs'],
    repoImport: autoImported ? { type: 'GITHUB_USER', settings: { user: 'gdcanonn' } } : null,
    repoSyncs: {
      nodes: [
        {
          id: DynamicValues.syncTypeGitCommitStatId,
          syncType: 'GIT_COMMIT_STATS',
          repoSyncQueues: {
            nodes: queueArray(false)
          }
        },
        {
          id: DynamicValues.syncTypeGitFilesId,
          syncType: 'GIT_FILES',
          repoSyncQueues: {
            nodes: queueArray(runningSync)
          }
        }
      ],
    },
  },
  repoSyncTypes: {
    nodes: syncsTypesArray
  }
})

export const mockRemoveRepo: RemoveRepoMutation = {
  deleteRepo: {
    deletedRepoNodeId: 'WyJyZXBvcyIsIjcyMTFiMmVjLTBlZTktNDZjNy1hMjQyLTU2Y2Q1NGU0MmVmYiJd',
  }
}

export const mockAddTags: UpdateTagsMutation = {
  updateRepo: {
    repo: {
      id: DynamicValues.repoId,
      tags: ['github', 'mergestat', 'syncs', 'new tag']
    }
  }
}

// Apollo Mock: Sync Types
export const apolloMockSyncsTypesData = {
  request: {
    query: GET_REPO_SYNCS,
    variables: { id: DynamicValues.repoId }
  },
  result: {
    data: mockSyncsTypesData(false)
  }
}

// Apollo Mock: Sync Types with a sync running
export const apolloMockSyncsTypesRunningData = {
  request: {
    query: GET_REPO_SYNCS,
    variables: { id: DynamicValues.repoId }
  },
  result: {
    data: mockSyncsTypesData(true)
  }
}

// Apollo Mock: Sync now
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

// Apollo Mock: Sync now after a sync type addition
export const mockNextSyncNow: SyncMutation = {
  createRepoSyncQueue: {
    repoSyncQueue: {
      id: faker.random.numeric(4),
      status: 'QUEUED',
      createdAt: faker.date.recent(),
    },
  }
}

export const apolloMockNextSyncNow = {
  request: {
    query: SYNC_NOW,
    variables: { syncId: DynamicValues.newSyncTypeId }
  },
  result: {
    data: mockNextSyncNow
  }
}

// Apollo Mock: Add sync type
export const mockAddSyncType: AddSyncTypeMutation = {
  createRepoSync: {
    repoSync: {
      id: DynamicValues.newSyncTypeId,
      syncType: 'GIT_COMMITS',
    },
  }
}

export const apolloMockAddSyncType = {
  request: {
    query: ADD_SYNC_TYPE,
    variables: { repoId: DynamicValues.repoId, syncType: 'GIT_COMMITS' }
  },
  result: {
    data: mockAddSyncType
  }
}

// Apollo Mock: Remove a repository
export const apolloMockRemoveRepo = {
  request: {
    query: REMOVE_REPO,
    variables: { id: DynamicValues.repoId }
  },
  result: {
    data: mockRemoveRepo
  }
}

// Apollo Mock: Add a tag to a repository
export const apolloMockAddTag = {
  request: {
    query: UPDATE_TAGS,
    variables: { id: DynamicValues.repoId, tags: ['github', 'mergestat', 'syncs', 'new tag'] }
  },
  result: {
    data: mockAddTags
  }
}
