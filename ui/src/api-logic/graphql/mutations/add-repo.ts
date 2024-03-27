import { gql } from '@apollo/client'

const ADD_REPO = gql`
  mutation addRepo($repo: String!, $idProvider: UUID!) {
    createRepo(input: {repo: {repo: $repo, provider: $idProvider}}) {
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

const AUTO_IMPORT_REPOS_CONTAINER = gql`
  mutation addRepoImportContainer($providerId: UUID!, $importType: String!, $importTypeName: String!, $defaultContainerImageIds: [UUID]!, $baseUrl: String!) {
    addRepoImport(
      input: {providerId: $providerId, importType: $importType, importTypeName: $importTypeName, defaultContainerImageIds: $defaultContainerImageIds, baseUrl: $baseUrl}
    ) {
      boolean
    }
  }
`

const UPDATE_AUTO_IMPORT_REPOS_CONTAINER = gql`
  mutation updateRepoImportContainer($repoImportId: UUID!, $defaultContainerImageIds: [UUID]!) {
    updateRepoImportDefaultContainerImages(
      input: {repoImportId: $repoImportId, defaultContainerImageIds: $defaultContainerImageIds}
    ) {
      boolean
    }
  }
`

export {
  ADD_REPO, AUTO_IMPORT_REPOS,
  UPDATE_AUTO_IMPORT_REPOS,
  AUTO_IMPORT_REPOS_CONTAINER,
  UPDATE_AUTO_IMPORT_REPOS_CONTAINER
}
