import { gql } from '@apollo/client'

const LIST_USERS = gql`
  query Users($search: String) {
    userMgmtPgUsers(
      filter: {rolname: {includes: $search}}
    ) {
      nodes {
        memberof
        rolname
      }
    }
  }
`

export { LIST_USERS }
