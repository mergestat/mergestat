import { useMutation } from '@apollo/client'
import { EnableContainerSyncMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_CONTAINER_SYNC_SCHEDULE, ENABLE_CONTAINER_SYNC, REMOVE_CONTAINER_SYNC_SCHEDULE, SYNC_NOW_CONTAINER } from 'src/api-logic/graphql/mutations/syncs'
import { showSuccessAlert } from 'src/utils/alerts'

const useContainerSyncNow = (refetch: string) => {
  const [syncNow] = useMutation(SYNC_NOW_CONTAINER, {
    awaitRefetchQueries: true,
    refetchQueries: () => [refetch]
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

  const [enableCSAndSchedule] = useMutation(ENABLE_CONTAINER_SYNC, {
    onCompleted: (data: EnableContainerSyncMutation) => {
      addSchedule({
        variables: { syncId: data.createContainerSync?.containerSync?.id }
      })
    },
    awaitRefetchQueries: true,
    refetchQueries: () => [refetch]
  })

  const [enableCSAndSync] = useMutation(ENABLE_CONTAINER_SYNC, {
    onCompleted: (data: EnableContainerSyncMutation) => {
      syncNow({
        variables: { sync: data.createContainerSync?.containerSync?.id }
      })
    },
    awaitRefetchQueries: true,
    refetchQueries: () => [refetch]
  })

  return { syncNow, addSchedule, removeSchedule, enableCSAndSchedule, enableCSAndSync }
}

export default useContainerSyncNow
