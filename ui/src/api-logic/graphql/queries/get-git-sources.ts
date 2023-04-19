import { gql } from '@apollo/client'

const GET_GIT_SOURCES_LIST = gql`
  query getGitSourcesList($search: String!, $first: Int, $offset: Int) {
    all: providers {
      totalCount
    }
    providers(
      filter: {name: {includesInsensitive: $search}}
      first: $first
      offset: $offset
    ) {
      totalCount
      nodes {
        id
        name
        description
        createdAt
        settings
        vendor
        reposByProvider {
          totalCount
        }
      }
    }
  }
`

const GET_GIT_SOURCES_LIST_CS = gql`
  query getGitSourcesListCS($search: String!, $imageId: UUID!) {
    providers(filter: {name: {includesInsensitive: $search}}) {
      totalCount
      nodes {
        id
        name
        description
        createdAt
        settings
        vendor
        reposByProvider {
          totalCount
        }
      }
    }
    all: providers {
      totalCount
    }
    containerSyncs(condition: {imageId: $imageId}) {
      nodes {
        repo {
          provider
        }
        scheduled: containerSyncScheduleBySyncId {
          id
        }
      }
    }
  }
`

const GET_GIT_SOURCES = gql`
  query getGitSources {
    github: providers(condition: {vendor: "github"}) {
      totalCount
    }
    providers {
      nodes {
        id
        name
        description
        createdAt
        settings
        vendor
      }
    }
  }
`

const GET_GIT_SOURCE = gql`
  query getGitSource($id: UUID!) {
    provider(id: $id) {
      id
      name
      description
      vendor
      settings
      auth: serviceAuthCredentialsByProvider {
        nodes {
          id
          type
          credentials
          createdAt
        }
      }
      auto: repoImportsByProvider {
        nodes {
          id
          settings
          repos {
            totalCount
          }
        }
      }
      manual: reposByProvider(condition: {repoImportId: null}) {
        totalCount
        nodes {
          id
          repo
          settings
        }
      }
    }
  }
`

const GET_DEFAULT_REPO_SYNCS = gql`
  query getDefaultRepoSyncs($search: String!, $first: Int, $offset: Int) {
    all: containerImages {
      totalCount
    }
    containerImages(
      filter: {or: [{name: {includesInsensitive: $search}}]}
      first: $first
      offset: $offset
    ) {
      totalCount
      nodes {
        id
        name
        description
        containerSyncs: containerSyncsByImageId {
          nodes {
            repo {
              provider
            }
            scheduled: containerSyncScheduleBySyncId {
              id
            }
          }
        }
      }
    }
  }
`

const GET_ALL_CONTAINER_IMAGES = gql`
  query getAllContainerImages {
    containerImages {
      totalCount
      nodes {
        id
        name
        description
      }
    }
  }
`

export {
  GET_GIT_SOURCES_LIST,
  GET_GIT_SOURCES_LIST_CS,
  GET_GIT_SOURCES,
  GET_GIT_SOURCE,
  GET_DEFAULT_REPO_SYNCS,
  GET_ALL_CONTAINER_IMAGES
}
