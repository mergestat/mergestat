import { UserData } from 'src/@types'
import { USER_TYPE } from 'src/utils/constants'
import { UsersQuery } from '../graphql/generated/schema'

/**
 * Method which iterate each user and map it to UserData to be shown in table
 * @param data User list that comes from data base in UserData format
 * @returns User list from data base mapped to RepoImportData list
 */
const mapToUserData = (data: UsersQuery | undefined): Array<UserData> => {
  const mappedData: Array<UserData> = []

  data?.userMgmtPgUsers?.nodes.forEach((usr) => {
    if (usr.memberof && usr.memberof.length > 0) {
      // Consolidated User info
      const userInfo: UserData = {
        name: usr.rolname || '',
        role: getRol(usr.memberof)
      }
      mappedData.push(userInfo)
    }
  })

  return mappedData
}

const getRol = (rol: Array<string | null>) => {
  switch (rol[0]) {
    case 'mergestat_role_admin':
      return USER_TYPE.ADMIN
    case 'mergestat_role_user':
      return USER_TYPE.USER
    default:
      return USER_TYPE.READ_ONLY
  }
}

export { mapToUserData }
