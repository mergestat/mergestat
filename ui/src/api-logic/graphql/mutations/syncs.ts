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

export { SYNC_NOW, ADD_SYNC_TYPE, UPDATE_SCHEDULE }
