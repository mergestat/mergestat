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
  CardinalNumber: any;
  CharacterData: any;
  Cursor: any;
  Datetime: any;
  JSON: any;
  SqlIdentifier: any;
  UUID: any;
  YesOrNo: any;
};

/** All input for the `addRepoImport` mutation. */
export type AddRepoImportInput = {
  baseUrl?: InputMaybe<Scalars['String']>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  defaultContainerImageIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  importType?: InputMaybe<Scalars['String']>;
  importTypeName?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `addRepoImport` mutation. */
export type AddRepoImportPayload = {
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `addSyncVariable` mutation. */
export type AddSyncVariableInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  secret?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** The output of our `addSyncVariable` mutation. */
export type AddSyncVariablePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `SyncVariable`. */
  repo?: Maybe<Repo>;
  syncVariable?: Maybe<SyncVariable>;
  /** An edge for our `SyncVariable`. May be used by Relay 1. */
  syncVariableEdge?: Maybe<SyncVariablesEdge>;
};


/** The output of our `addSyncVariable` mutation. */
export type AddSyncVariablePayloadSyncVariableEdgeArgs = {
  orderBy?: InputMaybe<Array<SyncVariablesOrderBy>>;
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

/** All input for the `cancellingJob` mutation. */
export type CancellingJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `cancellingJob` mutation. */
export type CancellingJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jobStates?: Maybe<JobStates>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** A filter to be used against CardinalNumber fields. All fields are combined with a logical ‘and.’ */
export type CardinalNumberFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['CardinalNumber']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['CardinalNumber']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['CardinalNumber']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['CardinalNumber']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['CardinalNumber']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['CardinalNumber']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['CardinalNumber']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['CardinalNumber']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['CardinalNumber']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['CardinalNumber']>>;
};

/** A filter to be used against CharacterData fields. All fields are combined with a logical ‘and.’ */
export type CharacterDataFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['CharacterData']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['CharacterData']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['CharacterData']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['CharacterData']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['CharacterData']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['CharacterData']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['CharacterData']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['CharacterData']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['CharacterData']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['CharacterData']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['CharacterData']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['CharacterData']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['CharacterData']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['CharacterData']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['CharacterData']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['CharacterData']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['CharacterData']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['CharacterData']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['CharacterData']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['CharacterData']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['CharacterData']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['CharacterData']>;
};

/** All input for the `checkJobStatus` mutation. */
export type CheckJobStatusInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['UUID']>;
  state?: InputMaybe<JobStates>;
};

/** The output of our `checkJobStatus` mutation. */
export type CheckJobStatusPayload = {
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type ContainerImage = Node & {
  /** Reads a single `ContainerImageType` that is related to this `ContainerImage`. */
  containerImageTypeByType?: Maybe<ContainerImageType>;
  /** Reads and enables pagination through a set of `ContainerSync`. */
  containerSyncsByImageId: ContainerSyncsConnection;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  parameters: Scalars['JSON'];
  queue: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
  version: Scalars['String'];
};


export type ContainerImageContainerSyncsByImageIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncCondition>;
  filter?: InputMaybe<ContainerSyncFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncsOrderBy>>;
};

/**
 * A condition to be used against `ContainerImage` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ContainerImageCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `parameters` field. */
  parameters?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `queue` field. */
  queue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `ContainerImage` object types. All fields are combined with a logical ‘and.’ */
export type ContainerImageFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ContainerImageFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ContainerImageFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ContainerImageFilter>>;
  /** Filter by the object’s `parameters` field. */
  parameters?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `queue` field. */
  queue?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `ContainerImage` */
export type ContainerImageInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
  parameters?: InputMaybe<Scalars['JSON']>;
  queue?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `ContainerImage`. Fields that are set will be updated. */
export type ContainerImagePatch = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Scalars['JSON']>;
  queue?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ContainerImageType = Node & {
  /** Reads and enables pagination through a set of `ContainerImage`. */
  containerImagesByType: ContainerImagesConnection;
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type ContainerImageTypeContainerImagesByTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerImageCondition>;
  filter?: InputMaybe<ContainerImageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerImagesOrderBy>>;
};

/**
 * A condition to be used against `ContainerImageType` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ContainerImageTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `displayName` field. */
  displayName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `ContainerImageType` object types. All fields are combined with a logical ‘and.’ */
export type ContainerImageTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ContainerImageTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `displayName` field. */
  displayName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ContainerImageTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ContainerImageTypeFilter>>;
};

/** An input for mutations affecting `ContainerImageType` */
export type ContainerImageTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName: Scalars['String'];
  name: Scalars['String'];
};

/** Represents an update to a `ContainerImageType`. Fields that are set will be updated. */
export type ContainerImageTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `ContainerImageType` values. */
export type ContainerImageTypesConnection = {
  /** A list of edges which contains the `ContainerImageType` and cursor to aid in pagination. */
  edges: Array<ContainerImageTypesEdge>;
  /** A list of `ContainerImageType` objects. */
  nodes: Array<ContainerImageType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ContainerImageType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ContainerImageType` edge in the connection. */
export type ContainerImageTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ContainerImageType` at the end of the edge. */
  node: ContainerImageType;
};

/** Methods to use when ordering `ContainerImageType`. */
export enum ContainerImageTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DisplayNameAsc = 'DISPLAY_NAME_ASC',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `ContainerImage` values. */
export type ContainerImagesConnection = {
  /** A list of edges which contains the `ContainerImage` and cursor to aid in pagination. */
  edges: Array<ContainerImagesEdge>;
  /** A list of `ContainerImage` objects. */
  nodes: Array<ContainerImage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ContainerImage` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ContainerImage` edge in the connection. */
export type ContainerImagesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ContainerImage` at the end of the edge. */
  node: ContainerImage;
};

/** Methods to use when ordering `ContainerImage`. */
export enum ContainerImagesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  ParametersAsc = 'PARAMETERS_ASC',
  ParametersDesc = 'PARAMETERS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  QueueAsc = 'QUEUE_ASC',
  QueueDesc = 'QUEUE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

export type ContainerSync = Node & {
  /** Reads and enables pagination through a set of `ContainerSyncExecution`. */
  containerSyncExecutionsBySyncId: ContainerSyncExecutionsConnection;
  /** Reads a single `ContainerSyncSchedule` that is related to this `ContainerSync`. */
  containerSyncScheduleBySyncId?: Maybe<ContainerSyncSchedule>;
  id: Scalars['UUID'];
  /** Reads a single `ContainerImage` that is related to this `ContainerSync`. */
  image?: Maybe<ContainerImage>;
  imageId: Scalars['UUID'];
  latestSyncRuns?: Maybe<Scalars['JSON']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  parameters: Scalars['JSON'];
  /** Reads a single `Repo` that is related to this `ContainerSync`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
};


export type ContainerSyncContainerSyncExecutionsBySyncIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncExecutionCondition>;
  filter?: InputMaybe<ContainerSyncExecutionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncExecutionsOrderBy>>;
};

/**
 * A condition to be used against `ContainerSync` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ContainerSyncCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `imageId` field. */
  imageId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `parameters` field. */
  parameters?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

export type ContainerSyncExecution = {
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Job` that is related to this `ContainerSyncExecution`. */
  job?: Maybe<Job>;
  jobId: Scalars['UUID'];
  /** Reads a single `ContainerSync` that is related to this `ContainerSyncExecution`. */
  sync?: Maybe<ContainerSync>;
  syncId: Scalars['UUID'];
};

/**
 * A condition to be used against `ContainerSyncExecution` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type ContainerSyncExecutionCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `jobId` field. */
  jobId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `syncId` field. */
  syncId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `ContainerSyncExecution` object types. All fields are combined with a logical ‘and.’ */
export type ContainerSyncExecutionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ContainerSyncExecutionFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `jobId` field. */
  jobId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ContainerSyncExecutionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ContainerSyncExecutionFilter>>;
  /** Filter by the object’s `syncId` field. */
  syncId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `ContainerSyncExecution` */
export type ContainerSyncExecutionInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  jobId: Scalars['UUID'];
  syncId: Scalars['UUID'];
};

/** A connection to a list of `ContainerSyncExecution` values. */
export type ContainerSyncExecutionsConnection = {
  /** A list of edges which contains the `ContainerSyncExecution` and cursor to aid in pagination. */
  edges: Array<ContainerSyncExecutionsEdge>;
  /** A list of `ContainerSyncExecution` objects. */
  nodes: Array<ContainerSyncExecution>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ContainerSyncExecution` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ContainerSyncExecution` edge in the connection. */
export type ContainerSyncExecutionsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ContainerSyncExecution` at the end of the edge. */
  node: ContainerSyncExecution;
};

/** Methods to use when ordering `ContainerSyncExecution`. */
export enum ContainerSyncExecutionsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  JobIdAsc = 'JOB_ID_ASC',
  JobIdDesc = 'JOB_ID_DESC',
  Natural = 'NATURAL',
  SyncIdAsc = 'SYNC_ID_ASC',
  SyncIdDesc = 'SYNC_ID_DESC'
}

/** A filter to be used against `ContainerSync` object types. All fields are combined with a logical ‘and.’ */
export type ContainerSyncFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ContainerSyncFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `imageId` field. */
  imageId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `latestSyncRuns` field. */
  latestSyncRuns?: InputMaybe<JsonFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ContainerSyncFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ContainerSyncFilter>>;
  /** Filter by the object’s `parameters` field. */
  parameters?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `ContainerSync` */
export type ContainerSyncInput = {
  id?: InputMaybe<Scalars['UUID']>;
  imageId: Scalars['UUID'];
  parameters?: InputMaybe<Scalars['JSON']>;
  repoId: Scalars['UUID'];
};

/** Represents an update to a `ContainerSync`. Fields that are set will be updated. */
export type ContainerSyncPatch = {
  id?: InputMaybe<Scalars['UUID']>;
  imageId?: InputMaybe<Scalars['UUID']>;
  parameters?: InputMaybe<Scalars['JSON']>;
  repoId?: InputMaybe<Scalars['UUID']>;
};

export type ContainerSyncSchedule = Node & {
  createdAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `ContainerSync` that is related to this `ContainerSyncSchedule`. */
  sync?: Maybe<ContainerSync>;
  syncId: Scalars['UUID'];
};

/**
 * A condition to be used against `ContainerSyncSchedule` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type ContainerSyncScheduleCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `syncId` field. */
  syncId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `ContainerSyncSchedule` object types. All fields are combined with a logical ‘and.’ */
export type ContainerSyncScheduleFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ContainerSyncScheduleFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ContainerSyncScheduleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ContainerSyncScheduleFilter>>;
  /** Filter by the object’s `syncId` field. */
  syncId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `ContainerSyncSchedule` */
export type ContainerSyncScheduleInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  syncId: Scalars['UUID'];
};

/** Represents an update to a `ContainerSyncSchedule`. Fields that are set will be updated. */
export type ContainerSyncSchedulePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  syncId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `ContainerSyncSchedule` values. */
export type ContainerSyncSchedulesConnection = {
  /** A list of edges which contains the `ContainerSyncSchedule` and cursor to aid in pagination. */
  edges: Array<ContainerSyncSchedulesEdge>;
  /** A list of `ContainerSyncSchedule` objects. */
  nodes: Array<ContainerSyncSchedule>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ContainerSyncSchedule` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ContainerSyncSchedule` edge in the connection. */
export type ContainerSyncSchedulesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ContainerSyncSchedule` at the end of the edge. */
  node: ContainerSyncSchedule;
};

/** Methods to use when ordering `ContainerSyncSchedule`. */
export enum ContainerSyncSchedulesOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SyncIdAsc = 'SYNC_ID_ASC',
  SyncIdDesc = 'SYNC_ID_DESC'
}

/** A connection to a list of `ContainerSync` values. */
export type ContainerSyncsConnection = {
  /** A list of edges which contains the `ContainerSync` and cursor to aid in pagination. */
  edges: Array<ContainerSyncsEdge>;
  /** A list of `ContainerSync` objects. */
  nodes: Array<ContainerSync>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ContainerSync` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `ContainerSync` edge in the connection. */
export type ContainerSyncsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `ContainerSync` at the end of the edge. */
  node: ContainerSync;
};

/** Methods to use when ordering `ContainerSync`. */
export enum ContainerSyncsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImageIdAsc = 'IMAGE_ID_ASC',
  ImageIdDesc = 'IMAGE_ID_DESC',
  Natural = 'NATURAL',
  ParametersAsc = 'PARAMETERS_ASC',
  ParametersDesc = 'PARAMETERS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC'
}

/** All input for the create `ContainerImage` mutation. */
export type CreateContainerImageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `ContainerImage` to be created by this mutation. */
  containerImage: ContainerImageInput;
};

/** The output of our create `ContainerImage` mutation. */
export type CreateContainerImagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerImage` that was created by this mutation. */
  containerImage?: Maybe<ContainerImage>;
  /** An edge for our `ContainerImage`. May be used by Relay 1. */
  containerImageEdge?: Maybe<ContainerImagesEdge>;
  /** Reads a single `ContainerImageType` that is related to this `ContainerImage`. */
  containerImageTypeByType?: Maybe<ContainerImageType>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `ContainerImage` mutation. */
export type CreateContainerImagePayloadContainerImageEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerImagesOrderBy>>;
};

/** All input for the create `ContainerImageType` mutation. */
export type CreateContainerImageTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `ContainerImageType` to be created by this mutation. */
  containerImageType: ContainerImageTypeInput;
};

/** The output of our create `ContainerImageType` mutation. */
export type CreateContainerImageTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerImageType` that was created by this mutation. */
  containerImageType?: Maybe<ContainerImageType>;
  /** An edge for our `ContainerImageType`. May be used by Relay 1. */
  containerImageTypeEdge?: Maybe<ContainerImageTypesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `ContainerImageType` mutation. */
export type CreateContainerImageTypePayloadContainerImageTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerImageTypesOrderBy>>;
};

/** All input for the create `ContainerSyncExecution` mutation. */
export type CreateContainerSyncExecutionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `ContainerSyncExecution` to be created by this mutation. */
  containerSyncExecution: ContainerSyncExecutionInput;
};

/** The output of our create `ContainerSyncExecution` mutation. */
export type CreateContainerSyncExecutionPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerSyncExecution` that was created by this mutation. */
  containerSyncExecution?: Maybe<ContainerSyncExecution>;
  /** An edge for our `ContainerSyncExecution`. May be used by Relay 1. */
  containerSyncExecutionEdge?: Maybe<ContainerSyncExecutionsEdge>;
  /** Reads a single `Job` that is related to this `ContainerSyncExecution`. */
  job?: Maybe<Job>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ContainerSync` that is related to this `ContainerSyncExecution`. */
  sync?: Maybe<ContainerSync>;
};


/** The output of our create `ContainerSyncExecution` mutation. */
export type CreateContainerSyncExecutionPayloadContainerSyncExecutionEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerSyncExecutionsOrderBy>>;
};

/** All input for the create `ContainerSync` mutation. */
export type CreateContainerSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `ContainerSync` to be created by this mutation. */
  containerSync: ContainerSyncInput;
};

/** The output of our create `ContainerSync` mutation. */
export type CreateContainerSyncPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerSync` that was created by this mutation. */
  containerSync?: Maybe<ContainerSync>;
  /** An edge for our `ContainerSync`. May be used by Relay 1. */
  containerSyncEdge?: Maybe<ContainerSyncsEdge>;
  /** Reads a single `ContainerImage` that is related to this `ContainerSync`. */
  image?: Maybe<ContainerImage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `ContainerSync`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `ContainerSync` mutation. */
export type CreateContainerSyncPayloadContainerSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerSyncsOrderBy>>;
};

/** All input for the create `ContainerSyncSchedule` mutation. */
export type CreateContainerSyncScheduleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `ContainerSyncSchedule` to be created by this mutation. */
  containerSyncSchedule: ContainerSyncScheduleInput;
};

/** The output of our create `ContainerSyncSchedule` mutation. */
export type CreateContainerSyncSchedulePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerSyncSchedule` that was created by this mutation. */
  containerSyncSchedule?: Maybe<ContainerSyncSchedule>;
  /** An edge for our `ContainerSyncSchedule`. May be used by Relay 1. */
  containerSyncScheduleEdge?: Maybe<ContainerSyncSchedulesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ContainerSync` that is related to this `ContainerSyncSchedule`. */
  sync?: Maybe<ContainerSync>;
};


/** The output of our create `ContainerSyncSchedule` mutation. */
export type CreateContainerSyncSchedulePayloadContainerSyncScheduleEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerSyncSchedulesOrderBy>>;
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

/** All input for the create `Job` mutation. */
export type CreateJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Job` to be created by this mutation. */
  job: JobInput;
};

/** All input for the create `JobLog` mutation. */
export type CreateJobLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `JobLog` to be created by this mutation. */
  jobLog: JobLogInput;
};

/** The output of our create `JobLog` mutation. */
export type CreateJobLogPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Job` that is related to this `JobLog`. */
  jobByJob?: Maybe<Job>;
  /** The `JobLog` that was created by this mutation. */
  jobLog?: Maybe<JobLog>;
  /** An edge for our `JobLog`. May be used by Relay 1. */
  jobLogEdge?: Maybe<JobLogsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `JobLog` mutation. */
export type CreateJobLogPayloadJobLogEdgeArgs = {
  orderBy?: InputMaybe<Array<JobLogsOrderBy>>;
};

/** The output of our create `Job` mutation. */
export type CreateJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Job` that was created by this mutation. */
  job?: Maybe<Job>;
  /** An edge for our `Job`. May be used by Relay 1. */
  jobEdge?: Maybe<JobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Queue` that is related to this `Job`. */
  queueByQueue?: Maybe<Queue>;
};


/** The output of our create `Job` mutation. */
export type CreateJobPayloadJobEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** All input for the create `LabelAssociation` mutation. */
export type CreateLabelAssociationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `LabelAssociation` to be created by this mutation. */
  labelAssociation: LabelAssociationInput;
};

/** The output of our create `LabelAssociation` mutation. */
export type CreateLabelAssociationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LabelAssociation` that was created by this mutation. */
  labelAssociation?: Maybe<LabelAssociation>;
  /** An edge for our `LabelAssociation`. May be used by Relay 1. */
  labelAssociationEdge?: Maybe<LabelAssociationsEdge>;
  /** Reads a single `Label` that is related to this `LabelAssociation`. */
  labelByLabel?: Maybe<Label>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RepoSyncType` that is related to this `LabelAssociation`. */
  repoSyncTypeByRepoSyncType?: Maybe<RepoSyncType>;
};


/** The output of our create `LabelAssociation` mutation. */
export type CreateLabelAssociationPayloadLabelAssociationEdgeArgs = {
  orderBy?: InputMaybe<Array<LabelAssociationsOrderBy>>;
};

/** All input for the create `Label` mutation. */
export type CreateLabelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Label` to be created by this mutation. */
  label: LabelInput;
};

/** The output of our create `Label` mutation. */
export type CreateLabelPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Label` that was created by this mutation. */
  label?: Maybe<Label>;
  /** An edge for our `Label`. May be used by Relay 1. */
  labelEdge?: Maybe<LabelsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Label` mutation. */
export type CreateLabelPayloadLabelEdgeArgs = {
  orderBy?: InputMaybe<Array<LabelsOrderBy>>;
};

/** All input for the create `_MergestatExploreFileMetadatum` mutation. */
export type CreateMergestatExploreFileMetadatumInput = {
  /** The `_MergestatExploreFileMetadatum` to be created by this mutation. */
  _mergestatExploreFileMetadatum: _MergestatExploreFileMetadatumInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `_MergestatExploreFileMetadatum` mutation. */
export type CreateMergestatExploreFileMetadatumPayload = {
  /** The `_MergestatExploreFileMetadatum` that was created by this mutation. */
  _mergestatExploreFileMetadatum?: Maybe<_MergestatExploreFileMetadatum>;
  /** An edge for our `_MergestatExploreFileMetadatum`. May be used by Relay 1. */
  _mergestatExploreFileMetadatumEdge?: Maybe<_MergestatExploreFileMetadataEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `_MergestatExploreFileMetadatum`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `_MergestatExploreFileMetadatum` mutation. */
export type CreateMergestatExploreFileMetadatumPayload_MergestatExploreFileMetadatumEdgeArgs = {
  orderBy?: InputMaybe<Array<_MergestatExploreFileMetadataOrderBy>>;
};

/** All input for the create `_MergestatExploreRepoMetadatum` mutation. */
export type CreateMergestatExploreRepoMetadatumInput = {
  /** The `_MergestatExploreRepoMetadatum` to be created by this mutation. */
  _mergestatExploreRepoMetadatum: _MergestatExploreRepoMetadatumInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `_MergestatExploreRepoMetadatum` mutation. */
export type CreateMergestatExploreRepoMetadatumPayload = {
  /** The `_MergestatExploreRepoMetadatum` that was created by this mutation. */
  _mergestatExploreRepoMetadatum?: Maybe<_MergestatExploreRepoMetadatum>;
  /** An edge for our `_MergestatExploreRepoMetadatum`. May be used by Relay 1. */
  _mergestatExploreRepoMetadatumEdge?: Maybe<_MergestatExploreRepoMetadataEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `_MergestatExploreRepoMetadatum`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `_MergestatExploreRepoMetadatum` mutation. */
export type CreateMergestatExploreRepoMetadatumPayload_MergestatExploreRepoMetadatumEdgeArgs = {
  orderBy?: InputMaybe<Array<_MergestatExploreRepoMetadataOrderBy>>;
};

/** All input for the create `Provider` mutation. */
export type CreateProviderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Provider` to be created by this mutation. */
  provider: ProviderInput;
};

/** The output of our create `Provider` mutation. */
export type CreateProviderPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Provider` that was created by this mutation. */
  provider?: Maybe<Provider>;
  /** An edge for our `Provider`. May be used by Relay 1. */
  providerEdge?: Maybe<ProvidersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vendor` that is related to this `Provider`. */
  vendorByVendor?: Maybe<Vendor>;
};


/** The output of our create `Provider` mutation. */
export type CreateProviderPayloadProviderEdgeArgs = {
  orderBy?: InputMaybe<Array<ProvidersOrderBy>>;
};

/** All input for the create `QueryHistory` mutation. */
export type CreateQueryHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `QueryHistory` to be created by this mutation. */
  queryHistory: QueryHistoryInput;
};

/** The output of our create `QueryHistory` mutation. */
export type CreateQueryHistoryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `QueryHistory` that was created by this mutation. */
  queryHistory?: Maybe<QueryHistory>;
  /** An edge for our `QueryHistory`. May be used by Relay 1. */
  queryHistoryEdge?: Maybe<QueryHistoriesEdge>;
};


/** The output of our create `QueryHistory` mutation. */
export type CreateQueryHistoryPayloadQueryHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<QueryHistoriesOrderBy>>;
};

/** All input for the create `Queue` mutation. */
export type CreateQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Queue` to be created by this mutation. */
  queue: QueueInput;
};

/** The output of our create `Queue` mutation. */
export type CreateQueuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Queue` that was created by this mutation. */
  queue?: Maybe<Queue>;
  /** An edge for our `Queue`. May be used by Relay 1. */
  queueEdge?: Maybe<QueuesEdge>;
};


/** The output of our create `Queue` mutation. */
export type CreateQueuePayloadQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<QueuesOrderBy>>;
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
  /** Reads a single `Provider` that is related to this `RepoImport`. */
  providerByProvider?: Maybe<Provider>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImport` that was created by this mutation. */
  repoImport?: Maybe<RepoImport>;
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>;
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
  /** Reads a single `Provider` that is related to this `Repo`. */
  providerByProvider?: Maybe<Provider>;
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
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSync`. */
  lastCompletedRepoSyncQueue?: Maybe<RepoSyncQueue>;
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
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncQueue`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
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

/** All input for the create `RepoSyncTypeGroup` mutation. */
export type CreateRepoSyncTypeGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `RepoSyncTypeGroup` to be created by this mutation. */
  repoSyncTypeGroup: RepoSyncTypeGroupInput;
};

/** The output of our create `RepoSyncTypeGroup` mutation. */
export type CreateRepoSyncTypeGroupPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncTypeGroup` that was created by this mutation. */
  repoSyncTypeGroup?: Maybe<RepoSyncTypeGroup>;
  /** An edge for our `RepoSyncTypeGroup`. May be used by Relay 1. */
  repoSyncTypeGroupEdge?: Maybe<RepoSyncTypeGroupsEdge>;
};


/** The output of our create `RepoSyncTypeGroup` mutation. */
export type CreateRepoSyncTypeGroupPayloadRepoSyncTypeGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypeGroupsOrderBy>>;
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
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncType`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
};


/** The output of our create `RepoSyncType` mutation. */
export type CreateRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};

/** All input for the create `SavedExplore` mutation. */
export type CreateSavedExploreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SavedExplore` to be created by this mutation. */
  savedExplore: SavedExploreInput;
};

/** The output of our create `SavedExplore` mutation. */
export type CreateSavedExplorePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SavedExplore` that was created by this mutation. */
  savedExplore?: Maybe<SavedExplore>;
  /** An edge for our `SavedExplore`. May be used by Relay 1. */
  savedExploreEdge?: Maybe<SavedExploresEdge>;
};


/** The output of our create `SavedExplore` mutation. */
export type CreateSavedExplorePayloadSavedExploreEdgeArgs = {
  orderBy?: InputMaybe<Array<SavedExploresOrderBy>>;
};

/** All input for the create `SavedQuery` mutation. */
export type CreateSavedQueryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SavedQuery` to be created by this mutation. */
  savedQuery: SavedQueryInput;
};

/** The output of our create `SavedQuery` mutation. */
export type CreateSavedQueryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SavedQuery` that was created by this mutation. */
  savedQuery?: Maybe<SavedQuery>;
  /** An edge for our `SavedQuery`. May be used by Relay 1. */
  savedQueryEdge?: Maybe<SavedQueriesEdge>;
};


/** The output of our create `SavedQuery` mutation. */
export type CreateSavedQueryPayloadSavedQueryEdgeArgs = {
  orderBy?: InputMaybe<Array<SavedQueriesOrderBy>>;
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
  /** Reads a single `Provider` that is related to this `ServiceAuthCredential`. */
  providerByProvider?: Maybe<Provider>;
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

/** All input for the create `SqlqMigration` mutation. */
export type CreateSqlqMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SqlqMigration` to be created by this mutation. */
  sqlqMigration: SqlqMigrationInput;
};

