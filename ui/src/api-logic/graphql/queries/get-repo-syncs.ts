import { gql } from '@apollo/client'

const GET_REPO_DATA = gql`
  query getRepoData($id: UUID!) {
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
    }
  }
`

const GET_CONTAINER_IMAGE = gql`
  query getContainerImage($id: UUID!) {
    containerImage(id: $id) {
      id
      name
      description
      type
      url
      version
      parameters
      repos: containerSyncsByImageId {
        nodes {
          scheduled: containerSyncScheduleBySyncId {
            id
          }
        }
      }
    }
  }
`

const GET_CONTAINER_IMAGES = gql`
  query getContainerImages($search: String!, $first: Int, $offset: Int) {
    all: containerImages {
      totalCount
    }
    containerImages(
      orderBy: NAME_ASC
      filter: {
        or: [
          {name: {includesInsensitive: $search}}
        ]
      }
      first: $first
      offset: $offset
    ) {
      totalCount
      nodes {
        id
        name
        description
        url
        version
        type
        parameters
        repos: containerSyncsByImageId {
          nodes {
            scheduled: containerSyncScheduleBySyncId {
              id
            }
          }
        }
      }
    }
  }
`

const GET_CONTAINER_SYNCS = gql`
  query getContainerSyncs($id: UUID!, $search: String!, $first: Int, $offset: Int) {
    containerSyncs(condition: {repoId: $id}) {
      nodes {
        id
        parameters
        image {
          id
        }
        repo {
          id
        }
        schedule: containerSyncScheduleBySyncId {
          id
        }
        latestSyncRuns
      }
    }
    all: containerImages {
      totalCount
    }
    containerImages(
      filter: {
        or: [
          {name: {includesInsensitive: $search}}
        ]
      }
      first: $first
      offset: $offset
    ) {
      totalCount
      nodes {
        id
        name
        description
      }
    }
  }
`

const GET_REPO_SYNCS = gql`
  query getRepoSyncs($id: UUID!, $search: String!, $first: Int, $offset: Int) {
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
    allSyncTypes: repoSyncTypes {
      totalCount
    }
    repoSyncTypes(
      filter: {
        or: [
          {type: {includesInsensitive: $search}},
          {description: {includesInsensitive: $search}}
        ]
      }
      first: $first
      offset: $offset
    ) {
      totalCount
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

export {
  GET_REPO_DATA,
  GET_CONTAINER_IMAGE,
  GET_CONTAINER_IMAGES,
  GET_CONTAINER_SYNCS,
  GET_REPO_SYNCS,
  GET_SYNC_TYPES
}
