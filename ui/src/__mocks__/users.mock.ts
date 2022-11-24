import { AddUserMutation, GetUsersQuery, RemoveUserMutation, UpdateUserPasswordMutation, UpdateUserRoleMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_USER, REMOVE_USER, UPDATE_USER_PASSWORD, UPDATE_USER_ROLE } from 'src/api-logic/graphql/mutations/add-users'
import { LIST_USERS } from 'src/api-logic/graphql/queries/get-users'
import { DynamicValues } from './constants.mock'

// Apollo Mock: User list with data
export const mockUserData: GetUsersQuery = {
  userMgmtPgUsers: {
    nodes: [
      {
        memberof: [
          'mergestat_role_admin'
        ],
        rolname: DynamicValues.mergestatUser,
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

// Apollo Mock: User list with newuser added
export const mockNewUserData: GetUsersQuery = {
  userMgmtPgUsers: {
    nodes: [
      {
        memberof: [
          'mergestat_role_user'
        ],
        rolname: DynamicValues.newUser,
      },
      {
        memberof: [
          'mergestat_role_admin'
        ],
        rolname: DynamicValues.mergestatUser,
      }
    ]
  }
}

export const apolloMockWithNewUser = {
  request: {
    query: LIST_USERS,
    variables: { search: '' }
  },
  result: {
    data: mockNewUserData
  }
}

// Apollo Mock: User list with mergestat_admin edited
export const mockEditUserData: GetUsersQuery = {
  userMgmtPgUsers: {
    nodes: [
      {
        memberof: [
          'mergestat_role_readonly'
        ],
        rolname: DynamicValues.mergestatUser,
      }
    ]
  }
}

export const apolloMockWithEditedUser = {
  request: {
    query: LIST_USERS,
    variables: { search: '' }
  },
  result: {
    data: mockEditUserData
  }
}

// Apollo Mock: User list without data
export const mockUserNoData: GetUsersQuery = {
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

// Apollo Mock: Searching 'newuser' user
export const mockUserSearch: GetUsersQuery = {
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

// Apollo Mock: Add user
export const mockAddUser: AddUserMutation = {
  userMgmtAddUser: {
    clientMutationId: null,
    integer: 1
  }
}

export const apolloMockAddUser = {
  request: {
    query: ADD_USER,
    variables: {
      username: DynamicValues.newUser,
      password: DynamicValues.newUser,
      role: 'USER'
    }
  },
  result: {
    data: mockAddUser
  }
}

// Apollo Mock: Edit user Role
export const mockEditUserRole: UpdateUserRoleMutation = {
  userMgmtSetUserRole: {
    clientMutationId: null,
    integer: 1
  }
}

export const apolloMockEditUserRole = {
  request: {
    query: UPDATE_USER_ROLE,
    variables: {
      username: DynamicValues.mergestatUser,
      role: 'READ_ONLY'
    }
  },
  result: {
    data: mockEditUserRole
  }
}

// Apollo Mock: Edit user Password
export const mockEditUserPassword: UpdateUserPasswordMutation = {
  userMgmtUpdateUserPassword: {
    clientMutationId: null,
    integer: 1
  }
}

export const apolloMockEditUserPassword = {
  request: {
    query: UPDATE_USER_PASSWORD,
    variables: {
      username: DynamicValues.mergestatUser,
      password: DynamicValues.newUser,
    }
  },
  result: {
    data: mockEditUserPassword
  }
}

// Apollo Mock: Remove user
export const mockRemoveUser: RemoveUserMutation = {
  userMgmtRemoveUser: {
    clientMutationId: null,
    integer: 1
  }
}

export const apolloMockRemoveUser = {
  request: {
    query: REMOVE_USER,
    variables: {
      username: DynamicValues.newUser
    }
  },
  result: {
    data: mockRemoveUser
  }
}