/** The output of our create `SqlqMigration` mutation. */
export type CreateSqlqMigrationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SqlqMigration` that was created by this mutation. */
  sqlqMigration?: Maybe<SqlqMigration>;
  /** An edge for our `SqlqMigration`. May be used by Relay 1. */
  sqlqMigrationEdge?: Maybe<SqlqMigrationsEdge>;
};


/** The output of our create `SqlqMigration` mutation. */
export type CreateSqlqMigrationPayloadSqlqMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SqlqMigrationsOrderBy>>;
};

/** All input for the create `SyncVariable` mutation. */
export type CreateSyncVariableInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SyncVariable` to be created by this mutation. */
  syncVariable: SyncVariableInput;
};

/** The output of our create `SyncVariable` mutation. */
export type CreateSyncVariablePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `SyncVariable`. */
  repo?: Maybe<Repo>;
  /** The `SyncVariable` that was created by this mutation. */
  syncVariable?: Maybe<SyncVariable>;
  /** An edge for our `SyncVariable`. May be used by Relay 1. */
  syncVariableEdge?: Maybe<SyncVariablesEdge>;
};


/** The output of our create `SyncVariable` mutation. */
export type CreateSyncVariablePayloadSyncVariableEdgeArgs = {
  orderBy?: InputMaybe<Array<SyncVariablesOrderBy>>;
};

/** All input for the create `Vendor` mutation. */
export type CreateVendorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Vendor` to be created by this mutation. */
  vendor: VendorInput;
};

/** The output of our create `Vendor` mutation. */
export type CreateVendorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Vendor` that was created by this mutation. */
  vendor?: Maybe<Vendor>;
  /** An edge for our `Vendor`. May be used by Relay 1. */
  vendorEdge?: Maybe<VendorsEdge>;
  /** Reads a single `VendorType` that is related to this `Vendor`. */
  vendorTypeByType?: Maybe<VendorType>;
};


/** The output of our create `Vendor` mutation. */
export type CreateVendorPayloadVendorEdgeArgs = {
  orderBy?: InputMaybe<Array<VendorsOrderBy>>;
};

/** All input for the create `VendorType` mutation. */
export type CreateVendorTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `VendorType` to be created by this mutation. */
  vendorType: VendorTypeInput;
};

/** The output of our create `VendorType` mutation. */
export type CreateVendorTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `VendorType` that was created by this mutation. */
  vendorType?: Maybe<VendorType>;
  /** An edge for our `VendorType`. May be used by Relay 1. */
  vendorTypeEdge?: Maybe<VendorTypesEdge>;
};


/** The output of our create `VendorType` mutation. */
export type CreateVendorTypePayloadVendorTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<VendorTypesOrderBy>>;
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

/** All input for the `deleteContainerImageByName` mutation. */
export type DeleteContainerImageByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteContainerImageByNodeId` mutation. */
export type DeleteContainerImageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerImage` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteContainerImageByUrl` mutation. */
export type DeleteContainerImageByUrlInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

/** All input for the `deleteContainerImage` mutation. */
export type DeleteContainerImageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `ContainerImage` mutation. */
export type DeleteContainerImagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerImage` that was deleted by this mutation. */
  containerImage?: Maybe<ContainerImage>;
  /** An edge for our `ContainerImage`. May be used by Relay 1. */
  containerImageEdge?: Maybe<ContainerImagesEdge>;
  /** Reads a single `ContainerImageType` that is related to this `ContainerImage`. */
  containerImageTypeByType?: Maybe<ContainerImageType>;
  deletedContainerImageNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `ContainerImage` mutation. */
export type DeleteContainerImagePayloadContainerImageEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerImagesOrderBy>>;
};

/** All input for the `deleteContainerImageTypeByNodeId` mutation. */
export type DeleteContainerImageTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerImageType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteContainerImageType` mutation. */
export type DeleteContainerImageTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** The output of our delete `ContainerImageType` mutation. */
export type DeleteContainerImageTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerImageType` that was deleted by this mutation. */
  containerImageType?: Maybe<ContainerImageType>;
  /** An edge for our `ContainerImageType`. May be used by Relay 1. */
  containerImageTypeEdge?: Maybe<ContainerImageTypesEdge>;
  deletedContainerImageTypeNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `ContainerImageType` mutation. */
export type DeleteContainerImageTypePayloadContainerImageTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerImageTypesOrderBy>>;
};

/** All input for the `deleteContainerSyncByNodeId` mutation. */
export type DeleteContainerSyncByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerSync` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteContainerSyncByRepoIdAndImageId` mutation. */
export type DeleteContainerSyncByRepoIdAndImageIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  imageId: Scalars['UUID'];
  repoId: Scalars['UUID'];
};

/** All input for the `deleteContainerSync` mutation. */
export type DeleteContainerSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `ContainerSync` mutation. */
export type DeleteContainerSyncPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerSync` that was deleted by this mutation. */
  containerSync?: Maybe<ContainerSync>;
  /** An edge for our `ContainerSync`. May be used by Relay 1. */
  containerSyncEdge?: Maybe<ContainerSyncsEdge>;
  deletedContainerSyncNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `ContainerImage` that is related to this `ContainerSync`. */
  image?: Maybe<ContainerImage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `ContainerSync`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `ContainerSync` mutation. */
export type DeleteContainerSyncPayloadContainerSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerSyncsOrderBy>>;
};

/** All input for the `deleteContainerSyncScheduleByNodeId` mutation. */
export type DeleteContainerSyncScheduleByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerSyncSchedule` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteContainerSyncScheduleBySyncId` mutation. */
export type DeleteContainerSyncScheduleBySyncIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  syncId: Scalars['UUID'];
};

/** All input for the `deleteContainerSyncSchedule` mutation. */
export type DeleteContainerSyncScheduleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `ContainerSyncSchedule` mutation. */
export type DeleteContainerSyncSchedulePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerSyncSchedule` that was deleted by this mutation. */
  containerSyncSchedule?: Maybe<ContainerSyncSchedule>;
  /** An edge for our `ContainerSyncSchedule`. May be used by Relay 1. */
  containerSyncScheduleEdge?: Maybe<ContainerSyncSchedulesEdge>;
  deletedContainerSyncScheduleNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ContainerSync` that is related to this `ContainerSyncSchedule`. */
  sync?: Maybe<ContainerSync>;
};


/** The output of our delete `ContainerSyncSchedule` mutation. */
export type DeleteContainerSyncSchedulePayloadContainerSyncScheduleEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerSyncSchedulesOrderBy>>;
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
  /** hash of the commit */
  hash: Scalars['String'];
  /** foreign key for public.repos.id */
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
  /** hash of the commit */
  commitHash: Scalars['String'];
  /** path of the file the modification was made in */
  filePath: Scalars['String'];
  /** new file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  newFileMode: Scalars['String'];
  /** foreign key for public.repos.id */
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
  /** path of the file */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
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

/** All input for the `deleteJobByNodeId` mutation. */
export type DeleteJobByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Job` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteJob` mutation. */
export type DeleteJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteJobLogByNodeId` mutation. */
export type DeleteJobLogByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `JobLog` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteJobLog` mutation. */
export type DeleteJobLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `JobLog` mutation. */
export type DeleteJobLogPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedJobLogNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Job` that is related to this `JobLog`. */
  jobByJob?: Maybe<Job>;
  /** The `JobLog` that was deleted by this mutation. */
  jobLog?: Maybe<JobLog>;
  /** An edge for our `JobLog`. May be used by Relay 1. */
  jobLogEdge?: Maybe<JobLogsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `JobLog` mutation. */
export type DeleteJobLogPayloadJobLogEdgeArgs = {
  orderBy?: InputMaybe<Array<JobLogsOrderBy>>;
};

/** The output of our delete `Job` mutation. */
export type DeleteJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedJobNodeId?: Maybe<Scalars['ID']>;
  /** The `Job` that was deleted by this mutation. */
  job?: Maybe<Job>;
  /** An edge for our `Job`. May be used by Relay 1. */
  jobEdge?: Maybe<JobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Queue` that is related to this `Job`. */
  queueByQueue?: Maybe<Queue>;
};


/** The output of our delete `Job` mutation. */
export type DeleteJobPayloadJobEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** All input for the `deleteLabelAssociationByLabelAndRepoSyncType` mutation. */
export type DeleteLabelAssociationByLabelAndRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  repoSyncType: Scalars['String'];
};

/** The output of our delete `LabelAssociation` mutation. */
export type DeleteLabelAssociationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncTypeLabelAssociationNodeId?: Maybe<Scalars['ID']>;
  /** The `LabelAssociation` that was deleted by this mutation. */
  labelAssociation?: Maybe<LabelAssociation>;
  /** An edge for our `LabelAssociation`. May be used by Relay 1. */
  labelAssociationEdge?: Maybe<LabelAssociationsEdge>;
  /** Reads a single `Label` that is related to this `LabelAssociation`. */
  labelByLabel?: Maybe<Label>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RepoSyncType` that is related to this `LabelAssociation`. */
  repoSyncTypeByRepoSyncType?: Maybe<RepoSyncType>;
};


/** The output of our delete `LabelAssociation` mutation. */
export type DeleteLabelAssociationPayloadLabelAssociationEdgeArgs = {
  orderBy?: InputMaybe<Array<LabelAssociationsOrderBy>>;
};

/** All input for the `deleteLabelByNodeId` mutation. */
export type DeleteLabelByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Label` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteLabel` mutation. */
export type DeleteLabelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

/** The output of our delete `Label` mutation. */
export type DeleteLabelPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncTypeLabelNodeId?: Maybe<Scalars['ID']>;
  /** The `Label` that was deleted by this mutation. */
  label?: Maybe<Label>;
  /** An edge for our `Label`. May be used by Relay 1. */
  labelEdge?: Maybe<LabelsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Label` mutation. */
export type DeleteLabelPayloadLabelEdgeArgs = {
  orderBy?: InputMaybe<Array<LabelsOrderBy>>;
};

/** All input for the `deleteMergestatExploreFileMetadatumByNodeId` mutation. */
export type DeleteMergestatExploreFileMetadatumByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `_MergestatExploreFileMetadatum` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMergestatExploreFileMetadatum` mutation. */
export type DeleteMergestatExploreFileMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** path to the file */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `_MergestatExploreFileMetadatum` mutation. */
export type DeleteMergestatExploreFileMetadatumPayload = {
  /** The `_MergestatExploreFileMetadatum` that was deleted by this mutation. */
  _mergestatExploreFileMetadatum?: Maybe<_MergestatExploreFileMetadatum>;
  /** An edge for our `_MergestatExploreFileMetadatum`. May be used by Relay 1. */
  _mergestatExploreFileMetadatumEdge?: Maybe<_MergestatExploreFileMetadataEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMergestatExploreFileMetadatumNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `_MergestatExploreFileMetadatum`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `_MergestatExploreFileMetadatum` mutation. */
export type DeleteMergestatExploreFileMetadatumPayload_MergestatExploreFileMetadatumEdgeArgs = {
  orderBy?: InputMaybe<Array<_MergestatExploreFileMetadataOrderBy>>;
};

/** All input for the `deleteMergestatExploreRepoMetadatumByNodeId` mutation. */
export type DeleteMergestatExploreRepoMetadatumByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `_MergestatExploreRepoMetadatum` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteMergestatExploreRepoMetadatum` mutation. */
export type DeleteMergestatExploreRepoMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `_MergestatExploreRepoMetadatum` mutation. */
export type DeleteMergestatExploreRepoMetadatumPayload = {
  /** The `_MergestatExploreRepoMetadatum` that was deleted by this mutation. */
  _mergestatExploreRepoMetadatum?: Maybe<_MergestatExploreRepoMetadatum>;
  /** An edge for our `_MergestatExploreRepoMetadatum`. May be used by Relay 1. */
  _mergestatExploreRepoMetadatumEdge?: Maybe<_MergestatExploreRepoMetadataEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMergestatExploreRepoMetadatumNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `_MergestatExploreRepoMetadatum`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `_MergestatExploreRepoMetadatum` mutation. */
export type DeleteMergestatExploreRepoMetadatumPayload_MergestatExploreRepoMetadatumEdgeArgs = {
  orderBy?: InputMaybe<Array<_MergestatExploreRepoMetadataOrderBy>>;
};

/** All input for the `deleteProviderByName` mutation. */
export type DeleteProviderByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteProviderByNodeId` mutation. */
export type DeleteProviderByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Provider` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteProvider` mutation. */
export type DeleteProviderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Provider` mutation. */
export type DeleteProviderPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedProviderNodeId?: Maybe<Scalars['ID']>;
  /** The `Provider` that was deleted by this mutation. */
  provider?: Maybe<Provider>;
  /** An edge for our `Provider`. May be used by Relay 1. */
  providerEdge?: Maybe<ProvidersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vendor` that is related to this `Provider`. */
  vendorByVendor?: Maybe<Vendor>;
};


/** The output of our delete `Provider` mutation. */
export type DeleteProviderPayloadProviderEdgeArgs = {
  orderBy?: InputMaybe<Array<ProvidersOrderBy>>;
};

/** All input for the `deleteQueryHistoryByNodeId` mutation. */
export type DeleteQueryHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `QueryHistory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteQueryHistory` mutation. */
export type DeleteQueryHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `QueryHistory` mutation. */
export type DeleteQueryHistoryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedQueryHistoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `QueryHistory` that was deleted by this mutation. */
  queryHistory?: Maybe<QueryHistory>;
  /** An edge for our `QueryHistory`. May be used by Relay 1. */
  queryHistoryEdge?: Maybe<QueryHistoriesEdge>;
};


/** The output of our delete `QueryHistory` mutation. */
export type DeleteQueryHistoryPayloadQueryHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<QueryHistoriesOrderBy>>;
};

/** All input for the `deleteQueueByNodeId` mutation. */
export type DeleteQueueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Queue` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteQueue` mutation. */
export type DeleteQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** The output of our delete `Queue` mutation. */
export type DeleteQueuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedQueueNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Queue` that was deleted by this mutation. */
  queue?: Maybe<Queue>;
  /** An edge for our `Queue`. May be used by Relay 1. */
  queueEdge?: Maybe<QueuesEdge>;
};


/** The output of our delete `Queue` mutation. */
export type DeleteQueuePayloadQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<QueuesOrderBy>>;
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
  /** Reads a single `Provider` that is related to this `RepoImport`. */
  providerByProvider?: Maybe<Provider>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImport` that was deleted by this mutation. */
  repoImport?: Maybe<RepoImport>;
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>;
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
  /** MergeStat identifier for the repo */
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
  /** Reads a single `Provider` that is related to this `Repo`. */
  providerByProvider?: Maybe<Provider>;
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
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSync`. */
  lastCompletedRepoSyncQueue?: Maybe<RepoSyncQueue>;
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
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncQueue`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
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

/** All input for the `deleteRepoSyncTypeGroupByNodeId` mutation. */
export type DeleteRepoSyncTypeGroupByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncTypeGroup` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteRepoSyncTypeGroup` mutation. */
export type DeleteRepoSyncTypeGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  group: Scalars['String'];
};

/** The output of our delete `RepoSyncTypeGroup` mutation. */
export type DeleteRepoSyncTypeGroupPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRepoSyncTypeGroupNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncTypeGroup` that was deleted by this mutation. */
  repoSyncTypeGroup?: Maybe<RepoSyncTypeGroup>;
  /** An edge for our `RepoSyncTypeGroup`. May be used by Relay 1. */
  repoSyncTypeGroupEdge?: Maybe<RepoSyncTypeGroupsEdge>;
};


/** The output of our delete `RepoSyncTypeGroup` mutation. */
export type DeleteRepoSyncTypeGroupPayloadRepoSyncTypeGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypeGroupsOrderBy>>;
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
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncType`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
};


/** The output of our delete `RepoSyncType` mutation. */
export type DeleteRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};

/** All input for the `deleteSavedExploreByNodeId` mutation. */
export type DeleteSavedExploreByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SavedExplore` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSavedExplore` mutation. */
export type DeleteSavedExploreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `SavedExplore` mutation. */
export type DeleteSavedExplorePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSavedExploreNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SavedExplore` that was deleted by this mutation. */
  savedExplore?: Maybe<SavedExplore>;
  /** An edge for our `SavedExplore`. May be used by Relay 1. */
  savedExploreEdge?: Maybe<SavedExploresEdge>;
};


/** The output of our delete `SavedExplore` mutation. */
export type DeleteSavedExplorePayloadSavedExploreEdgeArgs = {
  orderBy?: InputMaybe<Array<SavedExploresOrderBy>>;
};

/** All input for the `deleteSavedQueryByNodeId` mutation. */
export type DeleteSavedQueryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SavedQuery` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSavedQuery` mutation. */
export type DeleteSavedQueryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `SavedQuery` mutation. */
export type DeleteSavedQueryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSavedQueryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SavedQuery` that was deleted by this mutation. */
  savedQuery?: Maybe<SavedQuery>;
  /** An edge for our `SavedQuery`. May be used by Relay 1. */
  savedQueryEdge?: Maybe<SavedQueriesEdge>;
};


/** The output of our delete `SavedQuery` mutation. */
export type DeleteSavedQueryPayloadSavedQueryEdgeArgs = {
  orderBy?: InputMaybe<Array<SavedQueriesOrderBy>>;
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
  /** Reads a single `Provider` that is related to this `ServiceAuthCredential`. */
  providerByProvider?: Maybe<Provider>;
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

/** All input for the `deleteSqlqMigrationByName` mutation. */
export type DeleteSqlqMigrationByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteSqlqMigrationByNodeId` mutation. */
export type DeleteSqlqMigrationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SqlqMigration` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSqlqMigration` mutation. */
export type DeleteSqlqMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** The output of our delete `SqlqMigration` mutation. */
export type DeleteSqlqMigrationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSqlqMigrationNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SqlqMigration` that was deleted by this mutation. */
  sqlqMigration?: Maybe<SqlqMigration>;
  /** An edge for our `SqlqMigration`. May be used by Relay 1. */
  sqlqMigrationEdge?: Maybe<SqlqMigrationsEdge>;
};


/** The output of our delete `SqlqMigration` mutation. */
export type DeleteSqlqMigrationPayloadSqlqMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SqlqMigrationsOrderBy>>;
};

/** All input for the `deleteSyncVariableByNodeId` mutation. */
export type DeleteSyncVariableByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SyncVariable` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSyncVariable` mutation. */
export type DeleteSyncVariableInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `SyncVariable` mutation. */
export type DeleteSyncVariablePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSyncVariableNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `SyncVariable`. */
  repo?: Maybe<Repo>;
  /** The `SyncVariable` that was deleted by this mutation. */
  syncVariable?: Maybe<SyncVariable>;
  /** An edge for our `SyncVariable`. May be used by Relay 1. */
  syncVariableEdge?: Maybe<SyncVariablesEdge>;
};


/** The output of our delete `SyncVariable` mutation. */
export type DeleteSyncVariablePayloadSyncVariableEdgeArgs = {
  orderBy?: InputMaybe<Array<SyncVariablesOrderBy>>;
};

/** All input for the `deleteVendorByNodeId` mutation. */
export type DeleteVendorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vendor` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteVendor` mutation. */
export type DeleteVendorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** The output of our delete `Vendor` mutation. */
export type DeleteVendorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedVendorNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Vendor` that was deleted by this mutation. */
  vendor?: Maybe<Vendor>;
  /** An edge for our `Vendor`. May be used by Relay 1. */
  vendorEdge?: Maybe<VendorsEdge>;
  /** Reads a single `VendorType` that is related to this `Vendor`. */
  vendorTypeByType?: Maybe<VendorType>;
};


/** The output of our delete `Vendor` mutation. */
export type DeleteVendorPayloadVendorEdgeArgs = {
  orderBy?: InputMaybe<Array<VendorsOrderBy>>;
};

/** All input for the `deleteVendorTypeByNodeId` mutation. */
export type DeleteVendorTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `VendorType` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteVendorType` mutation. */
export type DeleteVendorTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** The output of our delete `VendorType` mutation. */
export type DeleteVendorTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedVendorTypeNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `VendorType` that was deleted by this mutation. */
  vendorType?: Maybe<VendorType>;
  /** An edge for our `VendorType`. May be used by Relay 1. */
  vendorTypeEdge?: Maybe<VendorTypesEdge>;
};


/** The output of our delete `VendorType` mutation. */
export type DeleteVendorTypePayloadVendorTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<VendorTypesOrderBy>>;
};

/** All input for the `dequeueJob` mutation. */
export type DequeueJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  jobtypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  queues?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The output of our `dequeueJob` mutation. */
export type DequeueJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Job>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type DisplayDatabaseConnection = {
  database?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['String']>;
};

/** All input for the `enableContainerSync` mutation. */
export type EnableContainerSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  containerImageId?: InputMaybe<Scalars['UUID']>;
  repoIdParam?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `enableContainerSync` mutation. */
export type EnableContainerSyncPayload = {
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type ExecSqlInput = {
  disableReadOnly?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
  rowLimit?: InputMaybe<Scalars['Int']>;
  trackHistory?: InputMaybe<Scalars['Boolean']>;
  variables?: InputMaybe<Array<Scalars['String']>>;
};

export type ExecSqlResult = {
  columns?: Maybe<Array<Scalars['JSON']>>;
  queryRunningTimeMs?: Maybe<Scalars['Int']>;
  rowCount?: Maybe<Scalars['Int']>;
  rows?: Maybe<Array<Scalars['JSON']>>;
};

/** All input for the `fetchServiceAuthCredential` mutation. */
export type FetchServiceAuthCredentialInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  credentialType?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['UUID']>;
  secret?: InputMaybe<Scalars['String']>;
};

/** The output of our `fetchServiceAuthCredential` mutation. */
export type FetchServiceAuthCredentialPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  results?: Maybe<Array<Maybe<FetchServiceAuthCredentialRecord>>>;
};

/** The return type of our `fetchServiceAuthCredential` mutation. */
export type FetchServiceAuthCredentialRecord = {
  createdAt?: Maybe<Scalars['Datetime']>;
  id?: Maybe<Scalars['UUID']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** All input for the `fetchSyncVariable` mutation. */
export type FetchSyncVariableInput = {
  arg0?: InputMaybe<Scalars['UUID']>;
  arg1?: InputMaybe<Scalars['String']>;
  arg2?: InputMaybe<Scalars['String']>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `fetchSyncVariable` mutation. */
export type FetchSyncVariablePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  results?: Maybe<Array<Maybe<FetchSyncVariableRecord>>>;
};

/** The return type of our `fetchSyncVariable` mutation. */
export type FetchSyncVariableRecord = {
  key?: Maybe<Scalars['String']>;
  repoId?: Maybe<Scalars['UUID']>;
  value?: Maybe<Scalars['String']>;
};

/** All input for the `getfilesolderthan` mutation. */
export type GetfilesolderthanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  filePattern?: InputMaybe<Scalars['String']>;
  olderThanDays?: InputMaybe<Scalars['Int']>;
};

/** The output of our `getfilesolderthan` mutation. */
export type GetfilesolderthanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  results?: Maybe<Array<Maybe<GetfilesolderthanRecord>>>;
};

/** The return type of our `getfilesolderthan` mutation. */
export type GetfilesolderthanRecord = {
  authorEmail?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorWhen?: Maybe<Scalars['Datetime']>;
  filePath?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  repo?: Maybe<Scalars['String']>;
};

