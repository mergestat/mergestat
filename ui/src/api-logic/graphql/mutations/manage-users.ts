import { gql } from '@apollo/client'

const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $role: String!) {
    userMgmtAddUser(input: {username: $username, password: $password, role: $role}) {
      clientMutationId
      integer
    }
  }
`

const UPDATE_USER_ROLE = gql`
  mutation updateUserRole($username: String!, $role: String!) {
    userMgmtSetUserRole(input: {username: $username, role: $role}) {
      clientMutationId
      integer
    }
  }
`

const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($username: String!, $password: String!) {
    userMgmtUpdateUserPassword(input: {username: $username, password: $password}) {
      clientMutationId
      integer
    }
  }
`

const REMOVE_USER = gql`
  mutation removeUser($username: String!) {
    userMgmtRemoveUser(input: {username: $username}) {
      clientMutationId
      integer
    }
  }
`

export { ADD_USER, UPDATE_USER_ROLE, UPDATE_USER_PASSWORD, REMOVE_USER }
