import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigInt: any
  Cursor: any
  Datetime: any
  JSON: any
  UUID: any
}

/** All input for the create `GitBranch` mutation. */
export type CreateGitBranchInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GitBranch` to be created by this mutation. */
  gitBranch: GitBranchInput
}

/** The output of our create `GitBranch` mutation. */
export type CreateGitBranchPayload = {
  __typename?: 'CreateGitBranchPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitBranch` that was created by this mutation. */
  gitBranch?: Maybe<GitBranch>
  /** An edge for our `GitBranch`. May be used by Relay 1. */
  gitBranchEdge?: Maybe<GitBranchesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GitBranch` mutation. */
export type CreateGitBranchPayloadGitBranchEdgeArgs = {
  orderBy?: InputMaybe<Array<GitBranchesOrderBy>>
}

/** All input for the create `GitCommit` mutation. */
export type CreateGitCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GitCommit` to be created by this mutation. */
  gitCommit: GitCommitInput
}

/** The output of our create `GitCommit` mutation. */
export type CreateGitCommitPayload = {
  __typename?: 'CreateGitCommitPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitCommit` that was created by this mutation. */
  gitCommit?: Maybe<GitCommit>
  /** An edge for our `GitCommit`. May be used by Relay 1. */
  gitCommitEdge?: Maybe<GitCommitsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our create `GitCommit` mutation. */
export type CreateGitCommitPayloadGitCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>
}

/** All input for the create `GitCommitStat` mutation. */
export type CreateGitCommitStatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GitCommitStat` to be created by this mutation. */
  gitCommitStat: GitCommitStatInput
}

/** The output of our create `GitCommitStat` mutation. */
export type CreateGitCommitStatPayload = {
  __typename?: 'CreateGitCommitStatPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitCommitStat` that was created by this mutation. */
  gitCommitStat?: Maybe<GitCommitStat>
  /** An edge for our `GitCommitStat`. May be used by Relay 1. */
  gitCommitStatEdge?: Maybe<GitCommitStatsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GitCommitStat`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our create `GitCommitStat` mutation. */
export type CreateGitCommitStatPayloadGitCommitStatEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>
}

/** All input for the create `GitFile` mutation. */
export type CreateGitFileInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GitFile` to be created by this mutation. */
  gitFile: GitFileInput
}

/** The output of our create `GitFile` mutation. */
export type CreateGitFilePayload = {
  __typename?: 'CreateGitFilePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitFile` that was created by this mutation. */
  gitFile?: Maybe<GitFile>
  /** An edge for our `GitFile`. May be used by Relay 1. */
  gitFileEdge?: Maybe<GitFilesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our create `GitFile` mutation. */
export type CreateGitFilePayloadGitFileEdgeArgs = {
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>
}

/** All input for the create `GitRef` mutation. */
export type CreateGitRefInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GitRef` to be created by this mutation. */
  gitRef: GitRefInput
}

/** The output of our create `GitRef` mutation. */
export type CreateGitRefPayload = {
  __typename?: 'CreateGitRefPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitRef` that was created by this mutation. */
  gitRef?: Maybe<GitRef>
  /** An edge for our `GitRef`. May be used by Relay 1. */
  gitRefEdge?: Maybe<GitRefsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GitRef` mutation. */
export type CreateGitRefPayloadGitRefEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>
}

/** All input for the create `GitTag` mutation. */
export type CreateGitTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GitTag` to be created by this mutation. */
  gitTag: GitTagInput
}

/** The output of our create `GitTag` mutation. */
export type CreateGitTagPayload = {
  __typename?: 'CreateGitTagPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitTag` that was created by this mutation. */
  gitTag?: Maybe<GitTag>
  /** An edge for our `GitTag`. May be used by Relay 1. */
  gitTagEdge?: Maybe<GitTagsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GitTag` mutation. */
export type CreateGitTagPayloadGitTagEdgeArgs = {
  orderBy?: InputMaybe<Array<GitTagsOrderBy>>
}

/** All input for the create `GithubIssue` mutation. */
export type CreateGithubIssueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GithubIssue` to be created by this mutation. */
  githubIssue: GithubIssueInput
}

/** The output of our create `GithubIssue` mutation. */
export type CreateGithubIssuePayload = {
  __typename?: 'CreateGithubIssuePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubIssue` that was created by this mutation. */
  githubIssue?: Maybe<GithubIssue>
  /** An edge for our `GithubIssue`. May be used by Relay 1. */
  githubIssueEdge?: Maybe<GithubIssuesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our create `GithubIssue` mutation. */
export type CreateGithubIssuePayloadGithubIssueEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>
}

/** All input for the create `GithubPullRequestCommit` mutation. */
export type CreateGithubPullRequestCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GithubPullRequestCommit` to be created by this mutation. */
  githubPullRequestCommit: GithubPullRequestCommitInput
}

/** The output of our create `GithubPullRequestCommit` mutation. */
export type CreateGithubPullRequestCommitPayload = {
  __typename?: 'CreateGithubPullRequestCommitPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubPullRequestCommit` that was created by this mutation. */
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>
  /** An edge for our `GithubPullRequestCommit`. May be used by Relay 1. */
  githubPullRequestCommitEdge?: Maybe<GithubPullRequestCommitsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GithubPullRequestCommit` mutation. */
export type CreateGithubPullRequestCommitPayloadGithubPullRequestCommitEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>
  }

/** All input for the create `GithubPullRequest` mutation. */
export type CreateGithubPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GithubPullRequest` to be created by this mutation. */
  githubPullRequest: GithubPullRequestInput
}

/** The output of our create `GithubPullRequest` mutation. */
export type CreateGithubPullRequestPayload = {
  __typename?: 'CreateGithubPullRequestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubPullRequest` that was created by this mutation. */
  githubPullRequest?: Maybe<GithubPullRequest>
  /** An edge for our `GithubPullRequest`. May be used by Relay 1. */
  githubPullRequestEdge?: Maybe<GithubPullRequestsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our create `GithubPullRequest` mutation. */
export type CreateGithubPullRequestPayloadGithubPullRequestEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>
}

/** All input for the create `GithubPullRequestReview` mutation. */
export type CreateGithubPullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GithubPullRequestReview` to be created by this mutation. */
  githubPullRequestReview: GithubPullRequestReviewInput
}

/** The output of our create `GithubPullRequestReview` mutation. */
export type CreateGithubPullRequestReviewPayload = {
  __typename?: 'CreateGithubPullRequestReviewPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubPullRequestReview` that was created by this mutation. */
  githubPullRequestReview?: Maybe<GithubPullRequestReview>
  /** An edge for our `GithubPullRequestReview`. May be used by Relay 1. */
  githubPullRequestReviewEdge?: Maybe<GithubPullRequestReviewsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `GithubPullRequestReview` mutation. */
export type CreateGithubPullRequestReviewPayloadGithubPullRequestReviewEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>
  }

/** All input for the create `GithubRepoInfo` mutation. */
export type CreateGithubRepoInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GithubRepoInfo` to be created by this mutation. */
  githubRepoInfo: GithubRepoInfoInput
}

/** The output of our create `GithubRepoInfo` mutation. */
export type CreateGithubRepoInfoPayload = {
  __typename?: 'CreateGithubRepoInfoPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubRepoInfo` that was created by this mutation. */
  githubRepoInfo?: Maybe<GithubRepoInfo>
  /** An edge for our `GithubRepoInfo`. May be used by Relay 1. */
  githubRepoInfoEdge?: Maybe<GithubRepoInfosEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our create `GithubRepoInfo` mutation. */
export type CreateGithubRepoInfoPayloadGithubRepoInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>
}

/** All input for the create `GithubStargazer` mutation. */
export type CreateGithubStargazerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `GithubStargazer` to be created by this mutation. */
  githubStargazer: GithubStargazerInput
}

/** The output of our create `GithubStargazer` mutation. */
export type CreateGithubStargazerPayload = {
  __typename?: 'CreateGithubStargazerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubStargazer` that was created by this mutation. */
  githubStargazer?: Maybe<GithubStargazer>
  /** An edge for our `GithubStargazer`. May be used by Relay 1. */
  githubStargazerEdge?: Maybe<GithubStargazersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our create `GithubStargazer` mutation. */
export type CreateGithubStargazerPayloadGithubStargazerEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>
}

/** All input for the create `RepoImport` mutation. */
export type CreateRepoImportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoImport` to be created by this mutation. */
  repoImport: RepoImportInput
}

/** The output of our create `RepoImport` mutation. */
export type CreateRepoImportPayload = {
  __typename?: 'CreateRepoImportPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoImport` that was created by this mutation. */
  repoImport?: Maybe<RepoImport>
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>
}

/** The output of our create `RepoImport` mutation. */
export type CreateRepoImportPayloadRepoImportEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>
}

/** All input for the create `RepoImportType` mutation. */
export type CreateRepoImportTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoImportType` to be created by this mutation. */
  repoImportType: RepoImportTypeInput
}

/** The output of our create `RepoImportType` mutation. */
export type CreateRepoImportTypePayload = {
  __typename?: 'CreateRepoImportTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoImportType` that was created by this mutation. */
  repoImportType?: Maybe<RepoImportType>
  /** An edge for our `RepoImportType`. May be used by Relay 1. */
  repoImportTypeEdge?: Maybe<RepoImportTypesEdge>
}

/** The output of our create `RepoImportType` mutation. */
export type CreateRepoImportTypePayloadRepoImportTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>
}

/** All input for the create `Repo` mutation. */
export type CreateRepoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `Repo` to be created by this mutation. */
  repo: RepoInput
}

/** The output of our create `Repo` mutation. */
export type CreateRepoPayload = {
  __typename?: 'CreateRepoPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Repo` that was created by this mutation. */
  repo?: Maybe<Repo>
  /** An edge for our `Repo`. May be used by Relay 1. */
  repoEdge?: Maybe<ReposEdge>
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImportByRepoImportId?: Maybe<RepoImport>
}

/** The output of our create `Repo` mutation. */
export type CreateRepoPayloadRepoEdgeArgs = {
  orderBy?: InputMaybe<Array<ReposOrderBy>>
}

/** All input for the create `RepoSync` mutation. */
export type CreateRepoSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoSync` to be created by this mutation. */
  repoSync: RepoSyncInput
}

/** All input for the create `RepoSyncLog` mutation. */
export type CreateRepoSyncLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoSyncLog` to be created by this mutation. */
  repoSyncLog: RepoSyncLogInput
}

/** The output of our create `RepoSyncLog` mutation. */
export type CreateRepoSyncLogPayload = {
  __typename?: 'CreateRepoSyncLogPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncLog` that was created by this mutation. */
  repoSyncLog?: Maybe<RepoSyncLog>
  /** An edge for our `RepoSyncLog`. May be used by Relay 1. */
  repoSyncLogEdge?: Maybe<RepoSyncLogsEdge>
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueueByRepoSyncQueueId?: Maybe<RepoSyncQueue>
}

/** The output of our create `RepoSyncLog` mutation. */
export type CreateRepoSyncLogPayloadRepoSyncLogEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>
}

/** All input for the create `RepoSyncLogType` mutation. */
export type CreateRepoSyncLogTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoSyncLogType` to be created by this mutation. */
  repoSyncLogType: RepoSyncLogTypeInput
}

/** The output of our create `RepoSyncLogType` mutation. */
export type CreateRepoSyncLogTypePayload = {
  __typename?: 'CreateRepoSyncLogTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncLogType` that was created by this mutation. */
  repoSyncLogType?: Maybe<RepoSyncLogType>
  /** An edge for our `RepoSyncLogType`. May be used by Relay 1. */
  repoSyncLogTypeEdge?: Maybe<RepoSyncLogTypesEdge>
}

/** The output of our create `RepoSyncLogType` mutation. */
export type CreateRepoSyncLogTypePayloadRepoSyncLogTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>
}

/** The output of our create `RepoSync` mutation. */
export type CreateRepoSyncPayload = {
  __typename?: 'CreateRepoSyncPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repoByRepoId?: Maybe<Repo>
  /** The `RepoSync` that was created by this mutation. */
  repoSync?: Maybe<RepoSync>
  /** An edge for our `RepoSync`. May be used by Relay 1. */
  repoSyncEdge?: Maybe<RepoSyncsEdge>
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>
}

/** The output of our create `RepoSync` mutation. */
export type CreateRepoSyncPayloadRepoSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>
}

/** All input for the create `RepoSyncQueue` mutation. */
export type CreateRepoSyncQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoSyncQueue` to be created by this mutation. */
  repoSyncQueue: RepoSyncQueueInput
}

/** The output of our create `RepoSyncQueue` mutation. */
export type CreateRepoSyncQueuePayload = {
  __typename?: 'CreateRepoSyncQueuePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSyncByRepoSyncId?: Maybe<RepoSync>
  /** The `RepoSyncQueue` that was created by this mutation. */
  repoSyncQueue?: Maybe<RepoSyncQueue>
  /** An edge for our `RepoSyncQueue`. May be used by Relay 1. */
  repoSyncQueueEdge?: Maybe<RepoSyncQueuesEdge>
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>
}

/** The output of our create `RepoSyncQueue` mutation. */
export type CreateRepoSyncQueuePayloadRepoSyncQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>
}

/** All input for the create `RepoSyncQueueStatusType` mutation. */
export type CreateRepoSyncQueueStatusTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoSyncQueueStatusType` to be created by this mutation. */
  repoSyncQueueStatusType: RepoSyncQueueStatusTypeInput
}

/** The output of our create `RepoSyncQueueStatusType` mutation. */
export type CreateRepoSyncQueueStatusTypePayload = {
  __typename?: 'CreateRepoSyncQueueStatusTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncQueueStatusType` that was created by this mutation. */
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>
  /** An edge for our `RepoSyncQueueStatusType`. May be used by Relay 1. */
  repoSyncQueueStatusTypeEdge?: Maybe<RepoSyncQueueStatusTypesEdge>
}

/** The output of our create `RepoSyncQueueStatusType` mutation. */
export type CreateRepoSyncQueueStatusTypePayloadRepoSyncQueueStatusTypeEdgeArgs =
  {
    orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>
  }

/** All input for the create `RepoSyncType` mutation. */
export type CreateRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `RepoSyncType` to be created by this mutation. */
  repoSyncType: RepoSyncTypeInput
}

/** The output of our create `RepoSyncType` mutation. */
export type CreateRepoSyncTypePayload = {
  __typename?: 'CreateRepoSyncTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncType` that was created by this mutation. */
  repoSyncType?: Maybe<RepoSyncType>
  /** An edge for our `RepoSyncType`. May be used by Relay 1. */
  repoSyncTypeEdge?: Maybe<RepoSyncTypesEdge>
}

/** The output of our create `RepoSyncType` mutation. */
export type CreateRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>
}

/** All input for the create `SchemaMigration` mutation. */
export type CreateSchemaMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The `SchemaMigration` to be created by this mutation. */
  schemaMigration: SchemaMigrationInput
}

/** The output of our create `SchemaMigration` mutation. */
export type CreateSchemaMigrationPayload = {
  __typename?: 'CreateSchemaMigrationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `SchemaMigration` that was created by this mutation. */
  schemaMigration?: Maybe<SchemaMigration>
  /** An edge for our `SchemaMigration`. May be used by Relay 1. */
  schemaMigrationEdge?: Maybe<SchemaMigrationsEdge>
}

/** The output of our create `SchemaMigration` mutation. */
export type CreateSchemaMigrationPayloadSchemaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>
}

/** All input for the `deleteGitCommitByRepoIdAndHash` mutation. */
export type DeleteGitCommitByRepoIdAndHashInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  hash: Scalars['String']
  repoId: Scalars['UUID']
}

/** All input for the `deleteGitCommit` mutation. */
export type DeleteGitCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GitCommit` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GitCommit` mutation. */
export type DeleteGitCommitPayload = {
  __typename?: 'DeleteGitCommitPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGitCommitId?: Maybe<Scalars['ID']>
  /** The `GitCommit` that was deleted by this mutation. */
  gitCommit?: Maybe<GitCommit>
  /** An edge for our `GitCommit`. May be used by Relay 1. */
  gitCommitEdge?: Maybe<GitCommitsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our delete `GitCommit` mutation. */
export type DeleteGitCommitPayloadGitCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>
}

/** All input for the `deleteGitFileByRepoIdAndPath` mutation. */
export type DeleteGitFileByRepoIdAndPathInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  path: Scalars['String']
  repoId: Scalars['UUID']
}

/** All input for the `deleteGitFile` mutation. */
export type DeleteGitFileInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GitFile` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GitFile` mutation. */
export type DeleteGitFilePayload = {
  __typename?: 'DeleteGitFilePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGitFileId?: Maybe<Scalars['ID']>
  /** The `GitFile` that was deleted by this mutation. */
  gitFile?: Maybe<GitFile>
  /** An edge for our `GitFile`. May be used by Relay 1. */
  gitFileEdge?: Maybe<GitFilesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our delete `GitFile` mutation. */
export type DeleteGitFilePayloadGitFileEdgeArgs = {
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>
}

/** All input for the `deleteGitRefByRepoIdAndFullName` mutation. */
export type DeleteGitRefByRepoIdAndFullNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  fullName: Scalars['String']
  repoId: Scalars['UUID']
}

/** All input for the `deleteGitRef` mutation. */
export type DeleteGitRefInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GitRef` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GitRef` mutation. */
export type DeleteGitRefPayload = {
  __typename?: 'DeleteGitRefPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGitRefId?: Maybe<Scalars['ID']>
  /** The `GitRef` that was deleted by this mutation. */
  gitRef?: Maybe<GitRef>
  /** An edge for our `GitRef`. May be used by Relay 1. */
  gitRefEdge?: Maybe<GitRefsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GitRef` mutation. */
export type DeleteGitRefPayloadGitRefEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>
}

/** All input for the `deleteGithubIssueByRepoIdAndDatabaseId` mutation. */
export type DeleteGithubIssueByRepoIdAndDatabaseIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  databaseId: Scalars['Int']
  repoId: Scalars['UUID']
}

/** All input for the `deleteGithubIssue` mutation. */
export type DeleteGithubIssueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GithubIssue` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GithubIssue` mutation. */
export type DeleteGithubIssuePayload = {
  __typename?: 'DeleteGithubIssuePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGithubIssueId?: Maybe<Scalars['ID']>
  /** The `GithubIssue` that was deleted by this mutation. */
  githubIssue?: Maybe<GithubIssue>
  /** An edge for our `GithubIssue`. May be used by Relay 1. */
  githubIssueEdge?: Maybe<GithubIssuesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our delete `GithubIssue` mutation. */
export type DeleteGithubIssuePayloadGithubIssueEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>
}

/** All input for the `deleteGithubPullRequestByRepoIdAndDatabaseId` mutation. */
export type DeleteGithubPullRequestByRepoIdAndDatabaseIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  databaseId: Scalars['Int']
  repoId: Scalars['UUID']
}

/** All input for the `deleteGithubPullRequestCommitByRepoIdAndPrNumberAndHash` mutation. */
export type DeleteGithubPullRequestCommitByRepoIdAndPrNumberAndHashInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  hash: Scalars['String']
  prNumber: Scalars['Int']
  repoId: Scalars['UUID']
}

/** All input for the `deleteGithubPullRequestCommit` mutation. */
export type DeleteGithubPullRequestCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GithubPullRequestCommit` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GithubPullRequestCommit` mutation. */
export type DeleteGithubPullRequestCommitPayload = {
  __typename?: 'DeleteGithubPullRequestCommitPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGithubPullRequestCommitId?: Maybe<Scalars['ID']>
  /** The `GithubPullRequestCommit` that was deleted by this mutation. */
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>
  /** An edge for our `GithubPullRequestCommit`. May be used by Relay 1. */
  githubPullRequestCommitEdge?: Maybe<GithubPullRequestCommitsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GithubPullRequestCommit` mutation. */
export type DeleteGithubPullRequestCommitPayloadGithubPullRequestCommitEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>
  }

/** All input for the `deleteGithubPullRequest` mutation. */
export type DeleteGithubPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GithubPullRequest` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GithubPullRequest` mutation. */
export type DeleteGithubPullRequestPayload = {
  __typename?: 'DeleteGithubPullRequestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGithubPullRequestId?: Maybe<Scalars['ID']>
  /** The `GithubPullRequest` that was deleted by this mutation. */
  githubPullRequest?: Maybe<GithubPullRequest>
  /** An edge for our `GithubPullRequest`. May be used by Relay 1. */
  githubPullRequestEdge?: Maybe<GithubPullRequestsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our delete `GithubPullRequest` mutation. */
export type DeleteGithubPullRequestPayloadGithubPullRequestEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>
}

/** All input for the `deleteGithubPullRequestReviewById` mutation. */
export type DeleteGithubPullRequestReviewByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['String']
}

