import { gql } from '@apollo/client'

const ADD_REPO_SYNC = gql`
  mutation addRepoSync($name: String!, $url: String!, $version: String!) {
    createContainerImage(
      input: {containerImage: {name: $name, url: $url, version: $version}}
    ) {
      containerImage {
        id
        name
      }
    }
  }
`

const REMOVE_REPO_SYNC = gql`
  mutation removeRepoSync($id: UUID!) {
    deleteContainerImage(input: {id: $id}) {
      deletedContainerImageNodeId
    }
  }
`

export { ADD_REPO_SYNC, REMOVE_REPO_SYNC }
