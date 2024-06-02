import { gql } from '@apollo/client'

const ADD_SAVED_EXPLORE = gql`
  mutation addSavedExplore($createdBy: String!, $createdAt: Datetime!, $name: String!, $description: String!, $metadata: JSON) {
    createSavedExplore(
      input: {savedExplore: {createdBy: $createdBy, createdAt: $createdAt, name: $name, description: $description, metadata: $metadata}}
    ) {
      savedExplore {
        id
        name
      }
    }
  }
`

const UPDATE_SAVED_EXPLORE = gql`
  mutation updateSavedExplore($id: UUID!, $name: String, $description: String, $metadata: JSON) {
    updateSavedExplore(
      input: {patch: {name: $name, description: $description, metadata: $metadata}, id: $id}
    ) {
      savedExplore {
        id
        name
        description
        metadata
      }
    }
  }
`

const REMOVE_SAVED_EXPLORE = gql`
  mutation removeSavedExplore($id: UUID!) {
    deleteSavedExplore(input: {id: $id}) {
      deletedSavedExploreNodeId
    }
  }
`

export { ADD_SAVED_EXPLORE, UPDATE_SAVED_EXPLORE, REMOVE_SAVED_EXPLORE }
