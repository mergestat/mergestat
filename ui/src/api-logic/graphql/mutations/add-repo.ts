import { gql } from '@apollo/client'

const ADD_REPO = gql`
  mutation addRepo($repo: String!, $provider: UUID!) {
    createRepo(input: {repo: {repo: $repo, provider: $provider}}) {
      repo {
        id
        repo
      }
    }
  }
`
const AUTO_IMPORT_REPOS = gql`
  mutation addRepoImport($settings: JSON!, $provider: UUID!) {
    createRepoImport(input: {repoImport: {settings: $settings, provider: $provider}}) {
      repoImport {
        id
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
