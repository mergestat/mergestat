import { gql } from '@apollo/client'

const ADD_REPO = gql`
  mutation addRepo($repo: String!, $isGithub: Boolean!) {
    createRepo(input: {repo: {repo: $repo, isGithub: $isGithub}}) {
      repo {
        id,
        repo
      }
    }
  }
`
export default ADD_REPO
