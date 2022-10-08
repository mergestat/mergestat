export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Datetime: any;
  JSON: any;
  UUID: any;
};

/** All input for the `addServiceAuthCredential` mutation. */
export type AddServiceAuthCredentialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  credentialType?: InputMaybe<Scalars['String']>;
  credentials?: InputMaybe<Scalars['String']>;
  secret?: InputMaybe<Scalars['String']>;
};

/** The output of our `addServiceAuthCredential` mutation. */
export type AddServiceAuthCredentialPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  serviceAuthCredential?: Maybe<ServiceAuthCredential>;
  /** An edge for our `ServiceAuthCredential`. May be used by Relay 1. */
  serviceAuthCredentialEdge?: Maybe<ServiceAuthCredentialsEdge>;
  /** Reads a single `ServiceAuthCredentialType` that is related to this `ServiceAuthCredential`. */
  serviceAuthCredentialTypeByType?: Maybe<ServiceAuthCredentialType>;
};


/** The output of our `addServiceAuthCredential` mutation. */
export type AddServiceAuthCredentialPayloadServiceAuthCredentialEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceAuthCredentialsOrderBy>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** All input for the create `GitBlame` mutation. */
export type CreateGitBlameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitBlame` to be created by this mutation. */
  gitBlame: GitBlameInput;
};

/** The output of our create `GitBlame` mutation. */
export type CreateGitBlamePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitBlame` that was created by this mutation. */
  gitBlame?: Maybe<GitBlame>;
  /** An edge for our `GitBlame`. May be used by Relay 1. */
  gitBlameEdge?: Maybe<GitBlamesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitBlame`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GitBlame` mutation. */
export type CreateGitBlamePayloadGitBlameEdgeArgs = {
  orderBy?: InputMaybe<Array<GitBlamesOrderBy>>;
};

/** All input for the create `GitBranch` mutation. */
export type CreateGitBranchInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitBranch` to be created by this mutation. */
  gitBranch: GitBranchInput;
};

/** The output of our create `GitBranch` mutation. */
export type CreateGitBranchPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitBranch` that was created by this mutation. */
  gitBranch?: Maybe<GitBranch>;
  /** An edge for our `GitBranch`. May be used by Relay 1. */
  gitBranchEdge?: Maybe<GitBranchesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `GitBranch` mutation. */
export type CreateGitBranchPayloadGitBranchEdgeArgs = {
  orderBy?: InputMaybe<Array<GitBranchesOrderBy>>;
};

/** All input for the create `GitCommit` mutation. */
export type CreateGitCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitCommit` to be created by this mutation. */
  gitCommit: GitCommitInput;
};

/** The output of our create `GitCommit` mutation. */
export type CreateGitCommitPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitCommit` that was created by this mutation. */
  gitCommit?: Maybe<GitCommit>;
  /** An edge for our `GitCommit`. May be used by Relay 1. */
  gitCommitEdge?: Maybe<GitCommitsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GitCommit` mutation. */
export type CreateGitCommitPayloadGitCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>;
};

/** All input for the create `GitCommitStat` mutation. */
export type CreateGitCommitStatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitCommitStat` to be created by this mutation. */
  gitCommitStat: GitCommitStatInput;
};

/** The output of our create `GitCommitStat` mutation. */
export type CreateGitCommitStatPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitCommitStat` that was created by this mutation. */
  gitCommitStat?: Maybe<GitCommitStat>;
  /** An edge for our `GitCommitStat`. May be used by Relay 1. */
  gitCommitStatEdge?: Maybe<GitCommitStatsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitCommitStat`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GitCommitStat` mutation. */
export type CreateGitCommitStatPayloadGitCommitStatEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>;
};

/** All input for the create `GitFile` mutation. */
export type CreateGitFileInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitFile` to be created by this mutation. */
  gitFile: GitFileInput;
};

/** The output of our create `GitFile` mutation. */
export type CreateGitFilePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitFile` that was created by this mutation. */
  gitFile?: Maybe<GitFile>;
  /** An edge for our `GitFile`. May be used by Relay 1. */
  gitFileEdge?: Maybe<GitFilesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GitFile` mutation. */
export type CreateGitFilePayloadGitFileEdgeArgs = {
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>;
};

/** All input for the create `GitRef` mutation. */
export type CreateGitRefInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitRef` to be created by this mutation. */
  gitRef: GitRefInput;
};

/** The output of our create `GitRef` mutation. */
export type CreateGitRefPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitRef` that was created by this mutation. */
  gitRef?: Maybe<GitRef>;
  /** An edge for our `GitRef`. May be used by Relay 1. */
  gitRefEdge?: Maybe<GitRefsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitRef`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GitRef` mutation. */
export type CreateGitRefPayloadGitRefEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>;
};

/** All input for the create `GitTag` mutation. */
export type CreateGitTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitTag` to be created by this mutation. */
  gitTag: GitTagInput;
};

/** The output of our create `GitTag` mutation. */
export type CreateGitTagPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitTag` that was created by this mutation. */
  gitTag?: Maybe<GitTag>;
  /** An edge for our `GitTag`. May be used by Relay 1. */
  gitTagEdge?: Maybe<GitTagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `GitTag` mutation. */
export type CreateGitTagPayloadGitTagEdgeArgs = {
  orderBy?: InputMaybe<Array<GitTagsOrderBy>>;
};

/** All input for the create `GithubIssue` mutation. */
export type CreateGithubIssueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubIssue` to be created by this mutation. */
  githubIssue: GithubIssueInput;
};

/** The output of our create `GithubIssue` mutation. */
export type CreateGithubIssuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubIssue` that was created by this mutation. */
  githubIssue?: Maybe<GithubIssue>;
  /** An edge for our `GithubIssue`. May be used by Relay 1. */
  githubIssueEdge?: Maybe<GithubIssuesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubIssue` mutation. */
export type CreateGithubIssuePayloadGithubIssueEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
};

/** All input for the create `GithubPullRequestCommit` mutation. */
export type CreateGithubPullRequestCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubPullRequestCommit` to be created by this mutation. */
  githubPullRequestCommit: GithubPullRequestCommitInput;
};

/** The output of our create `GithubPullRequestCommit` mutation. */
export type CreateGithubPullRequestCommitPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubPullRequestCommit` that was created by this mutation. */
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>;
  /** An edge for our `GithubPullRequestCommit`. May be used by Relay 1. */
  githubPullRequestCommitEdge?: Maybe<GithubPullRequestCommitsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestCommit`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubPullRequestCommit` mutation. */
export type CreateGithubPullRequestCommitPayloadGithubPullRequestCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>;
};

/** All input for the create `GithubPullRequest` mutation. */
export type CreateGithubPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubPullRequest` to be created by this mutation. */
  githubPullRequest: GithubPullRequestInput;
};

/** The output of our create `GithubPullRequest` mutation. */
export type CreateGithubPullRequestPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubPullRequest` that was created by this mutation. */
  githubPullRequest?: Maybe<GithubPullRequest>;
  /** An edge for our `GithubPullRequest`. May be used by Relay 1. */
  githubPullRequestEdge?: Maybe<GithubPullRequestsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubPullRequest` mutation. */
export type CreateGithubPullRequestPayloadGithubPullRequestEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>;
};

/** All input for the create `GithubPullRequestReview` mutation. */
export type CreateGithubPullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubPullRequestReview` to be created by this mutation. */
  githubPullRequestReview: GithubPullRequestReviewInput;
};

/** The output of our create `GithubPullRequestReview` mutation. */
export type CreateGithubPullRequestReviewPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubPullRequestReview` that was created by this mutation. */
  githubPullRequestReview?: Maybe<GithubPullRequestReview>;
  /** An edge for our `GithubPullRequestReview`. May be used by Relay 1. */
  githubPullRequestReviewEdge?: Maybe<GithubPullRequestReviewsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestReview`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubPullRequestReview` mutation. */
export type CreateGithubPullRequestReviewPayloadGithubPullRequestReviewEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>;
};

/** All input for the create `GithubRepoInfo` mutation. */
export type CreateGithubRepoInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubRepoInfo` to be created by this mutation. */
  githubRepoInfo: GithubRepoInfoInput;
};

/** The output of our create `GithubRepoInfo` mutation. */
export type CreateGithubRepoInfoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubRepoInfo` that was created by this mutation. */
  githubRepoInfo?: Maybe<GithubRepoInfo>;
  /** An edge for our `GithubRepoInfo`. May be used by Relay 1. */
  githubRepoInfoEdge?: Maybe<GithubRepoInfosEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubRepoInfo` mutation. */
export type CreateGithubRepoInfoPayloadGithubRepoInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>;
};

/** All input for the create `GithubStargazer` mutation. */
export type CreateGithubStargazerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubStargazer` to be created by this mutation. */
  githubStargazer: GithubStargazerInput;
};

/** The output of our create `GithubStargazer` mutation. */
export type CreateGithubStargazerPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubStargazer` that was created by this mutation. */
  githubStargazer?: Maybe<GithubStargazer>;
  /** An edge for our `GithubStargazer`. May be used by Relay 1. */
  githubStargazerEdge?: Maybe<GithubStargazersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubStargazer` mutation. */
export type CreateGithubStargazerPayloadGithubStargazerEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>;
};

/** All input for the create `RepoImport` mutation. */
export type CreateRepoImportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoImport` to be created by this mutation. */
  repoImport: RepoImportInput;
};

/** The output of our create `RepoImport` mutation. */
export type CreateRepoImportPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImport` that was created by this mutation. */
  repoImport?: Maybe<RepoImport>;
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>;
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>;
};


/** The output of our create `RepoImport` mutation. */
export type CreateRepoImportPayloadRepoImportEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>;
};

/** All input for the create `RepoImportType` mutation. */
export type CreateRepoImportTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoImportType` to be created by this mutation. */
  repoImportType: RepoImportTypeInput;
};

/** The output of our create `RepoImportType` mutation. */
export type CreateRepoImportTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImportType` that was created by this mutation. */
  repoImportType?: Maybe<RepoImportType>;
  /** An edge for our `RepoImportType`. May be used by Relay 1. */
  repoImportTypeEdge?: Maybe<RepoImportTypesEdge>;
};


/** The output of our create `RepoImportType` mutation. */
export type CreateRepoImportTypePayloadRepoImportTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>;
};

/** All input for the create `Repo` mutation. */
export type CreateRepoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Repo` to be created by this mutation. */
  repo: RepoInput;
};

/** The output of our create `Repo` mutation. */
export type CreateRepoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Repo` that was created by this mutation. */
  repo?: Maybe<Repo>;
  /** An edge for our `Repo`. May be used by Relay 1. */
  repoEdge?: Maybe<ReposEdge>;
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImport?: Maybe<RepoImport>;
};


/** The output of our create `Repo` mutation. */
export type CreateRepoPayloadRepoEdgeArgs = {
  orderBy?: InputMaybe<Array<ReposOrderBy>>;
};

/** All input for the create `RepoSync` mutation. */
export type CreateRepoSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoSync` to be created by this mutation. */
  repoSync: RepoSyncInput;
};

/** All input for the create `RepoSyncLog` mutation. */
export type CreateRepoSyncLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoSyncLog` to be created by this mutation. */
  repoSyncLog: RepoSyncLogInput;
};

/** The output of our create `RepoSyncLog` mutation. */
export type CreateRepoSyncLogPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncLog` that was created by this mutation. */
  repoSyncLog?: Maybe<RepoSyncLog>;
  /** An edge for our `RepoSyncLog`. May be used by Relay 1. */
  repoSyncLogEdge?: Maybe<RepoSyncLogsEdge>;
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>;
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueue?: Maybe<RepoSyncQueue>;
};


/** The output of our create `RepoSyncLog` mutation. */
export type CreateRepoSyncLogPayloadRepoSyncLogEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>;
};

/** All input for the create `RepoSyncLogType` mutation. */
export type CreateRepoSyncLogTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoSyncLogType` to be created by this mutation. */
  repoSyncLogType: RepoSyncLogTypeInput;
};

/** The output of our create `RepoSyncLogType` mutation. */
export type CreateRepoSyncLogTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncLogType` that was created by this mutation. */
  repoSyncLogType?: Maybe<RepoSyncLogType>;
  /** An edge for our `RepoSyncLogType`. May be used by Relay 1. */
  repoSyncLogTypeEdge?: Maybe<RepoSyncLogTypesEdge>;
};


/** The output of our create `RepoSyncLogType` mutation. */
export type CreateRepoSyncLogTypePayloadRepoSyncLogTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>;
};

/** The output of our create `RepoSync` mutation. */
export type CreateRepoSyncPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repo?: Maybe<Repo>;
  /** The `RepoSync` that was created by this mutation. */
  repoSync?: Maybe<RepoSync>;
  /** An edge for our `RepoSync`. May be used by Relay 1. */
  repoSyncEdge?: Maybe<RepoSyncsEdge>;
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>;
};


/** The output of our create `RepoSync` mutation. */
export type CreateRepoSyncPayloadRepoSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>;
};

/** All input for the create `RepoSyncQueue` mutation. */
export type CreateRepoSyncQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoSyncQueue` to be created by this mutation. */
  repoSyncQueue: RepoSyncQueueInput;
};

/** The output of our create `RepoSyncQueue` mutation. */
export type CreateRepoSyncQueuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSync?: Maybe<RepoSync>;
  /** The `RepoSyncQueue` that was created by this mutation. */
  repoSyncQueue?: Maybe<RepoSyncQueue>;
  /** An edge for our `RepoSyncQueue`. May be used by Relay 1. */
  repoSyncQueueEdge?: Maybe<RepoSyncQueuesEdge>;
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>;
};


/** The output of our create `RepoSyncQueue` mutation. */
export type CreateRepoSyncQueuePayloadRepoSyncQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>;
};

/** All input for the create `RepoSyncQueueStatusType` mutation. */
export type CreateRepoSyncQueueStatusTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoSyncQueueStatusType` to be created by this mutation. */
  repoSyncQueueStatusType: RepoSyncQueueStatusTypeInput;
};

/** The output of our create `RepoSyncQueueStatusType` mutation. */
export type CreateRepoSyncQueueStatusTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncQueueStatusType` that was created by this mutation. */
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>;
  /** An edge for our `RepoSyncQueueStatusType`. May be used by Relay 1. */
  repoSyncQueueStatusTypeEdge?: Maybe<RepoSyncQueueStatusTypesEdge>;
};


/** The output of our create `RepoSyncQueueStatusType` mutation. */
export type CreateRepoSyncQueueStatusTypePayloadRepoSyncQueueStatusTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>;
};

/** All input for the create `RepoSyncType` mutation. */
export type CreateRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoSyncType` to be created by this mutation. */
  repoSyncType: RepoSyncTypeInput;
};

/** The output of our create `RepoSyncType` mutation. */
export type CreateRepoSyncTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncType` that was created by this mutation. */
  repoSyncType?: Maybe<RepoSyncType>;
  /** An edge for our `RepoSyncType`. May be used by Relay 1. */
  repoSyncTypeEdge?: Maybe<RepoSyncTypesEdge>;
};


/** The output of our create `RepoSyncType` mutation. */
export type CreateRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};

/** All input for the create `SchemaMigration` mutation. */
export type CreateSchemaMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SchemaMigration` to be created by this mutation. */
  schemaMigration: SchemaMigrationInput;
};

/** The output of our create `SchemaMigration` mutation. */
export type CreateSchemaMigrationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SchemaMigration` that was created by this mutation. */
  schemaMigration?: Maybe<SchemaMigration>;
  /** An edge for our `SchemaMigration`. May be used by Relay 1. */
  schemaMigrationEdge?: Maybe<SchemaMigrationsEdge>;
};


/** The output of our create `SchemaMigration` mutation. */
export type CreateSchemaMigrationPayloadSchemaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>;
};

/** All input for the create `SchemaMigrationsHistory` mutation. */
export type CreateSchemaMigrationsHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SchemaMigrationsHistory` to be created by this mutation. */
  schemaMigrationsHistory: SchemaMigrationsHistoryInput;
};

/** The output of our create `SchemaMigrationsHistory` mutation. */
export type CreateSchemaMigrationsHistoryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SchemaMigrationsHistory` that was created by this mutation. */
  schemaMigrationsHistory?: Maybe<SchemaMigrationsHistory>;
  /** An edge for our `SchemaMigrationsHistory`. May be used by Relay 1. */
  schemaMigrationsHistoryEdge?: Maybe<SchemaMigrationsHistoriesEdge>;
};


/** The output of our create `SchemaMigrationsHistory` mutation. */
export type CreateSchemaMigrationsHistoryPayloadSchemaMigrationsHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsHistoriesOrderBy>>;
};

/** All input for the create `ServiceAuthCredential` mutation. */
export type CreateServiceAuthCredentialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `ServiceAuthCredential` to be created by this mutation. */
  serviceAuthCredential: ServiceAuthCredentialInput;
};

/** The output of our create `ServiceAuthCredential` mutation. */
export type CreateServiceAuthCredentialPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ServiceAuthCredential` that was created by this mutation. */
  serviceAuthCredential?: Maybe<ServiceAuthCredential>;
  /** An edge for our `ServiceAuthCredential`. May be used by Relay 1. */
  serviceAuthCredentialEdge?: Maybe<ServiceAuthCredentialsEdge>;
  /** Reads a single `ServiceAuthCredentialType` that is related to this `ServiceAuthCredential`. */
  serviceAuthCredentialTypeByType?: Maybe<ServiceAuthCredentialType>;
};


/** The output of our create `ServiceAuthCredential` mutation. */
export type CreateServiceAuthCredentialPayloadServiceAuthCredentialEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceAuthCredentialsOrderBy>>;
};

/** All input for the create `ServiceAuthCredentialType` mutation. */
export type CreateServiceAuthCredentialTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `ServiceAuthCredentialType` to be created by this mutation. */
  serviceAuthCredentialType: ServiceAuthCredentialTypeInput;
};

/** The output of our create `ServiceAuthCredentialType` mutation. */
export type CreateServiceAuthCredentialTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ServiceAuthCredentialType` that was created by this mutation. */
  serviceAuthCredentialType?: Maybe<ServiceAuthCredentialType>;
  /** An edge for our `ServiceAuthCredentialType`. May be used by Relay 1. */
  serviceAuthCredentialTypeEdge?: Maybe<ServiceAuthCredentialTypesEdge>;
};


/** The output of our create `ServiceAuthCredentialType` mutation. */
export type CreateServiceAuthCredentialTypePayloadServiceAuthCredentialTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceAuthCredentialTypesOrderBy>>;
};

/** All input for the create `TrivyRepoScan` mutation. */
export type CreateTrivyRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `TrivyRepoScan` to be created by this mutation. */
  trivyRepoScan: TrivyRepoScanInput;
};

/** The output of our create `TrivyRepoScan` mutation. */
export type CreateTrivyRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `TrivyRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `TrivyRepoScan` that was created by this mutation. */
  trivyRepoScan?: Maybe<TrivyRepoScan>;
  /** An edge for our `TrivyRepoScan`. May be used by Relay 1. */
  trivyRepoScanEdge?: Maybe<TrivyRepoScansEdge>;
};


/** The output of our create `TrivyRepoScan` mutation. */
export type CreateTrivyRepoScanPayloadTrivyRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<TrivyRepoScansOrderBy>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
};

/** All input for the `deleteGitBlameByNodeId` mutation. */
export type DeleteGitBlameByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitBlame` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGitBlame` mutation. */
export type DeleteGitBlameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  lineNo: Scalars['Int'];
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GitBlame` mutation. */
export type DeleteGitBlamePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGitBlameNodeId?: Maybe<Scalars['ID']>;
  /** The `GitBlame` that was deleted by this mutation. */
  gitBlame?: Maybe<GitBlame>;
  /** An edge for our `GitBlame`. May be used by Relay 1. */
  gitBlameEdge?: Maybe<GitBlamesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitBlame`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GitBlame` mutation. */
export type DeleteGitBlamePayloadGitBlameEdgeArgs = {
  orderBy?: InputMaybe<Array<GitBlamesOrderBy>>;
};

/** All input for the `deleteGitCommitByNodeId` mutation. */
export type DeleteGitCommitByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitCommit` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGitCommit` mutation. */
export type DeleteGitCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  hash: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GitCommit` mutation. */
export type DeleteGitCommitPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGitCommitNodeId?: Maybe<Scalars['ID']>;
  /** The `GitCommit` that was deleted by this mutation. */
  gitCommit?: Maybe<GitCommit>;
  /** An edge for our `GitCommit`. May be used by Relay 1. */
  gitCommitEdge?: Maybe<GitCommitsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GitCommit` mutation. */
export type DeleteGitCommitPayloadGitCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>;
};

/** All input for the `deleteGitCommitStatByNodeId` mutation. */
export type DeleteGitCommitStatByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitCommitStat` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGitCommitStat` mutation. */
export type DeleteGitCommitStatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  commitHash: Scalars['String'];
  filePath: Scalars['String'];
  newFileMode: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GitCommitStat` mutation. */
export type DeleteGitCommitStatPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGitCommitStatNodeId?: Maybe<Scalars['ID']>;
  /** The `GitCommitStat` that was deleted by this mutation. */
  gitCommitStat?: Maybe<GitCommitStat>;
  /** An edge for our `GitCommitStat`. May be used by Relay 1. */
  gitCommitStatEdge?: Maybe<GitCommitStatsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitCommitStat`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GitCommitStat` mutation. */
export type DeleteGitCommitStatPayloadGitCommitStatEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>;
};

/** All input for the `deleteGitFileByNodeId` mutation. */
export type DeleteGitFileByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitFile` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGitFile` mutation. */
export type DeleteGitFileInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GitFile` mutation. */
export type DeleteGitFilePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGitFileNodeId?: Maybe<Scalars['ID']>;
  /** The `GitFile` that was deleted by this mutation. */
  gitFile?: Maybe<GitFile>;
  /** An edge for our `GitFile`. May be used by Relay 1. */
  gitFileEdge?: Maybe<GitFilesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GitFile` mutation. */
export type DeleteGitFilePayloadGitFileEdgeArgs = {
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>;
};

/** All input for the `deleteGitRefByNodeId` mutation. */
export type DeleteGitRefByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitRef` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGitRef` mutation. */
export type DeleteGitRefInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GitRef` mutation. */
export type DeleteGitRefPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGitRefNodeId?: Maybe<Scalars['ID']>;
  /** The `GitRef` that was deleted by this mutation. */
  gitRef?: Maybe<GitRef>;
  /** An edge for our `GitRef`. May be used by Relay 1. */
  gitRefEdge?: Maybe<GitRefsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitRef`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GitRef` mutation. */
export type DeleteGitRefPayloadGitRefEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>;
};

