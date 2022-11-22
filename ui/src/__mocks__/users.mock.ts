import { UsersQuery } from 'src/api-logic/graphql/generated/schema'
import { LIST_USERS } from 'src/api-logic/graphql/queries/users'

// User list with data
export const mockUserData: UsersQuery = {
  userMgmtPgUsers: {
    nodes: [
      {
        memberof: [
          'mergestat_role_admin'
        ],
        rolname: 'mergestat_admin',
      }
    ]
  }
}

export const apolloMockUsersWithData = {
  request: {
    query: LIST_USERS,
    variables: { search: '' }
  },
  result: {
    data: mockUserData
  }
}

// User list without data
export const mockUserNoData: UsersQuery = {
  userMgmtPgUsers: {
    nodes: []
  }
}

export const apolloMockUsersNoData = {
  request: {
    query: LIST_USERS,
    variables: { search: '' }
  },
  result: {
    data: mockUserNoData
  }
}

// Searching 'newuser' user
export const mockUserSearch: UsersQuery = {
  userMgmtPgUsers: {
    nodes: [
      {
        memberof: [
          'mergestat_role_admin'
        ],
        rolname: 'newuser',
      }
    ]
  }
}

export const apolloMockUserSearch = {
  request: {
    query: LIST_USERS,
    variables: { search: 'newuser' }
  },
  result: {
    data: mockUserSearch
  }
}
