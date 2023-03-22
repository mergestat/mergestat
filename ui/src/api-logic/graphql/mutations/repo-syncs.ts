import { gql } from '@apollo/client'

const ADD_CONTAINER_SYNC = gql`
  mutation addContainerSync($name: String!, $url: String!, $version: String!) {
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

const UPDATE_CONTAINER_SYNC = gql`
  mutation updateContainerSync($id: UUID!, $name: String, $description: String, $url: String, $version: String, $parameters: JSON) {
    updateContainerImage(
      input: {patch: {name: $name, description: $description, url: $url, version: $version, parameters: $parameters}, id: $id}
    ) {
      containerImage {
        id
        name
        description
        url
        version
        parameters
      }
    }
  }
`

const REMOVE_CONTAINER_SYNC = gql`
  mutation removeContainerSync($id: UUID!) {
    deleteContainerImage(input: {id: $id}) {
      deletedContainerImageNodeId
    }
  }
`

export { ADD_CONTAINER_SYNC, UPDATE_CONTAINER_SYNC, REMOVE_CONTAINER_SYNC }
