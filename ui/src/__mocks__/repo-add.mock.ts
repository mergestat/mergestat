import { faker } from '@faker-js/faker'
import { AddRepoMutation } from 'src/api-logic/graphql/generated/schema'
import ADD_REPO from 'src/api-logic/graphql/mutations/add-repo'
import { DynamicValues } from './repos.mock'

export const mockRepoSatus: AddRepoMutation = {
  createRepo: {
    repo: {
      id: faker.datatype.uuid(),
      repo: 'https://github.com/mergestat/docs',
    },
  }
}

export const apolloMockAddNewRepo = {
  request: {
    query: ADD_REPO,
    variables: { repo: DynamicValues.newRepoToAdd, isGithub: true }
  },
  result: {
    data: mockRepoSatus
  }
}
