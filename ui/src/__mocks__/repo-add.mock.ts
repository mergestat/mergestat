import { faker } from '@faker-js/faker'
import { AddRepoMutation } from 'src/api-logic/graphql/generated/schema'
import ADD_REPO from 'src/api-logic/graphql/mutations/add-repo'
import { DynamicValues } from './repos.mock'

export const mockRepoSatus: AddRepoMutation = {
  createRepo: {
    repo: {
      id: faker.datatype.uuid(),
      repo: `${DynamicValues.urlGithub}${DynamicValues.newRepoToAdd}`,
    },
  }
}

export const apolloMockAddNewRepo = {
  request: {
    query: ADD_REPO,
    variables: { repo: `${DynamicValues.urlGithub}${DynamicValues.newRepoToAdd}`, isGithub: true }
  },
  result: {
    data: mockRepoSatus
  }
}

export const apolloMockAddExistingRepo = {
  request: {
    query: ADD_REPO,
    variables: { repo: `${DynamicValues.urlGithub}${DynamicValues.existingRepo}`, isGithub: true }
  },
  error: new Error('duplicate key value violates unique constraint "repos_repo_ref_unique"')
}
