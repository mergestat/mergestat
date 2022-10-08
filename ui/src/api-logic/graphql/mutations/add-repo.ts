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

const UPDATE_AUTO_IMPORT_REPOS = gql`
  mutation updateRepoImport($id: UUID!, $settings: JSON!) {
    updateRepoImport(input: {patch: {settings: $settings}, id: $id}) {
      repoImport {
        id
        settings
      }
    }
  }
`

export { ADD_REPO, AUTO_IMPORT_REPOS, UPDATE_AUTO_IMPORT_REPOS }
