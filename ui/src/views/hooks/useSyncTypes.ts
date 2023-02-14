import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { SyncType } from 'src/@types'
import { GetSyncTypesQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_SYNC_TYPES } from 'src/api-logic/graphql/queries/get-repo-syncs.query'

const useSyncTypes = () => {
  const [syncsTypesArray, setSyncsTypesArray] = useState<SyncType[]>([])

  const { data } = useQuery<GetSyncTypesQuery>(GET_SYNC_TYPES, {
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    const list = data?.repoSyncTypes?.nodes.map(st => ({ type: st.type, description: st.description, shortName: st.shortName, checked: false, labels: st.labels.nodes.map(l => l.label) }))
    setSyncsTypesArray(list || [])
  }, [data])

  return { syncsTypesArray, setSyncsTypesArray }
}

export default useSyncTypes
