import { gql } from '@apollo/client'

const GET_EXPLORE_METADATA = gql`
  query getExploreMetadata {
    repos {
      totalCount
    }
    exploreContainer: containerImageByUrl(url: "ghcr.io/mergestat/sync-mergestat-explore") {
      id
      name
    }
    metadata: _mergestatExploreRepoMetadata(orderBy: _MERGESTAT_SYNCED_AT_ASC, first: 1) {
      totalCount
      nodes {
        _mergestatSyncedAt
      }
    }
  }
`

export { GET_EXPLORE_METADATA }
