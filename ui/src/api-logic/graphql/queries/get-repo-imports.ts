import { gql } from '@apollo/client'

const GET_REPO_IMPORTS = gql`
  query getRepoImports {
    repoImports(orderBy: CREATED_AT_DESC) {
      totalCount
      nodes {
        type
        settings
        lastImport
      }
    }
  }
`
export default GET_REPO_IMPORTS
