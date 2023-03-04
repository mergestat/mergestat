import { gql } from '@apollo/client'

const ADD_GIT_SOURCE = gql`
  mutation addGitSource($name: String!, $settings: JSON!, $vendor: String!) {
    createProvider(
      input: {provider: {name: $name, vendor: $vendor, settings: $settings}}
    ) {
      provider {
        id
        name
      }
    }
  }
`

const UPDATE_GIT_SOURCE = gql`
  mutation updateGitSource($idProvider: UUID!, $name: String!, $description: String) {
    updateProvider(
      input: {patch: {name: $name, description: $description}, id: $idProvider}
    ) {
      provider {
        id
        name
        description
      }
    }
  }
`

const REMOVE_GIT_SOURCE = gql`
  mutation removeGitSource($idProvider: UUID!) {
    deleteProvider(input: {id: $idProvider}) {
      deletedProviderNodeId
    }
  }
`

export { ADD_GIT_SOURCE, UPDATE_GIT_SOURCE, REMOVE_GIT_SOURCE }
