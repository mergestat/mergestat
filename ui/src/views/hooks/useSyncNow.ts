import { useMutation } from '@apollo/client'
import { AddSyncTypeMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_SYNC_TYPE, SYNC_NOW } from 'src/api-logic/graphql/mutations/syncs'

const useSyncNow = (refetch: () => Promise<any>) => {
  const [syncNow] = useMutation(SYNC_NOW, {
    onCompleted: () => {
      refetch()
    }
  })

  const [addSyncType] = useMutation(ADD_SYNC_TYPE, {
    onCompleted: (data: AddSyncTypeMutation) => {
      syncNow({
        variables: {
          syncId: data.createRepoSync?.repoSync?.id
        }
      })
    }
  })

  return { syncNow, addSyncType }
}

export default useSyncNow