/** All input for the `deleteGithubIssueByNodeId` mutation. */
export type DeleteGithubIssueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubIssue` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubIssue` mutation. */
export type DeleteGithubIssueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  databaseId: Scalars['Int'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GithubIssue` mutation. */
export type DeleteGithubIssuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubIssueNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubIssue` that was deleted by this mutation. */
  githubIssue?: Maybe<GithubIssue>;
  /** An edge for our `GithubIssue`. May be used by Relay 1. */
  githubIssueEdge?: Maybe<GithubIssuesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubIssue` mutation. */
export type DeleteGithubIssuePayloadGithubIssueEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
};

/** All input for the `deleteGithubPullRequestByNodeId` mutation. */
export type DeleteGithubPullRequestByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubPullRequest` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubPullRequestCommitByNodeId` mutation. */
export type DeleteGithubPullRequestCommitByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubPullRequestCommit` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubPullRequestCommit` mutation. */
export type DeleteGithubPullRequestCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  hash: Scalars['String'];
  prNumber: Scalars['Int'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GithubPullRequestCommit` mutation. */
export type DeleteGithubPullRequestCommitPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubPullRequestCommitNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubPullRequestCommit` that was deleted by this mutation. */
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>;
  /** An edge for our `GithubPullRequestCommit`. May be used by Relay 1. */
  githubPullRequestCommitEdge?: Maybe<GithubPullRequestCommitsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestCommit`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubPullRequestCommit` mutation. */
export type DeleteGithubPullRequestCommitPayloadGithubPullRequestCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>;
};

/** All input for the `deleteGithubPullRequest` mutation. */
export type DeleteGithubPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  databaseId: Scalars['Int'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GithubPullRequest` mutation. */
export type DeleteGithubPullRequestPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubPullRequestNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubPullRequest` that was deleted by this mutation. */
  githubPullRequest?: Maybe<GithubPullRequest>;
  /** An edge for our `GithubPullRequest`. May be used by Relay 1. */
  githubPullRequestEdge?: Maybe<GithubPullRequestsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubPullRequest` mutation. */
export type DeleteGithubPullRequestPayloadGithubPullRequestEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>;
};

/** All input for the `deleteGithubPullRequestReviewByNodeId` mutation. */
export type DeleteGithubPullRequestReviewByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubPullRequestReview` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubPullRequestReview` mutation. */
export type DeleteGithubPullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

/** The output of our delete `GithubPullRequestReview` mutation. */
export type DeleteGithubPullRequestReviewPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubPullRequestReviewNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubPullRequestReview` that was deleted by this mutation. */
  githubPullRequestReview?: Maybe<GithubPullRequestReview>;
  /** An edge for our `GithubPullRequestReview`. May be used by Relay 1. */
  githubPullRequestReviewEdge?: Maybe<GithubPullRequestReviewsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestReview`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubPullRequestReview` mutation. */
export type DeleteGithubPullRequestReviewPayloadGithubPullRequestReviewEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>;
};

/** All input for the `deleteGithubRepoInfoByNodeId` mutation. */
export type DeleteGithubRepoInfoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubRepoInfo` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubRepoInfoByOwnerAndName` mutation. */
export type DeleteGithubRepoInfoByOwnerAndNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: Scalars['String'];
};

/** All input for the `deleteGithubRepoInfo` mutation. */
export type DeleteGithubRepoInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
};

/** The output of our delete `GithubRepoInfo` mutation. */
export type DeleteGithubRepoInfoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubRepoInfoNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubRepoInfo` that was deleted by this mutation. */
  githubRepoInfo?: Maybe<GithubRepoInfo>;
  /** An edge for our `GithubRepoInfo`. May be used by Relay 1. */
  githubRepoInfoEdge?: Maybe<GithubRepoInfosEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubRepoInfo` mutation. */
export type DeleteGithubRepoInfoPayloadGithubRepoInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>;
};

/** All input for the `deleteGithubStargazerByNodeId` mutation. */
export type DeleteGithubStargazerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubStargazer` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubStargazer` mutation. */
export type DeleteGithubStargazerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GithubStargazer` mutation. */
export type DeleteGithubStargazerPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubStargazerNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubStargazer` that was deleted by this mutation. */
  githubStargazer?: Maybe<GithubStargazer>;
  /** An edge for our `GithubStargazer`. May be used by Relay 1. */
  githubStargazerEdge?: Maybe<GithubStargazersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubStargazer` mutation. */
export type DeleteGithubStargazerPayloadGithubStargazerEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>;
};

/** All input for the `deleteRepoByNodeId` mutation. */
export type DeleteRepoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Repo` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoImportByNodeId` mutation. */
export type DeleteRepoImportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoImport` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoImport` mutation. */
export type DeleteRepoImportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `RepoImport` mutation. */
export type DeleteRepoImportPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoImportNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImport` that was deleted by this mutation. */
  repoImport?: Maybe<RepoImport>;
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>;
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>;
};


/** The output of our delete `RepoImport` mutation. */
export type DeleteRepoImportPayloadRepoImportEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>;
};

/** All input for the `deleteRepoImportTypeByNodeId` mutation. */
export type DeleteRepoImportTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoImportType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoImportType` mutation. */
export type DeleteRepoImportTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** The output of our delete `RepoImportType` mutation. */
export type DeleteRepoImportTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoImportTypeNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImportType` that was deleted by this mutation. */
  repoImportType?: Maybe<RepoImportType>;
  /** An edge for our `RepoImportType`. May be used by Relay 1. */
  repoImportTypeEdge?: Maybe<RepoImportTypesEdge>;
};


/** The output of our delete `RepoImportType` mutation. */
export type DeleteRepoImportTypePayloadRepoImportTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>;
};

/** All input for the `deleteRepo` mutation. */
export type DeleteRepoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Repo` mutation. */
export type DeleteRepoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Repo` that was deleted by this mutation. */
  repo?: Maybe<Repo>;
  /** An edge for our `Repo`. May be used by Relay 1. */
  repoEdge?: Maybe<ReposEdge>;
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImport?: Maybe<RepoImport>;
};


/** The output of our delete `Repo` mutation. */
export type DeleteRepoPayloadRepoEdgeArgs = {
  orderBy?: InputMaybe<Array<ReposOrderBy>>;
};

/** All input for the `deleteRepoSyncByNodeId` mutation. */
export type DeleteRepoSyncByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSync` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoSyncByRepoIdAndSyncType` mutation. */
export type DeleteRepoSyncByRepoIdAndSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
  syncType: Scalars['String'];
};

/** All input for the `deleteRepoSync` mutation. */
export type DeleteRepoSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteRepoSyncLogByNodeId` mutation. */
export type DeleteRepoSyncLogByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncLog` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoSyncLog` mutation. */
export type DeleteRepoSyncLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** The output of our delete `RepoSyncLog` mutation. */
export type DeleteRepoSyncLogPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncLogNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncLog` that was deleted by this mutation. */
  repoSyncLog?: Maybe<RepoSyncLog>;
  /** An edge for our `RepoSyncLog`. May be used by Relay 1. */
  repoSyncLogEdge?: Maybe<RepoSyncLogsEdge>;
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>;
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueue?: Maybe<RepoSyncQueue>;
};


/** The output of our delete `RepoSyncLog` mutation. */
export type DeleteRepoSyncLogPayloadRepoSyncLogEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>;
};

/** All input for the `deleteRepoSyncLogTypeByNodeId` mutation. */
export type DeleteRepoSyncLogTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncLogType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoSyncLogType` mutation. */
export type DeleteRepoSyncLogTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** The output of our delete `RepoSyncLogType` mutation. */
export type DeleteRepoSyncLogTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncLogTypeNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncLogType` that was deleted by this mutation. */
  repoSyncLogType?: Maybe<RepoSyncLogType>;
  /** An edge for our `RepoSyncLogType`. May be used by Relay 1. */
  repoSyncLogTypeEdge?: Maybe<RepoSyncLogTypesEdge>;
};


/** The output of our delete `RepoSyncLogType` mutation. */
export type DeleteRepoSyncLogTypePayloadRepoSyncLogTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>;
};

/** The output of our delete `RepoSync` mutation. */
export type DeleteRepoSyncPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repo?: Maybe<Repo>;
  /** The `RepoSync` that was deleted by this mutation. */
  repoSync?: Maybe<RepoSync>;
  /** An edge for our `RepoSync`. May be used by Relay 1. */
  repoSyncEdge?: Maybe<RepoSyncsEdge>;
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>;
};


/** The output of our delete `RepoSync` mutation. */
export type DeleteRepoSyncPayloadRepoSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>;
};

/** All input for the `deleteRepoSyncQueueByNodeId` mutation. */
export type DeleteRepoSyncQueueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncQueue` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoSyncQueue` mutation. */
export type DeleteRepoSyncQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** The output of our delete `RepoSyncQueue` mutation. */
export type DeleteRepoSyncQueuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncQueueNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSync?: Maybe<RepoSync>;
  /** The `RepoSyncQueue` that was deleted by this mutation. */
  repoSyncQueue?: Maybe<RepoSyncQueue>;
  /** An edge for our `RepoSyncQueue`. May be used by Relay 1. */
  repoSyncQueueEdge?: Maybe<RepoSyncQueuesEdge>;
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>;
};


/** The output of our delete `RepoSyncQueue` mutation. */
export type DeleteRepoSyncQueuePayloadRepoSyncQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>;
};

/** All input for the `deleteRepoSyncQueueStatusTypeByNodeId` mutation. */
export type DeleteRepoSyncQueueStatusTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncQueueStatusType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoSyncQueueStatusType` mutation. */
export type DeleteRepoSyncQueueStatusTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** The output of our delete `RepoSyncQueueStatusType` mutation. */
export type DeleteRepoSyncQueueStatusTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncQueueStatusTypeNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncQueueStatusType` that was deleted by this mutation. */
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>;
  /** An edge for our `RepoSyncQueueStatusType`. May be used by Relay 1. */
  repoSyncQueueStatusTypeEdge?: Maybe<RepoSyncQueueStatusTypesEdge>;
};


/** The output of our delete `RepoSyncQueueStatusType` mutation. */
export type DeleteRepoSyncQueueStatusTypePayloadRepoSyncQueueStatusTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>;
};

/** All input for the `deleteRepoSyncTypeByNodeId` mutation. */
export type DeleteRepoSyncTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoSyncType` mutation. */
export type DeleteRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** The output of our delete `RepoSyncType` mutation. */
export type DeleteRepoSyncTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncTypeNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncType` that was deleted by this mutation. */
  repoSyncType?: Maybe<RepoSyncType>;
  /** An edge for our `RepoSyncType`. May be used by Relay 1. */
  repoSyncTypeEdge?: Maybe<RepoSyncTypesEdge>;
};


/** The output of our delete `RepoSyncType` mutation. */
export type DeleteRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};

/** All input for the `deleteSchemaMigrationByNodeId` mutation. */
export type DeleteSchemaMigrationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SchemaMigration` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSchemaMigration` mutation. */
export type DeleteSchemaMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  version: Scalars['BigInt'];
};

/** The output of our delete `SchemaMigration` mutation. */
export type DeleteSchemaMigrationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSchemaMigrationNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SchemaMigration` that was deleted by this mutation. */
  schemaMigration?: Maybe<SchemaMigration>;
  /** An edge for our `SchemaMigration`. May be used by Relay 1. */
  schemaMigrationEdge?: Maybe<SchemaMigrationsEdge>;
};


/** The output of our delete `SchemaMigration` mutation. */
export type DeleteSchemaMigrationPayloadSchemaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>;
};

/** All input for the `deleteSchemaMigrationsHistoryByNodeId` mutation. */
export type DeleteSchemaMigrationsHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SchemaMigrationsHistory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSchemaMigrationsHistory` mutation. */
export type DeleteSchemaMigrationsHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `SchemaMigrationsHistory` mutation. */
export type DeleteSchemaMigrationsHistoryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSchemaMigrationsHistoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SchemaMigrationsHistory` that was deleted by this mutation. */
  schemaMigrationsHistory?: Maybe<SchemaMigrationsHistory>;
  /** An edge for our `SchemaMigrationsHistory`. May be used by Relay 1. */
  schemaMigrationsHistoryEdge?: Maybe<SchemaMigrationsHistoriesEdge>;
};


/** The output of our delete `SchemaMigrationsHistory` mutation. */
export type DeleteSchemaMigrationsHistoryPayloadSchemaMigrationsHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsHistoriesOrderBy>>;
};

/** All input for the `deleteServiceAuthCredentialByNodeId` mutation. */
export type DeleteServiceAuthCredentialByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ServiceAuthCredential` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteServiceAuthCredential` mutation. */
export type DeleteServiceAuthCredentialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `ServiceAuthCredential` mutation. */
export type DeleteServiceAuthCredentialPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedServiceAuthCredentialNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ServiceAuthCredential` that was deleted by this mutation. */
  serviceAuthCredential?: Maybe<ServiceAuthCredential>;
  /** An edge for our `ServiceAuthCredential`. May be used by Relay 1. */
  serviceAuthCredentialEdge?: Maybe<ServiceAuthCredentialsEdge>;
  /** Reads a single `ServiceAuthCredentialType` that is related to this `ServiceAuthCredential`. */
  serviceAuthCredentialTypeByType?: Maybe<ServiceAuthCredentialType>;
};


/** The output of our delete `ServiceAuthCredential` mutation. */
export type DeleteServiceAuthCredentialPayloadServiceAuthCredentialEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceAuthCredentialsOrderBy>>;
};

/** All input for the `deleteServiceAuthCredentialTypeByNodeId` mutation. */
export type DeleteServiceAuthCredentialTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ServiceAuthCredentialType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteServiceAuthCredentialType` mutation. */
export type DeleteServiceAuthCredentialTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** The output of our delete `ServiceAuthCredentialType` mutation. */
export type DeleteServiceAuthCredentialTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedServiceAuthCredentialTypeNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ServiceAuthCredentialType` that was deleted by this mutation. */
  serviceAuthCredentialType?: Maybe<ServiceAuthCredentialType>;
  /** An edge for our `ServiceAuthCredentialType`. May be used by Relay 1. */
  serviceAuthCredentialTypeEdge?: Maybe<ServiceAuthCredentialTypesEdge>;
};


/** The output of our delete `ServiceAuthCredentialType` mutation. */
export type DeleteServiceAuthCredentialTypePayloadServiceAuthCredentialTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceAuthCredentialTypesOrderBy>>;
};

/** All input for the `deleteTrivyRepoScanByNodeId` mutation. */
export type DeleteTrivyRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TrivyRepoScan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTrivyRepoScan` mutation. */
export type DeleteTrivyRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
};

/** The output of our delete `TrivyRepoScan` mutation. */
export type DeleteTrivyRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedTrivyRepoScanNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `TrivyRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `TrivyRepoScan` that was deleted by this mutation. */
  trivyRepoScan?: Maybe<TrivyRepoScan>;
  /** An edge for our `TrivyRepoScan`. May be used by Relay 1. */
  trivyRepoScanEdge?: Maybe<TrivyRepoScansEdge>;
};


/** The output of our delete `TrivyRepoScan` mutation. */
export type DeleteTrivyRepoScanPayloadTrivyRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<TrivyRepoScansOrderBy>>;
};

export type DisplayDatabaseConnection = {
  database?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['String']>;
};

export type GitBlame = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  authorEmail?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorWhen?: Maybe<Scalars['Datetime']>;
  commitHash?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  lineNo: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  path: Scalars['String'];
  /** Reads a single `Repo` that is related to this `GitBlame`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
};

/**
 * A condition to be used against `GitBlame` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GitBlameCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorName` field. */
  authorName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `commitHash` field. */
  commitHash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `line` field. */
  line?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineNo` field. */
  lineNo?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `GitBlame` object types. All fields are combined with a logical ‘and.’ */
export type GitBlameFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitBlameFilter>>;
  /** Filter by the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorName` field. */
  authorName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `commitHash` field. */
  commitHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `line` field. */
  line?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lineNo` field. */
  lineNo?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitBlameFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitBlameFilter>>;
  /** Filter by the object’s `path` field. */
  path?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GitBlame` */
export type GitBlameInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorEmail?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  commitHash?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  lineNo: Scalars['Int'];
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitBlame`. Fields that are set will be updated. */
export type GitBlamePatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorEmail?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  commitHash?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  lineNo?: InputMaybe<Scalars['Int']>;
  path?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `GitBlame` values. */
export type GitBlamesConnection = {
  /** A list of edges which contains the `GitBlame` and cursor to aid in pagination. */
  edges: Array<GitBlamesEdge>;
  /** A list of `GitBlame` objects. */
  nodes: Array<GitBlame>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitBlame` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitBlame` edge in the connection. */
export type GitBlamesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitBlame` at the end of the edge. */
  node: GitBlame;
};

