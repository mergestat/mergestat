import { useMutation } from '@apollo/client'
import { AddSyncTypeMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_SYNC_TYPE, SYNC_NOW, UPDATE_SCHEDULE } from 'src/api-logic/graphql/mutations/syncs'

const useSyncNow = (refetch: string, schedule = false) => {
  const [syncNow] = useMutation(SYNC_NOW, {
    awaitRefetchQueries: true,
    refetchQueries: () => [refetch]
  })

  const [addSyncType] = useMutation(ADD_SYNC_TYPE, {
    onCompleted: (data: AddSyncTypeMutation) => {
      if (!schedule) {
        syncNow({
          variables: {
            syncId: data.createRepoSync?.repoSync?.id
          }
        })
      }
    },
    awaitRefetchQueries: true,
    refetchQueries: () => {
      return schedule ? [refetch] : []
    }
  })

  const [updateSchedule] = useMutation(UPDATE_SCHEDULE, {
    awaitRefetchQueries: true,
    refetchQueries: () => [refetch]
  })

  return { syncNow, addSyncType, updateSchedule }
}

export default useSyncNow
