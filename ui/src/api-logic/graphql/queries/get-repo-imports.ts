import { gql } from '@apollo/client'

const GET_REPO_IMPORTS = gql`
  query getRepoImports {
    repoImports(orderBy: CREATED_AT_DESC) {
      totalCount
      nodes {
        id
        type
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
      type
      lastImport
      settings
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
