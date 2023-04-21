import { gql } from '@apollo/client'

const GET_REPO_AUTO_IMPORTS = gql`
  query getRepoImports($idProvider: UUID!) {
    repoImports(orderBy: CREATED_AT_DESC, condition: {provider: $idProvider}) {
      totalCount
      nodes {
        id
        settings
        lastImport
        importStatus
        importError
        provider: providerByProvider {
          id
          name
          vendor
          settings
        }
        repos {
          totalCount
        }
      }
    }
  }
`

const GET_REPO_MANUAL_IMPORTS = gql`
  query getRepoManualImports($idProvider: UUID!, $search: String!, $first: Int, $offset: Int) {
    repos(
      orderBy: [CREATED_AT_DESC, REPO_DESC]
      filter: {repo: {includes: $search}}
      condition: {provider: $idProvider, repoImportId: null}
      first: $first
      offset: $offset
    )
      {
      totalCount
      nodes {
        id
        repo
        settings
        provider: providerByProvider {
          id
          name
          vendor
          settings
        }
      }
    }
  }
`

const GET_ALL_REPO_MANUAL_IMPORTS = gql`
  query getAllRepoManualImports($idProvider: UUID!) {
    repos(condition: {provider: $idProvider, repoImportId: null}) {
      totalCount
    }
  }
`

const GET_REPO_IMPORT = gql`
  query getRepoImport($id: UUID!) {
    repoImport(id: $id) {
      id
      lastImport
      settings
      provider: providerByProvider {
        id
        name
        vendor
        settings
      }
    }
    repoSyncTypes {
      nodes {
        type
        description
        shortName
      }
    }
  }
`

const GET_REPO_IMPORT_CONTAINER = gql`
  query getRepoImportContainer($id: UUID!) {
    repoImport(id: $id) {
      id
      lastImport
      settings
      provider: providerByProvider {
        id
        name
        vendor
        settings
      }
    }
    containerImages(orderBy: NAME_ASC) {
      totalCount
      nodes {
        id
        name
        description
      }
    }
  }
`

export {
  GET_REPO_AUTO_IMPORTS,
  GET_ALL_REPO_MANUAL_IMPORTS,
  GET_REPO_MANUAL_IMPORTS,
  GET_REPO_IMPORT,
  GET_REPO_IMPORT_CONTAINER
}
