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
const AUTO_IMPORT_REPOS = gql`
  mutation addRepoImport($type: String!, $settings: JSON!) {
    createRepoImport(input: {repoImport: {type: $type, settings: $settings}}) {
      repoImport {
        id
        type
        settings
      }
    }
  }
`

export { ADD_REPO, AUTO_IMPORT_REPOS }
