import { gql } from '@apollo/client'

const REMOVE_REPO = gql`
  mutation removeRepo($id: UUID!) {
    deleteRepo(input: {id: $id}) {
      deletedRepoNodeId
    }
  }
`

const REMOVE_IMPORT = gql`
  mutation removeImport($id: UUID!) {
    deleteRepoImport(input: {id: $id}) {
      deletedRepoImportNodeId
    }
  }
`

const UPDATE_TAGS = gql`
  mutation updateTags($id: UUID!, $tags: JSON!) {
    updateRepo(input: {id: $id, patch: {tags: $tags}}) {
      repo {
        id
        tags
      }
    }
  }
`

export { REMOVE_REPO, REMOVE_IMPORT, UPDATE_TAGS }
