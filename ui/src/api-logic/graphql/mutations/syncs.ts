import { gql } from '@apollo/client'

const SYNC_NOW = gql`
  mutation sync($syncId: UUID!, $typeGroup: String!) {
    createRepoSyncQueue(
      input: {repoSyncQueue: {repoSyncId: $syncId, status: "QUEUED", typeGroup: $typeGroup}}
    ) {
      repoSyncQueue {
        id
        status
        createdAt
      }
    }
  }
`

const ADD_SYNC_TYPE = gql`
  mutation addSyncType($repoId: UUID!, $syncType: String!, $schedule: Boolean) {
    createRepoSync(
      input: {repoSync: {repoId: $repoId, syncType: $syncType, scheduleEnabled: $schedule}}
    ) {
      repoSync {
        id
        syncType
        repoSyncTypeBySyncType {
          typeGroup
        }
      }
    }
  }
`

const UPDATE_SCHEDULE = gql`
  mutation schedule($syncId: UUID!, $schedule: Boolean!) {
    updateRepoSync(input: {patch: {scheduleEnabled: $schedule}, id: $syncId}) {
      repoSync {
        id
        syncType
        scheduleEnabled
      }
    }
  }
`

const ADD_CONTAINER_SYNC_SCHEDULE = gql`
  mutation addContainerSyncSchedule($syncId: UUID!) {
    createContainerSyncSchedule(input: {containerSyncSchedule: {syncId: $syncId}}) {
      containerSyncSchedule {
        id
      }
    }
  }
`

const REMOVE_CONTAINER_SYNC_SCHEDULE = gql`
  mutation removeContainerSyncSchedule($id: UUID!) {
    deleteContainerSyncSchedule(input: {id: $id}) {
      deletedContainerSyncScheduleNodeId
    }
  }
`

const ENABLE_CONTAINER_SYNC = gql`
  mutation enableContainerSync($repoId: UUID!, $imageId: UUID!) {
    createContainerSync(
      input: {containerSync: {repoId: $repoId, imageId: $imageId}}
    ) {
      containerSync {
        id
        image {
          name
        }
      }
    }
  }
`

const ENABLE_CONTAINER_SYNC_FOR_ALL = gql`
  mutation enableCSForAll($imageId: UUID!, $providerId: UUID!) {
    bulkEnableSync(image: $imageId, provider: $providerId)
  }
`

const DISABLE_CONTAINER_SYNC_FOR_ALL = gql`
  mutation disableCSForAll($imageId: UUID!, $providerId: UUID!) {
    bulkDisableSync(image: $imageId, provider: $providerId)
  }
`

const SYNC_NOW_CONTAINER = gql`
  mutation syncNowContainer($sync: UUID!) {
    syncNow(input: {containerSyncId: $sync}) {
      boolean
    }
  }
`

const UPDATE_CONTAINER_SYNC = gql`
  mutation undateContainerSync($id: UUID!, $parameters: JSON!) {
    updateContainerSync(input: {patch: {parameters: $parameters}, id: $id}) {
      containerSync {
        id
        parameters
      }
    }
  }
`

export {
  SYNC_NOW,
  ADD_SYNC_TYPE,
  UPDATE_SCHEDULE,
  ADD_CONTAINER_SYNC_SCHEDULE,
  REMOVE_CONTAINER_SYNC_SCHEDULE,
  ENABLE_CONTAINER_SYNC,
  ENABLE_CONTAINER_SYNC_FOR_ALL,
  DISABLE_CONTAINER_SYNC_FOR_ALL,
  SYNC_NOW_CONTAINER,
  UPDATE_CONTAINER_SYNC
}
