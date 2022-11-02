import { faker } from '@faker-js/faker'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPOS } from 'src/api-logic/graphql/queries/get-repos.query'
import { SYNC_REPO_METHOD } from 'src/utils/constants'
import { DynamicValues } from './constants.mock'

export const mockRepoData: GetReposQuery = {
  serviceAuthCredentials: {
    totalCount: 1,
  },
  repoImports: {
    totalCount: 1
  },
  repos: {
    totalCount: 2,
    nodes: [
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/angular/angular',
        createdAt: faker.date.recent(2),
        isGithub: true,
        tags: [],
        repoImport: {
          type: SYNC_REPO_METHOD.GH_USER,
          settings: { user: DynamicValues.autoImportUser }
        },
        repoSyncs: {
          totalCount: 0,
          nodes: [

          ],
        },
      },
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/mergestat/mergestat-lite',
        createdAt: faker.date.recent(10),
        isGithub: true,
        tags: [],
        repoImport: null,
        repoSyncs: {
          totalCount: 5,
          nodes: [
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_COMMIT_STATS',
              repoSyncQueues: {
                nodes: [
                  {
                    id: faker.random.numeric(4),
                    status: 'DONE',
                    createdAt: faker.date.recent(9),
                  }
                ],
              },
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_FILES',
              repoSyncQueues: {
                nodes: [
                  {
                    id: faker.random.numeric(4),
                    status: 'RUNNING',
                    createdAt: faker.date.recent(),
                  }
                ],
              },
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GITHUB_REPO_METADATA',
              repoSyncQueues: {
                nodes: [
                  {
                    id: faker.random.numeric(4),
                    status: 'DONE',
                    createdAt: faker.date.recent(8),
                  }
                ],
              },
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_REFS',
              repoSyncQueues: {
                nodes: [
                  {
                    id: faker.random.numeric(4),
                    status: 'DONE',
                    createdAt: faker.date.recent(7),
                  }
                ],
              },
            },
            {
              id: faker.datatype.uuid(),
              syncType: 'GIT_COMMITS',
              repoSyncQueues: {
                nodes: [
                  {
                    id: faker.random.numeric(4),
                    status: 'DONE',
                    createdAt: faker.date.recent(6),
                  }
                ],
              },
            }
          ],
        },
      }
    ],
  }
}

export const mockJustAngularRepo: GetReposQuery = {
  serviceAuthCredentials: {
    totalCount: 1,
  },
  repoImports: null,
  repos: {
    totalCount: 2,
    nodes: [
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/angular/angular',
        createdAt: faker.date.recent(2),
        isGithub: true,
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
  serviceAuthCredentials: {
    totalCount: 1,
  },
  repoImports: null,
  repos: {
    totalCount: 0,
    nodes: []
  }
}

export const mockNoGitHubPat = (gitHubPat: boolean): GetReposQuery => ({
  serviceAuthCredentials: {
    totalCount: gitHubPat ? 1 : 0,
  },
  repoImports: null,
  repos: {
    totalCount: 0,
    nodes: []
  }
})

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

export const apolloMockReposEmptyNoGitHubPat = {
  request: {
    query: GET_REPOS,
    variables: { search: '', first: 20, offset: 0 }
  },
  result: {
    data: mockNoGitHubPat(false)
  }
}

export const apolloMockReposEmptyGitHubPat = {
  request: {
    query: GET_REPOS,
    variables: { search: '', first: 20, offset: 0 }
  },
  result: {
    data: mockNoGitHubPat(true)
  }
}
