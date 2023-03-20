
import { GET_QUERY_HISTORY } from 'src/api-logic/graphql/queries/get-query-history'
import { useQuery } from '@apollo/client'
import { GetQueryHistoryQuery } from 'src/api-logic/graphql/generated/schema'

const useQueryHistory = () => {
  const { loading, data } = useQuery<GetQueryHistoryQuery>(GET_QUERY_HISTORY, {
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  return { loading, data }
}

export default useQueryHistory
