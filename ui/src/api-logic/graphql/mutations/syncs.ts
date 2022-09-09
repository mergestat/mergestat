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
export default SYNC_NOW
