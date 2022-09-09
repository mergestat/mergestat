import { faker } from '@faker-js/faker'
import { AddRepoImportMutation, AddRepoMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_REPO, AUTO_IMPORT_REPOS } from 'src/api-logic/graphql/mutations/add-repo'
import { SYNC_REPO_METHOD } from 'src/utils/constants'
import { DynamicValues } from './constants.mock'

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

export const mockAutoImportUser: AddRepoImportMutation = {
  createRepoImport: {
    repoImport: {
      id: faker.datatype.uuid(),
      type: `${SYNC_REPO_METHOD.GH_USER}`,
      settings: { user: DynamicValues.autoImportUser }
    },
  }
}

export const apolloMockAutoImportUser = {
  request: {
    query: AUTO_IMPORT_REPOS,
    variables: { type: SYNC_REPO_METHOD.GH_USER, settings: { user: DynamicValues.autoImportUser } }
  },
  result: {
    data: mockAutoImportUser
  }
}
