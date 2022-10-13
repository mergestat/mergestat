import { useMutation } from '@apollo/client'
import { AddSyncTypeMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_SYNC_TYPE, SYNC_NOW, UPDATE_SCHEDULE } from 'src/api-logic/graphql/mutations/syncs'

const useSyncNow = (refetch: () => void, schedule = false) => {
  const [syncNow] = useMutation(SYNC_NOW, {
    onCompleted: () => {
      refetch()
    }
  })

  const [addSyncType] = useMutation(ADD_SYNC_TYPE, {
    onCompleted: (data: AddSyncTypeMutation) => {
      if (schedule) {
        refetch()
      } else {
        syncNow({
          variables: {
            syncId: data.createRepoSync?.repoSync?.id
          }
        })
      }
    }
  })

  const [updateSchedule] = useMutation(UPDATE_SCHEDULE, {
    onCompleted: () => {
      refetch()
    }
  })

  return { syncNow, addSyncType, updateSchedule }
}

export default useSyncNow
