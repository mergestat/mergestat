import { useMutation } from '@apollo/client'
import { AddSyncTypeMutation, EnableContainerSyncMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_CONTAINER_SYNC_SCHEDULE, ADD_SYNC_TYPE, ENABLE_CONTAINER_SYNC, REMOVE_CONTAINER_SYNC_SCHEDULE, SYNC_NOW } from 'src/api-logic/graphql/mutations/syncs'
import { showSuccessAlert } from 'src/utils/alerts'

const useContainerSyncNow = (refetch: string, schedule = false) => {
  const [syncNow] = useMutation(SYNC_NOW, {
    awaitRefetchQueries: true,
    refetchQueries: () => [refetch]
  })

  const [addSyncType] = useMutation(ADD_SYNC_TYPE, {
    onCompleted: (data: AddSyncTypeMutation) => {
      if (!schedule) {
        syncNow({
          variables: {
            syncId: data.createRepoSync?.repoSync?.id,
            typeGroup: data.createRepoSync?.repoSync?.repoSyncTypeBySyncType?.typeGroup
          }
        })
      }
    },
    awaitRefetchQueries: true,
    refetchQueries: () => {
      return schedule ? [refetch] : []
    }
  })

  const [addSchedule] = useMutation(ADD_CONTAINER_SYNC_SCHEDULE, {
    awaitRefetchQueries: true,
    onCompleted: () => {
      showSuccessAlert('Schedule enabled')
    },
    refetchQueries: () => [refetch]
  })

  const [removeSchedule] = useMutation(REMOVE_CONTAINER_SYNC_SCHEDULE, {
    awaitRefetchQueries: true,
    onCompleted: () => {
      showSuccessAlert('Schedule disabled')
    },
    refetchQueries: () => [refetch]
  })

  const [enableContainerSync] = useMutation(ENABLE_CONTAINER_SYNC, {
    onCompleted: (data: EnableContainerSyncMutation) => {
      addSchedule({
        variables: { syncId: data.createContainerSync?.containerSync?.id }
      })
    },
    awaitRefetchQueries: true,
    refetchQueries: () => {
      return schedule ? [refetch] : []
    }
  })

  return { syncNow, addSyncType, addSchedule, removeSchedule, enableContainerSync }
}

export default useContainerSyncNow
