import { gql } from '@apollo/client'

const EXPLORE = gql`
  query exploreUI($params: JSON!) {
    exploreUi(params: $params)
  }
`

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

const GET_SAVED_EXPLORE = gql`
  query getSavedExplore($id: UUID!) {
    savedExplore(id: $id) {
      createdAt
      createdBy
      name
      description
      metadata
    }
  }
`

export { EXPLORE, GET_EXPLORE_METADATA, GET_SAVED_EXPLORE }