/** All input for the `deleteGithubPullRequestReview` mutation. */
export type DeleteGithubPullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GithubPullRequestReview` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GithubPullRequestReview` mutation. */
export type DeleteGithubPullRequestReviewPayload = {
  __typename?: 'DeleteGithubPullRequestReviewPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGithubPullRequestReviewId?: Maybe<Scalars['ID']>
  /** The `GithubPullRequestReview` that was deleted by this mutation. */
  githubPullRequestReview?: Maybe<GithubPullRequestReview>
  /** An edge for our `GithubPullRequestReview`. May be used by Relay 1. */
  githubPullRequestReviewEdge?: Maybe<GithubPullRequestReviewsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `GithubPullRequestReview` mutation. */
export type DeleteGithubPullRequestReviewPayloadGithubPullRequestReviewEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>
  }

/** All input for the `deleteGithubRepoInfoByOwnerAndName` mutation. */
export type DeleteGithubRepoInfoByOwnerAndNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  owner: Scalars['String']
}

/** All input for the `deleteGithubRepoInfoByRepoId` mutation. */
export type DeleteGithubRepoInfoByRepoIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  repoId: Scalars['UUID']
}

/** All input for the `deleteGithubRepoInfo` mutation. */
export type DeleteGithubRepoInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GithubRepoInfo` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GithubRepoInfo` mutation. */
export type DeleteGithubRepoInfoPayload = {
  __typename?: 'DeleteGithubRepoInfoPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGithubRepoInfoId?: Maybe<Scalars['ID']>
  /** The `GithubRepoInfo` that was deleted by this mutation. */
  githubRepoInfo?: Maybe<GithubRepoInfo>
  /** An edge for our `GithubRepoInfo`. May be used by Relay 1. */
  githubRepoInfoEdge?: Maybe<GithubRepoInfosEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our delete `GithubRepoInfo` mutation. */
export type DeleteGithubRepoInfoPayloadGithubRepoInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>
}

/** All input for the `deleteGithubStargazerByRepoIdAndLogin` mutation. */
export type DeleteGithubStargazerByRepoIdAndLoginInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  login: Scalars['String']
  repoId: Scalars['UUID']
}

/** All input for the `deleteGithubStargazer` mutation. */
export type DeleteGithubStargazerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `GithubStargazer` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `GithubStargazer` mutation. */
export type DeleteGithubStargazerPayload = {
  __typename?: 'DeleteGithubStargazerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedGithubStargazerId?: Maybe<Scalars['ID']>
  /** The `GithubStargazer` that was deleted by this mutation. */
  githubStargazer?: Maybe<GithubStargazer>
  /** An edge for our `GithubStargazer`. May be used by Relay 1. */
  githubStargazerEdge?: Maybe<GithubStargazersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our delete `GithubStargazer` mutation. */
export type DeleteGithubStargazerPayloadGithubStargazerEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>
}

/** All input for the `deleteRepoById` mutation. */
export type DeleteRepoByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
}

/** All input for the `deleteRepoImportById` mutation. */
export type DeleteRepoImportByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
}

/** All input for the `deleteRepoImport` mutation. */
export type DeleteRepoImportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoImport` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `RepoImport` mutation. */
export type DeleteRepoImportPayload = {
  __typename?: 'DeleteRepoImportPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoImportId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoImport` that was deleted by this mutation. */
  repoImport?: Maybe<RepoImport>
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>
}

/** The output of our delete `RepoImport` mutation. */
export type DeleteRepoImportPayloadRepoImportEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>
}

/** All input for the `deleteRepoImportTypeByType` mutation. */
export type DeleteRepoImportTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

/** All input for the `deleteRepoImportType` mutation. */
export type DeleteRepoImportTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoImportType` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `RepoImportType` mutation. */
export type DeleteRepoImportTypePayload = {
  __typename?: 'DeleteRepoImportTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoImportTypeId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoImportType` that was deleted by this mutation. */
  repoImportType?: Maybe<RepoImportType>
  /** An edge for our `RepoImportType`. May be used by Relay 1. */
  repoImportTypeEdge?: Maybe<RepoImportTypesEdge>
}

/** The output of our delete `RepoImportType` mutation. */
export type DeleteRepoImportTypePayloadRepoImportTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>
}

/** All input for the `deleteRepo` mutation. */
export type DeleteRepoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Repo` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `Repo` mutation. */
export type DeleteRepoPayload = {
  __typename?: 'DeleteRepoPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Repo` that was deleted by this mutation. */
  repo?: Maybe<Repo>
  /** An edge for our `Repo`. May be used by Relay 1. */
  repoEdge?: Maybe<ReposEdge>
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImportByRepoImportId?: Maybe<RepoImport>
}

/** The output of our delete `Repo` mutation. */
export type DeleteRepoPayloadRepoEdgeArgs = {
  orderBy?: InputMaybe<Array<ReposOrderBy>>
}

/** All input for the `deleteRepoSyncById` mutation. */
export type DeleteRepoSyncByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
}

/** All input for the `deleteRepoSyncByRepoIdAndSyncType` mutation. */
export type DeleteRepoSyncByRepoIdAndSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  repoId: Scalars['UUID']
  syncType: Scalars['String']
}

/** All input for the `deleteRepoSync` mutation. */
export type DeleteRepoSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSync` to be deleted. */
  nodeId: Scalars['ID']
}

/** All input for the `deleteRepoSyncLogById` mutation. */
export type DeleteRepoSyncLogByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['BigInt']
}

/** All input for the `deleteRepoSyncLog` mutation. */
export type DeleteRepoSyncLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncLog` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `RepoSyncLog` mutation. */
export type DeleteRepoSyncLogPayload = {
  __typename?: 'DeleteRepoSyncLogPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoSyncLogId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncLog` that was deleted by this mutation. */
  repoSyncLog?: Maybe<RepoSyncLog>
  /** An edge for our `RepoSyncLog`. May be used by Relay 1. */
  repoSyncLogEdge?: Maybe<RepoSyncLogsEdge>
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueueByRepoSyncQueueId?: Maybe<RepoSyncQueue>
}

/** The output of our delete `RepoSyncLog` mutation. */
export type DeleteRepoSyncLogPayloadRepoSyncLogEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>
}

/** All input for the `deleteRepoSyncLogTypeByType` mutation. */
export type DeleteRepoSyncLogTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

/** All input for the `deleteRepoSyncLogType` mutation. */
export type DeleteRepoSyncLogTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncLogType` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `RepoSyncLogType` mutation. */
export type DeleteRepoSyncLogTypePayload = {
  __typename?: 'DeleteRepoSyncLogTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoSyncLogTypeId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncLogType` that was deleted by this mutation. */
  repoSyncLogType?: Maybe<RepoSyncLogType>
  /** An edge for our `RepoSyncLogType`. May be used by Relay 1. */
  repoSyncLogTypeEdge?: Maybe<RepoSyncLogTypesEdge>
}

/** The output of our delete `RepoSyncLogType` mutation. */
export type DeleteRepoSyncLogTypePayloadRepoSyncLogTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>
}

/** The output of our delete `RepoSync` mutation. */
export type DeleteRepoSyncPayload = {
  __typename?: 'DeleteRepoSyncPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoSyncId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repoByRepoId?: Maybe<Repo>
  /** The `RepoSync` that was deleted by this mutation. */
  repoSync?: Maybe<RepoSync>
  /** An edge for our `RepoSync`. May be used by Relay 1. */
  repoSyncEdge?: Maybe<RepoSyncsEdge>
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>
}

/** The output of our delete `RepoSync` mutation. */
export type DeleteRepoSyncPayloadRepoSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>
}

/** All input for the `deleteRepoSyncQueueById` mutation. */
export type DeleteRepoSyncQueueByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['BigInt']
}

/** All input for the `deleteRepoSyncQueue` mutation. */
export type DeleteRepoSyncQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncQueue` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `RepoSyncQueue` mutation. */
export type DeleteRepoSyncQueuePayload = {
  __typename?: 'DeleteRepoSyncQueuePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoSyncQueueId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSyncByRepoSyncId?: Maybe<RepoSync>
  /** The `RepoSyncQueue` that was deleted by this mutation. */
  repoSyncQueue?: Maybe<RepoSyncQueue>
  /** An edge for our `RepoSyncQueue`. May be used by Relay 1. */
  repoSyncQueueEdge?: Maybe<RepoSyncQueuesEdge>
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>
}

/** The output of our delete `RepoSyncQueue` mutation. */
export type DeleteRepoSyncQueuePayloadRepoSyncQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>
}

/** All input for the `deleteRepoSyncQueueStatusTypeByType` mutation. */
export type DeleteRepoSyncQueueStatusTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

/** All input for the `deleteRepoSyncQueueStatusType` mutation. */
export type DeleteRepoSyncQueueStatusTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncQueueStatusType` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `RepoSyncQueueStatusType` mutation. */
export type DeleteRepoSyncQueueStatusTypePayload = {
  __typename?: 'DeleteRepoSyncQueueStatusTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoSyncQueueStatusTypeId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncQueueStatusType` that was deleted by this mutation. */
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>
  /** An edge for our `RepoSyncQueueStatusType`. May be used by Relay 1. */
  repoSyncQueueStatusTypeEdge?: Maybe<RepoSyncQueueStatusTypesEdge>
}

/** The output of our delete `RepoSyncQueueStatusType` mutation. */
export type DeleteRepoSyncQueueStatusTypePayloadRepoSyncQueueStatusTypeEdgeArgs =
  {
    orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>
  }

/** All input for the `deleteRepoSyncTypeByType` mutation. */
export type DeleteRepoSyncTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

/** All input for the `deleteRepoSyncType` mutation. */
export type DeleteRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncType` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `RepoSyncType` mutation. */
export type DeleteRepoSyncTypePayload = {
  __typename?: 'DeleteRepoSyncTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedRepoSyncTypeId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncType` that was deleted by this mutation. */
  repoSyncType?: Maybe<RepoSyncType>
  /** An edge for our `RepoSyncType`. May be used by Relay 1. */
  repoSyncTypeEdge?: Maybe<RepoSyncTypesEdge>
}

/** The output of our delete `RepoSyncType` mutation. */
export type DeleteRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>
}

/** All input for the `deleteSchemaMigrationByVersion` mutation. */
export type DeleteSchemaMigrationByVersionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  version: Scalars['BigInt']
}

/** All input for the `deleteSchemaMigration` mutation. */
export type DeleteSchemaMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `SchemaMigration` to be deleted. */
  nodeId: Scalars['ID']
}

/** The output of our delete `SchemaMigration` mutation. */
export type DeleteSchemaMigrationPayload = {
  __typename?: 'DeleteSchemaMigrationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  deletedSchemaMigrationId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `SchemaMigration` that was deleted by this mutation. */
  schemaMigration?: Maybe<SchemaMigration>
  /** An edge for our `SchemaMigration`. May be used by Relay 1. */
  schemaMigrationEdge?: Maybe<SchemaMigrationsEdge>
}

/** The output of our delete `SchemaMigration` mutation. */
export type DeleteSchemaMigrationPayloadSchemaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>
}

export type GitBranch = {
  __typename?: 'GitBranch'
  fullName?: Maybe<Scalars['String']>
  hash?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  remote?: Maybe<Scalars['String']>
  repoId?: Maybe<Scalars['UUID']>
  tagCommitHash?: Maybe<Scalars['String']>
  target?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/**
 * A condition to be used against `GitBranch` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GitBranchCondition = {
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `remote` field. */
  remote?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `target` field. */
  target?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GitBranch` */
export type GitBranchInput = {
  fullName?: InputMaybe<Scalars['String']>
  hash?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  remote?: InputMaybe<Scalars['String']>
  repoId?: InputMaybe<Scalars['UUID']>
  tagCommitHash?: InputMaybe<Scalars['String']>
  target?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `GitBranch` values. */
export type GitBranchesConnection = {
  __typename?: 'GitBranchesConnection'
  /** A list of edges which contains the `GitBranch` and cursor to aid in pagination. */
  edges: Array<GitBranchesEdge>
  /** A list of `GitBranch` objects. */
  nodes: Array<Maybe<GitBranch>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitBranch` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GitBranch` edge in the connection. */
export type GitBranchesEdge = {
  __typename?: 'GitBranchesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitBranch` at the end of the edge. */
  node?: Maybe<GitBranch>
}

/** Methods to use when ordering `GitBranch`. */
export enum GitBranchesOrderBy {
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  RemoteAsc = 'REMOTE_ASC',
  RemoteDesc = 'REMOTE_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  TagCommitHashAsc = 'TAG_COMMIT_HASH_ASC',
  TagCommitHashDesc = 'TAG_COMMIT_HASH_DESC',
  TargetAsc = 'TARGET_ASC',
  TargetDesc = 'TARGET_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** Git repository commits */
export type GitCommit = Node & {
  __typename?: 'GitCommit'
  authorEmail: Scalars['String']
  authorName: Scalars['String']
  authorWhen: Scalars['Datetime']
  committerEmail: Scalars['String']
  committerName: Scalars['String']
  committerWhen: Scalars['Datetime']
  hash: Scalars['String']
  message: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  parents: Scalars['Int']
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
}

/**
 * A condition to be used against `GitCommit` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GitCommitCondition = {
  /** Checks for equality with the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorName` field. */
  authorName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `committerEmail` field. */
  committerEmail?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `committerName` field. */
  committerName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `committerWhen` field. */
  committerWhen?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `parents` field. */
  parents?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
}

/** An input for mutations affecting `GitCommit` */
export type GitCommitInput = {
  authorEmail: Scalars['String']
  authorName: Scalars['String']
  authorWhen: Scalars['Datetime']
  committerEmail: Scalars['String']
  committerName: Scalars['String']
  committerWhen: Scalars['Datetime']
  hash: Scalars['String']
  message: Scalars['String']
  parents: Scalars['Int']
  repoId: Scalars['UUID']
}

/** Represents an update to a `GitCommit`. Fields that are set will be updated. */
export type GitCommitPatch = {
  authorEmail?: InputMaybe<Scalars['String']>
  authorName?: InputMaybe<Scalars['String']>
  authorWhen?: InputMaybe<Scalars['Datetime']>
  committerEmail?: InputMaybe<Scalars['String']>
  committerName?: InputMaybe<Scalars['String']>
  committerWhen?: InputMaybe<Scalars['Datetime']>
  hash?: InputMaybe<Scalars['String']>
  message?: InputMaybe<Scalars['String']>
  parents?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['UUID']>
}

/** Commit stats */
export type GitCommitStat = {
  __typename?: 'GitCommitStat'
  additions: Scalars['Int']
  commitHash: Scalars['String']
  deletions: Scalars['Int']
  filePath: Scalars['String']
  /** Reads a single `Repo` that is related to this `GitCommitStat`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
}

/**
 * A condition to be used against `GitCommitStat` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GitCommitStatCondition = {
  /** Checks for equality with the object’s `additions` field. */
  additions?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `commitHash` field. */
  commitHash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `deletions` field. */
  deletions?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `filePath` field. */
  filePath?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
}

/** An input for mutations affecting `GitCommitStat` */
export type GitCommitStatInput = {
  additions: Scalars['Int']
  commitHash: Scalars['String']
  deletions: Scalars['Int']
  filePath: Scalars['String']
  repoId: Scalars['UUID']
}

