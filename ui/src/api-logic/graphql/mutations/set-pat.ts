import { gql } from '@apollo/client'

const SET_PAT = gql`
  mutation setGithubPAT($pat: String!) {
    replaceGitHubPAT(pat: $pat)
  }
`
export default SET_PAT
