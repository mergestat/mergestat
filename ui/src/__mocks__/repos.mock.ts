import { faker } from '@faker-js/faker'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import GET_REPOS from 'src/api-logic/graphql/queries/get-repos.query'

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
        repoSyncs: {
          totalCount: 5,
          nodes: [
            {
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

export const apolloMockReposWithData = {
  request: {
    query: GET_REPOS
  },
  result: {
    data: mockRepoData
  }
}

export const apolloMockReposEmpty = {
  request: {
    query: GET_REPOS
  },
  result: {
    data: undefined
  }
}