/** A connection to a list of `GitCommitStat` values. */
export type GitCommitStatsConnection = {
  __typename?: 'GitCommitStatsConnection'
  /** A list of edges which contains the `GitCommitStat` and cursor to aid in pagination. */
  edges: Array<GitCommitStatsEdge>
  /** A list of `GitCommitStat` objects. */
  nodes: Array<Maybe<GitCommitStat>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitCommitStat` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GitCommitStat` edge in the connection. */
export type GitCommitStatsEdge = {
  __typename?: 'GitCommitStatsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitCommitStat` at the end of the edge. */
  node?: Maybe<GitCommitStat>
}

/** Methods to use when ordering `GitCommitStat`. */
export enum GitCommitStatsOrderBy {
  AdditionsAsc = 'ADDITIONS_ASC',
  AdditionsDesc = 'ADDITIONS_DESC',
  CommitHashAsc = 'COMMIT_HASH_ASC',
  CommitHashDesc = 'COMMIT_HASH_DESC',
  DeletionsAsc = 'DELETIONS_ASC',
  DeletionsDesc = 'DELETIONS_DESC',
  FilePathAsc = 'FILE_PATH_ASC',
  FilePathDesc = 'FILE_PATH_DESC',
  Natural = 'NATURAL',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
}

/** A connection to a list of `GitCommit` values. */
export type GitCommitsConnection = {
  __typename?: 'GitCommitsConnection'
  /** A list of edges which contains the `GitCommit` and cursor to aid in pagination. */
  edges: Array<GitCommitsEdge>
  /** A list of `GitCommit` objects. */
  nodes: Array<Maybe<GitCommit>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitCommit` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GitCommit` edge in the connection. */
export type GitCommitsEdge = {
  __typename?: 'GitCommitsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitCommit` at the end of the edge. */
  node?: Maybe<GitCommit>
}

/** Methods to use when ordering `GitCommit`. */
export enum GitCommitsOrderBy {
  AuthorEmailAsc = 'AUTHOR_EMAIL_ASC',
  AuthorEmailDesc = 'AUTHOR_EMAIL_DESC',
  AuthorNameAsc = 'AUTHOR_NAME_ASC',
  AuthorNameDesc = 'AUTHOR_NAME_DESC',
  AuthorWhenAsc = 'AUTHOR_WHEN_ASC',
  AuthorWhenDesc = 'AUTHOR_WHEN_DESC',
  CommitterEmailAsc = 'COMMITTER_EMAIL_ASC',
  CommitterEmailDesc = 'COMMITTER_EMAIL_DESC',
  CommitterNameAsc = 'COMMITTER_NAME_ASC',
  CommitterNameDesc = 'COMMITTER_NAME_DESC',
  CommitterWhenAsc = 'COMMITTER_WHEN_ASC',
  CommitterWhenDesc = 'COMMITTER_WHEN_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  MessageAsc = 'MESSAGE_ASC',
  MessageDesc = 'MESSAGE_DESC',
  Natural = 'NATURAL',
  ParentsAsc = 'PARENTS_ASC',
  ParentsDesc = 'PARENTS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
}

/** Git repository files */
export type GitFile = Node & {
  __typename?: 'GitFile'
  contents?: Maybe<Scalars['String']>
  executable: Scalars['Boolean']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  path: Scalars['String']
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
}

/** A condition to be used against `GitFile` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GitFileCondition = {
  /** Checks for equality with the object’s `contents` field. */
  contents?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `executable` field. */
  executable?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
}

/** An input for mutations affecting `GitFile` */
export type GitFileInput = {
  contents?: InputMaybe<Scalars['String']>
  executable: Scalars['Boolean']
  path: Scalars['String']
  repoId: Scalars['UUID']
}

/** Represents an update to a `GitFile`. Fields that are set will be updated. */
export type GitFilePatch = {
  contents?: InputMaybe<Scalars['String']>
  executable?: InputMaybe<Scalars['Boolean']>
  path?: InputMaybe<Scalars['String']>
  repoId?: InputMaybe<Scalars['UUID']>
}

/** A connection to a list of `GitFile` values. */
export type GitFilesConnection = {
  __typename?: 'GitFilesConnection'
  /** A list of edges which contains the `GitFile` and cursor to aid in pagination. */
  edges: Array<GitFilesEdge>
  /** A list of `GitFile` objects. */
  nodes: Array<Maybe<GitFile>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitFile` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GitFile` edge in the connection. */
export type GitFilesEdge = {
  __typename?: 'GitFilesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitFile` at the end of the edge. */
  node?: Maybe<GitFile>
}

/** Methods to use when ordering `GitFile`. */
export enum GitFilesOrderBy {
  ContentsAsc = 'CONTENTS_ASC',
  ContentsDesc = 'CONTENTS_DESC',
  ExecutableAsc = 'EXECUTABLE_ASC',
  ExecutableDesc = 'EXECUTABLE_DESC',
  Natural = 'NATURAL',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
}

/** Refs for a Git repo */
export type GitRef = Node & {
  __typename?: 'GitRef'
  fullName: Scalars['String']
  hash?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  remote?: Maybe<Scalars['String']>
  repoId: Scalars['UUID']
  tagCommitHash?: Maybe<Scalars['String']>
  target?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** A condition to be used against `GitRef` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GitRefCondition = {
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `remote` field. */
  remote?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `target` field. */
  target?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GitRef` */
export type GitRefInput = {
  fullName: Scalars['String']
  hash?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  remote?: InputMaybe<Scalars['String']>
  repoId: Scalars['UUID']
  tagCommitHash?: InputMaybe<Scalars['String']>
  target?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** Represents an update to a `GitRef`. Fields that are set will be updated. */
export type GitRefPatch = {
  fullName?: InputMaybe<Scalars['String']>
  hash?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  remote?: InputMaybe<Scalars['String']>
  repoId?: InputMaybe<Scalars['UUID']>
  tagCommitHash?: InputMaybe<Scalars['String']>
  target?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `GitRef` values. */
export type GitRefsConnection = {
  __typename?: 'GitRefsConnection'
  /** A list of edges which contains the `GitRef` and cursor to aid in pagination. */
  edges: Array<GitRefsEdge>
  /** A list of `GitRef` objects. */
  nodes: Array<Maybe<GitRef>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitRef` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GitRef` edge in the connection. */
export type GitRefsEdge = {
  __typename?: 'GitRefsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitRef` at the end of the edge. */
  node?: Maybe<GitRef>
}

/** Methods to use when ordering `GitRef`. */
export enum GitRefsOrderBy {
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RemoteAsc = 'REMOTE_ASC',
  RemoteDesc = 'REMOTE_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  TagCommitHashAsc = 'TAG_COMMIT_HASH_ASC',
  TagCommitHashDesc = 'TAG_COMMIT_HASH_DESC',
  TargetAsc = 'TARGET_ASC',
  TargetDesc = 'TARGET_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

export type GitTag = {
  __typename?: 'GitTag'
  fullName?: Maybe<Scalars['String']>
  hash?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  remote?: Maybe<Scalars['String']>
  repoId?: Maybe<Scalars['UUID']>
  tagCommitHash?: Maybe<Scalars['String']>
  target?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

/** A condition to be used against `GitTag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GitTagCondition = {
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `remote` field. */
  remote?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `target` field. */
  target?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GitTag` */
export type GitTagInput = {
  fullName?: InputMaybe<Scalars['String']>
  hash?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  remote?: InputMaybe<Scalars['String']>
  repoId?: InputMaybe<Scalars['UUID']>
  tagCommitHash?: InputMaybe<Scalars['String']>
  target?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `GitTag` values. */
export type GitTagsConnection = {
  __typename?: 'GitTagsConnection'
  /** A list of edges which contains the `GitTag` and cursor to aid in pagination. */
  edges: Array<GitTagsEdge>
  /** A list of `GitTag` objects. */
  nodes: Array<Maybe<GitTag>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitTag` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GitTag` edge in the connection. */
export type GitTagsEdge = {
  __typename?: 'GitTagsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitTag` at the end of the edge. */
  node?: Maybe<GitTag>
}

/** Methods to use when ordering `GitTag`. */
export enum GitTagsOrderBy {
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  RemoteAsc = 'REMOTE_ASC',
  RemoteDesc = 'REMOTE_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  TagCommitHashAsc = 'TAG_COMMIT_HASH_ASC',
  TagCommitHashDesc = 'TAG_COMMIT_HASH_DESC',
  TargetAsc = 'TARGET_ASC',
  TargetDesc = 'TARGET_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** GitHub issues */
export type GithubIssue = Node & {
  __typename?: 'GithubIssue'
  authorLogin?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  closed?: Maybe<Scalars['Boolean']>
  closedAt?: Maybe<Scalars['Datetime']>
  commentCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['Datetime']>
  createdViaEmail?: Maybe<Scalars['Boolean']>
  databaseId: Scalars['Int']
  editorLogin?: Maybe<Scalars['String']>
  includesCreatedEdit?: Maybe<Scalars['Boolean']>
  labelCount?: Maybe<Scalars['Int']>
  lastEditedAt?: Maybe<Scalars['Datetime']>
  locked?: Maybe<Scalars['Boolean']>
  milestoneCount?: Maybe<Scalars['Int']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  number: Scalars['Int']
  participantCount?: Maybe<Scalars['Int']>
  publishedAt?: Maybe<Scalars['Datetime']>
  reactionCount?: Maybe<Scalars['Int']>
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
  state?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Datetime']>
  url?: Maybe<Scalars['String']>
}

/**
 * A condition to be used against `GithubIssue` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GithubIssueCondition = {
  /** Checks for equality with the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `closed` field. */
  closed?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `closedAt` field. */
  closedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `commentCount` field. */
  commentCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `databaseId` field. */
  databaseId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `includesCreatedEdit` field. */
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `labelCount` field. */
  labelCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `locked` field. */
  locked?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `milestoneCount` field. */
  milestoneCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `number` field. */
  number?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `participantCount` field. */
  participantCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `reactionCount` field. */
  reactionCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GithubIssue` */
export type GithubIssueInput = {
  authorLogin?: InputMaybe<Scalars['String']>
  body?: InputMaybe<Scalars['String']>
  closed?: InputMaybe<Scalars['Boolean']>
  closedAt?: InputMaybe<Scalars['Datetime']>
  commentCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  databaseId: Scalars['Int']
  editorLogin?: InputMaybe<Scalars['String']>
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>
  labelCount?: InputMaybe<Scalars['Int']>
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  locked?: InputMaybe<Scalars['Boolean']>
  milestoneCount?: InputMaybe<Scalars['Int']>
  number: Scalars['Int']
  participantCount?: InputMaybe<Scalars['Int']>
  publishedAt?: InputMaybe<Scalars['Datetime']>
  reactionCount?: InputMaybe<Scalars['Int']>
  repoId: Scalars['UUID']
  state?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  url?: InputMaybe<Scalars['String']>
}

/** Represents an update to a `GithubIssue`. Fields that are set will be updated. */
export type GithubIssuePatch = {
  authorLogin?: InputMaybe<Scalars['String']>
  body?: InputMaybe<Scalars['String']>
  closed?: InputMaybe<Scalars['Boolean']>
  closedAt?: InputMaybe<Scalars['Datetime']>
  commentCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  databaseId?: InputMaybe<Scalars['Int']>
  editorLogin?: InputMaybe<Scalars['String']>
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>
  labelCount?: InputMaybe<Scalars['Int']>
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  locked?: InputMaybe<Scalars['Boolean']>
  milestoneCount?: InputMaybe<Scalars['Int']>
  number?: InputMaybe<Scalars['Int']>
  participantCount?: InputMaybe<Scalars['Int']>
  publishedAt?: InputMaybe<Scalars['Datetime']>
  reactionCount?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['UUID']>
  state?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  url?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `GithubIssue` values. */
export type GithubIssuesConnection = {
  __typename?: 'GithubIssuesConnection'
  /** A list of edges which contains the `GithubIssue` and cursor to aid in pagination. */
  edges: Array<GithubIssuesEdge>
  /** A list of `GithubIssue` objects. */
  nodes: Array<Maybe<GithubIssue>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubIssue` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GithubIssue` edge in the connection. */
export type GithubIssuesEdge = {
  __typename?: 'GithubIssuesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubIssue` at the end of the edge. */
  node?: Maybe<GithubIssue>
}

/** Methods to use when ordering `GithubIssue`. */
export enum GithubIssuesOrderBy {
  AuthorLoginAsc = 'AUTHOR_LOGIN_ASC',
  AuthorLoginDesc = 'AUTHOR_LOGIN_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  ClosedAsc = 'CLOSED_ASC',
  ClosedAtAsc = 'CLOSED_AT_ASC',
  ClosedAtDesc = 'CLOSED_AT_DESC',
  ClosedDesc = 'CLOSED_DESC',
  CommentCountAsc = 'COMMENT_COUNT_ASC',
  CommentCountDesc = 'COMMENT_COUNT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedViaEmailAsc = 'CREATED_VIA_EMAIL_ASC',
  CreatedViaEmailDesc = 'CREATED_VIA_EMAIL_DESC',
  DatabaseIdAsc = 'DATABASE_ID_ASC',
  DatabaseIdDesc = 'DATABASE_ID_DESC',
  EditorLoginAsc = 'EDITOR_LOGIN_ASC',
  EditorLoginDesc = 'EDITOR_LOGIN_DESC',
  IncludesCreatedEditAsc = 'INCLUDES_CREATED_EDIT_ASC',
  IncludesCreatedEditDesc = 'INCLUDES_CREATED_EDIT_DESC',
  LabelCountAsc = 'LABEL_COUNT_ASC',
  LabelCountDesc = 'LABEL_COUNT_DESC',
  LastEditedAtAsc = 'LAST_EDITED_AT_ASC',
  LastEditedAtDesc = 'LAST_EDITED_AT_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  MilestoneCountAsc = 'MILESTONE_COUNT_ASC',
  MilestoneCountDesc = 'MILESTONE_COUNT_DESC',
  Natural = 'NATURAL',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  ParticipantCountAsc = 'PARTICIPANT_COUNT_ASC',
  ParticipantCountDesc = 'PARTICIPANT_COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishedAtAsc = 'PUBLISHED_AT_ASC',
  PublishedAtDesc = 'PUBLISHED_AT_DESC',
  ReactionCountAsc = 'REACTION_COUNT_ASC',
  ReactionCountDesc = 'REACTION_COUNT_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
}

/** GitHub pull requests */
export type GithubPullRequest = Node & {
  __typename?: 'GithubPullRequest'
  additions?: Maybe<Scalars['Int']>
  authorAssociation?: Maybe<Scalars['String']>
  authorAvatarUrl?: Maybe<Scalars['String']>
  authorLogin?: Maybe<Scalars['String']>
  authorName?: Maybe<Scalars['String']>
  baseRefName?: Maybe<Scalars['String']>
  baseRefOid?: Maybe<Scalars['String']>
  baseRepositoryName?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  changedFiles?: Maybe<Scalars['Int']>
  closed?: Maybe<Scalars['Boolean']>
  closedAt?: Maybe<Scalars['Datetime']>
  commentCount?: Maybe<Scalars['Int']>
  commitCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['Datetime']>
  createdViaEmail?: Maybe<Scalars['Boolean']>
  databaseId: Scalars['Int']
  deletions?: Maybe<Scalars['Int']>
  editorLogin?: Maybe<Scalars['String']>
  headRefName?: Maybe<Scalars['String']>
  headRefOid?: Maybe<Scalars['String']>
  headRepositoryName?: Maybe<Scalars['String']>
  isDraft?: Maybe<Scalars['Boolean']>
  labelCount?: Maybe<Scalars['Int']>
  lastEditedAt?: Maybe<Scalars['Datetime']>
  locked?: Maybe<Scalars['Boolean']>
  maintainerCanModify?: Maybe<Scalars['Boolean']>
  mantainerCanModify?: Maybe<Scalars['Boolean']>
  mergeable?: Maybe<Scalars['String']>
  merged?: Maybe<Scalars['Boolean']>
  mergedAt?: Maybe<Scalars['Datetime']>
  mergedBy?: Maybe<Scalars['String']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  number?: Maybe<Scalars['Int']>
  participantCount?: Maybe<Scalars['Int']>
  publishedAt?: Maybe<Scalars['Datetime']>
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
  reviewDecision?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Datetime']>
  url?: Maybe<Scalars['String']>
}

/** GitHub pull request commits */
export type GithubPullRequestCommit = Node & {
  __typename?: 'GithubPullRequestCommit'
  additions?: Maybe<Scalars['Int']>
  authorEmail?: Maybe<Scalars['String']>
  authorName?: Maybe<Scalars['String']>
  authorWhen?: Maybe<Scalars['Datetime']>
  changedFiles?: Maybe<Scalars['Int']>
  committerEmail?: Maybe<Scalars['String']>
  committerName?: Maybe<Scalars['String']>
  committerWhen?: Maybe<Scalars['Datetime']>
  deletions?: Maybe<Scalars['Int']>
  hash: Scalars['String']
  message?: Maybe<Scalars['String']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  prNumber: Scalars['Int']
  repoId: Scalars['UUID']
  url?: Maybe<Scalars['String']>
}

/**
 * A condition to be used against `GithubPullRequestCommit` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GithubPullRequestCommitCondition = {
  /** Checks for equality with the object’s `additions` field. */
  additions?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorName` field. */
  authorName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `changedFiles` field. */
  changedFiles?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `committerEmail` field. */
  committerEmail?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `committerName` field. */
  committerName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `committerWhen` field. */
  committerWhen?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `deletions` field. */
  deletions?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `prNumber` field. */
  prNumber?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GithubPullRequestCommit` */
export type GithubPullRequestCommitInput = {
  additions?: InputMaybe<Scalars['Int']>
  authorEmail?: InputMaybe<Scalars['String']>
  authorName?: InputMaybe<Scalars['String']>
  authorWhen?: InputMaybe<Scalars['Datetime']>
  changedFiles?: InputMaybe<Scalars['Int']>
  committerEmail?: InputMaybe<Scalars['String']>
  committerName?: InputMaybe<Scalars['String']>
  committerWhen?: InputMaybe<Scalars['Datetime']>
  deletions?: InputMaybe<Scalars['Int']>
  hash: Scalars['String']
  message?: InputMaybe<Scalars['String']>
  prNumber: Scalars['Int']
  repoId: Scalars['UUID']
  url?: InputMaybe<Scalars['String']>
}

/** Represents an update to a `GithubPullRequestCommit`. Fields that are set will be updated. */
export type GithubPullRequestCommitPatch = {
  additions?: InputMaybe<Scalars['Int']>
  authorEmail?: InputMaybe<Scalars['String']>
  authorName?: InputMaybe<Scalars['String']>
  authorWhen?: InputMaybe<Scalars['Datetime']>
  changedFiles?: InputMaybe<Scalars['Int']>
  committerEmail?: InputMaybe<Scalars['String']>
  committerName?: InputMaybe<Scalars['String']>
  committerWhen?: InputMaybe<Scalars['Datetime']>
  deletions?: InputMaybe<Scalars['Int']>
  hash?: InputMaybe<Scalars['String']>
  message?: InputMaybe<Scalars['String']>
  prNumber?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['UUID']>
  url?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `GithubPullRequestCommit` values. */
export type GithubPullRequestCommitsConnection = {
  __typename?: 'GithubPullRequestCommitsConnection'
  /** A list of edges which contains the `GithubPullRequestCommit` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestCommitsEdge>
  /** A list of `GithubPullRequestCommit` objects. */
  nodes: Array<Maybe<GithubPullRequestCommit>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubPullRequestCommit` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GithubPullRequestCommit` edge in the connection. */
export type GithubPullRequestCommitsEdge = {
  __typename?: 'GithubPullRequestCommitsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubPullRequestCommit` at the end of the edge. */
  node?: Maybe<GithubPullRequestCommit>
}

/** Methods to use when ordering `GithubPullRequestCommit`. */
export enum GithubPullRequestCommitsOrderBy {
  AdditionsAsc = 'ADDITIONS_ASC',
  AdditionsDesc = 'ADDITIONS_DESC',
  AuthorEmailAsc = 'AUTHOR_EMAIL_ASC',
  AuthorEmailDesc = 'AUTHOR_EMAIL_DESC',
  AuthorNameAsc = 'AUTHOR_NAME_ASC',
  AuthorNameDesc = 'AUTHOR_NAME_DESC',
  AuthorWhenAsc = 'AUTHOR_WHEN_ASC',
  AuthorWhenDesc = 'AUTHOR_WHEN_DESC',
  ChangedFilesAsc = 'CHANGED_FILES_ASC',
  ChangedFilesDesc = 'CHANGED_FILES_DESC',
  CommitterEmailAsc = 'COMMITTER_EMAIL_ASC',
  CommitterEmailDesc = 'COMMITTER_EMAIL_DESC',
  CommitterNameAsc = 'COMMITTER_NAME_ASC',
  CommitterNameDesc = 'COMMITTER_NAME_DESC',
  CommitterWhenAsc = 'COMMITTER_WHEN_ASC',
  CommitterWhenDesc = 'COMMITTER_WHEN_DESC',
  DeletionsAsc = 'DELETIONS_ASC',
  DeletionsDesc = 'DELETIONS_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  MessageAsc = 'MESSAGE_ASC',
  MessageDesc = 'MESSAGE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PrNumberAsc = 'PR_NUMBER_ASC',
  PrNumberDesc = 'PR_NUMBER_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
}

/**
 * A condition to be used against `GithubPullRequest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GithubPullRequestCondition = {
  /** Checks for equality with the object’s `additions` field. */
  additions?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `authorAssociation` field. */
  authorAssociation?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorAvatarUrl` field. */
  authorAvatarUrl?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorName` field. */
  authorName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `baseRefName` field. */
  baseRefName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `baseRefOid` field. */
  baseRefOid?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `baseRepositoryName` field. */
  baseRepositoryName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `changedFiles` field. */
  changedFiles?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `closed` field. */
  closed?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `closedAt` field. */
  closedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `commentCount` field. */
  commentCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `commitCount` field. */
  commitCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `databaseId` field. */
  databaseId?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `deletions` field. */
  deletions?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `headRefName` field. */
  headRefName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `headRefOid` field. */
  headRefOid?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `headRepositoryName` field. */
  headRepositoryName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `isDraft` field. */
  isDraft?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `labelCount` field. */
  labelCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `locked` field. */
  locked?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `maintainerCanModify` field. */
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `mantainerCanModify` field. */
  mantainerCanModify?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `mergeable` field. */
  mergeable?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `merged` field. */
  merged?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `mergedAt` field. */
  mergedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `mergedBy` field. */
  mergedBy?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `number` field. */
  number?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `participantCount` field. */
  participantCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `reviewDecision` field. */
  reviewDecision?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GithubPullRequest` */
export type GithubPullRequestInput = {
  additions?: InputMaybe<Scalars['Int']>
  authorAssociation?: InputMaybe<Scalars['String']>
  authorAvatarUrl?: InputMaybe<Scalars['String']>
  authorLogin?: InputMaybe<Scalars['String']>
  authorName?: InputMaybe<Scalars['String']>
  baseRefName?: InputMaybe<Scalars['String']>
  baseRefOid?: InputMaybe<Scalars['String']>
  baseRepositoryName?: InputMaybe<Scalars['String']>
  body?: InputMaybe<Scalars['String']>
  changedFiles?: InputMaybe<Scalars['Int']>
  closed?: InputMaybe<Scalars['Boolean']>
  closedAt?: InputMaybe<Scalars['Datetime']>
  commentCount?: InputMaybe<Scalars['Int']>
  commitCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  databaseId: Scalars['Int']
  deletions?: InputMaybe<Scalars['Int']>
  editorLogin?: InputMaybe<Scalars['String']>
  headRefName?: InputMaybe<Scalars['String']>
  headRefOid?: InputMaybe<Scalars['String']>
  headRepositoryName?: InputMaybe<Scalars['String']>
  isDraft?: InputMaybe<Scalars['Boolean']>
  labelCount?: InputMaybe<Scalars['Int']>
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  locked?: InputMaybe<Scalars['Boolean']>
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>
  mantainerCanModify?: InputMaybe<Scalars['Boolean']>
  mergeable?: InputMaybe<Scalars['String']>
  merged?: InputMaybe<Scalars['Boolean']>
  mergedAt?: InputMaybe<Scalars['Datetime']>
  mergedBy?: InputMaybe<Scalars['String']>
  number?: InputMaybe<Scalars['Int']>
  participantCount?: InputMaybe<Scalars['Int']>
  publishedAt?: InputMaybe<Scalars['Datetime']>
  repoId: Scalars['UUID']
  reviewDecision?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  url?: InputMaybe<Scalars['String']>
}

/** Represents an update to a `GithubPullRequest`. Fields that are set will be updated. */
export type GithubPullRequestPatch = {
  additions?: InputMaybe<Scalars['Int']>
  authorAssociation?: InputMaybe<Scalars['String']>
  authorAvatarUrl?: InputMaybe<Scalars['String']>
  authorLogin?: InputMaybe<Scalars['String']>
  authorName?: InputMaybe<Scalars['String']>
  baseRefName?: InputMaybe<Scalars['String']>
  baseRefOid?: InputMaybe<Scalars['String']>
  baseRepositoryName?: InputMaybe<Scalars['String']>
  body?: InputMaybe<Scalars['String']>
  changedFiles?: InputMaybe<Scalars['Int']>
  closed?: InputMaybe<Scalars['Boolean']>
  closedAt?: InputMaybe<Scalars['Datetime']>
  commentCount?: InputMaybe<Scalars['Int']>
  commitCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  databaseId?: InputMaybe<Scalars['Int']>
  deletions?: InputMaybe<Scalars['Int']>
  editorLogin?: InputMaybe<Scalars['String']>
  headRefName?: InputMaybe<Scalars['String']>
  headRefOid?: InputMaybe<Scalars['String']>
  headRepositoryName?: InputMaybe<Scalars['String']>
  isDraft?: InputMaybe<Scalars['Boolean']>
  labelCount?: InputMaybe<Scalars['Int']>
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  locked?: InputMaybe<Scalars['Boolean']>
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>
  mantainerCanModify?: InputMaybe<Scalars['Boolean']>
  mergeable?: InputMaybe<Scalars['String']>
  merged?: InputMaybe<Scalars['Boolean']>
  mergedAt?: InputMaybe<Scalars['Datetime']>
  mergedBy?: InputMaybe<Scalars['String']>
  number?: InputMaybe<Scalars['Int']>
  participantCount?: InputMaybe<Scalars['Int']>
  publishedAt?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['UUID']>
  reviewDecision?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  url?: InputMaybe<Scalars['String']>
}

/** GitHub pull request reviews */
export type GithubPullRequestReview = Node & {
  __typename?: 'GithubPullRequestReview'
  authorAssociation?: Maybe<Scalars['String']>
  authorCanPushToRepository?: Maybe<Scalars['Boolean']>
  authorLogin?: Maybe<Scalars['String']>
  authorUrl?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  commentCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['Datetime']>
  createdViaEmail?: Maybe<Scalars['Boolean']>
  editorLogin?: Maybe<Scalars['String']>
  id: Scalars['String']
  lastEditedAt?: Maybe<Scalars['Datetime']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  prNumber: Scalars['Int']
  publishedAt?: Maybe<Scalars['Datetime']>
  repoId: Scalars['UUID']
  state?: Maybe<Scalars['String']>
  submittedAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
}

/**
 * A condition to be used against `GithubPullRequestReview` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GithubPullRequestReviewCondition = {
  /** Checks for equality with the object’s `authorAssociation` field. */
  authorAssociation?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorCanPushToRepository` field. */
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `authorUrl` field. */
  authorUrl?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `commentCount` field. */
  commentCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `prNumber` field. */
  prNumber?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `submittedAt` field. */
  submittedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

/** An input for mutations affecting `GithubPullRequestReview` */
export type GithubPullRequestReviewInput = {
  authorAssociation?: InputMaybe<Scalars['String']>
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>
  authorLogin?: InputMaybe<Scalars['String']>
  authorUrl?: InputMaybe<Scalars['String']>
  body?: InputMaybe<Scalars['String']>
  commentCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  editorLogin?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  prNumber: Scalars['Int']
  publishedAt?: InputMaybe<Scalars['Datetime']>
  repoId: Scalars['UUID']
  state?: InputMaybe<Scalars['String']>
  submittedAt?: InputMaybe<Scalars['Datetime']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

/** Represents an update to a `GithubPullRequestReview`. Fields that are set will be updated. */
export type GithubPullRequestReviewPatch = {
  authorAssociation?: InputMaybe<Scalars['String']>
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>
  authorLogin?: InputMaybe<Scalars['String']>
  authorUrl?: InputMaybe<Scalars['String']>
  body?: InputMaybe<Scalars['String']>
  commentCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  createdViaEmail?: InputMaybe<Scalars['Boolean']>
  editorLogin?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  lastEditedAt?: InputMaybe<Scalars['Datetime']>
  prNumber?: InputMaybe<Scalars['Int']>
  publishedAt?: InputMaybe<Scalars['Datetime']>
  repoId?: InputMaybe<Scalars['UUID']>
  state?: InputMaybe<Scalars['String']>
  submittedAt?: InputMaybe<Scalars['Datetime']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

/** A connection to a list of `GithubPullRequestReview` values. */
export type GithubPullRequestReviewsConnection = {
  __typename?: 'GithubPullRequestReviewsConnection'
  /** A list of edges which contains the `GithubPullRequestReview` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestReviewsEdge>
  /** A list of `GithubPullRequestReview` objects. */
  nodes: Array<Maybe<GithubPullRequestReview>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubPullRequestReview` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GithubPullRequestReview` edge in the connection. */
export type GithubPullRequestReviewsEdge = {
  __typename?: 'GithubPullRequestReviewsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubPullRequestReview` at the end of the edge. */
  node?: Maybe<GithubPullRequestReview>
}

/** Methods to use when ordering `GithubPullRequestReview`. */
export enum GithubPullRequestReviewsOrderBy {
  AuthorAssociationAsc = 'AUTHOR_ASSOCIATION_ASC',
  AuthorAssociationDesc = 'AUTHOR_ASSOCIATION_DESC',
  AuthorCanPushToRepositoryAsc = 'AUTHOR_CAN_PUSH_TO_REPOSITORY_ASC',
  AuthorCanPushToRepositoryDesc = 'AUTHOR_CAN_PUSH_TO_REPOSITORY_DESC',
  AuthorLoginAsc = 'AUTHOR_LOGIN_ASC',
  AuthorLoginDesc = 'AUTHOR_LOGIN_DESC',
  AuthorUrlAsc = 'AUTHOR_URL_ASC',
  AuthorUrlDesc = 'AUTHOR_URL_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CommentCountAsc = 'COMMENT_COUNT_ASC',
  CommentCountDesc = 'COMMENT_COUNT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedViaEmailAsc = 'CREATED_VIA_EMAIL_ASC',
  CreatedViaEmailDesc = 'CREATED_VIA_EMAIL_DESC',
  EditorLoginAsc = 'EDITOR_LOGIN_ASC',
  EditorLoginDesc = 'EDITOR_LOGIN_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LastEditedAtAsc = 'LAST_EDITED_AT_ASC',
  LastEditedAtDesc = 'LAST_EDITED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PrNumberAsc = 'PR_NUMBER_ASC',
  PrNumberDesc = 'PR_NUMBER_DESC',
  PublishedAtAsc = 'PUBLISHED_AT_ASC',
  PublishedAtDesc = 'PUBLISHED_AT_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  SubmittedAtAsc = 'SUBMITTED_AT_ASC',
  SubmittedAtDesc = 'SUBMITTED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** A connection to a list of `GithubPullRequest` values. */
export type GithubPullRequestsConnection = {
  __typename?: 'GithubPullRequestsConnection'
  /** A list of edges which contains the `GithubPullRequest` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestsEdge>
  /** A list of `GithubPullRequest` objects. */
  nodes: Array<Maybe<GithubPullRequest>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubPullRequest` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GithubPullRequest` edge in the connection. */
export type GithubPullRequestsEdge = {
  __typename?: 'GithubPullRequestsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubPullRequest` at the end of the edge. */
  node?: Maybe<GithubPullRequest>
}

/** Methods to use when ordering `GithubPullRequest`. */
export enum GithubPullRequestsOrderBy {
  AdditionsAsc = 'ADDITIONS_ASC',
  AdditionsDesc = 'ADDITIONS_DESC',
  AuthorAssociationAsc = 'AUTHOR_ASSOCIATION_ASC',
  AuthorAssociationDesc = 'AUTHOR_ASSOCIATION_DESC',
  AuthorAvatarUrlAsc = 'AUTHOR_AVATAR_URL_ASC',
  AuthorAvatarUrlDesc = 'AUTHOR_AVATAR_URL_DESC',
  AuthorLoginAsc = 'AUTHOR_LOGIN_ASC',
  AuthorLoginDesc = 'AUTHOR_LOGIN_DESC',
  AuthorNameAsc = 'AUTHOR_NAME_ASC',
  AuthorNameDesc = 'AUTHOR_NAME_DESC',
  BaseRefNameAsc = 'BASE_REF_NAME_ASC',
  BaseRefNameDesc = 'BASE_REF_NAME_DESC',
  BaseRefOidAsc = 'BASE_REF_OID_ASC',
  BaseRefOidDesc = 'BASE_REF_OID_DESC',
  BaseRepositoryNameAsc = 'BASE_REPOSITORY_NAME_ASC',
  BaseRepositoryNameDesc = 'BASE_REPOSITORY_NAME_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  ChangedFilesAsc = 'CHANGED_FILES_ASC',
  ChangedFilesDesc = 'CHANGED_FILES_DESC',
  ClosedAsc = 'CLOSED_ASC',
  ClosedAtAsc = 'CLOSED_AT_ASC',
  ClosedAtDesc = 'CLOSED_AT_DESC',
  ClosedDesc = 'CLOSED_DESC',
  CommentCountAsc = 'COMMENT_COUNT_ASC',
  CommentCountDesc = 'COMMENT_COUNT_DESC',
  CommitCountAsc = 'COMMIT_COUNT_ASC',
  CommitCountDesc = 'COMMIT_COUNT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedViaEmailAsc = 'CREATED_VIA_EMAIL_ASC',
  CreatedViaEmailDesc = 'CREATED_VIA_EMAIL_DESC',
  DatabaseIdAsc = 'DATABASE_ID_ASC',
  DatabaseIdDesc = 'DATABASE_ID_DESC',
  DeletionsAsc = 'DELETIONS_ASC',
  DeletionsDesc = 'DELETIONS_DESC',
  EditorLoginAsc = 'EDITOR_LOGIN_ASC',
  EditorLoginDesc = 'EDITOR_LOGIN_DESC',
  HeadRefNameAsc = 'HEAD_REF_NAME_ASC',
  HeadRefNameDesc = 'HEAD_REF_NAME_DESC',
  HeadRefOidAsc = 'HEAD_REF_OID_ASC',
  HeadRefOidDesc = 'HEAD_REF_OID_DESC',
  HeadRepositoryNameAsc = 'HEAD_REPOSITORY_NAME_ASC',
  HeadRepositoryNameDesc = 'HEAD_REPOSITORY_NAME_DESC',
  IsDraftAsc = 'IS_DRAFT_ASC',
  IsDraftDesc = 'IS_DRAFT_DESC',
  LabelCountAsc = 'LABEL_COUNT_ASC',
  LabelCountDesc = 'LABEL_COUNT_DESC',
  LastEditedAtAsc = 'LAST_EDITED_AT_ASC',
  LastEditedAtDesc = 'LAST_EDITED_AT_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  MaintainerCanModifyAsc = 'MAINTAINER_CAN_MODIFY_ASC',
  MaintainerCanModifyDesc = 'MAINTAINER_CAN_MODIFY_DESC',
  MantainerCanModifyAsc = 'MANTAINER_CAN_MODIFY_ASC',
  MantainerCanModifyDesc = 'MANTAINER_CAN_MODIFY_DESC',
  MergeableAsc = 'MERGEABLE_ASC',
  MergeableDesc = 'MERGEABLE_DESC',
  MergedAsc = 'MERGED_ASC',
  MergedAtAsc = 'MERGED_AT_ASC',
  MergedAtDesc = 'MERGED_AT_DESC',
  MergedByAsc = 'MERGED_BY_ASC',
  MergedByDesc = 'MERGED_BY_DESC',
  MergedDesc = 'MERGED_DESC',
  Natural = 'NATURAL',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  ParticipantCountAsc = 'PARTICIPANT_COUNT_ASC',
  ParticipantCountDesc = 'PARTICIPANT_COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PublishedAtAsc = 'PUBLISHED_AT_ASC',
  PublishedAtDesc = 'PUBLISHED_AT_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ReviewDecisionAsc = 'REVIEW_DECISION_ASC',
  ReviewDecisionDesc = 'REVIEW_DECISION_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
}

/** GitHub metadata about a repo */
export type GithubRepoInfo = Node & {
  __typename?: 'GithubRepoInfo'
  createdAt?: Maybe<Scalars['Datetime']>
  defaultBranchName?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  diskUsage?: Maybe<Scalars['Int']>
  forkCount?: Maybe<Scalars['Int']>
  homepageUrl?: Maybe<Scalars['String']>
  isArchived?: Maybe<Scalars['Boolean']>
  isDisabled?: Maybe<Scalars['Boolean']>
  isMirror?: Maybe<Scalars['Boolean']>
  isPrivate?: Maybe<Scalars['Boolean']>
  latestReleaseAuthor?: Maybe<Scalars['String']>
  latestReleaseCreatedAt?: Maybe<Scalars['Datetime']>
  latestReleaseName?: Maybe<Scalars['String']>
  latestReleasePublishedAt?: Maybe<Scalars['Datetime']>
  licenseKey?: Maybe<Scalars['String']>
  licenseName?: Maybe<Scalars['String']>
  licenseNickname?: Maybe<Scalars['String']>
  name: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  openGraphImageUrl?: Maybe<Scalars['String']>
  owner: Scalars['String']
  primaryLanguage?: Maybe<Scalars['String']>
  pushedAt?: Maybe<Scalars['Datetime']>
  releasesCount?: Maybe<Scalars['Int']>
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
  stargazersCount?: Maybe<Scalars['Int']>
  totalIssuesCount?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Datetime']>
  watchersCount?: Maybe<Scalars['Int']>
}

/**
 * A condition to be used against `GithubRepoInfo` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GithubRepoInfoCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `defaultBranchName` field. */
  defaultBranchName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `diskUsage` field. */
  diskUsage?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `forkCount` field. */
  forkCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `homepageUrl` field. */
  homepageUrl?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `isDisabled` field. */
  isDisabled?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `isMirror` field. */
  isMirror?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `isPrivate` field. */
  isPrivate?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `latestReleaseAuthor` field. */
  latestReleaseAuthor?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `latestReleaseCreatedAt` field. */
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `latestReleaseName` field. */
  latestReleaseName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `latestReleasePublishedAt` field. */
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `licenseKey` field. */
  licenseKey?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `licenseName` field. */
  licenseName?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `licenseNickname` field. */
  licenseNickname?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `openGraphImageUrl` field. */
  openGraphImageUrl?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `owner` field. */
  owner?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `primaryLanguage` field. */
  primaryLanguage?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `pushedAt` field. */
  pushedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `releasesCount` field. */
  releasesCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `stargazersCount` field. */
  stargazersCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `totalIssuesCount` field. */
  totalIssuesCount?: InputMaybe<Scalars['Int']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `watchersCount` field. */
  watchersCount?: InputMaybe<Scalars['Int']>
}

/** An input for mutations affecting `GithubRepoInfo` */
export type GithubRepoInfoInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  defaultBranchName?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  diskUsage?: InputMaybe<Scalars['Int']>
  forkCount?: InputMaybe<Scalars['Int']>
  homepageUrl?: InputMaybe<Scalars['String']>
  isArchived?: InputMaybe<Scalars['Boolean']>
  isDisabled?: InputMaybe<Scalars['Boolean']>
  isMirror?: InputMaybe<Scalars['Boolean']>
  isPrivate?: InputMaybe<Scalars['Boolean']>
  latestReleaseAuthor?: InputMaybe<Scalars['String']>
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>
  latestReleaseName?: InputMaybe<Scalars['String']>
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>
  licenseKey?: InputMaybe<Scalars['String']>
  licenseName?: InputMaybe<Scalars['String']>
  licenseNickname?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  openGraphImageUrl?: InputMaybe<Scalars['String']>
  owner: Scalars['String']
  primaryLanguage?: InputMaybe<Scalars['String']>
  pushedAt?: InputMaybe<Scalars['Datetime']>
  releasesCount?: InputMaybe<Scalars['Int']>
  repoId: Scalars['UUID']
  stargazersCount?: InputMaybe<Scalars['Int']>
  totalIssuesCount?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  watchersCount?: InputMaybe<Scalars['Int']>
}

/** Represents an update to a `GithubRepoInfo`. Fields that are set will be updated. */
export type GithubRepoInfoPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  defaultBranchName?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  diskUsage?: InputMaybe<Scalars['Int']>
  forkCount?: InputMaybe<Scalars['Int']>
  homepageUrl?: InputMaybe<Scalars['String']>
  isArchived?: InputMaybe<Scalars['Boolean']>
  isDisabled?: InputMaybe<Scalars['Boolean']>
  isMirror?: InputMaybe<Scalars['Boolean']>
  isPrivate?: InputMaybe<Scalars['Boolean']>
  latestReleaseAuthor?: InputMaybe<Scalars['String']>
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>
  latestReleaseName?: InputMaybe<Scalars['String']>
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>
  licenseKey?: InputMaybe<Scalars['String']>
  licenseName?: InputMaybe<Scalars['String']>
  licenseNickname?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  openGraphImageUrl?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<Scalars['String']>
  primaryLanguage?: InputMaybe<Scalars['String']>
  pushedAt?: InputMaybe<Scalars['Datetime']>
  releasesCount?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['UUID']>
  stargazersCount?: InputMaybe<Scalars['Int']>
  totalIssuesCount?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  watchersCount?: InputMaybe<Scalars['Int']>
}

/** A connection to a list of `GithubRepoInfo` values. */
export type GithubRepoInfosConnection = {
  __typename?: 'GithubRepoInfosConnection'
  /** A list of edges which contains the `GithubRepoInfo` and cursor to aid in pagination. */
  edges: Array<GithubRepoInfosEdge>
  /** A list of `GithubRepoInfo` objects. */
  nodes: Array<Maybe<GithubRepoInfo>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubRepoInfo` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GithubRepoInfo` edge in the connection. */
export type GithubRepoInfosEdge = {
  __typename?: 'GithubRepoInfosEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubRepoInfo` at the end of the edge. */
  node?: Maybe<GithubRepoInfo>
}

/** Methods to use when ordering `GithubRepoInfo`. */
export enum GithubRepoInfosOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DefaultBranchNameAsc = 'DEFAULT_BRANCH_NAME_ASC',
  DefaultBranchNameDesc = 'DEFAULT_BRANCH_NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DiskUsageAsc = 'DISK_USAGE_ASC',
  DiskUsageDesc = 'DISK_USAGE_DESC',
  ForkCountAsc = 'FORK_COUNT_ASC',
  ForkCountDesc = 'FORK_COUNT_DESC',
  HomepageUrlAsc = 'HOMEPAGE_URL_ASC',
  HomepageUrlDesc = 'HOMEPAGE_URL_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  IsDisabledAsc = 'IS_DISABLED_ASC',
  IsDisabledDesc = 'IS_DISABLED_DESC',
  IsMirrorAsc = 'IS_MIRROR_ASC',
  IsMirrorDesc = 'IS_MIRROR_DESC',
  IsPrivateAsc = 'IS_PRIVATE_ASC',
  IsPrivateDesc = 'IS_PRIVATE_DESC',
  LatestReleaseAuthorAsc = 'LATEST_RELEASE_AUTHOR_ASC',
  LatestReleaseAuthorDesc = 'LATEST_RELEASE_AUTHOR_DESC',
  LatestReleaseCreatedAtAsc = 'LATEST_RELEASE_CREATED_AT_ASC',
  LatestReleaseCreatedAtDesc = 'LATEST_RELEASE_CREATED_AT_DESC',
  LatestReleaseNameAsc = 'LATEST_RELEASE_NAME_ASC',
  LatestReleaseNameDesc = 'LATEST_RELEASE_NAME_DESC',
  LatestReleasePublishedAtAsc = 'LATEST_RELEASE_PUBLISHED_AT_ASC',
  LatestReleasePublishedAtDesc = 'LATEST_RELEASE_PUBLISHED_AT_DESC',
  LicenseKeyAsc = 'LICENSE_KEY_ASC',
  LicenseKeyDesc = 'LICENSE_KEY_DESC',
  LicenseNameAsc = 'LICENSE_NAME_ASC',
  LicenseNameDesc = 'LICENSE_NAME_DESC',
  LicenseNicknameAsc = 'LICENSE_NICKNAME_ASC',
  LicenseNicknameDesc = 'LICENSE_NICKNAME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OpenGraphImageUrlAsc = 'OPEN_GRAPH_IMAGE_URL_ASC',
  OpenGraphImageUrlDesc = 'OPEN_GRAPH_IMAGE_URL_DESC',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PrimaryLanguageAsc = 'PRIMARY_LANGUAGE_ASC',
  PrimaryLanguageDesc = 'PRIMARY_LANGUAGE_DESC',
  PushedAtAsc = 'PUSHED_AT_ASC',
  PushedAtDesc = 'PUSHED_AT_DESC',
  ReleasesCountAsc = 'RELEASES_COUNT_ASC',
  ReleasesCountDesc = 'RELEASES_COUNT_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  StargazersCountAsc = 'STARGAZERS_COUNT_ASC',
  StargazersCountDesc = 'STARGAZERS_COUNT_DESC',
  TotalIssuesCountAsc = 'TOTAL_ISSUES_COUNT_ASC',
  TotalIssuesCountDesc = 'TOTAL_ISSUES_COUNT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  WatchersCountAsc = 'WATCHERS_COUNT_ASC',
  WatchersCountDesc = 'WATCHERS_COUNT_DESC',
}

/** GitHub stargazers for a repo */
export type GithubStargazer = Node & {
  __typename?: 'GithubStargazer'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  email?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  login: Scalars['String']
  name?: Maybe<Scalars['String']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
  starredAt?: Maybe<Scalars['Datetime']>
  twitter?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Datetime']>
  website?: Maybe<Scalars['String']>
}

/**
 * A condition to be used against `GithubStargazer` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GithubStargazerCondition = {
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `bio` field. */
  bio?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `company` field. */
  company?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `location` field. */
  location?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `login` field. */
  login?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `starredAt` field. */
  starredAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `twitter` field. */
  twitter?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `website` field. */
  website?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `GithubStargazer` */
export type GithubStargazerInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  login: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  repoId: Scalars['UUID']
  starredAt?: InputMaybe<Scalars['Datetime']>
  twitter?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  website?: InputMaybe<Scalars['String']>
}

/** Represents an update to a `GithubStargazer`. Fields that are set will be updated. */
export type GithubStargazerPatch = {
  avatarUrl?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['Datetime']>
  email?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  login?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  repoId?: InputMaybe<Scalars['UUID']>
  starredAt?: InputMaybe<Scalars['Datetime']>
  twitter?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
  website?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `GithubStargazer` values. */
export type GithubStargazersConnection = {
  __typename?: 'GithubStargazersConnection'
  /** A list of edges which contains the `GithubStargazer` and cursor to aid in pagination. */
  edges: Array<GithubStargazersEdge>
  /** A list of `GithubStargazer` objects. */
  nodes: Array<Maybe<GithubStargazer>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubStargazer` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `GithubStargazer` edge in the connection. */
export type GithubStargazersEdge = {
  __typename?: 'GithubStargazersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubStargazer` at the end of the edge. */
  node?: Maybe<GithubStargazer>
}

/** Methods to use when ordering `GithubStargazer`. */
export enum GithubStargazersOrderBy {
  AvatarUrlAsc = 'AVATAR_URL_ASC',
  AvatarUrlDesc = 'AVATAR_URL_DESC',
  BioAsc = 'BIO_ASC',
  BioDesc = 'BIO_DESC',
  CompanyAsc = 'COMPANY_ASC',
  CompanyDesc = 'COMPANY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
  LoginAsc = 'LOGIN_ASC',
  LoginDesc = 'LOGIN_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  StarredAtAsc = 'STARRED_AT_ASC',
  StarredAtDesc = 'STARRED_AT_DESC',
  TwitterAsc = 'TWITTER_ASC',
  TwitterDesc = 'TWITTER_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  WebsiteAsc = 'WEBSITE_ASC',
  WebsiteDesc = 'WEBSITE_DESC',
}

/** An interval of time that has passed where the smallest distinct unit is a second. */
export type Interval = {
  __typename?: 'Interval'
  /** A quantity of days. */
  days?: Maybe<Scalars['Int']>
  /** A quantity of hours. */
  hours?: Maybe<Scalars['Int']>
  /** A quantity of minutes. */
  minutes?: Maybe<Scalars['Int']>
  /** A quantity of months. */
  months?: Maybe<Scalars['Int']>
  /**
   * A quantity of seconds. This is the only non-integer field, as all the other
   * fields will dump their overflow into a smaller unit of time. Intervals don’t
   * have a smaller unit than seconds.
   */
  seconds?: Maybe<Scalars['Float']>
  /** A quantity of years. */
  years?: Maybe<Scalars['Int']>
}

/** An interval of time that has passed where the smallest distinct unit is a second. */
export type IntervalInput = {
  /** A quantity of days. */
  days?: InputMaybe<Scalars['Int']>
  /** A quantity of hours. */
  hours?: InputMaybe<Scalars['Int']>
  /** A quantity of minutes. */
  minutes?: InputMaybe<Scalars['Int']>
  /** A quantity of months. */
  months?: InputMaybe<Scalars['Int']>
  /**
   * A quantity of seconds. This is the only non-integer field, as all the other
   * fields will dump their overflow into a smaller unit of time. Intervals don’t
   * have a smaller unit than seconds.
   */
  seconds?: InputMaybe<Scalars['Float']>
  /** A quantity of years. */
  years?: InputMaybe<Scalars['Int']>
}

export type LatestRepoSync = {
  __typename?: 'LatestRepoSync'
  createdAt?: Maybe<Scalars['Datetime']>
  doneAt?: Maybe<Scalars['Datetime']>
  id?: Maybe<Scalars['BigInt']>
  repoSyncId?: Maybe<Scalars['UUID']>
  startedAt?: Maybe<Scalars['Datetime']>
  status?: Maybe<Scalars['String']>
}

/**
 * A condition to be used against `LatestRepoSync` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LatestRepoSyncCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `doneAt` field. */
  doneAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>
  /** Checks for equality with the object’s `repoSyncId` field. */
  repoSyncId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `startedAt` field. */
  startedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `LatestRepoSync` values. */
export type LatestRepoSyncsConnection = {
  __typename?: 'LatestRepoSyncsConnection'
  /** A list of edges which contains the `LatestRepoSync` and cursor to aid in pagination. */
  edges: Array<LatestRepoSyncsEdge>
  /** A list of `LatestRepoSync` objects. */
  nodes: Array<Maybe<LatestRepoSync>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `LatestRepoSync` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `LatestRepoSync` edge in the connection. */
export type LatestRepoSyncsEdge = {
  __typename?: 'LatestRepoSyncsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `LatestRepoSync` at the end of the edge. */
  node?: Maybe<LatestRepoSync>
}

/** Methods to use when ordering `LatestRepoSync`. */
export enum LatestRepoSyncsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DoneAtAsc = 'DONE_AT_ASC',
  DoneAtDesc = 'DONE_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  RepoSyncIdAsc = 'REPO_SYNC_ID_ASC',
  RepoSyncIdDesc = 'REPO_SYNC_ID_DESC',
  StartedAtAsc = 'STARTED_AT_ASC',
  StartedAtDesc = 'STARTED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation'
  /** Creates a single `GitBranch`. */
  createGitBranch?: Maybe<CreateGitBranchPayload>
  /** Creates a single `GitCommit`. */
  createGitCommit?: Maybe<CreateGitCommitPayload>
  /** Creates a single `GitCommitStat`. */
  createGitCommitStat?: Maybe<CreateGitCommitStatPayload>
  /** Creates a single `GitFile`. */
  createGitFile?: Maybe<CreateGitFilePayload>
  /** Creates a single `GitRef`. */
  createGitRef?: Maybe<CreateGitRefPayload>
  /** Creates a single `GitTag`. */
  createGitTag?: Maybe<CreateGitTagPayload>
  /** Creates a single `GithubIssue`. */
  createGithubIssue?: Maybe<CreateGithubIssuePayload>
  /** Creates a single `GithubPullRequest`. */
  createGithubPullRequest?: Maybe<CreateGithubPullRequestPayload>
  /** Creates a single `GithubPullRequestCommit`. */
  createGithubPullRequestCommit?: Maybe<CreateGithubPullRequestCommitPayload>
  /** Creates a single `GithubPullRequestReview`. */
  createGithubPullRequestReview?: Maybe<CreateGithubPullRequestReviewPayload>
  /** Creates a single `GithubRepoInfo`. */
  createGithubRepoInfo?: Maybe<CreateGithubRepoInfoPayload>
  /** Creates a single `GithubStargazer`. */
  createGithubStargazer?: Maybe<CreateGithubStargazerPayload>
  /** Creates a single `Repo`. */
  createRepo?: Maybe<CreateRepoPayload>
  /** Creates a single `RepoImport`. */
  createRepoImport?: Maybe<CreateRepoImportPayload>
  /** Creates a single `RepoImportType`. */
  createRepoImportType?: Maybe<CreateRepoImportTypePayload>
  /** Creates a single `RepoSync`. */
  createRepoSync?: Maybe<CreateRepoSyncPayload>
  /** Creates a single `RepoSyncLog`. */
  createRepoSyncLog?: Maybe<CreateRepoSyncLogPayload>
  /** Creates a single `RepoSyncLogType`. */
  createRepoSyncLogType?: Maybe<CreateRepoSyncLogTypePayload>
  /** Creates a single `RepoSyncQueue`. */
  createRepoSyncQueue?: Maybe<CreateRepoSyncQueuePayload>
  /** Creates a single `RepoSyncQueueStatusType`. */
  createRepoSyncQueueStatusType?: Maybe<CreateRepoSyncQueueStatusTypePayload>
  /** Creates a single `RepoSyncType`. */
  createRepoSyncType?: Maybe<CreateRepoSyncTypePayload>
  /** Creates a single `SchemaMigration`. */
  createSchemaMigration?: Maybe<CreateSchemaMigrationPayload>
  /** Deletes a single `GitCommit` using its globally unique id. */
  deleteGitCommit?: Maybe<DeleteGitCommitPayload>
  /** Deletes a single `GitCommit` using a unique key. */
  deleteGitCommitByRepoIdAndHash?: Maybe<DeleteGitCommitPayload>
  /** Deletes a single `GitFile` using its globally unique id. */
  deleteGitFile?: Maybe<DeleteGitFilePayload>
  /** Deletes a single `GitFile` using a unique key. */
  deleteGitFileByRepoIdAndPath?: Maybe<DeleteGitFilePayload>
  /** Deletes a single `GitRef` using its globally unique id. */
  deleteGitRef?: Maybe<DeleteGitRefPayload>
  /** Deletes a single `GitRef` using a unique key. */
  deleteGitRefByRepoIdAndFullName?: Maybe<DeleteGitRefPayload>
  /** Deletes a single `GithubIssue` using its globally unique id. */
  deleteGithubIssue?: Maybe<DeleteGithubIssuePayload>
  /** Deletes a single `GithubIssue` using a unique key. */
  deleteGithubIssueByRepoIdAndDatabaseId?: Maybe<DeleteGithubIssuePayload>
  /** Deletes a single `GithubPullRequest` using its globally unique id. */
  deleteGithubPullRequest?: Maybe<DeleteGithubPullRequestPayload>
  /** Deletes a single `GithubPullRequest` using a unique key. */
  deleteGithubPullRequestByRepoIdAndDatabaseId?: Maybe<DeleteGithubPullRequestPayload>
  /** Deletes a single `GithubPullRequestCommit` using its globally unique id. */
  deleteGithubPullRequestCommit?: Maybe<DeleteGithubPullRequestCommitPayload>
  /** Deletes a single `GithubPullRequestCommit` using a unique key. */
  deleteGithubPullRequestCommitByRepoIdAndPrNumberAndHash?: Maybe<DeleteGithubPullRequestCommitPayload>
  /** Deletes a single `GithubPullRequestReview` using its globally unique id. */
  deleteGithubPullRequestReview?: Maybe<DeleteGithubPullRequestReviewPayload>
  /** Deletes a single `GithubPullRequestReview` using a unique key. */
  deleteGithubPullRequestReviewById?: Maybe<DeleteGithubPullRequestReviewPayload>
  /** Deletes a single `GithubRepoInfo` using its globally unique id. */
  deleteGithubRepoInfo?: Maybe<DeleteGithubRepoInfoPayload>
  /** Deletes a single `GithubRepoInfo` using a unique key. */
  deleteGithubRepoInfoByOwnerAndName?: Maybe<DeleteGithubRepoInfoPayload>
  /** Deletes a single `GithubRepoInfo` using a unique key. */
  deleteGithubRepoInfoByRepoId?: Maybe<DeleteGithubRepoInfoPayload>
  /** Deletes a single `GithubStargazer` using its globally unique id. */
  deleteGithubStargazer?: Maybe<DeleteGithubStargazerPayload>
  /** Deletes a single `GithubStargazer` using a unique key. */
  deleteGithubStargazerByRepoIdAndLogin?: Maybe<DeleteGithubStargazerPayload>
  /** Deletes a single `Repo` using its globally unique id. */
  deleteRepo?: Maybe<DeleteRepoPayload>
  /** Deletes a single `Repo` using a unique key. */
  deleteRepoById?: Maybe<DeleteRepoPayload>
  /** Deletes a single `RepoImport` using its globally unique id. */
  deleteRepoImport?: Maybe<DeleteRepoImportPayload>
  /** Deletes a single `RepoImport` using a unique key. */
  deleteRepoImportById?: Maybe<DeleteRepoImportPayload>
  /** Deletes a single `RepoImportType` using its globally unique id. */
  deleteRepoImportType?: Maybe<DeleteRepoImportTypePayload>
  /** Deletes a single `RepoImportType` using a unique key. */
  deleteRepoImportTypeByType?: Maybe<DeleteRepoImportTypePayload>
  /** Deletes a single `RepoSync` using its globally unique id. */
  deleteRepoSync?: Maybe<DeleteRepoSyncPayload>
  /** Deletes a single `RepoSync` using a unique key. */
  deleteRepoSyncById?: Maybe<DeleteRepoSyncPayload>
  /** Deletes a single `RepoSync` using a unique key. */
  deleteRepoSyncByRepoIdAndSyncType?: Maybe<DeleteRepoSyncPayload>
  /** Deletes a single `RepoSyncLog` using its globally unique id. */
  deleteRepoSyncLog?: Maybe<DeleteRepoSyncLogPayload>
  /** Deletes a single `RepoSyncLog` using a unique key. */
  deleteRepoSyncLogById?: Maybe<DeleteRepoSyncLogPayload>
  /** Deletes a single `RepoSyncLogType` using its globally unique id. */
  deleteRepoSyncLogType?: Maybe<DeleteRepoSyncLogTypePayload>
  /** Deletes a single `RepoSyncLogType` using a unique key. */
  deleteRepoSyncLogTypeByType?: Maybe<DeleteRepoSyncLogTypePayload>
  /** Deletes a single `RepoSyncQueue` using its globally unique id. */
  deleteRepoSyncQueue?: Maybe<DeleteRepoSyncQueuePayload>
  /** Deletes a single `RepoSyncQueue` using a unique key. */
  deleteRepoSyncQueueById?: Maybe<DeleteRepoSyncQueuePayload>
  /** Deletes a single `RepoSyncQueueStatusType` using its globally unique id. */
  deleteRepoSyncQueueStatusType?: Maybe<DeleteRepoSyncQueueStatusTypePayload>
  /** Deletes a single `RepoSyncQueueStatusType` using a unique key. */
  deleteRepoSyncQueueStatusTypeByType?: Maybe<DeleteRepoSyncQueueStatusTypePayload>
  /** Deletes a single `RepoSyncType` using its globally unique id. */
  deleteRepoSyncType?: Maybe<DeleteRepoSyncTypePayload>
  /** Deletes a single `RepoSyncType` using a unique key. */
  deleteRepoSyncTypeByType?: Maybe<DeleteRepoSyncTypePayload>
  /** Deletes a single `SchemaMigration` using its globally unique id. */
  deleteSchemaMigration?: Maybe<DeleteSchemaMigrationPayload>
  /** Deletes a single `SchemaMigration` using a unique key. */
  deleteSchemaMigrationByVersion?: Maybe<DeleteSchemaMigrationPayload>
  /** Updates a single `GitCommit` using its globally unique id and a patch. */
  updateGitCommit?: Maybe<UpdateGitCommitPayload>
  /** Updates a single `GitCommit` using a unique key and a patch. */
  updateGitCommitByRepoIdAndHash?: Maybe<UpdateGitCommitPayload>
  /** Updates a single `GitFile` using its globally unique id and a patch. */
  updateGitFile?: Maybe<UpdateGitFilePayload>
  /** Updates a single `GitFile` using a unique key and a patch. */
  updateGitFileByRepoIdAndPath?: Maybe<UpdateGitFilePayload>
  /** Updates a single `GitRef` using its globally unique id and a patch. */
  updateGitRef?: Maybe<UpdateGitRefPayload>
  /** Updates a single `GitRef` using a unique key and a patch. */
  updateGitRefByRepoIdAndFullName?: Maybe<UpdateGitRefPayload>
  /** Updates a single `GithubIssue` using its globally unique id and a patch. */
  updateGithubIssue?: Maybe<UpdateGithubIssuePayload>
  /** Updates a single `GithubIssue` using a unique key and a patch. */
  updateGithubIssueByRepoIdAndDatabaseId?: Maybe<UpdateGithubIssuePayload>
  /** Updates a single `GithubPullRequest` using its globally unique id and a patch. */
  updateGithubPullRequest?: Maybe<UpdateGithubPullRequestPayload>
  /** Updates a single `GithubPullRequest` using a unique key and a patch. */
  updateGithubPullRequestByRepoIdAndDatabaseId?: Maybe<UpdateGithubPullRequestPayload>
  /** Updates a single `GithubPullRequestCommit` using its globally unique id and a patch. */
  updateGithubPullRequestCommit?: Maybe<UpdateGithubPullRequestCommitPayload>
  /** Updates a single `GithubPullRequestCommit` using a unique key and a patch. */
  updateGithubPullRequestCommitByRepoIdAndPrNumberAndHash?: Maybe<UpdateGithubPullRequestCommitPayload>
  /** Updates a single `GithubPullRequestReview` using its globally unique id and a patch. */
  updateGithubPullRequestReview?: Maybe<UpdateGithubPullRequestReviewPayload>
  /** Updates a single `GithubPullRequestReview` using a unique key and a patch. */
  updateGithubPullRequestReviewById?: Maybe<UpdateGithubPullRequestReviewPayload>
  /** Updates a single `GithubRepoInfo` using its globally unique id and a patch. */
  updateGithubRepoInfo?: Maybe<UpdateGithubRepoInfoPayload>
  /** Updates a single `GithubRepoInfo` using a unique key and a patch. */
  updateGithubRepoInfoByOwnerAndName?: Maybe<UpdateGithubRepoInfoPayload>
  /** Updates a single `GithubRepoInfo` using a unique key and a patch. */
  updateGithubRepoInfoByRepoId?: Maybe<UpdateGithubRepoInfoPayload>
  /** Updates a single `GithubStargazer` using its globally unique id and a patch. */
  updateGithubStargazer?: Maybe<UpdateGithubStargazerPayload>
  /** Updates a single `GithubStargazer` using a unique key and a patch. */
  updateGithubStargazerByRepoIdAndLogin?: Maybe<UpdateGithubStargazerPayload>
  /** Updates a single `Repo` using its globally unique id and a patch. */
  updateRepo?: Maybe<UpdateRepoPayload>
  /** Updates a single `Repo` using a unique key and a patch. */
  updateRepoById?: Maybe<UpdateRepoPayload>
  /** Updates a single `RepoImport` using its globally unique id and a patch. */
  updateRepoImport?: Maybe<UpdateRepoImportPayload>
  /** Updates a single `RepoImport` using a unique key and a patch. */
  updateRepoImportById?: Maybe<UpdateRepoImportPayload>
  /** Updates a single `RepoImportType` using its globally unique id and a patch. */
  updateRepoImportType?: Maybe<UpdateRepoImportTypePayload>
  /** Updates a single `RepoImportType` using a unique key and a patch. */
  updateRepoImportTypeByType?: Maybe<UpdateRepoImportTypePayload>
  /** Updates a single `RepoSync` using its globally unique id and a patch. */
  updateRepoSync?: Maybe<UpdateRepoSyncPayload>
  /** Updates a single `RepoSync` using a unique key and a patch. */
  updateRepoSyncById?: Maybe<UpdateRepoSyncPayload>
  /** Updates a single `RepoSync` using a unique key and a patch. */
  updateRepoSyncByRepoIdAndSyncType?: Maybe<UpdateRepoSyncPayload>
  /** Updates a single `RepoSyncLog` using its globally unique id and a patch. */
  updateRepoSyncLog?: Maybe<UpdateRepoSyncLogPayload>
  /** Updates a single `RepoSyncLog` using a unique key and a patch. */
  updateRepoSyncLogById?: Maybe<UpdateRepoSyncLogPayload>
  /** Updates a single `RepoSyncLogType` using its globally unique id and a patch. */
  updateRepoSyncLogType?: Maybe<UpdateRepoSyncLogTypePayload>
  /** Updates a single `RepoSyncLogType` using a unique key and a patch. */
  updateRepoSyncLogTypeByType?: Maybe<UpdateRepoSyncLogTypePayload>
  /** Updates a single `RepoSyncQueue` using its globally unique id and a patch. */
  updateRepoSyncQueue?: Maybe<UpdateRepoSyncQueuePayload>
  /** Updates a single `RepoSyncQueue` using a unique key and a patch. */
  updateRepoSyncQueueById?: Maybe<UpdateRepoSyncQueuePayload>
  /** Updates a single `RepoSyncQueueStatusType` using its globally unique id and a patch. */
  updateRepoSyncQueueStatusType?: Maybe<UpdateRepoSyncQueueStatusTypePayload>
  /** Updates a single `RepoSyncQueueStatusType` using a unique key and a patch. */
  updateRepoSyncQueueStatusTypeByType?: Maybe<UpdateRepoSyncQueueStatusTypePayload>
  /** Updates a single `RepoSyncType` using its globally unique id and a patch. */
  updateRepoSyncType?: Maybe<UpdateRepoSyncTypePayload>
  /** Updates a single `RepoSyncType` using a unique key and a patch. */
  updateRepoSyncTypeByType?: Maybe<UpdateRepoSyncTypePayload>
  /** Updates a single `SchemaMigration` using its globally unique id and a patch. */
  updateSchemaMigration?: Maybe<UpdateSchemaMigrationPayload>
  /** Updates a single `SchemaMigration` using a unique key and a patch. */
  updateSchemaMigrationByVersion?: Maybe<UpdateSchemaMigrationPayload>
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitBranchArgs = {
  input: CreateGitBranchInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitCommitArgs = {
  input: CreateGitCommitInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitCommitStatArgs = {
  input: CreateGitCommitStatInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitFileArgs = {
  input: CreateGitFileInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitRefArgs = {
  input: CreateGitRefInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitTagArgs = {
  input: CreateGitTagInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubIssueArgs = {
  input: CreateGithubIssueInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubPullRequestArgs = {
  input: CreateGithubPullRequestInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubPullRequestCommitArgs = {
  input: CreateGithubPullRequestCommitInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubPullRequestReviewArgs = {
  input: CreateGithubPullRequestReviewInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubRepoInfoArgs = {
  input: CreateGithubRepoInfoInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubStargazerArgs = {
  input: CreateGithubStargazerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoArgs = {
  input: CreateRepoInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoImportArgs = {
  input: CreateRepoImportInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoImportTypeArgs = {
  input: CreateRepoImportTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncArgs = {
  input: CreateRepoSyncInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncLogArgs = {
  input: CreateRepoSyncLogInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncLogTypeArgs = {
  input: CreateRepoSyncLogTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncQueueArgs = {
  input: CreateRepoSyncQueueInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncQueueStatusTypeArgs = {
  input: CreateRepoSyncQueueStatusTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncTypeArgs = {
  input: CreateRepoSyncTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSchemaMigrationArgs = {
  input: CreateSchemaMigrationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitCommitArgs = {
  input: DeleteGitCommitInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitCommitByRepoIdAndHashArgs = {
  input: DeleteGitCommitByRepoIdAndHashInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitFileArgs = {
  input: DeleteGitFileInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitFileByRepoIdAndPathArgs = {
  input: DeleteGitFileByRepoIdAndPathInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitRefArgs = {
  input: DeleteGitRefInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitRefByRepoIdAndFullNameArgs = {
  input: DeleteGitRefByRepoIdAndFullNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubIssueArgs = {
  input: DeleteGithubIssueInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubIssueByRepoIdAndDatabaseIdArgs = {
  input: DeleteGithubIssueByRepoIdAndDatabaseIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestArgs = {
  input: DeleteGithubPullRequestInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestByRepoIdAndDatabaseIdArgs = {
  input: DeleteGithubPullRequestByRepoIdAndDatabaseIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestCommitArgs = {
  input: DeleteGithubPullRequestCommitInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestCommitByRepoIdAndPrNumberAndHashArgs =
  {
    input: DeleteGithubPullRequestCommitByRepoIdAndPrNumberAndHashInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestReviewArgs = {
  input: DeleteGithubPullRequestReviewInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestReviewByIdArgs = {
  input: DeleteGithubPullRequestReviewByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubRepoInfoArgs = {
  input: DeleteGithubRepoInfoInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubRepoInfoByOwnerAndNameArgs = {
  input: DeleteGithubRepoInfoByOwnerAndNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubRepoInfoByRepoIdArgs = {
  input: DeleteGithubRepoInfoByRepoIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubStargazerArgs = {
  input: DeleteGithubStargazerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubStargazerByRepoIdAndLoginArgs = {
  input: DeleteGithubStargazerByRepoIdAndLoginInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoArgs = {
  input: DeleteRepoInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoByIdArgs = {
  input: DeleteRepoByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportArgs = {
  input: DeleteRepoImportInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportByIdArgs = {
  input: DeleteRepoImportByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportTypeArgs = {
  input: DeleteRepoImportTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportTypeByTypeArgs = {
  input: DeleteRepoImportTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncArgs = {
  input: DeleteRepoSyncInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncByIdArgs = {
  input: DeleteRepoSyncByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncByRepoIdAndSyncTypeArgs = {
  input: DeleteRepoSyncByRepoIdAndSyncTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogArgs = {
  input: DeleteRepoSyncLogInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogByIdArgs = {
  input: DeleteRepoSyncLogByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogTypeArgs = {
  input: DeleteRepoSyncLogTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogTypeByTypeArgs = {
  input: DeleteRepoSyncLogTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueArgs = {
  input: DeleteRepoSyncQueueInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueByIdArgs = {
  input: DeleteRepoSyncQueueByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueStatusTypeArgs = {
  input: DeleteRepoSyncQueueStatusTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueStatusTypeByTypeArgs = {
  input: DeleteRepoSyncQueueStatusTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncTypeArgs = {
  input: DeleteRepoSyncTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncTypeByTypeArgs = {
  input: DeleteRepoSyncTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSchemaMigrationArgs = {
  input: DeleteSchemaMigrationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSchemaMigrationByVersionArgs = {
  input: DeleteSchemaMigrationByVersionInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitCommitArgs = {
  input: UpdateGitCommitInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitCommitByRepoIdAndHashArgs = {
  input: UpdateGitCommitByRepoIdAndHashInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitFileArgs = {
  input: UpdateGitFileInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitFileByRepoIdAndPathArgs = {
  input: UpdateGitFileByRepoIdAndPathInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitRefArgs = {
  input: UpdateGitRefInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitRefByRepoIdAndFullNameArgs = {
  input: UpdateGitRefByRepoIdAndFullNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubIssueArgs = {
  input: UpdateGithubIssueInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubIssueByRepoIdAndDatabaseIdArgs = {
  input: UpdateGithubIssueByRepoIdAndDatabaseIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestArgs = {
  input: UpdateGithubPullRequestInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestByRepoIdAndDatabaseIdArgs = {
  input: UpdateGithubPullRequestByRepoIdAndDatabaseIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestCommitArgs = {
  input: UpdateGithubPullRequestCommitInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestCommitByRepoIdAndPrNumberAndHashArgs =
  {
    input: UpdateGithubPullRequestCommitByRepoIdAndPrNumberAndHashInput
  }

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestReviewArgs = {
  input: UpdateGithubPullRequestReviewInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestReviewByIdArgs = {
  input: UpdateGithubPullRequestReviewByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubRepoInfoArgs = {
  input: UpdateGithubRepoInfoInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubRepoInfoByOwnerAndNameArgs = {
  input: UpdateGithubRepoInfoByOwnerAndNameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubRepoInfoByRepoIdArgs = {
  input: UpdateGithubRepoInfoByRepoIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubStargazerArgs = {
  input: UpdateGithubStargazerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubStargazerByRepoIdAndLoginArgs = {
  input: UpdateGithubStargazerByRepoIdAndLoginInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoArgs = {
  input: UpdateRepoInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoByIdArgs = {
  input: UpdateRepoByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportArgs = {
  input: UpdateRepoImportInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportByIdArgs = {
  input: UpdateRepoImportByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportTypeArgs = {
  input: UpdateRepoImportTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportTypeByTypeArgs = {
  input: UpdateRepoImportTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncArgs = {
  input: UpdateRepoSyncInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncByIdArgs = {
  input: UpdateRepoSyncByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncByRepoIdAndSyncTypeArgs = {
  input: UpdateRepoSyncByRepoIdAndSyncTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogArgs = {
  input: UpdateRepoSyncLogInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogByIdArgs = {
  input: UpdateRepoSyncLogByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogTypeArgs = {
  input: UpdateRepoSyncLogTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogTypeByTypeArgs = {
  input: UpdateRepoSyncLogTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueArgs = {
  input: UpdateRepoSyncQueueInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueByIdArgs = {
  input: UpdateRepoSyncQueueByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueStatusTypeArgs = {
  input: UpdateRepoSyncQueueStatusTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueStatusTypeByTypeArgs = {
  input: UpdateRepoSyncQueueStatusTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncTypeArgs = {
  input: UpdateRepoSyncTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncTypeByTypeArgs = {
  input: UpdateRepoSyncTypeByTypeInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSchemaMigrationArgs = {
  input: UpdateSchemaMigrationInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSchemaMigrationByVersionArgs = {
  input: UpdateSchemaMigrationByVersionInput
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /** Reads and enables pagination through a set of `GitBranch`. */
  allGitBranches?: Maybe<GitBranchesConnection>
  /** Reads and enables pagination through a set of `GitCommitStat`. */
  allGitCommitStats?: Maybe<GitCommitStatsConnection>
  /** Reads and enables pagination through a set of `GitCommit`. */
  allGitCommits?: Maybe<GitCommitsConnection>
  /** Reads and enables pagination through a set of `GitFile`. */
  allGitFiles?: Maybe<GitFilesConnection>
  /** Reads and enables pagination through a set of `GitRef`. */
  allGitRefs?: Maybe<GitRefsConnection>
  /** Reads and enables pagination through a set of `GitTag`. */
  allGitTags?: Maybe<GitTagsConnection>
  /** Reads and enables pagination through a set of `GithubIssue`. */
  allGithubIssues?: Maybe<GithubIssuesConnection>
  /** Reads and enables pagination through a set of `GithubPullRequestCommit`. */
  allGithubPullRequestCommits?: Maybe<GithubPullRequestCommitsConnection>
  /** Reads and enables pagination through a set of `GithubPullRequestReview`. */
  allGithubPullRequestReviews?: Maybe<GithubPullRequestReviewsConnection>
  /** Reads and enables pagination through a set of `GithubPullRequest`. */
  allGithubPullRequests?: Maybe<GithubPullRequestsConnection>
  /** Reads and enables pagination through a set of `GithubRepoInfo`. */
  allGithubRepoInfos?: Maybe<GithubRepoInfosConnection>
  /** Reads and enables pagination through a set of `GithubStargazer`. */
  allGithubStargazers?: Maybe<GithubStargazersConnection>
  /** Reads and enables pagination through a set of `LatestRepoSync`. */
  allLatestRepoSyncs?: Maybe<LatestRepoSyncsConnection>
  /** Reads and enables pagination through a set of `RepoImportType`. */
  allRepoImportTypes?: Maybe<RepoImportTypesConnection>
  /** Reads and enables pagination through a set of `RepoImport`. */
  allRepoImports?: Maybe<RepoImportsConnection>
  /** Reads and enables pagination through a set of `RepoSyncLogType`. */
  allRepoSyncLogTypes?: Maybe<RepoSyncLogTypesConnection>
  /** Reads and enables pagination through a set of `RepoSyncLog`. */
  allRepoSyncLogs?: Maybe<RepoSyncLogsConnection>
  /** Reads and enables pagination through a set of `RepoSyncQueueStatusType`. */
  allRepoSyncQueueStatusTypes?: Maybe<RepoSyncQueueStatusTypesConnection>
  /** Reads and enables pagination through a set of `RepoSyncQueue`. */
  allRepoSyncQueues?: Maybe<RepoSyncQueuesConnection>
  /** Reads and enables pagination through a set of `RepoSyncType`. */
  allRepoSyncTypes?: Maybe<RepoSyncTypesConnection>
  /** Reads and enables pagination through a set of `RepoSync`. */
  allRepoSyncs?: Maybe<RepoSyncsConnection>
  /** Reads and enables pagination through a set of `Repo`. */
  allRepos?: Maybe<ReposConnection>
  /** Reads and enables pagination through a set of `SchemaMigration`. */
  allSchemaMigrations?: Maybe<SchemaMigrationsConnection>
  /** Reads a single `GitCommit` using its globally unique `ID`. */
  gitCommit?: Maybe<GitCommit>
  gitCommitByRepoIdAndHash?: Maybe<GitCommit>
  /** Reads a single `GitFile` using its globally unique `ID`. */
  gitFile?: Maybe<GitFile>
  gitFileByRepoIdAndPath?: Maybe<GitFile>
  /** Reads a single `GitRef` using its globally unique `ID`. */
  gitRef?: Maybe<GitRef>
  gitRefByRepoIdAndFullName?: Maybe<GitRef>
  /** Reads a single `GithubIssue` using its globally unique `ID`. */
  githubIssue?: Maybe<GithubIssue>
  githubIssueByRepoIdAndDatabaseId?: Maybe<GithubIssue>
  /** Reads a single `GithubPullRequest` using its globally unique `ID`. */
  githubPullRequest?: Maybe<GithubPullRequest>
  githubPullRequestByRepoIdAndDatabaseId?: Maybe<GithubPullRequest>
  /** Reads a single `GithubPullRequestCommit` using its globally unique `ID`. */
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>
  githubPullRequestCommitByRepoIdAndPrNumberAndHash?: Maybe<GithubPullRequestCommit>
  /** Reads a single `GithubPullRequestReview` using its globally unique `ID`. */
  githubPullRequestReview?: Maybe<GithubPullRequestReview>
  githubPullRequestReviewById?: Maybe<GithubPullRequestReview>
  /** Reads a single `GithubRepoInfo` using its globally unique `ID`. */
  githubRepoInfo?: Maybe<GithubRepoInfo>
  githubRepoInfoByOwnerAndName?: Maybe<GithubRepoInfo>
  githubRepoInfoByRepoId?: Maybe<GithubRepoInfo>
  /** Reads a single `GithubStargazer` using its globally unique `ID`. */
  githubStargazer?: Maybe<GithubStargazer>
  githubStargazerByRepoIdAndLogin?: Maybe<GithubStargazer>
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  /** Reads a single `Repo` using its globally unique `ID`. */
  repo?: Maybe<Repo>
  repoById?: Maybe<Repo>
  /** Reads a single `RepoImport` using its globally unique `ID`. */
  repoImport?: Maybe<RepoImport>
  repoImportById?: Maybe<RepoImport>
  /** Reads a single `RepoImportType` using its globally unique `ID`. */
  repoImportType?: Maybe<RepoImportType>
  repoImportTypeByType?: Maybe<RepoImportType>
  /** Reads a single `RepoSync` using its globally unique `ID`. */
  repoSync?: Maybe<RepoSync>
  repoSyncById?: Maybe<RepoSync>
  repoSyncByRepoIdAndSyncType?: Maybe<RepoSync>
  /** Reads a single `RepoSyncLog` using its globally unique `ID`. */
  repoSyncLog?: Maybe<RepoSyncLog>
  repoSyncLogById?: Maybe<RepoSyncLog>
  /** Reads a single `RepoSyncLogType` using its globally unique `ID`. */
  repoSyncLogType?: Maybe<RepoSyncLogType>
  repoSyncLogTypeByType?: Maybe<RepoSyncLogType>
  /** Reads a single `RepoSyncQueue` using its globally unique `ID`. */
  repoSyncQueue?: Maybe<RepoSyncQueue>
  repoSyncQueueById?: Maybe<RepoSyncQueue>
  /** Reads a single `RepoSyncQueueStatusType` using its globally unique `ID`. */
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>
  repoSyncQueueStatusTypeByType?: Maybe<RepoSyncQueueStatusType>
  /** Reads a single `RepoSyncType` using its globally unique `ID`. */
  repoSyncType?: Maybe<RepoSyncType>
  repoSyncTypeByType?: Maybe<RepoSyncType>
  /** Reads a single `SchemaMigration` using its globally unique `ID`. */
  schemaMigration?: Maybe<SchemaMigration>
  schemaMigrationByVersion?: Maybe<SchemaMigration>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGitBranchesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitBranchCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitBranchesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGitCommitStatsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitCommitStatCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGitCommitsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitCommitCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGitFilesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitFileCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGitRefsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitRefCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGitTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitTagCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitTagsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGithubIssuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubIssueCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGithubPullRequestCommitsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubPullRequestCommitCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGithubPullRequestReviewsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubPullRequestReviewCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGithubPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubPullRequestCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGithubRepoInfosArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubRepoInfoCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllGithubStargazersArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubStargazerCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllLatestRepoSyncsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<LatestRepoSyncCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LatestRepoSyncsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoImportTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoImportTypeCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoImportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoImportCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoSyncLogTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncLogTypeCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoSyncLogsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncLogCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoSyncQueueStatusTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncQueueStatusTypeCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoSyncQueuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncQueueCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoSyncTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncTypeCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllRepoSyncsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllReposArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReposOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllSchemaMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<SchemaMigrationCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryGitCommitArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGitCommitByRepoIdAndHashArgs = {
  hash: Scalars['String']
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGitFileArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGitFileByRepoIdAndPathArgs = {
  path: Scalars['String']
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGitRefArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGitRefByRepoIdAndFullNameArgs = {
  fullName: Scalars['String']
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubIssueArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubIssueByRepoIdAndDatabaseIdArgs = {
  databaseId: Scalars['Int']
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestByRepoIdAndDatabaseIdArgs = {
  databaseId: Scalars['Int']
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestCommitArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestCommitByRepoIdAndPrNumberAndHashArgs = {
  hash: Scalars['String']
  prNumber: Scalars['Int']
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestReviewArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestReviewByIdArgs = {
  id: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubRepoInfoArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubRepoInfoByOwnerAndNameArgs = {
  name: Scalars['String']
  owner: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubRepoInfoByRepoIdArgs = {
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubStargazerArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryGithubStargazerByRepoIdAndLoginArgs = {
  login: Scalars['String']
  repoId: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoImportArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoImportByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoImportTypeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoImportTypeByTypeArgs = {
  type: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncByRepoIdAndSyncTypeArgs = {
  repoId: Scalars['UUID']
  syncType: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogByIdArgs = {
  id: Scalars['BigInt']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogTypeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogTypeByTypeArgs = {
  type: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueByIdArgs = {
  id: Scalars['BigInt']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueStatusTypeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueStatusTypeByTypeArgs = {
  type: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncTypeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncTypeByTypeArgs = {
  type: Scalars['String']
}

/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationByVersionArgs = {
  version: Scalars['BigInt']
}

/** Git repositories to track */
export type Repo = Node & {
  __typename?: 'Repo'
  createdAt: Scalars['Datetime']
  /** Reads and enables pagination through a set of `GitCommitStat`. */
  gitCommitStatsByRepoId: GitCommitStatsConnection
  /** Reads and enables pagination through a set of `GitCommit`. */
  gitCommitsByRepoId: GitCommitsConnection
  /** Reads and enables pagination through a set of `GitFile`. */
  gitFilesByRepoId: GitFilesConnection
  /** Reads and enables pagination through a set of `GithubIssue`. */
  githubIssuesByRepoId: GithubIssuesConnection
  /** Reads and enables pagination through a set of `GithubPullRequest`. */
  githubPullRequestsByRepoId: GithubPullRequestsConnection
  /** Reads a single `GithubRepoInfo` that is related to this `Repo`. */
  githubRepoInfoByRepoId?: Maybe<GithubRepoInfo>
  /**
   * Reads and enables pagination through a set of `GithubRepoInfo`.
   * @deprecated Please use githubRepoInfoByRepoId instead
   */
  githubRepoInfosByRepoId: GithubRepoInfosConnection
  /** Reads and enables pagination through a set of `GithubStargazer`. */
  githubStargazersByRepoId: GithubStargazersConnection
  id: Scalars['UUID']
  isGithub?: Maybe<Scalars['Boolean']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  ref?: Maybe<Scalars['String']>
  repo: Scalars['String']
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImportByRepoImportId?: Maybe<RepoImport>
  repoImportId?: Maybe<Scalars['UUID']>
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncsByRepoId: RepoSyncsConnection
  settings: Scalars['JSON']
  tags: Scalars['JSON']
}

/** Git repositories to track */
export type RepoGitCommitStatsByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitCommitStatCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>
}

/** Git repositories to track */
export type RepoGitCommitsByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitCommitCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>
}

/** Git repositories to track */
export type RepoGitFilesByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GitFileCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>
}

/** Git repositories to track */
export type RepoGithubIssuesByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubIssueCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>
}

/** Git repositories to track */
export type RepoGithubPullRequestsByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubPullRequestCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>
}

/** Git repositories to track */
export type RepoGithubRepoInfosByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubRepoInfoCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>
}

/** Git repositories to track */
export type RepoGithubStargazersByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<GithubStargazerCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>
}

/** Git repositories to track */
export type RepoRepoSyncsByRepoIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>
}

/** A condition to be used against `Repo` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RepoCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `isGithub` field. */
  isGithub?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `ref` field. */
  ref?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repo` field. */
  repo?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoImportId` field. */
  repoImportId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>
  /** Checks for equality with the object’s `tags` field. */
  tags?: InputMaybe<Scalars['JSON']>
}

/** Table for "dynamic" repo imports - regularly loading from a GitHub org for example */
export type RepoImport = Node & {
  __typename?: 'RepoImport'
  createdAt: Scalars['Datetime']
  id: Scalars['UUID']
  importInterval?: Maybe<Interval>
  lastImport?: Maybe<Scalars['Datetime']>
  lastImportStartedAt?: Maybe<Scalars['Datetime']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>
  /** Reads and enables pagination through a set of `Repo`. */
  reposByRepoImportId: ReposConnection
  settings: Scalars['JSON']
  type: Scalars['String']
  updatedAt: Scalars['Datetime']
}

/** Table for "dynamic" repo imports - regularly loading from a GitHub org for example */
export type RepoImportReposByRepoImportIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReposOrderBy>>
}

/**
 * A condition to be used against `RepoImport` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RepoImportCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `importInterval` field. */
  importInterval?: InputMaybe<IntervalInput>
  /** Checks for equality with the object’s `lastImport` field. */
  lastImport?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `lastImportStartedAt` field. */
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

/** An input for mutations affecting `RepoImport` */
export type RepoImportInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  importInterval?: InputMaybe<IntervalInput>
  lastImport?: InputMaybe<Scalars['Datetime']>
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>
  settings?: InputMaybe<Scalars['JSON']>
  type: Scalars['String']
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

/** Represents an update to a `RepoImport`. Fields that are set will be updated. */
export type RepoImportPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  importInterval?: InputMaybe<IntervalInput>
  lastImport?: InputMaybe<Scalars['Datetime']>
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>
  settings?: InputMaybe<Scalars['JSON']>
  type?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['Datetime']>
}

/** Types of repo imports */
export type RepoImportType = Node & {
  __typename?: 'RepoImportType'
  description: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads and enables pagination through a set of `RepoImport`. */
  repoImportsByType: RepoImportsConnection
  type: Scalars['String']
}

/** Types of repo imports */
export type RepoImportTypeRepoImportsByTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoImportCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>
}

/**
 * A condition to be used against `RepoImportType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoImportTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `RepoImportType` */
export type RepoImportTypeInput = {
  description: Scalars['String']
  type: Scalars['String']
}

/** Represents an update to a `RepoImportType`. Fields that are set will be updated. */
export type RepoImportTypePatch = {
  description?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `RepoImportType` values. */
export type RepoImportTypesConnection = {
  __typename?: 'RepoImportTypesConnection'
  /** A list of edges which contains the `RepoImportType` and cursor to aid in pagination. */
  edges: Array<RepoImportTypesEdge>
  /** A list of `RepoImportType` objects. */
  nodes: Array<Maybe<RepoImportType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoImportType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoImportType` edge in the connection. */
export type RepoImportTypesEdge = {
  __typename?: 'RepoImportTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoImportType` at the end of the edge. */
  node?: Maybe<RepoImportType>
}

/** Methods to use when ordering `RepoImportType`. */
export enum RepoImportTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** A connection to a list of `RepoImport` values. */
export type RepoImportsConnection = {
  __typename?: 'RepoImportsConnection'
  /** A list of edges which contains the `RepoImport` and cursor to aid in pagination. */
  edges: Array<RepoImportsEdge>
  /** A list of `RepoImport` objects. */
  nodes: Array<Maybe<RepoImport>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoImport` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoImport` edge in the connection. */
export type RepoImportsEdge = {
  __typename?: 'RepoImportsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoImport` at the end of the edge. */
  node?: Maybe<RepoImport>
}

/** Methods to use when ordering `RepoImport`. */
export enum RepoImportsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImportIntervalAsc = 'IMPORT_INTERVAL_ASC',
  ImportIntervalDesc = 'IMPORT_INTERVAL_DESC',
  LastImportAsc = 'LAST_IMPORT_ASC',
  LastImportDesc = 'LAST_IMPORT_DESC',
  LastImportStartedAtAsc = 'LAST_IMPORT_STARTED_AT_ASC',
  LastImportStartedAtDesc = 'LAST_IMPORT_STARTED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** An input for mutations affecting `Repo` */
export type RepoInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  isGithub?: InputMaybe<Scalars['Boolean']>
  ref?: InputMaybe<Scalars['String']>
  repo: Scalars['String']
  repoImportId?: InputMaybe<Scalars['UUID']>
  settings?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Scalars['JSON']>
}

/** Represents an update to a `Repo`. Fields that are set will be updated. */
export type RepoPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['UUID']>
  isGithub?: InputMaybe<Scalars['Boolean']>
  ref?: InputMaybe<Scalars['String']>
  repo?: InputMaybe<Scalars['String']>
  repoImportId?: InputMaybe<Scalars['UUID']>
  settings?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Scalars['JSON']>
}

export type RepoSync = Node & {
  __typename?: 'RepoSync'
  id: Scalars['UUID']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repoByRepoId?: Maybe<Repo>
  repoId: Scalars['UUID']
  /** Reads and enables pagination through a set of `RepoSyncQueue`. */
  repoSyncQueuesByRepoSyncId: RepoSyncQueuesConnection
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>
  settings: Scalars['JSON']
  syncType: Scalars['String']
}

export type RepoSyncRepoSyncQueuesByRepoSyncIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncQueueCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>
}

/**
 * A condition to be used against `RepoSync` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RepoSyncCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>
  /** Checks for equality with the object’s `syncType` field. */
  syncType?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `RepoSync` */
export type RepoSyncInput = {
  id?: InputMaybe<Scalars['UUID']>
  repoId: Scalars['UUID']
  settings?: InputMaybe<Scalars['JSON']>
  syncType: Scalars['String']
}

export type RepoSyncLog = Node & {
  __typename?: 'RepoSyncLog'
  createdAt: Scalars['Datetime']
  id: Scalars['BigInt']
  logType: Scalars['String']
  message: Scalars['String']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueueByRepoSyncQueueId?: Maybe<RepoSyncQueue>
  repoSyncQueueId: Scalars['BigInt']
}

/**
 * A condition to be used against `RepoSyncLog` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RepoSyncLogCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>
  /** Checks for equality with the object’s `logType` field. */
  logType?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `repoSyncQueueId` field. */
  repoSyncQueueId?: InputMaybe<Scalars['BigInt']>
}

/** An input for mutations affecting `RepoSyncLog` */
export type RepoSyncLogInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['BigInt']>
  logType: Scalars['String']
  message: Scalars['String']
  repoSyncQueueId: Scalars['BigInt']
}

/** Represents an update to a `RepoSyncLog`. Fields that are set will be updated. */
export type RepoSyncLogPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['BigInt']>
  logType?: InputMaybe<Scalars['String']>
  message?: InputMaybe<Scalars['String']>
  repoSyncQueueId?: InputMaybe<Scalars['BigInt']>
}

export type RepoSyncLogType = Node & {
  __typename?: 'RepoSyncLogType'
  description?: Maybe<Scalars['String']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads and enables pagination through a set of `RepoSyncLog`. */
  repoSyncLogsByLogType: RepoSyncLogsConnection
  type: Scalars['String']
}

export type RepoSyncLogTypeRepoSyncLogsByLogTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncLogCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>
}

/**
 * A condition to be used against `RepoSyncLogType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncLogTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `RepoSyncLogType` */
export type RepoSyncLogTypeInput = {
  description?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

/** Represents an update to a `RepoSyncLogType`. Fields that are set will be updated. */
export type RepoSyncLogTypePatch = {
  description?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `RepoSyncLogType` values. */
export type RepoSyncLogTypesConnection = {
  __typename?: 'RepoSyncLogTypesConnection'
  /** A list of edges which contains the `RepoSyncLogType` and cursor to aid in pagination. */
  edges: Array<RepoSyncLogTypesEdge>
  /** A list of `RepoSyncLogType` objects. */
  nodes: Array<Maybe<RepoSyncLogType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncLogType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoSyncLogType` edge in the connection. */
export type RepoSyncLogTypesEdge = {
  __typename?: 'RepoSyncLogTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncLogType` at the end of the edge. */
  node?: Maybe<RepoSyncLogType>
}

/** Methods to use when ordering `RepoSyncLogType`. */
export enum RepoSyncLogTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** A connection to a list of `RepoSyncLog` values. */
export type RepoSyncLogsConnection = {
  __typename?: 'RepoSyncLogsConnection'
  /** A list of edges which contains the `RepoSyncLog` and cursor to aid in pagination. */
  edges: Array<RepoSyncLogsEdge>
  /** A list of `RepoSyncLog` objects. */
  nodes: Array<Maybe<RepoSyncLog>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncLog` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoSyncLog` edge in the connection. */
export type RepoSyncLogsEdge = {
  __typename?: 'RepoSyncLogsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncLog` at the end of the edge. */
  node?: Maybe<RepoSyncLog>
}

/** Methods to use when ordering `RepoSyncLog`. */
export enum RepoSyncLogsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LogTypeAsc = 'LOG_TYPE_ASC',
  LogTypeDesc = 'LOG_TYPE_DESC',
  MessageAsc = 'MESSAGE_ASC',
  MessageDesc = 'MESSAGE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoSyncQueueIdAsc = 'REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncQueueIdDesc = 'REPO_SYNC_QUEUE_ID_DESC',
}

/** Represents an update to a `RepoSync`. Fields that are set will be updated. */
export type RepoSyncPatch = {
  id?: InputMaybe<Scalars['UUID']>
  repoId?: InputMaybe<Scalars['UUID']>
  settings?: InputMaybe<Scalars['JSON']>
  syncType?: InputMaybe<Scalars['String']>
}

export type RepoSyncQueue = Node & {
  __typename?: 'RepoSyncQueue'
  createdAt: Scalars['Datetime']
  doneAt?: Maybe<Scalars['Datetime']>
  id: Scalars['BigInt']
  lastKeepAlive?: Maybe<Scalars['Datetime']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSyncByRepoSyncId?: Maybe<RepoSync>
  repoSyncId: Scalars['UUID']
  /** Reads and enables pagination through a set of `RepoSyncLog`. */
  repoSyncLogsByRepoSyncQueueId: RepoSyncLogsConnection
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>
  startedAt?: Maybe<Scalars['Datetime']>
  status: Scalars['String']
}

export type RepoSyncQueueRepoSyncLogsByRepoSyncQueueIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncLogCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>
}

/**
 * A condition to be used against `RepoSyncQueue` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncQueueCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `doneAt` field. */
  doneAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>
  /** Checks for equality with the object’s `lastKeepAlive` field. */
  lastKeepAlive?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `repoSyncId` field. */
  repoSyncId?: InputMaybe<Scalars['UUID']>
  /** Checks for equality with the object’s `startedAt` field. */
  startedAt?: InputMaybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `RepoSyncQueue` */
export type RepoSyncQueueInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  doneAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['BigInt']>
  lastKeepAlive?: InputMaybe<Scalars['Datetime']>
  repoSyncId: Scalars['UUID']
  startedAt?: InputMaybe<Scalars['Datetime']>
  status: Scalars['String']
}

/** Represents an update to a `RepoSyncQueue`. Fields that are set will be updated. */
export type RepoSyncQueuePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  doneAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['BigInt']>
  lastKeepAlive?: InputMaybe<Scalars['Datetime']>
  repoSyncId?: InputMaybe<Scalars['UUID']>
  startedAt?: InputMaybe<Scalars['Datetime']>
  status?: InputMaybe<Scalars['String']>
}

export type RepoSyncQueueStatusType = Node & {
  __typename?: 'RepoSyncQueueStatusType'
  description?: Maybe<Scalars['String']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads and enables pagination through a set of `RepoSyncQueue`. */
  repoSyncQueuesByStatus: RepoSyncQueuesConnection
  type: Scalars['String']
}

export type RepoSyncQueueStatusTypeRepoSyncQueuesByStatusArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncQueueCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>
}

/**
 * A condition to be used against `RepoSyncQueueStatusType` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncQueueStatusTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `RepoSyncQueueStatusType` */
export type RepoSyncQueueStatusTypeInput = {
  description?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

/** Represents an update to a `RepoSyncQueueStatusType`. Fields that are set will be updated. */
export type RepoSyncQueueStatusTypePatch = {
  description?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `RepoSyncQueueStatusType` values. */
export type RepoSyncQueueStatusTypesConnection = {
  __typename?: 'RepoSyncQueueStatusTypesConnection'
  /** A list of edges which contains the `RepoSyncQueueStatusType` and cursor to aid in pagination. */
  edges: Array<RepoSyncQueueStatusTypesEdge>
  /** A list of `RepoSyncQueueStatusType` objects. */
  nodes: Array<Maybe<RepoSyncQueueStatusType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncQueueStatusType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoSyncQueueStatusType` edge in the connection. */
export type RepoSyncQueueStatusTypesEdge = {
  __typename?: 'RepoSyncQueueStatusTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncQueueStatusType` at the end of the edge. */
  node?: Maybe<RepoSyncQueueStatusType>
}

/** Methods to use when ordering `RepoSyncQueueStatusType`. */
export enum RepoSyncQueueStatusTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** A connection to a list of `RepoSyncQueue` values. */
export type RepoSyncQueuesConnection = {
  __typename?: 'RepoSyncQueuesConnection'
  /** A list of edges which contains the `RepoSyncQueue` and cursor to aid in pagination. */
  edges: Array<RepoSyncQueuesEdge>
  /** A list of `RepoSyncQueue` objects. */
  nodes: Array<Maybe<RepoSyncQueue>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncQueue` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoSyncQueue` edge in the connection. */
export type RepoSyncQueuesEdge = {
  __typename?: 'RepoSyncQueuesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncQueue` at the end of the edge. */
  node?: Maybe<RepoSyncQueue>
}

/** Methods to use when ordering `RepoSyncQueue`. */
export enum RepoSyncQueuesOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DoneAtAsc = 'DONE_AT_ASC',
  DoneAtDesc = 'DONE_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LastKeepAliveAsc = 'LAST_KEEP_ALIVE_ASC',
  LastKeepAliveDesc = 'LAST_KEEP_ALIVE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoSyncIdAsc = 'REPO_SYNC_ID_ASC',
  RepoSyncIdDesc = 'REPO_SYNC_ID_DESC',
  StartedAtAsc = 'STARTED_AT_ASC',
  StartedAtDesc = 'STARTED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
}

export type RepoSyncType = Node & {
  __typename?: 'RepoSyncType'
  description?: Maybe<Scalars['String']>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncsBySyncType: RepoSyncsConnection
  type: Scalars['String']
}

export type RepoSyncTypeRepoSyncsBySyncTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>
  before?: InputMaybe<Scalars['Cursor']>
  condition?: InputMaybe<RepoSyncCondition>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>
}

/**
 * A condition to be used against `RepoSyncType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>
}

/** An input for mutations affecting `RepoSyncType` */
export type RepoSyncTypeInput = {
  description?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

/** Represents an update to a `RepoSyncType`. Fields that are set will be updated. */
export type RepoSyncTypePatch = {
  description?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

/** A connection to a list of `RepoSyncType` values. */
export type RepoSyncTypesConnection = {
  __typename?: 'RepoSyncTypesConnection'
  /** A list of edges which contains the `RepoSyncType` and cursor to aid in pagination. */
  edges: Array<RepoSyncTypesEdge>
  /** A list of `RepoSyncType` objects. */
  nodes: Array<Maybe<RepoSyncType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoSyncType` edge in the connection. */
export type RepoSyncTypesEdge = {
  __typename?: 'RepoSyncTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncType` at the end of the edge. */
  node?: Maybe<RepoSyncType>
}

/** Methods to use when ordering `RepoSyncType`. */
export enum RepoSyncTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** A connection to a list of `RepoSync` values. */
export type RepoSyncsConnection = {
  __typename?: 'RepoSyncsConnection'
  /** A list of edges which contains the `RepoSync` and cursor to aid in pagination. */
  edges: Array<RepoSyncsEdge>
  /** A list of `RepoSync` objects. */
  nodes: Array<Maybe<RepoSync>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSync` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `RepoSync` edge in the connection. */
export type RepoSyncsEdge = {
  __typename?: 'RepoSyncsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSync` at the end of the edge. */
  node?: Maybe<RepoSync>
}

/** Methods to use when ordering `RepoSync`. */
export enum RepoSyncsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  SyncTypeAsc = 'SYNC_TYPE_ASC',
  SyncTypeDesc = 'SYNC_TYPE_DESC',
}

/** A connection to a list of `Repo` values. */
export type ReposConnection = {
  __typename?: 'ReposConnection'
  /** A list of edges which contains the `Repo` and cursor to aid in pagination. */
  edges: Array<ReposEdge>
  /** A list of `Repo` objects. */
  nodes: Array<Maybe<Repo>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Repo` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Repo` edge in the connection. */
export type ReposEdge = {
  __typename?: 'ReposEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Repo` at the end of the edge. */
  node?: Maybe<Repo>
}

/** Methods to use when ordering `Repo`. */
export enum ReposOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsGithubAsc = 'IS_GITHUB_ASC',
  IsGithubDesc = 'IS_GITHUB_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RefAsc = 'REF_ASC',
  RefDesc = 'REF_DESC',
  RepoAsc = 'REPO_ASC',
  RepoDesc = 'REPO_DESC',
  RepoImportIdAsc = 'REPO_IMPORT_ID_ASC',
  RepoImportIdDesc = 'REPO_IMPORT_ID_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
}

export type SchemaMigration = Node & {
  __typename?: 'SchemaMigration'
  dirty: Scalars['Boolean']
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
  version: Scalars['BigInt']
}

/**
 * A condition to be used against `SchemaMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SchemaMigrationCondition = {
  /** Checks for equality with the object’s `dirty` field. */
  dirty?: InputMaybe<Scalars['Boolean']>
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['BigInt']>
}

/** An input for mutations affecting `SchemaMigration` */
export type SchemaMigrationInput = {
  dirty: Scalars['Boolean']
  version: Scalars['BigInt']
}

/** Represents an update to a `SchemaMigration`. Fields that are set will be updated. */
export type SchemaMigrationPatch = {
  dirty?: InputMaybe<Scalars['Boolean']>
  version?: InputMaybe<Scalars['BigInt']>
}

/** A connection to a list of `SchemaMigration` values. */
export type SchemaMigrationsConnection = {
  __typename?: 'SchemaMigrationsConnection'
  /** A list of edges which contains the `SchemaMigration` and cursor to aid in pagination. */
  edges: Array<SchemaMigrationsEdge>
  /** A list of `SchemaMigration` objects. */
  nodes: Array<Maybe<SchemaMigration>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `SchemaMigration` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `SchemaMigration` edge in the connection. */
export type SchemaMigrationsEdge = {
  __typename?: 'SchemaMigrationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `SchemaMigration` at the end of the edge. */
  node?: Maybe<SchemaMigration>
}

/** Methods to use when ordering `SchemaMigration`. */
export enum SchemaMigrationsOrderBy {
  DirtyAsc = 'DIRTY_ASC',
  DirtyDesc = 'DIRTY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
}

/** All input for the `updateGitCommitByRepoIdAndHash` mutation. */
export type UpdateGitCommitByRepoIdAndHashInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GitCommit` being updated. */
  gitCommitPatch: GitCommitPatch
  hash: Scalars['String']
  repoId: Scalars['UUID']
}

/** All input for the `updateGitCommit` mutation. */
export type UpdateGitCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GitCommit` being updated. */
  gitCommitPatch: GitCommitPatch
  /** The globally unique `ID` which will identify a single `GitCommit` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GitCommit` mutation. */
export type UpdateGitCommitPayload = {
  __typename?: 'UpdateGitCommitPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitCommit` that was updated by this mutation. */
  gitCommit?: Maybe<GitCommit>
  /** An edge for our `GitCommit`. May be used by Relay 1. */
  gitCommitEdge?: Maybe<GitCommitsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our update `GitCommit` mutation. */
export type UpdateGitCommitPayloadGitCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>
}

/** All input for the `updateGitFileByRepoIdAndPath` mutation. */
export type UpdateGitFileByRepoIdAndPathInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GitFile` being updated. */
  gitFilePatch: GitFilePatch
  path: Scalars['String']
  repoId: Scalars['UUID']
}

/** All input for the `updateGitFile` mutation. */
export type UpdateGitFileInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GitFile` being updated. */
  gitFilePatch: GitFilePatch
  /** The globally unique `ID` which will identify a single `GitFile` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GitFile` mutation. */
export type UpdateGitFilePayload = {
  __typename?: 'UpdateGitFilePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitFile` that was updated by this mutation. */
  gitFile?: Maybe<GitFile>
  /** An edge for our `GitFile`. May be used by Relay 1. */
  gitFileEdge?: Maybe<GitFilesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our update `GitFile` mutation. */
export type UpdateGitFilePayloadGitFileEdgeArgs = {
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>
}

/** All input for the `updateGitRefByRepoIdAndFullName` mutation. */
export type UpdateGitRefByRepoIdAndFullNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  fullName: Scalars['String']
  /** An object where the defined keys will be set on the `GitRef` being updated. */
  gitRefPatch: GitRefPatch
  repoId: Scalars['UUID']
}

/** All input for the `updateGitRef` mutation. */
export type UpdateGitRefInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GitRef` being updated. */
  gitRefPatch: GitRefPatch
  /** The globally unique `ID` which will identify a single `GitRef` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GitRef` mutation. */
export type UpdateGitRefPayload = {
  __typename?: 'UpdateGitRefPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GitRef` that was updated by this mutation. */
  gitRef?: Maybe<GitRef>
  /** An edge for our `GitRef`. May be used by Relay 1. */
  gitRefEdge?: Maybe<GitRefsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GitRef` mutation. */
export type UpdateGitRefPayloadGitRefEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>
}

/** All input for the `updateGithubIssueByRepoIdAndDatabaseId` mutation. */
export type UpdateGithubIssueByRepoIdAndDatabaseIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  databaseId: Scalars['Int']
  /** An object where the defined keys will be set on the `GithubIssue` being updated. */
  githubIssuePatch: GithubIssuePatch
  repoId: Scalars['UUID']
}

/** All input for the `updateGithubIssue` mutation. */
export type UpdateGithubIssueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubIssue` being updated. */
  githubIssuePatch: GithubIssuePatch
  /** The globally unique `ID` which will identify a single `GithubIssue` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GithubIssue` mutation. */
export type UpdateGithubIssuePayload = {
  __typename?: 'UpdateGithubIssuePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubIssue` that was updated by this mutation. */
  githubIssue?: Maybe<GithubIssue>
  /** An edge for our `GithubIssue`. May be used by Relay 1. */
  githubIssueEdge?: Maybe<GithubIssuesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our update `GithubIssue` mutation. */
export type UpdateGithubIssuePayloadGithubIssueEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>
}

/** All input for the `updateGithubPullRequestByRepoIdAndDatabaseId` mutation. */
export type UpdateGithubPullRequestByRepoIdAndDatabaseIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  databaseId: Scalars['Int']
  /** An object where the defined keys will be set on the `GithubPullRequest` being updated. */
  githubPullRequestPatch: GithubPullRequestPatch
  repoId: Scalars['UUID']
}

/** All input for the `updateGithubPullRequestCommitByRepoIdAndPrNumberAndHash` mutation. */
export type UpdateGithubPullRequestCommitByRepoIdAndPrNumberAndHashInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubPullRequestCommit` being updated. */
  githubPullRequestCommitPatch: GithubPullRequestCommitPatch
  hash: Scalars['String']
  prNumber: Scalars['Int']
  repoId: Scalars['UUID']
}

/** All input for the `updateGithubPullRequestCommit` mutation. */
export type UpdateGithubPullRequestCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubPullRequestCommit` being updated. */
  githubPullRequestCommitPatch: GithubPullRequestCommitPatch
  /** The globally unique `ID` which will identify a single `GithubPullRequestCommit` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GithubPullRequestCommit` mutation. */
export type UpdateGithubPullRequestCommitPayload = {
  __typename?: 'UpdateGithubPullRequestCommitPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubPullRequestCommit` that was updated by this mutation. */
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>
  /** An edge for our `GithubPullRequestCommit`. May be used by Relay 1. */
  githubPullRequestCommitEdge?: Maybe<GithubPullRequestCommitsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GithubPullRequestCommit` mutation. */
export type UpdateGithubPullRequestCommitPayloadGithubPullRequestCommitEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>
  }

/** All input for the `updateGithubPullRequest` mutation. */
export type UpdateGithubPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubPullRequest` being updated. */
  githubPullRequestPatch: GithubPullRequestPatch
  /** The globally unique `ID` which will identify a single `GithubPullRequest` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GithubPullRequest` mutation. */
export type UpdateGithubPullRequestPayload = {
  __typename?: 'UpdateGithubPullRequestPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubPullRequest` that was updated by this mutation. */
  githubPullRequest?: Maybe<GithubPullRequest>
  /** An edge for our `GithubPullRequest`. May be used by Relay 1. */
  githubPullRequestEdge?: Maybe<GithubPullRequestsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our update `GithubPullRequest` mutation. */
export type UpdateGithubPullRequestPayloadGithubPullRequestEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>
}

/** All input for the `updateGithubPullRequestReviewById` mutation. */
export type UpdateGithubPullRequestReviewByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubPullRequestReview` being updated. */
  githubPullRequestReviewPatch: GithubPullRequestReviewPatch
  id: Scalars['String']
}

/** All input for the `updateGithubPullRequestReview` mutation. */
export type UpdateGithubPullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubPullRequestReview` being updated. */
  githubPullRequestReviewPatch: GithubPullRequestReviewPatch
  /** The globally unique `ID` which will identify a single `GithubPullRequestReview` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GithubPullRequestReview` mutation. */
export type UpdateGithubPullRequestReviewPayload = {
  __typename?: 'UpdateGithubPullRequestReviewPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubPullRequestReview` that was updated by this mutation. */
  githubPullRequestReview?: Maybe<GithubPullRequestReview>
  /** An edge for our `GithubPullRequestReview`. May be used by Relay 1. */
  githubPullRequestReviewEdge?: Maybe<GithubPullRequestReviewsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `GithubPullRequestReview` mutation. */
export type UpdateGithubPullRequestReviewPayloadGithubPullRequestReviewEdgeArgs =
  {
    orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>
  }

/** All input for the `updateGithubRepoInfoByOwnerAndName` mutation. */
export type UpdateGithubRepoInfoByOwnerAndNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubRepoInfo` being updated. */
  githubRepoInfoPatch: GithubRepoInfoPatch
  name: Scalars['String']
  owner: Scalars['String']
}

/** All input for the `updateGithubRepoInfoByRepoId` mutation. */
export type UpdateGithubRepoInfoByRepoIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubRepoInfo` being updated. */
  githubRepoInfoPatch: GithubRepoInfoPatch
  repoId: Scalars['UUID']
}

/** All input for the `updateGithubRepoInfo` mutation. */
export type UpdateGithubRepoInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubRepoInfo` being updated. */
  githubRepoInfoPatch: GithubRepoInfoPatch
  /** The globally unique `ID` which will identify a single `GithubRepoInfo` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GithubRepoInfo` mutation. */
export type UpdateGithubRepoInfoPayload = {
  __typename?: 'UpdateGithubRepoInfoPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubRepoInfo` that was updated by this mutation. */
  githubRepoInfo?: Maybe<GithubRepoInfo>
  /** An edge for our `GithubRepoInfo`. May be used by Relay 1. */
  githubRepoInfoEdge?: Maybe<GithubRepoInfosEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our update `GithubRepoInfo` mutation. */
export type UpdateGithubRepoInfoPayloadGithubRepoInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>
}

/** All input for the `updateGithubStargazerByRepoIdAndLogin` mutation. */
export type UpdateGithubStargazerByRepoIdAndLoginInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubStargazer` being updated. */
  githubStargazerPatch: GithubStargazerPatch
  login: Scalars['String']
  repoId: Scalars['UUID']
}

/** All input for the `updateGithubStargazer` mutation. */
export type UpdateGithubStargazerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `GithubStargazer` being updated. */
  githubStargazerPatch: GithubStargazerPatch
  /** The globally unique `ID` which will identify a single `GithubStargazer` to be updated. */
  nodeId: Scalars['ID']
}

/** The output of our update `GithubStargazer` mutation. */
export type UpdateGithubStargazerPayload = {
  __typename?: 'UpdateGithubStargazerPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `GithubStargazer` that was updated by this mutation. */
  githubStargazer?: Maybe<GithubStargazer>
  /** An edge for our `GithubStargazer`. May be used by Relay 1. */
  githubStargazerEdge?: Maybe<GithubStargazersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repoByRepoId?: Maybe<Repo>
}

/** The output of our update `GithubStargazer` mutation. */
export type UpdateGithubStargazerPayloadGithubStargazerEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>
}

/** All input for the `updateRepoById` mutation. */
export type UpdateRepoByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  /** An object where the defined keys will be set on the `Repo` being updated. */
  repoPatch: RepoPatch
}

/** All input for the `updateRepoImportById` mutation. */
export type UpdateRepoImportByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  /** An object where the defined keys will be set on the `RepoImport` being updated. */
  repoImportPatch: RepoImportPatch
}

/** All input for the `updateRepoImport` mutation. */
export type UpdateRepoImportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoImport` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoImport` being updated. */
  repoImportPatch: RepoImportPatch
}

/** The output of our update `RepoImport` mutation. */
export type UpdateRepoImportPayload = {
  __typename?: 'UpdateRepoImportPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoImport` that was updated by this mutation. */
  repoImport?: Maybe<RepoImport>
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>
}

/** The output of our update `RepoImport` mutation. */
export type UpdateRepoImportPayloadRepoImportEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>
}

/** All input for the `updateRepoImportTypeByType` mutation. */
export type UpdateRepoImportTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `RepoImportType` being updated. */
  repoImportTypePatch: RepoImportTypePatch
  type: Scalars['String']
}

/** All input for the `updateRepoImportType` mutation. */
export type UpdateRepoImportTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoImportType` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoImportType` being updated. */
  repoImportTypePatch: RepoImportTypePatch
}

/** The output of our update `RepoImportType` mutation. */
export type UpdateRepoImportTypePayload = {
  __typename?: 'UpdateRepoImportTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoImportType` that was updated by this mutation. */
  repoImportType?: Maybe<RepoImportType>
  /** An edge for our `RepoImportType`. May be used by Relay 1. */
  repoImportTypeEdge?: Maybe<RepoImportTypesEdge>
}

/** The output of our update `RepoImportType` mutation. */
export type UpdateRepoImportTypePayloadRepoImportTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>
}

/** All input for the `updateRepo` mutation. */
export type UpdateRepoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `Repo` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `Repo` being updated. */
  repoPatch: RepoPatch
}

/** The output of our update `Repo` mutation. */
export type UpdateRepoPayload = {
  __typename?: 'UpdateRepoPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Repo` that was updated by this mutation. */
  repo?: Maybe<Repo>
  /** An edge for our `Repo`. May be used by Relay 1. */
  repoEdge?: Maybe<ReposEdge>
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImportByRepoImportId?: Maybe<RepoImport>
}

/** The output of our update `Repo` mutation. */
export type UpdateRepoPayloadRepoEdgeArgs = {
  orderBy?: InputMaybe<Array<ReposOrderBy>>
}

/** All input for the `updateRepoSyncById` mutation. */
export type UpdateRepoSyncByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['UUID']
  /** An object where the defined keys will be set on the `RepoSync` being updated. */
  repoSyncPatch: RepoSyncPatch
}

/** All input for the `updateRepoSyncByRepoIdAndSyncType` mutation. */
export type UpdateRepoSyncByRepoIdAndSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  repoId: Scalars['UUID']
  /** An object where the defined keys will be set on the `RepoSync` being updated. */
  repoSyncPatch: RepoSyncPatch
  syncType: Scalars['String']
}

/** All input for the `updateRepoSync` mutation. */
export type UpdateRepoSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSync` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoSync` being updated. */
  repoSyncPatch: RepoSyncPatch
}

/** All input for the `updateRepoSyncLogById` mutation. */
export type UpdateRepoSyncLogByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['BigInt']
  /** An object where the defined keys will be set on the `RepoSyncLog` being updated. */
  repoSyncLogPatch: RepoSyncLogPatch
}

/** All input for the `updateRepoSyncLog` mutation. */
export type UpdateRepoSyncLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncLog` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoSyncLog` being updated. */
  repoSyncLogPatch: RepoSyncLogPatch
}

/** The output of our update `RepoSyncLog` mutation. */
export type UpdateRepoSyncLogPayload = {
  __typename?: 'UpdateRepoSyncLogPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncLog` that was updated by this mutation. */
  repoSyncLog?: Maybe<RepoSyncLog>
  /** An edge for our `RepoSyncLog`. May be used by Relay 1. */
  repoSyncLogEdge?: Maybe<RepoSyncLogsEdge>
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueueByRepoSyncQueueId?: Maybe<RepoSyncQueue>
}

/** The output of our update `RepoSyncLog` mutation. */
export type UpdateRepoSyncLogPayloadRepoSyncLogEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>
}

/** All input for the `updateRepoSyncLogTypeByType` mutation. */
export type UpdateRepoSyncLogTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `RepoSyncLogType` being updated. */
  repoSyncLogTypePatch: RepoSyncLogTypePatch
  type: Scalars['String']
}

/** All input for the `updateRepoSyncLogType` mutation. */
export type UpdateRepoSyncLogTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncLogType` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoSyncLogType` being updated. */
  repoSyncLogTypePatch: RepoSyncLogTypePatch
}

/** The output of our update `RepoSyncLogType` mutation. */
export type UpdateRepoSyncLogTypePayload = {
  __typename?: 'UpdateRepoSyncLogTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncLogType` that was updated by this mutation. */
  repoSyncLogType?: Maybe<RepoSyncLogType>
  /** An edge for our `RepoSyncLogType`. May be used by Relay 1. */
  repoSyncLogTypeEdge?: Maybe<RepoSyncLogTypesEdge>
}

/** The output of our update `RepoSyncLogType` mutation. */
export type UpdateRepoSyncLogTypePayloadRepoSyncLogTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>
}

/** The output of our update `RepoSync` mutation. */
export type UpdateRepoSyncPayload = {
  __typename?: 'UpdateRepoSyncPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repoByRepoId?: Maybe<Repo>
  /** The `RepoSync` that was updated by this mutation. */
  repoSync?: Maybe<RepoSync>
  /** An edge for our `RepoSync`. May be used by Relay 1. */
  repoSyncEdge?: Maybe<RepoSyncsEdge>
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>
}

/** The output of our update `RepoSync` mutation. */
export type UpdateRepoSyncPayloadRepoSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>
}

/** All input for the `updateRepoSyncQueueById` mutation. */
export type UpdateRepoSyncQueueByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  id: Scalars['BigInt']
  /** An object where the defined keys will be set on the `RepoSyncQueue` being updated. */
  repoSyncQueuePatch: RepoSyncQueuePatch
}

/** All input for the `updateRepoSyncQueue` mutation. */
export type UpdateRepoSyncQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncQueue` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoSyncQueue` being updated. */
  repoSyncQueuePatch: RepoSyncQueuePatch
}

/** The output of our update `RepoSyncQueue` mutation. */
export type UpdateRepoSyncQueuePayload = {
  __typename?: 'UpdateRepoSyncQueuePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSyncByRepoSyncId?: Maybe<RepoSync>
  /** The `RepoSyncQueue` that was updated by this mutation. */
  repoSyncQueue?: Maybe<RepoSyncQueue>
  /** An edge for our `RepoSyncQueue`. May be used by Relay 1. */
  repoSyncQueueEdge?: Maybe<RepoSyncQueuesEdge>
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>
}

/** The output of our update `RepoSyncQueue` mutation. */
export type UpdateRepoSyncQueuePayloadRepoSyncQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>
}

/** All input for the `updateRepoSyncQueueStatusTypeByType` mutation. */
export type UpdateRepoSyncQueueStatusTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `RepoSyncQueueStatusType` being updated. */
  repoSyncQueueStatusTypePatch: RepoSyncQueueStatusTypePatch
  type: Scalars['String']
}

/** All input for the `updateRepoSyncQueueStatusType` mutation. */
export type UpdateRepoSyncQueueStatusTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncQueueStatusType` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoSyncQueueStatusType` being updated. */
  repoSyncQueueStatusTypePatch: RepoSyncQueueStatusTypePatch
}

/** The output of our update `RepoSyncQueueStatusType` mutation. */
export type UpdateRepoSyncQueueStatusTypePayload = {
  __typename?: 'UpdateRepoSyncQueueStatusTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncQueueStatusType` that was updated by this mutation. */
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>
  /** An edge for our `RepoSyncQueueStatusType`. May be used by Relay 1. */
  repoSyncQueueStatusTypeEdge?: Maybe<RepoSyncQueueStatusTypesEdge>
}

/** The output of our update `RepoSyncQueueStatusType` mutation. */
export type UpdateRepoSyncQueueStatusTypePayloadRepoSyncQueueStatusTypeEdgeArgs =
  {
    orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>
  }

/** All input for the `updateRepoSyncTypeByType` mutation. */
export type UpdateRepoSyncTypeByTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `RepoSyncType` being updated. */
  repoSyncTypePatch: RepoSyncTypePatch
  type: Scalars['String']
}

/** All input for the `updateRepoSyncType` mutation. */
export type UpdateRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `RepoSyncType` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `RepoSyncType` being updated. */
  repoSyncTypePatch: RepoSyncTypePatch
}

/** The output of our update `RepoSyncType` mutation. */
export type UpdateRepoSyncTypePayload = {
  __typename?: 'UpdateRepoSyncTypePayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `RepoSyncType` that was updated by this mutation. */
  repoSyncType?: Maybe<RepoSyncType>
  /** An edge for our `RepoSyncType`. May be used by Relay 1. */
  repoSyncTypeEdge?: Maybe<RepoSyncTypesEdge>
}

/** The output of our update `RepoSyncType` mutation. */
export type UpdateRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>
}

/** All input for the `updateSchemaMigrationByVersion` mutation. */
export type UpdateSchemaMigrationByVersionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** An object where the defined keys will be set on the `SchemaMigration` being updated. */
  schemaMigrationPatch: SchemaMigrationPatch
  version: Scalars['BigInt']
}

/** All input for the `updateSchemaMigration` mutation. */
export type UpdateSchemaMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>
  /** The globally unique `ID` which will identify a single `SchemaMigration` to be updated. */
  nodeId: Scalars['ID']
  /** An object where the defined keys will be set on the `SchemaMigration` being updated. */
  schemaMigrationPatch: SchemaMigrationPatch
}

/** The output of our update `SchemaMigration` mutation. */
export type UpdateSchemaMigrationPayload = {
  __typename?: 'UpdateSchemaMigrationPayload'
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `SchemaMigration` that was updated by this mutation. */
  schemaMigration?: Maybe<SchemaMigration>
  /** An edge for our `SchemaMigration`. May be used by Relay 1. */
  schemaMigrationEdge?: Maybe<SchemaMigrationsEdge>
}

/** The output of our update `SchemaMigration` mutation. */
export type UpdateSchemaMigrationPayloadSchemaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>
}

export type GetReposQueryVariables = Exact<{ [key: string]: never }>

export type GetReposQuery = {
  __typename?: 'Query'
  allRepos?: {
    __typename?: 'ReposConnection'
    totalCount: number
    nodes: Array<{
      __typename?: 'Repo'
      id: any
      repo: string
      createdAt: any
      repoImportByRepoImportId?: {
        __typename?: 'RepoImport'
        id: any
        type: string
      } | null
      repoSyncsByRepoId: {
        __typename?: 'RepoSyncsConnection'
        totalCount: number
        nodes: Array<{
          __typename?: 'RepoSync'
          syncType: string
          repoSyncQueuesByRepoSyncId: {
            __typename?: 'RepoSyncQueuesConnection'
            totalCount: number
            nodes: Array<{
              __typename?: 'RepoSyncQueue'
              id: any
              status: string
            } | null>
          }
        } | null>
      }
    } | null>
  } | null
}

export const GetReposDocument = gql`
  query getRepos {
    allRepos(orderBy: CREATED_AT_DESC) {
      totalCount
      nodes {
        id
        repo
        createdAt
        repoImportByRepoImportId {
          id
          type
        }
        repoSyncsByRepoId {
          totalCount
          nodes {
            syncType
            repoSyncQueuesByRepoSyncId(first: 1, orderBy: CREATED_AT_DESC) {
              totalCount
              nodes {
                id
                status
              }
            }
          }
        }
      }
    }
  }
`

/**
 * __useGetReposQuery__
 *
 * To run a query within a React component, call `useGetReposQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReposQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReposQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReposQuery(
  baseOptions?: Apollo.QueryHookOptions<GetReposQuery, GetReposQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetReposQuery, GetReposQueryVariables>(
    GetReposDocument,
    options
  )
}
export function useGetReposLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReposQuery,
    GetReposQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetReposQuery, GetReposQueryVariables>(
    GetReposDocument,
    options
  )
}
export type GetReposQueryHookResult = ReturnType<typeof useGetReposQuery>
export type GetReposLazyQueryHookResult = ReturnType<
  typeof useGetReposLazyQuery
>
export type GetReposQueryResult = Apollo.QueryResult<
  GetReposQuery,
  GetReposQueryVariables
>
