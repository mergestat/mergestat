import { SetGithubPatMutation } from 'src/api-logic/graphql/generated/schema'
import SET_PAT from 'src/api-logic/graphql/mutations/set-pat'
import { DynamicValues } from './repos.mock'

export const mockSetPAT: SetGithubPatMutation = {
  replaceGitHubPAT: true
}

export const apolloMockSetPAT = {
  request: {
    query: SET_PAT,
    variables: { pat: `${DynamicValues.validPAT}` }
  },
  result: {
    data: mockSetPAT
  }
}
