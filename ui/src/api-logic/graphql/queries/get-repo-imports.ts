import { gql } from '@apollo/client'

const GET_REPO_IMPORTS = gql`
  query getRepoImports {
    repoImports(orderBy: CREATED_AT_DESC) {
      totalCount
      nodes {
        id
        settings
        lastImport
        importStatus
      }
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

export { GET_REPO_IMPORTS, GET_REPO_IMPORT }
