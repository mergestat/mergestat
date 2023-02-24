import { gql } from '@apollo/client'

const GET_REPO_SYNCS = gql`
  query getRepoSyncs($id: UUID!) {
    repo(id: $id) {
      id
      repo
      tags
      repoImport {
        settings
      }
      provider: providerByProvider {
        id
        name
        vendor
        settings
      }
      repoSyncs {
        nodes {
          id
          syncType
          scheduleEnabled
          repoSyncQueues(first: 15, orderBy: CREATED_AT_DESC) {
            nodes {
              id
              status
              startedAt
              doneAt
              hasError
              warnings: repoSyncLogs(condition: {logType: "WARNING"}) {
                totalCount
              }
            }
          }
        }
      }
    }
    repoSyncTypes {
      nodes {
        type
        description
        shortName
        typeGroup
        labels: labelAssociationsByRepoSyncType(first: 25) {
          nodes {
            label
          }
        }
      }
    }
  }
`
const GET_SYNC_TYPES = gql`
  query getSyncTypes {
    repoSyncTypes {
      nodes {
        type
        description
        shortName
        labels: labelAssociationsByRepoSyncType(first: 25) {
          nodes {
            label
          }
        }
      }
    }
  }
`

export { GET_REPO_SYNCS, GET_SYNC_TYPES }
