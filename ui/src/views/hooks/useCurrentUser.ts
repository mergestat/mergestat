import { useQuery } from '@apollo/client'
import { CurrentUserQuery } from 'src/api-logic/graphql/generated/schema'
import { CURRENT_USER } from 'src/api-logic/graphql/queries/auth'

const useCurrentUser = () => {
  const { loading, data } = useQuery<CurrentUserQuery>(CURRENT_USER, { fetchPolicy: 'no-cache' })
  return { loading, data }
}

export default useCurrentUser
