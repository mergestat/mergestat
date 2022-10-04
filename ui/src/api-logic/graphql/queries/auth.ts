import { gql } from '@apollo/client'

const CURRENT_USER = gql`
  query currentUser {
    currentMergeStatUser
  }
`
export default CURRENT_USER