/** Methods to use when ordering `GitBlame`. */
export enum GitBlamesOrderBy {
  AuthorEmailAsc = 'AUTHOR_EMAIL_ASC',
  AuthorEmailDesc = 'AUTHOR_EMAIL_DESC',
  AuthorNameAsc = 'AUTHOR_NAME_ASC',
  AuthorNameDesc = 'AUTHOR_NAME_DESC',
  AuthorWhenAsc = 'AUTHOR_WHEN_ASC',
  AuthorWhenDesc = 'AUTHOR_WHEN_DESC',
  CommitHashAsc = 'COMMIT_HASH_ASC',
  CommitHashDesc = 'COMMIT_HASH_DESC',
  LineAsc = 'LINE_ASC',
  LineDesc = 'LINE_DESC',
  LineNoAsc = 'LINE_NO_ASC',
  LineNoDesc = 'LINE_NO_DESC',
  Natural = 'NATURAL',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

export type GitBranch = {
  _mergestatSyncedAt?: Maybe<Scalars['Datetime']>;
  fullName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remote?: Maybe<Scalars['String']>;
  repoId?: Maybe<Scalars['UUID']>;
  tagCommitHash?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GitBranch` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GitBranchCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `remote` field. */
  remote?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `target` field. */
  target?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GitBranch` object types. All fields are combined with a logical ‘and.’ */
export type GitBranchFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitBranchFilter>>;
  /** Filter by the object’s `fullName` field. */
  fullName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitBranchFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitBranchFilter>>;
  /** Filter by the object’s `remote` field. */
  remote?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `target` field. */
  target?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GitBranch` */
export type GitBranchInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remote?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  tagCommitHash?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GitBranch` values. */
export type GitBranchesConnection = {
  /** A list of edges which contains the `GitBranch` and cursor to aid in pagination. */
  edges: Array<GitBranchesEdge>;
  /** A list of `GitBranch` objects. */
  nodes: Array<GitBranch>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitBranch` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitBranch` edge in the connection. */
export type GitBranchesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitBranch` at the end of the edge. */
  node: GitBranch;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** Git repository commits */
export type GitCommit = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  authorEmail: Scalars['String'];
  authorName: Scalars['String'];
  authorWhen: Scalars['Datetime'];
  committerEmail: Scalars['String'];
  committerName: Scalars['String'];
  committerWhen: Scalars['Datetime'];
  hash: Scalars['String'];
  message: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  parents: Scalars['Int'];
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
};

/**
 * A condition to be used against `GitCommit` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GitCommitCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorName` field. */
  authorName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `committerEmail` field. */
  committerEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `committerName` field. */
  committerName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `committerWhen` field. */
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `parents` field. */
  parents?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `GitCommit` object types. All fields are combined with a logical ‘and.’ */
export type GitCommitFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitCommitFilter>>;
  /** Filter by the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorName` field. */
  authorName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `committerEmail` field. */
  committerEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `committerName` field. */
  committerName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `committerWhen` field. */
  committerWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `message` field. */
  message?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitCommitFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitCommitFilter>>;
  /** Filter by the object’s `parents` field. */
  parents?: InputMaybe<IntFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GitCommit` */
export type GitCommitInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorEmail: Scalars['String'];
  authorName: Scalars['String'];
  authorWhen: Scalars['Datetime'];
  committerEmail: Scalars['String'];
  committerName: Scalars['String'];
  committerWhen: Scalars['Datetime'];
  hash: Scalars['String'];
  message: Scalars['String'];
  parents: Scalars['Int'];
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitCommit`. Fields that are set will be updated. */
export type GitCommitPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorEmail?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  committerEmail?: InputMaybe<Scalars['String']>;
  committerName?: InputMaybe<Scalars['String']>;
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  hash?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  parents?: InputMaybe<Scalars['Int']>;
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** Commit stats */
export type GitCommitStat = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  additions: Scalars['Int'];
  commitHash: Scalars['String'];
  deletions: Scalars['Int'];
  filePath: Scalars['String'];
  newFileMode: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  oldFileMode: Scalars['String'];
  /** Reads a single `Repo` that is related to this `GitCommitStat`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
};

/**
 * A condition to be used against `GitCommitStat` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GitCommitStatCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `additions` field. */
  additions?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `commitHash` field. */
  commitHash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `deletions` field. */
  deletions?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `filePath` field. */
  filePath?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `newFileMode` field. */
  newFileMode?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `oldFileMode` field. */
  oldFileMode?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `GitCommitStat` object types. All fields are combined with a logical ‘and.’ */
export type GitCommitStatFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `additions` field. */
  additions?: InputMaybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitCommitStatFilter>>;
  /** Filter by the object’s `commitHash` field. */
  commitHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `deletions` field. */
  deletions?: InputMaybe<IntFilter>;
  /** Filter by the object’s `filePath` field. */
  filePath?: InputMaybe<StringFilter>;
  /** Filter by the object’s `newFileMode` field. */
  newFileMode?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitCommitStatFilter>;
  /** Filter by the object’s `oldFileMode` field. */
  oldFileMode?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitCommitStatFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GitCommitStat` */
export type GitCommitStatInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  additions: Scalars['Int'];
  commitHash: Scalars['String'];
  deletions: Scalars['Int'];
  filePath: Scalars['String'];
  newFileMode?: InputMaybe<Scalars['String']>;
  oldFileMode?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitCommitStat`. Fields that are set will be updated. */
export type GitCommitStatPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  additions?: InputMaybe<Scalars['Int']>;
  commitHash?: InputMaybe<Scalars['String']>;
  deletions?: InputMaybe<Scalars['Int']>;
  filePath?: InputMaybe<Scalars['String']>;
  newFileMode?: InputMaybe<Scalars['String']>;
  oldFileMode?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `GitCommitStat` values. */
export type GitCommitStatsConnection = {
  /** A list of edges which contains the `GitCommitStat` and cursor to aid in pagination. */
  edges: Array<GitCommitStatsEdge>;
  /** A list of `GitCommitStat` objects. */
  nodes: Array<GitCommitStat>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitCommitStat` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitCommitStat` edge in the connection. */
export type GitCommitStatsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitCommitStat` at the end of the edge. */
  node: GitCommitStat;
};

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
  NewFileModeAsc = 'NEW_FILE_MODE_ASC',
  NewFileModeDesc = 'NEW_FILE_MODE_DESC',
  OldFileModeAsc = 'OLD_FILE_MODE_ASC',
  OldFileModeDesc = 'OLD_FILE_MODE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** A connection to a list of `GitCommit` values. */
export type GitCommitsConnection = {
  /** A list of edges which contains the `GitCommit` and cursor to aid in pagination. */
  edges: Array<GitCommitsEdge>;
  /** A list of `GitCommit` objects. */
  nodes: Array<GitCommit>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitCommit` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitCommit` edge in the connection. */
export type GitCommitsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitCommit` at the end of the edge. */
  node: GitCommit;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** Git repository files */
export type GitFile = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  contents?: Maybe<Scalars['String']>;
  executable: Scalars['Boolean'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  path: Scalars['String'];
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
};

/** A condition to be used against `GitFile` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GitFileCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `contents` field. */
  contents?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `executable` field. */
  executable?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `GitFile` object types. All fields are combined with a logical ‘and.’ */
export type GitFileFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitFileFilter>>;
  /** Filter by the object’s `contents` field. */
  contents?: InputMaybe<StringFilter>;
  /** Filter by the object’s `executable` field. */
  executable?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitFileFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitFileFilter>>;
  /** Filter by the object’s `path` field. */
  path?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GitFile` */
export type GitFileInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  contents?: InputMaybe<Scalars['String']>;
  executable: Scalars['Boolean'];
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitFile`. Fields that are set will be updated. */
export type GitFilePatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  contents?: InputMaybe<Scalars['String']>;
  executable?: InputMaybe<Scalars['Boolean']>;
  path?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `GitFile` values. */
export type GitFilesConnection = {
  /** A list of edges which contains the `GitFile` and cursor to aid in pagination. */
  edges: Array<GitFilesEdge>;
  /** A list of `GitFile` objects. */
  nodes: Array<GitFile>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitFile` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitFile` edge in the connection. */
export type GitFilesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitFile` at the end of the edge. */
  node: GitFile;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** Refs for a Git repo */
export type GitRef = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  fullName: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  remote?: Maybe<Scalars['String']>;
  /** Reads a single `Repo` that is related to this `GitRef`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  tagCommitHash?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** A condition to be used against `GitRef` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GitRefCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `remote` field. */
  remote?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `target` field. */
  target?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GitRef` object types. All fields are combined with a logical ‘and.’ */
export type GitRefFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitRefFilter>>;
  /** Filter by the object’s `fullName` field. */
  fullName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitRefFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitRefFilter>>;
  /** Filter by the object’s `remote` field. */
  remote?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `target` field. */
  target?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GitRef` */
export type GitRefInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remote?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
  tagCommitHash?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GitRef`. Fields that are set will be updated. */
export type GitRefPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remote?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  tagCommitHash?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GitRef` values. */
export type GitRefsConnection = {
  /** A list of edges which contains the `GitRef` and cursor to aid in pagination. */
  edges: Array<GitRefsEdge>;
  /** A list of `GitRef` objects. */
  nodes: Array<GitRef>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitRef` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitRef` edge in the connection. */
export type GitRefsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitRef` at the end of the edge. */
  node: GitRef;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

export type GitTag = {
  _mergestatSyncedAt?: Maybe<Scalars['Datetime']>;
  fullName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remote?: Maybe<Scalars['String']>;
  repoId?: Maybe<Scalars['UUID']>;
  tagCommitHash?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** A condition to be used against `GitTag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GitTagCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `remote` field. */
  remote?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `target` field. */
  target?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GitTag` object types. All fields are combined with a logical ‘and.’ */
export type GitTagFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitTagFilter>>;
  /** Filter by the object’s `fullName` field. */
  fullName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitTagFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitTagFilter>>;
  /** Filter by the object’s `remote` field. */
  remote?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `tagCommitHash` field. */
  tagCommitHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `target` field. */
  target?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GitTag` */
export type GitTagInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remote?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  tagCommitHash?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GitTag` values. */
export type GitTagsConnection = {
  /** A list of edges which contains the `GitTag` and cursor to aid in pagination. */
  edges: Array<GitTagsEdge>;
  /** A list of `GitTag` objects. */
  nodes: Array<GitTag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitTag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitTag` edge in the connection. */
export type GitTagsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitTag` at the end of the edge. */
  node: GitTag;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** GitHub issues */
export type GithubIssue = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  authorLogin?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  closed?: Maybe<Scalars['Boolean']>;
  closedAt?: Maybe<Scalars['Datetime']>;
  commentCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  createdViaEmail?: Maybe<Scalars['Boolean']>;
  databaseId: Scalars['Int'];
  editorLogin?: Maybe<Scalars['String']>;
  includesCreatedEdit?: Maybe<Scalars['Boolean']>;
  labelCount?: Maybe<Scalars['Int']>;
  labels: Scalars['JSON'];
  lastEditedAt?: Maybe<Scalars['Datetime']>;
  locked?: Maybe<Scalars['Boolean']>;
  milestoneCount?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  number: Scalars['Int'];
  participantCount?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['Datetime']>;
  reactionCount?: Maybe<Scalars['Int']>;
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  url?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GithubIssue` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GithubIssueCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `closed` field. */
  closed?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `closedAt` field. */
  closedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `commentCount` field. */
  commentCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `databaseId` field. */
  databaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `includesCreatedEdit` field. */
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `labelCount` field. */
  labelCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `labels` field. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `locked` field. */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `milestoneCount` field. */
  milestoneCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `number` field. */
  number?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `participantCount` field. */
  participantCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `reactionCount` field. */
  reactionCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GithubIssue` object types. All fields are combined with a logical ‘and.’ */
export type GithubIssueFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubIssueFilter>>;
  /** Filter by the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<StringFilter>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `closed` field. */
  closed?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `closedAt` field. */
  closedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `commentCount` field. */
  commentCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `databaseId` field. */
  databaseId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<StringFilter>;
  /** Filter by the object’s `includesCreatedEdit` field. */
  includesCreatedEdit?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `labelCount` field. */
  labelCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `labels` field. */
  labels?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `locked` field. */
  locked?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `milestoneCount` field. */
  milestoneCount?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubIssueFilter>;
  /** Filter by the object’s `number` field. */
  number?: InputMaybe<IntFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubIssueFilter>>;
  /** Filter by the object’s `participantCount` field. */
  participantCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `reactionCount` field. */
  reactionCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `state` field. */
  state?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GithubIssue` */
export type GithubIssueInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorLogin?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  closedAt?: InputMaybe<Scalars['Datetime']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  databaseId: Scalars['Int'];
  editorLogin?: InputMaybe<Scalars['String']>;
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>;
  labelCount?: InputMaybe<Scalars['Int']>;
  labels?: InputMaybe<Scalars['JSON']>;
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  milestoneCount?: InputMaybe<Scalars['Int']>;
  number: Scalars['Int'];
  participantCount?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  reactionCount?: InputMaybe<Scalars['Int']>;
  repoId: Scalars['UUID'];
  state?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubIssue`. Fields that are set will be updated. */
export type GithubIssuePatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorLogin?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  closedAt?: InputMaybe<Scalars['Datetime']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  databaseId?: InputMaybe<Scalars['Int']>;
  editorLogin?: InputMaybe<Scalars['String']>;
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>;
  labelCount?: InputMaybe<Scalars['Int']>;
  labels?: InputMaybe<Scalars['JSON']>;
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  milestoneCount?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['Int']>;
  participantCount?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  reactionCount?: InputMaybe<Scalars['Int']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  state?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GithubIssue` values. */
export type GithubIssuesConnection = {
  /** A list of edges which contains the `GithubIssue` and cursor to aid in pagination. */
  edges: Array<GithubIssuesEdge>;
  /** A list of `GithubIssue` objects. */
  nodes: Array<GithubIssue>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubIssue` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubIssue` edge in the connection. */
export type GithubIssuesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubIssue` at the end of the edge. */
  node: GithubIssue;
};

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
  LabelsAsc = 'LABELS_ASC',
  LabelsDesc = 'LABELS_DESC',
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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** GitHub pull requests */
export type GithubPullRequest = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  additions?: Maybe<Scalars['Int']>;
  authorAssociation?: Maybe<Scalars['String']>;
  authorAvatarUrl?: Maybe<Scalars['String']>;
  authorLogin?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  baseRefName?: Maybe<Scalars['String']>;
  baseRefOid?: Maybe<Scalars['String']>;
  baseRepositoryName?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  changedFiles?: Maybe<Scalars['Int']>;
  closed?: Maybe<Scalars['Boolean']>;
  closedAt?: Maybe<Scalars['Datetime']>;
  commentCount?: Maybe<Scalars['Int']>;
  commitCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  createdViaEmail?: Maybe<Scalars['Boolean']>;
  databaseId: Scalars['Int'];
  deletions?: Maybe<Scalars['Int']>;
  editorLogin?: Maybe<Scalars['String']>;
  headRefName?: Maybe<Scalars['String']>;
  headRefOid?: Maybe<Scalars['String']>;
  headRepositoryName?: Maybe<Scalars['String']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  labelCount?: Maybe<Scalars['Int']>;
  labels: Scalars['JSON'];
  lastEditedAt?: Maybe<Scalars['Datetime']>;
  locked?: Maybe<Scalars['Boolean']>;
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  mantainerCanModify?: Maybe<Scalars['Boolean']>;
  mergeable?: Maybe<Scalars['String']>;
  merged?: Maybe<Scalars['Boolean']>;
  mergedAt?: Maybe<Scalars['Datetime']>;
  mergedBy?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  number?: Maybe<Scalars['Int']>;
  participantCount?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  reviewDecision?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  url?: Maybe<Scalars['String']>;
};

/** GitHub pull request commits */
export type GithubPullRequestCommit = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  additions?: Maybe<Scalars['Int']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorWhen?: Maybe<Scalars['Datetime']>;
  changedFiles?: Maybe<Scalars['Int']>;
  committerEmail?: Maybe<Scalars['String']>;
  committerName?: Maybe<Scalars['String']>;
  committerWhen?: Maybe<Scalars['Datetime']>;
  deletions?: Maybe<Scalars['Int']>;
  hash: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  prNumber: Scalars['Int'];
  /** Reads a single `Repo` that is related to this `GithubPullRequestCommit`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  url?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GithubPullRequestCommit` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GithubPullRequestCommitCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `additions` field. */
  additions?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorName` field. */
  authorName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `changedFiles` field. */
  changedFiles?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `committerEmail` field. */
  committerEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `committerName` field. */
  committerName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `committerWhen` field. */
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `deletions` field. */
  deletions?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `prNumber` field. */
  prNumber?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GithubPullRequestCommit` object types. All fields are combined with a logical ‘and.’ */
export type GithubPullRequestCommitFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `additions` field. */
  additions?: InputMaybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubPullRequestCommitFilter>>;
  /** Filter by the object’s `authorEmail` field. */
  authorEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorName` field. */
  authorName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorWhen` field. */
  authorWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `changedFiles` field. */
  changedFiles?: InputMaybe<IntFilter>;
  /** Filter by the object’s `committerEmail` field. */
  committerEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `committerName` field. */
  committerName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `committerWhen` field. */
  committerWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletions` field. */
  deletions?: InputMaybe<IntFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `message` field. */
  message?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubPullRequestCommitFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubPullRequestCommitFilter>>;
  /** Filter by the object’s `prNumber` field. */
  prNumber?: InputMaybe<IntFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GithubPullRequestCommit` */
export type GithubPullRequestCommitInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  additions?: InputMaybe<Scalars['Int']>;
  authorEmail?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  changedFiles?: InputMaybe<Scalars['Int']>;
  committerEmail?: InputMaybe<Scalars['String']>;
  committerName?: InputMaybe<Scalars['String']>;
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  deletions?: InputMaybe<Scalars['Int']>;
  hash: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  prNumber: Scalars['Int'];
  repoId: Scalars['UUID'];
  url?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubPullRequestCommit`. Fields that are set will be updated. */
export type GithubPullRequestCommitPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  additions?: InputMaybe<Scalars['Int']>;
  authorEmail?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  changedFiles?: InputMaybe<Scalars['Int']>;
  committerEmail?: InputMaybe<Scalars['String']>;
  committerName?: InputMaybe<Scalars['String']>;
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  deletions?: InputMaybe<Scalars['Int']>;
  hash?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  prNumber?: InputMaybe<Scalars['Int']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  url?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GithubPullRequestCommit` values. */
export type GithubPullRequestCommitsConnection = {
  /** A list of edges which contains the `GithubPullRequestCommit` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestCommitsEdge>;
  /** A list of `GithubPullRequestCommit` objects. */
  nodes: Array<GithubPullRequestCommit>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubPullRequestCommit` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubPullRequestCommit` edge in the connection. */
export type GithubPullRequestCommitsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubPullRequestCommit` at the end of the edge. */
  node: GithubPullRequestCommit;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/**
 * A condition to be used against `GithubPullRequest` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GithubPullRequestCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `additions` field. */
  additions?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `authorAssociation` field. */
  authorAssociation?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorAvatarUrl` field. */
  authorAvatarUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorName` field. */
  authorName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `baseRefName` field. */
  baseRefName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `baseRefOid` field. */
  baseRefOid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `baseRepositoryName` field. */
  baseRepositoryName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `changedFiles` field. */
  changedFiles?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `closed` field. */
  closed?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `closedAt` field. */
  closedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `commentCount` field. */
  commentCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `commitCount` field. */
  commitCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `databaseId` field. */
  databaseId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `deletions` field. */
  deletions?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `headRefName` field. */
  headRefName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `headRefOid` field. */
  headRefOid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `headRepositoryName` field. */
  headRepositoryName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `isDraft` field. */
  isDraft?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `labelCount` field. */
  labelCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `labels` field. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `locked` field. */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `maintainerCanModify` field. */
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `mantainerCanModify` field. */
  mantainerCanModify?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `mergeable` field. */
  mergeable?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `merged` field. */
  merged?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `mergedAt` field. */
  mergedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `mergedBy` field. */
  mergedBy?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `number` field. */
  number?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `participantCount` field. */
  participantCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `reviewDecision` field. */
  reviewDecision?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GithubPullRequest` object types. All fields are combined with a logical ‘and.’ */
export type GithubPullRequestFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `additions` field. */
  additions?: InputMaybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubPullRequestFilter>>;
  /** Filter by the object’s `authorAssociation` field. */
  authorAssociation?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorAvatarUrl` field. */
  authorAvatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorName` field. */
  authorName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `baseRefName` field. */
  baseRefName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `baseRefOid` field. */
  baseRefOid?: InputMaybe<StringFilter>;
  /** Filter by the object’s `baseRepositoryName` field. */
  baseRepositoryName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `changedFiles` field. */
  changedFiles?: InputMaybe<IntFilter>;
  /** Filter by the object’s `closed` field. */
  closed?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `closedAt` field. */
  closedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `commentCount` field. */
  commentCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `commitCount` field. */
  commitCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `databaseId` field. */
  databaseId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `deletions` field. */
  deletions?: InputMaybe<IntFilter>;
  /** Filter by the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<StringFilter>;
  /** Filter by the object’s `headRefName` field. */
  headRefName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `headRefOid` field. */
  headRefOid?: InputMaybe<StringFilter>;
  /** Filter by the object’s `headRepositoryName` field. */
  headRepositoryName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isDraft` field. */
  isDraft?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `labelCount` field. */
  labelCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `labels` field. */
  labels?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `locked` field. */
  locked?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `maintainerCanModify` field. */
  maintainerCanModify?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `mantainerCanModify` field. */
  mantainerCanModify?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `mergeable` field. */
  mergeable?: InputMaybe<StringFilter>;
  /** Filter by the object’s `merged` field. */
  merged?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `mergedAt` field. */
  mergedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `mergedBy` field. */
  mergedBy?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubPullRequestFilter>;
  /** Filter by the object’s `number` field. */
  number?: InputMaybe<IntFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubPullRequestFilter>>;
  /** Filter by the object’s `participantCount` field. */
  participantCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `reviewDecision` field. */
  reviewDecision?: InputMaybe<StringFilter>;
  /** Filter by the object’s `state` field. */
  state?: InputMaybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GithubPullRequest` */
export type GithubPullRequestInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  additions?: InputMaybe<Scalars['Int']>;
  authorAssociation?: InputMaybe<Scalars['String']>;
  authorAvatarUrl?: InputMaybe<Scalars['String']>;
  authorLogin?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  baseRefName?: InputMaybe<Scalars['String']>;
  baseRefOid?: InputMaybe<Scalars['String']>;
  baseRepositoryName?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  changedFiles?: InputMaybe<Scalars['Int']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  closedAt?: InputMaybe<Scalars['Datetime']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  commitCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  databaseId: Scalars['Int'];
  deletions?: InputMaybe<Scalars['Int']>;
  editorLogin?: InputMaybe<Scalars['String']>;
  headRefName?: InputMaybe<Scalars['String']>;
  headRefOid?: InputMaybe<Scalars['String']>;
  headRepositoryName?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  labelCount?: InputMaybe<Scalars['Int']>;
  labels?: InputMaybe<Scalars['JSON']>;
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>;
  mantainerCanModify?: InputMaybe<Scalars['Boolean']>;
  mergeable?: InputMaybe<Scalars['String']>;
  merged?: InputMaybe<Scalars['Boolean']>;
  mergedAt?: InputMaybe<Scalars['Datetime']>;
  mergedBy?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  participantCount?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  repoId: Scalars['UUID'];
  reviewDecision?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubPullRequest`. Fields that are set will be updated. */
export type GithubPullRequestPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  additions?: InputMaybe<Scalars['Int']>;
  authorAssociation?: InputMaybe<Scalars['String']>;
  authorAvatarUrl?: InputMaybe<Scalars['String']>;
  authorLogin?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  baseRefName?: InputMaybe<Scalars['String']>;
  baseRefOid?: InputMaybe<Scalars['String']>;
  baseRepositoryName?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  changedFiles?: InputMaybe<Scalars['Int']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  closedAt?: InputMaybe<Scalars['Datetime']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  commitCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  databaseId?: InputMaybe<Scalars['Int']>;
  deletions?: InputMaybe<Scalars['Int']>;
  editorLogin?: InputMaybe<Scalars['String']>;
  headRefName?: InputMaybe<Scalars['String']>;
  headRefOid?: InputMaybe<Scalars['String']>;
  headRepositoryName?: InputMaybe<Scalars['String']>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  labelCount?: InputMaybe<Scalars['Int']>;
  labels?: InputMaybe<Scalars['JSON']>;
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>;
  mantainerCanModify?: InputMaybe<Scalars['Boolean']>;
  mergeable?: InputMaybe<Scalars['String']>;
  merged?: InputMaybe<Scalars['Boolean']>;
  mergedAt?: InputMaybe<Scalars['Datetime']>;
  mergedBy?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  participantCount?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  reviewDecision?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
};

/** GitHub pull request reviews */
export type GithubPullRequestReview = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  authorAssociation?: Maybe<Scalars['String']>;
  authorCanPushToRepository?: Maybe<Scalars['Boolean']>;
  authorLogin?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  createdViaEmail?: Maybe<Scalars['Boolean']>;
  editorLogin?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastEditedAt?: Maybe<Scalars['Datetime']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  prNumber: Scalars['Int'];
  publishedAt?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestReview`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  state?: Maybe<Scalars['String']>;
  submittedAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `GithubPullRequestReview` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GithubPullRequestReviewCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `authorAssociation` field. */
  authorAssociation?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorCanPushToRepository` field. */
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorUrl` field. */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `body` field. */
  body?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `commentCount` field. */
  commentCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `prNumber` field. */
  prNumber?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `submittedAt` field. */
  submittedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `GithubPullRequestReview` object types. All fields are combined with a logical ‘and.’ */
export type GithubPullRequestReviewFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubPullRequestReviewFilter>>;
  /** Filter by the object’s `authorAssociation` field. */
  authorAssociation?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorCanPushToRepository` field. */
  authorCanPushToRepository?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `authorLogin` field. */
  authorLogin?: InputMaybe<StringFilter>;
  /** Filter by the object’s `authorUrl` field. */
  authorUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `body` field. */
  body?: InputMaybe<StringFilter>;
  /** Filter by the object’s `commentCount` field. */
  commentCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdViaEmail` field. */
  createdViaEmail?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `editorLogin` field. */
  editorLogin?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastEditedAt` field. */
  lastEditedAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubPullRequestReviewFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubPullRequestReviewFilter>>;
  /** Filter by the object’s `prNumber` field. */
  prNumber?: InputMaybe<IntFilter>;
  /** Filter by the object’s `publishedAt` field. */
  publishedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `state` field. */
  state?: InputMaybe<StringFilter>;
  /** Filter by the object’s `submittedAt` field. */
  submittedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `GithubPullRequestReview` */
export type GithubPullRequestReviewInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorAssociation?: InputMaybe<Scalars['String']>;
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>;
  authorLogin?: InputMaybe<Scalars['String']>;
  authorUrl?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  editorLogin?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  prNumber: Scalars['Int'];
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  repoId: Scalars['UUID'];
  state?: InputMaybe<Scalars['String']>;
  submittedAt?: InputMaybe<Scalars['Datetime']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `GithubPullRequestReview`. Fields that are set will be updated. */
export type GithubPullRequestReviewPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  authorAssociation?: InputMaybe<Scalars['String']>;
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>;
  authorLogin?: InputMaybe<Scalars['String']>;
  authorUrl?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  editorLogin?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  prNumber?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  state?: InputMaybe<Scalars['String']>;
  submittedAt?: InputMaybe<Scalars['Datetime']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `GithubPullRequestReview` values. */
export type GithubPullRequestReviewsConnection = {
  /** A list of edges which contains the `GithubPullRequestReview` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestReviewsEdge>;
  /** A list of `GithubPullRequestReview` objects. */
  nodes: Array<GithubPullRequestReview>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubPullRequestReview` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubPullRequestReview` edge in the connection. */
export type GithubPullRequestReviewsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubPullRequestReview` at the end of the edge. */
  node: GithubPullRequestReview;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** A connection to a list of `GithubPullRequest` values. */
export type GithubPullRequestsConnection = {
  /** A list of edges which contains the `GithubPullRequest` and cursor to aid in pagination. */
  edges: Array<GithubPullRequestsEdge>;
  /** A list of `GithubPullRequest` objects. */
  nodes: Array<GithubPullRequest>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubPullRequest` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubPullRequest` edge in the connection. */
export type GithubPullRequestsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubPullRequest` at the end of the edge. */
  node: GithubPullRequest;
};

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
  LabelsAsc = 'LABELS_ASC',
  LabelsDesc = 'LABELS_DESC',
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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** GitHub metadata about a repo */
export type GithubRepoInfo = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  createdAt?: Maybe<Scalars['Datetime']>;
  defaultBranchName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diskUsage?: Maybe<Scalars['Int']>;
  forkCount?: Maybe<Scalars['Int']>;
  homepageUrl?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  isMirror?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  latestReleaseAuthor?: Maybe<Scalars['String']>;
  latestReleaseCreatedAt?: Maybe<Scalars['Datetime']>;
  latestReleaseName?: Maybe<Scalars['String']>;
  latestReleasePublishedAt?: Maybe<Scalars['Datetime']>;
  licenseKey?: Maybe<Scalars['String']>;
  licenseName?: Maybe<Scalars['String']>;
  licenseNickname?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  openGraphImageUrl?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  primaryLanguage?: Maybe<Scalars['String']>;
  pushedAt?: Maybe<Scalars['Datetime']>;
  releasesCount?: Maybe<Scalars['Int']>;
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  stargazersCount?: Maybe<Scalars['Int']>;
  totalIssuesCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  watchersCount?: Maybe<Scalars['Int']>;
};

/**
 * A condition to be used against `GithubRepoInfo` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GithubRepoInfoCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `defaultBranchName` field. */
  defaultBranchName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `diskUsage` field. */
  diskUsage?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `forkCount` field. */
  forkCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `homepageUrl` field. */
  homepageUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isDisabled` field. */
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isMirror` field. */
  isMirror?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isPrivate` field. */
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `latestReleaseAuthor` field. */
  latestReleaseAuthor?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `latestReleaseCreatedAt` field. */
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `latestReleaseName` field. */
  latestReleaseName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `latestReleasePublishedAt` field. */
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `licenseKey` field. */
  licenseKey?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `licenseName` field. */
  licenseName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `licenseNickname` field. */
  licenseNickname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `openGraphImageUrl` field. */
  openGraphImageUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `owner` field. */
  owner?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `primaryLanguage` field. */
  primaryLanguage?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `pushedAt` field. */
  pushedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `releasesCount` field. */
  releasesCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `stargazersCount` field. */
  stargazersCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `totalIssuesCount` field. */
  totalIssuesCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `watchersCount` field. */
  watchersCount?: InputMaybe<Scalars['Int']>;
};

/** A filter to be used against `GithubRepoInfo` object types. All fields are combined with a logical ‘and.’ */
export type GithubRepoInfoFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubRepoInfoFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `defaultBranchName` field. */
  defaultBranchName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `diskUsage` field. */
  diskUsage?: InputMaybe<IntFilter>;
  /** Filter by the object’s `forkCount` field. */
  forkCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `homepageUrl` field. */
  homepageUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isArchived` field. */
  isArchived?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isDisabled` field. */
  isDisabled?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isMirror` field. */
  isMirror?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isPrivate` field. */
  isPrivate?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `latestReleaseAuthor` field. */
  latestReleaseAuthor?: InputMaybe<StringFilter>;
  /** Filter by the object’s `latestReleaseCreatedAt` field. */
  latestReleaseCreatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `latestReleaseName` field. */
  latestReleaseName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `latestReleasePublishedAt` field. */
  latestReleasePublishedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `licenseKey` field. */
  licenseKey?: InputMaybe<StringFilter>;
  /** Filter by the object’s `licenseName` field. */
  licenseName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `licenseNickname` field. */
  licenseNickname?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubRepoInfoFilter>;
  /** Filter by the object’s `openGraphImageUrl` field. */
  openGraphImageUrl?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubRepoInfoFilter>>;
  /** Filter by the object’s `owner` field. */
  owner?: InputMaybe<StringFilter>;
  /** Filter by the object’s `primaryLanguage` field. */
  primaryLanguage?: InputMaybe<StringFilter>;
  /** Filter by the object’s `pushedAt` field. */
  pushedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `releasesCount` field. */
  releasesCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `stargazersCount` field. */
  stargazersCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `totalIssuesCount` field. */
  totalIssuesCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `watchersCount` field. */
  watchersCount?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `GithubRepoInfo` */
export type GithubRepoInfoInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  defaultBranchName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  diskUsage?: InputMaybe<Scalars['Int']>;
  forkCount?: InputMaybe<Scalars['Int']>;
  homepageUrl?: InputMaybe<Scalars['String']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  isMirror?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latestReleaseAuthor?: InputMaybe<Scalars['String']>;
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>;
  latestReleaseName?: InputMaybe<Scalars['String']>;
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>;
  licenseKey?: InputMaybe<Scalars['String']>;
  licenseName?: InputMaybe<Scalars['String']>;
  licenseNickname?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  openGraphImageUrl?: InputMaybe<Scalars['String']>;
  owner: Scalars['String'];
  primaryLanguage?: InputMaybe<Scalars['String']>;
  pushedAt?: InputMaybe<Scalars['Datetime']>;
  releasesCount?: InputMaybe<Scalars['Int']>;
  repoId: Scalars['UUID'];
  stargazersCount?: InputMaybe<Scalars['Int']>;
  totalIssuesCount?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  watchersCount?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `GithubRepoInfo`. Fields that are set will be updated. */
export type GithubRepoInfoPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  defaultBranchName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  diskUsage?: InputMaybe<Scalars['Int']>;
  forkCount?: InputMaybe<Scalars['Int']>;
  homepageUrl?: InputMaybe<Scalars['String']>;
  isArchived?: InputMaybe<Scalars['Boolean']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  isMirror?: InputMaybe<Scalars['Boolean']>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  latestReleaseAuthor?: InputMaybe<Scalars['String']>;
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>;
  latestReleaseName?: InputMaybe<Scalars['String']>;
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>;
  licenseKey?: InputMaybe<Scalars['String']>;
  licenseName?: InputMaybe<Scalars['String']>;
  licenseNickname?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  openGraphImageUrl?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  primaryLanguage?: InputMaybe<Scalars['String']>;
  pushedAt?: InputMaybe<Scalars['Datetime']>;
  releasesCount?: InputMaybe<Scalars['Int']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  stargazersCount?: InputMaybe<Scalars['Int']>;
  totalIssuesCount?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  watchersCount?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `GithubRepoInfo` values. */
export type GithubRepoInfosConnection = {
  /** A list of edges which contains the `GithubRepoInfo` and cursor to aid in pagination. */
  edges: Array<GithubRepoInfosEdge>;
  /** A list of `GithubRepoInfo` objects. */
  nodes: Array<GithubRepoInfo>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubRepoInfo` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubRepoInfo` edge in the connection. */
export type GithubRepoInfosEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubRepoInfo` at the end of the edge. */
  node: GithubRepoInfo;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** GitHub stargazers for a repo */
export type GithubStargazer = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  email?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  login: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  starredAt?: Maybe<Scalars['Datetime']>;
  twitter?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  website?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GithubStargazer` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GithubStargazerCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `bio` field. */
  bio?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `company` field. */
  company?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `location` field. */
  location?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `login` field. */
  login?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `starredAt` field. */
  starredAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `twitter` field. */
  twitter?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `website` field. */
  website?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GithubStargazer` object types. All fields are combined with a logical ‘and.’ */
export type GithubStargazerFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubStargazerFilter>>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `bio` field. */
  bio?: InputMaybe<StringFilter>;
  /** Filter by the object’s `company` field. */
  company?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `location` field. */
  location?: InputMaybe<StringFilter>;
  /** Filter by the object’s `login` field. */
  login?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubStargazerFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubStargazerFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `starredAt` field. */
  starredAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `twitter` field. */
  twitter?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `website` field. */
  website?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GithubStargazer` */
export type GithubStargazerInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
  starredAt?: InputMaybe<Scalars['Datetime']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  website?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubStargazer`. Fields that are set will be updated. */
export type GithubStargazerPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  starredAt?: InputMaybe<Scalars['Datetime']>;
  twitter?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  website?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GithubStargazer` values. */
export type GithubStargazersConnection = {
  /** A list of edges which contains the `GithubStargazer` and cursor to aid in pagination. */
  edges: Array<GithubStargazersEdge>;
  /** A list of `GithubStargazer` objects. */
  nodes: Array<GithubStargazer>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubStargazer` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubStargazer` edge in the connection. */
export type GithubStargazersEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubStargazer` at the end of the edge. */
  node: GithubStargazer;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** An interval of time that has passed where the smallest distinct unit is a second. */
export type Interval = {
  /** A quantity of days. */
  days?: Maybe<Scalars['Int']>;
  /** A quantity of hours. */
  hours?: Maybe<Scalars['Int']>;
  /** A quantity of minutes. */
  minutes?: Maybe<Scalars['Int']>;
  /** A quantity of months. */
  months?: Maybe<Scalars['Int']>;
  /**
   * A quantity of seconds. This is the only non-integer field, as all the other
   * fields will dump their overflow into a smaller unit of time. Intervals don’t
   * have a smaller unit than seconds.
   */
  seconds?: Maybe<Scalars['Float']>;
  /** A quantity of years. */
  years?: Maybe<Scalars['Int']>;
};

/** A filter to be used against Interval fields. All fields are combined with a logical ‘and.’ */
export type IntervalFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<IntervalInput>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<IntervalInput>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<IntervalInput>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<IntervalInput>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<IntervalInput>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<IntervalInput>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<IntervalInput>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<IntervalInput>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<IntervalInput>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<IntervalInput>>;
};

/** An interval of time that has passed where the smallest distinct unit is a second. */
export type IntervalInput = {
  /** A quantity of days. */
  days?: InputMaybe<Scalars['Int']>;
  /** A quantity of hours. */
  hours?: InputMaybe<Scalars['Int']>;
  /** A quantity of minutes. */
  minutes?: InputMaybe<Scalars['Int']>;
  /** A quantity of months. */
  months?: InputMaybe<Scalars['Int']>;
  /**
   * A quantity of seconds. This is the only non-integer field, as all the other
   * fields will dump their overflow into a smaller unit of time. Intervals don’t
   * have a smaller unit than seconds.
   */
  seconds?: InputMaybe<Scalars['Float']>;
  /** A quantity of years. */
  years?: InputMaybe<Scalars['Int']>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  containedBy?: InputMaybe<Scalars['JSON']>;
  /** Contains the specified JSON. */
  contains?: InputMaybe<Scalars['JSON']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: InputMaybe<Array<Scalars['String']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified key. */
  containsKey?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['JSON']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['JSON']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['JSON']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['JSON']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['JSON']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['JSON']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['JSON']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['JSON']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['JSON']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['JSON']>>;
};

export type LatestRepoSync = {
  createdAt?: Maybe<Scalars['Datetime']>;
  doneAt?: Maybe<Scalars['Datetime']>;
  id?: Maybe<Scalars['BigInt']>;
  repoSyncId?: Maybe<Scalars['UUID']>;
  startedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `LatestRepoSync` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LatestRepoSyncCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `doneAt` field. */
  doneAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `repoSyncId` field. */
  repoSyncId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `startedAt` field. */
  startedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `LatestRepoSync` object types. All fields are combined with a logical ‘and.’ */
export type LatestRepoSyncFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<LatestRepoSyncFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `doneAt` field. */
  doneAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<LatestRepoSyncFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<LatestRepoSyncFilter>>;
  /** Filter by the object’s `repoSyncId` field. */
  repoSyncId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `startedAt` field. */
  startedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
};

/** A connection to a list of `LatestRepoSync` values. */
export type LatestRepoSyncsConnection = {
  /** A list of edges which contains the `LatestRepoSync` and cursor to aid in pagination. */
  edges: Array<LatestRepoSyncsEdge>;
  /** A list of `LatestRepoSync` objects. */
  nodes: Array<LatestRepoSync>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LatestRepoSync` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LatestRepoSync` edge in the connection. */
export type LatestRepoSyncsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LatestRepoSync` at the end of the edge. */
  node: LatestRepoSync;
};

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
  StatusDesc = 'STATUS_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  addServiceAuthCredential?: Maybe<AddServiceAuthCredentialPayload>;
  /** Creates a single `GitBlame`. */
  createGitBlame?: Maybe<CreateGitBlamePayload>;
  /** Creates a single `GitBranch`. */
  createGitBranch?: Maybe<CreateGitBranchPayload>;
  /** Creates a single `GitCommit`. */
  createGitCommit?: Maybe<CreateGitCommitPayload>;
  /** Creates a single `GitCommitStat`. */
  createGitCommitStat?: Maybe<CreateGitCommitStatPayload>;
  /** Creates a single `GitFile`. */
  createGitFile?: Maybe<CreateGitFilePayload>;
  /** Creates a single `GitRef`. */
  createGitRef?: Maybe<CreateGitRefPayload>;
  /** Creates a single `GitTag`. */
  createGitTag?: Maybe<CreateGitTagPayload>;
  /** Creates a single `GithubIssue`. */
  createGithubIssue?: Maybe<CreateGithubIssuePayload>;
  /** Creates a single `GithubPullRequest`. */
  createGithubPullRequest?: Maybe<CreateGithubPullRequestPayload>;
  /** Creates a single `GithubPullRequestCommit`. */
  createGithubPullRequestCommit?: Maybe<CreateGithubPullRequestCommitPayload>;
  /** Creates a single `GithubPullRequestReview`. */
  createGithubPullRequestReview?: Maybe<CreateGithubPullRequestReviewPayload>;
  /** Creates a single `GithubRepoInfo`. */
  createGithubRepoInfo?: Maybe<CreateGithubRepoInfoPayload>;
  /** Creates a single `GithubStargazer`. */
  createGithubStargazer?: Maybe<CreateGithubStargazerPayload>;
  /** Creates a single `Repo`. */
  createRepo?: Maybe<CreateRepoPayload>;
  /** Creates a single `RepoImport`. */
  createRepoImport?: Maybe<CreateRepoImportPayload>;
  /** Creates a single `RepoImportType`. */
  createRepoImportType?: Maybe<CreateRepoImportTypePayload>;
  /** Creates a single `RepoSync`. */
  createRepoSync?: Maybe<CreateRepoSyncPayload>;
  /** Creates a single `RepoSyncLog`. */
  createRepoSyncLog?: Maybe<CreateRepoSyncLogPayload>;
  /** Creates a single `RepoSyncLogType`. */
  createRepoSyncLogType?: Maybe<CreateRepoSyncLogTypePayload>;
  /** Creates a single `RepoSyncQueue`. */
  createRepoSyncQueue?: Maybe<CreateRepoSyncQueuePayload>;
  /** Creates a single `RepoSyncQueueStatusType`. */
  createRepoSyncQueueStatusType?: Maybe<CreateRepoSyncQueueStatusTypePayload>;
  /** Creates a single `RepoSyncType`. */
  createRepoSyncType?: Maybe<CreateRepoSyncTypePayload>;
  /** Creates a single `SchemaMigration`. */
  createSchemaMigration?: Maybe<CreateSchemaMigrationPayload>;
  /** Creates a single `SchemaMigrationsHistory`. */
  createSchemaMigrationsHistory?: Maybe<CreateSchemaMigrationsHistoryPayload>;
  /** Creates a single `ServiceAuthCredential`. */
  createServiceAuthCredential?: Maybe<CreateServiceAuthCredentialPayload>;
  /** Creates a single `ServiceAuthCredentialType`. */
  createServiceAuthCredentialType?: Maybe<CreateServiceAuthCredentialTypePayload>;
  /** Creates a single `TrivyRepoScan`. */
  createTrivyRepoScan?: Maybe<CreateTrivyRepoScanPayload>;
  /** Deletes a single `GitBlame` using a unique key. */
  deleteGitBlame?: Maybe<DeleteGitBlamePayload>;
  /** Deletes a single `GitBlame` using its globally unique id. */
  deleteGitBlameByNodeId?: Maybe<DeleteGitBlamePayload>;
  /** Deletes a single `GitCommit` using a unique key. */
  deleteGitCommit?: Maybe<DeleteGitCommitPayload>;
  /** Deletes a single `GitCommit` using its globally unique id. */
  deleteGitCommitByNodeId?: Maybe<DeleteGitCommitPayload>;
  /** Deletes a single `GitCommitStat` using a unique key. */
  deleteGitCommitStat?: Maybe<DeleteGitCommitStatPayload>;
  /** Deletes a single `GitCommitStat` using its globally unique id. */
  deleteGitCommitStatByNodeId?: Maybe<DeleteGitCommitStatPayload>;
  /** Deletes a single `GitFile` using a unique key. */
  deleteGitFile?: Maybe<DeleteGitFilePayload>;
  /** Deletes a single `GitFile` using its globally unique id. */
  deleteGitFileByNodeId?: Maybe<DeleteGitFilePayload>;
  /** Deletes a single `GitRef` using a unique key. */
  deleteGitRef?: Maybe<DeleteGitRefPayload>;
  /** Deletes a single `GitRef` using its globally unique id. */
  deleteGitRefByNodeId?: Maybe<DeleteGitRefPayload>;
  /** Deletes a single `GithubIssue` using a unique key. */
  deleteGithubIssue?: Maybe<DeleteGithubIssuePayload>;
  /** Deletes a single `GithubIssue` using its globally unique id. */
  deleteGithubIssueByNodeId?: Maybe<DeleteGithubIssuePayload>;
  /** Deletes a single `GithubPullRequest` using a unique key. */
  deleteGithubPullRequest?: Maybe<DeleteGithubPullRequestPayload>;
  /** Deletes a single `GithubPullRequest` using its globally unique id. */
  deleteGithubPullRequestByNodeId?: Maybe<DeleteGithubPullRequestPayload>;
  /** Deletes a single `GithubPullRequestCommit` using a unique key. */
  deleteGithubPullRequestCommit?: Maybe<DeleteGithubPullRequestCommitPayload>;
  /** Deletes a single `GithubPullRequestCommit` using its globally unique id. */
  deleteGithubPullRequestCommitByNodeId?: Maybe<DeleteGithubPullRequestCommitPayload>;
  /** Deletes a single `GithubPullRequestReview` using a unique key. */
  deleteGithubPullRequestReview?: Maybe<DeleteGithubPullRequestReviewPayload>;
  /** Deletes a single `GithubPullRequestReview` using its globally unique id. */
  deleteGithubPullRequestReviewByNodeId?: Maybe<DeleteGithubPullRequestReviewPayload>;
  /** Deletes a single `GithubRepoInfo` using a unique key. */
  deleteGithubRepoInfo?: Maybe<DeleteGithubRepoInfoPayload>;
  /** Deletes a single `GithubRepoInfo` using its globally unique id. */
  deleteGithubRepoInfoByNodeId?: Maybe<DeleteGithubRepoInfoPayload>;
  /** Deletes a single `GithubRepoInfo` using a unique key. */
  deleteGithubRepoInfoByOwnerAndName?: Maybe<DeleteGithubRepoInfoPayload>;
  /** Deletes a single `GithubStargazer` using a unique key. */
  deleteGithubStargazer?: Maybe<DeleteGithubStargazerPayload>;
  /** Deletes a single `GithubStargazer` using its globally unique id. */
  deleteGithubStargazerByNodeId?: Maybe<DeleteGithubStargazerPayload>;
  /** Deletes a single `Repo` using a unique key. */
  deleteRepo?: Maybe<DeleteRepoPayload>;
  /** Deletes a single `Repo` using its globally unique id. */
  deleteRepoByNodeId?: Maybe<DeleteRepoPayload>;
  /** Deletes a single `RepoImport` using a unique key. */
  deleteRepoImport?: Maybe<DeleteRepoImportPayload>;
  /** Deletes a single `RepoImport` using its globally unique id. */
  deleteRepoImportByNodeId?: Maybe<DeleteRepoImportPayload>;
  /** Deletes a single `RepoImportType` using a unique key. */
  deleteRepoImportType?: Maybe<DeleteRepoImportTypePayload>;
  /** Deletes a single `RepoImportType` using its globally unique id. */
  deleteRepoImportTypeByNodeId?: Maybe<DeleteRepoImportTypePayload>;
  /** Deletes a single `RepoSync` using a unique key. */
  deleteRepoSync?: Maybe<DeleteRepoSyncPayload>;
  /** Deletes a single `RepoSync` using its globally unique id. */
  deleteRepoSyncByNodeId?: Maybe<DeleteRepoSyncPayload>;
  /** Deletes a single `RepoSync` using a unique key. */
  deleteRepoSyncByRepoIdAndSyncType?: Maybe<DeleteRepoSyncPayload>;
  /** Deletes a single `RepoSyncLog` using a unique key. */
  deleteRepoSyncLog?: Maybe<DeleteRepoSyncLogPayload>;
  /** Deletes a single `RepoSyncLog` using its globally unique id. */
  deleteRepoSyncLogByNodeId?: Maybe<DeleteRepoSyncLogPayload>;
  /** Deletes a single `RepoSyncLogType` using a unique key. */
  deleteRepoSyncLogType?: Maybe<DeleteRepoSyncLogTypePayload>;
  /** Deletes a single `RepoSyncLogType` using its globally unique id. */
  deleteRepoSyncLogTypeByNodeId?: Maybe<DeleteRepoSyncLogTypePayload>;
  /** Deletes a single `RepoSyncQueue` using a unique key. */
  deleteRepoSyncQueue?: Maybe<DeleteRepoSyncQueuePayload>;
  /** Deletes a single `RepoSyncQueue` using its globally unique id. */
  deleteRepoSyncQueueByNodeId?: Maybe<DeleteRepoSyncQueuePayload>;
  /** Deletes a single `RepoSyncQueueStatusType` using a unique key. */
  deleteRepoSyncQueueStatusType?: Maybe<DeleteRepoSyncQueueStatusTypePayload>;
  /** Deletes a single `RepoSyncQueueStatusType` using its globally unique id. */
  deleteRepoSyncQueueStatusTypeByNodeId?: Maybe<DeleteRepoSyncQueueStatusTypePayload>;
  /** Deletes a single `RepoSyncType` using a unique key. */
  deleteRepoSyncType?: Maybe<DeleteRepoSyncTypePayload>;
  /** Deletes a single `RepoSyncType` using its globally unique id. */
  deleteRepoSyncTypeByNodeId?: Maybe<DeleteRepoSyncTypePayload>;
  /** Deletes a single `SchemaMigration` using a unique key. */
  deleteSchemaMigration?: Maybe<DeleteSchemaMigrationPayload>;
  /** Deletes a single `SchemaMigration` using its globally unique id. */
  deleteSchemaMigrationByNodeId?: Maybe<DeleteSchemaMigrationPayload>;
  /** Deletes a single `SchemaMigrationsHistory` using a unique key. */
  deleteSchemaMigrationsHistory?: Maybe<DeleteSchemaMigrationsHistoryPayload>;
  /** Deletes a single `SchemaMigrationsHistory` using its globally unique id. */
  deleteSchemaMigrationsHistoryByNodeId?: Maybe<DeleteSchemaMigrationsHistoryPayload>;
  /** Deletes a single `ServiceAuthCredential` using a unique key. */
  deleteServiceAuthCredential?: Maybe<DeleteServiceAuthCredentialPayload>;
  /** Deletes a single `ServiceAuthCredential` using its globally unique id. */
  deleteServiceAuthCredentialByNodeId?: Maybe<DeleteServiceAuthCredentialPayload>;
  /** Deletes a single `ServiceAuthCredentialType` using a unique key. */
  deleteServiceAuthCredentialType?: Maybe<DeleteServiceAuthCredentialTypePayload>;
  /** Deletes a single `ServiceAuthCredentialType` using its globally unique id. */
  deleteServiceAuthCredentialTypeByNodeId?: Maybe<DeleteServiceAuthCredentialTypePayload>;
  /** Deletes a single `TrivyRepoScan` using a unique key. */
  deleteTrivyRepoScan?: Maybe<DeleteTrivyRepoScanPayload>;
  /** Deletes a single `TrivyRepoScan` using its globally unique id. */
  deleteTrivyRepoScanByNodeId?: Maybe<DeleteTrivyRepoScanPayload>;
  replaceGitHubPAT?: Maybe<Scalars['Boolean']>;
  simpleRepoSyncQueueCleanup?: Maybe<SimpleRepoSyncQueueCleanupPayload>;
  /** Updates a single `GitBlame` using a unique key and a patch. */
  updateGitBlame?: Maybe<UpdateGitBlamePayload>;
  /** Updates a single `GitBlame` using its globally unique id and a patch. */
  updateGitBlameByNodeId?: Maybe<UpdateGitBlamePayload>;
  /** Updates a single `GitCommit` using a unique key and a patch. */
  updateGitCommit?: Maybe<UpdateGitCommitPayload>;
  /** Updates a single `GitCommit` using its globally unique id and a patch. */
  updateGitCommitByNodeId?: Maybe<UpdateGitCommitPayload>;
  /** Updates a single `GitCommitStat` using a unique key and a patch. */
  updateGitCommitStat?: Maybe<UpdateGitCommitStatPayload>;
  /** Updates a single `GitCommitStat` using its globally unique id and a patch. */
  updateGitCommitStatByNodeId?: Maybe<UpdateGitCommitStatPayload>;
  /** Updates a single `GitFile` using a unique key and a patch. */
  updateGitFile?: Maybe<UpdateGitFilePayload>;
  /** Updates a single `GitFile` using its globally unique id and a patch. */
  updateGitFileByNodeId?: Maybe<UpdateGitFilePayload>;
  /** Updates a single `GitRef` using a unique key and a patch. */
  updateGitRef?: Maybe<UpdateGitRefPayload>;
  /** Updates a single `GitRef` using its globally unique id and a patch. */
  updateGitRefByNodeId?: Maybe<UpdateGitRefPayload>;
  /** Updates a single `GithubIssue` using a unique key and a patch. */
  updateGithubIssue?: Maybe<UpdateGithubIssuePayload>;
  /** Updates a single `GithubIssue` using its globally unique id and a patch. */
  updateGithubIssueByNodeId?: Maybe<UpdateGithubIssuePayload>;
  /** Updates a single `GithubPullRequest` using a unique key and a patch. */
  updateGithubPullRequest?: Maybe<UpdateGithubPullRequestPayload>;
  /** Updates a single `GithubPullRequest` using its globally unique id and a patch. */
  updateGithubPullRequestByNodeId?: Maybe<UpdateGithubPullRequestPayload>;
  /** Updates a single `GithubPullRequestCommit` using a unique key and a patch. */
  updateGithubPullRequestCommit?: Maybe<UpdateGithubPullRequestCommitPayload>;
  /** Updates a single `GithubPullRequestCommit` using its globally unique id and a patch. */
  updateGithubPullRequestCommitByNodeId?: Maybe<UpdateGithubPullRequestCommitPayload>;
  /** Updates a single `GithubPullRequestReview` using a unique key and a patch. */
  updateGithubPullRequestReview?: Maybe<UpdateGithubPullRequestReviewPayload>;
  /** Updates a single `GithubPullRequestReview` using its globally unique id and a patch. */
  updateGithubPullRequestReviewByNodeId?: Maybe<UpdateGithubPullRequestReviewPayload>;
  /** Updates a single `GithubRepoInfo` using a unique key and a patch. */
  updateGithubRepoInfo?: Maybe<UpdateGithubRepoInfoPayload>;
  /** Updates a single `GithubRepoInfo` using its globally unique id and a patch. */
  updateGithubRepoInfoByNodeId?: Maybe<UpdateGithubRepoInfoPayload>;
  /** Updates a single `GithubRepoInfo` using a unique key and a patch. */
  updateGithubRepoInfoByOwnerAndName?: Maybe<UpdateGithubRepoInfoPayload>;
  /** Updates a single `GithubStargazer` using a unique key and a patch. */
  updateGithubStargazer?: Maybe<UpdateGithubStargazerPayload>;
  /** Updates a single `GithubStargazer` using its globally unique id and a patch. */
  updateGithubStargazerByNodeId?: Maybe<UpdateGithubStargazerPayload>;
  /** Updates a single `Repo` using a unique key and a patch. */
  updateRepo?: Maybe<UpdateRepoPayload>;
  /** Updates a single `Repo` using its globally unique id and a patch. */
  updateRepoByNodeId?: Maybe<UpdateRepoPayload>;
  /** Updates a single `RepoImport` using a unique key and a patch. */
  updateRepoImport?: Maybe<UpdateRepoImportPayload>;
  /** Updates a single `RepoImport` using its globally unique id and a patch. */
  updateRepoImportByNodeId?: Maybe<UpdateRepoImportPayload>;
  /** Updates a single `RepoImportType` using a unique key and a patch. */
  updateRepoImportType?: Maybe<UpdateRepoImportTypePayload>;
  /** Updates a single `RepoImportType` using its globally unique id and a patch. */
  updateRepoImportTypeByNodeId?: Maybe<UpdateRepoImportTypePayload>;
  /** Updates a single `RepoSync` using a unique key and a patch. */
  updateRepoSync?: Maybe<UpdateRepoSyncPayload>;
  /** Updates a single `RepoSync` using its globally unique id and a patch. */
  updateRepoSyncByNodeId?: Maybe<UpdateRepoSyncPayload>;
  /** Updates a single `RepoSync` using a unique key and a patch. */
  updateRepoSyncByRepoIdAndSyncType?: Maybe<UpdateRepoSyncPayload>;
  /** Updates a single `RepoSyncLog` using a unique key and a patch. */
  updateRepoSyncLog?: Maybe<UpdateRepoSyncLogPayload>;
  /** Updates a single `RepoSyncLog` using its globally unique id and a patch. */
  updateRepoSyncLogByNodeId?: Maybe<UpdateRepoSyncLogPayload>;
  /** Updates a single `RepoSyncLogType` using a unique key and a patch. */
  updateRepoSyncLogType?: Maybe<UpdateRepoSyncLogTypePayload>;
  /** Updates a single `RepoSyncLogType` using its globally unique id and a patch. */
  updateRepoSyncLogTypeByNodeId?: Maybe<UpdateRepoSyncLogTypePayload>;
  /** Updates a single `RepoSyncQueue` using a unique key and a patch. */
  updateRepoSyncQueue?: Maybe<UpdateRepoSyncQueuePayload>;
  /** Updates a single `RepoSyncQueue` using its globally unique id and a patch. */
  updateRepoSyncQueueByNodeId?: Maybe<UpdateRepoSyncQueuePayload>;
  /** Updates a single `RepoSyncQueueStatusType` using a unique key and a patch. */
  updateRepoSyncQueueStatusType?: Maybe<UpdateRepoSyncQueueStatusTypePayload>;
  /** Updates a single `RepoSyncQueueStatusType` using its globally unique id and a patch. */
  updateRepoSyncQueueStatusTypeByNodeId?: Maybe<UpdateRepoSyncQueueStatusTypePayload>;
  /** Updates a single `RepoSyncType` using a unique key and a patch. */
  updateRepoSyncType?: Maybe<UpdateRepoSyncTypePayload>;
  /** Updates a single `RepoSyncType` using its globally unique id and a patch. */
  updateRepoSyncTypeByNodeId?: Maybe<UpdateRepoSyncTypePayload>;
  /** Updates a single `SchemaMigration` using a unique key and a patch. */
  updateSchemaMigration?: Maybe<UpdateSchemaMigrationPayload>;
  /** Updates a single `SchemaMigration` using its globally unique id and a patch. */
  updateSchemaMigrationByNodeId?: Maybe<UpdateSchemaMigrationPayload>;
  /** Updates a single `SchemaMigrationsHistory` using a unique key and a patch. */
  updateSchemaMigrationsHistory?: Maybe<UpdateSchemaMigrationsHistoryPayload>;
  /** Updates a single `SchemaMigrationsHistory` using its globally unique id and a patch. */
  updateSchemaMigrationsHistoryByNodeId?: Maybe<UpdateSchemaMigrationsHistoryPayload>;
  /** Updates a single `ServiceAuthCredential` using a unique key and a patch. */
  updateServiceAuthCredential?: Maybe<UpdateServiceAuthCredentialPayload>;
  /** Updates a single `ServiceAuthCredential` using its globally unique id and a patch. */
  updateServiceAuthCredentialByNodeId?: Maybe<UpdateServiceAuthCredentialPayload>;
  /** Updates a single `ServiceAuthCredentialType` using a unique key and a patch. */
  updateServiceAuthCredentialType?: Maybe<UpdateServiceAuthCredentialTypePayload>;
  /** Updates a single `ServiceAuthCredentialType` using its globally unique id and a patch. */
  updateServiceAuthCredentialTypeByNodeId?: Maybe<UpdateServiceAuthCredentialTypePayload>;
  /** Updates a single `TrivyRepoScan` using a unique key and a patch. */
  updateTrivyRepoScan?: Maybe<UpdateTrivyRepoScanPayload>;
  /** Updates a single `TrivyRepoScan` using its globally unique id and a patch. */
  updateTrivyRepoScanByNodeId?: Maybe<UpdateTrivyRepoScanPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddServiceAuthCredentialArgs = {
  input: AddServiceAuthCredentialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitBlameArgs = {
  input: CreateGitBlameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitBranchArgs = {
  input: CreateGitBranchInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitCommitArgs = {
  input: CreateGitCommitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitCommitStatArgs = {
  input: CreateGitCommitStatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitFileArgs = {
  input: CreateGitFileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitRefArgs = {
  input: CreateGitRefInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitTagArgs = {
  input: CreateGitTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubIssueArgs = {
  input: CreateGithubIssueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubPullRequestArgs = {
  input: CreateGithubPullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubPullRequestCommitArgs = {
  input: CreateGithubPullRequestCommitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubPullRequestReviewArgs = {
  input: CreateGithubPullRequestReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubRepoInfoArgs = {
  input: CreateGithubRepoInfoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubStargazerArgs = {
  input: CreateGithubStargazerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoArgs = {
  input: CreateRepoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoImportArgs = {
  input: CreateRepoImportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoImportTypeArgs = {
  input: CreateRepoImportTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncArgs = {
  input: CreateRepoSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncLogArgs = {
  input: CreateRepoSyncLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncLogTypeArgs = {
  input: CreateRepoSyncLogTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncQueueArgs = {
  input: CreateRepoSyncQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncQueueStatusTypeArgs = {
  input: CreateRepoSyncQueueStatusTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRepoSyncTypeArgs = {
  input: CreateRepoSyncTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSchemaMigrationArgs = {
  input: CreateSchemaMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSchemaMigrationsHistoryArgs = {
  input: CreateSchemaMigrationsHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateServiceAuthCredentialArgs = {
  input: CreateServiceAuthCredentialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateServiceAuthCredentialTypeArgs = {
  input: CreateServiceAuthCredentialTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTrivyRepoScanArgs = {
  input: CreateTrivyRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitBlameArgs = {
  input: DeleteGitBlameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitBlameByNodeIdArgs = {
  input: DeleteGitBlameByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitCommitArgs = {
  input: DeleteGitCommitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitCommitByNodeIdArgs = {
  input: DeleteGitCommitByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitCommitStatArgs = {
  input: DeleteGitCommitStatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitCommitStatByNodeIdArgs = {
  input: DeleteGitCommitStatByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitFileArgs = {
  input: DeleteGitFileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitFileByNodeIdArgs = {
  input: DeleteGitFileByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitRefArgs = {
  input: DeleteGitRefInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitRefByNodeIdArgs = {
  input: DeleteGitRefByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubIssueArgs = {
  input: DeleteGithubIssueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubIssueByNodeIdArgs = {
  input: DeleteGithubIssueByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestArgs = {
  input: DeleteGithubPullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestByNodeIdArgs = {
  input: DeleteGithubPullRequestByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestCommitArgs = {
  input: DeleteGithubPullRequestCommitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestCommitByNodeIdArgs = {
  input: DeleteGithubPullRequestCommitByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestReviewArgs = {
  input: DeleteGithubPullRequestReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubPullRequestReviewByNodeIdArgs = {
  input: DeleteGithubPullRequestReviewByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubRepoInfoArgs = {
  input: DeleteGithubRepoInfoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubRepoInfoByNodeIdArgs = {
  input: DeleteGithubRepoInfoByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubRepoInfoByOwnerAndNameArgs = {
  input: DeleteGithubRepoInfoByOwnerAndNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubStargazerArgs = {
  input: DeleteGithubStargazerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubStargazerByNodeIdArgs = {
  input: DeleteGithubStargazerByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoArgs = {
  input: DeleteRepoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoByNodeIdArgs = {
  input: DeleteRepoByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportArgs = {
  input: DeleteRepoImportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportByNodeIdArgs = {
  input: DeleteRepoImportByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportTypeArgs = {
  input: DeleteRepoImportTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoImportTypeByNodeIdArgs = {
  input: DeleteRepoImportTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncArgs = {
  input: DeleteRepoSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncByNodeIdArgs = {
  input: DeleteRepoSyncByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncByRepoIdAndSyncTypeArgs = {
  input: DeleteRepoSyncByRepoIdAndSyncTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogArgs = {
  input: DeleteRepoSyncLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogByNodeIdArgs = {
  input: DeleteRepoSyncLogByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogTypeArgs = {
  input: DeleteRepoSyncLogTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncLogTypeByNodeIdArgs = {
  input: DeleteRepoSyncLogTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueArgs = {
  input: DeleteRepoSyncQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueByNodeIdArgs = {
  input: DeleteRepoSyncQueueByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueStatusTypeArgs = {
  input: DeleteRepoSyncQueueStatusTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncQueueStatusTypeByNodeIdArgs = {
  input: DeleteRepoSyncQueueStatusTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncTypeArgs = {
  input: DeleteRepoSyncTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncTypeByNodeIdArgs = {
  input: DeleteRepoSyncTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSchemaMigrationArgs = {
  input: DeleteSchemaMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSchemaMigrationByNodeIdArgs = {
  input: DeleteSchemaMigrationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSchemaMigrationsHistoryArgs = {
  input: DeleteSchemaMigrationsHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSchemaMigrationsHistoryByNodeIdArgs = {
  input: DeleteSchemaMigrationsHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteServiceAuthCredentialArgs = {
  input: DeleteServiceAuthCredentialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteServiceAuthCredentialByNodeIdArgs = {
  input: DeleteServiceAuthCredentialByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteServiceAuthCredentialTypeArgs = {
  input: DeleteServiceAuthCredentialTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteServiceAuthCredentialTypeByNodeIdArgs = {
  input: DeleteServiceAuthCredentialTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTrivyRepoScanArgs = {
  input: DeleteTrivyRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTrivyRepoScanByNodeIdArgs = {
  input: DeleteTrivyRepoScanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationReplaceGitHubPatArgs = {
  pat: Scalars['String'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSimpleRepoSyncQueueCleanupArgs = {
  input: SimpleRepoSyncQueueCleanupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitBlameArgs = {
  input: UpdateGitBlameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitBlameByNodeIdArgs = {
  input: UpdateGitBlameByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitCommitArgs = {
  input: UpdateGitCommitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitCommitByNodeIdArgs = {
  input: UpdateGitCommitByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitCommitStatArgs = {
  input: UpdateGitCommitStatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitCommitStatByNodeIdArgs = {
  input: UpdateGitCommitStatByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitFileArgs = {
  input: UpdateGitFileInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitFileByNodeIdArgs = {
  input: UpdateGitFileByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitRefArgs = {
  input: UpdateGitRefInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitRefByNodeIdArgs = {
  input: UpdateGitRefByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubIssueArgs = {
  input: UpdateGithubIssueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubIssueByNodeIdArgs = {
  input: UpdateGithubIssueByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestArgs = {
  input: UpdateGithubPullRequestInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestByNodeIdArgs = {
  input: UpdateGithubPullRequestByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestCommitArgs = {
  input: UpdateGithubPullRequestCommitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestCommitByNodeIdArgs = {
  input: UpdateGithubPullRequestCommitByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestReviewArgs = {
  input: UpdateGithubPullRequestReviewInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubPullRequestReviewByNodeIdArgs = {
  input: UpdateGithubPullRequestReviewByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubRepoInfoArgs = {
  input: UpdateGithubRepoInfoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubRepoInfoByNodeIdArgs = {
  input: UpdateGithubRepoInfoByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubRepoInfoByOwnerAndNameArgs = {
  input: UpdateGithubRepoInfoByOwnerAndNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubStargazerArgs = {
  input: UpdateGithubStargazerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubStargazerByNodeIdArgs = {
  input: UpdateGithubStargazerByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoArgs = {
  input: UpdateRepoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoByNodeIdArgs = {
  input: UpdateRepoByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportArgs = {
  input: UpdateRepoImportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportByNodeIdArgs = {
  input: UpdateRepoImportByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportTypeArgs = {
  input: UpdateRepoImportTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoImportTypeByNodeIdArgs = {
  input: UpdateRepoImportTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncArgs = {
  input: UpdateRepoSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncByNodeIdArgs = {
  input: UpdateRepoSyncByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncByRepoIdAndSyncTypeArgs = {
  input: UpdateRepoSyncByRepoIdAndSyncTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogArgs = {
  input: UpdateRepoSyncLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogByNodeIdArgs = {
  input: UpdateRepoSyncLogByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogTypeArgs = {
  input: UpdateRepoSyncLogTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncLogTypeByNodeIdArgs = {
  input: UpdateRepoSyncLogTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueArgs = {
  input: UpdateRepoSyncQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueByNodeIdArgs = {
  input: UpdateRepoSyncQueueByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueStatusTypeArgs = {
  input: UpdateRepoSyncQueueStatusTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncQueueStatusTypeByNodeIdArgs = {
  input: UpdateRepoSyncQueueStatusTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncTypeArgs = {
  input: UpdateRepoSyncTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncTypeByNodeIdArgs = {
  input: UpdateRepoSyncTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSchemaMigrationArgs = {
  input: UpdateSchemaMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSchemaMigrationByNodeIdArgs = {
  input: UpdateSchemaMigrationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSchemaMigrationsHistoryArgs = {
  input: UpdateSchemaMigrationsHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSchemaMigrationsHistoryByNodeIdArgs = {
  input: UpdateSchemaMigrationsHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateServiceAuthCredentialArgs = {
  input: UpdateServiceAuthCredentialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateServiceAuthCredentialByNodeIdArgs = {
  input: UpdateServiceAuthCredentialByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateServiceAuthCredentialTypeArgs = {
  input: UpdateServiceAuthCredentialTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateServiceAuthCredentialTypeByNodeIdArgs = {
  input: UpdateServiceAuthCredentialTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrivyRepoScanArgs = {
  input: UpdateTrivyRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrivyRepoScanByNodeIdArgs = {
  input: UpdateTrivyRepoScanByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  currentMergeStatUser?: Maybe<Scalars['String']>;
  databaseConnection?: Maybe<DisplayDatabaseConnection>;
  execSQL?: Maybe<Scalars['JSON']>;
  gitBlame?: Maybe<GitBlame>;
  /** Reads a single `GitBlame` using its globally unique `ID`. */
  gitBlameByNodeId?: Maybe<GitBlame>;
  /** Reads and enables pagination through a set of `GitBlame`. */
  gitBlames?: Maybe<GitBlamesConnection>;
  /** Reads and enables pagination through a set of `GitBranch`. */
  gitBranches?: Maybe<GitBranchesConnection>;
  gitCommit?: Maybe<GitCommit>;
  /** Reads a single `GitCommit` using its globally unique `ID`. */
  gitCommitByNodeId?: Maybe<GitCommit>;
  gitCommitStat?: Maybe<GitCommitStat>;
  /** Reads a single `GitCommitStat` using its globally unique `ID`. */
  gitCommitStatByNodeId?: Maybe<GitCommitStat>;
  /** Reads and enables pagination through a set of `GitCommitStat`. */
  gitCommitStats?: Maybe<GitCommitStatsConnection>;
  /** Reads and enables pagination through a set of `GitCommit`. */
  gitCommits?: Maybe<GitCommitsConnection>;
  gitFile?: Maybe<GitFile>;
  /** Reads a single `GitFile` using its globally unique `ID`. */
  gitFileByNodeId?: Maybe<GitFile>;
  /** Reads and enables pagination through a set of `GitFile`. */
  gitFiles?: Maybe<GitFilesConnection>;
  gitRef?: Maybe<GitRef>;
  /** Reads a single `GitRef` using its globally unique `ID`. */
  gitRefByNodeId?: Maybe<GitRef>;
  /** Reads and enables pagination through a set of `GitRef`. */
  gitRefs?: Maybe<GitRefsConnection>;
  /** Reads and enables pagination through a set of `GitTag`. */
  gitTags?: Maybe<GitTagsConnection>;
  githubIssue?: Maybe<GithubIssue>;
  /** Reads a single `GithubIssue` using its globally unique `ID`. */
  githubIssueByNodeId?: Maybe<GithubIssue>;
  /** Reads and enables pagination through a set of `GithubIssue`. */
  githubIssues?: Maybe<GithubIssuesConnection>;
  githubPullRequest?: Maybe<GithubPullRequest>;
  /** Reads a single `GithubPullRequest` using its globally unique `ID`. */
  githubPullRequestByNodeId?: Maybe<GithubPullRequest>;
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>;
  /** Reads a single `GithubPullRequestCommit` using its globally unique `ID`. */
  githubPullRequestCommitByNodeId?: Maybe<GithubPullRequestCommit>;
  /** Reads and enables pagination through a set of `GithubPullRequestCommit`. */
  githubPullRequestCommits?: Maybe<GithubPullRequestCommitsConnection>;
  githubPullRequestReview?: Maybe<GithubPullRequestReview>;
  /** Reads a single `GithubPullRequestReview` using its globally unique `ID`. */
  githubPullRequestReviewByNodeId?: Maybe<GithubPullRequestReview>;
  /** Reads and enables pagination through a set of `GithubPullRequestReview`. */
  githubPullRequestReviews?: Maybe<GithubPullRequestReviewsConnection>;
  /** Reads and enables pagination through a set of `GithubPullRequest`. */
  githubPullRequests?: Maybe<GithubPullRequestsConnection>;
  githubRepoInfo?: Maybe<GithubRepoInfo>;
  /** Reads a single `GithubRepoInfo` using its globally unique `ID`. */
  githubRepoInfoByNodeId?: Maybe<GithubRepoInfo>;
  githubRepoInfoByOwnerAndName?: Maybe<GithubRepoInfo>;
  /** Reads and enables pagination through a set of `GithubRepoInfo`. */
  githubRepoInfos?: Maybe<GithubRepoInfosConnection>;
  githubStargazer?: Maybe<GithubStargazer>;
  /** Reads a single `GithubStargazer` using its globally unique `ID`. */
  githubStargazerByNodeId?: Maybe<GithubStargazer>;
  /** Reads and enables pagination through a set of `GithubStargazer`. */
  githubStargazers?: Maybe<GithubStargazersConnection>;
  /** Reads and enables pagination through a set of `LatestRepoSync`. */
  latestRepoSyncs?: Maybe<LatestRepoSyncsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<GitBlame | GitCommit | GitCommitStat | GitFile | GitRef | GithubIssue | GithubPullRequest | GithubPullRequestCommit | GithubPullRequestReview | GithubRepoInfo | GithubStargazer | Query | Repo | RepoImport | RepoImportType | RepoSync | RepoSyncLog | RepoSyncLogType | RepoSyncQueue | RepoSyncQueueStatusType | RepoSyncType | SchemaMigration | SchemaMigrationsHistory | ServiceAuthCredential | ServiceAuthCredentialType | TrivyRepoScan>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  repo?: Maybe<Repo>;
  /** Reads a single `Repo` using its globally unique `ID`. */
  repoByNodeId?: Maybe<Repo>;
  repoImport?: Maybe<RepoImport>;
  /** Reads a single `RepoImport` using its globally unique `ID`. */
  repoImportByNodeId?: Maybe<RepoImport>;
  repoImportType?: Maybe<RepoImportType>;
  /** Reads a single `RepoImportType` using its globally unique `ID`. */
  repoImportTypeByNodeId?: Maybe<RepoImportType>;
  /** Reads and enables pagination through a set of `RepoImportType`. */
  repoImportTypes?: Maybe<RepoImportTypesConnection>;
  /** Reads and enables pagination through a set of `RepoImport`. */
  repoImports?: Maybe<RepoImportsConnection>;
  repoSync?: Maybe<RepoSync>;
  /** Reads a single `RepoSync` using its globally unique `ID`. */
  repoSyncByNodeId?: Maybe<RepoSync>;
  repoSyncByRepoIdAndSyncType?: Maybe<RepoSync>;
  repoSyncLog?: Maybe<RepoSyncLog>;
  /** Reads a single `RepoSyncLog` using its globally unique `ID`. */
  repoSyncLogByNodeId?: Maybe<RepoSyncLog>;
  repoSyncLogType?: Maybe<RepoSyncLogType>;
  /** Reads a single `RepoSyncLogType` using its globally unique `ID`. */
  repoSyncLogTypeByNodeId?: Maybe<RepoSyncLogType>;
  /** Reads and enables pagination through a set of `RepoSyncLogType`. */
  repoSyncLogTypes?: Maybe<RepoSyncLogTypesConnection>;
  /** Reads and enables pagination through a set of `RepoSyncLog`. */
  repoSyncLogs?: Maybe<RepoSyncLogsConnection>;
  repoSyncQueue?: Maybe<RepoSyncQueue>;
  /** Reads a single `RepoSyncQueue` using its globally unique `ID`. */
  repoSyncQueueByNodeId?: Maybe<RepoSyncQueue>;
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>;
  /** Reads a single `RepoSyncQueueStatusType` using its globally unique `ID`. */
  repoSyncQueueStatusTypeByNodeId?: Maybe<RepoSyncQueueStatusType>;
  /** Reads and enables pagination through a set of `RepoSyncQueueStatusType`. */
  repoSyncQueueStatusTypes?: Maybe<RepoSyncQueueStatusTypesConnection>;
  /** Reads and enables pagination through a set of `RepoSyncQueue`. */
  repoSyncQueues?: Maybe<RepoSyncQueuesConnection>;
  repoSyncType?: Maybe<RepoSyncType>;
  /** Reads a single `RepoSyncType` using its globally unique `ID`. */
  repoSyncTypeByNodeId?: Maybe<RepoSyncType>;
  /** Reads and enables pagination through a set of `RepoSyncType`. */
  repoSyncTypes?: Maybe<RepoSyncTypesConnection>;
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncs?: Maybe<RepoSyncsConnection>;
  /** Reads and enables pagination through a set of `Repo`. */
  repos?: Maybe<ReposConnection>;
  schemaMigration?: Maybe<SchemaMigration>;
  /** Reads a single `SchemaMigration` using its globally unique `ID`. */
  schemaMigrationByNodeId?: Maybe<SchemaMigration>;
  /** Reads and enables pagination through a set of `SchemaMigration`. */
  schemaMigrations?: Maybe<SchemaMigrationsConnection>;
  /** Reads and enables pagination through a set of `SchemaMigrationsHistory`. */
  schemaMigrationsHistories?: Maybe<SchemaMigrationsHistoriesConnection>;
  schemaMigrationsHistory?: Maybe<SchemaMigrationsHistory>;
  /** Reads a single `SchemaMigrationsHistory` using its globally unique `ID`. */
  schemaMigrationsHistoryByNodeId?: Maybe<SchemaMigrationsHistory>;
  serviceAuthCredential?: Maybe<ServiceAuthCredential>;
  /** Reads a single `ServiceAuthCredential` using its globally unique `ID`. */
  serviceAuthCredentialByNodeId?: Maybe<ServiceAuthCredential>;
  serviceAuthCredentialType?: Maybe<ServiceAuthCredentialType>;
  /** Reads a single `ServiceAuthCredentialType` using its globally unique `ID`. */
  serviceAuthCredentialTypeByNodeId?: Maybe<ServiceAuthCredentialType>;
  /** Reads and enables pagination through a set of `ServiceAuthCredentialType`. */
  serviceAuthCredentialTypes?: Maybe<ServiceAuthCredentialTypesConnection>;
  /** Reads and enables pagination through a set of `ServiceAuthCredential`. */
  serviceAuthCredentials?: Maybe<ServiceAuthCredentialsConnection>;
  trivyRepoScan?: Maybe<TrivyRepoScan>;
  /** Reads a single `TrivyRepoScan` using its globally unique `ID`. */
  trivyRepoScanByNodeId?: Maybe<TrivyRepoScan>;
  /** Reads and enables pagination through a set of `TrivyRepoScan`. */
  trivyRepoScans?: Maybe<TrivyRepoScansConnection>;
  /** Reads and enables pagination through a set of `TrivyRepoVulnerability`. */
  trivyRepoVulnerabilities?: Maybe<TrivyRepoVulnerabilitiesConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryExecSqlArgs = {
  query: Scalars['String'];
  rowLimit?: InputMaybe<Scalars['Int']>;
  variables?: InputMaybe<Array<Scalars['String']>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitBlameArgs = {
  lineNo: Scalars['Int'];
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitBlameByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitBlamesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitBlameCondition>;
  filter?: InputMaybe<GitBlameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitBlamesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitBranchesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitBranchCondition>;
  filter?: InputMaybe<GitBranchFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitBranchesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitCommitArgs = {
  hash: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitCommitByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitCommitStatArgs = {
  commitHash: Scalars['String'];
  filePath: Scalars['String'];
  newFileMode: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitCommitStatByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitCommitStatsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitCommitStatCondition>;
  filter?: InputMaybe<GitCommitStatFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitCommitsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitCommitCondition>;
  filter?: InputMaybe<GitCommitFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitFileArgs = {
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitFileByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitFilesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitFileCondition>;
  filter?: InputMaybe<GitFileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitRefArgs = {
  fullName: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitRefByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitRefsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitRefCondition>;
  filter?: InputMaybe<GitRefFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitTagCondition>;
  filter?: InputMaybe<GitTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitTagsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubIssueArgs = {
  databaseId: Scalars['Int'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubIssueByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubIssuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubIssueCondition>;
  filter?: InputMaybe<GithubIssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestArgs = {
  databaseId: Scalars['Int'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestCommitArgs = {
  hash: Scalars['String'];
  prNumber: Scalars['Int'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestCommitByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestCommitsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubPullRequestCommitCondition>;
  filter?: InputMaybe<GithubPullRequestCommitFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestReviewArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestReviewByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestReviewsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubPullRequestReviewCondition>;
  filter?: InputMaybe<GithubPullRequestReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubPullRequestCondition>;
  filter?: InputMaybe<GithubPullRequestFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubRepoInfoArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubRepoInfoByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubRepoInfoByOwnerAndNameArgs = {
  name: Scalars['String'];
  owner: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubRepoInfosArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubRepoInfoCondition>;
  filter?: InputMaybe<GithubRepoInfoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubStargazerArgs = {
  login: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubStargazerByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubStargazersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubStargazerCondition>;
  filter?: InputMaybe<GithubStargazerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLatestRepoSyncsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LatestRepoSyncCondition>;
  filter?: InputMaybe<LatestRepoSyncFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LatestRepoSyncsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoImportArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoImportByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoImportTypeArgs = {
  type: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoImportTypeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoImportTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoImportTypeCondition>;
  filter?: InputMaybe<RepoImportTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoImportsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoImportCondition>;
  filter?: InputMaybe<RepoImportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncByRepoIdAndSyncTypeArgs = {
  repoId: Scalars['UUID'];
  syncType: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogTypeArgs = {
  type: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogTypeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncLogTypeCondition>;
  filter?: InputMaybe<RepoSyncLogTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncLogsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncLogCondition>;
  filter?: InputMaybe<RepoSyncLogFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueStatusTypeArgs = {
  type: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueStatusTypeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueueStatusTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncQueueStatusTypeCondition>;
  filter?: InputMaybe<RepoSyncQueueStatusTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncQueuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncQueueCondition>;
  filter?: InputMaybe<RepoSyncQueueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncTypeArgs = {
  type: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncTypeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncTypeCondition>;
  filter?: InputMaybe<RepoSyncTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncCondition>;
  filter?: InputMaybe<RepoSyncFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryReposArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoCondition>;
  filter?: InputMaybe<RepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReposOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationArgs = {
  version: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SchemaMigrationCondition>;
  filter?: InputMaybe<SchemaMigrationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationsHistoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SchemaMigrationsHistoryCondition>;
  filter?: InputMaybe<SchemaMigrationsHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SchemaMigrationsHistoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationsHistoryArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySchemaMigrationsHistoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceAuthCredentialArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceAuthCredentialByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceAuthCredentialTypeArgs = {
  type: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceAuthCredentialTypeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceAuthCredentialTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ServiceAuthCredentialTypeCondition>;
  filter?: InputMaybe<ServiceAuthCredentialTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceAuthCredentialTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryServiceAuthCredentialsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ServiceAuthCredentialCondition>;
  filter?: InputMaybe<ServiceAuthCredentialFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceAuthCredentialsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTrivyRepoScanArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrivyRepoScanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrivyRepoScansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TrivyRepoScanCondition>;
  filter?: InputMaybe<TrivyRepoScanFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TrivyRepoScansOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTrivyRepoVulnerabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TrivyRepoVulnerabilityCondition>;
  filter?: InputMaybe<TrivyRepoVulnerabilityFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TrivyRepoVulnerabilitiesOrderBy>>;
};

/** Git repositories to track */
export type Repo = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  createdAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `GitBlame`. */
  gitBlames: GitBlamesConnection;
  /** Reads and enables pagination through a set of `GitCommitStat`. */
  gitCommitStats: GitCommitStatsConnection;
  /** Reads and enables pagination through a set of `GitCommit`. */
  gitCommits: GitCommitsConnection;
  /** Reads and enables pagination through a set of `GitFile`. */
  gitFiles: GitFilesConnection;
  /** Reads and enables pagination through a set of `GitRef`. */
  gitRefs: GitRefsConnection;
  /** Reads and enables pagination through a set of `GithubIssue`. */
  githubIssues: GithubIssuesConnection;
  /** Reads and enables pagination through a set of `GithubPullRequestCommit`. */
  githubPullRequestCommits: GithubPullRequestCommitsConnection;
  /** Reads and enables pagination through a set of `GithubPullRequestReview`. */
  githubPullRequestReviews: GithubPullRequestReviewsConnection;
  /** Reads and enables pagination through a set of `GithubPullRequest`. */
  githubPullRequests: GithubPullRequestsConnection;
  /** Reads a single `GithubRepoInfo` that is related to this `Repo`. */
  githubRepoInfo?: Maybe<GithubRepoInfo>;
  /** Reads and enables pagination through a set of `GithubStargazer`. */
  githubStargazers: GithubStargazersConnection;
  id: Scalars['UUID'];
  isGithub?: Maybe<Scalars['Boolean']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  ref?: Maybe<Scalars['String']>;
  repo: Scalars['String'];
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImport?: Maybe<RepoImport>;
  repoImportId?: Maybe<Scalars['UUID']>;
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncs: RepoSyncsConnection;
  settings: Scalars['JSON'];
  tags: Scalars['JSON'];
  /** Reads a single `TrivyRepoScan` that is related to this `Repo`. */
  trivyRepoScan?: Maybe<TrivyRepoScan>;
};


/** Git repositories to track */
export type RepoGitBlamesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitBlameCondition>;
  filter?: InputMaybe<GitBlameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitBlamesOrderBy>>;
};


/** Git repositories to track */
export type RepoGitCommitStatsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitCommitStatCondition>;
  filter?: InputMaybe<GitCommitStatFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>;
};


/** Git repositories to track */
export type RepoGitCommitsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitCommitCondition>;
  filter?: InputMaybe<GitCommitFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>;
};


/** Git repositories to track */
export type RepoGitFilesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitFileCondition>;
  filter?: InputMaybe<GitFileFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>;
};


/** Git repositories to track */
export type RepoGitRefsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitRefCondition>;
  filter?: InputMaybe<GitRefFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>;
};


/** Git repositories to track */
export type RepoGithubIssuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubIssueCondition>;
  filter?: InputMaybe<GithubIssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
};


/** Git repositories to track */
export type RepoGithubPullRequestCommitsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubPullRequestCommitCondition>;
  filter?: InputMaybe<GithubPullRequestCommitFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>;
};


/** Git repositories to track */
export type RepoGithubPullRequestReviewsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubPullRequestReviewCondition>;
  filter?: InputMaybe<GithubPullRequestReviewFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>;
};


/** Git repositories to track */
export type RepoGithubPullRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubPullRequestCondition>;
  filter?: InputMaybe<GithubPullRequestFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>;
};


/** Git repositories to track */
export type RepoGithubStargazersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubStargazerCondition>;
  filter?: InputMaybe<GithubStargazerFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>;
};


/** Git repositories to track */
export type RepoRepoSyncsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncCondition>;
  filter?: InputMaybe<RepoSyncFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>;
};

/** A condition to be used against `Repo` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RepoCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `isGithub` field. */
  isGithub?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `ref` field. */
  ref?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repo` field. */
  repo?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoImportId` field. */
  repoImportId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `Repo` object types. All fields are combined with a logical ‘and.’ */
export type RepoFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `isGithub` field. */
  isGithub?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoFilter>>;
  /** Filter by the object’s `ref` field. */
  ref?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repo` field. */
  repo?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoImportId` field. */
  repoImportId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `settings` field. */
  settings?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `tags` field. */
  tags?: InputMaybe<JsonFilter>;
};

/** Table for "dynamic" repo imports - regularly loading from a GitHub org for example */
export type RepoImport = Node & {
  createdAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  importInterval?: Maybe<Interval>;
  lastImport?: Maybe<Scalars['Datetime']>;
  lastImportStartedAt?: Maybe<Scalars['Datetime']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>;
  /** Reads and enables pagination through a set of `Repo`. */
  repos: ReposConnection;
  settings: Scalars['JSON'];
  type: Scalars['String'];
  updatedAt: Scalars['Datetime'];
};


/** Table for "dynamic" repo imports - regularly loading from a GitHub org for example */
export type RepoImportReposArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoCondition>;
  filter?: InputMaybe<RepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReposOrderBy>>;
};

/**
 * A condition to be used against `RepoImport` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RepoImportCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `importInterval` field. */
  importInterval?: InputMaybe<IntervalInput>;
  /** Checks for equality with the object’s `lastImport` field. */
  lastImport?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastImportStartedAt` field. */
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `RepoImport` object types. All fields are combined with a logical ‘and.’ */
export type RepoImportFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoImportFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `importInterval` field. */
  importInterval?: InputMaybe<IntervalFilter>;
  /** Filter by the object’s `lastImport` field. */
  lastImport?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastImportStartedAt` field. */
  lastImportStartedAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoImportFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoImportFilter>>;
  /** Filter by the object’s `settings` field. */
  settings?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `RepoImport` */
export type RepoImportInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  importInterval?: InputMaybe<IntervalInput>;
  lastImport?: InputMaybe<Scalars['Datetime']>;
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>;
  settings?: InputMaybe<Scalars['JSON']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `RepoImport`. Fields that are set will be updated. */
export type RepoImportPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  importInterval?: InputMaybe<IntervalInput>;
  lastImport?: InputMaybe<Scalars['Datetime']>;
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>;
  settings?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Types of repo imports */
export type RepoImportType = Node & {
  description: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `RepoImport`. */
  repoImportsByType: RepoImportsConnection;
  type: Scalars['String'];
};


/** Types of repo imports */
export type RepoImportTypeRepoImportsByTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoImportCondition>;
  filter?: InputMaybe<RepoImportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>;
};

/**
 * A condition to be used against `RepoImportType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoImportTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `RepoImportType` object types. All fields are combined with a logical ‘and.’ */
export type RepoImportTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoImportTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoImportTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoImportTypeFilter>>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `RepoImportType` */
export type RepoImportTypeInput = {
  description: Scalars['String'];
  type: Scalars['String'];
};

/** Represents an update to a `RepoImportType`. Fields that are set will be updated. */
export type RepoImportTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `RepoImportType` values. */
export type RepoImportTypesConnection = {
  /** A list of edges which contains the `RepoImportType` and cursor to aid in pagination. */
  edges: Array<RepoImportTypesEdge>;
  /** A list of `RepoImportType` objects. */
  nodes: Array<RepoImportType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoImportType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoImportType` edge in the connection. */
export type RepoImportTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoImportType` at the end of the edge. */
  node: RepoImportType;
};

/** Methods to use when ordering `RepoImportType`. */
export enum RepoImportTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** A connection to a list of `RepoImport` values. */
export type RepoImportsConnection = {
  /** A list of edges which contains the `RepoImport` and cursor to aid in pagination. */
  edges: Array<RepoImportsEdge>;
  /** A list of `RepoImport` objects. */
  nodes: Array<RepoImport>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoImport` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoImport` edge in the connection. */
export type RepoImportsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoImport` at the end of the edge. */
  node: RepoImport;
};

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
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** An input for mutations affecting `Repo` */
export type RepoInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  isGithub?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Scalars['String']>;
  repo: Scalars['String'];
  repoImportId?: InputMaybe<Scalars['UUID']>;
  settings?: InputMaybe<Scalars['JSON']>;
  tags?: InputMaybe<Scalars['JSON']>;
};

/** Represents an update to a `Repo`. Fields that are set will be updated. */
export type RepoPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  isGithub?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Scalars['String']>;
  repo?: InputMaybe<Scalars['String']>;
  repoImportId?: InputMaybe<Scalars['UUID']>;
  settings?: InputMaybe<Scalars['JSON']>;
  tags?: InputMaybe<Scalars['JSON']>;
};

export type RepoSync = Node & {
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  /** Reads and enables pagination through a set of `RepoSyncQueue`. */
  repoSyncQueues: RepoSyncQueuesConnection;
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>;
  scheduleEnabled: Scalars['Boolean'];
  settings: Scalars['JSON'];
  syncType: Scalars['String'];
};


export type RepoSyncRepoSyncQueuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncQueueCondition>;
  filter?: InputMaybe<RepoSyncQueueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>;
};

/**
 * A condition to be used against `RepoSync` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RepoSyncCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `scheduleEnabled` field. */
  scheduleEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `syncType` field. */
  syncType?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `RepoSync` object types. All fields are combined with a logical ‘and.’ */
export type RepoSyncFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoSyncFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `scheduleEnabled` field. */
  scheduleEnabled?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `settings` field. */
  settings?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `syncType` field. */
  syncType?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `RepoSync` */
export type RepoSyncInput = {
  id?: InputMaybe<Scalars['UUID']>;
  repoId: Scalars['UUID'];
  scheduleEnabled?: InputMaybe<Scalars['Boolean']>;
  settings?: InputMaybe<Scalars['JSON']>;
  syncType: Scalars['String'];
};

export type RepoSyncLog = Node & {
  createdAt: Scalars['Datetime'];
  id: Scalars['BigInt'];
  logType: Scalars['String'];
  message: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>;
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueue?: Maybe<RepoSyncQueue>;
  repoSyncQueueId: Scalars['BigInt'];
};

/**
 * A condition to be used against `RepoSyncLog` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RepoSyncLogCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `logType` field. */
  logType?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoSyncQueueId` field. */
  repoSyncQueueId?: InputMaybe<Scalars['BigInt']>;
};

/** A filter to be used against `RepoSyncLog` object types. All fields are combined with a logical ‘and.’ */
export type RepoSyncLogFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoSyncLogFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `logType` field. */
  logType?: InputMaybe<StringFilter>;
  /** Filter by the object’s `message` field. */
  message?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncLogFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncLogFilter>>;
  /** Filter by the object’s `repoSyncQueueId` field. */
  repoSyncQueueId?: InputMaybe<BigIntFilter>;
};

/** An input for mutations affecting `RepoSyncLog` */
export type RepoSyncLogInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  logType: Scalars['String'];
  message: Scalars['String'];
  repoSyncQueueId: Scalars['BigInt'];
};

/** Represents an update to a `RepoSyncLog`. Fields that are set will be updated. */
export type RepoSyncLogPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  logType?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  repoSyncQueueId?: InputMaybe<Scalars['BigInt']>;
};

export type RepoSyncLogType = Node & {
  description?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `RepoSyncLog`. */
  repoSyncLogsByLogType: RepoSyncLogsConnection;
  type: Scalars['String'];
};


export type RepoSyncLogTypeRepoSyncLogsByLogTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncLogCondition>;
  filter?: InputMaybe<RepoSyncLogFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>;
};

/**
 * A condition to be used against `RepoSyncLogType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncLogTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `RepoSyncLogType` object types. All fields are combined with a logical ‘and.’ */
export type RepoSyncLogTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoSyncLogTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncLogTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncLogTypeFilter>>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `RepoSyncLogType` */
export type RepoSyncLogTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** Represents an update to a `RepoSyncLogType`. Fields that are set will be updated. */
export type RepoSyncLogTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `RepoSyncLogType` values. */
export type RepoSyncLogTypesConnection = {
  /** A list of edges which contains the `RepoSyncLogType` and cursor to aid in pagination. */
  edges: Array<RepoSyncLogTypesEdge>;
  /** A list of `RepoSyncLogType` objects. */
  nodes: Array<RepoSyncLogType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoSyncLogType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoSyncLogType` edge in the connection. */
export type RepoSyncLogTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoSyncLogType` at the end of the edge. */
  node: RepoSyncLogType;
};

/** Methods to use when ordering `RepoSyncLogType`. */
export enum RepoSyncLogTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** A connection to a list of `RepoSyncLog` values. */
export type RepoSyncLogsConnection = {
  /** A list of edges which contains the `RepoSyncLog` and cursor to aid in pagination. */
  edges: Array<RepoSyncLogsEdge>;
  /** A list of `RepoSyncLog` objects. */
  nodes: Array<RepoSyncLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoSyncLog` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoSyncLog` edge in the connection. */
export type RepoSyncLogsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoSyncLog` at the end of the edge. */
  node: RepoSyncLog;
};

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
  RepoSyncQueueIdDesc = 'REPO_SYNC_QUEUE_ID_DESC'
}

/** Represents an update to a `RepoSync`. Fields that are set will be updated. */
export type RepoSyncPatch = {
  id?: InputMaybe<Scalars['UUID']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  scheduleEnabled?: InputMaybe<Scalars['Boolean']>;
  settings?: InputMaybe<Scalars['JSON']>;
  syncType?: InputMaybe<Scalars['String']>;
};

export type RepoSyncQueue = Node & {
  createdAt: Scalars['Datetime'];
  doneAt?: Maybe<Scalars['Datetime']>;
  hasError?: Maybe<Scalars['Boolean']>;
  id: Scalars['BigInt'];
  lastKeepAlive?: Maybe<Scalars['Datetime']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  priority: Scalars['Int'];
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSync?: Maybe<RepoSync>;
  repoSyncId: Scalars['UUID'];
  /** Reads and enables pagination through a set of `RepoSyncLog`. */
  repoSyncLogs: RepoSyncLogsConnection;
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>;
  startedAt?: Maybe<Scalars['Datetime']>;
  status: Scalars['String'];
};


export type RepoSyncQueueRepoSyncLogsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncLogCondition>;
  filter?: InputMaybe<RepoSyncLogFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>;
};

/**
 * A condition to be used against `RepoSyncQueue` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncQueueCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `doneAt` field. */
  doneAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `lastKeepAlive` field. */
  lastKeepAlive?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `repoSyncId` field. */
  repoSyncId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `startedAt` field. */
  startedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `RepoSyncQueue` object types. All fields are combined with a logical ‘and.’ */
export type RepoSyncQueueFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoSyncQueueFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `doneAt` field. */
  doneAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `hasError` field. */
  hasError?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `lastKeepAlive` field. */
  lastKeepAlive?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncQueueFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncQueueFilter>>;
  /** Filter by the object’s `priority` field. */
  priority?: InputMaybe<IntFilter>;
  /** Filter by the object’s `repoSyncId` field. */
  repoSyncId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `startedAt` field. */
  startedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `RepoSyncQueue` */
export type RepoSyncQueueInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  doneAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  lastKeepAlive?: InputMaybe<Scalars['Datetime']>;
  priority?: InputMaybe<Scalars['Int']>;
  repoSyncId: Scalars['UUID'];
  startedAt?: InputMaybe<Scalars['Datetime']>;
  status: Scalars['String'];
};

/** Represents an update to a `RepoSyncQueue`. Fields that are set will be updated. */
export type RepoSyncQueuePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  doneAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  lastKeepAlive?: InputMaybe<Scalars['Datetime']>;
  priority?: InputMaybe<Scalars['Int']>;
  repoSyncId?: InputMaybe<Scalars['UUID']>;
  startedAt?: InputMaybe<Scalars['Datetime']>;
  status?: InputMaybe<Scalars['String']>;
};

export type RepoSyncQueueStatusType = Node & {
  description?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `RepoSyncQueue`. */
  repoSyncQueuesByStatus: RepoSyncQueuesConnection;
  type: Scalars['String'];
};


export type RepoSyncQueueStatusTypeRepoSyncQueuesByStatusArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncQueueCondition>;
  filter?: InputMaybe<RepoSyncQueueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>;
};

/**
 * A condition to be used against `RepoSyncQueueStatusType` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncQueueStatusTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `RepoSyncQueueStatusType` object types. All fields are combined with a logical ‘and.’ */
export type RepoSyncQueueStatusTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoSyncQueueStatusTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncQueueStatusTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncQueueStatusTypeFilter>>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `RepoSyncQueueStatusType` */
export type RepoSyncQueueStatusTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** Represents an update to a `RepoSyncQueueStatusType`. Fields that are set will be updated. */
export type RepoSyncQueueStatusTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `RepoSyncQueueStatusType` values. */
export type RepoSyncQueueStatusTypesConnection = {
  /** A list of edges which contains the `RepoSyncQueueStatusType` and cursor to aid in pagination. */
  edges: Array<RepoSyncQueueStatusTypesEdge>;
  /** A list of `RepoSyncQueueStatusType` objects. */
  nodes: Array<RepoSyncQueueStatusType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoSyncQueueStatusType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoSyncQueueStatusType` edge in the connection. */
export type RepoSyncQueueStatusTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoSyncQueueStatusType` at the end of the edge. */
  node: RepoSyncQueueStatusType;
};

/** Methods to use when ordering `RepoSyncQueueStatusType`. */
export enum RepoSyncQueueStatusTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** A connection to a list of `RepoSyncQueue` values. */
export type RepoSyncQueuesConnection = {
  /** A list of edges which contains the `RepoSyncQueue` and cursor to aid in pagination. */
  edges: Array<RepoSyncQueuesEdge>;
  /** A list of `RepoSyncQueue` objects. */
  nodes: Array<RepoSyncQueue>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoSyncQueue` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoSyncQueue` edge in the connection. */
export type RepoSyncQueuesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoSyncQueue` at the end of the edge. */
  node: RepoSyncQueue;
};

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
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
  RepoSyncIdAsc = 'REPO_SYNC_ID_ASC',
  RepoSyncIdDesc = 'REPO_SYNC_ID_DESC',
  StartedAtAsc = 'STARTED_AT_ASC',
  StartedAtDesc = 'STARTED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC'
}

export type RepoSyncType = Node & {
  description?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncsBySyncType: RepoSyncsConnection;
  shortName: Scalars['String'];
  type: Scalars['String'];
};


export type RepoSyncTypeRepoSyncsBySyncTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncCondition>;
  filter?: InputMaybe<RepoSyncFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>;
};

/**
 * A condition to be used against `RepoSyncType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `shortName` field. */
  shortName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `RepoSyncType` object types. All fields are combined with a logical ‘and.’ */
export type RepoSyncTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoSyncTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncTypeFilter>>;
  /** Filter by the object’s `shortName` field. */
  shortName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `RepoSyncType` */
export type RepoSyncTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** Represents an update to a `RepoSyncType`. Fields that are set will be updated. */
export type RepoSyncTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `RepoSyncType` values. */
export type RepoSyncTypesConnection = {
  /** A list of edges which contains the `RepoSyncType` and cursor to aid in pagination. */
  edges: Array<RepoSyncTypesEdge>;
  /** A list of `RepoSyncType` objects. */
  nodes: Array<RepoSyncType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoSyncType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoSyncType` edge in the connection. */
export type RepoSyncTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoSyncType` at the end of the edge. */
  node: RepoSyncType;
};

/** Methods to use when ordering `RepoSyncType`. */
export enum RepoSyncTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ShortNameAsc = 'SHORT_NAME_ASC',
  ShortNameDesc = 'SHORT_NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** A connection to a list of `RepoSync` values. */
export type RepoSyncsConnection = {
  /** A list of edges which contains the `RepoSync` and cursor to aid in pagination. */
  edges: Array<RepoSyncsEdge>;
  /** A list of `RepoSync` objects. */
  nodes: Array<RepoSync>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoSync` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoSync` edge in the connection. */
export type RepoSyncsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoSync` at the end of the edge. */
  node: RepoSync;
};

/** Methods to use when ordering `RepoSync`. */
export enum RepoSyncsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ScheduleEnabledAsc = 'SCHEDULE_ENABLED_ASC',
  ScheduleEnabledDesc = 'SCHEDULE_ENABLED_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  SyncTypeAsc = 'SYNC_TYPE_ASC',
  SyncTypeDesc = 'SYNC_TYPE_DESC'
}

/** A connection to a list of `Repo` values. */
export type ReposConnection = {
  /** A list of edges which contains the `Repo` and cursor to aid in pagination. */
  edges: Array<ReposEdge>;
  /** A list of `Repo` objects. */
  nodes: Array<Repo>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Repo` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Repo` edge in the connection. */
export type ReposEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Repo` at the end of the edge. */
  node: Repo;
};

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
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

export type SchemaMigration = Node & {
  dirty: Scalars['Boolean'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  version: Scalars['BigInt'];
};

/**
 * A condition to be used against `SchemaMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SchemaMigrationCondition = {
  /** Checks for equality with the object’s `dirty` field. */
  dirty?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['BigInt']>;
};

/** A filter to be used against `SchemaMigration` object types. All fields are combined with a logical ‘and.’ */
export type SchemaMigrationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SchemaMigrationFilter>>;
  /** Filter by the object’s `dirty` field. */
  dirty?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SchemaMigrationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SchemaMigrationFilter>>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<BigIntFilter>;
};

/** An input for mutations affecting `SchemaMigration` */
export type SchemaMigrationInput = {
  dirty: Scalars['Boolean'];
  version: Scalars['BigInt'];
};

/** Represents an update to a `SchemaMigration`. Fields that are set will be updated. */
export type SchemaMigrationPatch = {
  dirty?: InputMaybe<Scalars['Boolean']>;
  version?: InputMaybe<Scalars['BigInt']>;
};

/** A connection to a list of `SchemaMigration` values. */
export type SchemaMigrationsConnection = {
  /** A list of edges which contains the `SchemaMigration` and cursor to aid in pagination. */
  edges: Array<SchemaMigrationsEdge>;
  /** A list of `SchemaMigration` objects. */
  nodes: Array<SchemaMigration>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SchemaMigration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SchemaMigration` edge in the connection. */
export type SchemaMigrationsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SchemaMigration` at the end of the edge. */
  node: SchemaMigration;
};

/** A connection to a list of `SchemaMigrationsHistory` values. */
export type SchemaMigrationsHistoriesConnection = {
  /** A list of edges which contains the `SchemaMigrationsHistory` and cursor to aid in pagination. */
  edges: Array<SchemaMigrationsHistoriesEdge>;
  /** A list of `SchemaMigrationsHistory` objects. */
  nodes: Array<SchemaMigrationsHistory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SchemaMigrationsHistory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SchemaMigrationsHistory` edge in the connection. */
export type SchemaMigrationsHistoriesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SchemaMigrationsHistory` at the end of the edge. */
  node: SchemaMigrationsHistory;
};

/** Methods to use when ordering `SchemaMigrationsHistory`. */
export enum SchemaMigrationsHistoriesOrderBy {
  AppliedAtAsc = 'APPLIED_AT_ASC',
  AppliedAtDesc = 'APPLIED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

export type SchemaMigrationsHistory = Node & {
  appliedAt: Scalars['Datetime'];
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  version: Scalars['BigInt'];
};

/**
 * A condition to be used against `SchemaMigrationsHistory` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type SchemaMigrationsHistoryCondition = {
  /** Checks for equality with the object’s `appliedAt` field. */
  appliedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['BigInt']>;
};

/** A filter to be used against `SchemaMigrationsHistory` object types. All fields are combined with a logical ‘and.’ */
export type SchemaMigrationsHistoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SchemaMigrationsHistoryFilter>>;
  /** Filter by the object’s `appliedAt` field. */
  appliedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SchemaMigrationsHistoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SchemaMigrationsHistoryFilter>>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<BigIntFilter>;
};

/** An input for mutations affecting `SchemaMigrationsHistory` */
export type SchemaMigrationsHistoryInput = {
  appliedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  version: Scalars['BigInt'];
};

/** Represents an update to a `SchemaMigrationsHistory`. Fields that are set will be updated. */
export type SchemaMigrationsHistoryPatch = {
  appliedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['BigInt']>;
};

/** Methods to use when ordering `SchemaMigration`. */
export enum SchemaMigrationsOrderBy {
  DirtyAsc = 'DIRTY_ASC',
  DirtyDesc = 'DIRTY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

export type ServiceAuthCredential = Node & {
  createdAt: Scalars['Datetime'];
  credentials?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `ServiceAuthCredentialType` that is related to this `ServiceAuthCredential`. */
  serviceAuthCredentialTypeByType?: Maybe<ServiceAuthCredentialType>;
  type: Scalars['String'];
  updatedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `ServiceAuthCredential` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type ServiceAuthCredentialCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `credentials` field. */
  credentials?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `ServiceAuthCredential` object types. All fields are combined with a logical ‘and.’ */
export type ServiceAuthCredentialFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ServiceAuthCredentialFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ServiceAuthCredentialFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ServiceAuthCredentialFilter>>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `ServiceAuthCredential` */
export type ServiceAuthCredentialInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  credentials?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `ServiceAuthCredential`. Fields that are set will be updated. */
export type ServiceAuthCredentialPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  credentials?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type ServiceAuthCredentialType = Node & {
  description: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `ServiceAuthCredential`. */
  serviceAuthCredentialsByType: ServiceAuthCredentialsConnection;
  type: Scalars['String'];
};


export type ServiceAuthCredentialTypeServiceAuthCredentialsByTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ServiceAuthCredentialCondition>;
  filter?: InputMaybe<ServiceAuthCredentialFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceAuthCredentialsOrderBy>>;
};

/**
 * A condition to be used against `ServiceAuthCredentialType` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type ServiceAuthCredentialTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `ServiceAuthCredentialType` object types. All fields are combined with a logical ‘and.’ */
export type ServiceAuthCredentialTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ServiceAuthCredentialTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ServiceAuthCredentialTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ServiceAuthCredentialTypeFilter>>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `ServiceAuthCredentialType` */
export type ServiceAuthCredentialTypeInput = {
  description: Scalars['String'];
  type: Scalars['String'];
};

/** Represents an update to a `ServiceAuthCredentialType`. Fields that are set will be updated. */
export type ServiceAuthCredentialTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `ServiceAuthCredentialType` values. */
export type ServiceAuthCredentialTypesConnection = {
  /** A list of edges which contains the `ServiceAuthCredentialType` and cursor to aid in pagination. */
  edges: Array<ServiceAuthCredentialTypesEdge>;
  /** A list of `ServiceAuthCredentialType` objects. */
  nodes: Array<ServiceAuthCredentialType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ServiceAuthCredentialType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ServiceAuthCredentialType` edge in the connection. */
export type ServiceAuthCredentialTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ServiceAuthCredentialType` at the end of the edge. */
  node: ServiceAuthCredentialType;
};

/** Methods to use when ordering `ServiceAuthCredentialType`. */
export enum ServiceAuthCredentialTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** A connection to a list of `ServiceAuthCredential` values. */
export type ServiceAuthCredentialsConnection = {
  /** A list of edges which contains the `ServiceAuthCredential` and cursor to aid in pagination. */
  edges: Array<ServiceAuthCredentialsEdge>;
  /** A list of `ServiceAuthCredential` objects. */
  nodes: Array<ServiceAuthCredential>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ServiceAuthCredential` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ServiceAuthCredential` edge in the connection. */
export type ServiceAuthCredentialsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ServiceAuthCredential` at the end of the edge. */
  node: ServiceAuthCredential;
};

/** Methods to use when ordering `ServiceAuthCredential`. */
export enum ServiceAuthCredentialsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CredentialsAsc = 'CREDENTIALS_ASC',
  CredentialsDesc = 'CREDENTIALS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** All input for the `simpleRepoSyncQueueCleanup` mutation. */
export type SimpleRepoSyncQueueCleanupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  daysToRetainParam?: InputMaybe<Scalars['Int']>;
};

/** The output of our `simpleRepoSyncQueueCleanup` mutation. */
export type SimpleRepoSyncQueueCleanupPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

export type TrivyRepoScan = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `TrivyRepoScan`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  results: Scalars['JSON'];
};

/**
 * A condition to be used against `TrivyRepoScan` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TrivyRepoScanCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `results` field. */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `TrivyRepoScan` object types. All fields are combined with a logical ‘and.’ */
export type TrivyRepoScanFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TrivyRepoScanFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<TrivyRepoScanFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TrivyRepoScanFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `results` field. */
  results?: InputMaybe<JsonFilter>;
};

/** An input for mutations affecting `TrivyRepoScan` */
export type TrivyRepoScanInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  repoId: Scalars['UUID'];
  results: Scalars['JSON'];
};

/** Represents an update to a `TrivyRepoScan`. Fields that are set will be updated. */
export type TrivyRepoScanPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  results?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `TrivyRepoScan` values. */
export type TrivyRepoScansConnection = {
  /** A list of edges which contains the `TrivyRepoScan` and cursor to aid in pagination. */
  edges: Array<TrivyRepoScansEdge>;
  /** A list of `TrivyRepoScan` objects. */
  nodes: Array<TrivyRepoScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TrivyRepoScan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TrivyRepoScan` edge in the connection. */
export type TrivyRepoScansEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TrivyRepoScan` at the end of the edge. */
  node: TrivyRepoScan;
};

/** Methods to use when ordering `TrivyRepoScan`. */
export enum TrivyRepoScansOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ResultsAsc = 'RESULTS_ASC',
  ResultsDesc = 'RESULTS_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** A connection to a list of `TrivyRepoVulnerability` values. */
export type TrivyRepoVulnerabilitiesConnection = {
  /** A list of edges which contains the `TrivyRepoVulnerability` and cursor to aid in pagination. */
  edges: Array<TrivyRepoVulnerabilitiesEdge>;
  /** A list of `TrivyRepoVulnerability` objects. */
  nodes: Array<TrivyRepoVulnerability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TrivyRepoVulnerability` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TrivyRepoVulnerability` edge in the connection. */
export type TrivyRepoVulnerabilitiesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TrivyRepoVulnerability` at the end of the edge. */
  node: TrivyRepoVulnerability;
};

/** Methods to use when ordering `TrivyRepoVulnerability`. */
export enum TrivyRepoVulnerabilitiesOrderBy {
  ClassAsc = 'CLASS_ASC',
  ClassDesc = 'CLASS_DESC',
  Natural = 'NATURAL',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  TargetAsc = 'TARGET_ASC',
  TargetDesc = 'TARGET_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  VulnerabilityAsc = 'VULNERABILITY_ASC',
  VulnerabilityDesc = 'VULNERABILITY_DESC',
  VulnerabilityDescriptionAsc = 'VULNERABILITY_DESCRIPTION_ASC',
  VulnerabilityDescriptionDesc = 'VULNERABILITY_DESCRIPTION_DESC',
  VulnerabilityIdAsc = 'VULNERABILITY_ID_ASC',
  VulnerabilityIdDesc = 'VULNERABILITY_ID_DESC',
  VulnerabilityInstalledVersionAsc = 'VULNERABILITY_INSTALLED_VERSION_ASC',
  VulnerabilityInstalledVersionDesc = 'VULNERABILITY_INSTALLED_VERSION_DESC',
  VulnerabilityPkgNameAsc = 'VULNERABILITY_PKG_NAME_ASC',
  VulnerabilityPkgNameDesc = 'VULNERABILITY_PKG_NAME_DESC',
  VulnerabilitySeverityAsc = 'VULNERABILITY_SEVERITY_ASC',
  VulnerabilitySeverityDesc = 'VULNERABILITY_SEVERITY_DESC',
  VulnerabilityTitleAsc = 'VULNERABILITY_TITLE_ASC',
  VulnerabilityTitleDesc = 'VULNERABILITY_TITLE_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

export type TrivyRepoVulnerability = {
  _mergestatSyncedAt?: Maybe<Scalars['Datetime']>;
  class?: Maybe<Scalars['String']>;
  repoId?: Maybe<Scalars['UUID']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vulnerability?: Maybe<Scalars['JSON']>;
  vulnerabilityDescription?: Maybe<Scalars['String']>;
  vulnerabilityId?: Maybe<Scalars['String']>;
  vulnerabilityInstalledVersion?: Maybe<Scalars['String']>;
  vulnerabilityPkgName?: Maybe<Scalars['String']>;
  vulnerabilitySeverity?: Maybe<Scalars['String']>;
  vulnerabilityTitle?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `TrivyRepoVulnerability` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type TrivyRepoVulnerabilityCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `class` field. */
  class?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `target` field. */
  target?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vulnerability` field. */
  vulnerability?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `vulnerabilityDescription` field. */
  vulnerabilityDescription?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vulnerabilityId` field. */
  vulnerabilityId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vulnerabilityInstalledVersion` field. */
  vulnerabilityInstalledVersion?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vulnerabilityPkgName` field. */
  vulnerabilityPkgName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vulnerabilitySeverity` field. */
  vulnerabilitySeverity?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vulnerabilityTitle` field. */
  vulnerabilityTitle?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `TrivyRepoVulnerability` object types. All fields are combined with a logical ‘and.’ */
export type TrivyRepoVulnerabilityFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TrivyRepoVulnerabilityFilter>>;
  /** Filter by the object’s `class` field. */
  class?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TrivyRepoVulnerabilityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TrivyRepoVulnerabilityFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `target` field. */
  target?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vulnerability` field. */
  vulnerability?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `vulnerabilityDescription` field. */
  vulnerabilityDescription?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vulnerabilityId` field. */
  vulnerabilityId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vulnerabilityInstalledVersion` field. */
  vulnerabilityInstalledVersion?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vulnerabilityPkgName` field. */
  vulnerabilityPkgName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vulnerabilitySeverity` field. */
  vulnerabilitySeverity?: InputMaybe<StringFilter>;
  /** Filter by the object’s `vulnerabilityTitle` field. */
  vulnerabilityTitle?: InputMaybe<StringFilter>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']>>;
};

/** All input for the `updateGitBlameByNodeId` mutation. */
export type UpdateGitBlameByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitBlame` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GitBlame` being updated. */
  patch: GitBlamePatch;
};

/** All input for the `updateGitBlame` mutation. */
export type UpdateGitBlameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  lineNo: Scalars['Int'];
  /** An object where the defined keys will be set on the `GitBlame` being updated. */
  patch: GitBlamePatch;
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our update `GitBlame` mutation. */
export type UpdateGitBlamePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitBlame` that was updated by this mutation. */
  gitBlame?: Maybe<GitBlame>;
  /** An edge for our `GitBlame`. May be used by Relay 1. */
  gitBlameEdge?: Maybe<GitBlamesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitBlame`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GitBlame` mutation. */
export type UpdateGitBlamePayloadGitBlameEdgeArgs = {
  orderBy?: InputMaybe<Array<GitBlamesOrderBy>>;
};

/** All input for the `updateGitCommitByNodeId` mutation. */
export type UpdateGitCommitByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitCommit` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GitCommit` being updated. */
  patch: GitCommitPatch;
};

/** All input for the `updateGitCommit` mutation. */
export type UpdateGitCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  hash: Scalars['String'];
  /** An object where the defined keys will be set on the `GitCommit` being updated. */
  patch: GitCommitPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GitCommit` mutation. */
export type UpdateGitCommitPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitCommit` that was updated by this mutation. */
  gitCommit?: Maybe<GitCommit>;
  /** An edge for our `GitCommit`. May be used by Relay 1. */
  gitCommitEdge?: Maybe<GitCommitsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GitCommit` mutation. */
export type UpdateGitCommitPayloadGitCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitsOrderBy>>;
};

/** All input for the `updateGitCommitStatByNodeId` mutation. */
export type UpdateGitCommitStatByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitCommitStat` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GitCommitStat` being updated. */
  patch: GitCommitStatPatch;
};

/** All input for the `updateGitCommitStat` mutation. */
export type UpdateGitCommitStatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  commitHash: Scalars['String'];
  filePath: Scalars['String'];
  newFileMode: Scalars['String'];
  /** An object where the defined keys will be set on the `GitCommitStat` being updated. */
  patch: GitCommitStatPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GitCommitStat` mutation. */
export type UpdateGitCommitStatPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitCommitStat` that was updated by this mutation. */
  gitCommitStat?: Maybe<GitCommitStat>;
  /** An edge for our `GitCommitStat`. May be used by Relay 1. */
  gitCommitStatEdge?: Maybe<GitCommitStatsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitCommitStat`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GitCommitStat` mutation. */
export type UpdateGitCommitStatPayloadGitCommitStatEdgeArgs = {
  orderBy?: InputMaybe<Array<GitCommitStatsOrderBy>>;
};

/** All input for the `updateGitFileByNodeId` mutation. */
export type UpdateGitFileByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitFile` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GitFile` being updated. */
  patch: GitFilePatch;
};

/** All input for the `updateGitFile` mutation. */
export type UpdateGitFileInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `GitFile` being updated. */
  patch: GitFilePatch;
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our update `GitFile` mutation. */
export type UpdateGitFilePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitFile` that was updated by this mutation. */
  gitFile?: Maybe<GitFile>;
  /** An edge for our `GitFile`. May be used by Relay 1. */
  gitFileEdge?: Maybe<GitFilesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GitFile` mutation. */
export type UpdateGitFilePayloadGitFileEdgeArgs = {
  orderBy?: InputMaybe<Array<GitFilesOrderBy>>;
};

/** All input for the `updateGitRefByNodeId` mutation. */
export type UpdateGitRefByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitRef` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GitRef` being updated. */
  patch: GitRefPatch;
};

/** All input for the `updateGitRef` mutation. */
export type UpdateGitRefInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  /** An object where the defined keys will be set on the `GitRef` being updated. */
  patch: GitRefPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GitRef` mutation. */
export type UpdateGitRefPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitRef` that was updated by this mutation. */
  gitRef?: Maybe<GitRef>;
  /** An edge for our `GitRef`. May be used by Relay 1. */
  gitRefEdge?: Maybe<GitRefsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitRef`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GitRef` mutation. */
export type UpdateGitRefPayloadGitRefEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRefsOrderBy>>;
};

/** All input for the `updateGithubIssueByNodeId` mutation. */
export type UpdateGithubIssueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubIssue` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubIssue` being updated. */
  patch: GithubIssuePatch;
};

/** All input for the `updateGithubIssue` mutation. */
export type UpdateGithubIssueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  databaseId: Scalars['Int'];
  /** An object where the defined keys will be set on the `GithubIssue` being updated. */
  patch: GithubIssuePatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GithubIssue` mutation. */
export type UpdateGithubIssuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubIssue` that was updated by this mutation. */
  githubIssue?: Maybe<GithubIssue>;
  /** An edge for our `GithubIssue`. May be used by Relay 1. */
  githubIssueEdge?: Maybe<GithubIssuesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubIssue` mutation. */
export type UpdateGithubIssuePayloadGithubIssueEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
};

/** All input for the `updateGithubPullRequestByNodeId` mutation. */
export type UpdateGithubPullRequestByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubPullRequest` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubPullRequest` being updated. */
  patch: GithubPullRequestPatch;
};

/** All input for the `updateGithubPullRequestCommitByNodeId` mutation. */
export type UpdateGithubPullRequestCommitByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubPullRequestCommit` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubPullRequestCommit` being updated. */
  patch: GithubPullRequestCommitPatch;
};

/** All input for the `updateGithubPullRequestCommit` mutation. */
export type UpdateGithubPullRequestCommitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  hash: Scalars['String'];
  /** An object where the defined keys will be set on the `GithubPullRequestCommit` being updated. */
  patch: GithubPullRequestCommitPatch;
  prNumber: Scalars['Int'];
  repoId: Scalars['UUID'];
};

/** The output of our update `GithubPullRequestCommit` mutation. */
export type UpdateGithubPullRequestCommitPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubPullRequestCommit` that was updated by this mutation. */
  githubPullRequestCommit?: Maybe<GithubPullRequestCommit>;
  /** An edge for our `GithubPullRequestCommit`. May be used by Relay 1. */
  githubPullRequestCommitEdge?: Maybe<GithubPullRequestCommitsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestCommit`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubPullRequestCommit` mutation. */
export type UpdateGithubPullRequestCommitPayloadGithubPullRequestCommitEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestCommitsOrderBy>>;
};

/** All input for the `updateGithubPullRequest` mutation. */
export type UpdateGithubPullRequestInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  databaseId: Scalars['Int'];
  /** An object where the defined keys will be set on the `GithubPullRequest` being updated. */
  patch: GithubPullRequestPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GithubPullRequest` mutation. */
export type UpdateGithubPullRequestPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubPullRequest` that was updated by this mutation. */
  githubPullRequest?: Maybe<GithubPullRequest>;
  /** An edge for our `GithubPullRequest`. May be used by Relay 1. */
  githubPullRequestEdge?: Maybe<GithubPullRequestsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubPullRequest` mutation. */
export type UpdateGithubPullRequestPayloadGithubPullRequestEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestsOrderBy>>;
};

/** All input for the `updateGithubPullRequestReviewByNodeId` mutation. */
export type UpdateGithubPullRequestReviewByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubPullRequestReview` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubPullRequestReview` being updated. */
  patch: GithubPullRequestReviewPatch;
};

/** All input for the `updateGithubPullRequestReview` mutation. */
export type UpdateGithubPullRequestReviewInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** An object where the defined keys will be set on the `GithubPullRequestReview` being updated. */
  patch: GithubPullRequestReviewPatch;
};

/** The output of our update `GithubPullRequestReview` mutation. */
export type UpdateGithubPullRequestReviewPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubPullRequestReview` that was updated by this mutation. */
  githubPullRequestReview?: Maybe<GithubPullRequestReview>;
  /** An edge for our `GithubPullRequestReview`. May be used by Relay 1. */
  githubPullRequestReviewEdge?: Maybe<GithubPullRequestReviewsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestReview`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubPullRequestReview` mutation. */
export type UpdateGithubPullRequestReviewPayloadGithubPullRequestReviewEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubPullRequestReviewsOrderBy>>;
};

/** All input for the `updateGithubRepoInfoByNodeId` mutation. */
export type UpdateGithubRepoInfoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubRepoInfo` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubRepoInfo` being updated. */
  patch: GithubRepoInfoPatch;
};

/** All input for the `updateGithubRepoInfoByOwnerAndName` mutation. */
export type UpdateGithubRepoInfoByOwnerAndNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  owner: Scalars['String'];
  /** An object where the defined keys will be set on the `GithubRepoInfo` being updated. */
  patch: GithubRepoInfoPatch;
};

/** All input for the `updateGithubRepoInfo` mutation. */
export type UpdateGithubRepoInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `GithubRepoInfo` being updated. */
  patch: GithubRepoInfoPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GithubRepoInfo` mutation. */
export type UpdateGithubRepoInfoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubRepoInfo` that was updated by this mutation. */
  githubRepoInfo?: Maybe<GithubRepoInfo>;
  /** An edge for our `GithubRepoInfo`. May be used by Relay 1. */
  githubRepoInfoEdge?: Maybe<GithubRepoInfosEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubRepoInfo` mutation. */
export type UpdateGithubRepoInfoPayloadGithubRepoInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubRepoInfosOrderBy>>;
};

/** All input for the `updateGithubStargazerByNodeId` mutation. */
export type UpdateGithubStargazerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubStargazer` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubStargazer` being updated. */
  patch: GithubStargazerPatch;
};

/** All input for the `updateGithubStargazer` mutation. */
export type UpdateGithubStargazerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  login: Scalars['String'];
  /** An object where the defined keys will be set on the `GithubStargazer` being updated. */
  patch: GithubStargazerPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GithubStargazer` mutation. */
export type UpdateGithubStargazerPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubStargazer` that was updated by this mutation. */
  githubStargazer?: Maybe<GithubStargazer>;
  /** An edge for our `GithubStargazer`. May be used by Relay 1. */
  githubStargazerEdge?: Maybe<GithubStargazersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubStargazer` mutation. */
export type UpdateGithubStargazerPayloadGithubStargazerEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubStargazersOrderBy>>;
};

/** All input for the `updateRepoByNodeId` mutation. */
export type UpdateRepoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Repo` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Repo` being updated. */
  patch: RepoPatch;
};

/** All input for the `updateRepoImportByNodeId` mutation. */
export type UpdateRepoImportByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoImport` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoImport` being updated. */
  patch: RepoImportPatch;
};

/** All input for the `updateRepoImport` mutation. */
export type UpdateRepoImportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `RepoImport` being updated. */
  patch: RepoImportPatch;
};

/** The output of our update `RepoImport` mutation. */
export type UpdateRepoImportPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImport` that was updated by this mutation. */
  repoImport?: Maybe<RepoImport>;
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>;
  /** Reads a single `RepoImportType` that is related to this `RepoImport`. */
  repoImportTypeByType?: Maybe<RepoImportType>;
};


/** The output of our update `RepoImport` mutation. */
export type UpdateRepoImportPayloadRepoImportEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>;
};

/** All input for the `updateRepoImportTypeByNodeId` mutation. */
export type UpdateRepoImportTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoImportType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoImportType` being updated. */
  patch: RepoImportTypePatch;
};

/** All input for the `updateRepoImportType` mutation. */
export type UpdateRepoImportTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RepoImportType` being updated. */
  patch: RepoImportTypePatch;
  type: Scalars['String'];
};

/** The output of our update `RepoImportType` mutation. */
export type UpdateRepoImportTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImportType` that was updated by this mutation. */
  repoImportType?: Maybe<RepoImportType>;
  /** An edge for our `RepoImportType`. May be used by Relay 1. */
  repoImportTypeEdge?: Maybe<RepoImportTypesEdge>;
};


/** The output of our update `RepoImportType` mutation. */
export type UpdateRepoImportTypePayloadRepoImportTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoImportTypesOrderBy>>;
};

/** All input for the `updateRepo` mutation. */
export type UpdateRepoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Repo` being updated. */
  patch: RepoPatch;
};

/** The output of our update `Repo` mutation. */
export type UpdateRepoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Repo` that was updated by this mutation. */
  repo?: Maybe<Repo>;
  /** An edge for our `Repo`. May be used by Relay 1. */
  repoEdge?: Maybe<ReposEdge>;
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImport?: Maybe<RepoImport>;
};


/** The output of our update `Repo` mutation. */
export type UpdateRepoPayloadRepoEdgeArgs = {
  orderBy?: InputMaybe<Array<ReposOrderBy>>;
};

/** All input for the `updateRepoSyncByNodeId` mutation. */
export type UpdateRepoSyncByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSync` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoSync` being updated. */
  patch: RepoSyncPatch;
};

/** All input for the `updateRepoSyncByRepoIdAndSyncType` mutation. */
export type UpdateRepoSyncByRepoIdAndSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RepoSync` being updated. */
  patch: RepoSyncPatch;
  repoId: Scalars['UUID'];
  syncType: Scalars['String'];
};

/** All input for the `updateRepoSync` mutation. */
export type UpdateRepoSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `RepoSync` being updated. */
  patch: RepoSyncPatch;
};

/** All input for the `updateRepoSyncLogByNodeId` mutation. */
export type UpdateRepoSyncLogByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncLog` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoSyncLog` being updated. */
  patch: RepoSyncLogPatch;
};

/** All input for the `updateRepoSyncLog` mutation. */
export type UpdateRepoSyncLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `RepoSyncLog` being updated. */
  patch: RepoSyncLogPatch;
};

/** The output of our update `RepoSyncLog` mutation. */
export type UpdateRepoSyncLogPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncLog` that was updated by this mutation. */
  repoSyncLog?: Maybe<RepoSyncLog>;
  /** An edge for our `RepoSyncLog`. May be used by Relay 1. */
  repoSyncLogEdge?: Maybe<RepoSyncLogsEdge>;
  /** Reads a single `RepoSyncLogType` that is related to this `RepoSyncLog`. */
  repoSyncLogTypeByLogType?: Maybe<RepoSyncLogType>;
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSyncLog`. */
  repoSyncQueue?: Maybe<RepoSyncQueue>;
};


/** The output of our update `RepoSyncLog` mutation. */
export type UpdateRepoSyncLogPayloadRepoSyncLogEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogsOrderBy>>;
};

/** All input for the `updateRepoSyncLogTypeByNodeId` mutation. */
export type UpdateRepoSyncLogTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncLogType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoSyncLogType` being updated. */
  patch: RepoSyncLogTypePatch;
};

/** All input for the `updateRepoSyncLogType` mutation. */
export type UpdateRepoSyncLogTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RepoSyncLogType` being updated. */
  patch: RepoSyncLogTypePatch;
  type: Scalars['String'];
};

/** The output of our update `RepoSyncLogType` mutation. */
export type UpdateRepoSyncLogTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncLogType` that was updated by this mutation. */
  repoSyncLogType?: Maybe<RepoSyncLogType>;
  /** An edge for our `RepoSyncLogType`. May be used by Relay 1. */
  repoSyncLogTypeEdge?: Maybe<RepoSyncLogTypesEdge>;
};


/** The output of our update `RepoSyncLogType` mutation. */
export type UpdateRepoSyncLogTypePayloadRepoSyncLogTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncLogTypesOrderBy>>;
};

/** The output of our update `RepoSync` mutation. */
export type UpdateRepoSyncPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `RepoSync`. */
  repo?: Maybe<Repo>;
  /** The `RepoSync` that was updated by this mutation. */
  repoSync?: Maybe<RepoSync>;
  /** An edge for our `RepoSync`. May be used by Relay 1. */
  repoSyncEdge?: Maybe<RepoSyncsEdge>;
  /** Reads a single `RepoSyncType` that is related to this `RepoSync`. */
  repoSyncTypeBySyncType?: Maybe<RepoSyncType>;
};


/** The output of our update `RepoSync` mutation. */
export type UpdateRepoSyncPayloadRepoSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncsOrderBy>>;
};

/** All input for the `updateRepoSyncQueueByNodeId` mutation. */
export type UpdateRepoSyncQueueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncQueue` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoSyncQueue` being updated. */
  patch: RepoSyncQueuePatch;
};

/** All input for the `updateRepoSyncQueue` mutation. */
export type UpdateRepoSyncQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `RepoSyncQueue` being updated. */
  patch: RepoSyncQueuePatch;
};

/** The output of our update `RepoSyncQueue` mutation. */
export type UpdateRepoSyncQueuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RepoSync` that is related to this `RepoSyncQueue`. */
  repoSync?: Maybe<RepoSync>;
  /** The `RepoSyncQueue` that was updated by this mutation. */
  repoSyncQueue?: Maybe<RepoSyncQueue>;
  /** An edge for our `RepoSyncQueue`. May be used by Relay 1. */
  repoSyncQueueEdge?: Maybe<RepoSyncQueuesEdge>;
  /** Reads a single `RepoSyncQueueStatusType` that is related to this `RepoSyncQueue`. */
  repoSyncQueueStatusTypeByStatus?: Maybe<RepoSyncQueueStatusType>;
};


/** The output of our update `RepoSyncQueue` mutation. */
export type UpdateRepoSyncQueuePayloadRepoSyncQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>;
};

/** All input for the `updateRepoSyncQueueStatusTypeByNodeId` mutation. */
export type UpdateRepoSyncQueueStatusTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncQueueStatusType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoSyncQueueStatusType` being updated. */
  patch: RepoSyncQueueStatusTypePatch;
};

/** All input for the `updateRepoSyncQueueStatusType` mutation. */
export type UpdateRepoSyncQueueStatusTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RepoSyncQueueStatusType` being updated. */
  patch: RepoSyncQueueStatusTypePatch;
  type: Scalars['String'];
};

/** The output of our update `RepoSyncQueueStatusType` mutation. */
export type UpdateRepoSyncQueueStatusTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncQueueStatusType` that was updated by this mutation. */
  repoSyncQueueStatusType?: Maybe<RepoSyncQueueStatusType>;
  /** An edge for our `RepoSyncQueueStatusType`. May be used by Relay 1. */
  repoSyncQueueStatusTypeEdge?: Maybe<RepoSyncQueueStatusTypesEdge>;
};


/** The output of our update `RepoSyncQueueStatusType` mutation. */
export type UpdateRepoSyncQueueStatusTypePayloadRepoSyncQueueStatusTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncQueueStatusTypesOrderBy>>;
};

/** All input for the `updateRepoSyncTypeByNodeId` mutation. */
export type UpdateRepoSyncTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoSyncType` being updated. */
  patch: RepoSyncTypePatch;
};

/** All input for the `updateRepoSyncType` mutation. */
export type UpdateRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `RepoSyncType` being updated. */
  patch: RepoSyncTypePatch;
  type: Scalars['String'];
};

/** The output of our update `RepoSyncType` mutation. */
export type UpdateRepoSyncTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncType` that was updated by this mutation. */
  repoSyncType?: Maybe<RepoSyncType>;
  /** An edge for our `RepoSyncType`. May be used by Relay 1. */
  repoSyncTypeEdge?: Maybe<RepoSyncTypesEdge>;
};


/** The output of our update `RepoSyncType` mutation. */
export type UpdateRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};

/** All input for the `updateSchemaMigrationByNodeId` mutation. */
export type UpdateSchemaMigrationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SchemaMigration` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SchemaMigration` being updated. */
  patch: SchemaMigrationPatch;
};

/** All input for the `updateSchemaMigration` mutation. */
export type UpdateSchemaMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SchemaMigration` being updated. */
  patch: SchemaMigrationPatch;
  version: Scalars['BigInt'];
};

/** The output of our update `SchemaMigration` mutation. */
export type UpdateSchemaMigrationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SchemaMigration` that was updated by this mutation. */
  schemaMigration?: Maybe<SchemaMigration>;
  /** An edge for our `SchemaMigration`. May be used by Relay 1. */
  schemaMigrationEdge?: Maybe<SchemaMigrationsEdge>;
};


/** The output of our update `SchemaMigration` mutation. */
export type UpdateSchemaMigrationPayloadSchemaMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>;
};

/** All input for the `updateSchemaMigrationsHistoryByNodeId` mutation. */
export type UpdateSchemaMigrationsHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SchemaMigrationsHistory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SchemaMigrationsHistory` being updated. */
  patch: SchemaMigrationsHistoryPatch;
};

/** All input for the `updateSchemaMigrationsHistory` mutation. */
export type UpdateSchemaMigrationsHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `SchemaMigrationsHistory` being updated. */
  patch: SchemaMigrationsHistoryPatch;
};

/** The output of our update `SchemaMigrationsHistory` mutation. */
export type UpdateSchemaMigrationsHistoryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SchemaMigrationsHistory` that was updated by this mutation. */
  schemaMigrationsHistory?: Maybe<SchemaMigrationsHistory>;
  /** An edge for our `SchemaMigrationsHistory`. May be used by Relay 1. */
  schemaMigrationsHistoryEdge?: Maybe<SchemaMigrationsHistoriesEdge>;
};


/** The output of our update `SchemaMigrationsHistory` mutation. */
export type UpdateSchemaMigrationsHistoryPayloadSchemaMigrationsHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SchemaMigrationsHistoriesOrderBy>>;
};

/** All input for the `updateServiceAuthCredentialByNodeId` mutation. */
export type UpdateServiceAuthCredentialByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ServiceAuthCredential` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ServiceAuthCredential` being updated. */
  patch: ServiceAuthCredentialPatch;
};

/** All input for the `updateServiceAuthCredential` mutation. */
export type UpdateServiceAuthCredentialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `ServiceAuthCredential` being updated. */
  patch: ServiceAuthCredentialPatch;
};

/** The output of our update `ServiceAuthCredential` mutation. */
export type UpdateServiceAuthCredentialPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ServiceAuthCredential` that was updated by this mutation. */
  serviceAuthCredential?: Maybe<ServiceAuthCredential>;
  /** An edge for our `ServiceAuthCredential`. May be used by Relay 1. */
  serviceAuthCredentialEdge?: Maybe<ServiceAuthCredentialsEdge>;
  /** Reads a single `ServiceAuthCredentialType` that is related to this `ServiceAuthCredential`. */
  serviceAuthCredentialTypeByType?: Maybe<ServiceAuthCredentialType>;
};


/** The output of our update `ServiceAuthCredential` mutation. */
export type UpdateServiceAuthCredentialPayloadServiceAuthCredentialEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceAuthCredentialsOrderBy>>;
};

/** All input for the `updateServiceAuthCredentialTypeByNodeId` mutation. */
export type UpdateServiceAuthCredentialTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ServiceAuthCredentialType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ServiceAuthCredentialType` being updated. */
  patch: ServiceAuthCredentialTypePatch;
};

/** All input for the `updateServiceAuthCredentialType` mutation. */
export type UpdateServiceAuthCredentialTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ServiceAuthCredentialType` being updated. */
  patch: ServiceAuthCredentialTypePatch;
  type: Scalars['String'];
};

/** The output of our update `ServiceAuthCredentialType` mutation. */
export type UpdateServiceAuthCredentialTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ServiceAuthCredentialType` that was updated by this mutation. */
  serviceAuthCredentialType?: Maybe<ServiceAuthCredentialType>;
  /** An edge for our `ServiceAuthCredentialType`. May be used by Relay 1. */
  serviceAuthCredentialTypeEdge?: Maybe<ServiceAuthCredentialTypesEdge>;
};


/** The output of our update `ServiceAuthCredentialType` mutation. */
export type UpdateServiceAuthCredentialTypePayloadServiceAuthCredentialTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ServiceAuthCredentialTypesOrderBy>>;
};

/** All input for the `updateTrivyRepoScanByNodeId` mutation. */
export type UpdateTrivyRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `TrivyRepoScan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `TrivyRepoScan` being updated. */
  patch: TrivyRepoScanPatch;
};

/** All input for the `updateTrivyRepoScan` mutation. */
export type UpdateTrivyRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `TrivyRepoScan` being updated. */
  patch: TrivyRepoScanPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `TrivyRepoScan` mutation. */
export type UpdateTrivyRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `TrivyRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `TrivyRepoScan` that was updated by this mutation. */
  trivyRepoScan?: Maybe<TrivyRepoScan>;
  /** An edge for our `TrivyRepoScan`. May be used by Relay 1. */
  trivyRepoScanEdge?: Maybe<TrivyRepoScansEdge>;
};


/** The output of our update `TrivyRepoScan` mutation. */
export type UpdateTrivyRepoScanPayloadTrivyRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<TrivyRepoScansOrderBy>>;
};

export type AddRepoMutationVariables = Exact<{
  repo: Scalars['String'];
  isGithub: Scalars['Boolean'];
}>;


export type AddRepoMutation = { createRepo?: { repo?: { id: any, repo: string } | null } | null };

export type AddRepoImportMutationVariables = Exact<{
  type: Scalars['String'];
  settings: Scalars['JSON'];
}>;


export type AddRepoImportMutation = { createRepoImport?: { repoImport?: { id: any, type: string, settings: any } | null } | null };

export type RemoveRepoMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveRepoMutation = { deleteRepo?: { deletedRepoNodeId?: string | null } | null };

export type UpdateTagsMutationVariables = Exact<{
  id: Scalars['UUID'];
  tags: Scalars['JSON'];
}>;


export type UpdateTagsMutation = { updateRepo?: { repo?: { id: any, tags: any } | null } | null };

export type SetGithubPatMutationVariables = Exact<{
  pat: Scalars['String'];
}>;


export type SetGithubPatMutation = { replaceGitHubPAT?: boolean | null };

export type SyncMutationVariables = Exact<{
  syncId: Scalars['UUID'];
}>;


export type SyncMutation = { createRepoSyncQueue?: { repoSyncQueue?: { id: any, status: string, createdAt: any } | null } | null };

export type AddSyncTypeMutationVariables = Exact<{
  repoId: Scalars['UUID'];
  syncType: Scalars['String'];
}>;


export type AddSyncTypeMutation = { createRepoSync?: { repoSync?: { id: any, syncType: string } | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentMergeStatUser?: string | null };

export type GetRepoImportsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRepoImportsQuery = { repoImports?: { totalCount: number, nodes: Array<{ id: any, type: string, settings: any, lastImport?: any | null }> } | null };

export type GetRepoImportQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetRepoImportQuery = { repoImport?: { id: any, type: string, lastImport?: any | null, settings: any } | null, repoSyncTypes?: { nodes: Array<{ type: string, description?: string | null, shortName: string }> } | null };

export type GetRepoSyncsQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetRepoSyncsQuery = { serviceAuthCredentials?: { totalCount: number } | null, repo?: { id: any, repo: string, isGithub?: boolean | null, tags: any, repoImport?: { type: string, settings: any } | null, repoSyncs: { nodes: Array<{ id: any, syncType: string, repoSyncQueues: { nodes: Array<{ id: any, status: string, startedAt?: any | null, doneAt?: any | null, hasError?: boolean | null }> } }> } } | null, repoSyncTypes?: { nodes: Array<{ type: string, description?: string | null, shortName: string }> } | null };

export type GetSyncTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSyncTypesQuery = { repoSyncTypes?: { nodes: Array<{ type: string, description?: string | null, shortName: string }> } | null };

export type GetReposQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type GetReposQuery = { serviceAuthCredentials?: { totalCount: number } | null, repoImports?: { totalCount: number } | null, allRepos?: { totalCount: number } | null, repos?: { totalCount: number, nodes: Array<{ id: any, repo: string, createdAt: any, isGithub?: boolean | null, tags: any, repoImport?: { type: string, settings: any } | null, repoSyncs: { totalCount: number, nodes: Array<{ id: any, syncType: string, repoSyncTypeBySyncType?: { shortName: string } | null, repoSyncQueues: { nodes: Array<{ id: any, status: string, doneAt?: any | null, createdAt: any, hasError?: boolean | null }> } }> } }> } | null };

export type GetSyncHistoryLogsQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
}>;


export type GetSyncHistoryLogsQuery = { repo?: { id: any, repo: string, isGithub?: boolean | null, repoSyncs: { nodes: Array<{ id: any, syncType: string, repoSyncTypeBySyncType?: { shortName: string, description?: string | null } | null, repoSyncQueues: { nodes: Array<{ id: any, status: string, createdAt: any, doneAt?: any | null, startedAt?: any | null, hasError?: boolean | null, repoSyncLogs: { totalCount: number, nodes: Array<{ logType: string, message: string, createdAt: any }> } }> } }> } } | null };

export type GetLogsOfSyncQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
  logId: Scalars['BigInt'];
}>;


export type GetLogsOfSyncQuery = { repo?: { id: any, repo: string, isGithub?: boolean | null, repoSyncs: { nodes: Array<{ id: any, syncType: string, repoSyncTypeBySyncType?: { shortName: string, description?: string | null } | null, repoSyncQueues: { nodes: Array<{ id: any, status: string, createdAt: any, doneAt?: any | null, startedAt?: any | null, hasError?: boolean | null, repoSyncLogs: { totalCount: number, nodes: Array<{ logType: string, message: string, createdAt: any }> } }> } }> } } | null };
