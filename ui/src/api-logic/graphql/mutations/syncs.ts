import { gql } from '@apollo/client'

const SYNC_NOW = gql`
  mutation sync($syncId: UUID!) {
    createRepoSyncQueue(
      input: {repoSyncQueue: {repoSyncId: $syncId, status: "QUEUED"}}
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
  mutation addSyncType($repoId: UUID!, $syncType: String!) {
    createRepoSync(input: {repoSync: {repoId: $repoId, syncType: $syncType}}) {
      repoSync {
        id
        syncType
      }
    }
  }
`

export { SYNC_NOW, ADD_SYNC_TYPE }
