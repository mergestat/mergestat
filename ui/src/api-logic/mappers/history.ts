import { QueryHistoryData } from 'src/@types'
import { GetQueryHistoryQuery } from '../graphql/generated/schema'

const mapToQueryHistoryData = (data: GetQueryHistoryQuery | undefined): Array<QueryHistoryData> => {
  const queryHistory: Array<QueryHistoryData> = []

  data?.queryHistories?.nodes.forEach((r) => {
    const info: QueryHistoryData = {
      id: r?.id,
      query: r?.query,
      runAt: new Date(r?.runAt),
      runBy: r?.runBy
    }

    queryHistory.push(info)
  })

  return queryHistory
}

export { mapToQueryHistoryData }
