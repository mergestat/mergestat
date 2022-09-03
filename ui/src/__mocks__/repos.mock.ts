import { faker } from '@faker-js/faker'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import GET_REPOS from 'src/api-logic/graphql/queries/get-repos.query'
import { SYNC_REPO_METHOD } from 'src/utils/constants'

export enum DynamicValues {
  urlGithub = 'https://github.com/',
  angular = 'angular',
  newRepoToAdd = 'mergestat/docs',
  existingRepo = 'mergestat/mergestat',
  validPAT = 'ghp_cJYwtBb8DbdXNYAw3wegVcTFDYJQhu0QpmCQ',
  invalidPAT = 'gho_cJYwtBb8DbdXNYAw3wegVcTFDYJQhpmCQ',
  autoImportUser = 'gdcanonn'
}

export const mockRepoData: GetReposQuery = {
  repos: {
    totalCount: 2,
    nodes: [
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/angular/angular',
        createdAt: faker.date.recent(2),
        isGithub: true,
        tags: [

        ],
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
        repo: 'https://github.com/mergestat/mergestat',
        createdAt: faker.date.recent(10),
        isGithub: true,
        tags: [

        ],
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
  repos: {
    totalCount: 2,
    nodes: [
      {
        id: faker.datatype.uuid(),
        repo: 'https://github.com/angular/angular',
        createdAt: faker.date.recent(2),
        isGithub: true,
        tags: [

        ],
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

export const apolloMockReposWithData = {
  request: {
    query: GET_REPOS,
    variables: { search: '' }
  },
  result: {
    data: mockRepoData
  }
}

export const apolloMockJustAngularRepo = {
  request: {
    query: GET_REPOS,
    variables: { search: DynamicValues.angular }
  },
  result: {
    data: mockJustAngularRepo
  }
}

export const apolloMockReposEmpty = {
  request: {
    query: GET_REPOS,
    variables: { search: '' }
  },
  result: {
    data: undefined
  }
}
