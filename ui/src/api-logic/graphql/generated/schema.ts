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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigFloat: any
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

export type GitBranchAggregates = {
  __typename?: 'GitBranchAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GitBranchDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type GitBranchDistinctCountAggregates = {
  __typename?: 'GitBranchDistinctCountAggregates'
  /** Distinct count of fullName across the matching connection */
  fullName?: Maybe<Scalars['BigInt']>
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']>
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>
  /** Distinct count of remote across the matching connection */
  remote?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of tagCommitHash across the matching connection */
  tagCommitHash?: Maybe<Scalars['BigInt']>
  /** Distinct count of target across the matching connection */
  target?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GitBranchAggregates>
  /** A list of edges which contains the `GitBranch` and cursor to aid in pagination. */
  edges: Array<GitBranchesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GitBranchAggregates>>
  /** A list of `GitBranch` objects. */
  nodes: Array<Maybe<GitBranch>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitBranch` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GitBranch` values. */
export type GitBranchesConnectionGroupedAggregatesArgs = {
  groupBy: Array<GitBranchesGroupBy>
  having?: InputMaybe<GitBranchesHavingInput>
}

/** A `GitBranch` edge in the connection. */
export type GitBranchesEdge = {
  __typename?: 'GitBranchesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitBranch` at the end of the edge. */
  node?: Maybe<GitBranch>
}

/** Grouping methods for `GitBranch` for usage during aggregation. */
export enum GitBranchesGroupBy {
  FullName = 'FULL_NAME',
  Hash = 'HASH',
  Name = 'NAME',
  Remote = 'REMOTE',
  RepoId = 'REPO_ID',
  TagCommitHash = 'TAG_COMMIT_HASH',
  Target = 'TARGET',
  Type = 'TYPE',
}

/** Conditions for `GitBranch` aggregates. */
export type GitBranchesHavingInput = {
  AND?: InputMaybe<Array<GitBranchesHavingInput>>
  OR?: InputMaybe<Array<GitBranchesHavingInput>>
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

export type GitCommitAggregates = {
  __typename?: 'GitCommitAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<GitCommitAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GitCommitDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<GitCommitMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<GitCommitMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<GitCommitStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<GitCommitStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<GitCommitSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<GitCommitVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<GitCommitVarianceSampleAggregates>
}

export type GitCommitAverageAggregates = {
  __typename?: 'GitCommitAverageAggregates'
  /** Mean average of parents across the matching connection */
  parents?: Maybe<Scalars['BigFloat']>
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

export type GitCommitDistinctCountAggregates = {
  __typename?: 'GitCommitDistinctCountAggregates'
  /** Distinct count of authorEmail across the matching connection */
  authorEmail?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorName across the matching connection */
  authorName?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorWhen across the matching connection */
  authorWhen?: Maybe<Scalars['BigInt']>
  /** Distinct count of committerEmail across the matching connection */
  committerEmail?: Maybe<Scalars['BigInt']>
  /** Distinct count of committerName across the matching connection */
  committerName?: Maybe<Scalars['BigInt']>
  /** Distinct count of committerWhen across the matching connection */
  committerWhen?: Maybe<Scalars['BigInt']>
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']>
  /** Distinct count of message across the matching connection */
  message?: Maybe<Scalars['BigInt']>
  /** Distinct count of parents across the matching connection */
  parents?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
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

export type GitCommitMaxAggregates = {
  __typename?: 'GitCommitMaxAggregates'
  /** Maximum of parents across the matching connection */
  parents?: Maybe<Scalars['Int']>
}

export type GitCommitMinAggregates = {
  __typename?: 'GitCommitMinAggregates'
  /** Minimum of parents across the matching connection */
  parents?: Maybe<Scalars['Int']>
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

export type GitCommitStatAggregates = {
  __typename?: 'GitCommitStatAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<GitCommitStatAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GitCommitStatDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<GitCommitStatMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<GitCommitStatMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<GitCommitStatStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<GitCommitStatStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<GitCommitStatSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<GitCommitStatVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<GitCommitStatVarianceSampleAggregates>
}

export type GitCommitStatAverageAggregates = {
  __typename?: 'GitCommitStatAverageAggregates'
  /** Mean average of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Mean average of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
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

export type GitCommitStatDistinctCountAggregates = {
  __typename?: 'GitCommitStatDistinctCountAggregates'
  /** Distinct count of additions across the matching connection */
  additions?: Maybe<Scalars['BigInt']>
  /** Distinct count of commitHash across the matching connection */
  commitHash?: Maybe<Scalars['BigInt']>
  /** Distinct count of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigInt']>
  /** Distinct count of filePath across the matching connection */
  filePath?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
}

/** An input for mutations affecting `GitCommitStat` */
export type GitCommitStatInput = {
  additions: Scalars['Int']
  commitHash: Scalars['String']
  deletions: Scalars['Int']
  filePath: Scalars['String']
  repoId: Scalars['UUID']
}

export type GitCommitStatMaxAggregates = {
  __typename?: 'GitCommitStatMaxAggregates'
  /** Maximum of additions across the matching connection */
  additions?: Maybe<Scalars['Int']>
  /** Maximum of deletions across the matching connection */
  deletions?: Maybe<Scalars['Int']>
}

export type GitCommitStatMinAggregates = {
  __typename?: 'GitCommitStatMinAggregates'
  /** Minimum of additions across the matching connection */
  additions?: Maybe<Scalars['Int']>
  /** Minimum of deletions across the matching connection */
  deletions?: Maybe<Scalars['Int']>
}

export type GitCommitStatStddevPopulationAggregates = {
  __typename?: 'GitCommitStatStddevPopulationAggregates'
  /** Population standard deviation of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
}

export type GitCommitStatStddevSampleAggregates = {
  __typename?: 'GitCommitStatStddevSampleAggregates'
  /** Sample standard deviation of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
}

export type GitCommitStatSumAggregates = {
  __typename?: 'GitCommitStatSumAggregates'
  /** Sum of additions across the matching connection */
  additions: Scalars['BigInt']
  /** Sum of deletions across the matching connection */
  deletions: Scalars['BigInt']
}

export type GitCommitStatVariancePopulationAggregates = {
  __typename?: 'GitCommitStatVariancePopulationAggregates'
  /** Population variance of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Population variance of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
}

export type GitCommitStatVarianceSampleAggregates = {
  __typename?: 'GitCommitStatVarianceSampleAggregates'
  /** Sample variance of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Sample variance of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `GitCommitStat` values. */
export type GitCommitStatsConnection = {
  __typename?: 'GitCommitStatsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GitCommitStatAggregates>
  /** A list of edges which contains the `GitCommitStat` and cursor to aid in pagination. */
  edges: Array<GitCommitStatsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GitCommitStatAggregates>>
  /** A list of `GitCommitStat` objects. */
  nodes: Array<Maybe<GitCommitStat>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitCommitStat` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GitCommitStat` values. */
export type GitCommitStatsConnectionGroupedAggregatesArgs = {
  groupBy: Array<GitCommitStatsGroupBy>
  having?: InputMaybe<GitCommitStatsHavingInput>
}

/** A `GitCommitStat` edge in the connection. */
export type GitCommitStatsEdge = {
  __typename?: 'GitCommitStatsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitCommitStat` at the end of the edge. */
  node?: Maybe<GitCommitStat>
}

/** Grouping methods for `GitCommitStat` for usage during aggregation. */
export enum GitCommitStatsGroupBy {
  Additions = 'ADDITIONS',
  CommitHash = 'COMMIT_HASH',
  Deletions = 'DELETIONS',
  FilePath = 'FILE_PATH',
  RepoId = 'REPO_ID',
}

export type GitCommitStatsHavingAverageInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

export type GitCommitStatsHavingDistinctCountInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

/** Conditions for `GitCommitStat` aggregates. */
export type GitCommitStatsHavingInput = {
  AND?: InputMaybe<Array<GitCommitStatsHavingInput>>
  OR?: InputMaybe<Array<GitCommitStatsHavingInput>>
  average?: InputMaybe<GitCommitStatsHavingAverageInput>
  distinctCount?: InputMaybe<GitCommitStatsHavingDistinctCountInput>
  max?: InputMaybe<GitCommitStatsHavingMaxInput>
  min?: InputMaybe<GitCommitStatsHavingMinInput>
  stddevPopulation?: InputMaybe<GitCommitStatsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GitCommitStatsHavingStddevSampleInput>
  sum?: InputMaybe<GitCommitStatsHavingSumInput>
  variancePopulation?: InputMaybe<GitCommitStatsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GitCommitStatsHavingVarianceSampleInput>
}

export type GitCommitStatsHavingMaxInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

export type GitCommitStatsHavingMinInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

export type GitCommitStatsHavingStddevPopulationInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

export type GitCommitStatsHavingStddevSampleInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

export type GitCommitStatsHavingSumInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

export type GitCommitStatsHavingVariancePopulationInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
}

export type GitCommitStatsHavingVarianceSampleInput = {
  additions?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
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

export type GitCommitStddevPopulationAggregates = {
  __typename?: 'GitCommitStddevPopulationAggregates'
  /** Population standard deviation of parents across the matching connection */
  parents?: Maybe<Scalars['BigFloat']>
}

export type GitCommitStddevSampleAggregates = {
  __typename?: 'GitCommitStddevSampleAggregates'
  /** Sample standard deviation of parents across the matching connection */
  parents?: Maybe<Scalars['BigFloat']>
}

export type GitCommitSumAggregates = {
  __typename?: 'GitCommitSumAggregates'
  /** Sum of parents across the matching connection */
  parents: Scalars['BigInt']
}

export type GitCommitVariancePopulationAggregates = {
  __typename?: 'GitCommitVariancePopulationAggregates'
  /** Population variance of parents across the matching connection */
  parents?: Maybe<Scalars['BigFloat']>
}

export type GitCommitVarianceSampleAggregates = {
  __typename?: 'GitCommitVarianceSampleAggregates'
  /** Sample variance of parents across the matching connection */
  parents?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `GitCommit` values. */
export type GitCommitsConnection = {
  __typename?: 'GitCommitsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GitCommitAggregates>
  /** A list of edges which contains the `GitCommit` and cursor to aid in pagination. */
  edges: Array<GitCommitsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GitCommitAggregates>>
  /** A list of `GitCommit` objects. */
  nodes: Array<Maybe<GitCommit>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitCommit` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GitCommit` values. */
export type GitCommitsConnectionGroupedAggregatesArgs = {
  groupBy: Array<GitCommitsGroupBy>
  having?: InputMaybe<GitCommitsHavingInput>
}

/** A `GitCommit` edge in the connection. */
export type GitCommitsEdge = {
  __typename?: 'GitCommitsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitCommit` at the end of the edge. */
  node?: Maybe<GitCommit>
}

/** Grouping methods for `GitCommit` for usage during aggregation. */
export enum GitCommitsGroupBy {
  AuthorEmail = 'AUTHOR_EMAIL',
  AuthorName = 'AUTHOR_NAME',
  AuthorWhen = 'AUTHOR_WHEN',
  AuthorWhenTruncatedToDay = 'AUTHOR_WHEN_TRUNCATED_TO_DAY',
  AuthorWhenTruncatedToHour = 'AUTHOR_WHEN_TRUNCATED_TO_HOUR',
  CommitterEmail = 'COMMITTER_EMAIL',
  CommitterName = 'COMMITTER_NAME',
  CommitterWhen = 'COMMITTER_WHEN',
  CommitterWhenTruncatedToDay = 'COMMITTER_WHEN_TRUNCATED_TO_DAY',
  CommitterWhenTruncatedToHour = 'COMMITTER_WHEN_TRUNCATED_TO_HOUR',
  Hash = 'HASH',
  Message = 'MESSAGE',
  Parents = 'PARENTS',
  RepoId = 'REPO_ID',
}

export type GitCommitsHavingAverageInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

export type GitCommitsHavingDistinctCountInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

/** Conditions for `GitCommit` aggregates. */
export type GitCommitsHavingInput = {
  AND?: InputMaybe<Array<GitCommitsHavingInput>>
  OR?: InputMaybe<Array<GitCommitsHavingInput>>
  average?: InputMaybe<GitCommitsHavingAverageInput>
  distinctCount?: InputMaybe<GitCommitsHavingDistinctCountInput>
  max?: InputMaybe<GitCommitsHavingMaxInput>
  min?: InputMaybe<GitCommitsHavingMinInput>
  stddevPopulation?: InputMaybe<GitCommitsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GitCommitsHavingStddevSampleInput>
  sum?: InputMaybe<GitCommitsHavingSumInput>
  variancePopulation?: InputMaybe<GitCommitsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GitCommitsHavingVarianceSampleInput>
}

export type GitCommitsHavingMaxInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

export type GitCommitsHavingMinInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

export type GitCommitsHavingStddevPopulationInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

export type GitCommitsHavingStddevSampleInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

export type GitCommitsHavingSumInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

export type GitCommitsHavingVariancePopulationInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
}

export type GitCommitsHavingVarianceSampleInput = {
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  parents?: InputMaybe<HavingIntFilter>
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

export type GitFileAggregates = {
  __typename?: 'GitFileAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GitFileDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type GitFileDistinctCountAggregates = {
  __typename?: 'GitFileDistinctCountAggregates'
  /** Distinct count of contents across the matching connection */
  contents?: Maybe<Scalars['BigInt']>
  /** Distinct count of executable across the matching connection */
  executable?: Maybe<Scalars['BigInt']>
  /** Distinct count of path across the matching connection */
  path?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GitFileAggregates>
  /** A list of edges which contains the `GitFile` and cursor to aid in pagination. */
  edges: Array<GitFilesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GitFileAggregates>>
  /** A list of `GitFile` objects. */
  nodes: Array<Maybe<GitFile>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitFile` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GitFile` values. */
export type GitFilesConnectionGroupedAggregatesArgs = {
  groupBy: Array<GitFilesGroupBy>
  having?: InputMaybe<GitFilesHavingInput>
}

/** A `GitFile` edge in the connection. */
export type GitFilesEdge = {
  __typename?: 'GitFilesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitFile` at the end of the edge. */
  node?: Maybe<GitFile>
}

/** Grouping methods for `GitFile` for usage during aggregation. */
export enum GitFilesGroupBy {
  Contents = 'CONTENTS',
  Executable = 'EXECUTABLE',
  Path = 'PATH',
  RepoId = 'REPO_ID',
}

/** Conditions for `GitFile` aggregates. */
export type GitFilesHavingInput = {
  AND?: InputMaybe<Array<GitFilesHavingInput>>
  OR?: InputMaybe<Array<GitFilesHavingInput>>
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

export type GitRefAggregates = {
  __typename?: 'GitRefAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GitRefDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type GitRefDistinctCountAggregates = {
  __typename?: 'GitRefDistinctCountAggregates'
  /** Distinct count of fullName across the matching connection */
  fullName?: Maybe<Scalars['BigInt']>
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']>
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>
  /** Distinct count of remote across the matching connection */
  remote?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of tagCommitHash across the matching connection */
  tagCommitHash?: Maybe<Scalars['BigInt']>
  /** Distinct count of target across the matching connection */
  target?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GitRefAggregates>
  /** A list of edges which contains the `GitRef` and cursor to aid in pagination. */
  edges: Array<GitRefsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GitRefAggregates>>
  /** A list of `GitRef` objects. */
  nodes: Array<Maybe<GitRef>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitRef` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GitRef` values. */
export type GitRefsConnectionGroupedAggregatesArgs = {
  groupBy: Array<GitRefsGroupBy>
  having?: InputMaybe<GitRefsHavingInput>
}

/** A `GitRef` edge in the connection. */
export type GitRefsEdge = {
  __typename?: 'GitRefsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitRef` at the end of the edge. */
  node?: Maybe<GitRef>
}

/** Grouping methods for `GitRef` for usage during aggregation. */
export enum GitRefsGroupBy {
  FullName = 'FULL_NAME',
  Hash = 'HASH',
  Name = 'NAME',
  Remote = 'REMOTE',
  RepoId = 'REPO_ID',
  TagCommitHash = 'TAG_COMMIT_HASH',
  Target = 'TARGET',
  Type = 'TYPE',
}

/** Conditions for `GitRef` aggregates. */
export type GitRefsHavingInput = {
  AND?: InputMaybe<Array<GitRefsHavingInput>>
  OR?: InputMaybe<Array<GitRefsHavingInput>>
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

export type GitTagAggregates = {
  __typename?: 'GitTagAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GitTagDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type GitTagDistinctCountAggregates = {
  __typename?: 'GitTagDistinctCountAggregates'
  /** Distinct count of fullName across the matching connection */
  fullName?: Maybe<Scalars['BigInt']>
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']>
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>
  /** Distinct count of remote across the matching connection */
  remote?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of tagCommitHash across the matching connection */
  tagCommitHash?: Maybe<Scalars['BigInt']>
  /** Distinct count of target across the matching connection */
  target?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GitTagAggregates>
  /** A list of edges which contains the `GitTag` and cursor to aid in pagination. */
  edges: Array<GitTagsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GitTagAggregates>>
  /** A list of `GitTag` objects. */
  nodes: Array<Maybe<GitTag>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GitTag` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GitTag` values. */
export type GitTagsConnectionGroupedAggregatesArgs = {
  groupBy: Array<GitTagsGroupBy>
  having?: InputMaybe<GitTagsHavingInput>
}

/** A `GitTag` edge in the connection. */
export type GitTagsEdge = {
  __typename?: 'GitTagsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GitTag` at the end of the edge. */
  node?: Maybe<GitTag>
}

/** Grouping methods for `GitTag` for usage during aggregation. */
export enum GitTagsGroupBy {
  FullName = 'FULL_NAME',
  Hash = 'HASH',
  Name = 'NAME',
  Remote = 'REMOTE',
  RepoId = 'REPO_ID',
  TagCommitHash = 'TAG_COMMIT_HASH',
  Target = 'TARGET',
  Type = 'TYPE',
}

/** Conditions for `GitTag` aggregates. */
export type GitTagsHavingInput = {
  AND?: InputMaybe<Array<GitTagsHavingInput>>
  OR?: InputMaybe<Array<GitTagsHavingInput>>
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

export type GithubIssueAggregates = {
  __typename?: 'GithubIssueAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<GithubIssueAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GithubIssueDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<GithubIssueMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<GithubIssueMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<GithubIssueStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<GithubIssueStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<GithubIssueSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<GithubIssueVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<GithubIssueVarianceSampleAggregates>
}

export type GithubIssueAverageAggregates = {
  __typename?: 'GithubIssueAverageAggregates'
  /** Mean average of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Mean average of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Mean average of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['BigFloat']>
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

export type GithubIssueDistinctCountAggregates = {
  __typename?: 'GithubIssueDistinctCountAggregates'
  /** Distinct count of authorLogin across the matching connection */
  authorLogin?: Maybe<Scalars['BigInt']>
  /** Distinct count of body across the matching connection */
  body?: Maybe<Scalars['BigInt']>
  /** Distinct count of closed across the matching connection */
  closed?: Maybe<Scalars['BigInt']>
  /** Distinct count of closedAt across the matching connection */
  closedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of createdViaEmail across the matching connection */
  createdViaEmail?: Maybe<Scalars['BigInt']>
  /** Distinct count of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigInt']>
  /** Distinct count of editorLogin across the matching connection */
  editorLogin?: Maybe<Scalars['BigInt']>
  /** Distinct count of includesCreatedEdit across the matching connection */
  includesCreatedEdit?: Maybe<Scalars['BigInt']>
  /** Distinct count of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of lastEditedAt across the matching connection */
  lastEditedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of locked across the matching connection */
  locked?: Maybe<Scalars['BigInt']>
  /** Distinct count of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of number across the matching connection */
  number?: Maybe<Scalars['BigInt']>
  /** Distinct count of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of publishedAt across the matching connection */
  publishedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of state across the matching connection */
  state?: Maybe<Scalars['BigInt']>
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']>
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of url across the matching connection */
  url?: Maybe<Scalars['BigInt']>
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

export type GithubIssueMaxAggregates = {
  __typename?: 'GithubIssueMaxAggregates'
  /** Maximum of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['Int']>
  /** Maximum of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['Int']>
  /** Maximum of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['Int']>
  /** Maximum of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['Int']>
  /** Maximum of number across the matching connection */
  number?: Maybe<Scalars['Int']>
  /** Maximum of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['Int']>
  /** Maximum of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['Int']>
}

export type GithubIssueMinAggregates = {
  __typename?: 'GithubIssueMinAggregates'
  /** Minimum of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['Int']>
  /** Minimum of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['Int']>
  /** Minimum of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['Int']>
  /** Minimum of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['Int']>
  /** Minimum of number across the matching connection */
  number?: Maybe<Scalars['Int']>
  /** Minimum of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['Int']>
  /** Minimum of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['Int']>
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

export type GithubIssueStddevPopulationAggregates = {
  __typename?: 'GithubIssueStddevPopulationAggregates'
  /** Population standard deviation of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['BigFloat']>
}

export type GithubIssueStddevSampleAggregates = {
  __typename?: 'GithubIssueStddevSampleAggregates'
  /** Sample standard deviation of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['BigFloat']>
}

export type GithubIssueSumAggregates = {
  __typename?: 'GithubIssueSumAggregates'
  /** Sum of commentCount across the matching connection */
  commentCount: Scalars['BigInt']
  /** Sum of databaseId across the matching connection */
  databaseId: Scalars['BigInt']
  /** Sum of labelCount across the matching connection */
  labelCount: Scalars['BigInt']
  /** Sum of milestoneCount across the matching connection */
  milestoneCount: Scalars['BigInt']
  /** Sum of number across the matching connection */
  number: Scalars['BigInt']
  /** Sum of participantCount across the matching connection */
  participantCount: Scalars['BigInt']
  /** Sum of reactionCount across the matching connection */
  reactionCount: Scalars['BigInt']
}

export type GithubIssueVariancePopulationAggregates = {
  __typename?: 'GithubIssueVariancePopulationAggregates'
  /** Population variance of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Population variance of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Population variance of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['BigFloat']>
}

export type GithubIssueVarianceSampleAggregates = {
  __typename?: 'GithubIssueVarianceSampleAggregates'
  /** Sample variance of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Sample variance of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of milestoneCount across the matching connection */
  milestoneCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Sample variance of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of reactionCount across the matching connection */
  reactionCount?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `GithubIssue` values. */
export type GithubIssuesConnection = {
  __typename?: 'GithubIssuesConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GithubIssueAggregates>
  /** A list of edges which contains the `GithubIssue` and cursor to aid in pagination. */
  edges: Array<GithubIssuesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GithubIssueAggregates>>
  /** A list of `GithubIssue` objects. */
  nodes: Array<Maybe<GithubIssue>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubIssue` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GithubIssue` values. */
export type GithubIssuesConnectionGroupedAggregatesArgs = {
  groupBy: Array<GithubIssuesGroupBy>
  having?: InputMaybe<GithubIssuesHavingInput>
}

/** A `GithubIssue` edge in the connection. */
export type GithubIssuesEdge = {
  __typename?: 'GithubIssuesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubIssue` at the end of the edge. */
  node?: Maybe<GithubIssue>
}

/** Grouping methods for `GithubIssue` for usage during aggregation. */
export enum GithubIssuesGroupBy {
  AuthorLogin = 'AUTHOR_LOGIN',
  Body = 'BODY',
  Closed = 'CLOSED',
  ClosedAt = 'CLOSED_AT',
  ClosedAtTruncatedToDay = 'CLOSED_AT_TRUNCATED_TO_DAY',
  ClosedAtTruncatedToHour = 'CLOSED_AT_TRUNCATED_TO_HOUR',
  CommentCount = 'COMMENT_COUNT',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  CreatedViaEmail = 'CREATED_VIA_EMAIL',
  DatabaseId = 'DATABASE_ID',
  EditorLogin = 'EDITOR_LOGIN',
  IncludesCreatedEdit = 'INCLUDES_CREATED_EDIT',
  LabelCount = 'LABEL_COUNT',
  LastEditedAt = 'LAST_EDITED_AT',
  LastEditedAtTruncatedToDay = 'LAST_EDITED_AT_TRUNCATED_TO_DAY',
  LastEditedAtTruncatedToHour = 'LAST_EDITED_AT_TRUNCATED_TO_HOUR',
  Locked = 'LOCKED',
  MilestoneCount = 'MILESTONE_COUNT',
  Number = 'NUMBER',
  ParticipantCount = 'PARTICIPANT_COUNT',
  PublishedAt = 'PUBLISHED_AT',
  PublishedAtTruncatedToDay = 'PUBLISHED_AT_TRUNCATED_TO_DAY',
  PublishedAtTruncatedToHour = 'PUBLISHED_AT_TRUNCATED_TO_HOUR',
  ReactionCount = 'REACTION_COUNT',
  RepoId = 'REPO_ID',
  State = 'STATE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  Url = 'URL',
}

export type GithubIssuesHavingAverageInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubIssuesHavingDistinctCountInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `GithubIssue` aggregates. */
export type GithubIssuesHavingInput = {
  AND?: InputMaybe<Array<GithubIssuesHavingInput>>
  OR?: InputMaybe<Array<GithubIssuesHavingInput>>
  average?: InputMaybe<GithubIssuesHavingAverageInput>
  distinctCount?: InputMaybe<GithubIssuesHavingDistinctCountInput>
  max?: InputMaybe<GithubIssuesHavingMaxInput>
  min?: InputMaybe<GithubIssuesHavingMinInput>
  stddevPopulation?: InputMaybe<GithubIssuesHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GithubIssuesHavingStddevSampleInput>
  sum?: InputMaybe<GithubIssuesHavingSumInput>
  variancePopulation?: InputMaybe<GithubIssuesHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GithubIssuesHavingVarianceSampleInput>
}

export type GithubIssuesHavingMaxInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubIssuesHavingMinInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubIssuesHavingStddevPopulationInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubIssuesHavingStddevSampleInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubIssuesHavingSumInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubIssuesHavingVariancePopulationInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubIssuesHavingVarianceSampleInput = {
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  milestoneCount?: InputMaybe<HavingIntFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  reactionCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
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

export type GithubPullRequestAggregates = {
  __typename?: 'GithubPullRequestAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<GithubPullRequestAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GithubPullRequestDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<GithubPullRequestMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<GithubPullRequestMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<GithubPullRequestStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<GithubPullRequestStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<GithubPullRequestSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<GithubPullRequestVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<GithubPullRequestVarianceSampleAggregates>
}

export type GithubPullRequestAverageAggregates = {
  __typename?: 'GithubPullRequestAverageAggregates'
  /** Mean average of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Mean average of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Mean average of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Mean average of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Mean average of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Mean average of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
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

export type GithubPullRequestCommitAggregates = {
  __typename?: 'GithubPullRequestCommitAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<GithubPullRequestCommitAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GithubPullRequestCommitDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<GithubPullRequestCommitMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<GithubPullRequestCommitMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<GithubPullRequestCommitStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<GithubPullRequestCommitStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<GithubPullRequestCommitSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<GithubPullRequestCommitVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<GithubPullRequestCommitVarianceSampleAggregates>
}

export type GithubPullRequestCommitAverageAggregates = {
  __typename?: 'GithubPullRequestCommitAverageAggregates'
  /** Mean average of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Mean average of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Mean average of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Mean average of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
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

export type GithubPullRequestCommitDistinctCountAggregates = {
  __typename?: 'GithubPullRequestCommitDistinctCountAggregates'
  /** Distinct count of additions across the matching connection */
  additions?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorEmail across the matching connection */
  authorEmail?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorName across the matching connection */
  authorName?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorWhen across the matching connection */
  authorWhen?: Maybe<Scalars['BigInt']>
  /** Distinct count of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigInt']>
  /** Distinct count of committerEmail across the matching connection */
  committerEmail?: Maybe<Scalars['BigInt']>
  /** Distinct count of committerName across the matching connection */
  committerName?: Maybe<Scalars['BigInt']>
  /** Distinct count of committerWhen across the matching connection */
  committerWhen?: Maybe<Scalars['BigInt']>
  /** Distinct count of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigInt']>
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']>
  /** Distinct count of message across the matching connection */
  message?: Maybe<Scalars['BigInt']>
  /** Distinct count of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of url across the matching connection */
  url?: Maybe<Scalars['BigInt']>
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

export type GithubPullRequestCommitMaxAggregates = {
  __typename?: 'GithubPullRequestCommitMaxAggregates'
  /** Maximum of additions across the matching connection */
  additions?: Maybe<Scalars['Int']>
  /** Maximum of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['Int']>
  /** Maximum of deletions across the matching connection */
  deletions?: Maybe<Scalars['Int']>
  /** Maximum of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['Int']>
}

export type GithubPullRequestCommitMinAggregates = {
  __typename?: 'GithubPullRequestCommitMinAggregates'
  /** Minimum of additions across the matching connection */
  additions?: Maybe<Scalars['Int']>
  /** Minimum of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['Int']>
  /** Minimum of deletions across the matching connection */
  deletions?: Maybe<Scalars['Int']>
  /** Minimum of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['Int']>
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

export type GithubPullRequestCommitStddevPopulationAggregates = {
  __typename?: 'GithubPullRequestCommitStddevPopulationAggregates'
  /** Population standard deviation of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestCommitStddevSampleAggregates = {
  __typename?: 'GithubPullRequestCommitStddevSampleAggregates'
  /** Sample standard deviation of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestCommitSumAggregates = {
  __typename?: 'GithubPullRequestCommitSumAggregates'
  /** Sum of additions across the matching connection */
  additions: Scalars['BigInt']
  /** Sum of changedFiles across the matching connection */
  changedFiles: Scalars['BigInt']
  /** Sum of deletions across the matching connection */
  deletions: Scalars['BigInt']
  /** Sum of prNumber across the matching connection */
  prNumber: Scalars['BigInt']
}

export type GithubPullRequestCommitVariancePopulationAggregates = {
  __typename?: 'GithubPullRequestCommitVariancePopulationAggregates'
  /** Population variance of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Population variance of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Population variance of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Population variance of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestCommitVarianceSampleAggregates = {
  __typename?: 'GithubPullRequestCommitVarianceSampleAggregates'
  /** Sample variance of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Sample variance of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Sample variance of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Sample variance of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `GithubPullRequestCommit` values. */
export type GithubPullRequestCommitsConnection = {
  __typename?: 'GithubPullRequestCommitsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GithubPullRequestCommitAggregates>
  /** A list of edges which contains the `GithubPullRequestCommit` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestCommitsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GithubPullRequestCommitAggregates>>
  /** A list of `GithubPullRequestCommit` objects. */
  nodes: Array<Maybe<GithubPullRequestCommit>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubPullRequestCommit` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GithubPullRequestCommit` values. */
export type GithubPullRequestCommitsConnectionGroupedAggregatesArgs = {
  groupBy: Array<GithubPullRequestCommitsGroupBy>
  having?: InputMaybe<GithubPullRequestCommitsHavingInput>
}

/** A `GithubPullRequestCommit` edge in the connection. */
export type GithubPullRequestCommitsEdge = {
  __typename?: 'GithubPullRequestCommitsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubPullRequestCommit` at the end of the edge. */
  node?: Maybe<GithubPullRequestCommit>
}

/** Grouping methods for `GithubPullRequestCommit` for usage during aggregation. */
export enum GithubPullRequestCommitsGroupBy {
  Additions = 'ADDITIONS',
  AuthorEmail = 'AUTHOR_EMAIL',
  AuthorName = 'AUTHOR_NAME',
  AuthorWhen = 'AUTHOR_WHEN',
  AuthorWhenTruncatedToDay = 'AUTHOR_WHEN_TRUNCATED_TO_DAY',
  AuthorWhenTruncatedToHour = 'AUTHOR_WHEN_TRUNCATED_TO_HOUR',
  ChangedFiles = 'CHANGED_FILES',
  CommitterEmail = 'COMMITTER_EMAIL',
  CommitterName = 'COMMITTER_NAME',
  CommitterWhen = 'COMMITTER_WHEN',
  CommitterWhenTruncatedToDay = 'COMMITTER_WHEN_TRUNCATED_TO_DAY',
  CommitterWhenTruncatedToHour = 'COMMITTER_WHEN_TRUNCATED_TO_HOUR',
  Deletions = 'DELETIONS',
  Hash = 'HASH',
  Message = 'MESSAGE',
  PrNumber = 'PR_NUMBER',
  RepoId = 'REPO_ID',
  Url = 'URL',
}

export type GithubPullRequestCommitsHavingAverageInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

export type GithubPullRequestCommitsHavingDistinctCountInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

/** Conditions for `GithubPullRequestCommit` aggregates. */
export type GithubPullRequestCommitsHavingInput = {
  AND?: InputMaybe<Array<GithubPullRequestCommitsHavingInput>>
  OR?: InputMaybe<Array<GithubPullRequestCommitsHavingInput>>
  average?: InputMaybe<GithubPullRequestCommitsHavingAverageInput>
  distinctCount?: InputMaybe<GithubPullRequestCommitsHavingDistinctCountInput>
  max?: InputMaybe<GithubPullRequestCommitsHavingMaxInput>
  min?: InputMaybe<GithubPullRequestCommitsHavingMinInput>
  stddevPopulation?: InputMaybe<GithubPullRequestCommitsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GithubPullRequestCommitsHavingStddevSampleInput>
  sum?: InputMaybe<GithubPullRequestCommitsHavingSumInput>
  variancePopulation?: InputMaybe<GithubPullRequestCommitsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GithubPullRequestCommitsHavingVarianceSampleInput>
}

export type GithubPullRequestCommitsHavingMaxInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

export type GithubPullRequestCommitsHavingMinInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

export type GithubPullRequestCommitsHavingStddevPopulationInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

export type GithubPullRequestCommitsHavingStddevSampleInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

export type GithubPullRequestCommitsHavingSumInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

export type GithubPullRequestCommitsHavingVariancePopulationInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
}

export type GithubPullRequestCommitsHavingVarianceSampleInput = {
  additions?: InputMaybe<HavingIntFilter>
  authorWhen?: InputMaybe<HavingDatetimeFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  committerWhen?: InputMaybe<HavingDatetimeFilter>
  deletions?: InputMaybe<HavingIntFilter>
  prNumber?: InputMaybe<HavingIntFilter>
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

export type GithubPullRequestDistinctCountAggregates = {
  __typename?: 'GithubPullRequestDistinctCountAggregates'
  /** Distinct count of additions across the matching connection */
  additions?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorAssociation across the matching connection */
  authorAssociation?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorAvatarUrl across the matching connection */
  authorAvatarUrl?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorLogin across the matching connection */
  authorLogin?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorName across the matching connection */
  authorName?: Maybe<Scalars['BigInt']>
  /** Distinct count of baseRefName across the matching connection */
  baseRefName?: Maybe<Scalars['BigInt']>
  /** Distinct count of baseRefOid across the matching connection */
  baseRefOid?: Maybe<Scalars['BigInt']>
  /** Distinct count of baseRepositoryName across the matching connection */
  baseRepositoryName?: Maybe<Scalars['BigInt']>
  /** Distinct count of body across the matching connection */
  body?: Maybe<Scalars['BigInt']>
  /** Distinct count of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigInt']>
  /** Distinct count of closed across the matching connection */
  closed?: Maybe<Scalars['BigInt']>
  /** Distinct count of closedAt across the matching connection */
  closedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of createdViaEmail across the matching connection */
  createdViaEmail?: Maybe<Scalars['BigInt']>
  /** Distinct count of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigInt']>
  /** Distinct count of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigInt']>
  /** Distinct count of editorLogin across the matching connection */
  editorLogin?: Maybe<Scalars['BigInt']>
  /** Distinct count of headRefName across the matching connection */
  headRefName?: Maybe<Scalars['BigInt']>
  /** Distinct count of headRefOid across the matching connection */
  headRefOid?: Maybe<Scalars['BigInt']>
  /** Distinct count of headRepositoryName across the matching connection */
  headRepositoryName?: Maybe<Scalars['BigInt']>
  /** Distinct count of isDraft across the matching connection */
  isDraft?: Maybe<Scalars['BigInt']>
  /** Distinct count of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of lastEditedAt across the matching connection */
  lastEditedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of locked across the matching connection */
  locked?: Maybe<Scalars['BigInt']>
  /** Distinct count of maintainerCanModify across the matching connection */
  maintainerCanModify?: Maybe<Scalars['BigInt']>
  /** Distinct count of mantainerCanModify across the matching connection */
  mantainerCanModify?: Maybe<Scalars['BigInt']>
  /** Distinct count of mergeable across the matching connection */
  mergeable?: Maybe<Scalars['BigInt']>
  /** Distinct count of merged across the matching connection */
  merged?: Maybe<Scalars['BigInt']>
  /** Distinct count of mergedAt across the matching connection */
  mergedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of mergedBy across the matching connection */
  mergedBy?: Maybe<Scalars['BigInt']>
  /** Distinct count of number across the matching connection */
  number?: Maybe<Scalars['BigInt']>
  /** Distinct count of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of publishedAt across the matching connection */
  publishedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of reviewDecision across the matching connection */
  reviewDecision?: Maybe<Scalars['BigInt']>
  /** Distinct count of state across the matching connection */
  state?: Maybe<Scalars['BigInt']>
  /** Distinct count of title across the matching connection */
  title?: Maybe<Scalars['BigInt']>
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of url across the matching connection */
  url?: Maybe<Scalars['BigInt']>
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

export type GithubPullRequestMaxAggregates = {
  __typename?: 'GithubPullRequestMaxAggregates'
  /** Maximum of additions across the matching connection */
  additions?: Maybe<Scalars['Int']>
  /** Maximum of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['Int']>
  /** Maximum of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['Int']>
  /** Maximum of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['Int']>
  /** Maximum of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['Int']>
  /** Maximum of deletions across the matching connection */
  deletions?: Maybe<Scalars['Int']>
  /** Maximum of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['Int']>
  /** Maximum of number across the matching connection */
  number?: Maybe<Scalars['Int']>
  /** Maximum of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['Int']>
}

export type GithubPullRequestMinAggregates = {
  __typename?: 'GithubPullRequestMinAggregates'
  /** Minimum of additions across the matching connection */
  additions?: Maybe<Scalars['Int']>
  /** Minimum of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['Int']>
  /** Minimum of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['Int']>
  /** Minimum of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['Int']>
  /** Minimum of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['Int']>
  /** Minimum of deletions across the matching connection */
  deletions?: Maybe<Scalars['Int']>
  /** Minimum of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['Int']>
  /** Minimum of number across the matching connection */
  number?: Maybe<Scalars['Int']>
  /** Minimum of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['Int']>
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

export type GithubPullRequestReviewAggregates = {
  __typename?: 'GithubPullRequestReviewAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<GithubPullRequestReviewAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GithubPullRequestReviewDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<GithubPullRequestReviewMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<GithubPullRequestReviewMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<GithubPullRequestReviewStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<GithubPullRequestReviewStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<GithubPullRequestReviewSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<GithubPullRequestReviewVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<GithubPullRequestReviewVarianceSampleAggregates>
}

export type GithubPullRequestReviewAverageAggregates = {
  __typename?: 'GithubPullRequestReviewAverageAggregates'
  /** Mean average of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
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

export type GithubPullRequestReviewDistinctCountAggregates = {
  __typename?: 'GithubPullRequestReviewDistinctCountAggregates'
  /** Distinct count of authorAssociation across the matching connection */
  authorAssociation?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorCanPushToRepository across the matching connection */
  authorCanPushToRepository?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorLogin across the matching connection */
  authorLogin?: Maybe<Scalars['BigInt']>
  /** Distinct count of authorUrl across the matching connection */
  authorUrl?: Maybe<Scalars['BigInt']>
  /** Distinct count of body across the matching connection */
  body?: Maybe<Scalars['BigInt']>
  /** Distinct count of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of createdViaEmail across the matching connection */
  createdViaEmail?: Maybe<Scalars['BigInt']>
  /** Distinct count of editorLogin across the matching connection */
  editorLogin?: Maybe<Scalars['BigInt']>
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Distinct count of lastEditedAt across the matching connection */
  lastEditedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigInt']>
  /** Distinct count of publishedAt across the matching connection */
  publishedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of state across the matching connection */
  state?: Maybe<Scalars['BigInt']>
  /** Distinct count of submittedAt across the matching connection */
  submittedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>
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

export type GithubPullRequestReviewMaxAggregates = {
  __typename?: 'GithubPullRequestReviewMaxAggregates'
  /** Maximum of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['Int']>
  /** Maximum of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['Int']>
}

export type GithubPullRequestReviewMinAggregates = {
  __typename?: 'GithubPullRequestReviewMinAggregates'
  /** Minimum of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['Int']>
  /** Minimum of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['Int']>
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

export type GithubPullRequestReviewStddevPopulationAggregates = {
  __typename?: 'GithubPullRequestReviewStddevPopulationAggregates'
  /** Population standard deviation of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestReviewStddevSampleAggregates = {
  __typename?: 'GithubPullRequestReviewStddevSampleAggregates'
  /** Sample standard deviation of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestReviewSumAggregates = {
  __typename?: 'GithubPullRequestReviewSumAggregates'
  /** Sum of commentCount across the matching connection */
  commentCount: Scalars['BigInt']
  /** Sum of prNumber across the matching connection */
  prNumber: Scalars['BigInt']
}

export type GithubPullRequestReviewVariancePopulationAggregates = {
  __typename?: 'GithubPullRequestReviewVariancePopulationAggregates'
  /** Population variance of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestReviewVarianceSampleAggregates = {
  __typename?: 'GithubPullRequestReviewVarianceSampleAggregates'
  /** Sample variance of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of prNumber across the matching connection */
  prNumber?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `GithubPullRequestReview` values. */
export type GithubPullRequestReviewsConnection = {
  __typename?: 'GithubPullRequestReviewsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GithubPullRequestReviewAggregates>
  /** A list of edges which contains the `GithubPullRequestReview` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestReviewsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GithubPullRequestReviewAggregates>>
  /** A list of `GithubPullRequestReview` objects. */
  nodes: Array<Maybe<GithubPullRequestReview>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubPullRequestReview` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GithubPullRequestReview` values. */
export type GithubPullRequestReviewsConnectionGroupedAggregatesArgs = {
  groupBy: Array<GithubPullRequestReviewsGroupBy>
  having?: InputMaybe<GithubPullRequestReviewsHavingInput>
}

/** A `GithubPullRequestReview` edge in the connection. */
export type GithubPullRequestReviewsEdge = {
  __typename?: 'GithubPullRequestReviewsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubPullRequestReview` at the end of the edge. */
  node?: Maybe<GithubPullRequestReview>
}

/** Grouping methods for `GithubPullRequestReview` for usage during aggregation. */
export enum GithubPullRequestReviewsGroupBy {
  AuthorAssociation = 'AUTHOR_ASSOCIATION',
  AuthorCanPushToRepository = 'AUTHOR_CAN_PUSH_TO_REPOSITORY',
  AuthorLogin = 'AUTHOR_LOGIN',
  AuthorUrl = 'AUTHOR_URL',
  Body = 'BODY',
  CommentCount = 'COMMENT_COUNT',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  CreatedViaEmail = 'CREATED_VIA_EMAIL',
  EditorLogin = 'EDITOR_LOGIN',
  LastEditedAt = 'LAST_EDITED_AT',
  LastEditedAtTruncatedToDay = 'LAST_EDITED_AT_TRUNCATED_TO_DAY',
  LastEditedAtTruncatedToHour = 'LAST_EDITED_AT_TRUNCATED_TO_HOUR',
  PrNumber = 'PR_NUMBER',
  PublishedAt = 'PUBLISHED_AT',
  PublishedAtTruncatedToDay = 'PUBLISHED_AT_TRUNCATED_TO_DAY',
  PublishedAtTruncatedToHour = 'PUBLISHED_AT_TRUNCATED_TO_HOUR',
  RepoId = 'REPO_ID',
  State = 'STATE',
  SubmittedAt = 'SUBMITTED_AT',
  SubmittedAtTruncatedToDay = 'SUBMITTED_AT_TRUNCATED_TO_DAY',
  SubmittedAtTruncatedToHour = 'SUBMITTED_AT_TRUNCATED_TO_HOUR',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
}

export type GithubPullRequestReviewsHavingAverageInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestReviewsHavingDistinctCountInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `GithubPullRequestReview` aggregates. */
export type GithubPullRequestReviewsHavingInput = {
  AND?: InputMaybe<Array<GithubPullRequestReviewsHavingInput>>
  OR?: InputMaybe<Array<GithubPullRequestReviewsHavingInput>>
  average?: InputMaybe<GithubPullRequestReviewsHavingAverageInput>
  distinctCount?: InputMaybe<GithubPullRequestReviewsHavingDistinctCountInput>
  max?: InputMaybe<GithubPullRequestReviewsHavingMaxInput>
  min?: InputMaybe<GithubPullRequestReviewsHavingMinInput>
  stddevPopulation?: InputMaybe<GithubPullRequestReviewsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GithubPullRequestReviewsHavingStddevSampleInput>
  sum?: InputMaybe<GithubPullRequestReviewsHavingSumInput>
  variancePopulation?: InputMaybe<GithubPullRequestReviewsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GithubPullRequestReviewsHavingVarianceSampleInput>
}

export type GithubPullRequestReviewsHavingMaxInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestReviewsHavingMinInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestReviewsHavingStddevPopulationInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestReviewsHavingStddevSampleInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestReviewsHavingSumInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestReviewsHavingVariancePopulationInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestReviewsHavingVarianceSampleInput = {
  commentCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  prNumber?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  submittedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
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

export type GithubPullRequestStddevPopulationAggregates = {
  __typename?: 'GithubPullRequestStddevPopulationAggregates'
  /** Population standard deviation of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestStddevSampleAggregates = {
  __typename?: 'GithubPullRequestStddevSampleAggregates'
  /** Sample standard deviation of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestSumAggregates = {
  __typename?: 'GithubPullRequestSumAggregates'
  /** Sum of additions across the matching connection */
  additions: Scalars['BigInt']
  /** Sum of changedFiles across the matching connection */
  changedFiles: Scalars['BigInt']
  /** Sum of commentCount across the matching connection */
  commentCount: Scalars['BigInt']
  /** Sum of commitCount across the matching connection */
  commitCount: Scalars['BigInt']
  /** Sum of databaseId across the matching connection */
  databaseId: Scalars['BigInt']
  /** Sum of deletions across the matching connection */
  deletions: Scalars['BigInt']
  /** Sum of labelCount across the matching connection */
  labelCount: Scalars['BigInt']
  /** Sum of number across the matching connection */
  number: Scalars['BigInt']
  /** Sum of participantCount across the matching connection */
  participantCount: Scalars['BigInt']
}

export type GithubPullRequestVariancePopulationAggregates = {
  __typename?: 'GithubPullRequestVariancePopulationAggregates'
  /** Population variance of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Population variance of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Population variance of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Population variance of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Population variance of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Population variance of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
}

export type GithubPullRequestVarianceSampleAggregates = {
  __typename?: 'GithubPullRequestVarianceSampleAggregates'
  /** Sample variance of additions across the matching connection */
  additions?: Maybe<Scalars['BigFloat']>
  /** Sample variance of changedFiles across the matching connection */
  changedFiles?: Maybe<Scalars['BigFloat']>
  /** Sample variance of commentCount across the matching connection */
  commentCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of commitCount across the matching connection */
  commitCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of databaseId across the matching connection */
  databaseId?: Maybe<Scalars['BigFloat']>
  /** Sample variance of deletions across the matching connection */
  deletions?: Maybe<Scalars['BigFloat']>
  /** Sample variance of labelCount across the matching connection */
  labelCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']>
  /** Sample variance of participantCount across the matching connection */
  participantCount?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `GithubPullRequest` values. */
export type GithubPullRequestsConnection = {
  __typename?: 'GithubPullRequestsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GithubPullRequestAggregates>
  /** A list of edges which contains the `GithubPullRequest` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GithubPullRequestAggregates>>
  /** A list of `GithubPullRequest` objects. */
  nodes: Array<Maybe<GithubPullRequest>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubPullRequest` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GithubPullRequest` values. */
export type GithubPullRequestsConnectionGroupedAggregatesArgs = {
  groupBy: Array<GithubPullRequestsGroupBy>
  having?: InputMaybe<GithubPullRequestsHavingInput>
}

/** A `GithubPullRequest` edge in the connection. */
export type GithubPullRequestsEdge = {
  __typename?: 'GithubPullRequestsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubPullRequest` at the end of the edge. */
  node?: Maybe<GithubPullRequest>
}

/** Grouping methods for `GithubPullRequest` for usage during aggregation. */
export enum GithubPullRequestsGroupBy {
  Additions = 'ADDITIONS',
  AuthorAssociation = 'AUTHOR_ASSOCIATION',
  AuthorAvatarUrl = 'AUTHOR_AVATAR_URL',
  AuthorLogin = 'AUTHOR_LOGIN',
  AuthorName = 'AUTHOR_NAME',
  BaseRefName = 'BASE_REF_NAME',
  BaseRefOid = 'BASE_REF_OID',
  BaseRepositoryName = 'BASE_REPOSITORY_NAME',
  Body = 'BODY',
  ChangedFiles = 'CHANGED_FILES',
  Closed = 'CLOSED',
  ClosedAt = 'CLOSED_AT',
  ClosedAtTruncatedToDay = 'CLOSED_AT_TRUNCATED_TO_DAY',
  ClosedAtTruncatedToHour = 'CLOSED_AT_TRUNCATED_TO_HOUR',
  CommentCount = 'COMMENT_COUNT',
  CommitCount = 'COMMIT_COUNT',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  CreatedViaEmail = 'CREATED_VIA_EMAIL',
  DatabaseId = 'DATABASE_ID',
  Deletions = 'DELETIONS',
  EditorLogin = 'EDITOR_LOGIN',
  HeadRefName = 'HEAD_REF_NAME',
  HeadRefOid = 'HEAD_REF_OID',
  HeadRepositoryName = 'HEAD_REPOSITORY_NAME',
  IsDraft = 'IS_DRAFT',
  LabelCount = 'LABEL_COUNT',
  LastEditedAt = 'LAST_EDITED_AT',
  LastEditedAtTruncatedToDay = 'LAST_EDITED_AT_TRUNCATED_TO_DAY',
  LastEditedAtTruncatedToHour = 'LAST_EDITED_AT_TRUNCATED_TO_HOUR',
  Locked = 'LOCKED',
  MaintainerCanModify = 'MAINTAINER_CAN_MODIFY',
  MantainerCanModify = 'MANTAINER_CAN_MODIFY',
  Mergeable = 'MERGEABLE',
  Merged = 'MERGED',
  MergedAt = 'MERGED_AT',
  MergedAtTruncatedToDay = 'MERGED_AT_TRUNCATED_TO_DAY',
  MergedAtTruncatedToHour = 'MERGED_AT_TRUNCATED_TO_HOUR',
  MergedBy = 'MERGED_BY',
  Number = 'NUMBER',
  ParticipantCount = 'PARTICIPANT_COUNT',
  PublishedAt = 'PUBLISHED_AT',
  PublishedAtTruncatedToDay = 'PUBLISHED_AT_TRUNCATED_TO_DAY',
  PublishedAtTruncatedToHour = 'PUBLISHED_AT_TRUNCATED_TO_HOUR',
  RepoId = 'REPO_ID',
  ReviewDecision = 'REVIEW_DECISION',
  State = 'STATE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  Url = 'URL',
}

export type GithubPullRequestsHavingAverageInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestsHavingDistinctCountInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `GithubPullRequest` aggregates. */
export type GithubPullRequestsHavingInput = {
  AND?: InputMaybe<Array<GithubPullRequestsHavingInput>>
  OR?: InputMaybe<Array<GithubPullRequestsHavingInput>>
  average?: InputMaybe<GithubPullRequestsHavingAverageInput>
  distinctCount?: InputMaybe<GithubPullRequestsHavingDistinctCountInput>
  max?: InputMaybe<GithubPullRequestsHavingMaxInput>
  min?: InputMaybe<GithubPullRequestsHavingMinInput>
  stddevPopulation?: InputMaybe<GithubPullRequestsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GithubPullRequestsHavingStddevSampleInput>
  sum?: InputMaybe<GithubPullRequestsHavingSumInput>
  variancePopulation?: InputMaybe<GithubPullRequestsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GithubPullRequestsHavingVarianceSampleInput>
}

export type GithubPullRequestsHavingMaxInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestsHavingMinInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestsHavingStddevPopulationInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestsHavingStddevSampleInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestsHavingSumInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestsHavingVariancePopulationInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubPullRequestsHavingVarianceSampleInput = {
  additions?: InputMaybe<HavingIntFilter>
  changedFiles?: InputMaybe<HavingIntFilter>
  closedAt?: InputMaybe<HavingDatetimeFilter>
  commentCount?: InputMaybe<HavingIntFilter>
  commitCount?: InputMaybe<HavingIntFilter>
  createdAt?: InputMaybe<HavingDatetimeFilter>
  databaseId?: InputMaybe<HavingIntFilter>
  deletions?: InputMaybe<HavingIntFilter>
  labelCount?: InputMaybe<HavingIntFilter>
  lastEditedAt?: InputMaybe<HavingDatetimeFilter>
  mergedAt?: InputMaybe<HavingDatetimeFilter>
  number?: InputMaybe<HavingIntFilter>
  participantCount?: InputMaybe<HavingIntFilter>
  publishedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
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

export type GithubRepoInfoAggregates = {
  __typename?: 'GithubRepoInfoAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<GithubRepoInfoAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GithubRepoInfoDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<GithubRepoInfoMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<GithubRepoInfoMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<GithubRepoInfoStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<GithubRepoInfoStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<GithubRepoInfoSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<GithubRepoInfoVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<GithubRepoInfoVarianceSampleAggregates>
}

export type GithubRepoInfoAverageAggregates = {
  __typename?: 'GithubRepoInfoAverageAggregates'
  /** Mean average of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['BigFloat']>
  /** Mean average of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['BigFloat']>
  /** Mean average of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['BigFloat']>
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

export type GithubRepoInfoDistinctCountAggregates = {
  __typename?: 'GithubRepoInfoDistinctCountAggregates'
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of defaultBranchName across the matching connection */
  defaultBranchName?: Maybe<Scalars['BigInt']>
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>
  /** Distinct count of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['BigInt']>
  /** Distinct count of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of homepageUrl across the matching connection */
  homepageUrl?: Maybe<Scalars['BigInt']>
  /** Distinct count of isArchived across the matching connection */
  isArchived?: Maybe<Scalars['BigInt']>
  /** Distinct count of isDisabled across the matching connection */
  isDisabled?: Maybe<Scalars['BigInt']>
  /** Distinct count of isMirror across the matching connection */
  isMirror?: Maybe<Scalars['BigInt']>
  /** Distinct count of isPrivate across the matching connection */
  isPrivate?: Maybe<Scalars['BigInt']>
  /** Distinct count of latestReleaseAuthor across the matching connection */
  latestReleaseAuthor?: Maybe<Scalars['BigInt']>
  /** Distinct count of latestReleaseCreatedAt across the matching connection */
  latestReleaseCreatedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of latestReleaseName across the matching connection */
  latestReleaseName?: Maybe<Scalars['BigInt']>
  /** Distinct count of latestReleasePublishedAt across the matching connection */
  latestReleasePublishedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of licenseKey across the matching connection */
  licenseKey?: Maybe<Scalars['BigInt']>
  /** Distinct count of licenseName across the matching connection */
  licenseName?: Maybe<Scalars['BigInt']>
  /** Distinct count of licenseNickname across the matching connection */
  licenseNickname?: Maybe<Scalars['BigInt']>
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>
  /** Distinct count of openGraphImageUrl across the matching connection */
  openGraphImageUrl?: Maybe<Scalars['BigInt']>
  /** Distinct count of owner across the matching connection */
  owner?: Maybe<Scalars['BigInt']>
  /** Distinct count of primaryLanguage across the matching connection */
  primaryLanguage?: Maybe<Scalars['BigInt']>
  /** Distinct count of pushedAt across the matching connection */
  pushedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['BigInt']>
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['BigInt']>
}

/** Grouping methods for `GithubRepoInfo` for usage during aggregation. */
export enum GithubRepoInfoGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DefaultBranchName = 'DEFAULT_BRANCH_NAME',
  Description = 'DESCRIPTION',
  DiskUsage = 'DISK_USAGE',
  ForkCount = 'FORK_COUNT',
  HomepageUrl = 'HOMEPAGE_URL',
  IsArchived = 'IS_ARCHIVED',
  IsDisabled = 'IS_DISABLED',
  IsMirror = 'IS_MIRROR',
  IsPrivate = 'IS_PRIVATE',
  LatestReleaseAuthor = 'LATEST_RELEASE_AUTHOR',
  LatestReleaseCreatedAt = 'LATEST_RELEASE_CREATED_AT',
  LatestReleaseCreatedAtTruncatedToDay = 'LATEST_RELEASE_CREATED_AT_TRUNCATED_TO_DAY',
  LatestReleaseCreatedAtTruncatedToHour = 'LATEST_RELEASE_CREATED_AT_TRUNCATED_TO_HOUR',
  LatestReleaseName = 'LATEST_RELEASE_NAME',
  LatestReleasePublishedAt = 'LATEST_RELEASE_PUBLISHED_AT',
  LatestReleasePublishedAtTruncatedToDay = 'LATEST_RELEASE_PUBLISHED_AT_TRUNCATED_TO_DAY',
  LatestReleasePublishedAtTruncatedToHour = 'LATEST_RELEASE_PUBLISHED_AT_TRUNCATED_TO_HOUR',
  LicenseKey = 'LICENSE_KEY',
  LicenseName = 'LICENSE_NAME',
  LicenseNickname = 'LICENSE_NICKNAME',
  Name = 'NAME',
  OpenGraphImageUrl = 'OPEN_GRAPH_IMAGE_URL',
  Owner = 'OWNER',
  PrimaryLanguage = 'PRIMARY_LANGUAGE',
  PushedAt = 'PUSHED_AT',
  PushedAtTruncatedToDay = 'PUSHED_AT_TRUNCATED_TO_DAY',
  PushedAtTruncatedToHour = 'PUSHED_AT_TRUNCATED_TO_HOUR',
  ReleasesCount = 'RELEASES_COUNT',
  StargazersCount = 'STARGAZERS_COUNT',
  TotalIssuesCount = 'TOTAL_ISSUES_COUNT',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  WatchersCount = 'WATCHERS_COUNT',
}

export type GithubRepoInfoHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

export type GithubRepoInfoHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

/** Conditions for `GithubRepoInfo` aggregates. */
export type GithubRepoInfoHavingInput = {
  AND?: InputMaybe<Array<GithubRepoInfoHavingInput>>
  OR?: InputMaybe<Array<GithubRepoInfoHavingInput>>
  average?: InputMaybe<GithubRepoInfoHavingAverageInput>
  distinctCount?: InputMaybe<GithubRepoInfoHavingDistinctCountInput>
  max?: InputMaybe<GithubRepoInfoHavingMaxInput>
  min?: InputMaybe<GithubRepoInfoHavingMinInput>
  stddevPopulation?: InputMaybe<GithubRepoInfoHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GithubRepoInfoHavingStddevSampleInput>
  sum?: InputMaybe<GithubRepoInfoHavingSumInput>
  variancePopulation?: InputMaybe<GithubRepoInfoHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GithubRepoInfoHavingVarianceSampleInput>
}

export type GithubRepoInfoHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

export type GithubRepoInfoHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

export type GithubRepoInfoHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

export type GithubRepoInfoHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

export type GithubRepoInfoHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

export type GithubRepoInfoHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
}

export type GithubRepoInfoHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  diskUsage?: InputMaybe<HavingIntFilter>
  forkCount?: InputMaybe<HavingIntFilter>
  latestReleaseCreatedAt?: InputMaybe<HavingDatetimeFilter>
  latestReleasePublishedAt?: InputMaybe<HavingDatetimeFilter>
  pushedAt?: InputMaybe<HavingDatetimeFilter>
  releasesCount?: InputMaybe<HavingIntFilter>
  stargazersCount?: InputMaybe<HavingIntFilter>
  totalIssuesCount?: InputMaybe<HavingIntFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
  watchersCount?: InputMaybe<HavingIntFilter>
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

export type GithubRepoInfoMaxAggregates = {
  __typename?: 'GithubRepoInfoMaxAggregates'
  /** Maximum of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['Int']>
  /** Maximum of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['Int']>
  /** Maximum of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['Int']>
  /** Maximum of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['Int']>
  /** Maximum of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['Int']>
  /** Maximum of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['Int']>
}

export type GithubRepoInfoMinAggregates = {
  __typename?: 'GithubRepoInfoMinAggregates'
  /** Minimum of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['Int']>
  /** Minimum of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['Int']>
  /** Minimum of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['Int']>
  /** Minimum of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['Int']>
  /** Minimum of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['Int']>
  /** Minimum of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['Int']>
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

export type GithubRepoInfoStddevPopulationAggregates = {
  __typename?: 'GithubRepoInfoStddevPopulationAggregates'
  /** Population standard deviation of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['BigFloat']>
}

export type GithubRepoInfoStddevSampleAggregates = {
  __typename?: 'GithubRepoInfoStddevSampleAggregates'
  /** Sample standard deviation of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['BigFloat']>
}

export type GithubRepoInfoSumAggregates = {
  __typename?: 'GithubRepoInfoSumAggregates'
  /** Sum of diskUsage across the matching connection */
  diskUsage: Scalars['BigInt']
  /** Sum of forkCount across the matching connection */
  forkCount: Scalars['BigInt']
  /** Sum of releasesCount across the matching connection */
  releasesCount: Scalars['BigInt']
  /** Sum of stargazersCount across the matching connection */
  stargazersCount: Scalars['BigInt']
  /** Sum of totalIssuesCount across the matching connection */
  totalIssuesCount: Scalars['BigInt']
  /** Sum of watchersCount across the matching connection */
  watchersCount: Scalars['BigInt']
}

export type GithubRepoInfoVariancePopulationAggregates = {
  __typename?: 'GithubRepoInfoVariancePopulationAggregates'
  /** Population variance of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['BigFloat']>
  /** Population variance of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['BigFloat']>
  /** Population variance of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['BigFloat']>
}

export type GithubRepoInfoVarianceSampleAggregates = {
  __typename?: 'GithubRepoInfoVarianceSampleAggregates'
  /** Sample variance of diskUsage across the matching connection */
  diskUsage?: Maybe<Scalars['BigFloat']>
  /** Sample variance of forkCount across the matching connection */
  forkCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of releasesCount across the matching connection */
  releasesCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of stargazersCount across the matching connection */
  stargazersCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of totalIssuesCount across the matching connection */
  totalIssuesCount?: Maybe<Scalars['BigFloat']>
  /** Sample variance of watchersCount across the matching connection */
  watchersCount?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `GithubRepoInfo` values. */
export type GithubRepoInfosConnection = {
  __typename?: 'GithubRepoInfosConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GithubRepoInfoAggregates>
  /** A list of edges which contains the `GithubRepoInfo` and cursor to aid in pagination. */
  edges: Array<GithubRepoInfosEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GithubRepoInfoAggregates>>
  /** A list of `GithubRepoInfo` objects. */
  nodes: Array<Maybe<GithubRepoInfo>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubRepoInfo` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GithubRepoInfo` values. */
export type GithubRepoInfosConnectionGroupedAggregatesArgs = {
  groupBy: Array<GithubRepoInfoGroupBy>
  having?: InputMaybe<GithubRepoInfoHavingInput>
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

export type GithubStargazerAggregates = {
  __typename?: 'GithubStargazerAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<GithubStargazerDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type GithubStargazerDistinctCountAggregates = {
  __typename?: 'GithubStargazerDistinctCountAggregates'
  /** Distinct count of avatarUrl across the matching connection */
  avatarUrl?: Maybe<Scalars['BigInt']>
  /** Distinct count of bio across the matching connection */
  bio?: Maybe<Scalars['BigInt']>
  /** Distinct count of company across the matching connection */
  company?: Maybe<Scalars['BigInt']>
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of email across the matching connection */
  email?: Maybe<Scalars['BigInt']>
  /** Distinct count of location across the matching connection */
  location?: Maybe<Scalars['BigInt']>
  /** Distinct count of login across the matching connection */
  login?: Maybe<Scalars['BigInt']>
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of starredAt across the matching connection */
  starredAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of twitter across the matching connection */
  twitter?: Maybe<Scalars['BigInt']>
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of website across the matching connection */
  website?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<GithubStargazerAggregates>
  /** A list of edges which contains the `GithubStargazer` and cursor to aid in pagination. */
  edges: Array<GithubStargazersEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<GithubStargazerAggregates>>
  /** A list of `GithubStargazer` objects. */
  nodes: Array<Maybe<GithubStargazer>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `GithubStargazer` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `GithubStargazer` values. */
export type GithubStargazersConnectionGroupedAggregatesArgs = {
  groupBy: Array<GithubStargazersGroupBy>
  having?: InputMaybe<GithubStargazersHavingInput>
}

/** A `GithubStargazer` edge in the connection. */
export type GithubStargazersEdge = {
  __typename?: 'GithubStargazersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `GithubStargazer` at the end of the edge. */
  node?: Maybe<GithubStargazer>
}

/** Grouping methods for `GithubStargazer` for usage during aggregation. */
export enum GithubStargazersGroupBy {
  AvatarUrl = 'AVATAR_URL',
  Bio = 'BIO',
  Company = 'COMPANY',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  Email = 'EMAIL',
  Location = 'LOCATION',
  Login = 'LOGIN',
  Name = 'NAME',
  RepoId = 'REPO_ID',
  StarredAt = 'STARRED_AT',
  StarredAtTruncatedToDay = 'STARRED_AT_TRUNCATED_TO_DAY',
  StarredAtTruncatedToHour = 'STARRED_AT_TRUNCATED_TO_HOUR',
  Twitter = 'TWITTER',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  Website = 'WEBSITE',
}

export type GithubStargazersHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubStargazersHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `GithubStargazer` aggregates. */
export type GithubStargazersHavingInput = {
  AND?: InputMaybe<Array<GithubStargazersHavingInput>>
  OR?: InputMaybe<Array<GithubStargazersHavingInput>>
  average?: InputMaybe<GithubStargazersHavingAverageInput>
  distinctCount?: InputMaybe<GithubStargazersHavingDistinctCountInput>
  max?: InputMaybe<GithubStargazersHavingMaxInput>
  min?: InputMaybe<GithubStargazersHavingMinInput>
  stddevPopulation?: InputMaybe<GithubStargazersHavingStddevPopulationInput>
  stddevSample?: InputMaybe<GithubStargazersHavingStddevSampleInput>
  sum?: InputMaybe<GithubStargazersHavingSumInput>
  variancePopulation?: InputMaybe<GithubStargazersHavingVariancePopulationInput>
  varianceSample?: InputMaybe<GithubStargazersHavingVarianceSampleInput>
}

export type GithubStargazersHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubStargazersHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubStargazersHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubStargazersHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubStargazersHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubStargazersHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type GithubStargazersHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  starredAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
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

export type HavingBigintFilter = {
  equalTo?: InputMaybe<Scalars['BigInt']>
  greaterThan?: InputMaybe<Scalars['BigInt']>
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']>
  lessThan?: InputMaybe<Scalars['BigInt']>
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']>
  notEqualTo?: InputMaybe<Scalars['BigInt']>
}

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']>
  greaterThan?: InputMaybe<Scalars['Datetime']>
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>
  lessThan?: InputMaybe<Scalars['Datetime']>
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>
  notEqualTo?: InputMaybe<Scalars['Datetime']>
}

export type HavingIntFilter = {
  equalTo?: InputMaybe<Scalars['Int']>
  greaterThan?: InputMaybe<Scalars['Int']>
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>
  lessThan?: InputMaybe<Scalars['Int']>
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>
  notEqualTo?: InputMaybe<Scalars['Int']>
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

export type LatestRepoSyncAggregates = {
  __typename?: 'LatestRepoSyncAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<LatestRepoSyncAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<LatestRepoSyncDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<LatestRepoSyncMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<LatestRepoSyncMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<LatestRepoSyncStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<LatestRepoSyncStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<LatestRepoSyncSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<LatestRepoSyncVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<LatestRepoSyncVarianceSampleAggregates>
}

export type LatestRepoSyncAverageAggregates = {
  __typename?: 'LatestRepoSyncAverageAggregates'
  /** Mean average of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
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

export type LatestRepoSyncDistinctCountAggregates = {
  __typename?: 'LatestRepoSyncDistinctCountAggregates'
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of doneAt across the matching connection */
  doneAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoSyncId across the matching connection */
  repoSyncId?: Maybe<Scalars['BigInt']>
  /** Distinct count of startedAt across the matching connection */
  startedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of status across the matching connection */
  status?: Maybe<Scalars['BigInt']>
}

export type LatestRepoSyncMaxAggregates = {
  __typename?: 'LatestRepoSyncMaxAggregates'
  /** Maximum of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
}

export type LatestRepoSyncMinAggregates = {
  __typename?: 'LatestRepoSyncMinAggregates'
  /** Minimum of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
}

export type LatestRepoSyncStddevPopulationAggregates = {
  __typename?: 'LatestRepoSyncStddevPopulationAggregates'
  /** Population standard deviation of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

export type LatestRepoSyncStddevSampleAggregates = {
  __typename?: 'LatestRepoSyncStddevSampleAggregates'
  /** Sample standard deviation of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

export type LatestRepoSyncSumAggregates = {
  __typename?: 'LatestRepoSyncSumAggregates'
  /** Sum of id across the matching connection */
  id: Scalars['BigFloat']
}

export type LatestRepoSyncVariancePopulationAggregates = {
  __typename?: 'LatestRepoSyncVariancePopulationAggregates'
  /** Population variance of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

export type LatestRepoSyncVarianceSampleAggregates = {
  __typename?: 'LatestRepoSyncVarianceSampleAggregates'
  /** Sample variance of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `LatestRepoSync` values. */
export type LatestRepoSyncsConnection = {
  __typename?: 'LatestRepoSyncsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<LatestRepoSyncAggregates>
  /** A list of edges which contains the `LatestRepoSync` and cursor to aid in pagination. */
  edges: Array<LatestRepoSyncsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<LatestRepoSyncAggregates>>
  /** A list of `LatestRepoSync` objects. */
  nodes: Array<Maybe<LatestRepoSync>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `LatestRepoSync` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `LatestRepoSync` values. */
export type LatestRepoSyncsConnectionGroupedAggregatesArgs = {
  groupBy: Array<LatestRepoSyncsGroupBy>
  having?: InputMaybe<LatestRepoSyncsHavingInput>
}

/** A `LatestRepoSync` edge in the connection. */
export type LatestRepoSyncsEdge = {
  __typename?: 'LatestRepoSyncsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `LatestRepoSync` at the end of the edge. */
  node?: Maybe<LatestRepoSync>
}

/** Grouping methods for `LatestRepoSync` for usage during aggregation. */
export enum LatestRepoSyncsGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DoneAt = 'DONE_AT',
  DoneAtTruncatedToDay = 'DONE_AT_TRUNCATED_TO_DAY',
  DoneAtTruncatedToHour = 'DONE_AT_TRUNCATED_TO_HOUR',
  Id = 'ID',
  RepoSyncId = 'REPO_SYNC_ID',
  StartedAt = 'STARTED_AT',
  StartedAtTruncatedToDay = 'STARTED_AT_TRUNCATED_TO_DAY',
  StartedAtTruncatedToHour = 'STARTED_AT_TRUNCATED_TO_HOUR',
  Status = 'STATUS',
}

export type LatestRepoSyncsHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type LatestRepoSyncsHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `LatestRepoSync` aggregates. */
export type LatestRepoSyncsHavingInput = {
  AND?: InputMaybe<Array<LatestRepoSyncsHavingInput>>
  OR?: InputMaybe<Array<LatestRepoSyncsHavingInput>>
  average?: InputMaybe<LatestRepoSyncsHavingAverageInput>
  distinctCount?: InputMaybe<LatestRepoSyncsHavingDistinctCountInput>
  max?: InputMaybe<LatestRepoSyncsHavingMaxInput>
  min?: InputMaybe<LatestRepoSyncsHavingMinInput>
  stddevPopulation?: InputMaybe<LatestRepoSyncsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<LatestRepoSyncsHavingStddevSampleInput>
  sum?: InputMaybe<LatestRepoSyncsHavingSumInput>
  variancePopulation?: InputMaybe<LatestRepoSyncsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<LatestRepoSyncsHavingVarianceSampleInput>
}

export type LatestRepoSyncsHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type LatestRepoSyncsHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type LatestRepoSyncsHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type LatestRepoSyncsHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type LatestRepoSyncsHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type LatestRepoSyncsHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type LatestRepoSyncsHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
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

export type RepoAggregates = {
  __typename?: 'RepoAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type RepoDistinctCountAggregates = {
  __typename?: 'RepoDistinctCountAggregates'
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Distinct count of isGithub across the matching connection */
  isGithub?: Maybe<Scalars['BigInt']>
  /** Distinct count of ref across the matching connection */
  ref?: Maybe<Scalars['BigInt']>
  /** Distinct count of repo across the matching connection */
  repo?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoImportId across the matching connection */
  repoImportId?: Maybe<Scalars['BigInt']>
  /** Distinct count of settings across the matching connection */
  settings?: Maybe<Scalars['BigInt']>
  /** Distinct count of tags across the matching connection */
  tags?: Maybe<Scalars['BigInt']>
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

export type RepoImportAggregates = {
  __typename?: 'RepoImportAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoImportDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type RepoImportDistinctCountAggregates = {
  __typename?: 'RepoImportDistinctCountAggregates'
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Distinct count of importInterval across the matching connection */
  importInterval?: Maybe<Scalars['BigInt']>
  /** Distinct count of lastImport across the matching connection */
  lastImport?: Maybe<Scalars['BigInt']>
  /** Distinct count of lastImportStartedAt across the matching connection */
  lastImportStartedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of settings across the matching connection */
  settings?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>
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

export type RepoImportTypeAggregates = {
  __typename?: 'RepoImportTypeAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoImportTypeDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type RepoImportTypeDistinctCountAggregates = {
  __typename?: 'RepoImportTypeDistinctCountAggregates'
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoImportTypeAggregates>
  /** A list of edges which contains the `RepoImportType` and cursor to aid in pagination. */
  edges: Array<RepoImportTypesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoImportTypeAggregates>>
  /** A list of `RepoImportType` objects. */
  nodes: Array<Maybe<RepoImportType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoImportType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoImportType` values. */
export type RepoImportTypesConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoImportTypesGroupBy>
  having?: InputMaybe<RepoImportTypesHavingInput>
}

/** A `RepoImportType` edge in the connection. */
export type RepoImportTypesEdge = {
  __typename?: 'RepoImportTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoImportType` at the end of the edge. */
  node?: Maybe<RepoImportType>
}

/** Grouping methods for `RepoImportType` for usage during aggregation. */
export enum RepoImportTypesGroupBy {
  Description = 'DESCRIPTION',
}

/** Conditions for `RepoImportType` aggregates. */
export type RepoImportTypesHavingInput = {
  AND?: InputMaybe<Array<RepoImportTypesHavingInput>>
  OR?: InputMaybe<Array<RepoImportTypesHavingInput>>
}

/** Methods to use when ordering `RepoImportType`. */
export enum RepoImportTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoImportsByTypeAverageCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_CREATED_AT_ASC',
  RepoImportsByTypeAverageCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_CREATED_AT_DESC',
  RepoImportsByTypeAverageIdAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_ID_ASC',
  RepoImportsByTypeAverageIdDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_ID_DESC',
  RepoImportsByTypeAverageImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeAverageImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeAverageLastImportAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_LAST_IMPORT_ASC',
  RepoImportsByTypeAverageLastImportDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_LAST_IMPORT_DESC',
  RepoImportsByTypeAverageLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeAverageLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeAverageSettingsAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_SETTINGS_ASC',
  RepoImportsByTypeAverageSettingsDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_SETTINGS_DESC',
  RepoImportsByTypeAverageTypeAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_TYPE_ASC',
  RepoImportsByTypeAverageTypeDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_TYPE_DESC',
  RepoImportsByTypeAverageUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_UPDATED_AT_ASC',
  RepoImportsByTypeAverageUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_AVERAGE_UPDATED_AT_DESC',
  RepoImportsByTypeCountAsc = 'REPO_IMPORTS_BY_TYPE_COUNT_ASC',
  RepoImportsByTypeCountDesc = 'REPO_IMPORTS_BY_TYPE_COUNT_DESC',
  RepoImportsByTypeDistinctCountCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_CREATED_AT_ASC',
  RepoImportsByTypeDistinctCountCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_CREATED_AT_DESC',
  RepoImportsByTypeDistinctCountIdAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_ID_ASC',
  RepoImportsByTypeDistinctCountIdDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_ID_DESC',
  RepoImportsByTypeDistinctCountImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeDistinctCountImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeDistinctCountLastImportAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_LAST_IMPORT_ASC',
  RepoImportsByTypeDistinctCountLastImportDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_LAST_IMPORT_DESC',
  RepoImportsByTypeDistinctCountLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeDistinctCountLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeDistinctCountSettingsAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_SETTINGS_ASC',
  RepoImportsByTypeDistinctCountSettingsDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_SETTINGS_DESC',
  RepoImportsByTypeDistinctCountTypeAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_TYPE_ASC',
  RepoImportsByTypeDistinctCountTypeDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_TYPE_DESC',
  RepoImportsByTypeDistinctCountUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_UPDATED_AT_ASC',
  RepoImportsByTypeDistinctCountUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_DISTINCT_COUNT_UPDATED_AT_DESC',
  RepoImportsByTypeMaxCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_MAX_CREATED_AT_ASC',
  RepoImportsByTypeMaxCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_MAX_CREATED_AT_DESC',
  RepoImportsByTypeMaxIdAsc = 'REPO_IMPORTS_BY_TYPE_MAX_ID_ASC',
  RepoImportsByTypeMaxIdDesc = 'REPO_IMPORTS_BY_TYPE_MAX_ID_DESC',
  RepoImportsByTypeMaxImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_MAX_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeMaxImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_MAX_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeMaxLastImportAsc = 'REPO_IMPORTS_BY_TYPE_MAX_LAST_IMPORT_ASC',
  RepoImportsByTypeMaxLastImportDesc = 'REPO_IMPORTS_BY_TYPE_MAX_LAST_IMPORT_DESC',
  RepoImportsByTypeMaxLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_MAX_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeMaxLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_MAX_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeMaxSettingsAsc = 'REPO_IMPORTS_BY_TYPE_MAX_SETTINGS_ASC',
  RepoImportsByTypeMaxSettingsDesc = 'REPO_IMPORTS_BY_TYPE_MAX_SETTINGS_DESC',
  RepoImportsByTypeMaxTypeAsc = 'REPO_IMPORTS_BY_TYPE_MAX_TYPE_ASC',
  RepoImportsByTypeMaxTypeDesc = 'REPO_IMPORTS_BY_TYPE_MAX_TYPE_DESC',
  RepoImportsByTypeMaxUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_MAX_UPDATED_AT_ASC',
  RepoImportsByTypeMaxUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_MAX_UPDATED_AT_DESC',
  RepoImportsByTypeMinCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_MIN_CREATED_AT_ASC',
  RepoImportsByTypeMinCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_MIN_CREATED_AT_DESC',
  RepoImportsByTypeMinIdAsc = 'REPO_IMPORTS_BY_TYPE_MIN_ID_ASC',
  RepoImportsByTypeMinIdDesc = 'REPO_IMPORTS_BY_TYPE_MIN_ID_DESC',
  RepoImportsByTypeMinImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_MIN_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeMinImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_MIN_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeMinLastImportAsc = 'REPO_IMPORTS_BY_TYPE_MIN_LAST_IMPORT_ASC',
  RepoImportsByTypeMinLastImportDesc = 'REPO_IMPORTS_BY_TYPE_MIN_LAST_IMPORT_DESC',
  RepoImportsByTypeMinLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_MIN_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeMinLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_MIN_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeMinSettingsAsc = 'REPO_IMPORTS_BY_TYPE_MIN_SETTINGS_ASC',
  RepoImportsByTypeMinSettingsDesc = 'REPO_IMPORTS_BY_TYPE_MIN_SETTINGS_DESC',
  RepoImportsByTypeMinTypeAsc = 'REPO_IMPORTS_BY_TYPE_MIN_TYPE_ASC',
  RepoImportsByTypeMinTypeDesc = 'REPO_IMPORTS_BY_TYPE_MIN_TYPE_DESC',
  RepoImportsByTypeMinUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_MIN_UPDATED_AT_ASC',
  RepoImportsByTypeMinUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_MIN_UPDATED_AT_DESC',
  RepoImportsByTypeStddevPopulationCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_CREATED_AT_ASC',
  RepoImportsByTypeStddevPopulationCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_CREATED_AT_DESC',
  RepoImportsByTypeStddevPopulationIdAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_ID_ASC',
  RepoImportsByTypeStddevPopulationIdDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_ID_DESC',
  RepoImportsByTypeStddevPopulationImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeStddevPopulationImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeStddevPopulationLastImportAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_LAST_IMPORT_ASC',
  RepoImportsByTypeStddevPopulationLastImportDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_LAST_IMPORT_DESC',
  RepoImportsByTypeStddevPopulationLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeStddevPopulationLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeStddevPopulationSettingsAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_SETTINGS_ASC',
  RepoImportsByTypeStddevPopulationSettingsDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_SETTINGS_DESC',
  RepoImportsByTypeStddevPopulationTypeAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_TYPE_ASC',
  RepoImportsByTypeStddevPopulationTypeDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_TYPE_DESC',
  RepoImportsByTypeStddevPopulationUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_UPDATED_AT_ASC',
  RepoImportsByTypeStddevPopulationUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_POPULATION_UPDATED_AT_DESC',
  RepoImportsByTypeStddevSampleCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_CREATED_AT_ASC',
  RepoImportsByTypeStddevSampleCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_CREATED_AT_DESC',
  RepoImportsByTypeStddevSampleIdAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_ID_ASC',
  RepoImportsByTypeStddevSampleIdDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_ID_DESC',
  RepoImportsByTypeStddevSampleImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeStddevSampleImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeStddevSampleLastImportAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_LAST_IMPORT_ASC',
  RepoImportsByTypeStddevSampleLastImportDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_LAST_IMPORT_DESC',
  RepoImportsByTypeStddevSampleLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeStddevSampleLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeStddevSampleSettingsAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_SETTINGS_ASC',
  RepoImportsByTypeStddevSampleSettingsDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_SETTINGS_DESC',
  RepoImportsByTypeStddevSampleTypeAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_TYPE_ASC',
  RepoImportsByTypeStddevSampleTypeDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_TYPE_DESC',
  RepoImportsByTypeStddevSampleUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_UPDATED_AT_ASC',
  RepoImportsByTypeStddevSampleUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_STDDEV_SAMPLE_UPDATED_AT_DESC',
  RepoImportsByTypeSumCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_SUM_CREATED_AT_ASC',
  RepoImportsByTypeSumCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_SUM_CREATED_AT_DESC',
  RepoImportsByTypeSumIdAsc = 'REPO_IMPORTS_BY_TYPE_SUM_ID_ASC',
  RepoImportsByTypeSumIdDesc = 'REPO_IMPORTS_BY_TYPE_SUM_ID_DESC',
  RepoImportsByTypeSumImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_SUM_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeSumImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_SUM_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeSumLastImportAsc = 'REPO_IMPORTS_BY_TYPE_SUM_LAST_IMPORT_ASC',
  RepoImportsByTypeSumLastImportDesc = 'REPO_IMPORTS_BY_TYPE_SUM_LAST_IMPORT_DESC',
  RepoImportsByTypeSumLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_SUM_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeSumLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_SUM_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeSumSettingsAsc = 'REPO_IMPORTS_BY_TYPE_SUM_SETTINGS_ASC',
  RepoImportsByTypeSumSettingsDesc = 'REPO_IMPORTS_BY_TYPE_SUM_SETTINGS_DESC',
  RepoImportsByTypeSumTypeAsc = 'REPO_IMPORTS_BY_TYPE_SUM_TYPE_ASC',
  RepoImportsByTypeSumTypeDesc = 'REPO_IMPORTS_BY_TYPE_SUM_TYPE_DESC',
  RepoImportsByTypeSumUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_SUM_UPDATED_AT_ASC',
  RepoImportsByTypeSumUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_SUM_UPDATED_AT_DESC',
  RepoImportsByTypeVariancePopulationCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_CREATED_AT_ASC',
  RepoImportsByTypeVariancePopulationCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_CREATED_AT_DESC',
  RepoImportsByTypeVariancePopulationIdAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_ID_ASC',
  RepoImportsByTypeVariancePopulationIdDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_ID_DESC',
  RepoImportsByTypeVariancePopulationImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeVariancePopulationImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeVariancePopulationLastImportAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_LAST_IMPORT_ASC',
  RepoImportsByTypeVariancePopulationLastImportDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_LAST_IMPORT_DESC',
  RepoImportsByTypeVariancePopulationLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeVariancePopulationLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeVariancePopulationSettingsAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_SETTINGS_ASC',
  RepoImportsByTypeVariancePopulationSettingsDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_SETTINGS_DESC',
  RepoImportsByTypeVariancePopulationTypeAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_TYPE_ASC',
  RepoImportsByTypeVariancePopulationTypeDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_TYPE_DESC',
  RepoImportsByTypeVariancePopulationUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_UPDATED_AT_ASC',
  RepoImportsByTypeVariancePopulationUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_POPULATION_UPDATED_AT_DESC',
  RepoImportsByTypeVarianceSampleCreatedAtAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_CREATED_AT_ASC',
  RepoImportsByTypeVarianceSampleCreatedAtDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_CREATED_AT_DESC',
  RepoImportsByTypeVarianceSampleIdAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_ID_ASC',
  RepoImportsByTypeVarianceSampleIdDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_ID_DESC',
  RepoImportsByTypeVarianceSampleImportIntervalAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_IMPORT_INTERVAL_ASC',
  RepoImportsByTypeVarianceSampleImportIntervalDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_IMPORT_INTERVAL_DESC',
  RepoImportsByTypeVarianceSampleLastImportAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_LAST_IMPORT_ASC',
  RepoImportsByTypeVarianceSampleLastImportDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_LAST_IMPORT_DESC',
  RepoImportsByTypeVarianceSampleLastImportStartedAtAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_LAST_IMPORT_STARTED_AT_ASC',
  RepoImportsByTypeVarianceSampleLastImportStartedAtDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_LAST_IMPORT_STARTED_AT_DESC',
  RepoImportsByTypeVarianceSampleSettingsAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_SETTINGS_ASC',
  RepoImportsByTypeVarianceSampleSettingsDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_SETTINGS_DESC',
  RepoImportsByTypeVarianceSampleTypeAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_TYPE_ASC',
  RepoImportsByTypeVarianceSampleTypeDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_TYPE_DESC',
  RepoImportsByTypeVarianceSampleUpdatedAtAsc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  RepoImportsByTypeVarianceSampleUpdatedAtDesc = 'REPO_IMPORTS_BY_TYPE_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** A connection to a list of `RepoImport` values. */
export type RepoImportsConnection = {
  __typename?: 'RepoImportsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoImportAggregates>
  /** A list of edges which contains the `RepoImport` and cursor to aid in pagination. */
  edges: Array<RepoImportsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoImportAggregates>>
  /** A list of `RepoImport` objects. */
  nodes: Array<Maybe<RepoImport>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoImport` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoImport` values. */
export type RepoImportsConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoImportsGroupBy>
  having?: InputMaybe<RepoImportsHavingInput>
}

/** A `RepoImport` edge in the connection. */
export type RepoImportsEdge = {
  __typename?: 'RepoImportsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoImport` at the end of the edge. */
  node?: Maybe<RepoImport>
}

/** Grouping methods for `RepoImport` for usage during aggregation. */
export enum RepoImportsGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  ImportInterval = 'IMPORT_INTERVAL',
  LastImport = 'LAST_IMPORT',
  LastImportStartedAt = 'LAST_IMPORT_STARTED_AT',
  LastImportStartedAtTruncatedToDay = 'LAST_IMPORT_STARTED_AT_TRUNCATED_TO_DAY',
  LastImportStartedAtTruncatedToHour = 'LAST_IMPORT_STARTED_AT_TRUNCATED_TO_HOUR',
  LastImportTruncatedToDay = 'LAST_IMPORT_TRUNCATED_TO_DAY',
  LastImportTruncatedToHour = 'LAST_IMPORT_TRUNCATED_TO_HOUR',
  Settings = 'SETTINGS',
  Type = 'TYPE',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
}

export type RepoImportsHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoImportsHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `RepoImport` aggregates. */
export type RepoImportsHavingInput = {
  AND?: InputMaybe<Array<RepoImportsHavingInput>>
  OR?: InputMaybe<Array<RepoImportsHavingInput>>
  average?: InputMaybe<RepoImportsHavingAverageInput>
  distinctCount?: InputMaybe<RepoImportsHavingDistinctCountInput>
  max?: InputMaybe<RepoImportsHavingMaxInput>
  min?: InputMaybe<RepoImportsHavingMinInput>
  stddevPopulation?: InputMaybe<RepoImportsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<RepoImportsHavingStddevSampleInput>
  sum?: InputMaybe<RepoImportsHavingSumInput>
  variancePopulation?: InputMaybe<RepoImportsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<RepoImportsHavingVarianceSampleInput>
}

export type RepoImportsHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoImportsHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoImportsHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoImportsHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoImportsHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoImportsHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoImportsHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  lastImport?: InputMaybe<HavingDatetimeFilter>
  lastImportStartedAt?: InputMaybe<HavingDatetimeFilter>
  updatedAt?: InputMaybe<HavingDatetimeFilter>
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
  ReposByRepoImportIdAverageCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_CREATED_AT_ASC',
  ReposByRepoImportIdAverageCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_CREATED_AT_DESC',
  ReposByRepoImportIdAverageIdAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_ID_ASC',
  ReposByRepoImportIdAverageIdDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_ID_DESC',
  ReposByRepoImportIdAverageIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_IS_GITHUB_ASC',
  ReposByRepoImportIdAverageIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_IS_GITHUB_DESC',
  ReposByRepoImportIdAverageRefAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_REF_ASC',
  ReposByRepoImportIdAverageRefDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_REF_DESC',
  ReposByRepoImportIdAverageRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_REPO_ASC',
  ReposByRepoImportIdAverageRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_REPO_DESC',
  ReposByRepoImportIdAverageRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdAverageRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdAverageSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_SETTINGS_ASC',
  ReposByRepoImportIdAverageSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_SETTINGS_DESC',
  ReposByRepoImportIdAverageTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_TAGS_ASC',
  ReposByRepoImportIdAverageTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_AVERAGE_TAGS_DESC',
  ReposByRepoImportIdCountAsc = 'REPOS_BY_REPO_IMPORT_ID_COUNT_ASC',
  ReposByRepoImportIdCountDesc = 'REPOS_BY_REPO_IMPORT_ID_COUNT_DESC',
  ReposByRepoImportIdDistinctCountCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  ReposByRepoImportIdDistinctCountCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  ReposByRepoImportIdDistinctCountIdAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_ID_ASC',
  ReposByRepoImportIdDistinctCountIdDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_ID_DESC',
  ReposByRepoImportIdDistinctCountIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_IS_GITHUB_ASC',
  ReposByRepoImportIdDistinctCountIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_IS_GITHUB_DESC',
  ReposByRepoImportIdDistinctCountRefAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_REF_ASC',
  ReposByRepoImportIdDistinctCountRefDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_REF_DESC',
  ReposByRepoImportIdDistinctCountRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_REPO_ASC',
  ReposByRepoImportIdDistinctCountRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_REPO_DESC',
  ReposByRepoImportIdDistinctCountRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdDistinctCountRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdDistinctCountSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_SETTINGS_ASC',
  ReposByRepoImportIdDistinctCountSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_SETTINGS_DESC',
  ReposByRepoImportIdDistinctCountTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_TAGS_ASC',
  ReposByRepoImportIdDistinctCountTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_DISTINCT_COUNT_TAGS_DESC',
  ReposByRepoImportIdMaxCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_CREATED_AT_ASC',
  ReposByRepoImportIdMaxCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_CREATED_AT_DESC',
  ReposByRepoImportIdMaxIdAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_ID_ASC',
  ReposByRepoImportIdMaxIdDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_ID_DESC',
  ReposByRepoImportIdMaxIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_IS_GITHUB_ASC',
  ReposByRepoImportIdMaxIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_IS_GITHUB_DESC',
  ReposByRepoImportIdMaxRefAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_REF_ASC',
  ReposByRepoImportIdMaxRefDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_REF_DESC',
  ReposByRepoImportIdMaxRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_REPO_ASC',
  ReposByRepoImportIdMaxRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_REPO_DESC',
  ReposByRepoImportIdMaxRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdMaxRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdMaxSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_SETTINGS_ASC',
  ReposByRepoImportIdMaxSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_SETTINGS_DESC',
  ReposByRepoImportIdMaxTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_MAX_TAGS_ASC',
  ReposByRepoImportIdMaxTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_MAX_TAGS_DESC',
  ReposByRepoImportIdMinCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_CREATED_AT_ASC',
  ReposByRepoImportIdMinCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_CREATED_AT_DESC',
  ReposByRepoImportIdMinIdAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_ID_ASC',
  ReposByRepoImportIdMinIdDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_ID_DESC',
  ReposByRepoImportIdMinIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_IS_GITHUB_ASC',
  ReposByRepoImportIdMinIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_IS_GITHUB_DESC',
  ReposByRepoImportIdMinRefAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_REF_ASC',
  ReposByRepoImportIdMinRefDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_REF_DESC',
  ReposByRepoImportIdMinRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_REPO_ASC',
  ReposByRepoImportIdMinRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_REPO_DESC',
  ReposByRepoImportIdMinRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdMinRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdMinSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_SETTINGS_ASC',
  ReposByRepoImportIdMinSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_SETTINGS_DESC',
  ReposByRepoImportIdMinTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_MIN_TAGS_ASC',
  ReposByRepoImportIdMinTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_MIN_TAGS_DESC',
  ReposByRepoImportIdStddevPopulationCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  ReposByRepoImportIdStddevPopulationCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  ReposByRepoImportIdStddevPopulationIdAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_ID_ASC',
  ReposByRepoImportIdStddevPopulationIdDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_ID_DESC',
  ReposByRepoImportIdStddevPopulationIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_IS_GITHUB_ASC',
  ReposByRepoImportIdStddevPopulationIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_IS_GITHUB_DESC',
  ReposByRepoImportIdStddevPopulationRefAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_REF_ASC',
  ReposByRepoImportIdStddevPopulationRefDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_REF_DESC',
  ReposByRepoImportIdStddevPopulationRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_REPO_ASC',
  ReposByRepoImportIdStddevPopulationRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_REPO_DESC',
  ReposByRepoImportIdStddevPopulationRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdStddevPopulationRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdStddevPopulationSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_SETTINGS_ASC',
  ReposByRepoImportIdStddevPopulationSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_SETTINGS_DESC',
  ReposByRepoImportIdStddevPopulationTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_TAGS_ASC',
  ReposByRepoImportIdStddevPopulationTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_POPULATION_TAGS_DESC',
  ReposByRepoImportIdStddevSampleCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  ReposByRepoImportIdStddevSampleCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  ReposByRepoImportIdStddevSampleIdAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_ID_ASC',
  ReposByRepoImportIdStddevSampleIdDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_ID_DESC',
  ReposByRepoImportIdStddevSampleIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_IS_GITHUB_ASC',
  ReposByRepoImportIdStddevSampleIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_IS_GITHUB_DESC',
  ReposByRepoImportIdStddevSampleRefAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_REF_ASC',
  ReposByRepoImportIdStddevSampleRefDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_REF_DESC',
  ReposByRepoImportIdStddevSampleRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_REPO_ASC',
  ReposByRepoImportIdStddevSampleRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_REPO_DESC',
  ReposByRepoImportIdStddevSampleRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdStddevSampleRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdStddevSampleSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_SETTINGS_ASC',
  ReposByRepoImportIdStddevSampleSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_SETTINGS_DESC',
  ReposByRepoImportIdStddevSampleTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_TAGS_ASC',
  ReposByRepoImportIdStddevSampleTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_STDDEV_SAMPLE_TAGS_DESC',
  ReposByRepoImportIdSumCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_CREATED_AT_ASC',
  ReposByRepoImportIdSumCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_CREATED_AT_DESC',
  ReposByRepoImportIdSumIdAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_ID_ASC',
  ReposByRepoImportIdSumIdDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_ID_DESC',
  ReposByRepoImportIdSumIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_IS_GITHUB_ASC',
  ReposByRepoImportIdSumIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_IS_GITHUB_DESC',
  ReposByRepoImportIdSumRefAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_REF_ASC',
  ReposByRepoImportIdSumRefDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_REF_DESC',
  ReposByRepoImportIdSumRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_REPO_ASC',
  ReposByRepoImportIdSumRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_REPO_DESC',
  ReposByRepoImportIdSumRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdSumRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdSumSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_SETTINGS_ASC',
  ReposByRepoImportIdSumSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_SETTINGS_DESC',
  ReposByRepoImportIdSumTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_SUM_TAGS_ASC',
  ReposByRepoImportIdSumTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_SUM_TAGS_DESC',
  ReposByRepoImportIdVariancePopulationCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  ReposByRepoImportIdVariancePopulationCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  ReposByRepoImportIdVariancePopulationIdAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_ID_ASC',
  ReposByRepoImportIdVariancePopulationIdDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_ID_DESC',
  ReposByRepoImportIdVariancePopulationIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_IS_GITHUB_ASC',
  ReposByRepoImportIdVariancePopulationIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_IS_GITHUB_DESC',
  ReposByRepoImportIdVariancePopulationRefAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_REF_ASC',
  ReposByRepoImportIdVariancePopulationRefDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_REF_DESC',
  ReposByRepoImportIdVariancePopulationRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_REPO_ASC',
  ReposByRepoImportIdVariancePopulationRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_REPO_DESC',
  ReposByRepoImportIdVariancePopulationRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdVariancePopulationRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdVariancePopulationSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_SETTINGS_ASC',
  ReposByRepoImportIdVariancePopulationSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_SETTINGS_DESC',
  ReposByRepoImportIdVariancePopulationTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_TAGS_ASC',
  ReposByRepoImportIdVariancePopulationTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_POPULATION_TAGS_DESC',
  ReposByRepoImportIdVarianceSampleCreatedAtAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  ReposByRepoImportIdVarianceSampleCreatedAtDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  ReposByRepoImportIdVarianceSampleIdAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_ID_ASC',
  ReposByRepoImportIdVarianceSampleIdDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_ID_DESC',
  ReposByRepoImportIdVarianceSampleIsGithubAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_IS_GITHUB_ASC',
  ReposByRepoImportIdVarianceSampleIsGithubDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_IS_GITHUB_DESC',
  ReposByRepoImportIdVarianceSampleRefAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_REF_ASC',
  ReposByRepoImportIdVarianceSampleRefDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_REF_DESC',
  ReposByRepoImportIdVarianceSampleRepoAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_REPO_ASC',
  ReposByRepoImportIdVarianceSampleRepoDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_REPO_DESC',
  ReposByRepoImportIdVarianceSampleRepoImportIdAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_REPO_IMPORT_ID_ASC',
  ReposByRepoImportIdVarianceSampleRepoImportIdDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_REPO_IMPORT_ID_DESC',
  ReposByRepoImportIdVarianceSampleSettingsAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_SETTINGS_ASC',
  ReposByRepoImportIdVarianceSampleSettingsDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_SETTINGS_DESC',
  ReposByRepoImportIdVarianceSampleTagsAsc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_TAGS_ASC',
  ReposByRepoImportIdVarianceSampleTagsDesc = 'REPOS_BY_REPO_IMPORT_ID_VARIANCE_SAMPLE_TAGS_DESC',
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

export type RepoSyncAggregates = {
  __typename?: 'RepoSyncAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoSyncDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type RepoSyncDistinctCountAggregates = {
  __typename?: 'RepoSyncDistinctCountAggregates'
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoId across the matching connection */
  repoId?: Maybe<Scalars['BigInt']>
  /** Distinct count of settings across the matching connection */
  settings?: Maybe<Scalars['BigInt']>
  /** Distinct count of syncType across the matching connection */
  syncType?: Maybe<Scalars['BigInt']>
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

export type RepoSyncLogAggregates = {
  __typename?: 'RepoSyncLogAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<RepoSyncLogAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoSyncLogDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<RepoSyncLogMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<RepoSyncLogMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<RepoSyncLogStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<RepoSyncLogStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<RepoSyncLogSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<RepoSyncLogVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<RepoSyncLogVarianceSampleAggregates>
}

export type RepoSyncLogAverageAggregates = {
  __typename?: 'RepoSyncLogAverageAggregates'
  /** Mean average of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
  /** Mean average of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigFloat']>
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

export type RepoSyncLogDistinctCountAggregates = {
  __typename?: 'RepoSyncLogDistinctCountAggregates'
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Distinct count of logType across the matching connection */
  logType?: Maybe<Scalars['BigInt']>
  /** Distinct count of message across the matching connection */
  message?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigInt']>
}

/** An input for mutations affecting `RepoSyncLog` */
export type RepoSyncLogInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['BigInt']>
  logType: Scalars['String']
  message: Scalars['String']
  repoSyncQueueId: Scalars['BigInt']
}

export type RepoSyncLogMaxAggregates = {
  __typename?: 'RepoSyncLogMaxAggregates'
  /** Maximum of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Maximum of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigInt']>
}

export type RepoSyncLogMinAggregates = {
  __typename?: 'RepoSyncLogMinAggregates'
  /** Minimum of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Minimum of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigInt']>
}

/** Represents an update to a `RepoSyncLog`. Fields that are set will be updated. */
export type RepoSyncLogPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>
  id?: InputMaybe<Scalars['BigInt']>
  logType?: InputMaybe<Scalars['String']>
  message?: InputMaybe<Scalars['String']>
  repoSyncQueueId?: InputMaybe<Scalars['BigInt']>
}

export type RepoSyncLogStddevPopulationAggregates = {
  __typename?: 'RepoSyncLogStddevPopulationAggregates'
  /** Population standard deviation of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
  /** Population standard deviation of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigFloat']>
}

export type RepoSyncLogStddevSampleAggregates = {
  __typename?: 'RepoSyncLogStddevSampleAggregates'
  /** Sample standard deviation of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
  /** Sample standard deviation of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigFloat']>
}

export type RepoSyncLogSumAggregates = {
  __typename?: 'RepoSyncLogSumAggregates'
  /** Sum of id across the matching connection */
  id: Scalars['BigFloat']
  /** Sum of repoSyncQueueId across the matching connection */
  repoSyncQueueId: Scalars['BigFloat']
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

export type RepoSyncLogTypeAggregates = {
  __typename?: 'RepoSyncLogTypeAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoSyncLogTypeDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type RepoSyncLogTypeDistinctCountAggregates = {
  __typename?: 'RepoSyncLogTypeDistinctCountAggregates'
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoSyncLogTypeAggregates>
  /** A list of edges which contains the `RepoSyncLogType` and cursor to aid in pagination. */
  edges: Array<RepoSyncLogTypesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoSyncLogTypeAggregates>>
  /** A list of `RepoSyncLogType` objects. */
  nodes: Array<Maybe<RepoSyncLogType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncLogType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoSyncLogType` values. */
export type RepoSyncLogTypesConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoSyncLogTypesGroupBy>
  having?: InputMaybe<RepoSyncLogTypesHavingInput>
}

/** A `RepoSyncLogType` edge in the connection. */
export type RepoSyncLogTypesEdge = {
  __typename?: 'RepoSyncLogTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncLogType` at the end of the edge. */
  node?: Maybe<RepoSyncLogType>
}

/** Grouping methods for `RepoSyncLogType` for usage during aggregation. */
export enum RepoSyncLogTypesGroupBy {
  Description = 'DESCRIPTION',
}

/** Conditions for `RepoSyncLogType` aggregates. */
export type RepoSyncLogTypesHavingInput = {
  AND?: InputMaybe<Array<RepoSyncLogTypesHavingInput>>
  OR?: InputMaybe<Array<RepoSyncLogTypesHavingInput>>
}

/** Methods to use when ordering `RepoSyncLogType`. */
export enum RepoSyncLogTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoSyncLogsByLogTypeAverageCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeAverageCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeAverageIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_ID_ASC',
  RepoSyncLogsByLogTypeAverageIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_ID_DESC',
  RepoSyncLogsByLogTypeAverageLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeAverageLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeAverageMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_MESSAGE_ASC',
  RepoSyncLogsByLogTypeAverageMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_MESSAGE_DESC',
  RepoSyncLogsByLogTypeAverageRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeAverageRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_AVERAGE_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeCountAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_COUNT_ASC',
  RepoSyncLogsByLogTypeCountDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_COUNT_DESC',
  RepoSyncLogsByLogTypeDistinctCountCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeDistinctCountCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeDistinctCountIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_ID_ASC',
  RepoSyncLogsByLogTypeDistinctCountIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_ID_DESC',
  RepoSyncLogsByLogTypeDistinctCountLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeDistinctCountLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeDistinctCountMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_MESSAGE_ASC',
  RepoSyncLogsByLogTypeDistinctCountMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_MESSAGE_DESC',
  RepoSyncLogsByLogTypeDistinctCountRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeDistinctCountRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_DISTINCT_COUNT_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeMaxCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeMaxCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeMaxIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_ID_ASC',
  RepoSyncLogsByLogTypeMaxIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_ID_DESC',
  RepoSyncLogsByLogTypeMaxLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeMaxLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeMaxMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_MESSAGE_ASC',
  RepoSyncLogsByLogTypeMaxMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_MESSAGE_DESC',
  RepoSyncLogsByLogTypeMaxRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeMaxRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MAX_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeMinCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeMinCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeMinIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_ID_ASC',
  RepoSyncLogsByLogTypeMinIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_ID_DESC',
  RepoSyncLogsByLogTypeMinLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeMinLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeMinMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_MESSAGE_ASC',
  RepoSyncLogsByLogTypeMinMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_MESSAGE_DESC',
  RepoSyncLogsByLogTypeMinRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeMinRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_MIN_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeStddevPopulationCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeStddevPopulationCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeStddevPopulationIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_ID_ASC',
  RepoSyncLogsByLogTypeStddevPopulationIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_ID_DESC',
  RepoSyncLogsByLogTypeStddevPopulationLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeStddevPopulationLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeStddevPopulationMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_MESSAGE_ASC',
  RepoSyncLogsByLogTypeStddevPopulationMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_MESSAGE_DESC',
  RepoSyncLogsByLogTypeStddevPopulationRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeStddevPopulationRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_POPULATION_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeStddevSampleCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeStddevSampleCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeStddevSampleIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_ID_ASC',
  RepoSyncLogsByLogTypeStddevSampleIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_ID_DESC',
  RepoSyncLogsByLogTypeStddevSampleLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeStddevSampleLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeStddevSampleMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_MESSAGE_ASC',
  RepoSyncLogsByLogTypeStddevSampleMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_MESSAGE_DESC',
  RepoSyncLogsByLogTypeStddevSampleRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeStddevSampleRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_STDDEV_SAMPLE_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeSumCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeSumCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeSumIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_ID_ASC',
  RepoSyncLogsByLogTypeSumIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_ID_DESC',
  RepoSyncLogsByLogTypeSumLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeSumLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeSumMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_MESSAGE_ASC',
  RepoSyncLogsByLogTypeSumMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_MESSAGE_DESC',
  RepoSyncLogsByLogTypeSumRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeSumRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_SUM_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeVariancePopulationCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeVariancePopulationCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeVariancePopulationIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_ID_ASC',
  RepoSyncLogsByLogTypeVariancePopulationIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_ID_DESC',
  RepoSyncLogsByLogTypeVariancePopulationLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeVariancePopulationLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeVariancePopulationMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_MESSAGE_ASC',
  RepoSyncLogsByLogTypeVariancePopulationMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_MESSAGE_DESC',
  RepoSyncLogsByLogTypeVariancePopulationRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeVariancePopulationRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_POPULATION_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByLogTypeVarianceSampleCreatedAtAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_CREATED_AT_ASC',
  RepoSyncLogsByLogTypeVarianceSampleCreatedAtDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_CREATED_AT_DESC',
  RepoSyncLogsByLogTypeVarianceSampleIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_ID_ASC',
  RepoSyncLogsByLogTypeVarianceSampleIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_ID_DESC',
  RepoSyncLogsByLogTypeVarianceSampleLogTypeAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_LOG_TYPE_ASC',
  RepoSyncLogsByLogTypeVarianceSampleLogTypeDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_LOG_TYPE_DESC',
  RepoSyncLogsByLogTypeVarianceSampleMessageAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_MESSAGE_ASC',
  RepoSyncLogsByLogTypeVarianceSampleMessageDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_MESSAGE_DESC',
  RepoSyncLogsByLogTypeVarianceSampleRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByLogTypeVarianceSampleRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_LOG_TYPE_VARIANCE_SAMPLE_REPO_SYNC_QUEUE_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

export type RepoSyncLogVariancePopulationAggregates = {
  __typename?: 'RepoSyncLogVariancePopulationAggregates'
  /** Population variance of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
  /** Population variance of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigFloat']>
}

export type RepoSyncLogVarianceSampleAggregates = {
  __typename?: 'RepoSyncLogVarianceSampleAggregates'
  /** Sample variance of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
  /** Sample variance of repoSyncQueueId across the matching connection */
  repoSyncQueueId?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `RepoSyncLog` values. */
export type RepoSyncLogsConnection = {
  __typename?: 'RepoSyncLogsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoSyncLogAggregates>
  /** A list of edges which contains the `RepoSyncLog` and cursor to aid in pagination. */
  edges: Array<RepoSyncLogsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoSyncLogAggregates>>
  /** A list of `RepoSyncLog` objects. */
  nodes: Array<Maybe<RepoSyncLog>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncLog` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoSyncLog` values. */
export type RepoSyncLogsConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoSyncLogsGroupBy>
  having?: InputMaybe<RepoSyncLogsHavingInput>
}

/** A `RepoSyncLog` edge in the connection. */
export type RepoSyncLogsEdge = {
  __typename?: 'RepoSyncLogsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncLog` at the end of the edge. */
  node?: Maybe<RepoSyncLog>
}

/** Grouping methods for `RepoSyncLog` for usage during aggregation. */
export enum RepoSyncLogsGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  LogType = 'LOG_TYPE',
  Message = 'MESSAGE',
  RepoSyncQueueId = 'REPO_SYNC_QUEUE_ID',
}

export type RepoSyncLogsHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

export type RepoSyncLogsHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

/** Conditions for `RepoSyncLog` aggregates. */
export type RepoSyncLogsHavingInput = {
  AND?: InputMaybe<Array<RepoSyncLogsHavingInput>>
  OR?: InputMaybe<Array<RepoSyncLogsHavingInput>>
  average?: InputMaybe<RepoSyncLogsHavingAverageInput>
  distinctCount?: InputMaybe<RepoSyncLogsHavingDistinctCountInput>
  max?: InputMaybe<RepoSyncLogsHavingMaxInput>
  min?: InputMaybe<RepoSyncLogsHavingMinInput>
  stddevPopulation?: InputMaybe<RepoSyncLogsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<RepoSyncLogsHavingStddevSampleInput>
  sum?: InputMaybe<RepoSyncLogsHavingSumInput>
  variancePopulation?: InputMaybe<RepoSyncLogsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<RepoSyncLogsHavingVarianceSampleInput>
}

export type RepoSyncLogsHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

export type RepoSyncLogsHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

export type RepoSyncLogsHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

export type RepoSyncLogsHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

export type RepoSyncLogsHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

export type RepoSyncLogsHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
}

export type RepoSyncLogsHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  repoSyncQueueId?: InputMaybe<HavingBigintFilter>
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

export type RepoSyncQueueAggregates = {
  __typename?: 'RepoSyncQueueAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<RepoSyncQueueAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoSyncQueueDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<RepoSyncQueueMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<RepoSyncQueueMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<RepoSyncQueueStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<RepoSyncQueueStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<RepoSyncQueueSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<RepoSyncQueueVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<RepoSyncQueueVarianceSampleAggregates>
}

export type RepoSyncQueueAverageAggregates = {
  __typename?: 'RepoSyncQueueAverageAggregates'
  /** Mean average of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
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

export type RepoSyncQueueDistinctCountAggregates = {
  __typename?: 'RepoSyncQueueDistinctCountAggregates'
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of doneAt across the matching connection */
  doneAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
  /** Distinct count of lastKeepAlive across the matching connection */
  lastKeepAlive?: Maybe<Scalars['BigInt']>
  /** Distinct count of repoSyncId across the matching connection */
  repoSyncId?: Maybe<Scalars['BigInt']>
  /** Distinct count of startedAt across the matching connection */
  startedAt?: Maybe<Scalars['BigInt']>
  /** Distinct count of status across the matching connection */
  status?: Maybe<Scalars['BigInt']>
}

/** Grouping methods for `RepoSyncQueue` for usage during aggregation. */
export enum RepoSyncQueueGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  DoneAt = 'DONE_AT',
  DoneAtTruncatedToDay = 'DONE_AT_TRUNCATED_TO_DAY',
  DoneAtTruncatedToHour = 'DONE_AT_TRUNCATED_TO_HOUR',
  LastKeepAlive = 'LAST_KEEP_ALIVE',
  LastKeepAliveTruncatedToDay = 'LAST_KEEP_ALIVE_TRUNCATED_TO_DAY',
  LastKeepAliveTruncatedToHour = 'LAST_KEEP_ALIVE_TRUNCATED_TO_HOUR',
  RepoSyncId = 'REPO_SYNC_ID',
  StartedAt = 'STARTED_AT',
  StartedAtTruncatedToDay = 'STARTED_AT_TRUNCATED_TO_DAY',
  StartedAtTruncatedToHour = 'STARTED_AT_TRUNCATED_TO_HOUR',
  Status = 'STATUS',
}

export type RepoSyncQueueHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoSyncQueueHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `RepoSyncQueue` aggregates. */
export type RepoSyncQueueHavingInput = {
  AND?: InputMaybe<Array<RepoSyncQueueHavingInput>>
  OR?: InputMaybe<Array<RepoSyncQueueHavingInput>>
  average?: InputMaybe<RepoSyncQueueHavingAverageInput>
  distinctCount?: InputMaybe<RepoSyncQueueHavingDistinctCountInput>
  max?: InputMaybe<RepoSyncQueueHavingMaxInput>
  min?: InputMaybe<RepoSyncQueueHavingMinInput>
  stddevPopulation?: InputMaybe<RepoSyncQueueHavingStddevPopulationInput>
  stddevSample?: InputMaybe<RepoSyncQueueHavingStddevSampleInput>
  sum?: InputMaybe<RepoSyncQueueHavingSumInput>
  variancePopulation?: InputMaybe<RepoSyncQueueHavingVariancePopulationInput>
  varianceSample?: InputMaybe<RepoSyncQueueHavingVarianceSampleInput>
}

export type RepoSyncQueueHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoSyncQueueHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoSyncQueueHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoSyncQueueHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoSyncQueueHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoSyncQueueHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
}

export type RepoSyncQueueHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
  doneAt?: InputMaybe<HavingDatetimeFilter>
  id?: InputMaybe<HavingBigintFilter>
  lastKeepAlive?: InputMaybe<HavingDatetimeFilter>
  startedAt?: InputMaybe<HavingDatetimeFilter>
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

export type RepoSyncQueueMaxAggregates = {
  __typename?: 'RepoSyncQueueMaxAggregates'
  /** Maximum of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
}

export type RepoSyncQueueMinAggregates = {
  __typename?: 'RepoSyncQueueMinAggregates'
  /** Minimum of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>
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

export type RepoSyncQueueStatusTypeAggregates = {
  __typename?: 'RepoSyncQueueStatusTypeAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoSyncQueueStatusTypeDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type RepoSyncQueueStatusTypeDistinctCountAggregates = {
  __typename?: 'RepoSyncQueueStatusTypeDistinctCountAggregates'
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoSyncQueueStatusTypeAggregates>
  /** A list of edges which contains the `RepoSyncQueueStatusType` and cursor to aid in pagination. */
  edges: Array<RepoSyncQueueStatusTypesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoSyncQueueStatusTypeAggregates>>
  /** A list of `RepoSyncQueueStatusType` objects. */
  nodes: Array<Maybe<RepoSyncQueueStatusType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncQueueStatusType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoSyncQueueStatusType` values. */
export type RepoSyncQueueStatusTypesConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoSyncQueueStatusTypesGroupBy>
  having?: InputMaybe<RepoSyncQueueStatusTypesHavingInput>
}

/** A `RepoSyncQueueStatusType` edge in the connection. */
export type RepoSyncQueueStatusTypesEdge = {
  __typename?: 'RepoSyncQueueStatusTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncQueueStatusType` at the end of the edge. */
  node?: Maybe<RepoSyncQueueStatusType>
}

/** Grouping methods for `RepoSyncQueueStatusType` for usage during aggregation. */
export enum RepoSyncQueueStatusTypesGroupBy {
  Description = 'DESCRIPTION',
}

/** Conditions for `RepoSyncQueueStatusType` aggregates. */
export type RepoSyncQueueStatusTypesHavingInput = {
  AND?: InputMaybe<Array<RepoSyncQueueStatusTypesHavingInput>>
  OR?: InputMaybe<Array<RepoSyncQueueStatusTypesHavingInput>>
}

/** Methods to use when ordering `RepoSyncQueueStatusType`. */
export enum RepoSyncQueueStatusTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoSyncQueuesByStatusAverageCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_CREATED_AT_ASC',
  RepoSyncQueuesByStatusAverageCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_CREATED_AT_DESC',
  RepoSyncQueuesByStatusAverageDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_DONE_AT_ASC',
  RepoSyncQueuesByStatusAverageDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_DONE_AT_DESC',
  RepoSyncQueuesByStatusAverageIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_ID_ASC',
  RepoSyncQueuesByStatusAverageIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_ID_DESC',
  RepoSyncQueuesByStatusAverageLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusAverageLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusAverageRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusAverageRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusAverageStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_STARTED_AT_ASC',
  RepoSyncQueuesByStatusAverageStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_STARTED_AT_DESC',
  RepoSyncQueuesByStatusAverageStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_STATUS_ASC',
  RepoSyncQueuesByStatusAverageStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_AVERAGE_STATUS_DESC',
  RepoSyncQueuesByStatusCountAsc = 'REPO_SYNC_QUEUES_BY_STATUS_COUNT_ASC',
  RepoSyncQueuesByStatusCountDesc = 'REPO_SYNC_QUEUES_BY_STATUS_COUNT_DESC',
  RepoSyncQueuesByStatusDistinctCountCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_CREATED_AT_ASC',
  RepoSyncQueuesByStatusDistinctCountCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_CREATED_AT_DESC',
  RepoSyncQueuesByStatusDistinctCountDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_DONE_AT_ASC',
  RepoSyncQueuesByStatusDistinctCountDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_DONE_AT_DESC',
  RepoSyncQueuesByStatusDistinctCountIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_ID_ASC',
  RepoSyncQueuesByStatusDistinctCountIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_ID_DESC',
  RepoSyncQueuesByStatusDistinctCountLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusDistinctCountLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusDistinctCountRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusDistinctCountRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusDistinctCountStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_STARTED_AT_ASC',
  RepoSyncQueuesByStatusDistinctCountStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_STARTED_AT_DESC',
  RepoSyncQueuesByStatusDistinctCountStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_STATUS_ASC',
  RepoSyncQueuesByStatusDistinctCountStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_DISTINCT_COUNT_STATUS_DESC',
  RepoSyncQueuesByStatusMaxCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_CREATED_AT_ASC',
  RepoSyncQueuesByStatusMaxCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_CREATED_AT_DESC',
  RepoSyncQueuesByStatusMaxDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_DONE_AT_ASC',
  RepoSyncQueuesByStatusMaxDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_DONE_AT_DESC',
  RepoSyncQueuesByStatusMaxIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_ID_ASC',
  RepoSyncQueuesByStatusMaxIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_ID_DESC',
  RepoSyncQueuesByStatusMaxLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusMaxLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusMaxRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusMaxRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusMaxStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_STARTED_AT_ASC',
  RepoSyncQueuesByStatusMaxStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_STARTED_AT_DESC',
  RepoSyncQueuesByStatusMaxStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_STATUS_ASC',
  RepoSyncQueuesByStatusMaxStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MAX_STATUS_DESC',
  RepoSyncQueuesByStatusMinCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_CREATED_AT_ASC',
  RepoSyncQueuesByStatusMinCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_CREATED_AT_DESC',
  RepoSyncQueuesByStatusMinDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_DONE_AT_ASC',
  RepoSyncQueuesByStatusMinDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_DONE_AT_DESC',
  RepoSyncQueuesByStatusMinIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_ID_ASC',
  RepoSyncQueuesByStatusMinIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_ID_DESC',
  RepoSyncQueuesByStatusMinLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusMinLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusMinRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusMinRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusMinStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_STARTED_AT_ASC',
  RepoSyncQueuesByStatusMinStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_STARTED_AT_DESC',
  RepoSyncQueuesByStatusMinStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_STATUS_ASC',
  RepoSyncQueuesByStatusMinStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_MIN_STATUS_DESC',
  RepoSyncQueuesByStatusStddevPopulationCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_CREATED_AT_ASC',
  RepoSyncQueuesByStatusStddevPopulationCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_CREATED_AT_DESC',
  RepoSyncQueuesByStatusStddevPopulationDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_DONE_AT_ASC',
  RepoSyncQueuesByStatusStddevPopulationDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_DONE_AT_DESC',
  RepoSyncQueuesByStatusStddevPopulationIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_ID_ASC',
  RepoSyncQueuesByStatusStddevPopulationIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_ID_DESC',
  RepoSyncQueuesByStatusStddevPopulationLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusStddevPopulationLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusStddevPopulationRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusStddevPopulationRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusStddevPopulationStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_STARTED_AT_ASC',
  RepoSyncQueuesByStatusStddevPopulationStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_STARTED_AT_DESC',
  RepoSyncQueuesByStatusStddevPopulationStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_STATUS_ASC',
  RepoSyncQueuesByStatusStddevPopulationStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_POPULATION_STATUS_DESC',
  RepoSyncQueuesByStatusStddevSampleCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_CREATED_AT_ASC',
  RepoSyncQueuesByStatusStddevSampleCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_CREATED_AT_DESC',
  RepoSyncQueuesByStatusStddevSampleDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_DONE_AT_ASC',
  RepoSyncQueuesByStatusStddevSampleDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_DONE_AT_DESC',
  RepoSyncQueuesByStatusStddevSampleIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_ID_ASC',
  RepoSyncQueuesByStatusStddevSampleIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_ID_DESC',
  RepoSyncQueuesByStatusStddevSampleLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusStddevSampleLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusStddevSampleRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusStddevSampleRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusStddevSampleStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_STARTED_AT_ASC',
  RepoSyncQueuesByStatusStddevSampleStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_STARTED_AT_DESC',
  RepoSyncQueuesByStatusStddevSampleStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_STATUS_ASC',
  RepoSyncQueuesByStatusStddevSampleStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_STDDEV_SAMPLE_STATUS_DESC',
  RepoSyncQueuesByStatusSumCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_CREATED_AT_ASC',
  RepoSyncQueuesByStatusSumCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_CREATED_AT_DESC',
  RepoSyncQueuesByStatusSumDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_DONE_AT_ASC',
  RepoSyncQueuesByStatusSumDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_DONE_AT_DESC',
  RepoSyncQueuesByStatusSumIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_ID_ASC',
  RepoSyncQueuesByStatusSumIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_ID_DESC',
  RepoSyncQueuesByStatusSumLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusSumLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusSumRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusSumRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusSumStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_STARTED_AT_ASC',
  RepoSyncQueuesByStatusSumStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_STARTED_AT_DESC',
  RepoSyncQueuesByStatusSumStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_STATUS_ASC',
  RepoSyncQueuesByStatusSumStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_SUM_STATUS_DESC',
  RepoSyncQueuesByStatusVariancePopulationCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_CREATED_AT_ASC',
  RepoSyncQueuesByStatusVariancePopulationCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_CREATED_AT_DESC',
  RepoSyncQueuesByStatusVariancePopulationDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_DONE_AT_ASC',
  RepoSyncQueuesByStatusVariancePopulationDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_DONE_AT_DESC',
  RepoSyncQueuesByStatusVariancePopulationIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_ID_ASC',
  RepoSyncQueuesByStatusVariancePopulationIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_ID_DESC',
  RepoSyncQueuesByStatusVariancePopulationLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusVariancePopulationLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusVariancePopulationRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusVariancePopulationRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusVariancePopulationStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_STARTED_AT_ASC',
  RepoSyncQueuesByStatusVariancePopulationStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_STARTED_AT_DESC',
  RepoSyncQueuesByStatusVariancePopulationStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_STATUS_ASC',
  RepoSyncQueuesByStatusVariancePopulationStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_POPULATION_STATUS_DESC',
  RepoSyncQueuesByStatusVarianceSampleCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_CREATED_AT_ASC',
  RepoSyncQueuesByStatusVarianceSampleCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_CREATED_AT_DESC',
  RepoSyncQueuesByStatusVarianceSampleDoneAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_DONE_AT_ASC',
  RepoSyncQueuesByStatusVarianceSampleDoneAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_DONE_AT_DESC',
  RepoSyncQueuesByStatusVarianceSampleIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_ID_ASC',
  RepoSyncQueuesByStatusVarianceSampleIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_ID_DESC',
  RepoSyncQueuesByStatusVarianceSampleLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByStatusVarianceSampleLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByStatusVarianceSampleRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByStatusVarianceSampleRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByStatusVarianceSampleStartedAtAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_STARTED_AT_ASC',
  RepoSyncQueuesByStatusVarianceSampleStartedAtDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_STARTED_AT_DESC',
  RepoSyncQueuesByStatusVarianceSampleStatusAsc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_STATUS_ASC',
  RepoSyncQueuesByStatusVarianceSampleStatusDesc = 'REPO_SYNC_QUEUES_BY_STATUS_VARIANCE_SAMPLE_STATUS_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

export type RepoSyncQueueStddevPopulationAggregates = {
  __typename?: 'RepoSyncQueueStddevPopulationAggregates'
  /** Population standard deviation of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

export type RepoSyncQueueStddevSampleAggregates = {
  __typename?: 'RepoSyncQueueStddevSampleAggregates'
  /** Sample standard deviation of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

export type RepoSyncQueueSumAggregates = {
  __typename?: 'RepoSyncQueueSumAggregates'
  /** Sum of id across the matching connection */
  id: Scalars['BigFloat']
}

export type RepoSyncQueueVariancePopulationAggregates = {
  __typename?: 'RepoSyncQueueVariancePopulationAggregates'
  /** Population variance of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

export type RepoSyncQueueVarianceSampleAggregates = {
  __typename?: 'RepoSyncQueueVarianceSampleAggregates'
  /** Sample variance of id across the matching connection */
  id?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `RepoSyncQueue` values. */
export type RepoSyncQueuesConnection = {
  __typename?: 'RepoSyncQueuesConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoSyncQueueAggregates>
  /** A list of edges which contains the `RepoSyncQueue` and cursor to aid in pagination. */
  edges: Array<RepoSyncQueuesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoSyncQueueAggregates>>
  /** A list of `RepoSyncQueue` objects. */
  nodes: Array<Maybe<RepoSyncQueue>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncQueue` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoSyncQueue` values. */
export type RepoSyncQueuesConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoSyncQueueGroupBy>
  having?: InputMaybe<RepoSyncQueueHavingInput>
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
  RepoSyncLogsByRepoSyncQueueIdAverageCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdAverageCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdAverageIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdAverageIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdAverageLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdAverageLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdAverageMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdAverageMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdAverageRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdAverageRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_AVERAGE_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdCountAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_COUNT_ASC',
  RepoSyncLogsByRepoSyncQueueIdCountDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_COUNT_DESC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdDistinctCountRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_DISTINCT_COUNT_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdMaxCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdMaxCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdMaxIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdMaxIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdMaxLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdMaxLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdMaxMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdMaxMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdMaxRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdMaxRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MAX_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdMinCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdMinCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdMinIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdMinIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdMinLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdMinLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdMinMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdMinMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdMinRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdMinRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_MIN_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevPopulationRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_POPULATION_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdStddevSampleRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_STDDEV_SAMPLE_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdSumCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdSumCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdSumIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdSumIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdSumLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdSumLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdSumMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdSumMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdSumRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdSumRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_SUM_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdVariancePopulationRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_POPULATION_REPO_SYNC_QUEUE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleCreatedAtAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleCreatedAtDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_ID_DESC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleLogTypeAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_LOG_TYPE_ASC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleLogTypeDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_LOG_TYPE_DESC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleMessageAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_MESSAGE_ASC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleMessageDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_MESSAGE_DESC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleRepoSyncQueueIdAsc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_REPO_SYNC_QUEUE_ID_ASC',
  RepoSyncLogsByRepoSyncQueueIdVarianceSampleRepoSyncQueueIdDesc = 'REPO_SYNC_LOGS_BY_REPO_SYNC_QUEUE_ID_VARIANCE_SAMPLE_REPO_SYNC_QUEUE_ID_DESC',
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

export type RepoSyncTypeAggregates = {
  __typename?: 'RepoSyncTypeAggregates'
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<RepoSyncTypeDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
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

export type RepoSyncTypeDistinctCountAggregates = {
  __typename?: 'RepoSyncTypeDistinctCountAggregates'
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>
  /** Distinct count of type across the matching connection */
  type?: Maybe<Scalars['BigInt']>
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
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoSyncTypeAggregates>
  /** A list of edges which contains the `RepoSyncType` and cursor to aid in pagination. */
  edges: Array<RepoSyncTypesEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoSyncTypeAggregates>>
  /** A list of `RepoSyncType` objects. */
  nodes: Array<Maybe<RepoSyncType>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSyncType` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoSyncType` values. */
export type RepoSyncTypesConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoSyncTypesGroupBy>
  having?: InputMaybe<RepoSyncTypesHavingInput>
}

/** A `RepoSyncType` edge in the connection. */
export type RepoSyncTypesEdge = {
  __typename?: 'RepoSyncTypesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSyncType` at the end of the edge. */
  node?: Maybe<RepoSyncType>
}

/** Grouping methods for `RepoSyncType` for usage during aggregation. */
export enum RepoSyncTypesGroupBy {
  Description = 'DESCRIPTION',
}

/** Conditions for `RepoSyncType` aggregates. */
export type RepoSyncTypesHavingInput = {
  AND?: InputMaybe<Array<RepoSyncTypesHavingInput>>
  OR?: InputMaybe<Array<RepoSyncTypesHavingInput>>
}

/** Methods to use when ordering `RepoSyncType`. */
export enum RepoSyncTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoSyncsBySyncTypeAverageIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_ID_ASC',
  RepoSyncsBySyncTypeAverageIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_ID_DESC',
  RepoSyncsBySyncTypeAverageRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_REPO_ID_ASC',
  RepoSyncsBySyncTypeAverageRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_REPO_ID_DESC',
  RepoSyncsBySyncTypeAverageSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_SETTINGS_ASC',
  RepoSyncsBySyncTypeAverageSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_SETTINGS_DESC',
  RepoSyncsBySyncTypeAverageSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeAverageSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_AVERAGE_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeCountAsc = 'REPO_SYNCS_BY_SYNC_TYPE_COUNT_ASC',
  RepoSyncsBySyncTypeCountDesc = 'REPO_SYNCS_BY_SYNC_TYPE_COUNT_DESC',
  RepoSyncsBySyncTypeDistinctCountIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_ID_ASC',
  RepoSyncsBySyncTypeDistinctCountIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_ID_DESC',
  RepoSyncsBySyncTypeDistinctCountRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_REPO_ID_ASC',
  RepoSyncsBySyncTypeDistinctCountRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_REPO_ID_DESC',
  RepoSyncsBySyncTypeDistinctCountSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_SETTINGS_ASC',
  RepoSyncsBySyncTypeDistinctCountSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_SETTINGS_DESC',
  RepoSyncsBySyncTypeDistinctCountSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeDistinctCountSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_DISTINCT_COUNT_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeMaxIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_ID_ASC',
  RepoSyncsBySyncTypeMaxIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_ID_DESC',
  RepoSyncsBySyncTypeMaxRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_REPO_ID_ASC',
  RepoSyncsBySyncTypeMaxRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_REPO_ID_DESC',
  RepoSyncsBySyncTypeMaxSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_SETTINGS_ASC',
  RepoSyncsBySyncTypeMaxSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_SETTINGS_DESC',
  RepoSyncsBySyncTypeMaxSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeMaxSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MAX_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeMinIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_ID_ASC',
  RepoSyncsBySyncTypeMinIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_ID_DESC',
  RepoSyncsBySyncTypeMinRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_REPO_ID_ASC',
  RepoSyncsBySyncTypeMinRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_REPO_ID_DESC',
  RepoSyncsBySyncTypeMinSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_SETTINGS_ASC',
  RepoSyncsBySyncTypeMinSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_SETTINGS_DESC',
  RepoSyncsBySyncTypeMinSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeMinSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_MIN_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeStddevPopulationIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_ID_ASC',
  RepoSyncsBySyncTypeStddevPopulationIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_ID_DESC',
  RepoSyncsBySyncTypeStddevPopulationRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_REPO_ID_ASC',
  RepoSyncsBySyncTypeStddevPopulationRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_REPO_ID_DESC',
  RepoSyncsBySyncTypeStddevPopulationSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_SETTINGS_ASC',
  RepoSyncsBySyncTypeStddevPopulationSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_SETTINGS_DESC',
  RepoSyncsBySyncTypeStddevPopulationSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeStddevPopulationSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_POPULATION_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeStddevSampleIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_ID_ASC',
  RepoSyncsBySyncTypeStddevSampleIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_ID_DESC',
  RepoSyncsBySyncTypeStddevSampleRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_REPO_ID_ASC',
  RepoSyncsBySyncTypeStddevSampleRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_REPO_ID_DESC',
  RepoSyncsBySyncTypeStddevSampleSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_SETTINGS_ASC',
  RepoSyncsBySyncTypeStddevSampleSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_SETTINGS_DESC',
  RepoSyncsBySyncTypeStddevSampleSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeStddevSampleSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_STDDEV_SAMPLE_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeSumIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_ID_ASC',
  RepoSyncsBySyncTypeSumIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_ID_DESC',
  RepoSyncsBySyncTypeSumRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_REPO_ID_ASC',
  RepoSyncsBySyncTypeSumRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_REPO_ID_DESC',
  RepoSyncsBySyncTypeSumSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_SETTINGS_ASC',
  RepoSyncsBySyncTypeSumSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_SETTINGS_DESC',
  RepoSyncsBySyncTypeSumSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeSumSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_SUM_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeVariancePopulationIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_ID_ASC',
  RepoSyncsBySyncTypeVariancePopulationIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_ID_DESC',
  RepoSyncsBySyncTypeVariancePopulationRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_REPO_ID_ASC',
  RepoSyncsBySyncTypeVariancePopulationRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_REPO_ID_DESC',
  RepoSyncsBySyncTypeVariancePopulationSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_SETTINGS_ASC',
  RepoSyncsBySyncTypeVariancePopulationSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_SETTINGS_DESC',
  RepoSyncsBySyncTypeVariancePopulationSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeVariancePopulationSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_POPULATION_SYNC_TYPE_DESC',
  RepoSyncsBySyncTypeVarianceSampleIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_ID_ASC',
  RepoSyncsBySyncTypeVarianceSampleIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_ID_DESC',
  RepoSyncsBySyncTypeVarianceSampleRepoIdAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_REPO_ID_ASC',
  RepoSyncsBySyncTypeVarianceSampleRepoIdDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_REPO_ID_DESC',
  RepoSyncsBySyncTypeVarianceSampleSettingsAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_SETTINGS_ASC',
  RepoSyncsBySyncTypeVarianceSampleSettingsDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_SETTINGS_DESC',
  RepoSyncsBySyncTypeVarianceSampleSyncTypeAsc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_SYNC_TYPE_ASC',
  RepoSyncsBySyncTypeVarianceSampleSyncTypeDesc = 'REPO_SYNCS_BY_SYNC_TYPE_VARIANCE_SAMPLE_SYNC_TYPE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
}

/** A connection to a list of `RepoSync` values. */
export type RepoSyncsConnection = {
  __typename?: 'RepoSyncsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoSyncAggregates>
  /** A list of edges which contains the `RepoSync` and cursor to aid in pagination. */
  edges: Array<RepoSyncsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoSyncAggregates>>
  /** A list of `RepoSync` objects. */
  nodes: Array<Maybe<RepoSync>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `RepoSync` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `RepoSync` values. */
export type RepoSyncsConnectionGroupedAggregatesArgs = {
  groupBy: Array<RepoSyncsGroupBy>
  having?: InputMaybe<RepoSyncsHavingInput>
}

/** A `RepoSync` edge in the connection. */
export type RepoSyncsEdge = {
  __typename?: 'RepoSyncsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `RepoSync` at the end of the edge. */
  node?: Maybe<RepoSync>
}

/** Grouping methods for `RepoSync` for usage during aggregation. */
export enum RepoSyncsGroupBy {
  RepoId = 'REPO_ID',
  Settings = 'SETTINGS',
  SyncType = 'SYNC_TYPE',
}

/** Conditions for `RepoSync` aggregates. */
export type RepoSyncsHavingInput = {
  AND?: InputMaybe<Array<RepoSyncsHavingInput>>
  OR?: InputMaybe<Array<RepoSyncsHavingInput>>
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
  RepoSyncQueuesByRepoSyncIdAverageCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdAverageCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdAverageDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdAverageDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdAverageIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_ID_ASC',
  RepoSyncQueuesByRepoSyncIdAverageIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_ID_DESC',
  RepoSyncQueuesByRepoSyncIdAverageLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdAverageLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdAverageRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdAverageRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdAverageStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdAverageStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdAverageStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdAverageStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_AVERAGE_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdCountAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_COUNT_ASC',
  RepoSyncQueuesByRepoSyncIdCountDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_COUNT_DESC',
  RepoSyncQueuesByRepoSyncIdDistinctCountCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdDistinctCountCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdDistinctCountDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdDistinctCountDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdDistinctCountIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_ID_ASC',
  RepoSyncQueuesByRepoSyncIdDistinctCountIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_ID_DESC',
  RepoSyncQueuesByRepoSyncIdDistinctCountLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdDistinctCountLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdDistinctCountRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdDistinctCountRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdDistinctCountStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdDistinctCountStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdDistinctCountStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdDistinctCountStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_DISTINCT_COUNT_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdMaxCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdMaxCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdMaxDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdMaxDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdMaxIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_ID_ASC',
  RepoSyncQueuesByRepoSyncIdMaxIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_ID_DESC',
  RepoSyncQueuesByRepoSyncIdMaxLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdMaxLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdMaxRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdMaxRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdMaxStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdMaxStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdMaxStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdMaxStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MAX_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdMinCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdMinCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdMinDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdMinDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdMinIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_ID_ASC',
  RepoSyncQueuesByRepoSyncIdMinIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_ID_DESC',
  RepoSyncQueuesByRepoSyncIdMinLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdMinLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdMinRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdMinRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdMinStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdMinStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdMinStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdMinStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_MIN_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_ID_ASC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_ID_DESC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdStddevPopulationStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_POPULATION_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdStddevSampleCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdStddevSampleCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdStddevSampleDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdStddevSampleDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdStddevSampleIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_ID_ASC',
  RepoSyncQueuesByRepoSyncIdStddevSampleIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_ID_DESC',
  RepoSyncQueuesByRepoSyncIdStddevSampleLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdStddevSampleLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdStddevSampleRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdStddevSampleRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdStddevSampleStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdStddevSampleStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdStddevSampleStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdStddevSampleStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_STDDEV_SAMPLE_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdSumCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdSumCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdSumDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdSumDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdSumIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_ID_ASC',
  RepoSyncQueuesByRepoSyncIdSumIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_ID_DESC',
  RepoSyncQueuesByRepoSyncIdSumLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdSumLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdSumRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdSumRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdSumStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdSumStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdSumStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdSumStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_SUM_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_ID_ASC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_ID_DESC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdVariancePopulationStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_POPULATION_STATUS_DESC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleCreatedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleCreatedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleDoneAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_DONE_AT_ASC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleDoneAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_DONE_AT_DESC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_ID_ASC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_ID_DESC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleLastKeepAliveAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_LAST_KEEP_ALIVE_ASC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleLastKeepAliveDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_LAST_KEEP_ALIVE_DESC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleRepoSyncIdAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_REPO_SYNC_ID_ASC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleRepoSyncIdDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_REPO_SYNC_ID_DESC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleStartedAtAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_STARTED_AT_ASC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleStartedAtDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_STARTED_AT_DESC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleStatusAsc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_STATUS_ASC',
  RepoSyncQueuesByRepoSyncIdVarianceSampleStatusDesc = 'REPO_SYNC_QUEUES_BY_REPO_SYNC_ID_VARIANCE_SAMPLE_STATUS_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  SyncTypeAsc = 'SYNC_TYPE_ASC',
  SyncTypeDesc = 'SYNC_TYPE_DESC',
}

/** A connection to a list of `Repo` values. */
export type ReposConnection = {
  __typename?: 'ReposConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<RepoAggregates>
  /** A list of edges which contains the `Repo` and cursor to aid in pagination. */
  edges: Array<ReposEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<RepoAggregates>>
  /** A list of `Repo` objects. */
  nodes: Array<Maybe<Repo>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Repo` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `Repo` values. */
export type ReposConnectionGroupedAggregatesArgs = {
  groupBy: Array<ReposGroupBy>
  having?: InputMaybe<ReposHavingInput>
}

/** A `Repo` edge in the connection. */
export type ReposEdge = {
  __typename?: 'ReposEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Repo` at the end of the edge. */
  node?: Maybe<Repo>
}

/** Grouping methods for `Repo` for usage during aggregation. */
export enum ReposGroupBy {
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  IsGithub = 'IS_GITHUB',
  Ref = 'REF',
  Repo = 'REPO',
  RepoImportId = 'REPO_IMPORT_ID',
  Settings = 'SETTINGS',
  Tags = 'TAGS',
}

export type ReposHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

export type ReposHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

/** Conditions for `Repo` aggregates. */
export type ReposHavingInput = {
  AND?: InputMaybe<Array<ReposHavingInput>>
  OR?: InputMaybe<Array<ReposHavingInput>>
  average?: InputMaybe<ReposHavingAverageInput>
  distinctCount?: InputMaybe<ReposHavingDistinctCountInput>
  max?: InputMaybe<ReposHavingMaxInput>
  min?: InputMaybe<ReposHavingMinInput>
  stddevPopulation?: InputMaybe<ReposHavingStddevPopulationInput>
  stddevSample?: InputMaybe<ReposHavingStddevSampleInput>
  sum?: InputMaybe<ReposHavingSumInput>
  variancePopulation?: InputMaybe<ReposHavingVariancePopulationInput>
  varianceSample?: InputMaybe<ReposHavingVarianceSampleInput>
}

export type ReposHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

export type ReposHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

export type ReposHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

export type ReposHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

export type ReposHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

export type ReposHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

export type ReposHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>
}

/** Methods to use when ordering `Repo`. */
export enum ReposOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  GithubIssuesByRepoIdAverageAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdAverageAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdAverageBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_BODY_ASC',
  GithubIssuesByRepoIdAverageBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_BODY_DESC',
  GithubIssuesByRepoIdAverageClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CLOSED_ASC',
  GithubIssuesByRepoIdAverageClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CLOSED_AT_ASC',
  GithubIssuesByRepoIdAverageClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CLOSED_AT_DESC',
  GithubIssuesByRepoIdAverageClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CLOSED_DESC',
  GithubIssuesByRepoIdAverageCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdAverageCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdAverageCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CREATED_AT_ASC',
  GithubIssuesByRepoIdAverageCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CREATED_AT_DESC',
  GithubIssuesByRepoIdAverageCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdAverageCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdAverageDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_DATABASE_ID_ASC',
  GithubIssuesByRepoIdAverageDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_DATABASE_ID_DESC',
  GithubIssuesByRepoIdAverageEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdAverageEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdAverageIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdAverageIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdAverageLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdAverageLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdAverageLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdAverageLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdAverageLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_LOCKED_ASC',
  GithubIssuesByRepoIdAverageLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_LOCKED_DESC',
  GithubIssuesByRepoIdAverageMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdAverageMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdAverageNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_NUMBER_ASC',
  GithubIssuesByRepoIdAverageNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_NUMBER_DESC',
  GithubIssuesByRepoIdAverageParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdAverageParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdAveragePublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdAveragePublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdAverageReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdAverageReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdAverageRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_REPO_ID_ASC',
  GithubIssuesByRepoIdAverageRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_REPO_ID_DESC',
  GithubIssuesByRepoIdAverageStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_STATE_ASC',
  GithubIssuesByRepoIdAverageStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_STATE_DESC',
  GithubIssuesByRepoIdAverageTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_TITLE_ASC',
  GithubIssuesByRepoIdAverageTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_TITLE_DESC',
  GithubIssuesByRepoIdAverageUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_UPDATED_AT_ASC',
  GithubIssuesByRepoIdAverageUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_UPDATED_AT_DESC',
  GithubIssuesByRepoIdAverageUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_URL_ASC',
  GithubIssuesByRepoIdAverageUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_AVERAGE_URL_DESC',
  GithubIssuesByRepoIdCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_COUNT_ASC',
  GithubIssuesByRepoIdCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_COUNT_DESC',
  GithubIssuesByRepoIdDistinctCountAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdDistinctCountAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdDistinctCountBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_BODY_ASC',
  GithubIssuesByRepoIdDistinctCountBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_BODY_DESC',
  GithubIssuesByRepoIdDistinctCountClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CLOSED_ASC',
  GithubIssuesByRepoIdDistinctCountClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CLOSED_AT_ASC',
  GithubIssuesByRepoIdDistinctCountClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CLOSED_AT_DESC',
  GithubIssuesByRepoIdDistinctCountClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CLOSED_DESC',
  GithubIssuesByRepoIdDistinctCountCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdDistinctCountCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdDistinctCountCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  GithubIssuesByRepoIdDistinctCountCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  GithubIssuesByRepoIdDistinctCountCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdDistinctCountCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdDistinctCountDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_DATABASE_ID_ASC',
  GithubIssuesByRepoIdDistinctCountDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_DATABASE_ID_DESC',
  GithubIssuesByRepoIdDistinctCountEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdDistinctCountEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdDistinctCountIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdDistinctCountIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdDistinctCountLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdDistinctCountLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdDistinctCountLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdDistinctCountLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdDistinctCountLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_LOCKED_ASC',
  GithubIssuesByRepoIdDistinctCountLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_LOCKED_DESC',
  GithubIssuesByRepoIdDistinctCountMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdDistinctCountMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdDistinctCountNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_NUMBER_ASC',
  GithubIssuesByRepoIdDistinctCountNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_NUMBER_DESC',
  GithubIssuesByRepoIdDistinctCountParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdDistinctCountParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdDistinctCountPublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdDistinctCountPublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdDistinctCountReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdDistinctCountReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdDistinctCountRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_ASC',
  GithubIssuesByRepoIdDistinctCountRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_DESC',
  GithubIssuesByRepoIdDistinctCountStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_STATE_ASC',
  GithubIssuesByRepoIdDistinctCountStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_STATE_DESC',
  GithubIssuesByRepoIdDistinctCountTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_TITLE_ASC',
  GithubIssuesByRepoIdDistinctCountTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_TITLE_DESC',
  GithubIssuesByRepoIdDistinctCountUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  GithubIssuesByRepoIdDistinctCountUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  GithubIssuesByRepoIdDistinctCountUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_URL_ASC',
  GithubIssuesByRepoIdDistinctCountUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_DISTINCT_COUNT_URL_DESC',
  GithubIssuesByRepoIdMaxAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdMaxAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdMaxBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_BODY_ASC',
  GithubIssuesByRepoIdMaxBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_BODY_DESC',
  GithubIssuesByRepoIdMaxClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CLOSED_ASC',
  GithubIssuesByRepoIdMaxClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CLOSED_AT_ASC',
  GithubIssuesByRepoIdMaxClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CLOSED_AT_DESC',
  GithubIssuesByRepoIdMaxClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CLOSED_DESC',
  GithubIssuesByRepoIdMaxCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdMaxCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdMaxCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CREATED_AT_ASC',
  GithubIssuesByRepoIdMaxCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CREATED_AT_DESC',
  GithubIssuesByRepoIdMaxCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdMaxCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdMaxDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_DATABASE_ID_ASC',
  GithubIssuesByRepoIdMaxDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_DATABASE_ID_DESC',
  GithubIssuesByRepoIdMaxEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdMaxEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdMaxIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdMaxIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdMaxLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdMaxLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdMaxLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdMaxLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdMaxLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_LOCKED_ASC',
  GithubIssuesByRepoIdMaxLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_LOCKED_DESC',
  GithubIssuesByRepoIdMaxMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdMaxMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdMaxNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_NUMBER_ASC',
  GithubIssuesByRepoIdMaxNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_NUMBER_DESC',
  GithubIssuesByRepoIdMaxParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdMaxParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdMaxPublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdMaxPublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdMaxReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdMaxReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdMaxRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_REPO_ID_ASC',
  GithubIssuesByRepoIdMaxRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_REPO_ID_DESC',
  GithubIssuesByRepoIdMaxStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_STATE_ASC',
  GithubIssuesByRepoIdMaxStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_STATE_DESC',
  GithubIssuesByRepoIdMaxTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_TITLE_ASC',
  GithubIssuesByRepoIdMaxTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_TITLE_DESC',
  GithubIssuesByRepoIdMaxUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_UPDATED_AT_ASC',
  GithubIssuesByRepoIdMaxUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_UPDATED_AT_DESC',
  GithubIssuesByRepoIdMaxUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_URL_ASC',
  GithubIssuesByRepoIdMaxUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_MAX_URL_DESC',
  GithubIssuesByRepoIdMinAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdMinAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdMinBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_BODY_ASC',
  GithubIssuesByRepoIdMinBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_BODY_DESC',
  GithubIssuesByRepoIdMinClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CLOSED_ASC',
  GithubIssuesByRepoIdMinClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CLOSED_AT_ASC',
  GithubIssuesByRepoIdMinClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CLOSED_AT_DESC',
  GithubIssuesByRepoIdMinClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CLOSED_DESC',
  GithubIssuesByRepoIdMinCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdMinCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdMinCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CREATED_AT_ASC',
  GithubIssuesByRepoIdMinCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CREATED_AT_DESC',
  GithubIssuesByRepoIdMinCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdMinCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdMinDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_DATABASE_ID_ASC',
  GithubIssuesByRepoIdMinDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_DATABASE_ID_DESC',
  GithubIssuesByRepoIdMinEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdMinEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdMinIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdMinIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdMinLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdMinLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdMinLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdMinLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdMinLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_LOCKED_ASC',
  GithubIssuesByRepoIdMinLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_LOCKED_DESC',
  GithubIssuesByRepoIdMinMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdMinMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdMinNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_NUMBER_ASC',
  GithubIssuesByRepoIdMinNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_NUMBER_DESC',
  GithubIssuesByRepoIdMinParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdMinParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdMinPublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdMinPublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdMinReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdMinReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdMinRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_REPO_ID_ASC',
  GithubIssuesByRepoIdMinRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_REPO_ID_DESC',
  GithubIssuesByRepoIdMinStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_STATE_ASC',
  GithubIssuesByRepoIdMinStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_STATE_DESC',
  GithubIssuesByRepoIdMinTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_TITLE_ASC',
  GithubIssuesByRepoIdMinTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_TITLE_DESC',
  GithubIssuesByRepoIdMinUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_UPDATED_AT_ASC',
  GithubIssuesByRepoIdMinUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_UPDATED_AT_DESC',
  GithubIssuesByRepoIdMinUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_URL_ASC',
  GithubIssuesByRepoIdMinUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_MIN_URL_DESC',
  GithubIssuesByRepoIdStddevPopulationAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdStddevPopulationAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdStddevPopulationBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_BODY_ASC',
  GithubIssuesByRepoIdStddevPopulationBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_BODY_DESC',
  GithubIssuesByRepoIdStddevPopulationClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CLOSED_ASC',
  GithubIssuesByRepoIdStddevPopulationClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CLOSED_AT_ASC',
  GithubIssuesByRepoIdStddevPopulationClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CLOSED_AT_DESC',
  GithubIssuesByRepoIdStddevPopulationClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CLOSED_DESC',
  GithubIssuesByRepoIdStddevPopulationCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdStddevPopulationCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdStddevPopulationCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  GithubIssuesByRepoIdStddevPopulationCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  GithubIssuesByRepoIdStddevPopulationCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdStddevPopulationCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdStddevPopulationDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_DATABASE_ID_ASC',
  GithubIssuesByRepoIdStddevPopulationDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_DATABASE_ID_DESC',
  GithubIssuesByRepoIdStddevPopulationEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdStddevPopulationEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdStddevPopulationIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdStddevPopulationIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdStddevPopulationLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdStddevPopulationLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdStddevPopulationLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdStddevPopulationLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdStddevPopulationLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_LOCKED_ASC',
  GithubIssuesByRepoIdStddevPopulationLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_LOCKED_DESC',
  GithubIssuesByRepoIdStddevPopulationMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdStddevPopulationMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdStddevPopulationNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_NUMBER_ASC',
  GithubIssuesByRepoIdStddevPopulationNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_NUMBER_DESC',
  GithubIssuesByRepoIdStddevPopulationParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdStddevPopulationParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdStddevPopulationPublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdStddevPopulationPublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdStddevPopulationReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdStddevPopulationReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdStddevPopulationRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_ASC',
  GithubIssuesByRepoIdStddevPopulationRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_DESC',
  GithubIssuesByRepoIdStddevPopulationStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_STATE_ASC',
  GithubIssuesByRepoIdStddevPopulationStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_STATE_DESC',
  GithubIssuesByRepoIdStddevPopulationTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_TITLE_ASC',
  GithubIssuesByRepoIdStddevPopulationTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_TITLE_DESC',
  GithubIssuesByRepoIdStddevPopulationUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_UPDATED_AT_ASC',
  GithubIssuesByRepoIdStddevPopulationUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_UPDATED_AT_DESC',
  GithubIssuesByRepoIdStddevPopulationUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_URL_ASC',
  GithubIssuesByRepoIdStddevPopulationUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_POPULATION_URL_DESC',
  GithubIssuesByRepoIdStddevSampleAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdStddevSampleAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdStddevSampleBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_BODY_ASC',
  GithubIssuesByRepoIdStddevSampleBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_BODY_DESC',
  GithubIssuesByRepoIdStddevSampleClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_ASC',
  GithubIssuesByRepoIdStddevSampleClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_AT_ASC',
  GithubIssuesByRepoIdStddevSampleClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_AT_DESC',
  GithubIssuesByRepoIdStddevSampleClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_DESC',
  GithubIssuesByRepoIdStddevSampleCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdStddevSampleCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdStddevSampleCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  GithubIssuesByRepoIdStddevSampleCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  GithubIssuesByRepoIdStddevSampleCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdStddevSampleCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdStddevSampleDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_DATABASE_ID_ASC',
  GithubIssuesByRepoIdStddevSampleDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_DATABASE_ID_DESC',
  GithubIssuesByRepoIdStddevSampleEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdStddevSampleEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdStddevSampleIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdStddevSampleIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdStddevSampleLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdStddevSampleLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdStddevSampleLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdStddevSampleLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdStddevSampleLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_LOCKED_ASC',
  GithubIssuesByRepoIdStddevSampleLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_LOCKED_DESC',
  GithubIssuesByRepoIdStddevSampleMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdStddevSampleMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdStddevSampleNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_NUMBER_ASC',
  GithubIssuesByRepoIdStddevSampleNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_NUMBER_DESC',
  GithubIssuesByRepoIdStddevSampleParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdStddevSampleParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdStddevSamplePublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdStddevSamplePublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdStddevSampleReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdStddevSampleReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdStddevSampleRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_ASC',
  GithubIssuesByRepoIdStddevSampleRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_DESC',
  GithubIssuesByRepoIdStddevSampleStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_STATE_ASC',
  GithubIssuesByRepoIdStddevSampleStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_STATE_DESC',
  GithubIssuesByRepoIdStddevSampleTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_TITLE_ASC',
  GithubIssuesByRepoIdStddevSampleTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_TITLE_DESC',
  GithubIssuesByRepoIdStddevSampleUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_UPDATED_AT_ASC',
  GithubIssuesByRepoIdStddevSampleUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_UPDATED_AT_DESC',
  GithubIssuesByRepoIdStddevSampleUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_URL_ASC',
  GithubIssuesByRepoIdStddevSampleUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_STDDEV_SAMPLE_URL_DESC',
  GithubIssuesByRepoIdSumAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdSumAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdSumBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_BODY_ASC',
  GithubIssuesByRepoIdSumBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_BODY_DESC',
  GithubIssuesByRepoIdSumClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CLOSED_ASC',
  GithubIssuesByRepoIdSumClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CLOSED_AT_ASC',
  GithubIssuesByRepoIdSumClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CLOSED_AT_DESC',
  GithubIssuesByRepoIdSumClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CLOSED_DESC',
  GithubIssuesByRepoIdSumCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdSumCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdSumCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CREATED_AT_ASC',
  GithubIssuesByRepoIdSumCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CREATED_AT_DESC',
  GithubIssuesByRepoIdSumCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdSumCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdSumDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_DATABASE_ID_ASC',
  GithubIssuesByRepoIdSumDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_DATABASE_ID_DESC',
  GithubIssuesByRepoIdSumEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdSumEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdSumIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdSumIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdSumLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdSumLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdSumLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdSumLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdSumLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_LOCKED_ASC',
  GithubIssuesByRepoIdSumLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_LOCKED_DESC',
  GithubIssuesByRepoIdSumMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdSumMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdSumNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_NUMBER_ASC',
  GithubIssuesByRepoIdSumNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_NUMBER_DESC',
  GithubIssuesByRepoIdSumParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdSumParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdSumPublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdSumPublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdSumReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdSumReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdSumRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_REPO_ID_ASC',
  GithubIssuesByRepoIdSumRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_REPO_ID_DESC',
  GithubIssuesByRepoIdSumStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_STATE_ASC',
  GithubIssuesByRepoIdSumStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_STATE_DESC',
  GithubIssuesByRepoIdSumTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_TITLE_ASC',
  GithubIssuesByRepoIdSumTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_TITLE_DESC',
  GithubIssuesByRepoIdSumUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_UPDATED_AT_ASC',
  GithubIssuesByRepoIdSumUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_UPDATED_AT_DESC',
  GithubIssuesByRepoIdSumUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_URL_ASC',
  GithubIssuesByRepoIdSumUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_SUM_URL_DESC',
  GithubIssuesByRepoIdVariancePopulationAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdVariancePopulationAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdVariancePopulationBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_BODY_ASC',
  GithubIssuesByRepoIdVariancePopulationBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_BODY_DESC',
  GithubIssuesByRepoIdVariancePopulationClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_ASC',
  GithubIssuesByRepoIdVariancePopulationClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_AT_ASC',
  GithubIssuesByRepoIdVariancePopulationClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_AT_DESC',
  GithubIssuesByRepoIdVariancePopulationClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_DESC',
  GithubIssuesByRepoIdVariancePopulationCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdVariancePopulationCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdVariancePopulationCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  GithubIssuesByRepoIdVariancePopulationCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  GithubIssuesByRepoIdVariancePopulationCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdVariancePopulationCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdVariancePopulationDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_DATABASE_ID_ASC',
  GithubIssuesByRepoIdVariancePopulationDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_DATABASE_ID_DESC',
  GithubIssuesByRepoIdVariancePopulationEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdVariancePopulationEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdVariancePopulationIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdVariancePopulationIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdVariancePopulationLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdVariancePopulationLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdVariancePopulationLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdVariancePopulationLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdVariancePopulationLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_LOCKED_ASC',
  GithubIssuesByRepoIdVariancePopulationLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_LOCKED_DESC',
  GithubIssuesByRepoIdVariancePopulationMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdVariancePopulationMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdVariancePopulationNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_NUMBER_ASC',
  GithubIssuesByRepoIdVariancePopulationNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_NUMBER_DESC',
  GithubIssuesByRepoIdVariancePopulationParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdVariancePopulationParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdVariancePopulationPublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdVariancePopulationPublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdVariancePopulationReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdVariancePopulationReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdVariancePopulationRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_ASC',
  GithubIssuesByRepoIdVariancePopulationRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_DESC',
  GithubIssuesByRepoIdVariancePopulationStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_STATE_ASC',
  GithubIssuesByRepoIdVariancePopulationStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_STATE_DESC',
  GithubIssuesByRepoIdVariancePopulationTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_TITLE_ASC',
  GithubIssuesByRepoIdVariancePopulationTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_TITLE_DESC',
  GithubIssuesByRepoIdVariancePopulationUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_UPDATED_AT_ASC',
  GithubIssuesByRepoIdVariancePopulationUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_UPDATED_AT_DESC',
  GithubIssuesByRepoIdVariancePopulationUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_URL_ASC',
  GithubIssuesByRepoIdVariancePopulationUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_POPULATION_URL_DESC',
  GithubIssuesByRepoIdVarianceSampleAuthorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_LOGIN_ASC',
  GithubIssuesByRepoIdVarianceSampleAuthorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_LOGIN_DESC',
  GithubIssuesByRepoIdVarianceSampleBodyAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_BODY_ASC',
  GithubIssuesByRepoIdVarianceSampleBodyDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_BODY_DESC',
  GithubIssuesByRepoIdVarianceSampleClosedAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_ASC',
  GithubIssuesByRepoIdVarianceSampleClosedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_AT_ASC',
  GithubIssuesByRepoIdVarianceSampleClosedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_AT_DESC',
  GithubIssuesByRepoIdVarianceSampleClosedDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_DESC',
  GithubIssuesByRepoIdVarianceSampleCommentCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_COMMENT_COUNT_ASC',
  GithubIssuesByRepoIdVarianceSampleCommentCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_COMMENT_COUNT_DESC',
  GithubIssuesByRepoIdVarianceSampleCreatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  GithubIssuesByRepoIdVarianceSampleCreatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  GithubIssuesByRepoIdVarianceSampleCreatedViaEmailAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_VIA_EMAIL_ASC',
  GithubIssuesByRepoIdVarianceSampleCreatedViaEmailDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_VIA_EMAIL_DESC',
  GithubIssuesByRepoIdVarianceSampleDatabaseIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_DATABASE_ID_ASC',
  GithubIssuesByRepoIdVarianceSampleDatabaseIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_DATABASE_ID_DESC',
  GithubIssuesByRepoIdVarianceSampleEditorLoginAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_EDITOR_LOGIN_ASC',
  GithubIssuesByRepoIdVarianceSampleEditorLoginDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_EDITOR_LOGIN_DESC',
  GithubIssuesByRepoIdVarianceSampleIncludesCreatedEditAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_INCLUDES_CREATED_EDIT_ASC',
  GithubIssuesByRepoIdVarianceSampleIncludesCreatedEditDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_INCLUDES_CREATED_EDIT_DESC',
  GithubIssuesByRepoIdVarianceSampleLabelCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_LABEL_COUNT_ASC',
  GithubIssuesByRepoIdVarianceSampleLabelCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_LABEL_COUNT_DESC',
  GithubIssuesByRepoIdVarianceSampleLastEditedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_LAST_EDITED_AT_ASC',
  GithubIssuesByRepoIdVarianceSampleLastEditedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_LAST_EDITED_AT_DESC',
  GithubIssuesByRepoIdVarianceSampleLockedAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_LOCKED_ASC',
  GithubIssuesByRepoIdVarianceSampleLockedDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_LOCKED_DESC',
  GithubIssuesByRepoIdVarianceSampleMilestoneCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_MILESTONE_COUNT_ASC',
  GithubIssuesByRepoIdVarianceSampleMilestoneCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_MILESTONE_COUNT_DESC',
  GithubIssuesByRepoIdVarianceSampleNumberAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_NUMBER_ASC',
  GithubIssuesByRepoIdVarianceSampleNumberDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_NUMBER_DESC',
  GithubIssuesByRepoIdVarianceSampleParticipantCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_PARTICIPANT_COUNT_ASC',
  GithubIssuesByRepoIdVarianceSampleParticipantCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_PARTICIPANT_COUNT_DESC',
  GithubIssuesByRepoIdVarianceSamplePublishedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_PUBLISHED_AT_ASC',
  GithubIssuesByRepoIdVarianceSamplePublishedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_PUBLISHED_AT_DESC',
  GithubIssuesByRepoIdVarianceSampleReactionCountAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_REACTION_COUNT_ASC',
  GithubIssuesByRepoIdVarianceSampleReactionCountDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_REACTION_COUNT_DESC',
  GithubIssuesByRepoIdVarianceSampleRepoIdAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_ASC',
  GithubIssuesByRepoIdVarianceSampleRepoIdDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_DESC',
  GithubIssuesByRepoIdVarianceSampleStateAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_STATE_ASC',
  GithubIssuesByRepoIdVarianceSampleStateDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_STATE_DESC',
  GithubIssuesByRepoIdVarianceSampleTitleAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_TITLE_ASC',
  GithubIssuesByRepoIdVarianceSampleTitleDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_TITLE_DESC',
  GithubIssuesByRepoIdVarianceSampleUpdatedAtAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  GithubIssuesByRepoIdVarianceSampleUpdatedAtDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  GithubIssuesByRepoIdVarianceSampleUrlAsc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_URL_ASC',
  GithubIssuesByRepoIdVarianceSampleUrlDesc = 'GITHUB_ISSUES_BY_REPO_ID_VARIANCE_SAMPLE_URL_DESC',
  GithubPullRequestsByRepoIdAverageAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdAverageAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdAverageAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdAverageAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdAverageAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdAverageAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdAverageAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdAverageAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdAverageAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdAverageAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdAverageBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdAverageBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdAverageBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdAverageBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdAverageBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdAverageBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdAverageBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BODY_ASC',
  GithubPullRequestsByRepoIdAverageBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_BODY_DESC',
  GithubPullRequestsByRepoIdAverageChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdAverageChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdAverageClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CLOSED_ASC',
  GithubPullRequestsByRepoIdAverageClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdAverageClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdAverageClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CLOSED_DESC',
  GithubPullRequestsByRepoIdAverageCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdAverageCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdAverageCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdAverageCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdAverageCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdAverageCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdAverageCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdAverageCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdAverageDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdAverageDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdAverageDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_DELETIONS_ASC',
  GithubPullRequestsByRepoIdAverageDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_DELETIONS_DESC',
  GithubPullRequestsByRepoIdAverageEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdAverageEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdAverageHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdAverageHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdAverageHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdAverageHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdAverageHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdAverageHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdAverageIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdAverageIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdAverageLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdAverageLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdAverageLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdAverageLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdAverageLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_LOCKED_ASC',
  GithubPullRequestsByRepoIdAverageLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_LOCKED_DESC',
  GithubPullRequestsByRepoIdAverageMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdAverageMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdAverageMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdAverageMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdAverageMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdAverageMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdAverageMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGED_ASC',
  GithubPullRequestsByRepoIdAverageMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdAverageMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdAverageMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdAverageMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdAverageMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_MERGED_DESC',
  GithubPullRequestsByRepoIdAverageNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_NUMBER_ASC',
  GithubPullRequestsByRepoIdAverageNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_NUMBER_DESC',
  GithubPullRequestsByRepoIdAverageParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdAverageParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdAveragePublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdAveragePublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdAverageRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_REPO_ID_ASC',
  GithubPullRequestsByRepoIdAverageRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_REPO_ID_DESC',
  GithubPullRequestsByRepoIdAverageReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdAverageReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdAverageStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_STATE_ASC',
  GithubPullRequestsByRepoIdAverageStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_STATE_DESC',
  GithubPullRequestsByRepoIdAverageTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_TITLE_ASC',
  GithubPullRequestsByRepoIdAverageTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_TITLE_DESC',
  GithubPullRequestsByRepoIdAverageUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdAverageUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdAverageUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_URL_ASC',
  GithubPullRequestsByRepoIdAverageUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_AVERAGE_URL_DESC',
  GithubPullRequestsByRepoIdCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_COUNT_ASC',
  GithubPullRequestsByRepoIdCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_COUNT_DESC',
  GithubPullRequestsByRepoIdDistinctCountAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdDistinctCountAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdDistinctCountAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdDistinctCountAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdDistinctCountAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdDistinctCountAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdDistinctCountAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdDistinctCountAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdDistinctCountAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdDistinctCountAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdDistinctCountBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdDistinctCountBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdDistinctCountBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdDistinctCountBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdDistinctCountBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdDistinctCountBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdDistinctCountBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BODY_ASC',
  GithubPullRequestsByRepoIdDistinctCountBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_BODY_DESC',
  GithubPullRequestsByRepoIdDistinctCountChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdDistinctCountChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdDistinctCountClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CLOSED_ASC',
  GithubPullRequestsByRepoIdDistinctCountClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdDistinctCountClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdDistinctCountClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CLOSED_DESC',
  GithubPullRequestsByRepoIdDistinctCountCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdDistinctCountCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdDistinctCountCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdDistinctCountCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdDistinctCountCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdDistinctCountCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdDistinctCountCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdDistinctCountCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdDistinctCountDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdDistinctCountDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdDistinctCountDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_DELETIONS_ASC',
  GithubPullRequestsByRepoIdDistinctCountDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_DELETIONS_DESC',
  GithubPullRequestsByRepoIdDistinctCountEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdDistinctCountEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdDistinctCountHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdDistinctCountHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdDistinctCountHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdDistinctCountHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdDistinctCountHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdDistinctCountHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdDistinctCountIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdDistinctCountIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdDistinctCountLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdDistinctCountLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdDistinctCountLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdDistinctCountLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdDistinctCountLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_LOCKED_ASC',
  GithubPullRequestsByRepoIdDistinctCountLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_LOCKED_DESC',
  GithubPullRequestsByRepoIdDistinctCountMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdDistinctCountMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdDistinctCountMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdDistinctCountMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdDistinctCountMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdDistinctCountMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdDistinctCountMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGED_ASC',
  GithubPullRequestsByRepoIdDistinctCountMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdDistinctCountMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdDistinctCountMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdDistinctCountMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdDistinctCountMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_MERGED_DESC',
  GithubPullRequestsByRepoIdDistinctCountNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_NUMBER_ASC',
  GithubPullRequestsByRepoIdDistinctCountNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_NUMBER_DESC',
  GithubPullRequestsByRepoIdDistinctCountParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdDistinctCountParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdDistinctCountPublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdDistinctCountPublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdDistinctCountRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_ASC',
  GithubPullRequestsByRepoIdDistinctCountRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_DESC',
  GithubPullRequestsByRepoIdDistinctCountReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdDistinctCountReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdDistinctCountStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_STATE_ASC',
  GithubPullRequestsByRepoIdDistinctCountStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_STATE_DESC',
  GithubPullRequestsByRepoIdDistinctCountTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_TITLE_ASC',
  GithubPullRequestsByRepoIdDistinctCountTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_TITLE_DESC',
  GithubPullRequestsByRepoIdDistinctCountUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdDistinctCountUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdDistinctCountUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_URL_ASC',
  GithubPullRequestsByRepoIdDistinctCountUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_DISTINCT_COUNT_URL_DESC',
  GithubPullRequestsByRepoIdMaxAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdMaxAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdMaxAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdMaxAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdMaxAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdMaxAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdMaxAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdMaxAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdMaxAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdMaxAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdMaxBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdMaxBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdMaxBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdMaxBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdMaxBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdMaxBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdMaxBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BODY_ASC',
  GithubPullRequestsByRepoIdMaxBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_BODY_DESC',
  GithubPullRequestsByRepoIdMaxChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdMaxChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdMaxClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CLOSED_ASC',
  GithubPullRequestsByRepoIdMaxClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdMaxClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdMaxClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CLOSED_DESC',
  GithubPullRequestsByRepoIdMaxCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdMaxCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdMaxCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdMaxCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdMaxCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdMaxCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdMaxCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdMaxCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdMaxDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdMaxDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdMaxDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_DELETIONS_ASC',
  GithubPullRequestsByRepoIdMaxDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_DELETIONS_DESC',
  GithubPullRequestsByRepoIdMaxEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdMaxEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdMaxHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdMaxHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdMaxHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdMaxHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdMaxHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdMaxHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdMaxIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdMaxIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdMaxLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdMaxLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdMaxLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdMaxLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdMaxLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_LOCKED_ASC',
  GithubPullRequestsByRepoIdMaxLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_LOCKED_DESC',
  GithubPullRequestsByRepoIdMaxMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdMaxMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdMaxMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdMaxMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdMaxMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdMaxMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdMaxMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGED_ASC',
  GithubPullRequestsByRepoIdMaxMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdMaxMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdMaxMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdMaxMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdMaxMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_MERGED_DESC',
  GithubPullRequestsByRepoIdMaxNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_NUMBER_ASC',
  GithubPullRequestsByRepoIdMaxNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_NUMBER_DESC',
  GithubPullRequestsByRepoIdMaxParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdMaxParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdMaxPublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdMaxPublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdMaxRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_REPO_ID_ASC',
  GithubPullRequestsByRepoIdMaxRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_REPO_ID_DESC',
  GithubPullRequestsByRepoIdMaxReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdMaxReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdMaxStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_STATE_ASC',
  GithubPullRequestsByRepoIdMaxStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_STATE_DESC',
  GithubPullRequestsByRepoIdMaxTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_TITLE_ASC',
  GithubPullRequestsByRepoIdMaxTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_TITLE_DESC',
  GithubPullRequestsByRepoIdMaxUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdMaxUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdMaxUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_URL_ASC',
  GithubPullRequestsByRepoIdMaxUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MAX_URL_DESC',
  GithubPullRequestsByRepoIdMinAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdMinAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdMinAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdMinAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdMinAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdMinAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdMinAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdMinAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdMinAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdMinAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdMinBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdMinBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdMinBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdMinBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdMinBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdMinBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdMinBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BODY_ASC',
  GithubPullRequestsByRepoIdMinBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_BODY_DESC',
  GithubPullRequestsByRepoIdMinChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdMinChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdMinClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CLOSED_ASC',
  GithubPullRequestsByRepoIdMinClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdMinClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdMinClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CLOSED_DESC',
  GithubPullRequestsByRepoIdMinCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdMinCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdMinCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdMinCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdMinCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdMinCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdMinCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdMinCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdMinDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdMinDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdMinDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_DELETIONS_ASC',
  GithubPullRequestsByRepoIdMinDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_DELETIONS_DESC',
  GithubPullRequestsByRepoIdMinEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdMinEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdMinHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdMinHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdMinHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdMinHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdMinHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdMinHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdMinIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdMinIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdMinLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdMinLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdMinLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdMinLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdMinLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_LOCKED_ASC',
  GithubPullRequestsByRepoIdMinLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_LOCKED_DESC',
  GithubPullRequestsByRepoIdMinMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdMinMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdMinMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdMinMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdMinMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdMinMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdMinMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGED_ASC',
  GithubPullRequestsByRepoIdMinMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdMinMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdMinMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdMinMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdMinMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_MERGED_DESC',
  GithubPullRequestsByRepoIdMinNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_NUMBER_ASC',
  GithubPullRequestsByRepoIdMinNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_NUMBER_DESC',
  GithubPullRequestsByRepoIdMinParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdMinParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdMinPublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdMinPublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdMinRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_REPO_ID_ASC',
  GithubPullRequestsByRepoIdMinRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_REPO_ID_DESC',
  GithubPullRequestsByRepoIdMinReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdMinReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdMinStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_STATE_ASC',
  GithubPullRequestsByRepoIdMinStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_STATE_DESC',
  GithubPullRequestsByRepoIdMinTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_TITLE_ASC',
  GithubPullRequestsByRepoIdMinTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_TITLE_DESC',
  GithubPullRequestsByRepoIdMinUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdMinUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdMinUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_URL_ASC',
  GithubPullRequestsByRepoIdMinUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_MIN_URL_DESC',
  GithubPullRequestsByRepoIdStddevPopulationAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdStddevPopulationAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdStddevPopulationAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdStddevPopulationBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdStddevPopulationBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdStddevPopulationBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdStddevPopulationBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdStddevPopulationBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdStddevPopulationBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdStddevPopulationBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BODY_ASC',
  GithubPullRequestsByRepoIdStddevPopulationBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_BODY_DESC',
  GithubPullRequestsByRepoIdStddevPopulationChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdStddevPopulationChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdStddevPopulationClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CLOSED_ASC',
  GithubPullRequestsByRepoIdStddevPopulationClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CLOSED_DESC',
  GithubPullRequestsByRepoIdStddevPopulationCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdStddevPopulationCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdStddevPopulationDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdStddevPopulationDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdStddevPopulationDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_DELETIONS_ASC',
  GithubPullRequestsByRepoIdStddevPopulationDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_DELETIONS_DESC',
  GithubPullRequestsByRepoIdStddevPopulationEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdStddevPopulationEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdStddevPopulationHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdStddevPopulationHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdStddevPopulationHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdStddevPopulationHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdStddevPopulationHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdStddevPopulationHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdStddevPopulationIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_LOCKED_ASC',
  GithubPullRequestsByRepoIdStddevPopulationLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_LOCKED_DESC',
  GithubPullRequestsByRepoIdStddevPopulationMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdStddevPopulationMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdStddevPopulationMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdStddevPopulationMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdStddevPopulationMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdStddevPopulationMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdStddevPopulationMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGED_ASC',
  GithubPullRequestsByRepoIdStddevPopulationMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdStddevPopulationMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdStddevPopulationMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_MERGED_DESC',
  GithubPullRequestsByRepoIdStddevPopulationNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_NUMBER_ASC',
  GithubPullRequestsByRepoIdStddevPopulationNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_NUMBER_DESC',
  GithubPullRequestsByRepoIdStddevPopulationParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationPublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationPublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_ASC',
  GithubPullRequestsByRepoIdStddevPopulationRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_DESC',
  GithubPullRequestsByRepoIdStddevPopulationReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdStddevPopulationReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdStddevPopulationStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_STATE_ASC',
  GithubPullRequestsByRepoIdStddevPopulationStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_STATE_DESC',
  GithubPullRequestsByRepoIdStddevPopulationTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_TITLE_ASC',
  GithubPullRequestsByRepoIdStddevPopulationTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_TITLE_DESC',
  GithubPullRequestsByRepoIdStddevPopulationUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdStddevPopulationUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdStddevPopulationUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_URL_ASC',
  GithubPullRequestsByRepoIdStddevPopulationUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_POPULATION_URL_DESC',
  GithubPullRequestsByRepoIdStddevSampleAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdStddevSampleAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdStddevSampleAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdStddevSampleAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdStddevSampleAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdStddevSampleAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdStddevSampleAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdStddevSampleAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdStddevSampleAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdStddevSampleAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdStddevSampleBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdStddevSampleBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdStddevSampleBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdStddevSampleBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdStddevSampleBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdStddevSampleBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdStddevSampleBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BODY_ASC',
  GithubPullRequestsByRepoIdStddevSampleBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_BODY_DESC',
  GithubPullRequestsByRepoIdStddevSampleChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdStddevSampleChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdStddevSampleClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_ASC',
  GithubPullRequestsByRepoIdStddevSampleClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdStddevSampleClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdStddevSampleClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CLOSED_DESC',
  GithubPullRequestsByRepoIdStddevSampleCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevSampleCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevSampleCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevSampleCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevSampleCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdStddevSampleCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdStddevSampleCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdStddevSampleCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdStddevSampleDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdStddevSampleDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdStddevSampleDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_DELETIONS_ASC',
  GithubPullRequestsByRepoIdStddevSampleDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_DELETIONS_DESC',
  GithubPullRequestsByRepoIdStddevSampleEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdStddevSampleEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdStddevSampleHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdStddevSampleHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdStddevSampleHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdStddevSampleHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdStddevSampleHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdStddevSampleHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdStddevSampleIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdStddevSampleIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdStddevSampleLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevSampleLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevSampleLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdStddevSampleLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdStddevSampleLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_LOCKED_ASC',
  GithubPullRequestsByRepoIdStddevSampleLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_LOCKED_DESC',
  GithubPullRequestsByRepoIdStddevSampleMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdStddevSampleMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdStddevSampleMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdStddevSampleMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdStddevSampleMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdStddevSampleMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdStddevSampleMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGED_ASC',
  GithubPullRequestsByRepoIdStddevSampleMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdStddevSampleMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdStddevSampleMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdStddevSampleMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdStddevSampleMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_MERGED_DESC',
  GithubPullRequestsByRepoIdStddevSampleNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_NUMBER_ASC',
  GithubPullRequestsByRepoIdStddevSampleNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_NUMBER_DESC',
  GithubPullRequestsByRepoIdStddevSampleParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdStddevSampleParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdStddevSamplePublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdStddevSamplePublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdStddevSampleRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_ASC',
  GithubPullRequestsByRepoIdStddevSampleRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_DESC',
  GithubPullRequestsByRepoIdStddevSampleReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdStddevSampleReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdStddevSampleStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_STATE_ASC',
  GithubPullRequestsByRepoIdStddevSampleStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_STATE_DESC',
  GithubPullRequestsByRepoIdStddevSampleTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_TITLE_ASC',
  GithubPullRequestsByRepoIdStddevSampleTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_TITLE_DESC',
  GithubPullRequestsByRepoIdStddevSampleUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdStddevSampleUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdStddevSampleUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_URL_ASC',
  GithubPullRequestsByRepoIdStddevSampleUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_STDDEV_SAMPLE_URL_DESC',
  GithubPullRequestsByRepoIdSumAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdSumAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdSumAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdSumAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdSumAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdSumAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdSumAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdSumAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdSumAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdSumAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdSumBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdSumBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdSumBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdSumBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdSumBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdSumBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdSumBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BODY_ASC',
  GithubPullRequestsByRepoIdSumBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_BODY_DESC',
  GithubPullRequestsByRepoIdSumChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdSumChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdSumClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CLOSED_ASC',
  GithubPullRequestsByRepoIdSumClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdSumClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdSumClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CLOSED_DESC',
  GithubPullRequestsByRepoIdSumCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdSumCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdSumCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdSumCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdSumCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdSumCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdSumCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdSumCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdSumDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdSumDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdSumDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_DELETIONS_ASC',
  GithubPullRequestsByRepoIdSumDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_DELETIONS_DESC',
  GithubPullRequestsByRepoIdSumEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdSumEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdSumHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdSumHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdSumHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdSumHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdSumHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdSumHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdSumIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdSumIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdSumLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdSumLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdSumLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdSumLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdSumLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_LOCKED_ASC',
  GithubPullRequestsByRepoIdSumLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_LOCKED_DESC',
  GithubPullRequestsByRepoIdSumMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdSumMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdSumMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdSumMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdSumMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdSumMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdSumMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGED_ASC',
  GithubPullRequestsByRepoIdSumMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdSumMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdSumMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdSumMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdSumMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_MERGED_DESC',
  GithubPullRequestsByRepoIdSumNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_NUMBER_ASC',
  GithubPullRequestsByRepoIdSumNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_NUMBER_DESC',
  GithubPullRequestsByRepoIdSumParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdSumParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdSumPublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdSumPublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdSumRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_REPO_ID_ASC',
  GithubPullRequestsByRepoIdSumRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_REPO_ID_DESC',
  GithubPullRequestsByRepoIdSumReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdSumReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdSumStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_STATE_ASC',
  GithubPullRequestsByRepoIdSumStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_STATE_DESC',
  GithubPullRequestsByRepoIdSumTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_TITLE_ASC',
  GithubPullRequestsByRepoIdSumTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_TITLE_DESC',
  GithubPullRequestsByRepoIdSumUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdSumUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdSumUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_URL_ASC',
  GithubPullRequestsByRepoIdSumUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_SUM_URL_DESC',
  GithubPullRequestsByRepoIdVariancePopulationAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdVariancePopulationAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdVariancePopulationAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdVariancePopulationBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdVariancePopulationBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdVariancePopulationBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdVariancePopulationBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdVariancePopulationBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdVariancePopulationBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdVariancePopulationBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BODY_ASC',
  GithubPullRequestsByRepoIdVariancePopulationBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_BODY_DESC',
  GithubPullRequestsByRepoIdVariancePopulationChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdVariancePopulationChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdVariancePopulationClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_ASC',
  GithubPullRequestsByRepoIdVariancePopulationClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CLOSED_DESC',
  GithubPullRequestsByRepoIdVariancePopulationCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdVariancePopulationCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdVariancePopulationDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdVariancePopulationDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdVariancePopulationDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_DELETIONS_ASC',
  GithubPullRequestsByRepoIdVariancePopulationDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_DELETIONS_DESC',
  GithubPullRequestsByRepoIdVariancePopulationEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdVariancePopulationEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdVariancePopulationHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdVariancePopulationHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdVariancePopulationHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdVariancePopulationHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdVariancePopulationHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdVariancePopulationHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdVariancePopulationIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_LOCKED_ASC',
  GithubPullRequestsByRepoIdVariancePopulationLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_LOCKED_DESC',
  GithubPullRequestsByRepoIdVariancePopulationMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdVariancePopulationMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdVariancePopulationMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdVariancePopulationMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdVariancePopulationMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdVariancePopulationMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdVariancePopulationMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGED_ASC',
  GithubPullRequestsByRepoIdVariancePopulationMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdVariancePopulationMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdVariancePopulationMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_MERGED_DESC',
  GithubPullRequestsByRepoIdVariancePopulationNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_NUMBER_ASC',
  GithubPullRequestsByRepoIdVariancePopulationNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_NUMBER_DESC',
  GithubPullRequestsByRepoIdVariancePopulationParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationPublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationPublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_ASC',
  GithubPullRequestsByRepoIdVariancePopulationRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_DESC',
  GithubPullRequestsByRepoIdVariancePopulationReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdVariancePopulationReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdVariancePopulationStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_STATE_ASC',
  GithubPullRequestsByRepoIdVariancePopulationStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_STATE_DESC',
  GithubPullRequestsByRepoIdVariancePopulationTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_TITLE_ASC',
  GithubPullRequestsByRepoIdVariancePopulationTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_TITLE_DESC',
  GithubPullRequestsByRepoIdVariancePopulationUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdVariancePopulationUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdVariancePopulationUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_URL_ASC',
  GithubPullRequestsByRepoIdVariancePopulationUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_POPULATION_URL_DESC',
  GithubPullRequestsByRepoIdVarianceSampleAdditionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_ADDITIONS_ASC',
  GithubPullRequestsByRepoIdVarianceSampleAdditionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_ADDITIONS_DESC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorAssociationAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_ASSOCIATION_ASC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorAssociationDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_ASSOCIATION_DESC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorAvatarUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_AVATAR_URL_ASC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorAvatarUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_AVATAR_URL_DESC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_NAME_ASC',
  GithubPullRequestsByRepoIdVarianceSampleAuthorNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_NAME_DESC',
  GithubPullRequestsByRepoIdVarianceSampleBaseRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BASE_REF_NAME_ASC',
  GithubPullRequestsByRepoIdVarianceSampleBaseRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BASE_REF_NAME_DESC',
  GithubPullRequestsByRepoIdVarianceSampleBaseRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BASE_REF_OID_ASC',
  GithubPullRequestsByRepoIdVarianceSampleBaseRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BASE_REF_OID_DESC',
  GithubPullRequestsByRepoIdVarianceSampleBaseRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BASE_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdVarianceSampleBaseRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BASE_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdVarianceSampleBodyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BODY_ASC',
  GithubPullRequestsByRepoIdVarianceSampleBodyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_BODY_DESC',
  GithubPullRequestsByRepoIdVarianceSampleChangedFilesAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CHANGED_FILES_ASC',
  GithubPullRequestsByRepoIdVarianceSampleChangedFilesDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CHANGED_FILES_DESC',
  GithubPullRequestsByRepoIdVarianceSampleClosedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_ASC',
  GithubPullRequestsByRepoIdVarianceSampleClosedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_AT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleClosedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_AT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleClosedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CLOSED_DESC',
  GithubPullRequestsByRepoIdVarianceSampleCommentCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_COMMENT_COUNT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleCommentCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_COMMENT_COUNT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleCommitCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_COMMIT_COUNT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleCommitCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_COMMIT_COUNT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleCreatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleCreatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleCreatedViaEmailAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_VIA_EMAIL_ASC',
  GithubPullRequestsByRepoIdVarianceSampleCreatedViaEmailDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_VIA_EMAIL_DESC',
  GithubPullRequestsByRepoIdVarianceSampleDatabaseIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_DATABASE_ID_ASC',
  GithubPullRequestsByRepoIdVarianceSampleDatabaseIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_DATABASE_ID_DESC',
  GithubPullRequestsByRepoIdVarianceSampleDeletionsAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_DELETIONS_ASC',
  GithubPullRequestsByRepoIdVarianceSampleDeletionsDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_DELETIONS_DESC',
  GithubPullRequestsByRepoIdVarianceSampleEditorLoginAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_EDITOR_LOGIN_ASC',
  GithubPullRequestsByRepoIdVarianceSampleEditorLoginDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_EDITOR_LOGIN_DESC',
  GithubPullRequestsByRepoIdVarianceSampleHeadRefNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_HEAD_REF_NAME_ASC',
  GithubPullRequestsByRepoIdVarianceSampleHeadRefNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_HEAD_REF_NAME_DESC',
  GithubPullRequestsByRepoIdVarianceSampleHeadRefOidAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_HEAD_REF_OID_ASC',
  GithubPullRequestsByRepoIdVarianceSampleHeadRefOidDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_HEAD_REF_OID_DESC',
  GithubPullRequestsByRepoIdVarianceSampleHeadRepositoryNameAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_HEAD_REPOSITORY_NAME_ASC',
  GithubPullRequestsByRepoIdVarianceSampleHeadRepositoryNameDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_HEAD_REPOSITORY_NAME_DESC',
  GithubPullRequestsByRepoIdVarianceSampleIsDraftAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_IS_DRAFT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleIsDraftDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_IS_DRAFT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleLabelCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_LABEL_COUNT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleLabelCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_LABEL_COUNT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleLastEditedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_LAST_EDITED_AT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleLastEditedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_LAST_EDITED_AT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleLockedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_LOCKED_ASC',
  GithubPullRequestsByRepoIdVarianceSampleLockedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_LOCKED_DESC',
  GithubPullRequestsByRepoIdVarianceSampleMaintainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MAINTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdVarianceSampleMaintainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MAINTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdVarianceSampleMantainerCanModifyAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MANTAINER_CAN_MODIFY_ASC',
  GithubPullRequestsByRepoIdVarianceSampleMantainerCanModifyDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MANTAINER_CAN_MODIFY_DESC',
  GithubPullRequestsByRepoIdVarianceSampleMergeableAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGEABLE_ASC',
  GithubPullRequestsByRepoIdVarianceSampleMergeableDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGEABLE_DESC',
  GithubPullRequestsByRepoIdVarianceSampleMergedAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGED_ASC',
  GithubPullRequestsByRepoIdVarianceSampleMergedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGED_AT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleMergedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGED_AT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleMergedByAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGED_BY_ASC',
  GithubPullRequestsByRepoIdVarianceSampleMergedByDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGED_BY_DESC',
  GithubPullRequestsByRepoIdVarianceSampleMergedDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_MERGED_DESC',
  GithubPullRequestsByRepoIdVarianceSampleNumberAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_NUMBER_ASC',
  GithubPullRequestsByRepoIdVarianceSampleNumberDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_NUMBER_DESC',
  GithubPullRequestsByRepoIdVarianceSampleParticipantCountAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_PARTICIPANT_COUNT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleParticipantCountDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_PARTICIPANT_COUNT_DESC',
  GithubPullRequestsByRepoIdVarianceSamplePublishedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_PUBLISHED_AT_ASC',
  GithubPullRequestsByRepoIdVarianceSamplePublishedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_PUBLISHED_AT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleRepoIdAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_ASC',
  GithubPullRequestsByRepoIdVarianceSampleRepoIdDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_DESC',
  GithubPullRequestsByRepoIdVarianceSampleReviewDecisionAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_REVIEW_DECISION_ASC',
  GithubPullRequestsByRepoIdVarianceSampleReviewDecisionDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_REVIEW_DECISION_DESC',
  GithubPullRequestsByRepoIdVarianceSampleStateAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_STATE_ASC',
  GithubPullRequestsByRepoIdVarianceSampleStateDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_STATE_DESC',
  GithubPullRequestsByRepoIdVarianceSampleTitleAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_TITLE_ASC',
  GithubPullRequestsByRepoIdVarianceSampleTitleDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_TITLE_DESC',
  GithubPullRequestsByRepoIdVarianceSampleUpdatedAtAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  GithubPullRequestsByRepoIdVarianceSampleUpdatedAtDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  GithubPullRequestsByRepoIdVarianceSampleUrlAsc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_URL_ASC',
  GithubPullRequestsByRepoIdVarianceSampleUrlDesc = 'GITHUB_PULL_REQUESTS_BY_REPO_ID_VARIANCE_SAMPLE_URL_DESC',
  GithubStargazersByRepoIdAverageAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_AVATAR_URL_ASC',
  GithubStargazersByRepoIdAverageAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_AVATAR_URL_DESC',
  GithubStargazersByRepoIdAverageBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_BIO_ASC',
  GithubStargazersByRepoIdAverageBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_BIO_DESC',
  GithubStargazersByRepoIdAverageCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_COMPANY_ASC',
  GithubStargazersByRepoIdAverageCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_COMPANY_DESC',
  GithubStargazersByRepoIdAverageCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_CREATED_AT_ASC',
  GithubStargazersByRepoIdAverageCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_CREATED_AT_DESC',
  GithubStargazersByRepoIdAverageEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_EMAIL_ASC',
  GithubStargazersByRepoIdAverageEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_EMAIL_DESC',
  GithubStargazersByRepoIdAverageLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_LOCATION_ASC',
  GithubStargazersByRepoIdAverageLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_LOCATION_DESC',
  GithubStargazersByRepoIdAverageLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_LOGIN_ASC',
  GithubStargazersByRepoIdAverageLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_LOGIN_DESC',
  GithubStargazersByRepoIdAverageNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_NAME_ASC',
  GithubStargazersByRepoIdAverageNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_NAME_DESC',
  GithubStargazersByRepoIdAverageRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_REPO_ID_ASC',
  GithubStargazersByRepoIdAverageRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_REPO_ID_DESC',
  GithubStargazersByRepoIdAverageStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_STARRED_AT_ASC',
  GithubStargazersByRepoIdAverageStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_STARRED_AT_DESC',
  GithubStargazersByRepoIdAverageTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_TWITTER_ASC',
  GithubStargazersByRepoIdAverageTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_TWITTER_DESC',
  GithubStargazersByRepoIdAverageUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_UPDATED_AT_ASC',
  GithubStargazersByRepoIdAverageUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_UPDATED_AT_DESC',
  GithubStargazersByRepoIdAverageWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_WEBSITE_ASC',
  GithubStargazersByRepoIdAverageWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_AVERAGE_WEBSITE_DESC',
  GithubStargazersByRepoIdCountAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_COUNT_ASC',
  GithubStargazersByRepoIdCountDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_COUNT_DESC',
  GithubStargazersByRepoIdDistinctCountAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_AVATAR_URL_ASC',
  GithubStargazersByRepoIdDistinctCountAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_AVATAR_URL_DESC',
  GithubStargazersByRepoIdDistinctCountBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_BIO_ASC',
  GithubStargazersByRepoIdDistinctCountBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_BIO_DESC',
  GithubStargazersByRepoIdDistinctCountCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_COMPANY_ASC',
  GithubStargazersByRepoIdDistinctCountCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_COMPANY_DESC',
  GithubStargazersByRepoIdDistinctCountCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  GithubStargazersByRepoIdDistinctCountCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  GithubStargazersByRepoIdDistinctCountEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_EMAIL_ASC',
  GithubStargazersByRepoIdDistinctCountEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_EMAIL_DESC',
  GithubStargazersByRepoIdDistinctCountLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_LOCATION_ASC',
  GithubStargazersByRepoIdDistinctCountLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_LOCATION_DESC',
  GithubStargazersByRepoIdDistinctCountLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_LOGIN_ASC',
  GithubStargazersByRepoIdDistinctCountLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_LOGIN_DESC',
  GithubStargazersByRepoIdDistinctCountNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_NAME_ASC',
  GithubStargazersByRepoIdDistinctCountNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_NAME_DESC',
  GithubStargazersByRepoIdDistinctCountRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_ASC',
  GithubStargazersByRepoIdDistinctCountRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_DESC',
  GithubStargazersByRepoIdDistinctCountStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_STARRED_AT_ASC',
  GithubStargazersByRepoIdDistinctCountStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_STARRED_AT_DESC',
  GithubStargazersByRepoIdDistinctCountTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_TWITTER_ASC',
  GithubStargazersByRepoIdDistinctCountTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_TWITTER_DESC',
  GithubStargazersByRepoIdDistinctCountUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  GithubStargazersByRepoIdDistinctCountUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  GithubStargazersByRepoIdDistinctCountWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_WEBSITE_ASC',
  GithubStargazersByRepoIdDistinctCountWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_DISTINCT_COUNT_WEBSITE_DESC',
  GithubStargazersByRepoIdMaxAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_AVATAR_URL_ASC',
  GithubStargazersByRepoIdMaxAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_AVATAR_URL_DESC',
  GithubStargazersByRepoIdMaxBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_BIO_ASC',
  GithubStargazersByRepoIdMaxBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_BIO_DESC',
  GithubStargazersByRepoIdMaxCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_COMPANY_ASC',
  GithubStargazersByRepoIdMaxCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_COMPANY_DESC',
  GithubStargazersByRepoIdMaxCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_CREATED_AT_ASC',
  GithubStargazersByRepoIdMaxCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_CREATED_AT_DESC',
  GithubStargazersByRepoIdMaxEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_EMAIL_ASC',
  GithubStargazersByRepoIdMaxEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_EMAIL_DESC',
  GithubStargazersByRepoIdMaxLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_LOCATION_ASC',
  GithubStargazersByRepoIdMaxLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_LOCATION_DESC',
  GithubStargazersByRepoIdMaxLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_LOGIN_ASC',
  GithubStargazersByRepoIdMaxLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_LOGIN_DESC',
  GithubStargazersByRepoIdMaxNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_NAME_ASC',
  GithubStargazersByRepoIdMaxNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_NAME_DESC',
  GithubStargazersByRepoIdMaxRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_REPO_ID_ASC',
  GithubStargazersByRepoIdMaxRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_REPO_ID_DESC',
  GithubStargazersByRepoIdMaxStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_STARRED_AT_ASC',
  GithubStargazersByRepoIdMaxStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_STARRED_AT_DESC',
  GithubStargazersByRepoIdMaxTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_TWITTER_ASC',
  GithubStargazersByRepoIdMaxTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_TWITTER_DESC',
  GithubStargazersByRepoIdMaxUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_UPDATED_AT_ASC',
  GithubStargazersByRepoIdMaxUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_UPDATED_AT_DESC',
  GithubStargazersByRepoIdMaxWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_WEBSITE_ASC',
  GithubStargazersByRepoIdMaxWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MAX_WEBSITE_DESC',
  GithubStargazersByRepoIdMinAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_AVATAR_URL_ASC',
  GithubStargazersByRepoIdMinAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_AVATAR_URL_DESC',
  GithubStargazersByRepoIdMinBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_BIO_ASC',
  GithubStargazersByRepoIdMinBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_BIO_DESC',
  GithubStargazersByRepoIdMinCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_COMPANY_ASC',
  GithubStargazersByRepoIdMinCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_COMPANY_DESC',
  GithubStargazersByRepoIdMinCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_CREATED_AT_ASC',
  GithubStargazersByRepoIdMinCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_CREATED_AT_DESC',
  GithubStargazersByRepoIdMinEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_EMAIL_ASC',
  GithubStargazersByRepoIdMinEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_EMAIL_DESC',
  GithubStargazersByRepoIdMinLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_LOCATION_ASC',
  GithubStargazersByRepoIdMinLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_LOCATION_DESC',
  GithubStargazersByRepoIdMinLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_LOGIN_ASC',
  GithubStargazersByRepoIdMinLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_LOGIN_DESC',
  GithubStargazersByRepoIdMinNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_NAME_ASC',
  GithubStargazersByRepoIdMinNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_NAME_DESC',
  GithubStargazersByRepoIdMinRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_REPO_ID_ASC',
  GithubStargazersByRepoIdMinRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_REPO_ID_DESC',
  GithubStargazersByRepoIdMinStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_STARRED_AT_ASC',
  GithubStargazersByRepoIdMinStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_STARRED_AT_DESC',
  GithubStargazersByRepoIdMinTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_TWITTER_ASC',
  GithubStargazersByRepoIdMinTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_TWITTER_DESC',
  GithubStargazersByRepoIdMinUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_UPDATED_AT_ASC',
  GithubStargazersByRepoIdMinUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_UPDATED_AT_DESC',
  GithubStargazersByRepoIdMinWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_WEBSITE_ASC',
  GithubStargazersByRepoIdMinWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_MIN_WEBSITE_DESC',
  GithubStargazersByRepoIdStddevPopulationAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_AVATAR_URL_ASC',
  GithubStargazersByRepoIdStddevPopulationAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_AVATAR_URL_DESC',
  GithubStargazersByRepoIdStddevPopulationBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_BIO_ASC',
  GithubStargazersByRepoIdStddevPopulationBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_BIO_DESC',
  GithubStargazersByRepoIdStddevPopulationCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_COMPANY_ASC',
  GithubStargazersByRepoIdStddevPopulationCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_COMPANY_DESC',
  GithubStargazersByRepoIdStddevPopulationCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  GithubStargazersByRepoIdStddevPopulationCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  GithubStargazersByRepoIdStddevPopulationEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_EMAIL_ASC',
  GithubStargazersByRepoIdStddevPopulationEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_EMAIL_DESC',
  GithubStargazersByRepoIdStddevPopulationLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_LOCATION_ASC',
  GithubStargazersByRepoIdStddevPopulationLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_LOCATION_DESC',
  GithubStargazersByRepoIdStddevPopulationLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_LOGIN_ASC',
  GithubStargazersByRepoIdStddevPopulationLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_LOGIN_DESC',
  GithubStargazersByRepoIdStddevPopulationNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_NAME_ASC',
  GithubStargazersByRepoIdStddevPopulationNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_NAME_DESC',
  GithubStargazersByRepoIdStddevPopulationRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_ASC',
  GithubStargazersByRepoIdStddevPopulationRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_DESC',
  GithubStargazersByRepoIdStddevPopulationStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_STARRED_AT_ASC',
  GithubStargazersByRepoIdStddevPopulationStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_STARRED_AT_DESC',
  GithubStargazersByRepoIdStddevPopulationTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_TWITTER_ASC',
  GithubStargazersByRepoIdStddevPopulationTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_TWITTER_DESC',
  GithubStargazersByRepoIdStddevPopulationUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_UPDATED_AT_ASC',
  GithubStargazersByRepoIdStddevPopulationUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_UPDATED_AT_DESC',
  GithubStargazersByRepoIdStddevPopulationWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_WEBSITE_ASC',
  GithubStargazersByRepoIdStddevPopulationWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_POPULATION_WEBSITE_DESC',
  GithubStargazersByRepoIdStddevSampleAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_AVATAR_URL_ASC',
  GithubStargazersByRepoIdStddevSampleAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_AVATAR_URL_DESC',
  GithubStargazersByRepoIdStddevSampleBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_BIO_ASC',
  GithubStargazersByRepoIdStddevSampleBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_BIO_DESC',
  GithubStargazersByRepoIdStddevSampleCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_COMPANY_ASC',
  GithubStargazersByRepoIdStddevSampleCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_COMPANY_DESC',
  GithubStargazersByRepoIdStddevSampleCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  GithubStargazersByRepoIdStddevSampleCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  GithubStargazersByRepoIdStddevSampleEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_EMAIL_ASC',
  GithubStargazersByRepoIdStddevSampleEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_EMAIL_DESC',
  GithubStargazersByRepoIdStddevSampleLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_LOCATION_ASC',
  GithubStargazersByRepoIdStddevSampleLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_LOCATION_DESC',
  GithubStargazersByRepoIdStddevSampleLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_LOGIN_ASC',
  GithubStargazersByRepoIdStddevSampleLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_LOGIN_DESC',
  GithubStargazersByRepoIdStddevSampleNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_NAME_ASC',
  GithubStargazersByRepoIdStddevSampleNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_NAME_DESC',
  GithubStargazersByRepoIdStddevSampleRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_ASC',
  GithubStargazersByRepoIdStddevSampleRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_DESC',
  GithubStargazersByRepoIdStddevSampleStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_STARRED_AT_ASC',
  GithubStargazersByRepoIdStddevSampleStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_STARRED_AT_DESC',
  GithubStargazersByRepoIdStddevSampleTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_TWITTER_ASC',
  GithubStargazersByRepoIdStddevSampleTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_TWITTER_DESC',
  GithubStargazersByRepoIdStddevSampleUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_UPDATED_AT_ASC',
  GithubStargazersByRepoIdStddevSampleUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_UPDATED_AT_DESC',
  GithubStargazersByRepoIdStddevSampleWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_WEBSITE_ASC',
  GithubStargazersByRepoIdStddevSampleWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_STDDEV_SAMPLE_WEBSITE_DESC',
  GithubStargazersByRepoIdSumAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_AVATAR_URL_ASC',
  GithubStargazersByRepoIdSumAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_AVATAR_URL_DESC',
  GithubStargazersByRepoIdSumBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_BIO_ASC',
  GithubStargazersByRepoIdSumBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_BIO_DESC',
  GithubStargazersByRepoIdSumCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_COMPANY_ASC',
  GithubStargazersByRepoIdSumCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_COMPANY_DESC',
  GithubStargazersByRepoIdSumCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_CREATED_AT_ASC',
  GithubStargazersByRepoIdSumCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_CREATED_AT_DESC',
  GithubStargazersByRepoIdSumEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_EMAIL_ASC',
  GithubStargazersByRepoIdSumEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_EMAIL_DESC',
  GithubStargazersByRepoIdSumLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_LOCATION_ASC',
  GithubStargazersByRepoIdSumLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_LOCATION_DESC',
  GithubStargazersByRepoIdSumLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_LOGIN_ASC',
  GithubStargazersByRepoIdSumLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_LOGIN_DESC',
  GithubStargazersByRepoIdSumNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_NAME_ASC',
  GithubStargazersByRepoIdSumNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_NAME_DESC',
  GithubStargazersByRepoIdSumRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_REPO_ID_ASC',
  GithubStargazersByRepoIdSumRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_REPO_ID_DESC',
  GithubStargazersByRepoIdSumStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_STARRED_AT_ASC',
  GithubStargazersByRepoIdSumStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_STARRED_AT_DESC',
  GithubStargazersByRepoIdSumTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_TWITTER_ASC',
  GithubStargazersByRepoIdSumTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_TWITTER_DESC',
  GithubStargazersByRepoIdSumUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_UPDATED_AT_ASC',
  GithubStargazersByRepoIdSumUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_UPDATED_AT_DESC',
  GithubStargazersByRepoIdSumWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_WEBSITE_ASC',
  GithubStargazersByRepoIdSumWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_SUM_WEBSITE_DESC',
  GithubStargazersByRepoIdVariancePopulationAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_AVATAR_URL_ASC',
  GithubStargazersByRepoIdVariancePopulationAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_AVATAR_URL_DESC',
  GithubStargazersByRepoIdVariancePopulationBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_BIO_ASC',
  GithubStargazersByRepoIdVariancePopulationBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_BIO_DESC',
  GithubStargazersByRepoIdVariancePopulationCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_COMPANY_ASC',
  GithubStargazersByRepoIdVariancePopulationCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_COMPANY_DESC',
  GithubStargazersByRepoIdVariancePopulationCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  GithubStargazersByRepoIdVariancePopulationCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  GithubStargazersByRepoIdVariancePopulationEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_EMAIL_ASC',
  GithubStargazersByRepoIdVariancePopulationEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_EMAIL_DESC',
  GithubStargazersByRepoIdVariancePopulationLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_LOCATION_ASC',
  GithubStargazersByRepoIdVariancePopulationLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_LOCATION_DESC',
  GithubStargazersByRepoIdVariancePopulationLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_LOGIN_ASC',
  GithubStargazersByRepoIdVariancePopulationLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_LOGIN_DESC',
  GithubStargazersByRepoIdVariancePopulationNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_NAME_ASC',
  GithubStargazersByRepoIdVariancePopulationNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_NAME_DESC',
  GithubStargazersByRepoIdVariancePopulationRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_ASC',
  GithubStargazersByRepoIdVariancePopulationRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_DESC',
  GithubStargazersByRepoIdVariancePopulationStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_STARRED_AT_ASC',
  GithubStargazersByRepoIdVariancePopulationStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_STARRED_AT_DESC',
  GithubStargazersByRepoIdVariancePopulationTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_TWITTER_ASC',
  GithubStargazersByRepoIdVariancePopulationTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_TWITTER_DESC',
  GithubStargazersByRepoIdVariancePopulationUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_UPDATED_AT_ASC',
  GithubStargazersByRepoIdVariancePopulationUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_UPDATED_AT_DESC',
  GithubStargazersByRepoIdVariancePopulationWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_WEBSITE_ASC',
  GithubStargazersByRepoIdVariancePopulationWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_POPULATION_WEBSITE_DESC',
  GithubStargazersByRepoIdVarianceSampleAvatarUrlAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_AVATAR_URL_ASC',
  GithubStargazersByRepoIdVarianceSampleAvatarUrlDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_AVATAR_URL_DESC',
  GithubStargazersByRepoIdVarianceSampleBioAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_BIO_ASC',
  GithubStargazersByRepoIdVarianceSampleBioDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_BIO_DESC',
  GithubStargazersByRepoIdVarianceSampleCompanyAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_COMPANY_ASC',
  GithubStargazersByRepoIdVarianceSampleCompanyDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_COMPANY_DESC',
  GithubStargazersByRepoIdVarianceSampleCreatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  GithubStargazersByRepoIdVarianceSampleCreatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  GithubStargazersByRepoIdVarianceSampleEmailAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_EMAIL_ASC',
  GithubStargazersByRepoIdVarianceSampleEmailDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_EMAIL_DESC',
  GithubStargazersByRepoIdVarianceSampleLocationAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_LOCATION_ASC',
  GithubStargazersByRepoIdVarianceSampleLocationDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_LOCATION_DESC',
  GithubStargazersByRepoIdVarianceSampleLoginAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_LOGIN_ASC',
  GithubStargazersByRepoIdVarianceSampleLoginDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_LOGIN_DESC',
  GithubStargazersByRepoIdVarianceSampleNameAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_NAME_ASC',
  GithubStargazersByRepoIdVarianceSampleNameDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_NAME_DESC',
  GithubStargazersByRepoIdVarianceSampleRepoIdAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_ASC',
  GithubStargazersByRepoIdVarianceSampleRepoIdDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_DESC',
  GithubStargazersByRepoIdVarianceSampleStarredAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_STARRED_AT_ASC',
  GithubStargazersByRepoIdVarianceSampleStarredAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_STARRED_AT_DESC',
  GithubStargazersByRepoIdVarianceSampleTwitterAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_TWITTER_ASC',
  GithubStargazersByRepoIdVarianceSampleTwitterDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_TWITTER_DESC',
  GithubStargazersByRepoIdVarianceSampleUpdatedAtAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  GithubStargazersByRepoIdVarianceSampleUpdatedAtDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  GithubStargazersByRepoIdVarianceSampleWebsiteAsc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_WEBSITE_ASC',
  GithubStargazersByRepoIdVarianceSampleWebsiteDesc = 'GITHUB_STARGAZERS_BY_REPO_ID_VARIANCE_SAMPLE_WEBSITE_DESC',
  GitCommitsByRepoIdAverageAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdAverageAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdAverageAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdAverageAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdAverageAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdAverageAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdAverageCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdAverageCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdAverageCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdAverageCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdAverageCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdAverageCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdAverageHashAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_HASH_ASC',
  GitCommitsByRepoIdAverageHashDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_HASH_DESC',
  GitCommitsByRepoIdAverageMessageAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_MESSAGE_ASC',
  GitCommitsByRepoIdAverageMessageDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_MESSAGE_DESC',
  GitCommitsByRepoIdAverageParentsAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_PARENTS_ASC',
  GitCommitsByRepoIdAverageParentsDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_PARENTS_DESC',
  GitCommitsByRepoIdAverageRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_REPO_ID_ASC',
  GitCommitsByRepoIdAverageRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_AVERAGE_REPO_ID_DESC',
  GitCommitsByRepoIdCountAsc = 'GIT_COMMITS_BY_REPO_ID_COUNT_ASC',
  GitCommitsByRepoIdCountDesc = 'GIT_COMMITS_BY_REPO_ID_COUNT_DESC',
  GitCommitsByRepoIdDistinctCountAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdDistinctCountAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdDistinctCountAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdDistinctCountAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdDistinctCountAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdDistinctCountAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdDistinctCountCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdDistinctCountCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdDistinctCountCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdDistinctCountCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdDistinctCountCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdDistinctCountCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdDistinctCountHashAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_HASH_ASC',
  GitCommitsByRepoIdDistinctCountHashDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_HASH_DESC',
  GitCommitsByRepoIdDistinctCountMessageAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_MESSAGE_ASC',
  GitCommitsByRepoIdDistinctCountMessageDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_MESSAGE_DESC',
  GitCommitsByRepoIdDistinctCountParentsAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_PARENTS_ASC',
  GitCommitsByRepoIdDistinctCountParentsDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_PARENTS_DESC',
  GitCommitsByRepoIdDistinctCountRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_ASC',
  GitCommitsByRepoIdDistinctCountRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_DESC',
  GitCommitsByRepoIdMaxAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdMaxAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdMaxAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdMaxAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdMaxAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdMaxAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdMaxCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdMaxCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdMaxCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdMaxCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdMaxCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdMaxCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdMaxHashAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_HASH_ASC',
  GitCommitsByRepoIdMaxHashDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_HASH_DESC',
  GitCommitsByRepoIdMaxMessageAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_MESSAGE_ASC',
  GitCommitsByRepoIdMaxMessageDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_MESSAGE_DESC',
  GitCommitsByRepoIdMaxParentsAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_PARENTS_ASC',
  GitCommitsByRepoIdMaxParentsDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_PARENTS_DESC',
  GitCommitsByRepoIdMaxRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_MAX_REPO_ID_ASC',
  GitCommitsByRepoIdMaxRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_MAX_REPO_ID_DESC',
  GitCommitsByRepoIdMinAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdMinAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdMinAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdMinAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdMinAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdMinAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdMinCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdMinCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdMinCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdMinCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdMinCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdMinCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdMinHashAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_HASH_ASC',
  GitCommitsByRepoIdMinHashDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_HASH_DESC',
  GitCommitsByRepoIdMinMessageAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_MESSAGE_ASC',
  GitCommitsByRepoIdMinMessageDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_MESSAGE_DESC',
  GitCommitsByRepoIdMinParentsAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_PARENTS_ASC',
  GitCommitsByRepoIdMinParentsDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_PARENTS_DESC',
  GitCommitsByRepoIdMinRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_MIN_REPO_ID_ASC',
  GitCommitsByRepoIdMinRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_MIN_REPO_ID_DESC',
  GitCommitsByRepoIdStddevPopulationAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdStddevPopulationAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdStddevPopulationAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdStddevPopulationAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdStddevPopulationAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdStddevPopulationAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdStddevPopulationCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdStddevPopulationCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdStddevPopulationCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdStddevPopulationCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdStddevPopulationCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdStddevPopulationCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdStddevPopulationHashAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_HASH_ASC',
  GitCommitsByRepoIdStddevPopulationHashDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_HASH_DESC',
  GitCommitsByRepoIdStddevPopulationMessageAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_MESSAGE_ASC',
  GitCommitsByRepoIdStddevPopulationMessageDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_MESSAGE_DESC',
  GitCommitsByRepoIdStddevPopulationParentsAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_PARENTS_ASC',
  GitCommitsByRepoIdStddevPopulationParentsDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_PARENTS_DESC',
  GitCommitsByRepoIdStddevPopulationRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_ASC',
  GitCommitsByRepoIdStddevPopulationRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_DESC',
  GitCommitsByRepoIdStddevSampleAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdStddevSampleAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdStddevSampleAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdStddevSampleAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdStddevSampleAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdStddevSampleAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdStddevSampleCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdStddevSampleCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdStddevSampleCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdStddevSampleCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdStddevSampleCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdStddevSampleCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdStddevSampleHashAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_HASH_ASC',
  GitCommitsByRepoIdStddevSampleHashDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_HASH_DESC',
  GitCommitsByRepoIdStddevSampleMessageAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_MESSAGE_ASC',
  GitCommitsByRepoIdStddevSampleMessageDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_MESSAGE_DESC',
  GitCommitsByRepoIdStddevSampleParentsAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_PARENTS_ASC',
  GitCommitsByRepoIdStddevSampleParentsDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_PARENTS_DESC',
  GitCommitsByRepoIdStddevSampleRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_ASC',
  GitCommitsByRepoIdStddevSampleRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_DESC',
  GitCommitsByRepoIdSumAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdSumAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdSumAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdSumAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdSumAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdSumAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdSumCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdSumCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdSumCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdSumCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdSumCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdSumCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdSumHashAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_HASH_ASC',
  GitCommitsByRepoIdSumHashDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_HASH_DESC',
  GitCommitsByRepoIdSumMessageAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_MESSAGE_ASC',
  GitCommitsByRepoIdSumMessageDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_MESSAGE_DESC',
  GitCommitsByRepoIdSumParentsAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_PARENTS_ASC',
  GitCommitsByRepoIdSumParentsDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_PARENTS_DESC',
  GitCommitsByRepoIdSumRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_SUM_REPO_ID_ASC',
  GitCommitsByRepoIdSumRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_SUM_REPO_ID_DESC',
  GitCommitsByRepoIdVariancePopulationAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdVariancePopulationAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdVariancePopulationAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdVariancePopulationAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdVariancePopulationAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdVariancePopulationAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdVariancePopulationCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdVariancePopulationCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdVariancePopulationCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdVariancePopulationCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdVariancePopulationCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdVariancePopulationCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdVariancePopulationHashAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_HASH_ASC',
  GitCommitsByRepoIdVariancePopulationHashDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_HASH_DESC',
  GitCommitsByRepoIdVariancePopulationMessageAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_MESSAGE_ASC',
  GitCommitsByRepoIdVariancePopulationMessageDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_MESSAGE_DESC',
  GitCommitsByRepoIdVariancePopulationParentsAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_PARENTS_ASC',
  GitCommitsByRepoIdVariancePopulationParentsDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_PARENTS_DESC',
  GitCommitsByRepoIdVariancePopulationRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_ASC',
  GitCommitsByRepoIdVariancePopulationRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_DESC',
  GitCommitsByRepoIdVarianceSampleAuthorEmailAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_EMAIL_ASC',
  GitCommitsByRepoIdVarianceSampleAuthorEmailDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_EMAIL_DESC',
  GitCommitsByRepoIdVarianceSampleAuthorNameAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_NAME_ASC',
  GitCommitsByRepoIdVarianceSampleAuthorNameDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_NAME_DESC',
  GitCommitsByRepoIdVarianceSampleAuthorWhenAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_WHEN_ASC',
  GitCommitsByRepoIdVarianceSampleAuthorWhenDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_AUTHOR_WHEN_DESC',
  GitCommitsByRepoIdVarianceSampleCommitterEmailAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_COMMITTER_EMAIL_ASC',
  GitCommitsByRepoIdVarianceSampleCommitterEmailDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_COMMITTER_EMAIL_DESC',
  GitCommitsByRepoIdVarianceSampleCommitterNameAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_COMMITTER_NAME_ASC',
  GitCommitsByRepoIdVarianceSampleCommitterNameDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_COMMITTER_NAME_DESC',
  GitCommitsByRepoIdVarianceSampleCommitterWhenAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_COMMITTER_WHEN_ASC',
  GitCommitsByRepoIdVarianceSampleCommitterWhenDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_COMMITTER_WHEN_DESC',
  GitCommitsByRepoIdVarianceSampleHashAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_HASH_ASC',
  GitCommitsByRepoIdVarianceSampleHashDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_HASH_DESC',
  GitCommitsByRepoIdVarianceSampleMessageAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_MESSAGE_ASC',
  GitCommitsByRepoIdVarianceSampleMessageDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_MESSAGE_DESC',
  GitCommitsByRepoIdVarianceSampleParentsAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_PARENTS_ASC',
  GitCommitsByRepoIdVarianceSampleParentsDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_PARENTS_DESC',
  GitCommitsByRepoIdVarianceSampleRepoIdAsc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_ASC',
  GitCommitsByRepoIdVarianceSampleRepoIdDesc = 'GIT_COMMITS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_DESC',
  GitCommitStatsByRepoIdAverageAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_ADDITIONS_ASC',
  GitCommitStatsByRepoIdAverageAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_ADDITIONS_DESC',
  GitCommitStatsByRepoIdAverageCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdAverageCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdAverageDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_DELETIONS_ASC',
  GitCommitStatsByRepoIdAverageDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_DELETIONS_DESC',
  GitCommitStatsByRepoIdAverageFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_FILE_PATH_ASC',
  GitCommitStatsByRepoIdAverageFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_FILE_PATH_DESC',
  GitCommitStatsByRepoIdAverageRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_REPO_ID_ASC',
  GitCommitStatsByRepoIdAverageRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_AVERAGE_REPO_ID_DESC',
  GitCommitStatsByRepoIdCountAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_COUNT_ASC',
  GitCommitStatsByRepoIdCountDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_COUNT_DESC',
  GitCommitStatsByRepoIdDistinctCountAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_ADDITIONS_ASC',
  GitCommitStatsByRepoIdDistinctCountAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_ADDITIONS_DESC',
  GitCommitStatsByRepoIdDistinctCountCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdDistinctCountCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdDistinctCountDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_DELETIONS_ASC',
  GitCommitStatsByRepoIdDistinctCountDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_DELETIONS_DESC',
  GitCommitStatsByRepoIdDistinctCountFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_FILE_PATH_ASC',
  GitCommitStatsByRepoIdDistinctCountFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_FILE_PATH_DESC',
  GitCommitStatsByRepoIdDistinctCountRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_ASC',
  GitCommitStatsByRepoIdDistinctCountRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_DESC',
  GitCommitStatsByRepoIdMaxAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_ADDITIONS_ASC',
  GitCommitStatsByRepoIdMaxAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_ADDITIONS_DESC',
  GitCommitStatsByRepoIdMaxCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdMaxCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdMaxDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_DELETIONS_ASC',
  GitCommitStatsByRepoIdMaxDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_DELETIONS_DESC',
  GitCommitStatsByRepoIdMaxFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_FILE_PATH_ASC',
  GitCommitStatsByRepoIdMaxFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_FILE_PATH_DESC',
  GitCommitStatsByRepoIdMaxRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_REPO_ID_ASC',
  GitCommitStatsByRepoIdMaxRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MAX_REPO_ID_DESC',
  GitCommitStatsByRepoIdMinAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_ADDITIONS_ASC',
  GitCommitStatsByRepoIdMinAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_ADDITIONS_DESC',
  GitCommitStatsByRepoIdMinCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdMinCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdMinDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_DELETIONS_ASC',
  GitCommitStatsByRepoIdMinDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_DELETIONS_DESC',
  GitCommitStatsByRepoIdMinFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_FILE_PATH_ASC',
  GitCommitStatsByRepoIdMinFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_FILE_PATH_DESC',
  GitCommitStatsByRepoIdMinRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_REPO_ID_ASC',
  GitCommitStatsByRepoIdMinRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_MIN_REPO_ID_DESC',
  GitCommitStatsByRepoIdStddevPopulationAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_ADDITIONS_ASC',
  GitCommitStatsByRepoIdStddevPopulationAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_ADDITIONS_DESC',
  GitCommitStatsByRepoIdStddevPopulationCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdStddevPopulationCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdStddevPopulationDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_DELETIONS_ASC',
  GitCommitStatsByRepoIdStddevPopulationDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_DELETIONS_DESC',
  GitCommitStatsByRepoIdStddevPopulationFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_FILE_PATH_ASC',
  GitCommitStatsByRepoIdStddevPopulationFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_FILE_PATH_DESC',
  GitCommitStatsByRepoIdStddevPopulationRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_ASC',
  GitCommitStatsByRepoIdStddevPopulationRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_DESC',
  GitCommitStatsByRepoIdStddevSampleAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_ADDITIONS_ASC',
  GitCommitStatsByRepoIdStddevSampleAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_ADDITIONS_DESC',
  GitCommitStatsByRepoIdStddevSampleCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdStddevSampleCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdStddevSampleDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_DELETIONS_ASC',
  GitCommitStatsByRepoIdStddevSampleDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_DELETIONS_DESC',
  GitCommitStatsByRepoIdStddevSampleFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_FILE_PATH_ASC',
  GitCommitStatsByRepoIdStddevSampleFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_FILE_PATH_DESC',
  GitCommitStatsByRepoIdStddevSampleRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_ASC',
  GitCommitStatsByRepoIdStddevSampleRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_DESC',
  GitCommitStatsByRepoIdSumAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_ADDITIONS_ASC',
  GitCommitStatsByRepoIdSumAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_ADDITIONS_DESC',
  GitCommitStatsByRepoIdSumCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdSumCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdSumDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_DELETIONS_ASC',
  GitCommitStatsByRepoIdSumDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_DELETIONS_DESC',
  GitCommitStatsByRepoIdSumFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_FILE_PATH_ASC',
  GitCommitStatsByRepoIdSumFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_FILE_PATH_DESC',
  GitCommitStatsByRepoIdSumRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_REPO_ID_ASC',
  GitCommitStatsByRepoIdSumRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_SUM_REPO_ID_DESC',
  GitCommitStatsByRepoIdVariancePopulationAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_ADDITIONS_ASC',
  GitCommitStatsByRepoIdVariancePopulationAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_ADDITIONS_DESC',
  GitCommitStatsByRepoIdVariancePopulationCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdVariancePopulationCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdVariancePopulationDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_DELETIONS_ASC',
  GitCommitStatsByRepoIdVariancePopulationDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_DELETIONS_DESC',
  GitCommitStatsByRepoIdVariancePopulationFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_FILE_PATH_ASC',
  GitCommitStatsByRepoIdVariancePopulationFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_FILE_PATH_DESC',
  GitCommitStatsByRepoIdVariancePopulationRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_ASC',
  GitCommitStatsByRepoIdVariancePopulationRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_DESC',
  GitCommitStatsByRepoIdVarianceSampleAdditionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_ADDITIONS_ASC',
  GitCommitStatsByRepoIdVarianceSampleAdditionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_ADDITIONS_DESC',
  GitCommitStatsByRepoIdVarianceSampleCommitHashAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_COMMIT_HASH_ASC',
  GitCommitStatsByRepoIdVarianceSampleCommitHashDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_COMMIT_HASH_DESC',
  GitCommitStatsByRepoIdVarianceSampleDeletionsAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_DELETIONS_ASC',
  GitCommitStatsByRepoIdVarianceSampleDeletionsDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_DELETIONS_DESC',
  GitCommitStatsByRepoIdVarianceSampleFilePathAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_FILE_PATH_ASC',
  GitCommitStatsByRepoIdVarianceSampleFilePathDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_FILE_PATH_DESC',
  GitCommitStatsByRepoIdVarianceSampleRepoIdAsc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_ASC',
  GitCommitStatsByRepoIdVarianceSampleRepoIdDesc = 'GIT_COMMIT_STATS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_DESC',
  GitFilesByRepoIdAverageContentsAsc = 'GIT_FILES_BY_REPO_ID_AVERAGE_CONTENTS_ASC',
  GitFilesByRepoIdAverageContentsDesc = 'GIT_FILES_BY_REPO_ID_AVERAGE_CONTENTS_DESC',
  GitFilesByRepoIdAverageExecutableAsc = 'GIT_FILES_BY_REPO_ID_AVERAGE_EXECUTABLE_ASC',
  GitFilesByRepoIdAverageExecutableDesc = 'GIT_FILES_BY_REPO_ID_AVERAGE_EXECUTABLE_DESC',
  GitFilesByRepoIdAveragePathAsc = 'GIT_FILES_BY_REPO_ID_AVERAGE_PATH_ASC',
  GitFilesByRepoIdAveragePathDesc = 'GIT_FILES_BY_REPO_ID_AVERAGE_PATH_DESC',
  GitFilesByRepoIdAverageRepoIdAsc = 'GIT_FILES_BY_REPO_ID_AVERAGE_REPO_ID_ASC',
  GitFilesByRepoIdAverageRepoIdDesc = 'GIT_FILES_BY_REPO_ID_AVERAGE_REPO_ID_DESC',
  GitFilesByRepoIdCountAsc = 'GIT_FILES_BY_REPO_ID_COUNT_ASC',
  GitFilesByRepoIdCountDesc = 'GIT_FILES_BY_REPO_ID_COUNT_DESC',
  GitFilesByRepoIdDistinctCountContentsAsc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_CONTENTS_ASC',
  GitFilesByRepoIdDistinctCountContentsDesc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_CONTENTS_DESC',
  GitFilesByRepoIdDistinctCountExecutableAsc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_EXECUTABLE_ASC',
  GitFilesByRepoIdDistinctCountExecutableDesc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_EXECUTABLE_DESC',
  GitFilesByRepoIdDistinctCountPathAsc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_PATH_ASC',
  GitFilesByRepoIdDistinctCountPathDesc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_PATH_DESC',
  GitFilesByRepoIdDistinctCountRepoIdAsc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_ASC',
  GitFilesByRepoIdDistinctCountRepoIdDesc = 'GIT_FILES_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_DESC',
  GitFilesByRepoIdMaxContentsAsc = 'GIT_FILES_BY_REPO_ID_MAX_CONTENTS_ASC',
  GitFilesByRepoIdMaxContentsDesc = 'GIT_FILES_BY_REPO_ID_MAX_CONTENTS_DESC',
  GitFilesByRepoIdMaxExecutableAsc = 'GIT_FILES_BY_REPO_ID_MAX_EXECUTABLE_ASC',
  GitFilesByRepoIdMaxExecutableDesc = 'GIT_FILES_BY_REPO_ID_MAX_EXECUTABLE_DESC',
  GitFilesByRepoIdMaxPathAsc = 'GIT_FILES_BY_REPO_ID_MAX_PATH_ASC',
  GitFilesByRepoIdMaxPathDesc = 'GIT_FILES_BY_REPO_ID_MAX_PATH_DESC',
  GitFilesByRepoIdMaxRepoIdAsc = 'GIT_FILES_BY_REPO_ID_MAX_REPO_ID_ASC',
  GitFilesByRepoIdMaxRepoIdDesc = 'GIT_FILES_BY_REPO_ID_MAX_REPO_ID_DESC',
  GitFilesByRepoIdMinContentsAsc = 'GIT_FILES_BY_REPO_ID_MIN_CONTENTS_ASC',
  GitFilesByRepoIdMinContentsDesc = 'GIT_FILES_BY_REPO_ID_MIN_CONTENTS_DESC',
  GitFilesByRepoIdMinExecutableAsc = 'GIT_FILES_BY_REPO_ID_MIN_EXECUTABLE_ASC',
  GitFilesByRepoIdMinExecutableDesc = 'GIT_FILES_BY_REPO_ID_MIN_EXECUTABLE_DESC',
  GitFilesByRepoIdMinPathAsc = 'GIT_FILES_BY_REPO_ID_MIN_PATH_ASC',
  GitFilesByRepoIdMinPathDesc = 'GIT_FILES_BY_REPO_ID_MIN_PATH_DESC',
  GitFilesByRepoIdMinRepoIdAsc = 'GIT_FILES_BY_REPO_ID_MIN_REPO_ID_ASC',
  GitFilesByRepoIdMinRepoIdDesc = 'GIT_FILES_BY_REPO_ID_MIN_REPO_ID_DESC',
  GitFilesByRepoIdStddevPopulationContentsAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_CONTENTS_ASC',
  GitFilesByRepoIdStddevPopulationContentsDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_CONTENTS_DESC',
  GitFilesByRepoIdStddevPopulationExecutableAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_EXECUTABLE_ASC',
  GitFilesByRepoIdStddevPopulationExecutableDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_EXECUTABLE_DESC',
  GitFilesByRepoIdStddevPopulationPathAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_PATH_ASC',
  GitFilesByRepoIdStddevPopulationPathDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_PATH_DESC',
  GitFilesByRepoIdStddevPopulationRepoIdAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_ASC',
  GitFilesByRepoIdStddevPopulationRepoIdDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_DESC',
  GitFilesByRepoIdStddevSampleContentsAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_CONTENTS_ASC',
  GitFilesByRepoIdStddevSampleContentsDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_CONTENTS_DESC',
  GitFilesByRepoIdStddevSampleExecutableAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_EXECUTABLE_ASC',
  GitFilesByRepoIdStddevSampleExecutableDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_EXECUTABLE_DESC',
  GitFilesByRepoIdStddevSamplePathAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_PATH_ASC',
  GitFilesByRepoIdStddevSamplePathDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_PATH_DESC',
  GitFilesByRepoIdStddevSampleRepoIdAsc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_ASC',
  GitFilesByRepoIdStddevSampleRepoIdDesc = 'GIT_FILES_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_DESC',
  GitFilesByRepoIdSumContentsAsc = 'GIT_FILES_BY_REPO_ID_SUM_CONTENTS_ASC',
  GitFilesByRepoIdSumContentsDesc = 'GIT_FILES_BY_REPO_ID_SUM_CONTENTS_DESC',
  GitFilesByRepoIdSumExecutableAsc = 'GIT_FILES_BY_REPO_ID_SUM_EXECUTABLE_ASC',
  GitFilesByRepoIdSumExecutableDesc = 'GIT_FILES_BY_REPO_ID_SUM_EXECUTABLE_DESC',
  GitFilesByRepoIdSumPathAsc = 'GIT_FILES_BY_REPO_ID_SUM_PATH_ASC',
  GitFilesByRepoIdSumPathDesc = 'GIT_FILES_BY_REPO_ID_SUM_PATH_DESC',
  GitFilesByRepoIdSumRepoIdAsc = 'GIT_FILES_BY_REPO_ID_SUM_REPO_ID_ASC',
  GitFilesByRepoIdSumRepoIdDesc = 'GIT_FILES_BY_REPO_ID_SUM_REPO_ID_DESC',
  GitFilesByRepoIdVariancePopulationContentsAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_CONTENTS_ASC',
  GitFilesByRepoIdVariancePopulationContentsDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_CONTENTS_DESC',
  GitFilesByRepoIdVariancePopulationExecutableAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_EXECUTABLE_ASC',
  GitFilesByRepoIdVariancePopulationExecutableDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_EXECUTABLE_DESC',
  GitFilesByRepoIdVariancePopulationPathAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_PATH_ASC',
  GitFilesByRepoIdVariancePopulationPathDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_PATH_DESC',
  GitFilesByRepoIdVariancePopulationRepoIdAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_ASC',
  GitFilesByRepoIdVariancePopulationRepoIdDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_DESC',
  GitFilesByRepoIdVarianceSampleContentsAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_CONTENTS_ASC',
  GitFilesByRepoIdVarianceSampleContentsDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_CONTENTS_DESC',
  GitFilesByRepoIdVarianceSampleExecutableAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_EXECUTABLE_ASC',
  GitFilesByRepoIdVarianceSampleExecutableDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_EXECUTABLE_DESC',
  GitFilesByRepoIdVarianceSamplePathAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_PATH_ASC',
  GitFilesByRepoIdVarianceSamplePathDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_PATH_DESC',
  GitFilesByRepoIdVarianceSampleRepoIdAsc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_ASC',
  GitFilesByRepoIdVarianceSampleRepoIdDesc = 'GIT_FILES_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_DESC',
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
  RepoSyncsByRepoIdAverageIdAsc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_ID_ASC',
  RepoSyncsByRepoIdAverageIdDesc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_ID_DESC',
  RepoSyncsByRepoIdAverageRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_REPO_ID_ASC',
  RepoSyncsByRepoIdAverageRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_REPO_ID_DESC',
  RepoSyncsByRepoIdAverageSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_SETTINGS_ASC',
  RepoSyncsByRepoIdAverageSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_SETTINGS_DESC',
  RepoSyncsByRepoIdAverageSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdAverageSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_AVERAGE_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdCountAsc = 'REPO_SYNCS_BY_REPO_ID_COUNT_ASC',
  RepoSyncsByRepoIdCountDesc = 'REPO_SYNCS_BY_REPO_ID_COUNT_DESC',
  RepoSyncsByRepoIdDistinctCountIdAsc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_ID_ASC',
  RepoSyncsByRepoIdDistinctCountIdDesc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_ID_DESC',
  RepoSyncsByRepoIdDistinctCountRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_ASC',
  RepoSyncsByRepoIdDistinctCountRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_REPO_ID_DESC',
  RepoSyncsByRepoIdDistinctCountSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_SETTINGS_ASC',
  RepoSyncsByRepoIdDistinctCountSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_SETTINGS_DESC',
  RepoSyncsByRepoIdDistinctCountSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdDistinctCountSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_DISTINCT_COUNT_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdMaxIdAsc = 'REPO_SYNCS_BY_REPO_ID_MAX_ID_ASC',
  RepoSyncsByRepoIdMaxIdDesc = 'REPO_SYNCS_BY_REPO_ID_MAX_ID_DESC',
  RepoSyncsByRepoIdMaxRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_MAX_REPO_ID_ASC',
  RepoSyncsByRepoIdMaxRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_MAX_REPO_ID_DESC',
  RepoSyncsByRepoIdMaxSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_MAX_SETTINGS_ASC',
  RepoSyncsByRepoIdMaxSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_MAX_SETTINGS_DESC',
  RepoSyncsByRepoIdMaxSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_MAX_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdMaxSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_MAX_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdMinIdAsc = 'REPO_SYNCS_BY_REPO_ID_MIN_ID_ASC',
  RepoSyncsByRepoIdMinIdDesc = 'REPO_SYNCS_BY_REPO_ID_MIN_ID_DESC',
  RepoSyncsByRepoIdMinRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_MIN_REPO_ID_ASC',
  RepoSyncsByRepoIdMinRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_MIN_REPO_ID_DESC',
  RepoSyncsByRepoIdMinSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_MIN_SETTINGS_ASC',
  RepoSyncsByRepoIdMinSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_MIN_SETTINGS_DESC',
  RepoSyncsByRepoIdMinSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_MIN_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdMinSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_MIN_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdStddevPopulationIdAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_ID_ASC',
  RepoSyncsByRepoIdStddevPopulationIdDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_ID_DESC',
  RepoSyncsByRepoIdStddevPopulationRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_ASC',
  RepoSyncsByRepoIdStddevPopulationRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_REPO_ID_DESC',
  RepoSyncsByRepoIdStddevPopulationSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_SETTINGS_ASC',
  RepoSyncsByRepoIdStddevPopulationSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_SETTINGS_DESC',
  RepoSyncsByRepoIdStddevPopulationSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdStddevPopulationSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_POPULATION_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdStddevSampleIdAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_ID_ASC',
  RepoSyncsByRepoIdStddevSampleIdDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_ID_DESC',
  RepoSyncsByRepoIdStddevSampleRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_ASC',
  RepoSyncsByRepoIdStddevSampleRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_REPO_ID_DESC',
  RepoSyncsByRepoIdStddevSampleSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_SETTINGS_ASC',
  RepoSyncsByRepoIdStddevSampleSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_SETTINGS_DESC',
  RepoSyncsByRepoIdStddevSampleSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdStddevSampleSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_STDDEV_SAMPLE_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdSumIdAsc = 'REPO_SYNCS_BY_REPO_ID_SUM_ID_ASC',
  RepoSyncsByRepoIdSumIdDesc = 'REPO_SYNCS_BY_REPO_ID_SUM_ID_DESC',
  RepoSyncsByRepoIdSumRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_SUM_REPO_ID_ASC',
  RepoSyncsByRepoIdSumRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_SUM_REPO_ID_DESC',
  RepoSyncsByRepoIdSumSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_SUM_SETTINGS_ASC',
  RepoSyncsByRepoIdSumSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_SUM_SETTINGS_DESC',
  RepoSyncsByRepoIdSumSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_SUM_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdSumSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_SUM_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdVariancePopulationIdAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_ID_ASC',
  RepoSyncsByRepoIdVariancePopulationIdDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_ID_DESC',
  RepoSyncsByRepoIdVariancePopulationRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_ASC',
  RepoSyncsByRepoIdVariancePopulationRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_REPO_ID_DESC',
  RepoSyncsByRepoIdVariancePopulationSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_SETTINGS_ASC',
  RepoSyncsByRepoIdVariancePopulationSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_SETTINGS_DESC',
  RepoSyncsByRepoIdVariancePopulationSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdVariancePopulationSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_POPULATION_SYNC_TYPE_DESC',
  RepoSyncsByRepoIdVarianceSampleIdAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_ID_ASC',
  RepoSyncsByRepoIdVarianceSampleIdDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_ID_DESC',
  RepoSyncsByRepoIdVarianceSampleRepoIdAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_ASC',
  RepoSyncsByRepoIdVarianceSampleRepoIdDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_REPO_ID_DESC',
  RepoSyncsByRepoIdVarianceSampleSettingsAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_SETTINGS_ASC',
  RepoSyncsByRepoIdVarianceSampleSettingsDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_SETTINGS_DESC',
  RepoSyncsByRepoIdVarianceSampleSyncTypeAsc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_SYNC_TYPE_ASC',
  RepoSyncsByRepoIdVarianceSampleSyncTypeDesc = 'REPO_SYNCS_BY_REPO_ID_VARIANCE_SAMPLE_SYNC_TYPE_DESC',
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

export type SchemaMigrationAggregates = {
  __typename?: 'SchemaMigrationAggregates'
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<SchemaMigrationAverageAggregates>
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<SchemaMigrationDistinctCountAggregates>
  keys?: Maybe<Array<Scalars['String']>>
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<SchemaMigrationMaxAggregates>
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<SchemaMigrationMinAggregates>
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<SchemaMigrationStddevPopulationAggregates>
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<SchemaMigrationStddevSampleAggregates>
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<SchemaMigrationSumAggregates>
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<SchemaMigrationVariancePopulationAggregates>
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<SchemaMigrationVarianceSampleAggregates>
}

export type SchemaMigrationAverageAggregates = {
  __typename?: 'SchemaMigrationAverageAggregates'
  /** Mean average of version across the matching connection */
  version?: Maybe<Scalars['BigFloat']>
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

export type SchemaMigrationDistinctCountAggregates = {
  __typename?: 'SchemaMigrationDistinctCountAggregates'
  /** Distinct count of dirty across the matching connection */
  dirty?: Maybe<Scalars['BigInt']>
  /** Distinct count of version across the matching connection */
  version?: Maybe<Scalars['BigInt']>
}

/** An input for mutations affecting `SchemaMigration` */
export type SchemaMigrationInput = {
  dirty: Scalars['Boolean']
  version: Scalars['BigInt']
}

export type SchemaMigrationMaxAggregates = {
  __typename?: 'SchemaMigrationMaxAggregates'
  /** Maximum of version across the matching connection */
  version?: Maybe<Scalars['BigInt']>
}

export type SchemaMigrationMinAggregates = {
  __typename?: 'SchemaMigrationMinAggregates'
  /** Minimum of version across the matching connection */
  version?: Maybe<Scalars['BigInt']>
}

/** Represents an update to a `SchemaMigration`. Fields that are set will be updated. */
export type SchemaMigrationPatch = {
  dirty?: InputMaybe<Scalars['Boolean']>
  version?: InputMaybe<Scalars['BigInt']>
}

export type SchemaMigrationStddevPopulationAggregates = {
  __typename?: 'SchemaMigrationStddevPopulationAggregates'
  /** Population standard deviation of version across the matching connection */
  version?: Maybe<Scalars['BigFloat']>
}

export type SchemaMigrationStddevSampleAggregates = {
  __typename?: 'SchemaMigrationStddevSampleAggregates'
  /** Sample standard deviation of version across the matching connection */
  version?: Maybe<Scalars['BigFloat']>
}

export type SchemaMigrationSumAggregates = {
  __typename?: 'SchemaMigrationSumAggregates'
  /** Sum of version across the matching connection */
  version: Scalars['BigFloat']
}

export type SchemaMigrationVariancePopulationAggregates = {
  __typename?: 'SchemaMigrationVariancePopulationAggregates'
  /** Population variance of version across the matching connection */
  version?: Maybe<Scalars['BigFloat']>
}

export type SchemaMigrationVarianceSampleAggregates = {
  __typename?: 'SchemaMigrationVarianceSampleAggregates'
  /** Sample variance of version across the matching connection */
  version?: Maybe<Scalars['BigFloat']>
}

/** A connection to a list of `SchemaMigration` values. */
export type SchemaMigrationsConnection = {
  __typename?: 'SchemaMigrationsConnection'
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<SchemaMigrationAggregates>
  /** A list of edges which contains the `SchemaMigration` and cursor to aid in pagination. */
  edges: Array<SchemaMigrationsEdge>
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<SchemaMigrationAggregates>>
  /** A list of `SchemaMigration` objects. */
  nodes: Array<Maybe<SchemaMigration>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `SchemaMigration` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A connection to a list of `SchemaMigration` values. */
export type SchemaMigrationsConnectionGroupedAggregatesArgs = {
  groupBy: Array<SchemaMigrationsGroupBy>
  having?: InputMaybe<SchemaMigrationsHavingInput>
}

/** A `SchemaMigration` edge in the connection. */
export type SchemaMigrationsEdge = {
  __typename?: 'SchemaMigrationsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `SchemaMigration` at the end of the edge. */
  node?: Maybe<SchemaMigration>
}

/** Grouping methods for `SchemaMigration` for usage during aggregation. */
export enum SchemaMigrationsGroupBy {
  Dirty = 'DIRTY',
}

export type SchemaMigrationsHavingAverageInput = {
  version?: InputMaybe<HavingBigintFilter>
}

export type SchemaMigrationsHavingDistinctCountInput = {
  version?: InputMaybe<HavingBigintFilter>
}

/** Conditions for `SchemaMigration` aggregates. */
export type SchemaMigrationsHavingInput = {
  AND?: InputMaybe<Array<SchemaMigrationsHavingInput>>
  OR?: InputMaybe<Array<SchemaMigrationsHavingInput>>
  average?: InputMaybe<SchemaMigrationsHavingAverageInput>
  distinctCount?: InputMaybe<SchemaMigrationsHavingDistinctCountInput>
  max?: InputMaybe<SchemaMigrationsHavingMaxInput>
  min?: InputMaybe<SchemaMigrationsHavingMinInput>
  stddevPopulation?: InputMaybe<SchemaMigrationsHavingStddevPopulationInput>
  stddevSample?: InputMaybe<SchemaMigrationsHavingStddevSampleInput>
  sum?: InputMaybe<SchemaMigrationsHavingSumInput>
  variancePopulation?: InputMaybe<SchemaMigrationsHavingVariancePopulationInput>
  varianceSample?: InputMaybe<SchemaMigrationsHavingVarianceSampleInput>
}

export type SchemaMigrationsHavingMaxInput = {
  version?: InputMaybe<HavingBigintFilter>
}

export type SchemaMigrationsHavingMinInput = {
  version?: InputMaybe<HavingBigintFilter>
}

export type SchemaMigrationsHavingStddevPopulationInput = {
  version?: InputMaybe<HavingBigintFilter>
}

export type SchemaMigrationsHavingStddevSampleInput = {
  version?: InputMaybe<HavingBigintFilter>
}

export type SchemaMigrationsHavingSumInput = {
  version?: InputMaybe<HavingBigintFilter>
}

export type SchemaMigrationsHavingVariancePopulationInput = {
  version?: InputMaybe<HavingBigintFilter>
}

export type SchemaMigrationsHavingVarianceSampleInput = {
  version?: InputMaybe<HavingBigintFilter>
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
      isGithub?: boolean | null
      tags: any
      githubRepoInfoByRepoId?: {
        __typename?: 'GithubRepoInfo'
        owner: string
        name: string
        openGraphImageUrl?: string | null
        updatedAt?: any | null
        homepageUrl?: string | null
      } | null
      repoSyncsByRepoId: {
        __typename?: 'RepoSyncsConnection'
        totalCount: number
        nodes: Array<{
          __typename?: 'RepoSync'
          syncType: string
          repoSyncQueuesByRepoSyncId: {
            __typename?: 'RepoSyncQueuesConnection'
            nodes: Array<{
              __typename?: 'RepoSyncQueue'
              id: any
              status: string
              createdAt: any
            } | null>
          }
        } | null>
      }
    } | null>
  } | null
}
