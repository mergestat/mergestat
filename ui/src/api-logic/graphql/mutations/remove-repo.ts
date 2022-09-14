import { gql } from '@apollo/client'

const REMOVE_REPO = gql`
  mutation removeRepo($id: UUID!) {
    deleteRepo(input: {id: $id}) {
      deletedRepoNodeId
    }
  }
`
export default REMOVE_REPO
