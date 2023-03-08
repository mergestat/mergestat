import { faker } from '@faker-js/faker'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPOS } from 'src/api-logic/graphql/queries/get-repos'
import { DynamicValues } from './constants.mock'

export const mockRepoData: GetReposQuery = {
  repoImports: {
    totalCount: 1,
    nodes: []
  },
  repos: {
    totalCount: 2,
    nodes: [
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/angular/angular',
        createdAt: faker.date.recent(2),
        tags: [],
        repoImport: {
          settings: { user: DynamicValues.autoImportUser }
        },
        repoSyncs: {
          totalCount: 0,
          nodes: []
        },
      },
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/mergestat/mergestat-lite',
        createdAt: faker.date.recent(10),
        tags: [],
        repoImport: null,
        repoSyncs: {
          totalCount: 5,
          nodes: [
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_COMMIT_STATS',
              lastCompletedRepoSyncQueue: {
                id: faker.random.numeric(4),
                status: 'DONE',
                createdAt: faker.date.recent(9),
                warnings: { totalCount: 0 }
              },
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_FILES',
              lastCompletedRepoSyncQueue: {
                id: faker.random.numeric(4),
                status: 'RUNNING',
                createdAt: faker.date.recent(),
                warnings: { totalCount: 0 }
              }
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GITHUB_REPO_METADATA',
              lastCompletedRepoSyncQueue: {
                id: faker.random.numeric(4),
                status: 'DONE',
                createdAt: faker.date.recent(8),
                warnings: { totalCount: 0 }
              }
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_REFS',
              lastCompletedRepoSyncQueue: {
                id: faker.random.numeric(4),
                status: 'DONE',
                createdAt: faker.date.recent(7),
                warnings: { totalCount: 0 }
              }
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_COMMITS',
              lastCompletedRepoSyncQueue: {
                id: faker.random.numeric(4),
                status: 'DONE',
                createdAt: faker.date.recent(6),
                warnings: { totalCount: 0 }
              }
            }
          ],
        },
      }
    ],
  }
}

export const mockJustAngularRepo: GetReposQuery = {
  repoImports: null,
  repos: {
    totalCount: 2,
    nodes: [
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/angular/angular',
        createdAt: faker.date.recent(2),
        tags: [],
        repoImport: null,
        repoSyncs: {
          totalCount: 0,
          nodes: [

          ],
        },
      },
    ]
  }
}

export const mockWithoutResult: GetReposQuery = {
  repoImports: null,
  repos: {
    totalCount: 0,
    nodes: []
  }
}

export const apolloMockReposWithData = {
  request: {
    query: GET_REPOS,
    variables: { search: '', first: 20, offset: 0 }
  },
  result: {
    data: mockRepoData
  }
}

export const apolloMockJustAngularRepo = {
  request: {
    query: GET_REPOS,
    variables: { search: DynamicValues.angular, first: 20, offset: 0 }
  },
  result: {
    data: mockJustAngularRepo
  }
}

export const apolloMockWithoutResults = {
  request: {
    query: GET_REPOS,
    variables: { search: DynamicValues.weirdSearch, first: 20, offset: 0 }
  },
  result: {
    data: mockWithoutResult
  }
}

export const apolloMockReposEmpty = {
  request: {
    query: GET_REPOS,
    variables: { search: '', first: 20, offset: 0 }
  },
  result: {
    data: undefined
  }
}