/** git commit history of a repo */
export type GitCommit = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** email of the author of the modification */
  authorEmail?: Maybe<Scalars['String']>;
  /** name of the author of the the modification */
  authorName?: Maybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  authorWhen: Scalars['Datetime'];
  /** email of the author who committed the modification */
  committerEmail?: Maybe<Scalars['String']>;
  /** name of the author who committed the modification */
  committerName?: Maybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  committerWhen: Scalars['Datetime'];
  /** hash of the commit */
  hash: Scalars['String'];
  /** message of the commit */
  message?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** the number of parents of the commit */
  parents: Scalars['Int'];
  /** Reads a single `Repo` that is related to this `GitCommit`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author of the modification */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  authorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  authorWhen: Scalars['Datetime'];
  /** email of the author who committed the modification */
  committerEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  committerName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  committerWhen: Scalars['Datetime'];
  /** hash of the commit */
  hash: Scalars['String'];
  /** message of the commit */
  message?: InputMaybe<Scalars['String']>;
  /** the number of parents of the commit */
  parents: Scalars['Int'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitCommit`. Fields that are set will be updated. */
export type GitCommitPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author of the modification */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  authorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** email of the author who committed the modification */
  committerEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  committerName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  /** hash of the commit */
  hash?: InputMaybe<Scalars['String']>;
  /** message of the commit */
  message?: InputMaybe<Scalars['String']>;
  /** the number of parents of the commit */
  parents?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** git commit stats of a repo */
export type GitCommitStat = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** the number of additions in this path of the commit */
  additions: Scalars['Int'];
  /** hash of the commit */
  commitHash: Scalars['String'];
  /** the number of deletions in this path of the commit */
  deletions: Scalars['Int'];
  /** path of the file the modification was made in */
  filePath: Scalars['String'];
  /** new file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  newFileMode: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** old file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  oldFileMode: Scalars['String'];
  /** Reads a single `Repo` that is related to this `GitCommitStat`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of additions in this path of the commit */
  additions: Scalars['Int'];
  /** hash of the commit */
  commitHash: Scalars['String'];
  /** the number of deletions in this path of the commit */
  deletions: Scalars['Int'];
  /** path of the file the modification was made in */
  filePath: Scalars['String'];
  /** new file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  newFileMode?: InputMaybe<Scalars['String']>;
  /** old file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  oldFileMode?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitCommitStat`. Fields that are set will be updated. */
export type GitCommitStatPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of additions in this path of the commit */
  additions?: InputMaybe<Scalars['Int']>;
  /** hash of the commit */
  commitHash?: InputMaybe<Scalars['String']>;
  /** the number of deletions in this path of the commit */
  deletions?: InputMaybe<Scalars['Int']>;
  /** path of the file the modification was made in */
  filePath?: InputMaybe<Scalars['String']>;
  /** new file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  newFileMode?: InputMaybe<Scalars['String']>;
  /** old file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  oldFileMode?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
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

/** git files (content and paths) of a repo */
export type GitFile = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** contents of the file */
  contents?: Maybe<Scalars['String']>;
  /** boolean to determine if the file is an executable */
  executable: Scalars['Boolean'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** path of the file */
  path: Scalars['String'];
  /** Reads a single `Repo` that is related to this `GitFile`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** contents of the file */
  contents?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the file is an executable */
  executable: Scalars['Boolean'];
  /** path of the file */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitFile`. Fields that are set will be updated. */
export type GitFilePatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** contents of the file */
  contents?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the file is an executable */
  executable?: InputMaybe<Scalars['Boolean']>;
  /** path of the file */
  path?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
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

export type Job = Node & {
  attempt?: Maybe<Scalars['Int']>;
  completedAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `ContainerSyncExecution`. */
  containerSyncExecutions: ContainerSyncExecutionsConnection;
  createdAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `JobLog`. */
  jobLogsByJob: JobLogsConnection;
  keepaliveInterval: Scalars['BigInt'];
  lastKeepalive?: Maybe<Scalars['Datetime']>;
  lastQueuedAt: Scalars['Datetime'];
  maxRetries?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  parameters?: Maybe<Scalars['JSON']>;
  priority: Scalars['Int'];
  queue: Scalars['String'];
  /** Reads a single `Queue` that is related to this `Job`. */
  queueByQueue?: Maybe<Queue>;
  result?: Maybe<Scalars['JSON']>;
  retentionTtl: Scalars['BigInt'];
  runAfter?: Maybe<Scalars['BigInt']>;
  startedAt?: Maybe<Scalars['Datetime']>;
  status: JobStates;
  typename: Scalars['String'];
};


export type JobContainerSyncExecutionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncExecutionCondition>;
  filter?: InputMaybe<ContainerSyncExecutionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncExecutionsOrderBy>>;
};


export type JobJobLogsByJobArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobLogCondition>;
  filter?: InputMaybe<JobLogFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobLogsOrderBy>>;
};

/** A condition to be used against `Job` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type JobCondition = {
  /** Checks for equality with the object’s `attempt` field. */
  attempt?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `completedAt` field. */
  completedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `keepaliveInterval` field. */
  keepaliveInterval?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `lastKeepalive` field. */
  lastKeepalive?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastQueuedAt` field. */
  lastQueuedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `maxRetries` field. */
  maxRetries?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `parameters` field. */
  parameters?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `queue` field. */
  queue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `result` field. */
  result?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `retentionTtl` field. */
  retentionTtl?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `runAfter` field. */
  runAfter?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `startedAt` field. */
  startedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<JobStates>;
  /** Checks for equality with the object’s `typename` field. */
  typename?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Job` object types. All fields are combined with a logical ‘and.’ */
export type JobFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<JobFilter>>;
  /** Filter by the object’s `attempt` field. */
  attempt?: InputMaybe<IntFilter>;
  /** Filter by the object’s `completedAt` field. */
  completedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `keepaliveInterval` field. */
  keepaliveInterval?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `lastKeepalive` field. */
  lastKeepalive?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastQueuedAt` field. */
  lastQueuedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `maxRetries` field. */
  maxRetries?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<JobFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<JobFilter>>;
  /** Filter by the object’s `parameters` field. */
  parameters?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `priority` field. */
  priority?: InputMaybe<IntFilter>;
  /** Filter by the object’s `queue` field. */
  queue?: InputMaybe<StringFilter>;
  /** Filter by the object’s `result` field. */
  result?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `retentionTtl` field. */
  retentionTtl?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `runAfter` field. */
  runAfter?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `startedAt` field. */
  startedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<JobStatesFilter>;
  /** Filter by the object’s `typename` field. */
  typename?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Job` */
export type JobInput = {
  attempt?: InputMaybe<Scalars['Int']>;
  completedAt?: InputMaybe<Scalars['Datetime']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  keepaliveInterval?: InputMaybe<Scalars['BigInt']>;
  lastKeepalive?: InputMaybe<Scalars['Datetime']>;
  lastQueuedAt?: InputMaybe<Scalars['Datetime']>;
  maxRetries?: InputMaybe<Scalars['Int']>;
  parameters?: InputMaybe<Scalars['JSON']>;
  priority?: InputMaybe<Scalars['Int']>;
  queue: Scalars['String'];
  result?: InputMaybe<Scalars['JSON']>;
  retentionTtl?: InputMaybe<Scalars['BigInt']>;
  runAfter?: InputMaybe<Scalars['BigInt']>;
  startedAt?: InputMaybe<Scalars['Datetime']>;
  status?: InputMaybe<JobStates>;
  typename: Scalars['String'];
};

export type JobLog = Node & {
  id: Scalars['UUID'];
  job: Scalars['UUID'];
  /** Reads a single `Job` that is related to this `JobLog`. */
  jobByJob?: Maybe<Job>;
  level?: Maybe<LogLevel>;
  loggedAt?: Maybe<Scalars['Datetime']>;
  message?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  position: Scalars['Int'];
};

/** A condition to be used against `JobLog` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type JobLogCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `job` field. */
  job?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `level` field. */
  level?: InputMaybe<LogLevel>;
  /** Checks for equality with the object’s `loggedAt` field. */
  loggedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `position` field. */
  position?: InputMaybe<Scalars['Int']>;
};

/** A filter to be used against `JobLog` object types. All fields are combined with a logical ‘and.’ */
export type JobLogFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<JobLogFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `job` field. */
  job?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `level` field. */
  level?: InputMaybe<LogLevelFilter>;
  /** Filter by the object’s `loggedAt` field. */
  loggedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `message` field. */
  message?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<JobLogFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<JobLogFilter>>;
  /** Filter by the object’s `position` field. */
  position?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `JobLog` */
export type JobLogInput = {
  id?: InputMaybe<Scalars['UUID']>;
  job?: InputMaybe<Scalars['UUID']>;
  level?: InputMaybe<LogLevel>;
  loggedAt?: InputMaybe<Scalars['Datetime']>;
  message?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `JobLog`. Fields that are set will be updated. */
export type JobLogPatch = {
  id?: InputMaybe<Scalars['UUID']>;
  job?: InputMaybe<Scalars['UUID']>;
  level?: InputMaybe<LogLevel>;
  loggedAt?: InputMaybe<Scalars['Datetime']>;
  message?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `JobLog` values. */
export type JobLogsConnection = {
  /** A list of edges which contains the `JobLog` and cursor to aid in pagination. */
  edges: Array<JobLogsEdge>;
  /** A list of `JobLog` objects. */
  nodes: Array<JobLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JobLog` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JobLog` edge in the connection. */
export type JobLogsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `JobLog` at the end of the edge. */
  node: JobLog;
};

/** Methods to use when ordering `JobLog`. */
export enum JobLogsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  JobAsc = 'JOB_ASC',
  JobDesc = 'JOB_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  LoggedAtAsc = 'LOGGED_AT_ASC',
  LoggedAtDesc = 'LOGGED_AT_DESC',
  MessageAsc = 'MESSAGE_ASC',
  MessageDesc = 'MESSAGE_DESC',
  Natural = 'NATURAL',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `Job`. Fields that are set will be updated. */
export type JobPatch = {
  attempt?: InputMaybe<Scalars['Int']>;
  completedAt?: InputMaybe<Scalars['Datetime']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  keepaliveInterval?: InputMaybe<Scalars['BigInt']>;
  lastKeepalive?: InputMaybe<Scalars['Datetime']>;
  lastQueuedAt?: InputMaybe<Scalars['Datetime']>;
  maxRetries?: InputMaybe<Scalars['Int']>;
  parameters?: InputMaybe<Scalars['JSON']>;
  priority?: InputMaybe<Scalars['Int']>;
  queue?: InputMaybe<Scalars['String']>;
  result?: InputMaybe<Scalars['JSON']>;
  retentionTtl?: InputMaybe<Scalars['BigInt']>;
  runAfter?: InputMaybe<Scalars['BigInt']>;
  startedAt?: InputMaybe<Scalars['Datetime']>;
  status?: InputMaybe<JobStates>;
  typename?: InputMaybe<Scalars['String']>;
};

export enum JobStates {
  Cancelled = 'CANCELLED',
  Cancelling = 'CANCELLING',
  Errored = 'ERRORED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Success = 'SUCCESS'
}

/** A filter to be used against JobStates fields. All fields are combined with a logical ‘and.’ */
export type JobStatesFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<JobStates>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<JobStates>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<JobStates>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<JobStates>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<JobStates>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<JobStates>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<JobStates>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<JobStates>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<JobStates>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<JobStates>>;
};

/** A connection to a list of `Job` values. */
export type JobsConnection = {
  /** A list of edges which contains the `Job` and cursor to aid in pagination. */
  edges: Array<JobsEdge>;
  /** A list of `Job` objects. */
  nodes: Array<Job>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Job` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Job` edge in the connection. */
export type JobsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Job` at the end of the edge. */
  node: Job;
};

/** Methods to use when ordering `Job`. */
export enum JobsOrderBy {
  AttemptAsc = 'ATTEMPT_ASC',
  AttemptDesc = 'ATTEMPT_DESC',
  CompletedAtAsc = 'COMPLETED_AT_ASC',
  CompletedAtDesc = 'COMPLETED_AT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KeepaliveIntervalAsc = 'KEEPALIVE_INTERVAL_ASC',
  KeepaliveIntervalDesc = 'KEEPALIVE_INTERVAL_DESC',
  LastKeepaliveAsc = 'LAST_KEEPALIVE_ASC',
  LastKeepaliveDesc = 'LAST_KEEPALIVE_DESC',
  LastQueuedAtAsc = 'LAST_QUEUED_AT_ASC',
  LastQueuedAtDesc = 'LAST_QUEUED_AT_DESC',
  MaxRetriesAsc = 'MAX_RETRIES_ASC',
  MaxRetriesDesc = 'MAX_RETRIES_DESC',
  Natural = 'NATURAL',
  ParametersAsc = 'PARAMETERS_ASC',
  ParametersDesc = 'PARAMETERS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
  QueueAsc = 'QUEUE_ASC',
  QueueDesc = 'QUEUE_DESC',
  ResultAsc = 'RESULT_ASC',
  ResultDesc = 'RESULT_DESC',
  RetentionTtlAsc = 'RETENTION_TTL_ASC',
  RetentionTtlDesc = 'RETENTION_TTL_DESC',
  RunAfterAsc = 'RUN_AFTER_ASC',
  RunAfterDesc = 'RUN_AFTER_DESC',
  StartedAtAsc = 'STARTED_AT_ASC',
  StartedAtDesc = 'STARTED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TypenameAsc = 'TYPENAME_ASC',
  TypenameDesc = 'TYPENAME_DESC'
}

/** All input for the `jsonbRecursiveMerge` mutation. */
export type JsonbRecursiveMergeInput = {
  a?: InputMaybe<Scalars['JSON']>;
  b?: InputMaybe<Scalars['JSON']>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `jsonbRecursiveMerge` mutation. */
export type JsonbRecursiveMergePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type Label = Node & {
  color: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  /** Reads and enables pagination through a set of `LabelAssociation`. */
  labelAssociationsByLabel: LabelAssociationsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type LabelLabelAssociationsByLabelArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LabelAssociationCondition>;
  filter?: InputMaybe<LabelAssociationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LabelAssociationsOrderBy>>;
};

export type LabelAssociation = {
  label: Scalars['String'];
  /** Reads a single `Label` that is related to this `LabelAssociation`. */
  labelByLabel?: Maybe<Label>;
  repoSyncType: Scalars['String'];
  /** Reads a single `RepoSyncType` that is related to this `LabelAssociation`. */
  repoSyncTypeByRepoSyncType?: Maybe<RepoSyncType>;
};

/**
 * A condition to be used against `LabelAssociation` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LabelAssociationCondition = {
  /** Checks for equality with the object’s `label` field. */
  label?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoSyncType` field. */
  repoSyncType?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `LabelAssociation` object types. All fields are combined with a logical ‘and.’ */
export type LabelAssociationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<LabelAssociationFilter>>;
  /** Filter by the object’s `label` field. */
  label?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<LabelAssociationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<LabelAssociationFilter>>;
  /** Filter by the object’s `repoSyncType` field. */
  repoSyncType?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `LabelAssociation` */
export type LabelAssociationInput = {
  label: Scalars['String'];
  repoSyncType: Scalars['String'];
};

/** Represents an update to a `LabelAssociation`. Fields that are set will be updated. */
export type LabelAssociationPatch = {
  label?: InputMaybe<Scalars['String']>;
  repoSyncType?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `LabelAssociation` values. */
export type LabelAssociationsConnection = {
  /** A list of edges which contains the `LabelAssociation` and cursor to aid in pagination. */
  edges: Array<LabelAssociationsEdge>;
  /** A list of `LabelAssociation` objects. */
  nodes: Array<LabelAssociation>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LabelAssociation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `LabelAssociation` edge in the connection. */
export type LabelAssociationsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `LabelAssociation` at the end of the edge. */
  node: LabelAssociation;
};

/** Methods to use when ordering `LabelAssociation`. */
export enum LabelAssociationsOrderBy {
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  Natural = 'NATURAL',
  RepoSyncTypeAsc = 'REPO_SYNC_TYPE_ASC',
  RepoSyncTypeDesc = 'REPO_SYNC_TYPE_DESC'
}

/** A condition to be used against `Label` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type LabelCondition = {
  /** Checks for equality with the object’s `color` field. */
  color?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `label` field. */
  label?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Label` object types. All fields are combined with a logical ‘and.’ */
export type LabelFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<LabelFilter>>;
  /** Filter by the object’s `color` field. */
  color?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `label` field. */
  label?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<LabelFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<LabelFilter>>;
};

/** An input for mutations affecting `Label` */
export type LabelInput = {
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

/** Represents an update to a `Label`. Fields that are set will be updated. */
export type LabelPatch = {
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Label` values. */
export type LabelsConnection = {
  /** A list of edges which contains the `Label` and cursor to aid in pagination. */
  edges: Array<LabelsEdge>;
  /** A list of `Label` objects. */
  nodes: Array<Label>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Label` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Label` edge in the connection. */
export type LabelsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Label` at the end of the edge. */
  node: Label;
};

/** Methods to use when ordering `Label`. */
export enum LabelsOrderBy {
  ColorAsc = 'COLOR_ASC',
  ColorDesc = 'COLOR_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

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

export enum LogLevel {
  Debug = 'DEBUG',
  Error = 'ERROR',
  Info = 'INFO',
  Warn = 'WARN'
}

/** A filter to be used against LogLevel fields. All fields are combined with a logical ‘and.’ */
export type LogLevelFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<LogLevel>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<LogLevel>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<LogLevel>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<LogLevel>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<LogLevel>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<LogLevel>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<LogLevel>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<LogLevel>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<LogLevel>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<LogLevel>>;
};

/** All input for the `markFailed` mutation. */
export type MarkFailedInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  expectedstate?: InputMaybe<JobStates>;
  id?: InputMaybe<Scalars['UUID']>;
  retry?: InputMaybe<Scalars['Boolean']>;
  runAfter?: InputMaybe<Scalars['BigInt']>;
};

/** The output of our `markFailed` mutation. */
export type MarkFailedPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Job>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `markSuccess` mutation. */
export type MarkSuccessInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  expectedstate?: InputMaybe<JobStates>;
  id?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `markSuccess` mutation. */
export type MarkSuccessPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Job>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  addRepoImport?: Maybe<AddRepoImportPayload>;
  addSyncVariable?: Maybe<AddSyncVariablePayload>;
  addToken?: Maybe<Scalars['Boolean']>;
  bulkDisableSync?: Maybe<Scalars['Boolean']>;
  bulkEnableSync?: Maybe<Scalars['Boolean']>;
  cancellingJob?: Maybe<CancellingJobPayload>;
  checkJobStatus?: Maybe<CheckJobStatusPayload>;
  /** Creates a single `ContainerImage`. */
  createContainerImage?: Maybe<CreateContainerImagePayload>;
  /** Creates a single `ContainerImageType`. */
  createContainerImageType?: Maybe<CreateContainerImageTypePayload>;
  /** Creates a single `ContainerSync`. */
  createContainerSync?: Maybe<CreateContainerSyncPayload>;
  /** Creates a single `ContainerSyncExecution`. */
  createContainerSyncExecution?: Maybe<CreateContainerSyncExecutionPayload>;
  /** Creates a single `ContainerSyncSchedule`. */
  createContainerSyncSchedule?: Maybe<CreateContainerSyncSchedulePayload>;
  /** Creates a single `GitCommit`. */
  createGitCommit?: Maybe<CreateGitCommitPayload>;
  /** Creates a single `GitCommitStat`. */
  createGitCommitStat?: Maybe<CreateGitCommitStatPayload>;
  /** Creates a single `GitFile`. */
  createGitFile?: Maybe<CreateGitFilePayload>;
  /** Creates a single `Job`. */
  createJob?: Maybe<CreateJobPayload>;
  /** Creates a single `JobLog`. */
  createJobLog?: Maybe<CreateJobLogPayload>;
  /** Creates a single `Label`. */
  createLabel?: Maybe<CreateLabelPayload>;
  /** Creates a single `LabelAssociation`. */
  createLabelAssociation?: Maybe<CreateLabelAssociationPayload>;
  /** Creates a single `_MergestatExploreFileMetadatum`. */
  createMergestatExploreFileMetadatum?: Maybe<CreateMergestatExploreFileMetadatumPayload>;
  /** Creates a single `_MergestatExploreRepoMetadatum`. */
  createMergestatExploreRepoMetadatum?: Maybe<CreateMergestatExploreRepoMetadatumPayload>;
  /** Creates a single `Provider`. */
  createProvider?: Maybe<CreateProviderPayload>;
  /** Creates a single `QueryHistory`. */
  createQueryHistory?: Maybe<CreateQueryHistoryPayload>;
  /** Creates a single `Queue`. */
  createQueue?: Maybe<CreateQueuePayload>;
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
  /** Creates a single `RepoSyncTypeGroup`. */
  createRepoSyncTypeGroup?: Maybe<CreateRepoSyncTypeGroupPayload>;
  /** Creates a single `SavedExplore`. */
  createSavedExplore?: Maybe<CreateSavedExplorePayload>;
  /** Creates a single `SavedQuery`. */
  createSavedQuery?: Maybe<CreateSavedQueryPayload>;
  /** Creates a single `SchemaMigration`. */
  createSchemaMigration?: Maybe<CreateSchemaMigrationPayload>;
  /** Creates a single `SchemaMigrationsHistory`. */
  createSchemaMigrationsHistory?: Maybe<CreateSchemaMigrationsHistoryPayload>;
  /** Creates a single `ServiceAuthCredential`. */
  createServiceAuthCredential?: Maybe<CreateServiceAuthCredentialPayload>;
  /** Creates a single `ServiceAuthCredentialType`. */
  createServiceAuthCredentialType?: Maybe<CreateServiceAuthCredentialTypePayload>;
  /** Creates a single `SqlqMigration`. */
  createSqlqMigration?: Maybe<CreateSqlqMigrationPayload>;
  /** Creates a single `SyncVariable`. */
  createSyncVariable?: Maybe<CreateSyncVariablePayload>;
  /** Creates a single `Vendor`. */
  createVendor?: Maybe<CreateVendorPayload>;
  /** Creates a single `VendorType`. */
  createVendorType?: Maybe<CreateVendorTypePayload>;
  /** Deletes a single `ContainerImage` using a unique key. */
  deleteContainerImage?: Maybe<DeleteContainerImagePayload>;
  /** Deletes a single `ContainerImage` using a unique key. */
  deleteContainerImageByName?: Maybe<DeleteContainerImagePayload>;
  /** Deletes a single `ContainerImage` using its globally unique id. */
  deleteContainerImageByNodeId?: Maybe<DeleteContainerImagePayload>;
  /** Deletes a single `ContainerImage` using a unique key. */
  deleteContainerImageByUrl?: Maybe<DeleteContainerImagePayload>;
  /** Deletes a single `ContainerImageType` using a unique key. */
  deleteContainerImageType?: Maybe<DeleteContainerImageTypePayload>;
  /** Deletes a single `ContainerImageType` using its globally unique id. */
  deleteContainerImageTypeByNodeId?: Maybe<DeleteContainerImageTypePayload>;
  /** Deletes a single `ContainerSync` using a unique key. */
  deleteContainerSync?: Maybe<DeleteContainerSyncPayload>;
  /** Deletes a single `ContainerSync` using its globally unique id. */
  deleteContainerSyncByNodeId?: Maybe<DeleteContainerSyncPayload>;
  /** Deletes a single `ContainerSync` using a unique key. */
  deleteContainerSyncByRepoIdAndImageId?: Maybe<DeleteContainerSyncPayload>;
  /** Deletes a single `ContainerSyncSchedule` using a unique key. */
  deleteContainerSyncSchedule?: Maybe<DeleteContainerSyncSchedulePayload>;
  /** Deletes a single `ContainerSyncSchedule` using its globally unique id. */
  deleteContainerSyncScheduleByNodeId?: Maybe<DeleteContainerSyncSchedulePayload>;
  /** Deletes a single `ContainerSyncSchedule` using a unique key. */
  deleteContainerSyncScheduleBySyncId?: Maybe<DeleteContainerSyncSchedulePayload>;
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
  /** Deletes a single `Job` using a unique key. */
  deleteJob?: Maybe<DeleteJobPayload>;
  /** Deletes a single `Job` using its globally unique id. */
  deleteJobByNodeId?: Maybe<DeleteJobPayload>;
  /** Deletes a single `JobLog` using a unique key. */
  deleteJobLog?: Maybe<DeleteJobLogPayload>;
  /** Deletes a single `JobLog` using its globally unique id. */
  deleteJobLogByNodeId?: Maybe<DeleteJobLogPayload>;
  /** Deletes a single `Label` using a unique key. */
  deleteLabel?: Maybe<DeleteLabelPayload>;
  /** Deletes a single `LabelAssociation` using a unique key. */
  deleteLabelAssociationByLabelAndRepoSyncType?: Maybe<DeleteLabelAssociationPayload>;
  /** Deletes a single `Label` using its globally unique id. */
  deleteLabelByNodeId?: Maybe<DeleteLabelPayload>;
  /** Deletes a single `_MergestatExploreFileMetadatum` using a unique key. */
  deleteMergestatExploreFileMetadatum?: Maybe<DeleteMergestatExploreFileMetadatumPayload>;
  /** Deletes a single `_MergestatExploreFileMetadatum` using its globally unique id. */
  deleteMergestatExploreFileMetadatumByNodeId?: Maybe<DeleteMergestatExploreFileMetadatumPayload>;
  /** Deletes a single `_MergestatExploreRepoMetadatum` using a unique key. */
  deleteMergestatExploreRepoMetadatum?: Maybe<DeleteMergestatExploreRepoMetadatumPayload>;
  /** Deletes a single `_MergestatExploreRepoMetadatum` using its globally unique id. */
  deleteMergestatExploreRepoMetadatumByNodeId?: Maybe<DeleteMergestatExploreRepoMetadatumPayload>;
  /** Deletes a single `Provider` using a unique key. */
  deleteProvider?: Maybe<DeleteProviderPayload>;
  /** Deletes a single `Provider` using a unique key. */
  deleteProviderByName?: Maybe<DeleteProviderPayload>;
  /** Deletes a single `Provider` using its globally unique id. */
  deleteProviderByNodeId?: Maybe<DeleteProviderPayload>;
  /** Deletes a single `QueryHistory` using a unique key. */
  deleteQueryHistory?: Maybe<DeleteQueryHistoryPayload>;
  /** Deletes a single `QueryHistory` using its globally unique id. */
  deleteQueryHistoryByNodeId?: Maybe<DeleteQueryHistoryPayload>;
  /** Deletes a single `Queue` using a unique key. */
  deleteQueue?: Maybe<DeleteQueuePayload>;
  /** Deletes a single `Queue` using its globally unique id. */
  deleteQueueByNodeId?: Maybe<DeleteQueuePayload>;
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
  /** Deletes a single `RepoSyncTypeGroup` using a unique key. */
  deleteRepoSyncTypeGroup?: Maybe<DeleteRepoSyncTypeGroupPayload>;
  /** Deletes a single `RepoSyncTypeGroup` using its globally unique id. */
  deleteRepoSyncTypeGroupByNodeId?: Maybe<DeleteRepoSyncTypeGroupPayload>;
  /** Deletes a single `SavedExplore` using a unique key. */
  deleteSavedExplore?: Maybe<DeleteSavedExplorePayload>;
  /** Deletes a single `SavedExplore` using its globally unique id. */
  deleteSavedExploreByNodeId?: Maybe<DeleteSavedExplorePayload>;
  /** Deletes a single `SavedQuery` using a unique key. */
  deleteSavedQuery?: Maybe<DeleteSavedQueryPayload>;
  /** Deletes a single `SavedQuery` using its globally unique id. */
  deleteSavedQueryByNodeId?: Maybe<DeleteSavedQueryPayload>;
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
  /** Deletes a single `SqlqMigration` using a unique key. */
  deleteSqlqMigration?: Maybe<DeleteSqlqMigrationPayload>;
  /** Deletes a single `SqlqMigration` using a unique key. */
  deleteSqlqMigrationByName?: Maybe<DeleteSqlqMigrationPayload>;
  /** Deletes a single `SqlqMigration` using its globally unique id. */
  deleteSqlqMigrationByNodeId?: Maybe<DeleteSqlqMigrationPayload>;
  /** Deletes a single `SyncVariable` using a unique key. */
  deleteSyncVariable?: Maybe<DeleteSyncVariablePayload>;
  /** Deletes a single `SyncVariable` using its globally unique id. */
  deleteSyncVariableByNodeId?: Maybe<DeleteSyncVariablePayload>;
  /** Deletes a single `Vendor` using a unique key. */
  deleteVendor?: Maybe<DeleteVendorPayload>;
  /** Deletes a single `Vendor` using its globally unique id. */
  deleteVendorByNodeId?: Maybe<DeleteVendorPayload>;
  /** Deletes a single `VendorType` using a unique key. */
  deleteVendorType?: Maybe<DeleteVendorTypePayload>;
  /** Deletes a single `VendorType` using its globally unique id. */
  deleteVendorTypeByNodeId?: Maybe<DeleteVendorTypePayload>;
  dequeueJob?: Maybe<DequeueJobPayload>;
  enableContainerSync?: Maybe<EnableContainerSyncPayload>;
  fetchServiceAuthCredential?: Maybe<FetchServiceAuthCredentialPayload>;
  fetchSyncVariable?: Maybe<FetchSyncVariablePayload>;
  getfilesolderthan?: Maybe<GetfilesolderthanPayload>;
  jsonbRecursiveMerge?: Maybe<JsonbRecursiveMergePayload>;
  markFailed?: Maybe<MarkFailedPayload>;
  markSuccess?: Maybe<MarkSuccessPayload>;
  reap?: Maybe<ReapPayload>;
  setSyncJobStatus?: Maybe<SetSyncJobStatusPayload>;
  simpleRepoSyncQueueCleanup?: Maybe<SimpleRepoSyncQueueCleanupPayload>;
  simpleSqlqCleanup?: Maybe<SimpleSqlqCleanupPayload>;
  syncNow?: Maybe<SyncNowPayload>;
  /** Updates a single `ContainerImage` using a unique key and a patch. */
  updateContainerImage?: Maybe<UpdateContainerImagePayload>;
  /** Updates a single `ContainerImage` using a unique key and a patch. */
  updateContainerImageByName?: Maybe<UpdateContainerImagePayload>;
  /** Updates a single `ContainerImage` using its globally unique id and a patch. */
  updateContainerImageByNodeId?: Maybe<UpdateContainerImagePayload>;
  /** Updates a single `ContainerImage` using a unique key and a patch. */
  updateContainerImageByUrl?: Maybe<UpdateContainerImagePayload>;
  /** Updates a single `ContainerImageType` using a unique key and a patch. */
  updateContainerImageType?: Maybe<UpdateContainerImageTypePayload>;
  /** Updates a single `ContainerImageType` using its globally unique id and a patch. */
  updateContainerImageTypeByNodeId?: Maybe<UpdateContainerImageTypePayload>;
  /** Updates a single `ContainerSync` using a unique key and a patch. */
  updateContainerSync?: Maybe<UpdateContainerSyncPayload>;
  /** Updates a single `ContainerSync` using its globally unique id and a patch. */
  updateContainerSyncByNodeId?: Maybe<UpdateContainerSyncPayload>;
  /** Updates a single `ContainerSync` using a unique key and a patch. */
  updateContainerSyncByRepoIdAndImageId?: Maybe<UpdateContainerSyncPayload>;
  /** Updates a single `ContainerSyncSchedule` using a unique key and a patch. */
  updateContainerSyncSchedule?: Maybe<UpdateContainerSyncSchedulePayload>;
  /** Updates a single `ContainerSyncSchedule` using its globally unique id and a patch. */
  updateContainerSyncScheduleByNodeId?: Maybe<UpdateContainerSyncSchedulePayload>;
  /** Updates a single `ContainerSyncSchedule` using a unique key and a patch. */
  updateContainerSyncScheduleBySyncId?: Maybe<UpdateContainerSyncSchedulePayload>;
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
  /** Updates a single `Job` using a unique key and a patch. */
  updateJob?: Maybe<UpdateJobPayload>;
  /** Updates a single `Job` using its globally unique id and a patch. */
  updateJobByNodeId?: Maybe<UpdateJobPayload>;
  /** Updates a single `JobLog` using a unique key and a patch. */
  updateJobLog?: Maybe<UpdateJobLogPayload>;
  /** Updates a single `JobLog` using its globally unique id and a patch. */
  updateJobLogByNodeId?: Maybe<UpdateJobLogPayload>;
  /** Updates a single `Label` using a unique key and a patch. */
  updateLabel?: Maybe<UpdateLabelPayload>;
  /** Updates a single `LabelAssociation` using a unique key and a patch. */
  updateLabelAssociationByLabelAndRepoSyncType?: Maybe<UpdateLabelAssociationPayload>;
  /** Updates a single `Label` using its globally unique id and a patch. */
  updateLabelByNodeId?: Maybe<UpdateLabelPayload>;
  /** Updates a single `_MergestatExploreFileMetadatum` using a unique key and a patch. */
  updateMergestatExploreFileMetadatum?: Maybe<UpdateMergestatExploreFileMetadatumPayload>;
  /** Updates a single `_MergestatExploreFileMetadatum` using its globally unique id and a patch. */
  updateMergestatExploreFileMetadatumByNodeId?: Maybe<UpdateMergestatExploreFileMetadatumPayload>;
  /** Updates a single `_MergestatExploreRepoMetadatum` using a unique key and a patch. */
  updateMergestatExploreRepoMetadatum?: Maybe<UpdateMergestatExploreRepoMetadatumPayload>;
  /** Updates a single `_MergestatExploreRepoMetadatum` using its globally unique id and a patch. */
  updateMergestatExploreRepoMetadatumByNodeId?: Maybe<UpdateMergestatExploreRepoMetadatumPayload>;
  /** Updates a single `Provider` using a unique key and a patch. */
  updateProvider?: Maybe<UpdateProviderPayload>;
  /** Updates a single `Provider` using a unique key and a patch. */
  updateProviderByName?: Maybe<UpdateProviderPayload>;
  /** Updates a single `Provider` using its globally unique id and a patch. */
  updateProviderByNodeId?: Maybe<UpdateProviderPayload>;
  /** Updates a single `QueryHistory` using a unique key and a patch. */
  updateQueryHistory?: Maybe<UpdateQueryHistoryPayload>;
  /** Updates a single `QueryHistory` using its globally unique id and a patch. */
  updateQueryHistoryByNodeId?: Maybe<UpdateQueryHistoryPayload>;
  /** Updates a single `Queue` using a unique key and a patch. */
  updateQueue?: Maybe<UpdateQueuePayload>;
  /** Updates a single `Queue` using its globally unique id and a patch. */
  updateQueueByNodeId?: Maybe<UpdateQueuePayload>;
  /** Updates a single `Repo` using a unique key and a patch. */
  updateRepo?: Maybe<UpdateRepoPayload>;
  /** Updates a single `Repo` using its globally unique id and a patch. */
  updateRepoByNodeId?: Maybe<UpdateRepoPayload>;
  /** Updates a single `RepoImport` using a unique key and a patch. */
  updateRepoImport?: Maybe<UpdateRepoImportPayload>;
  /** Updates a single `RepoImport` using its globally unique id and a patch. */
  updateRepoImportByNodeId?: Maybe<UpdateRepoImportPayload>;
  updateRepoImportDefaultContainerImages?: Maybe<UpdateRepoImportDefaultContainerImagesPayload>;
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
  /** Updates a single `RepoSyncTypeGroup` using a unique key and a patch. */
  updateRepoSyncTypeGroup?: Maybe<UpdateRepoSyncTypeGroupPayload>;
  /** Updates a single `RepoSyncTypeGroup` using its globally unique id and a patch. */
  updateRepoSyncTypeGroupByNodeId?: Maybe<UpdateRepoSyncTypeGroupPayload>;
  /** Updates a single `SavedExplore` using a unique key and a patch. */
  updateSavedExplore?: Maybe<UpdateSavedExplorePayload>;
  /** Updates a single `SavedExplore` using its globally unique id and a patch. */
  updateSavedExploreByNodeId?: Maybe<UpdateSavedExplorePayload>;
  /** Updates a single `SavedQuery` using a unique key and a patch. */
  updateSavedQuery?: Maybe<UpdateSavedQueryPayload>;
  /** Updates a single `SavedQuery` using its globally unique id and a patch. */
  updateSavedQueryByNodeId?: Maybe<UpdateSavedQueryPayload>;
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
  /** Updates a single `SqlqMigration` using a unique key and a patch. */
  updateSqlqMigration?: Maybe<UpdateSqlqMigrationPayload>;
  /** Updates a single `SqlqMigration` using a unique key and a patch. */
  updateSqlqMigrationByName?: Maybe<UpdateSqlqMigrationPayload>;
  /** Updates a single `SqlqMigration` using its globally unique id and a patch. */
  updateSqlqMigrationByNodeId?: Maybe<UpdateSqlqMigrationPayload>;
  /** Updates a single `SyncVariable` using a unique key and a patch. */
  updateSyncVariable?: Maybe<UpdateSyncVariablePayload>;
  /** Updates a single `SyncVariable` using its globally unique id and a patch. */
  updateSyncVariableByNodeId?: Maybe<UpdateSyncVariablePayload>;
  /** Updates a single `Vendor` using a unique key and a patch. */
  updateVendor?: Maybe<UpdateVendorPayload>;
  /** Updates a single `Vendor` using its globally unique id and a patch. */
  updateVendorByNodeId?: Maybe<UpdateVendorPayload>;
  /** Updates a single `VendorType` using a unique key and a patch. */
  updateVendorType?: Maybe<UpdateVendorTypePayload>;
  /** Updates a single `VendorType` using its globally unique id and a patch. */
  updateVendorTypeByNodeId?: Maybe<UpdateVendorTypePayload>;
  userMgmtAddUser?: Maybe<UserMgmtAddUserPayload>;
  userMgmtRemoveUser?: Maybe<UserMgmtRemoveUserPayload>;
  userMgmtSetUserRole?: Maybe<UserMgmtSetUserRolePayload>;
  userMgmtUpdateUserPassword?: Maybe<UserMgmtUpdateUserPasswordPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddRepoImportArgs = {
  input: AddRepoImportInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddSyncVariableArgs = {
  input: AddSyncVariableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddTokenArgs = {
  provider: Scalars['UUID'];
  token: Scalars['String'];
  type: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationBulkDisableSyncArgs = {
  image: Scalars['UUID'];
  provider: Scalars['UUID'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationBulkEnableSyncArgs = {
  image: Scalars['UUID'];
  provider: Scalars['UUID'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCancellingJobArgs = {
  input: CancellingJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCheckJobStatusArgs = {
  input: CheckJobStatusInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContainerImageArgs = {
  input: CreateContainerImageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContainerImageTypeArgs = {
  input: CreateContainerImageTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContainerSyncArgs = {
  input: CreateContainerSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContainerSyncExecutionArgs = {
  input: CreateContainerSyncExecutionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateContainerSyncScheduleArgs = {
  input: CreateContainerSyncScheduleInput;
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
export type MutationCreateJobArgs = {
  input: CreateJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateJobLogArgs = {
  input: CreateJobLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLabelArgs = {
  input: CreateLabelInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLabelAssociationArgs = {
  input: CreateLabelAssociationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMergestatExploreFileMetadatumArgs = {
  input: CreateMergestatExploreFileMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMergestatExploreRepoMetadatumArgs = {
  input: CreateMergestatExploreRepoMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProviderArgs = {
  input: CreateProviderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateQueryHistoryArgs = {
  input: CreateQueryHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateQueueArgs = {
  input: CreateQueueInput;
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
export type MutationCreateRepoSyncTypeGroupArgs = {
  input: CreateRepoSyncTypeGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSavedExploreArgs = {
  input: CreateSavedExploreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSavedQueryArgs = {
  input: CreateSavedQueryInput;
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
export type MutationCreateSqlqMigrationArgs = {
  input: CreateSqlqMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSyncVariableArgs = {
  input: CreateSyncVariableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVendorArgs = {
  input: CreateVendorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVendorTypeArgs = {
  input: CreateVendorTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageArgs = {
  input: DeleteContainerImageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageByNameArgs = {
  input: DeleteContainerImageByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageByNodeIdArgs = {
  input: DeleteContainerImageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageByUrlArgs = {
  input: DeleteContainerImageByUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageTypeArgs = {
  input: DeleteContainerImageTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageTypeByNodeIdArgs = {
  input: DeleteContainerImageTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerSyncArgs = {
  input: DeleteContainerSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerSyncByNodeIdArgs = {
  input: DeleteContainerSyncByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerSyncByRepoIdAndImageIdArgs = {
  input: DeleteContainerSyncByRepoIdAndImageIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerSyncScheduleArgs = {
  input: DeleteContainerSyncScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerSyncScheduleByNodeIdArgs = {
  input: DeleteContainerSyncScheduleByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerSyncScheduleBySyncIdArgs = {
  input: DeleteContainerSyncScheduleBySyncIdInput;
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
export type MutationDeleteJobArgs = {
  input: DeleteJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobByNodeIdArgs = {
  input: DeleteJobByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobLogArgs = {
  input: DeleteJobLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobLogByNodeIdArgs = {
  input: DeleteJobLogByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLabelArgs = {
  input: DeleteLabelInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLabelAssociationByLabelAndRepoSyncTypeArgs = {
  input: DeleteLabelAssociationByLabelAndRepoSyncTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLabelByNodeIdArgs = {
  input: DeleteLabelByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMergestatExploreFileMetadatumArgs = {
  input: DeleteMergestatExploreFileMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMergestatExploreFileMetadatumByNodeIdArgs = {
  input: DeleteMergestatExploreFileMetadatumByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMergestatExploreRepoMetadatumArgs = {
  input: DeleteMergestatExploreRepoMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMergestatExploreRepoMetadatumByNodeIdArgs = {
  input: DeleteMergestatExploreRepoMetadatumByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProviderArgs = {
  input: DeleteProviderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProviderByNameArgs = {
  input: DeleteProviderByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProviderByNodeIdArgs = {
  input: DeleteProviderByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQueryHistoryArgs = {
  input: DeleteQueryHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQueryHistoryByNodeIdArgs = {
  input: DeleteQueryHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQueueArgs = {
  input: DeleteQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteQueueByNodeIdArgs = {
  input: DeleteQueueByNodeIdInput;
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
export type MutationDeleteRepoSyncTypeGroupArgs = {
  input: DeleteRepoSyncTypeGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRepoSyncTypeGroupByNodeIdArgs = {
  input: DeleteRepoSyncTypeGroupByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSavedExploreArgs = {
  input: DeleteSavedExploreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSavedExploreByNodeIdArgs = {
  input: DeleteSavedExploreByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSavedQueryArgs = {
  input: DeleteSavedQueryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSavedQueryByNodeIdArgs = {
  input: DeleteSavedQueryByNodeIdInput;
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
export type MutationDeleteSqlqMigrationArgs = {
  input: DeleteSqlqMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSqlqMigrationByNameArgs = {
  input: DeleteSqlqMigrationByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSqlqMigrationByNodeIdArgs = {
  input: DeleteSqlqMigrationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSyncVariableArgs = {
  input: DeleteSyncVariableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSyncVariableByNodeIdArgs = {
  input: DeleteSyncVariableByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVendorArgs = {
  input: DeleteVendorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVendorByNodeIdArgs = {
  input: DeleteVendorByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVendorTypeArgs = {
  input: DeleteVendorTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVendorTypeByNodeIdArgs = {
  input: DeleteVendorTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDequeueJobArgs = {
  input: DequeueJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationEnableContainerSyncArgs = {
  input: EnableContainerSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFetchServiceAuthCredentialArgs = {
  input: FetchServiceAuthCredentialInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFetchSyncVariableArgs = {
  input: FetchSyncVariableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationGetfilesolderthanArgs = {
  input: GetfilesolderthanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationJsonbRecursiveMergeArgs = {
  input: JsonbRecursiveMergeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMarkFailedArgs = {
  input: MarkFailedInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationMarkSuccessArgs = {
  input: MarkSuccessInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationReapArgs = {
  input: ReapInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSetSyncJobStatusArgs = {
  input: SetSyncJobStatusInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSimpleRepoSyncQueueCleanupArgs = {
  input: SimpleRepoSyncQueueCleanupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSimpleSqlqCleanupArgs = {
  input: SimpleSqlqCleanupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSyncNowArgs = {
  input: SyncNowInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageArgs = {
  input: UpdateContainerImageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageByNameArgs = {
  input: UpdateContainerImageByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageByNodeIdArgs = {
  input: UpdateContainerImageByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageByUrlArgs = {
  input: UpdateContainerImageByUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageTypeArgs = {
  input: UpdateContainerImageTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageTypeByNodeIdArgs = {
  input: UpdateContainerImageTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerSyncArgs = {
  input: UpdateContainerSyncInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerSyncByNodeIdArgs = {
  input: UpdateContainerSyncByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerSyncByRepoIdAndImageIdArgs = {
  input: UpdateContainerSyncByRepoIdAndImageIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerSyncScheduleArgs = {
  input: UpdateContainerSyncScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerSyncScheduleByNodeIdArgs = {
  input: UpdateContainerSyncScheduleByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerSyncScheduleBySyncIdArgs = {
  input: UpdateContainerSyncScheduleBySyncIdInput;
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
export type MutationUpdateJobArgs = {
  input: UpdateJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobByNodeIdArgs = {
  input: UpdateJobByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobLogArgs = {
  input: UpdateJobLogInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobLogByNodeIdArgs = {
  input: UpdateJobLogByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLabelArgs = {
  input: UpdateLabelInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLabelAssociationByLabelAndRepoSyncTypeArgs = {
  input: UpdateLabelAssociationByLabelAndRepoSyncTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLabelByNodeIdArgs = {
  input: UpdateLabelByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMergestatExploreFileMetadatumArgs = {
  input: UpdateMergestatExploreFileMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMergestatExploreFileMetadatumByNodeIdArgs = {
  input: UpdateMergestatExploreFileMetadatumByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMergestatExploreRepoMetadatumArgs = {
  input: UpdateMergestatExploreRepoMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMergestatExploreRepoMetadatumByNodeIdArgs = {
  input: UpdateMergestatExploreRepoMetadatumByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProviderArgs = {
  input: UpdateProviderInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProviderByNameArgs = {
  input: UpdateProviderByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProviderByNodeIdArgs = {
  input: UpdateProviderByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQueryHistoryArgs = {
  input: UpdateQueryHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQueryHistoryByNodeIdArgs = {
  input: UpdateQueryHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQueueArgs = {
  input: UpdateQueueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateQueueByNodeIdArgs = {
  input: UpdateQueueByNodeIdInput;
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
export type MutationUpdateRepoImportDefaultContainerImagesArgs = {
  input: UpdateRepoImportDefaultContainerImagesInput;
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
export type MutationUpdateRepoSyncTypeGroupArgs = {
  input: UpdateRepoSyncTypeGroupInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRepoSyncTypeGroupByNodeIdArgs = {
  input: UpdateRepoSyncTypeGroupByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSavedExploreArgs = {
  input: UpdateSavedExploreInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSavedExploreByNodeIdArgs = {
  input: UpdateSavedExploreByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSavedQueryArgs = {
  input: UpdateSavedQueryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSavedQueryByNodeIdArgs = {
  input: UpdateSavedQueryByNodeIdInput;
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
export type MutationUpdateSqlqMigrationArgs = {
  input: UpdateSqlqMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSqlqMigrationByNameArgs = {
  input: UpdateSqlqMigrationByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSqlqMigrationByNodeIdArgs = {
  input: UpdateSqlqMigrationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSyncVariableArgs = {
  input: UpdateSyncVariableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSyncVariableByNodeIdArgs = {
  input: UpdateSyncVariableByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVendorArgs = {
  input: UpdateVendorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVendorByNodeIdArgs = {
  input: UpdateVendorByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVendorTypeArgs = {
  input: UpdateVendorTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVendorTypeByNodeIdArgs = {
  input: UpdateVendorTypeByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUserMgmtAddUserArgs = {
  input: UserMgmtAddUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUserMgmtRemoveUserArgs = {
  input: UserMgmtRemoveUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUserMgmtSetUserRoleArgs = {
  input: UserMgmtSetUserRoleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUserMgmtUpdateUserPasswordArgs = {
  input: UserMgmtUpdateUserPasswordInput;
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

export type Provider = Node & {
  createdAt: Scalars['Datetime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `RepoImport`. */
  repoImportsByProvider: RepoImportsConnection;
  /** Reads and enables pagination through a set of `Repo`. */
  reposByProvider: ReposConnection;
  /** Reads and enables pagination through a set of `ServiceAuthCredential`. */
  serviceAuthCredentialsByProvider: ServiceAuthCredentialsConnection;
  settings: Scalars['JSON'];
  vendor: Scalars['String'];
  /** Reads a single `Vendor` that is related to this `Provider`. */
  vendorByVendor?: Maybe<Vendor>;
};


export type ProviderRepoImportsByProviderArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoImportCondition>;
  filter?: InputMaybe<RepoImportFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoImportsOrderBy>>;
};


export type ProviderReposByProviderArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoCondition>;
  filter?: InputMaybe<RepoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReposOrderBy>>;
};


export type ProviderServiceAuthCredentialsByProviderArgs = {
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
 * A condition to be used against `Provider` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ProviderCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `vendor` field. */
  vendor?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Provider` object types. All fields are combined with a logical ‘and.’ */
export type ProviderFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProviderFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ProviderFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProviderFilter>>;
  /** Filter by the object’s `settings` field. */
  settings?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `vendor` field. */
  vendor?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Provider` */
export type ProviderInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
  settings: Scalars['JSON'];
  vendor: Scalars['String'];
};

/** Represents an update to a `Provider`. Fields that are set will be updated. */
export type ProviderPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  settings?: InputMaybe<Scalars['JSON']>;
  vendor?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Provider` values. */
export type ProvidersConnection = {
  /** A list of edges which contains the `Provider` and cursor to aid in pagination. */
  edges: Array<ProvidersEdge>;
  /** A list of `Provider` objects. */
  nodes: Array<Provider>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Provider` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Provider` edge in the connection. */
export type ProvidersEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Provider` at the end of the edge. */
  node: Provider;
};

/** Methods to use when ordering `Provider`. */
export enum ProvidersOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  VendorAsc = 'VENDOR_ASC',
  VendorDesc = 'VENDOR_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  /** Reads and enables pagination through a set of `_MergestatExploreFileMetadatum`. */
  _mergestatExploreFileMetadata?: Maybe<_MergestatExploreFileMetadataConnection>;
  _mergestatExploreFileMetadatum?: Maybe<_MergestatExploreFileMetadatum>;
  /** Reads a single `_MergestatExploreFileMetadatum` using its globally unique `ID`. */
  _mergestatExploreFileMetadatumByNodeId?: Maybe<_MergestatExploreFileMetadatum>;
  /** Reads and enables pagination through a set of `_MergestatExploreRepoMetadatum`. */
  _mergestatExploreRepoMetadata?: Maybe<_MergestatExploreRepoMetadataConnection>;
  _mergestatExploreRepoMetadatum?: Maybe<_MergestatExploreRepoMetadatum>;
  /** Reads a single `_MergestatExploreRepoMetadatum` using its globally unique `ID`. */
  _mergestatExploreRepoMetadatumByNodeId?: Maybe<_MergestatExploreRepoMetadatum>;
  containerImage?: Maybe<ContainerImage>;
  containerImageByName?: Maybe<ContainerImage>;
  /** Reads a single `ContainerImage` using its globally unique `ID`. */
  containerImageByNodeId?: Maybe<ContainerImage>;
  containerImageByUrl?: Maybe<ContainerImage>;
  containerImageType?: Maybe<ContainerImageType>;
  /** Reads a single `ContainerImageType` using its globally unique `ID`. */
  containerImageTypeByNodeId?: Maybe<ContainerImageType>;
  /** Reads and enables pagination through a set of `ContainerImageType`. */
  containerImageTypes?: Maybe<ContainerImageTypesConnection>;
  /** Reads and enables pagination through a set of `ContainerImage`. */
  containerImages?: Maybe<ContainerImagesConnection>;
  containerSync?: Maybe<ContainerSync>;
  /** Reads a single `ContainerSync` using its globally unique `ID`. */
  containerSyncByNodeId?: Maybe<ContainerSync>;
  containerSyncByRepoIdAndImageId?: Maybe<ContainerSync>;
  /** Reads and enables pagination through a set of `ContainerSyncExecution`. */
  containerSyncExecutions?: Maybe<ContainerSyncExecutionsConnection>;
  containerSyncSchedule?: Maybe<ContainerSyncSchedule>;
  /** Reads a single `ContainerSyncSchedule` using its globally unique `ID`. */
  containerSyncScheduleByNodeId?: Maybe<ContainerSyncSchedule>;
  containerSyncScheduleBySyncId?: Maybe<ContainerSyncSchedule>;
  /** Reads and enables pagination through a set of `ContainerSyncSchedule`. */
  containerSyncSchedules?: Maybe<ContainerSyncSchedulesConnection>;
  /** Reads and enables pagination through a set of `ContainerSync`. */
  containerSyncs?: Maybe<ContainerSyncsConnection>;
  currentMergeStatUser?: Maybe<Scalars['String']>;
  databaseConnection?: Maybe<DisplayDatabaseConnection>;
  execSQL: ExecSqlResult;
  exploreUi?: Maybe<Scalars['JSON']>;
  getReposPageHeaderStats?: Maybe<Scalars['JSON']>;
  getReposSyncsByStatus?: Maybe<Scalars['JSON']>;
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
  job?: Maybe<Job>;
  /** Reads a single `Job` using its globally unique `ID`. */
  jobByNodeId?: Maybe<Job>;
  jobLog?: Maybe<JobLog>;
  /** Reads a single `JobLog` using its globally unique `ID`. */
  jobLogByNodeId?: Maybe<JobLog>;
  /** Reads and enables pagination through a set of `JobLog`. */
  jobLogs?: Maybe<JobLogsConnection>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs?: Maybe<JobsConnection>;
  label?: Maybe<Label>;
  labelAssociationByLabelAndRepoSyncType?: Maybe<LabelAssociation>;
  /** Reads and enables pagination through a set of `LabelAssociation`. */
  labelAssociations?: Maybe<LabelAssociationsConnection>;
  /** Reads a single `Label` using its globally unique `ID`. */
  labelByNodeId?: Maybe<Label>;
  /** Reads and enables pagination through a set of `Label`. */
  labels?: Maybe<LabelsConnection>;
  /** Reads and enables pagination through a set of `LatestRepoSync`. */
  latestRepoSyncs?: Maybe<LatestRepoSyncsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<ContainerImage | ContainerImageType | ContainerSync | ContainerSyncSchedule | GitCommit | GitCommitStat | GitFile | Job | JobLog | Label | Provider | Query | QueryHistory | Queue | Repo | RepoImport | RepoImportType | RepoSync | RepoSyncLog | RepoSyncLogType | RepoSyncQueue | RepoSyncQueueStatusType | RepoSyncType | RepoSyncTypeGroup | SavedExplore | SavedQuery | SchemaMigration | SchemaMigrationsHistory | ServiceAuthCredential | ServiceAuthCredentialType | SqlqMigration | SyncVariable | Vendor | VendorType | _MergestatExploreFileMetadatum | _MergestatExploreRepoMetadatum>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  provider?: Maybe<Provider>;
  providerByName?: Maybe<Provider>;
  /** Reads a single `Provider` using its globally unique `ID`. */
  providerByNodeId?: Maybe<Provider>;
  /** Reads and enables pagination through a set of `Provider`. */
  providers?: Maybe<ProvidersConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads and enables pagination through a set of `QueryHistory`. */
  queryHistories?: Maybe<QueryHistoriesConnection>;
  queryHistory?: Maybe<QueryHistory>;
  /** Reads a single `QueryHistory` using its globally unique `ID`. */
  queryHistoryByNodeId?: Maybe<QueryHistory>;
  queue?: Maybe<Queue>;
  /** Reads a single `Queue` using its globally unique `ID`. */
  queueByNodeId?: Maybe<Queue>;
  /** Reads and enables pagination through a set of `Queue`. */
  queues?: Maybe<QueuesConnection>;
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
  repoSyncTypeGroup?: Maybe<RepoSyncTypeGroup>;
  /** Reads a single `RepoSyncTypeGroup` using its globally unique `ID`. */
  repoSyncTypeGroupByNodeId?: Maybe<RepoSyncTypeGroup>;
  /** Reads and enables pagination through a set of `RepoSyncTypeGroup`. */
  repoSyncTypeGroups?: Maybe<RepoSyncTypeGroupsConnection>;
  /** Reads and enables pagination through a set of `RepoSyncType`. */
  repoSyncTypes?: Maybe<RepoSyncTypesConnection>;
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncs?: Maybe<RepoSyncsConnection>;
  /** Reads and enables pagination through a set of `Repo`. */
  repos?: Maybe<ReposConnection>;
  savedExplore?: Maybe<SavedExplore>;
  /** Reads a single `SavedExplore` using its globally unique `ID`. */
  savedExploreByNodeId?: Maybe<SavedExplore>;
  /** Reads and enables pagination through a set of `SavedExplore`. */
  savedExplores?: Maybe<SavedExploresConnection>;
  /** Reads and enables pagination through a set of `SavedQuery`. */
  savedQueries?: Maybe<SavedQueriesConnection>;
  savedQuery?: Maybe<SavedQuery>;
  /** Reads a single `SavedQuery` using its globally unique `ID`. */
  savedQueryByNodeId?: Maybe<SavedQuery>;
  /** Reads and enables pagination through a set of `SchemaIntrospection`. */
  schemaIntrospections?: Maybe<SchemaIntrospectionsConnection>;
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
  sqlqMigration?: Maybe<SqlqMigration>;
  sqlqMigrationByName?: Maybe<SqlqMigration>;
  /** Reads a single `SqlqMigration` using its globally unique `ID`. */
  sqlqMigrationByNodeId?: Maybe<SqlqMigration>;
  /** Reads and enables pagination through a set of `SqlqMigration`. */
  sqlqMigrations?: Maybe<SqlqMigrationsConnection>;
  syncVariable?: Maybe<SyncVariable>;
  /** Reads a single `SyncVariable` using its globally unique `ID`. */
  syncVariableByNodeId?: Maybe<SyncVariable>;
  /** Reads and enables pagination through a set of `SyncVariable`. */
  syncVariables?: Maybe<SyncVariablesConnection>;
  /** Reads and enables pagination through a set of `UserMgmtPgUser`. */
  userMgmtPgUsers?: Maybe<UserMgmtPgUsersConnection>;
  vendor?: Maybe<Vendor>;
  /** Reads a single `Vendor` using its globally unique `ID`. */
  vendorByNodeId?: Maybe<Vendor>;
  vendorType?: Maybe<VendorType>;
  /** Reads a single `VendorType` using its globally unique `ID`. */
  vendorTypeByNodeId?: Maybe<VendorType>;
  /** Reads and enables pagination through a set of `VendorType`. */
  vendorTypes?: Maybe<VendorTypesConnection>;
  /** Reads and enables pagination through a set of `Vendor`. */
  vendors?: Maybe<VendorsConnection>;
};


/** The root query type which gives access points into the data universe. */
export type Query_MergestatExploreFileMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<_MergestatExploreFileMetadatumCondition>;
  filter?: InputMaybe<_MergestatExploreFileMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<_MergestatExploreFileMetadataOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type Query_MergestatExploreFileMetadatumArgs = {
  path: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type Query_MergestatExploreFileMetadatumByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type Query_MergestatExploreRepoMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<_MergestatExploreRepoMetadatumCondition>;
  filter?: InputMaybe<_MergestatExploreRepoMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<_MergestatExploreRepoMetadataOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type Query_MergestatExploreRepoMetadatumArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type Query_MergestatExploreRepoMetadatumByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageByUrlArgs = {
  url: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageTypeArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageTypeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerImageTypeCondition>;
  filter?: InputMaybe<ContainerImageTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerImageTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerImageCondition>;
  filter?: InputMaybe<ContainerImageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerImagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncByRepoIdAndImageIdArgs = {
  imageId: Scalars['UUID'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncExecutionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncExecutionCondition>;
  filter?: InputMaybe<ContainerSyncExecutionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncExecutionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncScheduleArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncScheduleByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncScheduleBySyncIdArgs = {
  syncId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncSchedulesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncScheduleCondition>;
  filter?: InputMaybe<ContainerSyncScheduleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncSchedulesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerSyncsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncCondition>;
  filter?: InputMaybe<ContainerSyncFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryExecSqlArgs = {
  input: ExecSqlInput;
};


/** The root query type which gives access points into the data universe. */
export type QueryExploreUiArgs = {
  params?: InputMaybe<Scalars['JSON']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGetReposSyncsByStatusArgs = {
  repoIdParam?: InputMaybe<Scalars['UUID']>;
  statusParam?: InputMaybe<Scalars['String']>;
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
export type QueryJobArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobLogArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobLogByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobLogsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobLogCondition>;
  filter?: InputMaybe<JobLogFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLabelArgs = {
  label: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLabelAssociationByLabelAndRepoSyncTypeArgs = {
  label: Scalars['String'];
  repoSyncType: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLabelAssociationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LabelAssociationCondition>;
  filter?: InputMaybe<LabelAssociationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LabelAssociationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLabelByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLabelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LabelCondition>;
  filter?: InputMaybe<LabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LabelsOrderBy>>;
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
export type QueryProviderArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProviderByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProviderByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProvidersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProviderCondition>;
  filter?: InputMaybe<ProviderFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProvidersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryQueryHistoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<QueryHistoryCondition>;
  filter?: InputMaybe<QueryHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryHistoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryQueryHistoryArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQueryHistoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQueueArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQueueByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryQueuesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<QueueCondition>;
  filter?: InputMaybe<QueueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueuesOrderBy>>;
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
export type QueryRepoSyncTypeGroupArgs = {
  group: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncTypeGroupByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRepoSyncTypeGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncTypeGroupCondition>;
  filter?: InputMaybe<RepoSyncTypeGroupFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncTypeGroupsOrderBy>>;
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
export type QuerySavedExploreArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySavedExploreByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySavedExploresArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SavedExploreCondition>;
  filter?: InputMaybe<SavedExploreFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SavedExploresOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySavedQueriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SavedQueryCondition>;
  filter?: InputMaybe<SavedQueryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SavedQueriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySavedQueryArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySavedQueryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySchemaIntrospectionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SchemaIntrospectionCondition>;
  filter?: InputMaybe<SchemaIntrospectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SchemaIntrospectionsOrderBy>>;
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
export type QuerySqlqMigrationArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySqlqMigrationByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySqlqMigrationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySqlqMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SqlqMigrationCondition>;
  filter?: InputMaybe<SqlqMigrationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SqlqMigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySyncVariableArgs = {
  key: Scalars['String'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySyncVariableByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySyncVariablesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SyncVariableCondition>;
  filter?: InputMaybe<SyncVariableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SyncVariablesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserMgmtPgUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserMgmtPgUserCondition>;
  filter?: InputMaybe<UserMgmtPgUserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserMgmtPgUsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorTypeArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorTypeByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VendorTypeCondition>;
  filter?: InputMaybe<VendorTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VendorTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryVendorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VendorCondition>;
  filter?: InputMaybe<VendorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VendorsOrderBy>>;
};

/** A connection to a list of `QueryHistory` values. */
export type QueryHistoriesConnection = {
  /** A list of edges which contains the `QueryHistory` and cursor to aid in pagination. */
  edges: Array<QueryHistoriesEdge>;
  /** A list of `QueryHistory` objects. */
  nodes: Array<QueryHistory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `QueryHistory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `QueryHistory` edge in the connection. */
export type QueryHistoriesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `QueryHistory` at the end of the edge. */
  node: QueryHistory;
};

/** Methods to use when ordering `QueryHistory`. */
export enum QueryHistoriesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  QueryAsc = 'QUERY_ASC',
  QueryDesc = 'QUERY_DESC',
  RunAtAsc = 'RUN_AT_ASC',
  RunAtDesc = 'RUN_AT_DESC',
  RunByAsc = 'RUN_BY_ASC',
  RunByDesc = 'RUN_BY_DESC'
}

export type QueryHistory = Node & {
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  query: Scalars['String'];
  runAt?: Maybe<Scalars['Datetime']>;
  runBy: Scalars['String'];
};

/**
 * A condition to be used against `QueryHistory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type QueryHistoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `query` field. */
  query?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `runAt` field. */
  runAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `runBy` field. */
  runBy?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `QueryHistory` object types. All fields are combined with a logical ‘and.’ */
export type QueryHistoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<QueryHistoryFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<QueryHistoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<QueryHistoryFilter>>;
  /** Filter by the object’s `query` field. */
  query?: InputMaybe<StringFilter>;
  /** Filter by the object’s `runAt` field. */
  runAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `runBy` field. */
  runBy?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `QueryHistory` */
export type QueryHistoryInput = {
  id?: InputMaybe<Scalars['UUID']>;
  query: Scalars['String'];
  runAt?: InputMaybe<Scalars['Datetime']>;
  runBy: Scalars['String'];
};

/** Represents an update to a `QueryHistory`. Fields that are set will be updated. */
export type QueryHistoryPatch = {
  id?: InputMaybe<Scalars['UUID']>;
  query?: InputMaybe<Scalars['String']>;
  runAt?: InputMaybe<Scalars['Datetime']>;
  runBy?: InputMaybe<Scalars['String']>;
};

export type Queue = Node & {
  concurrency?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Datetime'];
  description?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Job`. */
  jobsByQueue: JobsConnection;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  priority: Scalars['Int'];
};


export type QueueJobsByQueueArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** A condition to be used against `Queue` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type QueueCondition = {
  /** Checks for equality with the object’s `concurrency` field. */
  concurrency?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
};

/** A filter to be used against `Queue` object types. All fields are combined with a logical ‘and.’ */
export type QueueFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<QueueFilter>>;
  /** Filter by the object’s `concurrency` field. */
  concurrency?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<QueueFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<QueueFilter>>;
  /** Filter by the object’s `priority` field. */
  priority?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `Queue` */
export type QueueInput = {
  concurrency?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `Queue`. Fields that are set will be updated. */
export type QueuePatch = {
  concurrency?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Queue` values. */
export type QueuesConnection = {
  /** A list of edges which contains the `Queue` and cursor to aid in pagination. */
  edges: Array<QueuesEdge>;
  /** A list of `Queue` objects. */
  nodes: Array<Queue>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Queue` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Queue` edge in the connection. */
export type QueuesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Queue` at the end of the edge. */
  node: Queue;
};

/** Methods to use when ordering `Queue`. */
export enum QueuesOrderBy {
  ConcurrencyAsc = 'CONCURRENCY_ASC',
  ConcurrencyDesc = 'CONCURRENCY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC'
}

/** All input for the `reap` mutation. */
export type ReapInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  queues?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** The output of our `reap` mutation. */
export type ReapPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** git repositories to track */
export type Repo = Node & {
  /** Reads and enables pagination through a set of `_MergestatExploreFileMetadatum`. */
  _mergestatExploreFileMetadata: _MergestatExploreFileMetadataConnection;
  /** Reads a single `_MergestatExploreRepoMetadatum` that is related to this `Repo`. */
  _mergestatExploreRepoMetadatum?: Maybe<_MergestatExploreRepoMetadatum>;
  /** Reads and enables pagination through a set of `ContainerSync`. */
  containerSyncs: ContainerSyncsConnection;
  /** timestamp of when the MergeStat repo entry was created */
  createdAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `GitCommitStat`. */
  gitCommitStats: GitCommitStatsConnection;
  /** Reads and enables pagination through a set of `GitCommit`. */
  gitCommits: GitCommitsConnection;
  /** Reads and enables pagination through a set of `GitFile`. */
  gitFiles: GitFilesConnection;
  /** MergeStat identifier for the repo */
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  provider: Scalars['UUID'];
  /** Reads a single `Provider` that is related to this `Repo`. */
  providerByProvider?: Maybe<Provider>;
  /** ref for the repo */
  ref?: Maybe<Scalars['String']>;
  /** URL for the repo */
  repo: Scalars['String'];
  /** Reads a single `RepoImport` that is related to this `Repo`. */
  repoImport?: Maybe<RepoImport>;
  /** foreign key for mergestat.repo_imports.id */
  repoImportId?: Maybe<Scalars['UUID']>;
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncs: RepoSyncsConnection;
  /** JSON settings for the repo */
  settings: Scalars['JSON'];
  stats?: Maybe<Scalars['JSON']>;
  /** Reads and enables pagination through a set of `SyncVariable`. */
  syncVariables: SyncVariablesConnection;
  /** array of tags for the repo for topics in GitHub as well as tags added in MergeStat */
  tags: Scalars['JSON'];
};


/** git repositories to track */
export type Repo_MergestatExploreFileMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<_MergestatExploreFileMetadatumCondition>;
  filter?: InputMaybe<_MergestatExploreFileMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<_MergestatExploreFileMetadataOrderBy>>;
};


/** git repositories to track */
export type RepoContainerSyncsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncCondition>;
  filter?: InputMaybe<ContainerSyncFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncsOrderBy>>;
};


/** git repositories to track */
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


/** git repositories to track */
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


/** git repositories to track */
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


/** git repositories to track */
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


/** git repositories to track */
export type RepoSyncVariablesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SyncVariableCondition>;
  filter?: InputMaybe<SyncVariableFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SyncVariablesOrderBy>>;
};

/** A condition to be used against `Repo` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RepoCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `provider` field. */
  provider?: InputMaybe<Scalars['UUID']>;
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
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoFilter>>;
  /** Filter by the object’s `provider` field. */
  provider?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `ref` field. */
  ref?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repo` field. */
  repo?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoImportId` field. */
  repoImportId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `settings` field. */
  settings?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `stats` field. */
  stats?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `tags` field. */
  tags?: InputMaybe<JsonFilter>;
};

/** Table for "dynamic" repo imports - regularly loading from a GitHub org for example */
export type RepoImport = Node & {
  createdAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  importError?: Maybe<Scalars['String']>;
  importInterval?: Maybe<Interval>;
  importStatus?: Maybe<Scalars['String']>;
  lastImport?: Maybe<Scalars['Datetime']>;
  lastImportStartedAt?: Maybe<Scalars['Datetime']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  provider: Scalars['UUID'];
  /** Reads a single `Provider` that is related to this `RepoImport`. */
  providerByProvider?: Maybe<Provider>;
  /** Reads and enables pagination through a set of `Repo`. */
  repos: ReposConnection;
  settings: Scalars['JSON'];
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
  /** Checks for equality with the object’s `importError` field. */
  importError?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `importInterval` field. */
  importInterval?: InputMaybe<IntervalInput>;
  /** Checks for equality with the object’s `importStatus` field. */
  importStatus?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastImport` field. */
  lastImport?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastImportStartedAt` field. */
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `provider` field. */
  provider?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `settings` field. */
  settings?: InputMaybe<Scalars['JSON']>;
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
  /** Filter by the object’s `importError` field. */
  importError?: InputMaybe<StringFilter>;
  /** Filter by the object’s `importInterval` field. */
  importInterval?: InputMaybe<IntervalFilter>;
  /** Filter by the object’s `importStatus` field. */
  importStatus?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastImport` field. */
  lastImport?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastImportStartedAt` field. */
  lastImportStartedAt?: InputMaybe<DatetimeFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoImportFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoImportFilter>>;
  /** Filter by the object’s `provider` field. */
  provider?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `settings` field. */
  settings?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `RepoImport` */
export type RepoImportInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  importError?: InputMaybe<Scalars['String']>;
  importInterval?: InputMaybe<IntervalInput>;
  importStatus?: InputMaybe<Scalars['String']>;
  lastImport?: InputMaybe<Scalars['Datetime']>;
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>;
  provider: Scalars['UUID'];
  settings?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `RepoImport`. Fields that are set will be updated. */
export type RepoImportPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  importError?: InputMaybe<Scalars['String']>;
  importInterval?: InputMaybe<IntervalInput>;
  importStatus?: InputMaybe<Scalars['String']>;
  lastImport?: InputMaybe<Scalars['Datetime']>;
  lastImportStartedAt?: InputMaybe<Scalars['Datetime']>;
  provider?: InputMaybe<Scalars['UUID']>;
  settings?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Types of repo imports */
export type RepoImportType = Node & {
  description: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  type: Scalars['String'];
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
  ImportErrorAsc = 'IMPORT_ERROR_ASC',
  ImportErrorDesc = 'IMPORT_ERROR_DESC',
  ImportIntervalAsc = 'IMPORT_INTERVAL_ASC',
  ImportIntervalDesc = 'IMPORT_INTERVAL_DESC',
  ImportStatusAsc = 'IMPORT_STATUS_ASC',
  ImportStatusDesc = 'IMPORT_STATUS_DESC',
  LastImportAsc = 'LAST_IMPORT_ASC',
  LastImportDesc = 'LAST_IMPORT_DESC',
  LastImportStartedAtAsc = 'LAST_IMPORT_STARTED_AT_ASC',
  LastImportStartedAtDesc = 'LAST_IMPORT_STARTED_AT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProviderAsc = 'PROVIDER_ASC',
  ProviderDesc = 'PROVIDER_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** An input for mutations affecting `Repo` */
export type RepoInput = {
  /** timestamp of when the MergeStat repo entry was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** MergeStat identifier for the repo */
  id?: InputMaybe<Scalars['UUID']>;
  provider: Scalars['UUID'];
  /** ref for the repo */
  ref?: InputMaybe<Scalars['String']>;
  /** URL for the repo */
  repo: Scalars['String'];
  /** foreign key for mergestat.repo_imports.id */
  repoImportId?: InputMaybe<Scalars['UUID']>;
  /** JSON settings for the repo */
  settings?: InputMaybe<Scalars['JSON']>;
  /** array of tags for the repo for topics in GitHub as well as tags added in MergeStat */
  tags?: InputMaybe<Scalars['JSON']>;
};

/** Represents an update to a `Repo`. Fields that are set will be updated. */
export type RepoPatch = {
  /** timestamp of when the MergeStat repo entry was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** MergeStat identifier for the repo */
  id?: InputMaybe<Scalars['UUID']>;
  provider?: InputMaybe<Scalars['UUID']>;
  /** ref for the repo */
  ref?: InputMaybe<Scalars['String']>;
  /** URL for the repo */
  repo?: InputMaybe<Scalars['String']>;
  /** foreign key for mergestat.repo_imports.id */
  repoImportId?: InputMaybe<Scalars['UUID']>;
  /** JSON settings for the repo */
  settings?: InputMaybe<Scalars['JSON']>;
  /** array of tags for the repo for topics in GitHub as well as tags added in MergeStat */
  tags?: InputMaybe<Scalars['JSON']>;
};

export type RepoSync = Node & {
  id: Scalars['UUID'];
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSync`. */
  lastCompletedRepoSyncQueue?: Maybe<RepoSyncQueue>;
  lastCompletedRepoSyncQueueId?: Maybe<Scalars['BigInt']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  priority: Scalars['Int'];
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
  /** Checks for equality with the object’s `lastCompletedRepoSyncQueueId` field. */
  lastCompletedRepoSyncQueueId?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
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
  /** Filter by the object’s `lastCompletedRepoSyncQueueId` field. */
  lastCompletedRepoSyncQueueId?: InputMaybe<BigIntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncFilter>>;
  /** Filter by the object’s `priority` field. */
  priority?: InputMaybe<IntFilter>;
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
  lastCompletedRepoSyncQueueId?: InputMaybe<Scalars['BigInt']>;
  priority?: InputMaybe<Scalars['Int']>;
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
  lastCompletedRepoSyncQueueId?: InputMaybe<Scalars['BigInt']>;
  priority?: InputMaybe<Scalars['Int']>;
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
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncQueue`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncsByLastCompletedRepoSyncQueueId: RepoSyncsConnection;
  startedAt?: Maybe<Scalars['Datetime']>;
  status: Scalars['String'];
  typeGroup: Scalars['String'];
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


export type RepoSyncQueueRepoSyncsByLastCompletedRepoSyncQueueIdArgs = {
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
  /** Checks for equality with the object’s `typeGroup` field. */
  typeGroup?: InputMaybe<Scalars['String']>;
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
  /** Filter by the object’s `typeGroup` field. */
  typeGroup?: InputMaybe<StringFilter>;
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
  typeGroup?: InputMaybe<Scalars['String']>;
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
  typeGroup?: InputMaybe<Scalars['String']>;
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
  StatusDesc = 'STATUS_DESC',
  TypeGroupAsc = 'TYPE_GROUP_ASC',
  TypeGroupDesc = 'TYPE_GROUP_DESC'
}

export type RepoSyncType = Node & {
  description?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `LabelAssociation`. */
  labelAssociationsByRepoSyncType: LabelAssociationsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  priority: Scalars['Int'];
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncType`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
  /** Reads and enables pagination through a set of `RepoSync`. */
  repoSyncsBySyncType: RepoSyncsConnection;
  shortName: Scalars['String'];
  type: Scalars['String'];
  typeGroup: Scalars['String'];
};


export type RepoSyncTypeLabelAssociationsByRepoSyncTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<LabelAssociationCondition>;
  filter?: InputMaybe<LabelAssociationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LabelAssociationsOrderBy>>;
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
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `shortName` field. */
  shortName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `typeGroup` field. */
  typeGroup?: InputMaybe<Scalars['String']>;
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
  /** Filter by the object’s `priority` field. */
  priority?: InputMaybe<IntFilter>;
  /** Filter by the object’s `shortName` field. */
  shortName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `typeGroup` field. */
  typeGroup?: InputMaybe<StringFilter>;
};

export type RepoSyncTypeGroup = Node & {
  concurrentSyncs?: Maybe<Scalars['Int']>;
  group: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `RepoSyncQueue`. */
  repoSyncQueuesByTypeGroup: RepoSyncQueuesConnection;
  /** Reads and enables pagination through a set of `RepoSyncType`. */
  repoSyncTypesByTypeGroup: RepoSyncTypesConnection;
};


export type RepoSyncTypeGroupRepoSyncQueuesByTypeGroupArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncQueueCondition>;
  filter?: InputMaybe<RepoSyncQueueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncQueuesOrderBy>>;
};


export type RepoSyncTypeGroupRepoSyncTypesByTypeGroupArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RepoSyncTypeCondition>;
  filter?: InputMaybe<RepoSyncTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};

/**
 * A condition to be used against `RepoSyncTypeGroup` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RepoSyncTypeGroupCondition = {
  /** Checks for equality with the object’s `concurrentSyncs` field. */
  concurrentSyncs?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `group` field. */
  group?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `RepoSyncTypeGroup` object types. All fields are combined with a logical ‘and.’ */
export type RepoSyncTypeGroupFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RepoSyncTypeGroupFilter>>;
  /** Filter by the object’s `concurrentSyncs` field. */
  concurrentSyncs?: InputMaybe<IntFilter>;
  /** Filter by the object’s `group` field. */
  group?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RepoSyncTypeGroupFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RepoSyncTypeGroupFilter>>;
};

/** An input for mutations affecting `RepoSyncTypeGroup` */
export type RepoSyncTypeGroupInput = {
  concurrentSyncs?: InputMaybe<Scalars['Int']>;
  group: Scalars['String'];
};

/** Represents an update to a `RepoSyncTypeGroup`. Fields that are set will be updated. */
export type RepoSyncTypeGroupPatch = {
  concurrentSyncs?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `RepoSyncTypeGroup` values. */
export type RepoSyncTypeGroupsConnection = {
  /** A list of edges which contains the `RepoSyncTypeGroup` and cursor to aid in pagination. */
  edges: Array<RepoSyncTypeGroupsEdge>;
  /** A list of `RepoSyncTypeGroup` objects. */
  nodes: Array<RepoSyncTypeGroup>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RepoSyncTypeGroup` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RepoSyncTypeGroup` edge in the connection. */
export type RepoSyncTypeGroupsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RepoSyncTypeGroup` at the end of the edge. */
  node: RepoSyncTypeGroup;
};

/** Methods to use when ordering `RepoSyncTypeGroup`. */
export enum RepoSyncTypeGroupsOrderBy {
  ConcurrentSyncsAsc = 'CONCURRENT_SYNCS_ASC',
  ConcurrentSyncsDesc = 'CONCURRENT_SYNCS_DESC',
  GroupAsc = 'GROUP_ASC',
  GroupDesc = 'GROUP_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `RepoSyncType` */
export type RepoSyncTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  shortName?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  typeGroup?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `RepoSyncType`. Fields that are set will be updated. */
export type RepoSyncTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Int']>;
  shortName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  typeGroup?: InputMaybe<Scalars['String']>;
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
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
  ShortNameAsc = 'SHORT_NAME_ASC',
  ShortNameDesc = 'SHORT_NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypeGroupAsc = 'TYPE_GROUP_ASC',
  TypeGroupDesc = 'TYPE_GROUP_DESC'
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
  LastCompletedRepoSyncQueueIdAsc = 'LAST_COMPLETED_REPO_SYNC_QUEUE_ID_ASC',
  LastCompletedRepoSyncQueueIdDesc = 'LAST_COMPLETED_REPO_SYNC_QUEUE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
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
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProviderAsc = 'PROVIDER_ASC',
  ProviderDesc = 'PROVIDER_DESC',
  RefAsc = 'REF_ASC',
  RefDesc = 'REF_DESC',
  RepoAsc = 'REPO_ASC',
  RepoDesc = 'REPO_DESC',
  RepoImportIdAsc = 'REPO_IMPORT_ID_ASC',
  RepoImportIdDesc = 'REPO_IMPORT_ID_DESC',
  SettingsAsc = 'SETTINGS_ASC',
  SettingsDesc = 'SETTINGS_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC'
}

/** Table to save explores */
export type SavedExplore = Node & {
  /** timestamp when explore was created */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** explore creator */
  createdBy?: Maybe<Scalars['String']>;
  /** explore description */
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** explore metadata */
  metadata?: Maybe<Scalars['JSON']>;
  /** explore name */
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `SavedExplore` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SavedExploreCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `SavedExplore` object types. All fields are combined with a logical ‘and.’ */
export type SavedExploreFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SavedExploreFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdBy` field. */
  createdBy?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `metadata` field. */
  metadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SavedExploreFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SavedExploreFilter>>;
};

/** An input for mutations affecting `SavedExplore` */
export type SavedExploreInput = {
  /** timestamp when explore was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** explore creator */
  createdBy?: InputMaybe<Scalars['String']>;
  /** explore description */
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  /** explore metadata */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** explore name */
  name?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `SavedExplore`. Fields that are set will be updated. */
export type SavedExplorePatch = {
  /** timestamp when explore was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** explore creator */
  createdBy?: InputMaybe<Scalars['String']>;
  /** explore description */
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  /** explore metadata */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** explore name */
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `SavedExplore` values. */
export type SavedExploresConnection = {
  /** A list of edges which contains the `SavedExplore` and cursor to aid in pagination. */
  edges: Array<SavedExploresEdge>;
  /** A list of `SavedExplore` objects. */
  nodes: Array<SavedExplore>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SavedExplore` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SavedExplore` edge in the connection. */
export type SavedExploresEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SavedExplore` at the end of the edge. */
  node: SavedExplore;
};

/** Methods to use when ordering `SavedExplore`. */
export enum SavedExploresOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataDesc = 'METADATA_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `SavedQuery` values. */
export type SavedQueriesConnection = {
  /** A list of edges which contains the `SavedQuery` and cursor to aid in pagination. */
  edges: Array<SavedQueriesEdge>;
  /** A list of `SavedQuery` objects. */
  nodes: Array<SavedQuery>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SavedQuery` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SavedQuery` edge in the connection. */
export type SavedQueriesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SavedQuery` at the end of the edge. */
  node: SavedQuery;
};

/** Methods to use when ordering `SavedQuery`. */
export enum SavedQueriesOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedByAsc = 'CREATED_BY_ASC',
  CreatedByDesc = 'CREATED_BY_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataDesc = 'METADATA_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SqlAsc = 'SQL_ASC',
  SqlDesc = 'SQL_DESC'
}

/** Table to save queries */
export type SavedQuery = Node & {
  /** timestamp when query was created */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** query creator */
  createdBy?: Maybe<Scalars['String']>;
  /** query description */
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** query metadata */
  metadata?: Maybe<Scalars['JSON']>;
  /** query name */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** query sql */
  sql: Scalars['String'];
};

/**
 * A condition to be used against `SavedQuery` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SavedQueryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdBy` field. */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `sql` field. */
  sql?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `SavedQuery` object types. All fields are combined with a logical ‘and.’ */
export type SavedQueryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SavedQueryFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdBy` field. */
  createdBy?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `metadata` field. */
  metadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SavedQueryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SavedQueryFilter>>;
  /** Filter by the object’s `sql` field. */
  sql?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `SavedQuery` */
export type SavedQueryInput = {
  /** timestamp when query was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** query creator */
  createdBy?: InputMaybe<Scalars['String']>;
  /** query description */
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  /** query metadata */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** query name */
  name: Scalars['String'];
  /** query sql */
  sql: Scalars['String'];
};

/** Represents an update to a `SavedQuery`. Fields that are set will be updated. */
export type SavedQueryPatch = {
  /** timestamp when query was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** query creator */
  createdBy?: InputMaybe<Scalars['String']>;
  /** query description */
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  /** query metadata */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** query name */
  name?: InputMaybe<Scalars['String']>;
  /** query sql */
  sql?: InputMaybe<Scalars['String']>;
};

export type SchemaIntrospection = {
  columnDescription?: Maybe<Scalars['String']>;
  columnName?: Maybe<Scalars['SqlIdentifier']>;
  dataType?: Maybe<Scalars['CharacterData']>;
  isNullable?: Maybe<Scalars['YesOrNo']>;
  ordinalPosition?: Maybe<Scalars['CardinalNumber']>;
  schema?: Maybe<Scalars['SqlIdentifier']>;
  tableName?: Maybe<Scalars['SqlIdentifier']>;
  tableType?: Maybe<Scalars['CharacterData']>;
  udtName?: Maybe<Scalars['SqlIdentifier']>;
};

/**
 * A condition to be used against `SchemaIntrospection` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type SchemaIntrospectionCondition = {
  /** Checks for equality with the object’s `columnDescription` field. */
  columnDescription?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `columnName` field. */
  columnName?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Checks for equality with the object’s `dataType` field. */
  dataType?: InputMaybe<Scalars['CharacterData']>;
  /** Checks for equality with the object’s `isNullable` field. */
  isNullable?: InputMaybe<Scalars['YesOrNo']>;
  /** Checks for equality with the object’s `ordinalPosition` field. */
  ordinalPosition?: InputMaybe<Scalars['CardinalNumber']>;
  /** Checks for equality with the object’s `schema` field. */
  schema?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Checks for equality with the object’s `tableName` field. */
  tableName?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Checks for equality with the object’s `tableType` field. */
  tableType?: InputMaybe<Scalars['CharacterData']>;
  /** Checks for equality with the object’s `udtName` field. */
  udtName?: InputMaybe<Scalars['SqlIdentifier']>;
};

/** A filter to be used against `SchemaIntrospection` object types. All fields are combined with a logical ‘and.’ */
export type SchemaIntrospectionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SchemaIntrospectionFilter>>;
  /** Filter by the object’s `columnDescription` field. */
  columnDescription?: InputMaybe<StringFilter>;
  /** Filter by the object’s `columnName` field. */
  columnName?: InputMaybe<SqlIdentifierFilter>;
  /** Filter by the object’s `dataType` field. */
  dataType?: InputMaybe<CharacterDataFilter>;
  /** Filter by the object’s `isNullable` field. */
  isNullable?: InputMaybe<YesOrNoFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SchemaIntrospectionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SchemaIntrospectionFilter>>;
  /** Filter by the object’s `ordinalPosition` field. */
  ordinalPosition?: InputMaybe<CardinalNumberFilter>;
  /** Filter by the object’s `schema` field. */
  schema?: InputMaybe<SqlIdentifierFilter>;
  /** Filter by the object’s `tableName` field. */
  tableName?: InputMaybe<SqlIdentifierFilter>;
  /** Filter by the object’s `tableType` field. */
  tableType?: InputMaybe<CharacterDataFilter>;
  /** Filter by the object’s `udtName` field. */
  udtName?: InputMaybe<SqlIdentifierFilter>;
};

/** A connection to a list of `SchemaIntrospection` values. */
export type SchemaIntrospectionsConnection = {
  /** A list of edges which contains the `SchemaIntrospection` and cursor to aid in pagination. */
  edges: Array<SchemaIntrospectionsEdge>;
  /** A list of `SchemaIntrospection` objects. */
  nodes: Array<SchemaIntrospection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SchemaIntrospection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SchemaIntrospection` edge in the connection. */
export type SchemaIntrospectionsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SchemaIntrospection` at the end of the edge. */
  node: SchemaIntrospection;
};

/** Methods to use when ordering `SchemaIntrospection`. */
export enum SchemaIntrospectionsOrderBy {
  ColumnDescriptionAsc = 'COLUMN_DESCRIPTION_ASC',
  ColumnDescriptionDesc = 'COLUMN_DESCRIPTION_DESC',
  ColumnNameAsc = 'COLUMN_NAME_ASC',
  ColumnNameDesc = 'COLUMN_NAME_DESC',
  DataTypeAsc = 'DATA_TYPE_ASC',
  DataTypeDesc = 'DATA_TYPE_DESC',
  IsNullableAsc = 'IS_NULLABLE_ASC',
  IsNullableDesc = 'IS_NULLABLE_DESC',
  Natural = 'NATURAL',
  OrdinalPositionAsc = 'ORDINAL_POSITION_ASC',
  OrdinalPositionDesc = 'ORDINAL_POSITION_DESC',
  SchemaAsc = 'SCHEMA_ASC',
  SchemaDesc = 'SCHEMA_DESC',
  TableNameAsc = 'TABLE_NAME_ASC',
  TableNameDesc = 'TABLE_NAME_DESC',
  TableTypeAsc = 'TABLE_TYPE_ASC',
  TableTypeDesc = 'TABLE_TYPE_DESC',
  UdtNameAsc = 'UDT_NAME_ASC',
  UdtNameDesc = 'UDT_NAME_DESC'
}

/** MergeStat internal table to track schema migrations */
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

/** MergeStat internal table to track schema migrations history */
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
  isDefault?: Maybe<Scalars['Boolean']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  provider: Scalars['UUID'];
  /** Reads a single `Provider` that is related to this `ServiceAuthCredential`. */
  providerByProvider?: Maybe<Provider>;
  /** Reads a single `ServiceAuthCredentialType` that is related to this `ServiceAuthCredential`. */
  serviceAuthCredentialTypeByType?: Maybe<ServiceAuthCredentialType>;
  type: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  username?: Maybe<Scalars['String']>;
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
  /** Checks for equality with the object’s `isDefault` field. */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `provider` field. */
  provider?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `ServiceAuthCredential` object types. All fields are combined with a logical ‘and.’ */
export type ServiceAuthCredentialFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ServiceAuthCredentialFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `isDefault` field. */
  isDefault?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ServiceAuthCredentialFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ServiceAuthCredentialFilter>>;
  /** Filter by the object’s `provider` field. */
  provider?: InputMaybe<UuidFilter>;
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
  isDefault?: InputMaybe<Scalars['Boolean']>;
  provider: Scalars['UUID'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `ServiceAuthCredential`. Fields that are set will be updated. */
export type ServiceAuthCredentialPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  credentials?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<Scalars['UUID']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  username?: InputMaybe<Scalars['String']>;
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
  IsDefaultAsc = 'IS_DEFAULT_ASC',
  IsDefaultDesc = 'IS_DEFAULT_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProviderAsc = 'PROVIDER_ASC',
  ProviderDesc = 'PROVIDER_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC'
}

/** All input for the `setSyncJobStatus` mutation. */
export type SetSyncJobStatusInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  newStatus?: InputMaybe<Scalars['String']>;
  repoSyncQueueId?: InputMaybe<Scalars['BigInt']>;
};

/** The output of our `setSyncJobStatus` mutation. */
export type SetSyncJobStatusPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  uuid?: Maybe<Scalars['UUID']>;
};

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

/** All input for the `simpleSqlqCleanup` mutation. */
export type SimpleSqlqCleanupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  daysToRetainParam?: InputMaybe<Scalars['Int']>;
};

/** The output of our `simpleSqlqCleanup` mutation. */
export type SimpleSqlqCleanupPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** A filter to be used against SqlIdentifier fields. All fields are combined with a logical ‘and.’ */
export type SqlIdentifierFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['SqlIdentifier']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['SqlIdentifier']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['SqlIdentifier']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['SqlIdentifier']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['SqlIdentifier']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['SqlIdentifier']>;
};

export type SqlqMigration = Node & {
  appliedOn?: Maybe<Scalars['Datetime']>;
  id: Scalars['BigInt'];
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  version?: Maybe<Scalars['Int']>;
};

/**
 * A condition to be used against `SqlqMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SqlqMigrationCondition = {
  /** Checks for equality with the object’s `appliedOn` field. */
  appliedOn?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['Int']>;
};

/** A filter to be used against `SqlqMigration` object types. All fields are combined with a logical ‘and.’ */
export type SqlqMigrationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SqlqMigrationFilter>>;
  /** Filter by the object’s `appliedOn` field. */
  appliedOn?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SqlqMigrationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SqlqMigrationFilter>>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `SqlqMigration` */
export type SqlqMigrationInput = {
  appliedOn?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `SqlqMigration`. Fields that are set will be updated. */
export type SqlqMigrationPatch = {
  appliedOn?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `SqlqMigration` values. */
export type SqlqMigrationsConnection = {
  /** A list of edges which contains the `SqlqMigration` and cursor to aid in pagination. */
  edges: Array<SqlqMigrationsEdge>;
  /** A list of `SqlqMigration` objects. */
  nodes: Array<SqlqMigration>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SqlqMigration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SqlqMigration` edge in the connection. */
export type SqlqMigrationsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SqlqMigration` at the end of the edge. */
  node: SqlqMigration;
};

/** Methods to use when ordering `SqlqMigration`. */
export enum SqlqMigrationsOrderBy {
  AppliedOnAsc = 'APPLIED_ON_ASC',
  AppliedOnDesc = 'APPLIED_ON_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

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

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Any array item is equal to the specified value. */
  anyEqualTo?: InputMaybe<Scalars['String']>;
  /** Any array item is greater than the specified value. */
  anyGreaterThan?: InputMaybe<Scalars['String']>;
  /** Any array item is greater than or equal to the specified value. */
  anyGreaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Any array item is less than the specified value. */
  anyLessThan?: InputMaybe<Scalars['String']>;
  /** Any array item is less than or equal to the specified value. */
  anyLessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Any array item is not equal to the specified value. */
  anyNotEqualTo?: InputMaybe<Scalars['String']>;
  /** Contained by the specified list of values. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Overlaps the specified list of values. */
  overlaps?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** All input for the `syncNow` mutation. */
export type SyncNowInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  containerSyncId?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `syncNow` mutation. */
export type SyncNowPayload = {
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type SyncVariable = Node & {
  key: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `SyncVariable`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  value?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `SyncVariable` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SyncVariableCondition = {
  /** Checks for equality with the object’s `key` field. */
  key?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `SyncVariable` object types. All fields are combined with a logical ‘and.’ */
export type SyncVariableFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SyncVariableFilter>>;
  /** Filter by the object’s `key` field. */
  key?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SyncVariableFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SyncVariableFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `SyncVariable` */
export type SyncVariableInput = {
  key: Scalars['String'];
  repoId: Scalars['UUID'];
  value?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `SyncVariable`. Fields that are set will be updated. */
export type SyncVariablePatch = {
  key?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  value?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `SyncVariable` values. */
export type SyncVariablesConnection = {
  /** A list of edges which contains the `SyncVariable` and cursor to aid in pagination. */
  edges: Array<SyncVariablesEdge>;
  /** A list of `SyncVariable` objects. */
  nodes: Array<SyncVariable>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SyncVariable` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SyncVariable` edge in the connection. */
export type SyncVariablesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SyncVariable` at the end of the edge. */
  node: SyncVariable;
};

/** Methods to use when ordering `SyncVariable`. */
export enum SyncVariablesOrderBy {
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

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

/** All input for the `updateContainerImageByName` mutation. */
export type UpdateContainerImageByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `ContainerImage` being updated. */
  patch: ContainerImagePatch;
};

/** All input for the `updateContainerImageByNodeId` mutation. */
export type UpdateContainerImageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerImage` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ContainerImage` being updated. */
  patch: ContainerImagePatch;
};

/** All input for the `updateContainerImageByUrl` mutation. */
export type UpdateContainerImageByUrlInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ContainerImage` being updated. */
  patch: ContainerImagePatch;
  url: Scalars['String'];
};

/** All input for the `updateContainerImage` mutation. */
export type UpdateContainerImageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `ContainerImage` being updated. */
  patch: ContainerImagePatch;
};

/** The output of our update `ContainerImage` mutation. */
export type UpdateContainerImagePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerImage` that was updated by this mutation. */
  containerImage?: Maybe<ContainerImage>;
  /** An edge for our `ContainerImage`. May be used by Relay 1. */
  containerImageEdge?: Maybe<ContainerImagesEdge>;
  /** Reads a single `ContainerImageType` that is related to this `ContainerImage`. */
  containerImageTypeByType?: Maybe<ContainerImageType>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `ContainerImage` mutation. */
export type UpdateContainerImagePayloadContainerImageEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerImagesOrderBy>>;
};

/** All input for the `updateContainerImageTypeByNodeId` mutation. */
export type UpdateContainerImageTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerImageType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ContainerImageType` being updated. */
  patch: ContainerImageTypePatch;
};

/** All input for the `updateContainerImageType` mutation. */
export type UpdateContainerImageTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `ContainerImageType` being updated. */
  patch: ContainerImageTypePatch;
};

/** The output of our update `ContainerImageType` mutation. */
export type UpdateContainerImageTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerImageType` that was updated by this mutation. */
  containerImageType?: Maybe<ContainerImageType>;
  /** An edge for our `ContainerImageType`. May be used by Relay 1. */
  containerImageTypeEdge?: Maybe<ContainerImageTypesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `ContainerImageType` mutation. */
export type UpdateContainerImageTypePayloadContainerImageTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerImageTypesOrderBy>>;
};

/** All input for the `updateContainerSyncByNodeId` mutation. */
export type UpdateContainerSyncByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerSync` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ContainerSync` being updated. */
  patch: ContainerSyncPatch;
};

/** All input for the `updateContainerSyncByRepoIdAndImageId` mutation. */
export type UpdateContainerSyncByRepoIdAndImageIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  imageId: Scalars['UUID'];
  /** An object where the defined keys will be set on the `ContainerSync` being updated. */
  patch: ContainerSyncPatch;
  repoId: Scalars['UUID'];
};

/** All input for the `updateContainerSync` mutation. */
export type UpdateContainerSyncInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `ContainerSync` being updated. */
  patch: ContainerSyncPatch;
};

/** The output of our update `ContainerSync` mutation. */
export type UpdateContainerSyncPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerSync` that was updated by this mutation. */
  containerSync?: Maybe<ContainerSync>;
  /** An edge for our `ContainerSync`. May be used by Relay 1. */
  containerSyncEdge?: Maybe<ContainerSyncsEdge>;
  /** Reads a single `ContainerImage` that is related to this `ContainerSync`. */
  image?: Maybe<ContainerImage>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `ContainerSync`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `ContainerSync` mutation. */
export type UpdateContainerSyncPayloadContainerSyncEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerSyncsOrderBy>>;
};

/** All input for the `updateContainerSyncScheduleByNodeId` mutation. */
export type UpdateContainerSyncScheduleByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `ContainerSyncSchedule` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `ContainerSyncSchedule` being updated. */
  patch: ContainerSyncSchedulePatch;
};

/** All input for the `updateContainerSyncScheduleBySyncId` mutation. */
export type UpdateContainerSyncScheduleBySyncIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `ContainerSyncSchedule` being updated. */
  patch: ContainerSyncSchedulePatch;
  syncId: Scalars['UUID'];
};

/** All input for the `updateContainerSyncSchedule` mutation. */
export type UpdateContainerSyncScheduleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `ContainerSyncSchedule` being updated. */
  patch: ContainerSyncSchedulePatch;
};

/** The output of our update `ContainerSyncSchedule` mutation. */
export type UpdateContainerSyncSchedulePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `ContainerSyncSchedule` that was updated by this mutation. */
  containerSyncSchedule?: Maybe<ContainerSyncSchedule>;
  /** An edge for our `ContainerSyncSchedule`. May be used by Relay 1. */
  containerSyncScheduleEdge?: Maybe<ContainerSyncSchedulesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `ContainerSync` that is related to this `ContainerSyncSchedule`. */
  sync?: Maybe<ContainerSync>;
};


/** The output of our update `ContainerSyncSchedule` mutation. */
export type UpdateContainerSyncSchedulePayloadContainerSyncScheduleEdgeArgs = {
  orderBy?: InputMaybe<Array<ContainerSyncSchedulesOrderBy>>;
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
  /** hash of the commit */
  hash: Scalars['String'];
  /** An object where the defined keys will be set on the `GitCommit` being updated. */
  patch: GitCommitPatch;
  /** foreign key for public.repos.id */
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
  /** hash of the commit */
  commitHash: Scalars['String'];
  /** path of the file the modification was made in */
  filePath: Scalars['String'];
  /** new file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link) */
  newFileMode: Scalars['String'];
  /** An object where the defined keys will be set on the `GitCommitStat` being updated. */
  patch: GitCommitStatPatch;
  /** foreign key for public.repos.id */
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
  /** path of the file */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
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

/** All input for the `updateJobByNodeId` mutation. */
export type UpdateJobByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Job` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Job` being updated. */
  patch: JobPatch;
};

/** All input for the `updateJob` mutation. */
export type UpdateJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Job` being updated. */
  patch: JobPatch;
};

/** All input for the `updateJobLogByNodeId` mutation. */
export type UpdateJobLogByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `JobLog` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `JobLog` being updated. */
  patch: JobLogPatch;
};

/** All input for the `updateJobLog` mutation. */
export type UpdateJobLogInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `JobLog` being updated. */
  patch: JobLogPatch;
};

/** The output of our update `JobLog` mutation. */
export type UpdateJobLogPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Job` that is related to this `JobLog`. */
  jobByJob?: Maybe<Job>;
  /** The `JobLog` that was updated by this mutation. */
  jobLog?: Maybe<JobLog>;
  /** An edge for our `JobLog`. May be used by Relay 1. */
  jobLogEdge?: Maybe<JobLogsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `JobLog` mutation. */
export type UpdateJobLogPayloadJobLogEdgeArgs = {
  orderBy?: InputMaybe<Array<JobLogsOrderBy>>;
};

/** The output of our update `Job` mutation. */
export type UpdateJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Job` that was updated by this mutation. */
  job?: Maybe<Job>;
  /** An edge for our `Job`. May be used by Relay 1. */
  jobEdge?: Maybe<JobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Queue` that is related to this `Job`. */
  queueByQueue?: Maybe<Queue>;
};


/** The output of our update `Job` mutation. */
export type UpdateJobPayloadJobEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** All input for the `updateLabelAssociationByLabelAndRepoSyncType` mutation. */
export type UpdateLabelAssociationByLabelAndRepoSyncTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  /** An object where the defined keys will be set on the `LabelAssociation` being updated. */
  patch: LabelAssociationPatch;
  repoSyncType: Scalars['String'];
};

/** The output of our update `LabelAssociation` mutation. */
export type UpdateLabelAssociationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `LabelAssociation` that was updated by this mutation. */
  labelAssociation?: Maybe<LabelAssociation>;
  /** An edge for our `LabelAssociation`. May be used by Relay 1. */
  labelAssociationEdge?: Maybe<LabelAssociationsEdge>;
  /** Reads a single `Label` that is related to this `LabelAssociation`. */
  labelByLabel?: Maybe<Label>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `RepoSyncType` that is related to this `LabelAssociation`. */
  repoSyncTypeByRepoSyncType?: Maybe<RepoSyncType>;
};


/** The output of our update `LabelAssociation` mutation. */
export type UpdateLabelAssociationPayloadLabelAssociationEdgeArgs = {
  orderBy?: InputMaybe<Array<LabelAssociationsOrderBy>>;
};

/** All input for the `updateLabelByNodeId` mutation. */
export type UpdateLabelByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Label` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Label` being updated. */
  patch: LabelPatch;
};

/** All input for the `updateLabel` mutation. */
export type UpdateLabelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  /** An object where the defined keys will be set on the `Label` being updated. */
  patch: LabelPatch;
};

/** The output of our update `Label` mutation. */
export type UpdateLabelPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Label` that was updated by this mutation. */
  label?: Maybe<Label>;
  /** An edge for our `Label`. May be used by Relay 1. */
  labelEdge?: Maybe<LabelsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Label` mutation. */
export type UpdateLabelPayloadLabelEdgeArgs = {
  orderBy?: InputMaybe<Array<LabelsOrderBy>>;
};

/** All input for the `updateMergestatExploreFileMetadatumByNodeId` mutation. */
export type UpdateMergestatExploreFileMetadatumByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `_MergestatExploreFileMetadatum` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `_MergestatExploreFileMetadatum` being updated. */
  patch: _MergestatExploreFileMetadatumPatch;
};

/** All input for the `updateMergestatExploreFileMetadatum` mutation. */
export type UpdateMergestatExploreFileMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `_MergestatExploreFileMetadatum` being updated. */
  patch: _MergestatExploreFileMetadatumPatch;
  /** path to the file */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `_MergestatExploreFileMetadatum` mutation. */
export type UpdateMergestatExploreFileMetadatumPayload = {
  /** The `_MergestatExploreFileMetadatum` that was updated by this mutation. */
  _mergestatExploreFileMetadatum?: Maybe<_MergestatExploreFileMetadatum>;
  /** An edge for our `_MergestatExploreFileMetadatum`. May be used by Relay 1. */
  _mergestatExploreFileMetadatumEdge?: Maybe<_MergestatExploreFileMetadataEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `_MergestatExploreFileMetadatum`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `_MergestatExploreFileMetadatum` mutation. */
export type UpdateMergestatExploreFileMetadatumPayload_MergestatExploreFileMetadatumEdgeArgs = {
  orderBy?: InputMaybe<Array<_MergestatExploreFileMetadataOrderBy>>;
};

/** All input for the `updateMergestatExploreRepoMetadatumByNodeId` mutation. */
export type UpdateMergestatExploreRepoMetadatumByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `_MergestatExploreRepoMetadatum` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `_MergestatExploreRepoMetadatum` being updated. */
  patch: _MergestatExploreRepoMetadatumPatch;
};

/** All input for the `updateMergestatExploreRepoMetadatum` mutation. */
export type UpdateMergestatExploreRepoMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `_MergestatExploreRepoMetadatum` being updated. */
  patch: _MergestatExploreRepoMetadatumPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `_MergestatExploreRepoMetadatum` mutation. */
export type UpdateMergestatExploreRepoMetadatumPayload = {
  /** The `_MergestatExploreRepoMetadatum` that was updated by this mutation. */
  _mergestatExploreRepoMetadatum?: Maybe<_MergestatExploreRepoMetadatum>;
  /** An edge for our `_MergestatExploreRepoMetadatum`. May be used by Relay 1. */
  _mergestatExploreRepoMetadatumEdge?: Maybe<_MergestatExploreRepoMetadataEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `_MergestatExploreRepoMetadatum`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `_MergestatExploreRepoMetadatum` mutation. */
export type UpdateMergestatExploreRepoMetadatumPayload_MergestatExploreRepoMetadatumEdgeArgs = {
  orderBy?: InputMaybe<Array<_MergestatExploreRepoMetadataOrderBy>>;
};

/** All input for the `updateProviderByName` mutation. */
export type UpdateProviderByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Provider` being updated. */
  patch: ProviderPatch;
};

/** All input for the `updateProviderByNodeId` mutation. */
export type UpdateProviderByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Provider` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Provider` being updated. */
  patch: ProviderPatch;
};

/** All input for the `updateProvider` mutation. */
export type UpdateProviderInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Provider` being updated. */
  patch: ProviderPatch;
};

/** The output of our update `Provider` mutation. */
export type UpdateProviderPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Provider` that was updated by this mutation. */
  provider?: Maybe<Provider>;
  /** An edge for our `Provider`. May be used by Relay 1. */
  providerEdge?: Maybe<ProvidersEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vendor` that is related to this `Provider`. */
  vendorByVendor?: Maybe<Vendor>;
};


/** The output of our update `Provider` mutation. */
export type UpdateProviderPayloadProviderEdgeArgs = {
  orderBy?: InputMaybe<Array<ProvidersOrderBy>>;
};

/** All input for the `updateQueryHistoryByNodeId` mutation. */
export type UpdateQueryHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `QueryHistory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `QueryHistory` being updated. */
  patch: QueryHistoryPatch;
};

/** All input for the `updateQueryHistory` mutation. */
export type UpdateQueryHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `QueryHistory` being updated. */
  patch: QueryHistoryPatch;
};

/** The output of our update `QueryHistory` mutation. */
export type UpdateQueryHistoryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `QueryHistory` that was updated by this mutation. */
  queryHistory?: Maybe<QueryHistory>;
  /** An edge for our `QueryHistory`. May be used by Relay 1. */
  queryHistoryEdge?: Maybe<QueryHistoriesEdge>;
};


/** The output of our update `QueryHistory` mutation. */
export type UpdateQueryHistoryPayloadQueryHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<QueryHistoriesOrderBy>>;
};

/** All input for the `updateQueueByNodeId` mutation. */
export type UpdateQueueByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Queue` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Queue` being updated. */
  patch: QueuePatch;
};

/** All input for the `updateQueue` mutation. */
export type UpdateQueueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Queue` being updated. */
  patch: QueuePatch;
};

/** The output of our update `Queue` mutation. */
export type UpdateQueuePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Queue` that was updated by this mutation. */
  queue?: Maybe<Queue>;
  /** An edge for our `Queue`. May be used by Relay 1. */
  queueEdge?: Maybe<QueuesEdge>;
};


/** The output of our update `Queue` mutation. */
export type UpdateQueuePayloadQueueEdgeArgs = {
  orderBy?: InputMaybe<Array<QueuesOrderBy>>;
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

/** All input for the `updateRepoImportDefaultContainerImages` mutation. */
export type UpdateRepoImportDefaultContainerImagesInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  defaultContainerImageIds?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  repoImportId?: InputMaybe<Scalars['UUID']>;
};

/** The output of our `updateRepoImportDefaultContainerImages` mutation. */
export type UpdateRepoImportDefaultContainerImagesPayload = {
  boolean?: Maybe<Scalars['Boolean']>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
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
  /** Reads a single `Provider` that is related to this `RepoImport`. */
  providerByProvider?: Maybe<Provider>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoImport` that was updated by this mutation. */
  repoImport?: Maybe<RepoImport>;
  /** An edge for our `RepoImport`. May be used by Relay 1. */
  repoImportEdge?: Maybe<RepoImportsEdge>;
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
  /** MergeStat identifier for the repo */
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
  /** Reads a single `Provider` that is related to this `Repo`. */
  providerByProvider?: Maybe<Provider>;
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
  /** Reads a single `RepoSyncQueue` that is related to this `RepoSync`. */
  lastCompletedRepoSyncQueue?: Maybe<RepoSyncQueue>;
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
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncQueue`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
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

/** All input for the `updateRepoSyncTypeGroupByNodeId` mutation. */
export type UpdateRepoSyncTypeGroupByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `RepoSyncTypeGroup` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `RepoSyncTypeGroup` being updated. */
  patch: RepoSyncTypeGroupPatch;
};

/** All input for the `updateRepoSyncTypeGroup` mutation. */
export type UpdateRepoSyncTypeGroupInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  group: Scalars['String'];
  /** An object where the defined keys will be set on the `RepoSyncTypeGroup` being updated. */
  patch: RepoSyncTypeGroupPatch;
};

/** The output of our update `RepoSyncTypeGroup` mutation. */
export type UpdateRepoSyncTypeGroupPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `RepoSyncTypeGroup` that was updated by this mutation. */
  repoSyncTypeGroup?: Maybe<RepoSyncTypeGroup>;
  /** An edge for our `RepoSyncTypeGroup`. May be used by Relay 1. */
  repoSyncTypeGroupEdge?: Maybe<RepoSyncTypeGroupsEdge>;
};


/** The output of our update `RepoSyncTypeGroup` mutation. */
export type UpdateRepoSyncTypeGroupPayloadRepoSyncTypeGroupEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypeGroupsOrderBy>>;
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
  /** Reads a single `RepoSyncTypeGroup` that is related to this `RepoSyncType`. */
  repoSyncTypeGroupByTypeGroup?: Maybe<RepoSyncTypeGroup>;
};


/** The output of our update `RepoSyncType` mutation. */
export type UpdateRepoSyncTypePayloadRepoSyncTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<RepoSyncTypesOrderBy>>;
};

/** All input for the `updateSavedExploreByNodeId` mutation. */
export type UpdateSavedExploreByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SavedExplore` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SavedExplore` being updated. */
  patch: SavedExplorePatch;
};

/** All input for the `updateSavedExplore` mutation. */
export type UpdateSavedExploreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `SavedExplore` being updated. */
  patch: SavedExplorePatch;
};

/** The output of our update `SavedExplore` mutation. */
export type UpdateSavedExplorePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SavedExplore` that was updated by this mutation. */
  savedExplore?: Maybe<SavedExplore>;
  /** An edge for our `SavedExplore`. May be used by Relay 1. */
  savedExploreEdge?: Maybe<SavedExploresEdge>;
};


/** The output of our update `SavedExplore` mutation. */
export type UpdateSavedExplorePayloadSavedExploreEdgeArgs = {
  orderBy?: InputMaybe<Array<SavedExploresOrderBy>>;
};

/** All input for the `updateSavedQueryByNodeId` mutation. */
export type UpdateSavedQueryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SavedQuery` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SavedQuery` being updated. */
  patch: SavedQueryPatch;
};

/** All input for the `updateSavedQuery` mutation. */
export type UpdateSavedQueryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `SavedQuery` being updated. */
  patch: SavedQueryPatch;
};

/** The output of our update `SavedQuery` mutation. */
export type UpdateSavedQueryPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SavedQuery` that was updated by this mutation. */
  savedQuery?: Maybe<SavedQuery>;
  /** An edge for our `SavedQuery`. May be used by Relay 1. */
  savedQueryEdge?: Maybe<SavedQueriesEdge>;
};


/** The output of our update `SavedQuery` mutation. */
export type UpdateSavedQueryPayloadSavedQueryEdgeArgs = {
  orderBy?: InputMaybe<Array<SavedQueriesOrderBy>>;
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
  /** Reads a single `Provider` that is related to this `ServiceAuthCredential`. */
  providerByProvider?: Maybe<Provider>;
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

/** All input for the `updateSqlqMigrationByName` mutation. */
export type UpdateSqlqMigrationByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `SqlqMigration` being updated. */
  patch: SqlqMigrationPatch;
};

/** All input for the `updateSqlqMigrationByNodeId` mutation. */
export type UpdateSqlqMigrationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SqlqMigration` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SqlqMigration` being updated. */
  patch: SqlqMigrationPatch;
};

/** All input for the `updateSqlqMigration` mutation. */
export type UpdateSqlqMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `SqlqMigration` being updated. */
  patch: SqlqMigrationPatch;
};

/** The output of our update `SqlqMigration` mutation. */
export type UpdateSqlqMigrationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SqlqMigration` that was updated by this mutation. */
  sqlqMigration?: Maybe<SqlqMigration>;
  /** An edge for our `SqlqMigration`. May be used by Relay 1. */
  sqlqMigrationEdge?: Maybe<SqlqMigrationsEdge>;
};


/** The output of our update `SqlqMigration` mutation. */
export type UpdateSqlqMigrationPayloadSqlqMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<SqlqMigrationsOrderBy>>;
};

/** All input for the `updateSyncVariableByNodeId` mutation. */
export type UpdateSyncVariableByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SyncVariable` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SyncVariable` being updated. */
  patch: SyncVariablePatch;
};

/** All input for the `updateSyncVariable` mutation. */
export type UpdateSyncVariableInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  /** An object where the defined keys will be set on the `SyncVariable` being updated. */
  patch: SyncVariablePatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `SyncVariable` mutation. */
export type UpdateSyncVariablePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `SyncVariable`. */
  repo?: Maybe<Repo>;
  /** The `SyncVariable` that was updated by this mutation. */
  syncVariable?: Maybe<SyncVariable>;
  /** An edge for our `SyncVariable`. May be used by Relay 1. */
  syncVariableEdge?: Maybe<SyncVariablesEdge>;
};


/** The output of our update `SyncVariable` mutation. */
export type UpdateSyncVariablePayloadSyncVariableEdgeArgs = {
  orderBy?: InputMaybe<Array<SyncVariablesOrderBy>>;
};

/** All input for the `updateVendorByNodeId` mutation. */
export type UpdateVendorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vendor` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Vendor` being updated. */
  patch: VendorPatch;
};

/** All input for the `updateVendor` mutation. */
export type UpdateVendorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Vendor` being updated. */
  patch: VendorPatch;
};

/** The output of our update `Vendor` mutation. */
export type UpdateVendorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Vendor` that was updated by this mutation. */
  vendor?: Maybe<Vendor>;
  /** An edge for our `Vendor`. May be used by Relay 1. */
  vendorEdge?: Maybe<VendorsEdge>;
  /** Reads a single `VendorType` that is related to this `Vendor`. */
  vendorTypeByType?: Maybe<VendorType>;
};


/** The output of our update `Vendor` mutation. */
export type UpdateVendorPayloadVendorEdgeArgs = {
  orderBy?: InputMaybe<Array<VendorsOrderBy>>;
};

/** All input for the `updateVendorTypeByNodeId` mutation. */
export type UpdateVendorTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `VendorType` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `VendorType` being updated. */
  patch: VendorTypePatch;
};

/** All input for the `updateVendorType` mutation. */
export type UpdateVendorTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `VendorType` being updated. */
  patch: VendorTypePatch;
};

/** The output of our update `VendorType` mutation. */
export type UpdateVendorTypePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `VendorType` that was updated by this mutation. */
  vendorType?: Maybe<VendorType>;
  /** An edge for our `VendorType`. May be used by Relay 1. */
  vendorTypeEdge?: Maybe<VendorTypesEdge>;
};


/** The output of our update `VendorType` mutation. */
export type UpdateVendorTypePayloadVendorTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<VendorTypesOrderBy>>;
};

/** All input for the `userMgmtAddUser` mutation. */
export type UserMgmtAddUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Scalars['String'];
  username: Scalars['String'];
};

/** The output of our `userMgmtAddUser` mutation. */
export type UserMgmtAddUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type UserMgmtPgUser = {
  memberof?: Maybe<Array<Maybe<Scalars['String']>>>;
  rolbypassrls?: Maybe<Scalars['Boolean']>;
  rolcanlogin?: Maybe<Scalars['Boolean']>;
  rolconnlimit?: Maybe<Scalars['Int']>;
  rolcreatedb?: Maybe<Scalars['Boolean']>;
  rolcreaterole?: Maybe<Scalars['Boolean']>;
  rolinherit?: Maybe<Scalars['Boolean']>;
  rolname?: Maybe<Scalars['String']>;
  rolreplication?: Maybe<Scalars['Boolean']>;
  rolsuper?: Maybe<Scalars['Boolean']>;
  rolvaliduntil?: Maybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `UserMgmtPgUser` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type UserMgmtPgUserCondition = {
  /** Checks for equality with the object’s `memberof` field. */
  memberof?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Checks for equality with the object’s `rolbypassrls` field. */
  rolbypassrls?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `rolcanlogin` field. */
  rolcanlogin?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `rolconnlimit` field. */
  rolconnlimit?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `rolcreatedb` field. */
  rolcreatedb?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `rolcreaterole` field. */
  rolcreaterole?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `rolinherit` field. */
  rolinherit?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `rolname` field. */
  rolname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `rolreplication` field. */
  rolreplication?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `rolsuper` field. */
  rolsuper?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `rolvaliduntil` field. */
  rolvaliduntil?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `UserMgmtPgUser` object types. All fields are combined with a logical ‘and.’ */
export type UserMgmtPgUserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserMgmtPgUserFilter>>;
  /** Filter by the object’s `memberof` field. */
  memberof?: InputMaybe<StringListFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserMgmtPgUserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserMgmtPgUserFilter>>;
  /** Filter by the object’s `rolbypassrls` field. */
  rolbypassrls?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rolcanlogin` field. */
  rolcanlogin?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rolconnlimit` field. */
  rolconnlimit?: InputMaybe<IntFilter>;
  /** Filter by the object’s `rolcreatedb` field. */
  rolcreatedb?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rolcreaterole` field. */
  rolcreaterole?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rolinherit` field. */
  rolinherit?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rolname` field. */
  rolname?: InputMaybe<StringFilter>;
  /** Filter by the object’s `rolreplication` field. */
  rolreplication?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rolsuper` field. */
  rolsuper?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `rolvaliduntil` field. */
  rolvaliduntil?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `UserMgmtPgUser` values. */
export type UserMgmtPgUsersConnection = {
  /** A list of edges which contains the `UserMgmtPgUser` and cursor to aid in pagination. */
  edges: Array<UserMgmtPgUsersEdge>;
  /** A list of `UserMgmtPgUser` objects. */
  nodes: Array<UserMgmtPgUser>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserMgmtPgUser` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `UserMgmtPgUser` edge in the connection. */
export type UserMgmtPgUsersEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserMgmtPgUser` at the end of the edge. */
  node: UserMgmtPgUser;
};

/** Methods to use when ordering `UserMgmtPgUser`. */
export enum UserMgmtPgUsersOrderBy {
  MemberofAsc = 'MEMBEROF_ASC',
  MemberofDesc = 'MEMBEROF_DESC',
  Natural = 'NATURAL',
  RolbypassrlsAsc = 'ROLBYPASSRLS_ASC',
  RolbypassrlsDesc = 'ROLBYPASSRLS_DESC',
  RolcanloginAsc = 'ROLCANLOGIN_ASC',
  RolcanloginDesc = 'ROLCANLOGIN_DESC',
  RolconnlimitAsc = 'ROLCONNLIMIT_ASC',
  RolconnlimitDesc = 'ROLCONNLIMIT_DESC',
  RolcreatedbAsc = 'ROLCREATEDB_ASC',
  RolcreatedbDesc = 'ROLCREATEDB_DESC',
  RolcreateroleAsc = 'ROLCREATEROLE_ASC',
  RolcreateroleDesc = 'ROLCREATEROLE_DESC',
  RolinheritAsc = 'ROLINHERIT_ASC',
  RolinheritDesc = 'ROLINHERIT_DESC',
  RolnameAsc = 'ROLNAME_ASC',
  RolnameDesc = 'ROLNAME_DESC',
  RolreplicationAsc = 'ROLREPLICATION_ASC',
  RolreplicationDesc = 'ROLREPLICATION_DESC',
  RolsuperAsc = 'ROLSUPER_ASC',
  RolsuperDesc = 'ROLSUPER_DESC',
  RolvaliduntilAsc = 'ROLVALIDUNTIL_ASC',
  RolvaliduntilDesc = 'ROLVALIDUNTIL_DESC'
}

/** All input for the `userMgmtRemoveUser` mutation. */
export type UserMgmtRemoveUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

/** The output of our `userMgmtRemoveUser` mutation. */
export type UserMgmtRemoveUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `userMgmtSetUserRole` mutation. */
export type UserMgmtSetUserRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
  username: Scalars['String'];
};

/** The output of our `userMgmtSetUserRole` mutation. */
export type UserMgmtSetUserRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `userMgmtUpdateUserPassword` mutation. */
export type UserMgmtUpdateUserPasswordInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

/** The output of our `userMgmtUpdateUserPassword` mutation. */
export type UserMgmtUpdateUserPasswordPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  integer?: Maybe<Scalars['Int']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type Vendor = Node & {
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Provider`. */
  providersByVendor: ProvidersConnection;
  type: Scalars['String'];
  /** Reads a single `VendorType` that is related to this `Vendor`. */
  vendorTypeByType?: Maybe<VendorType>;
};


export type VendorProvidersByVendorArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProviderCondition>;
  filter?: InputMaybe<ProviderFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProvidersOrderBy>>;
};

/** A condition to be used against `Vendor` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VendorCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `displayName` field. */
  displayName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Vendor` object types. All fields are combined with a logical ‘and.’ */
export type VendorFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<VendorFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `displayName` field. */
  displayName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<VendorFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<VendorFilter>>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Vendor` */
export type VendorInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

/** Represents an update to a `Vendor`. Fields that are set will be updated. */
export type VendorPatch = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type VendorType = Node & {
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Vendor`. */
  vendorsByType: VendorsConnection;
};


export type VendorTypeVendorsByTypeArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VendorCondition>;
  filter?: InputMaybe<VendorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VendorsOrderBy>>;
};

/**
 * A condition to be used against `VendorType` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type VendorTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `displayName` field. */
  displayName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `VendorType` object types. All fields are combined with a logical ‘and.’ */
export type VendorTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<VendorTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `displayName` field. */
  displayName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<VendorTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<VendorTypeFilter>>;
};

/** An input for mutations affecting `VendorType` */
export type VendorTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  displayName: Scalars['String'];
  name: Scalars['String'];
};

/** Represents an update to a `VendorType`. Fields that are set will be updated. */
export type VendorTypePatch = {
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `VendorType` values. */
export type VendorTypesConnection = {
  /** A list of edges which contains the `VendorType` and cursor to aid in pagination. */
  edges: Array<VendorTypesEdge>;
  /** A list of `VendorType` objects. */
  nodes: Array<VendorType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `VendorType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `VendorType` edge in the connection. */
export type VendorTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `VendorType` at the end of the edge. */
  node: VendorType;
};

/** Methods to use when ordering `VendorType`. */
export enum VendorTypesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DisplayNameAsc = 'DISPLAY_NAME_ASC',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Vendor` values. */
export type VendorsConnection = {
  /** A list of edges which contains the `Vendor` and cursor to aid in pagination. */
  edges: Array<VendorsEdge>;
  /** A list of `Vendor` objects. */
  nodes: Array<Vendor>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Vendor` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Vendor` edge in the connection. */
export type VendorsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Vendor` at the end of the edge. */
  node: Vendor;
};

/** Methods to use when ordering `Vendor`. */
export enum VendorsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DisplayNameAsc = 'DISPLAY_NAME_ASC',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

/** A filter to be used against YesOrNo fields. All fields are combined with a logical ‘and.’ */
export type YesOrNoFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['YesOrNo']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['YesOrNo']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['YesOrNo']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['YesOrNo']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['YesOrNo']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['YesOrNo']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['YesOrNo']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['YesOrNo']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['YesOrNo']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['YesOrNo']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['YesOrNo']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['YesOrNo']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['YesOrNo']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['YesOrNo']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['YesOrNo']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['YesOrNo']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['YesOrNo']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['YesOrNo']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['YesOrNo']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['YesOrNo']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['YesOrNo']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['YesOrNo']>;
};

/** A connection to a list of `_MergestatExploreFileMetadatum` values. */
export type _MergestatExploreFileMetadataConnection = {
  /** A list of edges which contains the `_MergestatExploreFileMetadatum` and cursor to aid in pagination. */
  edges: Array<_MergestatExploreFileMetadataEdge>;
  /** A list of `_MergestatExploreFileMetadatum` objects. */
  nodes: Array<_MergestatExploreFileMetadatum>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `_MergestatExploreFileMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `_MergestatExploreFileMetadatum` edge in the connection. */
export type _MergestatExploreFileMetadataEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `_MergestatExploreFileMetadatum` at the end of the edge. */
  node: _MergestatExploreFileMetadatum;
};

/** Methods to use when ordering `_MergestatExploreFileMetadatum`. */
export enum _MergestatExploreFileMetadataOrderBy {
  LastCommitAuthorEmailAsc = 'LAST_COMMIT_AUTHOR_EMAIL_ASC',
  LastCommitAuthorEmailDesc = 'LAST_COMMIT_AUTHOR_EMAIL_DESC',
  LastCommitAuthorNameAsc = 'LAST_COMMIT_AUTHOR_NAME_ASC',
  LastCommitAuthorNameDesc = 'LAST_COMMIT_AUTHOR_NAME_DESC',
  LastCommitAuthorWhenAsc = 'LAST_COMMIT_AUTHOR_WHEN_ASC',
  LastCommitAuthorWhenDesc = 'LAST_COMMIT_AUTHOR_WHEN_DESC',
  LastCommitCommitterEmailAsc = 'LAST_COMMIT_COMMITTER_EMAIL_ASC',
  LastCommitCommitterEmailDesc = 'LAST_COMMIT_COMMITTER_EMAIL_DESC',
  LastCommitCommitterNameAsc = 'LAST_COMMIT_COMMITTER_NAME_ASC',
  LastCommitCommitterNameDesc = 'LAST_COMMIT_COMMITTER_NAME_DESC',
  LastCommitCommitterWhenAsc = 'LAST_COMMIT_COMMITTER_WHEN_ASC',
  LastCommitCommitterWhenDesc = 'LAST_COMMIT_COMMITTER_WHEN_DESC',
  LastCommitHashAsc = 'LAST_COMMIT_HASH_ASC',
  LastCommitHashDesc = 'LAST_COMMIT_HASH_DESC',
  LastCommitMessageAsc = 'LAST_COMMIT_MESSAGE_ASC',
  LastCommitMessageDesc = 'LAST_COMMIT_MESSAGE_DESC',
  LastCommitParentsAsc = 'LAST_COMMIT_PARENTS_ASC',
  LastCommitParentsDesc = 'LAST_COMMIT_PARENTS_DESC',
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

/** file metadata for explore experience */
export type _MergestatExploreFileMetadatum = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** email of the author of the modification */
  lastCommitAuthorEmail?: Maybe<Scalars['String']>;
  /** name of the author of the the modification */
  lastCommitAuthorName?: Maybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  lastCommitAuthorWhen?: Maybe<Scalars['Datetime']>;
  /** email of the author who committed the modification */
  lastCommitCommitterEmail?: Maybe<Scalars['String']>;
  /** name of the author who committed the modification */
  lastCommitCommitterName?: Maybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  lastCommitCommitterWhen?: Maybe<Scalars['Datetime']>;
  /** hash based reference to last commit */
  lastCommitHash?: Maybe<Scalars['String']>;
  /** message of the commit */
  lastCommitMessage?: Maybe<Scalars['String']>;
  /** the number of parents of the commit */
  lastCommitParents?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** path to the file */
  path: Scalars['String'];
  /** Reads a single `Repo` that is related to this `_MergestatExploreFileMetadatum`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/**
 * A condition to be used against `_MergestatExploreFileMetadatum` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type _MergestatExploreFileMetadatumCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastCommitAuthorEmail` field. */
  lastCommitAuthorEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitAuthorName` field. */
  lastCommitAuthorName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitAuthorWhen` field. */
  lastCommitAuthorWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastCommitCommitterEmail` field. */
  lastCommitCommitterEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitCommitterName` field. */
  lastCommitCommitterName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitCommitterWhen` field. */
  lastCommitCommitterWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastCommitHash` field. */
  lastCommitHash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitMessage` field. */
  lastCommitMessage?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitParents` field. */
  lastCommitParents?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `_MergestatExploreFileMetadatum` object types. All fields are combined with a logical ‘and.’ */
export type _MergestatExploreFileMetadatumFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<_MergestatExploreFileMetadatumFilter>>;
  /** Filter by the object’s `lastCommitAuthorEmail` field. */
  lastCommitAuthorEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitAuthorName` field. */
  lastCommitAuthorName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitAuthorWhen` field. */
  lastCommitAuthorWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastCommitCommitterEmail` field. */
  lastCommitCommitterEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitCommitterName` field. */
  lastCommitCommitterName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitCommitterWhen` field. */
  lastCommitCommitterWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastCommitHash` field. */
  lastCommitHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitMessage` field. */
  lastCommitMessage?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitParents` field. */
  lastCommitParents?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<_MergestatExploreFileMetadatumFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<_MergestatExploreFileMetadatumFilter>>;
  /** Filter by the object’s `path` field. */
  path?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `_MergestatExploreFileMetadatum` */
export type _MergestatExploreFileMetadatumInput = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author of the modification */
  lastCommitAuthorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  lastCommitAuthorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  lastCommitAuthorWhen?: InputMaybe<Scalars['Datetime']>;
  /** email of the author who committed the modification */
  lastCommitCommitterEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  lastCommitCommitterName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  lastCommitCommitterWhen?: InputMaybe<Scalars['Datetime']>;
  /** hash based reference to last commit */
  lastCommitHash?: InputMaybe<Scalars['String']>;
  /** message of the commit */
  lastCommitMessage?: InputMaybe<Scalars['String']>;
  /** the number of parents of the commit */
  lastCommitParents?: InputMaybe<Scalars['Int']>;
  /** path to the file */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** Represents an update to a `_MergestatExploreFileMetadatum`. Fields that are set will be updated. */
export type _MergestatExploreFileMetadatumPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author of the modification */
  lastCommitAuthorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  lastCommitAuthorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  lastCommitAuthorWhen?: InputMaybe<Scalars['Datetime']>;
  /** email of the author who committed the modification */
  lastCommitCommitterEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  lastCommitCommitterName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  lastCommitCommitterWhen?: InputMaybe<Scalars['Datetime']>;
  /** hash based reference to last commit */
  lastCommitHash?: InputMaybe<Scalars['String']>;
  /** message of the commit */
  lastCommitMessage?: InputMaybe<Scalars['String']>;
  /** the number of parents of the commit */
  lastCommitParents?: InputMaybe<Scalars['Int']>;
  /** path to the file */
  path?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `_MergestatExploreRepoMetadatum` values. */
export type _MergestatExploreRepoMetadataConnection = {
  /** A list of edges which contains the `_MergestatExploreRepoMetadatum` and cursor to aid in pagination. */
  edges: Array<_MergestatExploreRepoMetadataEdge>;
  /** A list of `_MergestatExploreRepoMetadatum` objects. */
  nodes: Array<_MergestatExploreRepoMetadatum>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `_MergestatExploreRepoMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `_MergestatExploreRepoMetadatum` edge in the connection. */
export type _MergestatExploreRepoMetadataEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `_MergestatExploreRepoMetadatum` at the end of the edge. */
  node: _MergestatExploreRepoMetadatum;
};

/** Methods to use when ordering `_MergestatExploreRepoMetadatum`. */
export enum _MergestatExploreRepoMetadataOrderBy {
  LastCommitAuthorEmailAsc = 'LAST_COMMIT_AUTHOR_EMAIL_ASC',
  LastCommitAuthorEmailDesc = 'LAST_COMMIT_AUTHOR_EMAIL_DESC',
  LastCommitAuthorNameAsc = 'LAST_COMMIT_AUTHOR_NAME_ASC',
  LastCommitAuthorNameDesc = 'LAST_COMMIT_AUTHOR_NAME_DESC',
  LastCommitAuthorWhenAsc = 'LAST_COMMIT_AUTHOR_WHEN_ASC',
  LastCommitAuthorWhenDesc = 'LAST_COMMIT_AUTHOR_WHEN_DESC',
  LastCommitCommitterEmailAsc = 'LAST_COMMIT_COMMITTER_EMAIL_ASC',
  LastCommitCommitterEmailDesc = 'LAST_COMMIT_COMMITTER_EMAIL_DESC',
  LastCommitCommitterNameAsc = 'LAST_COMMIT_COMMITTER_NAME_ASC',
  LastCommitCommitterNameDesc = 'LAST_COMMIT_COMMITTER_NAME_DESC',
  LastCommitCommitterWhenAsc = 'LAST_COMMIT_COMMITTER_WHEN_ASC',
  LastCommitCommitterWhenDesc = 'LAST_COMMIT_COMMITTER_WHEN_DESC',
  LastCommitHashAsc = 'LAST_COMMIT_HASH_ASC',
  LastCommitHashDesc = 'LAST_COMMIT_HASH_DESC',
  LastCommitMessageAsc = 'LAST_COMMIT_MESSAGE_ASC',
  LastCommitMessageDesc = 'LAST_COMMIT_MESSAGE_DESC',
  LastCommitParentsAsc = 'LAST_COMMIT_PARENTS_ASC',
  LastCommitParentsDesc = 'LAST_COMMIT_PARENTS_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** repo metadata for explore experience */
export type _MergestatExploreRepoMetadatum = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** email of the author of the modification */
  lastCommitAuthorEmail?: Maybe<Scalars['String']>;
  /** name of the author of the the modification */
  lastCommitAuthorName?: Maybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  lastCommitAuthorWhen?: Maybe<Scalars['Datetime']>;
  /** email of the author who committed the modification */
  lastCommitCommitterEmail?: Maybe<Scalars['String']>;
  /** name of the author who committed the modification */
  lastCommitCommitterName?: Maybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  lastCommitCommitterWhen?: Maybe<Scalars['Datetime']>;
  /** hash based reference to last commit */
  lastCommitHash?: Maybe<Scalars['String']>;
  /** message of the commit */
  lastCommitMessage?: Maybe<Scalars['String']>;
  /** the number of parents of the commit */
  lastCommitParents?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `_MergestatExploreRepoMetadatum`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/**
 * A condition to be used against `_MergestatExploreRepoMetadatum` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type _MergestatExploreRepoMetadatumCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastCommitAuthorEmail` field. */
  lastCommitAuthorEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitAuthorName` field. */
  lastCommitAuthorName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitAuthorWhen` field. */
  lastCommitAuthorWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastCommitCommitterEmail` field. */
  lastCommitCommitterEmail?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitCommitterName` field. */
  lastCommitCommitterName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitCommitterWhen` field. */
  lastCommitCommitterWhen?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastCommitHash` field. */
  lastCommitHash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitMessage` field. */
  lastCommitMessage?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastCommitParents` field. */
  lastCommitParents?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `_MergestatExploreRepoMetadatum` object types. All fields are combined with a logical ‘and.’ */
export type _MergestatExploreRepoMetadatumFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<_MergestatExploreRepoMetadatumFilter>>;
  /** Filter by the object’s `lastCommitAuthorEmail` field. */
  lastCommitAuthorEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitAuthorName` field. */
  lastCommitAuthorName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitAuthorWhen` field. */
  lastCommitAuthorWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastCommitCommitterEmail` field. */
  lastCommitCommitterEmail?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitCommitterName` field. */
  lastCommitCommitterName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitCommitterWhen` field. */
  lastCommitCommitterWhen?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `lastCommitHash` field. */
  lastCommitHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitMessage` field. */
  lastCommitMessage?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lastCommitParents` field. */
  lastCommitParents?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<_MergestatExploreRepoMetadatumFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<_MergestatExploreRepoMetadatumFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `_MergestatExploreRepoMetadatum` */
export type _MergestatExploreRepoMetadatumInput = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author of the modification */
  lastCommitAuthorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  lastCommitAuthorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  lastCommitAuthorWhen?: InputMaybe<Scalars['Datetime']>;
  /** email of the author who committed the modification */
  lastCommitCommitterEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  lastCommitCommitterName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  lastCommitCommitterWhen?: InputMaybe<Scalars['Datetime']>;
  /** hash based reference to last commit */
  lastCommitHash?: InputMaybe<Scalars['String']>;
  /** message of the commit */
  lastCommitMessage?: InputMaybe<Scalars['String']>;
  /** the number of parents of the commit */
  lastCommitParents?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** Represents an update to a `_MergestatExploreRepoMetadatum`. Fields that are set will be updated. */
export type _MergestatExploreRepoMetadatumPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author of the modification */
  lastCommitAuthorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  lastCommitAuthorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  lastCommitAuthorWhen?: InputMaybe<Scalars['Datetime']>;
  /** email of the author who committed the modification */
  lastCommitCommitterEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  lastCommitCommitterName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  lastCommitCommitterWhen?: InputMaybe<Scalars['Datetime']>;
  /** hash based reference to last commit */
  lastCommitHash?: InputMaybe<Scalars['String']>;
  /** message of the commit */
  lastCommitMessage?: InputMaybe<Scalars['String']>;
  /** the number of parents of the commit */
  lastCommitParents?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
};

export type AddRepoMutationVariables = Exact<{
  repo: Scalars['String'];
  idProvider: Scalars['UUID'];
}>;


export type AddRepoMutation = { createRepo?: { repo?: { id: any, repo: string } | null } | null };

export type AddRepoImportMutationVariables = Exact<{
  settings: Scalars['JSON'];
  provider: Scalars['UUID'];
}>;


export type AddRepoImportMutation = { createRepoImport?: { repoImport?: { id: any, settings: any } | null } | null };

export type UpdateRepoImportMutationVariables = Exact<{
  id: Scalars['UUID'];
  settings: Scalars['JSON'];
}>;


export type UpdateRepoImportMutation = { updateRepoImport?: { repoImport?: { id: any, settings: any } | null } | null };

export type AddRepoImportContainerMutationVariables = Exact<{
  providerId: Scalars['UUID'];
  importType: Scalars['String'];
  importTypeName: Scalars['String'];
  defaultContainerImageIds: Array<InputMaybe<Scalars['UUID']>> | InputMaybe<Scalars['UUID']>;
  baseUrl: Scalars['String'];
}>;


export type AddRepoImportContainerMutation = { addRepoImport?: { boolean?: boolean | null } | null };

export type UpdateRepoImportContainerMutationVariables = Exact<{
  repoImportId: Scalars['UUID'];
  defaultContainerImageIds: Array<InputMaybe<Scalars['UUID']>> | InputMaybe<Scalars['UUID']>;
}>;


export type UpdateRepoImportContainerMutation = { updateRepoImportDefaultContainerImages?: { boolean?: boolean | null } | null };

export type AddTokenMutationVariables = Exact<{
  provider: Scalars['UUID'];
  token: Scalars['String'];
  type: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
}>;


export type AddTokenMutation = { addToken?: boolean | null };

export type DeleteCredentialMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteCredentialMutation = { deleteServiceAuthCredential?: { deletedServiceAuthCredentialNodeId?: string | null } | null };

export type AddSavedExploreMutationVariables = Exact<{
  createdBy: Scalars['String'];
  createdAt: Scalars['Datetime'];
  name: Scalars['String'];
  description: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
}>;


export type AddSavedExploreMutation = { createSavedExplore?: { savedExplore?: { id: any, name?: string | null } | null } | null };

export type UpdateSavedExploreMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
}>;


export type UpdateSavedExploreMutation = { updateSavedExplore?: { savedExplore?: { id: any, name?: string | null, description?: string | null, metadata?: any | null } | null } | null };

export type RemoveSavedExploreMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveSavedExploreMutation = { deleteSavedExplore?: { deletedSavedExploreNodeId?: string | null } | null };

export type AddGitSourceMutationVariables = Exact<{
  name: Scalars['String'];
  settings: Scalars['JSON'];
  vendor: Scalars['String'];
}>;


export type AddGitSourceMutation = { createProvider?: { provider?: { id: any, name: string } | null } | null };

export type UpdateGitSourceMutationVariables = Exact<{
  idProvider: Scalars['UUID'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type UpdateGitSourceMutation = { updateProvider?: { provider?: { id: any, name: string, description?: string | null } | null } | null };

export type RemoveGitSourceMutationVariables = Exact<{
  idProvider: Scalars['UUID'];
}>;


export type RemoveGitSourceMutation = { deleteProvider?: { deletedProviderNodeId?: string | null } | null };

export type AddUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
}>;


export type AddUserMutation = { userMgmtAddUser?: { clientMutationId?: string | null, integer?: number | null } | null };

export type UpdateUserRoleMutationVariables = Exact<{
  username: Scalars['String'];
  role: Scalars['String'];
}>;


export type UpdateUserRoleMutation = { userMgmtSetUserRole?: { clientMutationId?: string | null, integer?: number | null } | null };

export type UpdateUserPasswordMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type UpdateUserPasswordMutation = { userMgmtUpdateUserPassword?: { clientMutationId?: string | null, integer?: number | null } | null };

export type RemoveUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type RemoveUserMutation = { userMgmtRemoveUser?: { clientMutationId?: string | null, integer?: number | null } | null };

export type AddContainerImageMutationVariables = Exact<{
  name: Scalars['String'];
  url: Scalars['String'];
  version: Scalars['String'];
  queue?: InputMaybe<Scalars['String']>;
}>;


export type AddContainerImageMutation = { createContainerImage?: { containerImage?: { id: any, name: string } | null } | null };

export type UpdateContainerImageMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Scalars['JSON']>;
}>;


export type UpdateContainerImageMutation = { updateContainerImage?: { containerImage?: { id: any, name: string, description?: string | null, url: string, version: string, parameters: any } | null } | null };

export type RemoveContainerImageMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveContainerImageMutation = { deleteContainerImage?: { deletedContainerImageNodeId?: string | null } | null };

export type RemoveRepoMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveRepoMutation = { deleteRepo?: { deletedRepoNodeId?: string | null } | null };

export type RemoveImportMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveImportMutation = { deleteRepoImport?: { deletedRepoImportNodeId?: string | null } | null };

export type UpdateTagsMutationVariables = Exact<{
  id: Scalars['UUID'];
  tags: Scalars['JSON'];
}>;


export type UpdateTagsMutation = { updateRepo?: { repo?: { id: any, tags: any } | null } | null };

export type AddSavedQueryMutationVariables = Exact<{
  createdBy: Scalars['String'];
  createdAt: Scalars['Datetime'];
  name: Scalars['String'];
  description: Scalars['String'];
  sql: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
}>;


export type AddSavedQueryMutation = { createSavedQuery?: { savedQuery?: { id: any, name: string } | null } | null };

export type UpdateSavedQueryMutationVariables = Exact<{
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  sql?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
}>;


export type UpdateSavedQueryMutation = { updateSavedQuery?: { savedQuery?: { id: any, name: string, description?: string | null, sql: string, metadata?: any | null } | null } | null };

export type RemoveSavedQueryMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveSavedQueryMutation = { deleteSavedQuery?: { deletedSavedQueryNodeId?: string | null } | null };

export type SyncMutationVariables = Exact<{
  syncId: Scalars['UUID'];
  typeGroup: Scalars['String'];
}>;


export type SyncMutation = { createRepoSyncQueue?: { repoSyncQueue?: { id: any, status: string, createdAt: any } | null } | null };

export type AddSyncTypeMutationVariables = Exact<{
  repoId: Scalars['UUID'];
  syncType: Scalars['String'];
  schedule?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddSyncTypeMutation = { createRepoSync?: { repoSync?: { id: any, syncType: string, repoSyncTypeBySyncType?: { typeGroup: string } | null } | null } | null };

export type ScheduleMutationVariables = Exact<{
  syncId: Scalars['UUID'];
  schedule: Scalars['Boolean'];
}>;


export type ScheduleMutation = { updateRepoSync?: { repoSync?: { id: any, syncType: string, scheduleEnabled: boolean } | null } | null };

export type AddContainerSyncScheduleMutationVariables = Exact<{
  syncId: Scalars['UUID'];
}>;


export type AddContainerSyncScheduleMutation = { createContainerSyncSchedule?: { containerSyncSchedule?: { id: any } | null } | null };

export type RemoveContainerSyncScheduleMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type RemoveContainerSyncScheduleMutation = { deleteContainerSyncSchedule?: { deletedContainerSyncScheduleNodeId?: string | null } | null };

export type EnableContainerSyncMutationVariables = Exact<{
  repoId: Scalars['UUID'];
  imageId: Scalars['UUID'];
}>;


export type EnableContainerSyncMutation = { createContainerSync?: { containerSync?: { id: any, image?: { name: string } | null } | null } | null };

export type EnableCsForAllMutationVariables = Exact<{
  imageId: Scalars['UUID'];
  providerId: Scalars['UUID'];
}>;


export type EnableCsForAllMutation = { bulkEnableSync?: boolean | null };

export type DisableCsForAllMutationVariables = Exact<{
  imageId: Scalars['UUID'];
  providerId: Scalars['UUID'];
}>;


export type DisableCsForAllMutation = { bulkDisableSync?: boolean | null };

export type SyncNowContainerMutationVariables = Exact<{
  sync: Scalars['UUID'];
}>;


export type SyncNowContainerMutation = { syncNow?: { boolean?: boolean | null } | null };

export type UndateContainerSyncMutationVariables = Exact<{
  id: Scalars['UUID'];
  parameters: Scalars['JSON'];
}>;


export type UndateContainerSyncMutation = { updateContainerSync?: { containerSync?: { id: any, parameters: any } | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentMergeStatUser?: string | null };

export type GetDatabaseConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDatabaseConnectionQuery = { databaseConnection?: { database?: string | null, host?: string | null, port?: number | null, user?: string | null } | null };

export type ExploreUiQueryVariables = Exact<{
  params: Scalars['JSON'];
}>;


export type ExploreUiQuery = { exploreUi?: any | null };

export type GetExploreMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExploreMetadataQuery = { repos?: { totalCount: number } | null, exploreContainer?: { id: any, name: string } | null, metadata?: { totalCount: number, nodes: Array<{ _mergestatSyncedAt: any }> } | null };

export type GetSavedExploreQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetSavedExploreQuery = { savedExplore?: { createdAt?: any | null, createdBy?: string | null, name?: string | null, description?: string | null, metadata?: any | null } | null };

export type GetGitSourcesListQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetGitSourcesListQuery = { all?: { totalCount: number } | null, providers?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null, createdAt: any, settings: any, vendor: string, reposByProvider: { totalCount: number } }> } | null };

export type GetGitSourcesListCsQueryVariables = Exact<{
  search: Scalars['String'];
  imageId: Scalars['UUID'];
}>;


export type GetGitSourcesListCsQuery = { providers?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null, createdAt: any, settings: any, vendor: string, reposByProvider: { totalCount: number } }> } | null, all?: { totalCount: number } | null, containerSyncs?: { nodes: Array<{ repo?: { provider: any } | null, scheduled?: { id: any } | null }> } | null };

export type GetGitSourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGitSourcesQuery = { github?: { totalCount: number } | null, providers?: { nodes: Array<{ id: any, name: string, description?: string | null, createdAt: any, settings: any, vendor: string }> } | null };

export type GetGitSourceQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetGitSourceQuery = { provider?: { id: any, name: string, description?: string | null, vendor: string, settings: any, auth: { nodes: Array<{ id: any, type: string, credentials?: string | null, createdAt: any }> }, auto: { nodes: Array<{ id: any, settings: any, repos: { totalCount: number } }> }, manual: { totalCount: number, nodes: Array<{ id: any, repo: string, settings: any }> } } | null };

export type GetDefaultRepoSyncsQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetDefaultRepoSyncsQuery = { all?: { totalCount: number } | null, containerImages?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null, containerSyncs: { nodes: Array<{ repo?: { provider: any } | null, scheduled?: { id: any } | null }> } }> } | null };

export type GetAllContainerImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContainerImagesQuery = { containerImages?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null }> } | null };

export type GetQueryHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueryHistoryQuery = { queryHistories?: { nodes: Array<{ id: any, runAt?: any | null, runBy: string, query: string }> } | null };

export type GetRepoImportsQueryVariables = Exact<{
  idProvider: Scalars['UUID'];
}>;


export type GetRepoImportsQuery = { repoImports?: { totalCount: number, nodes: Array<{ id: any, settings: any, lastImport?: any | null, importStatus?: string | null, importError?: string | null, provider?: { id: any, name: string, vendor: string, settings: any } | null, repos: { totalCount: number } }> } | null };

export type GetRepoManualImportsQueryVariables = Exact<{
  idProvider: Scalars['UUID'];
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetRepoManualImportsQuery = { repos?: { totalCount: number, nodes: Array<{ id: any, repo: string, settings: any, provider?: { id: any, name: string, vendor: string, settings: any } | null }> } | null };

export type GetAllRepoManualImportsQueryVariables = Exact<{
  idProvider: Scalars['UUID'];
}>;


export type GetAllRepoManualImportsQuery = { repos?: { totalCount: number } | null };

export type GetRepoImportQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetRepoImportQuery = { repoImport?: { id: any, lastImport?: any | null, settings: any, provider?: { id: any, name: string, vendor: string, settings: any } | null } | null, repoSyncTypes?: { nodes: Array<{ type: string, description?: string | null, shortName: string }> } | null };

export type GetRepoImportContainerQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetRepoImportContainerQuery = { repoImport?: { id: any, lastImport?: any | null, settings: any, provider?: { id: any, name: string, vendor: string, settings: any } | null } | null, containerImages?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null }> } | null };

export type GetRepoDataQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetRepoDataQuery = { repo?: { id: any, repo: string, tags: any, repoImport?: { settings: any } | null, provider?: { id: any, name: string, vendor: string, settings: any } | null } | null };

export type GetContainerImageQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetContainerImageQuery = { containerImage?: { id: any, name: string, description?: string | null, type: string, url: string, version: string, parameters: any, repos: { nodes: Array<{ scheduled?: { id: any } | null }> } } | null };

export type GetContainerImagesQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetContainerImagesQuery = { all?: { totalCount: number } | null, containerImages?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null, url: string, version: string, type: string, parameters: any, repos: { nodes: Array<{ scheduled?: { id: any } | null }> } }> } | null };

export type GetContainerSyncsQueryVariables = Exact<{
  id: Scalars['UUID'];
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetContainerSyncsQuery = { containerSyncs?: { nodes: Array<{ id: any, parameters: any, latestSyncRuns?: any | null, image?: { id: any } | null, repo?: { id: any } | null, schedule?: { id: any } | null }> } | null, all?: { totalCount: number } | null, containerImages?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null }> } | null };

export type GetRepoSyncsQueryVariables = Exact<{
  id: Scalars['UUID'];
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetRepoSyncsQuery = { repo?: { id: any, repo: string, tags: any, repoImport?: { settings: any } | null, provider?: { id: any, name: string, vendor: string, settings: any } | null, repoSyncs: { nodes: Array<{ id: any, syncType: string, scheduleEnabled: boolean, repoSyncQueues: { nodes: Array<{ id: any, status: string, startedAt?: any | null, doneAt?: any | null, hasError?: boolean | null, warnings: { totalCount: number } }> } }> } } | null, allSyncTypes?: { totalCount: number } | null, repoSyncTypes?: { totalCount: number, nodes: Array<{ type: string, description?: string | null, shortName: string, typeGroup: string, labels: { nodes: Array<{ label: string }> } }> } | null };

export type GetSyncTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSyncTypesQuery = { repoSyncTypes?: { nodes: Array<{ type: string, description?: string | null, shortName: string, labels: { nodes: Array<{ label: string }> } }> } | null };

export type GetRepoTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRepoTotalCountQuery = { allRepos?: { totalCount: number } | null };

export type GetAllEnabledReposQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEnabledReposQuery = { allEnabledRepos?: { totalCount: number } | null };

export type GetSyncErrorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSyncErrorsQuery = { syncErrors: { rowCount?: number | null, columns?: Array<any> | null, rows?: Array<any> | null } };

export type GetReposQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetReposQuery = { repoImports?: { totalCount: number, nodes: Array<{ id: any, settings: any, importError?: string | null, provider?: { id: any, name: string, vendor: string, settings: any } | null }> } | null, repos?: { totalCount: number, nodes: Array<{ id: any, repo: string, createdAt: any, tags: any, repoImport?: { settings: any } | null, provider?: { id: any, name: string, vendor: string, settings: any } | null, repoSyncs: { totalCount: number, nodes: Array<{ id: any, syncType: string, repoSyncTypeBySyncType?: { shortName: string } | null, lastCompletedRepoSyncQueue?: { id: any, status: string, doneAt?: any | null, createdAt: any, hasError?: boolean | null, warnings: { totalCount: number } } | null }> } }> } | null };

export type GetContainerSyncStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContainerSyncStatsQuery = { getReposPageHeaderStats?: any | null };

export type GetReposContainersQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetReposContainersQuery = { repoImports?: { totalCount: number, nodes: Array<{ id: any, settings: any, importError?: string | null, provider?: { id: any, name: string, vendor: string, settings: any } | null }> } | null, repos?: { totalCount: number, nodes: Array<{ id: any, repo: string, createdAt: any, tags: any, stats?: any | null, repoImport?: { settings: any } | null, provider?: { id: any, name: string, vendor: string, settings: any } | null }> } | null };

export type GetContainerSyncsByStatusQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  status: Scalars['String'];
}>;


export type GetContainerSyncsByStatusQuery = { getReposSyncsByStatus?: any | null };

export type GetSavedQueryListQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetSavedQueryListQuery = { all?: { totalCount: number } | null, savedQueries?: { totalCount: number, nodes: Array<{ id: any, createdAt?: any | null, createdBy?: string | null, name: string, description?: string | null }> } | null };

export type GetSavedQueryQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetSavedQueryQuery = { savedQuery?: { createdAt?: any | null, createdBy?: string | null, name: string, description?: string | null, sql: string, metadata?: any | null } | null };

export type GetSchemaQueryVariables = Exact<{
  search?: InputMaybe<Scalars['SqlIdentifier']>;
}>;


export type GetSchemaQuery = { schemaIntrospections?: { nodes: Array<{ schema?: any | null, tableName?: any | null, columnName?: any | null, columnDescription?: string | null }> } | null };

export type GetSyncHistoryLogsQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
}>;


export type GetSyncHistoryLogsQuery = { repo?: { id: any, repo: string, provider?: { id: any, name: string, vendor: string, settings: any } | null, repoSyncs: { nodes: Array<{ id: any, syncType: string, scheduleEnabled: boolean, repoSyncTypeBySyncType?: { shortName: string, description?: string | null, typeGroup: string } | null, repoSyncQueues: { nodes: Array<{ id: any, status: string, createdAt: any, doneAt?: any | null, startedAt?: any | null, hasError?: boolean | null, warnings: { totalCount: number }, repoSyncLogs: { totalCount: number, nodes: Array<{ logType: string, message: string, createdAt: any }> } }> } }> } } | null };

export type GetLogsOfSyncQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
  logId: Scalars['BigInt'];
}>;


export type GetLogsOfSyncQuery = { repo?: { id: any, repo: string, provider?: { id: any, name: string, vendor: string, settings: any } | null, repoSyncs: { nodes: Array<{ id: any, syncType: string, repoSyncTypeBySyncType?: { shortName: string, description?: string | null } | null, repoSyncQueues: { nodes: Array<{ id: any, status: string, createdAt: any, doneAt?: any | null, startedAt?: any | null, hasError?: boolean | null, warnings: { totalCount: number }, repoSyncLogs: { totalCount: number, nodes: Array<{ logType: string, message: string, createdAt: any }> } }> } }> } } | null };

export type GetContainerBasicDataQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
}>;


export type GetContainerBasicDataQuery = { repo?: { id: any, repo: string, provider?: { id: any, name: string, vendor: string, settings: any } | null, containerSyncs: { nodes: Array<{ image?: { id: any, name: string, description?: string | null } | null }> } } | null };

export type GetContainerSyncGeneralDataQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
}>;


export type GetContainerSyncGeneralDataQuery = { repo?: { id: any, repo: string, containerSyncs: { nodes: Array<{ id: any, parameters: any, image?: { id: any, name: string, description?: string | null } | null, repo?: { id: any } | null, schedule?: { id: any } | null }> } } | null };

export type GetContainerSyncHistoryLogsQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetContainerSyncHistoryLogsQuery = { repo?: { id: any, repo: string, containerSyncs: { nodes: Array<{ id: any, parameters: any, image?: { id: any, name: string, description?: string | null } | null, repo?: { id: any } | null, schedule?: { id: any } | null, executions: { totalCount: number, nodes: Array<{ job?: { id: any, status: JobStates, queue: string, createdAt: any, startedAt?: any | null, completedAt?: any | null, errors: { totalCount: number }, warnings: { totalCount: number }, logs: { totalCount: number, nodes: Array<{ id: any, level?: LogLevel | null, message?: string | null, loggedAt?: any | null }> } } | null }> } }> } } | null };

export type GetLogsOfContainerSyncQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
  jobId: Scalars['UUID'];
}>;


export type GetLogsOfContainerSyncQuery = { repo?: { id: any, repo: string, containerSyncs: { nodes: Array<{ id: any, parameters: any, image?: { id: any, name: string, description?: string | null } | null, repo?: { id: any } | null, schedule?: { id: any } | null, executions: { totalCount: number, nodes: Array<{ job?: { id: any, status: JobStates, queue: string, createdAt: any, startedAt?: any | null, completedAt?: any | null, errors: { totalCount: number }, warnings: { totalCount: number }, logs: { totalCount: number, nodes: Array<{ id: any, level?: LogLevel | null, message?: string | null, loggedAt?: any | null }> } } | null }> } }> } } | null };

export type GetUsersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type GetUsersQuery = { userMgmtPgUsers?: { nodes: Array<{ memberof?: Array<string | null> | null, rolname?: string | null }> } | null };

export type ExecuteSqlQueryVariables = Exact<{
  sql: Scalars['String'];
  disableReadOnly?: InputMaybe<Scalars['Boolean']>;
  trackHistory?: InputMaybe<Scalars['Boolean']>;
  rowLimit?: InputMaybe<Scalars['Int']>;
}>;


export type ExecuteSqlQuery = { execSQL: { rowCount?: number | null, columns?: Array<any> | null, rows?: Array<any> | null, queryRunningTimeMs?: number | null } };
