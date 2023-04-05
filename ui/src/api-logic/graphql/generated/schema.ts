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
  /** Reads and enables pagination through a set of `ContainerSyncSchedule`. */
  containerSyncSchedulesBySyncId: ContainerSyncSchedulesConnection;
  id: Scalars['UUID'];
  /** Reads a single `ContainerImage` that is related to this `ContainerSync`. */
  image?: Maybe<ContainerImage>;
  imageId: Scalars['UUID'];
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


export type ContainerSyncContainerSyncSchedulesBySyncIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ContainerSyncScheduleCondition>;
  filter?: InputMaybe<ContainerSyncScheduleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContainerSyncSchedulesOrderBy>>;
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

/** All input for the create `GitRemote` mutation. */
export type CreateGitRemoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitRemote` to be created by this mutation. */
  gitRemote: GitRemoteInput;
};

/** The output of our create `GitRemote` mutation. */
export type CreateGitRemotePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitRemote` that was created by this mutation. */
  gitRemote?: Maybe<GitRemote>;
  /** An edge for our `GitRemote`. May be used by Relay 1. */
  gitRemoteEdge?: Maybe<GitRemotesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitRemote`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GitRemote` mutation. */
export type CreateGitRemotePayloadGitRemoteEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRemotesOrderBy>>;
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

/** All input for the create `GithubActionsWorkflow` mutation. */
export type CreateGithubActionsWorkflowInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubActionsWorkflow` to be created by this mutation. */
  githubActionsWorkflow: GithubActionsWorkflowInput;
};

/** The output of our create `GithubActionsWorkflow` mutation. */
export type CreateGithubActionsWorkflowPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubActionsWorkflow` that was created by this mutation. */
  githubActionsWorkflow?: Maybe<GithubActionsWorkflow>;
  /** An edge for our `GithubActionsWorkflow`. May be used by Relay 1. */
  githubActionsWorkflowEdge?: Maybe<GithubActionsWorkflowsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflow`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubActionsWorkflow` mutation. */
export type CreateGithubActionsWorkflowPayloadGithubActionsWorkflowEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowsOrderBy>>;
};

/** All input for the create `GithubActionsWorkflowRun` mutation. */
export type CreateGithubActionsWorkflowRunInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubActionsWorkflowRun` to be created by this mutation. */
  githubActionsWorkflowRun: GithubActionsWorkflowRunInput;
};

/** All input for the create `GithubActionsWorkflowRunJob` mutation. */
export type CreateGithubActionsWorkflowRunJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GithubActionsWorkflowRunJob` to be created by this mutation. */
  githubActionsWorkflowRunJob: GithubActionsWorkflowRunJobInput;
};

/** The output of our create `GithubActionsWorkflowRunJob` mutation. */
export type CreateGithubActionsWorkflowRunJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubActionsWorkflowRunJob` that was created by this mutation. */
  githubActionsWorkflowRunJob?: Maybe<GithubActionsWorkflowRunJob>;
  /** An edge for our `GithubActionsWorkflowRunJob`. May be used by Relay 1. */
  githubActionsWorkflowRunJobEdge?: Maybe<GithubActionsWorkflowRunJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRunJob`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubActionsWorkflowRunJob` mutation. */
export type CreateGithubActionsWorkflowRunJobPayloadGithubActionsWorkflowRunJobEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunJobsOrderBy>>;
};

/** The output of our create `GithubActionsWorkflowRun` mutation. */
export type CreateGithubActionsWorkflowRunPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubActionsWorkflowRun` that was created by this mutation. */
  githubActionsWorkflowRun?: Maybe<GithubActionsWorkflowRun>;
  /** An edge for our `GithubActionsWorkflowRun`. May be used by Relay 1. */
  githubActionsWorkflowRunEdge?: Maybe<GithubActionsWorkflowRunsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRun`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GithubActionsWorkflowRun` mutation. */
export type CreateGithubActionsWorkflowRunPayloadGithubActionsWorkflowRunEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunsOrderBy>>;
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

/** All input for the create `GitleaksRepoScan` mutation. */
export type CreateGitleaksRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GitleaksRepoScan` to be created by this mutation. */
  gitleaksRepoScan: GitleaksRepoScanInput;
};

/** The output of our create `GitleaksRepoScan` mutation. */
export type CreateGitleaksRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitleaksRepoScan` that was created by this mutation. */
  gitleaksRepoScan?: Maybe<GitleaksRepoScan>;
  /** An edge for our `GitleaksRepoScan`. May be used by Relay 1. */
  gitleaksRepoScanEdge?: Maybe<GitleaksRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitleaksRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GitleaksRepoScan` mutation. */
export type CreateGitleaksRepoScanPayloadGitleaksRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GitleaksRepoScansOrderBy>>;
};

/** All input for the create `GosecRepoScan` mutation. */
export type CreateGosecRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GosecRepoScan` to be created by this mutation. */
  gosecRepoScan: GosecRepoScanInput;
};

/** The output of our create `GosecRepoScan` mutation. */
export type CreateGosecRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GosecRepoScan` that was created by this mutation. */
  gosecRepoScan?: Maybe<GosecRepoScan>;
  /** An edge for our `GosecRepoScan`. May be used by Relay 1. */
  gosecRepoScanEdge?: Maybe<GosecRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GosecRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GosecRepoScan` mutation. */
export type CreateGosecRepoScanPayloadGosecRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GosecRepoScansOrderBy>>;
};

/** All input for the create `GrypeRepoScan` mutation. */
export type CreateGrypeRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `GrypeRepoScan` to be created by this mutation. */
  grypeRepoScan: GrypeRepoScanInput;
};

/** The output of our create `GrypeRepoScan` mutation. */
export type CreateGrypeRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GrypeRepoScan` that was created by this mutation. */
  grypeRepoScan?: Maybe<GrypeRepoScan>;
  /** An edge for our `GrypeRepoScan`. May be used by Relay 1. */
  grypeRepoScanEdge?: Maybe<GrypeRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GrypeRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `GrypeRepoScan` mutation. */
export type CreateGrypeRepoScanPayloadGrypeRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GrypeRepoScansOrderBy>>;
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

/** All input for the create `OssfScorecardRepoScan` mutation. */
export type CreateOssfScorecardRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `OssfScorecardRepoScan` to be created by this mutation. */
  ossfScorecardRepoScan: OssfScorecardRepoScanInput;
};

/** The output of our create `OssfScorecardRepoScan` mutation. */
export type CreateOssfScorecardRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OssfScorecardRepoScan` that was created by this mutation. */
  ossfScorecardRepoScan?: Maybe<OssfScorecardRepoScan>;
  /** An edge for our `OssfScorecardRepoScan`. May be used by Relay 1. */
  ossfScorecardRepoScanEdge?: Maybe<OssfScorecardRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `OssfScorecardRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our create `OssfScorecardRepoScan` mutation. */
export type CreateOssfScorecardRepoScanPayloadOssfScorecardRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<OssfScorecardRepoScansOrderBy>>;
};

/** All input for the create `OssfScorecardRepoScore` mutation. */
export type CreateOssfScorecardRepoScoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `OssfScorecardRepoScore` to be created by this mutation. */
  ossfScorecardRepoScore: OssfScorecardRepoScoreInput;
};

/** The output of our create `OssfScorecardRepoScore` mutation. */
export type CreateOssfScorecardRepoScorePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OssfScorecardRepoScore` that was created by this mutation. */
  ossfScorecardRepoScore?: Maybe<OssfScorecardRepoScore>;
  /** An edge for our `OssfScorecardRepoScore`. May be used by Relay 1. */
  ossfScorecardRepoScoreEdge?: Maybe<OssfScorecardRepoScoresEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `OssfScorecardRepoScore` mutation. */
export type CreateOssfScorecardRepoScorePayloadOssfScorecardRepoScoreEdgeArgs = {
  orderBy?: InputMaybe<Array<OssfScorecardRepoScoresOrderBy>>;
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

/** All input for the create `SyftRepoScan` mutation. */
export type CreateSyftRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SyftRepoScan` to be created by this mutation. */
  syftRepoScan: SyftRepoScanInput;
};

/** The output of our create `SyftRepoScan` mutation. */
export type CreateSyftRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `SyftRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `SyftRepoScan` that was created by this mutation. */
  syftRepoScan?: Maybe<SyftRepoScan>;
  /** An edge for our `SyftRepoScan`. May be used by Relay 1. */
  syftRepoScanEdge?: Maybe<SyftRepoScansEdge>;
};


/** The output of our create `SyftRepoScan` mutation. */
export type CreateSyftRepoScanPayloadSyftRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<SyftRepoScansOrderBy>>;
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

/** All input for the create `YelpDetectSecretsRepoScan` mutation. */
export type CreateYelpDetectSecretsRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `YelpDetectSecretsRepoScan` to be created by this mutation. */
  yelpDetectSecretsRepoScan: YelpDetectSecretsRepoScanInput;
};

/** The output of our create `YelpDetectSecretsRepoScan` mutation. */
export type CreateYelpDetectSecretsRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `YelpDetectSecretsRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `YelpDetectSecretsRepoScan` that was created by this mutation. */
  yelpDetectSecretsRepoScan?: Maybe<YelpDetectSecretsRepoScan>;
  /** An edge for our `YelpDetectSecretsRepoScan`. May be used by Relay 1. */
  yelpDetectSecretsRepoScanEdge?: Maybe<YelpDetectSecretsRepoScansEdge>;
};


/** The output of our create `YelpDetectSecretsRepoScan` mutation. */
export type CreateYelpDetectSecretsRepoScanPayloadYelpDetectSecretsRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<YelpDetectSecretsRepoScansOrderBy>>;
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
  /** line number of the modification */
  lineNo: Scalars['Int'];
  /** path of the file the modification was made in */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
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
  /** foreign key for public.repos.id */
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

/** All input for the `deleteGitRemoteByNodeId` mutation. */
export type DeleteGitRemoteByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitRemote` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGitRemote` mutation. */
export type DeleteGitRemoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `GitRemote` mutation. */
export type DeleteGitRemotePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGitRemoteNodeId?: Maybe<Scalars['ID']>;
  /** The `GitRemote` that was deleted by this mutation. */
  gitRemote?: Maybe<GitRemote>;
  /** An edge for our `GitRemote`. May be used by Relay 1. */
  gitRemoteEdge?: Maybe<GitRemotesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitRemote`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GitRemote` mutation. */
export type DeleteGitRemotePayloadGitRemoteEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRemotesOrderBy>>;
};

/** All input for the `deleteGithubActionsWorkflowById` mutation. */
export type DeleteGithubActionsWorkflowByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** All input for the `deleteGithubActionsWorkflowByNodeId` mutation. */
export type DeleteGithubActionsWorkflowByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubActionsWorkflow` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubActionsWorkflow` mutation. */
export type DeleteGithubActionsWorkflowInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GithubActionsWorkflow` mutation. */
export type DeleteGithubActionsWorkflowPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubActionsWorkflowNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubActionsWorkflow` that was deleted by this mutation. */
  githubActionsWorkflow?: Maybe<GithubActionsWorkflow>;
  /** An edge for our `GithubActionsWorkflow`. May be used by Relay 1. */
  githubActionsWorkflowEdge?: Maybe<GithubActionsWorkflowsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflow`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubActionsWorkflow` mutation. */
export type DeleteGithubActionsWorkflowPayloadGithubActionsWorkflowEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowsOrderBy>>;
};

/** All input for the `deleteGithubActionsWorkflowRunById` mutation. */
export type DeleteGithubActionsWorkflowRunByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** All input for the `deleteGithubActionsWorkflowRunByNodeId` mutation. */
export type DeleteGithubActionsWorkflowRunByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubActionsWorkflowRun` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubActionsWorkflowRun` mutation. */
export type DeleteGithubActionsWorkflowRunInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  repoId: Scalars['UUID'];
};

/** All input for the `deleteGithubActionsWorkflowRunJobById` mutation. */
export type DeleteGithubActionsWorkflowRunJobByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
};

/** All input for the `deleteGithubActionsWorkflowRunJobByNodeId` mutation. */
export type DeleteGithubActionsWorkflowRunJobByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubActionsWorkflowRunJob` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGithubActionsWorkflowRunJob` mutation. */
export type DeleteGithubActionsWorkflowRunJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  repoId: Scalars['UUID'];
};

/** The output of our delete `GithubActionsWorkflowRunJob` mutation. */
export type DeleteGithubActionsWorkflowRunJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubActionsWorkflowRunJobNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubActionsWorkflowRunJob` that was deleted by this mutation. */
  githubActionsWorkflowRunJob?: Maybe<GithubActionsWorkflowRunJob>;
  /** An edge for our `GithubActionsWorkflowRunJob`. May be used by Relay 1. */
  githubActionsWorkflowRunJobEdge?: Maybe<GithubActionsWorkflowRunJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRunJob`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubActionsWorkflowRunJob` mutation. */
export type DeleteGithubActionsWorkflowRunJobPayloadGithubActionsWorkflowRunJobEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunJobsOrderBy>>;
};

/** The output of our delete `GithubActionsWorkflowRun` mutation. */
export type DeleteGithubActionsWorkflowRunPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGithubActionsWorkflowRunNodeId?: Maybe<Scalars['ID']>;
  /** The `GithubActionsWorkflowRun` that was deleted by this mutation. */
  githubActionsWorkflowRun?: Maybe<GithubActionsWorkflowRun>;
  /** An edge for our `GithubActionsWorkflowRun`. May be used by Relay 1. */
  githubActionsWorkflowRunEdge?: Maybe<GithubActionsWorkflowRunsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRun`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GithubActionsWorkflowRun` mutation. */
export type DeleteGithubActionsWorkflowRunPayloadGithubActionsWorkflowRunEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunsOrderBy>>;
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
  /** GitHub database_id of the issue */
  databaseId: Scalars['Int'];
  /** foreign key for public.repos.id */
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
  /** hash of the commit */
  hash: Scalars['String'];
  /** GitHub pull request number of the commit */
  prNumber: Scalars['Int'];
  /** foreign key for public.repos.id */
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
  /** GitHub database_id of the pull request */
  databaseId: Scalars['Int'];
  /** foreign key for public.repos.id */
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
  /** GitHub id of the review */
  id: Scalars['String'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
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
  /** the name of the repo */
  name: Scalars['String'];
  /** the user or organization that owns the repo */
  owner: Scalars['String'];
};

/** All input for the `deleteGithubRepoInfo` mutation. */
export type DeleteGithubRepoInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
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
  /** login of the user who starred the repo */
  login: Scalars['String'];
  /** foreign key for public.repos.id */
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

/** All input for the `deleteGitleaksRepoScanByNodeId` mutation. */
export type DeleteGitleaksRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitleaksRepoScan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGitleaksRepoScan` mutation. */
export type DeleteGitleaksRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `GitleaksRepoScan` mutation. */
export type DeleteGitleaksRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGitleaksRepoScanNodeId?: Maybe<Scalars['ID']>;
  /** The `GitleaksRepoScan` that was deleted by this mutation. */
  gitleaksRepoScan?: Maybe<GitleaksRepoScan>;
  /** An edge for our `GitleaksRepoScan`. May be used by Relay 1. */
  gitleaksRepoScanEdge?: Maybe<GitleaksRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitleaksRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GitleaksRepoScan` mutation. */
export type DeleteGitleaksRepoScanPayloadGitleaksRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GitleaksRepoScansOrderBy>>;
};

/** All input for the `deleteGosecRepoScanByNodeId` mutation. */
export type DeleteGosecRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GosecRepoScan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGosecRepoScan` mutation. */
export type DeleteGosecRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `GosecRepoScan` mutation. */
export type DeleteGosecRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGosecRepoScanNodeId?: Maybe<Scalars['ID']>;
  /** The `GosecRepoScan` that was deleted by this mutation. */
  gosecRepoScan?: Maybe<GosecRepoScan>;
  /** An edge for our `GosecRepoScan`. May be used by Relay 1. */
  gosecRepoScanEdge?: Maybe<GosecRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GosecRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GosecRepoScan` mutation. */
export type DeleteGosecRepoScanPayloadGosecRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GosecRepoScansOrderBy>>;
};

/** All input for the `deleteGrypeRepoScanByNodeId` mutation. */
export type DeleteGrypeRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GrypeRepoScan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteGrypeRepoScan` mutation. */
export type DeleteGrypeRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `GrypeRepoScan` mutation. */
export type DeleteGrypeRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedGrypeRepoScanNodeId?: Maybe<Scalars['ID']>;
  /** The `GrypeRepoScan` that was deleted by this mutation. */
  grypeRepoScan?: Maybe<GrypeRepoScan>;
  /** An edge for our `GrypeRepoScan`. May be used by Relay 1. */
  grypeRepoScanEdge?: Maybe<GrypeRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GrypeRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `GrypeRepoScan` mutation. */
export type DeleteGrypeRepoScanPayloadGrypeRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GrypeRepoScansOrderBy>>;
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

/** All input for the `deleteOssfScorecardRepoScanByNodeId` mutation. */
export type DeleteOssfScorecardRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OssfScorecardRepoScan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteOssfScorecardRepoScan` mutation. */
export type DeleteOssfScorecardRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `OssfScorecardRepoScan` mutation. */
export type DeleteOssfScorecardRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOssfScorecardRepoScanNodeId?: Maybe<Scalars['ID']>;
  /** The `OssfScorecardRepoScan` that was deleted by this mutation. */
  ossfScorecardRepoScan?: Maybe<OssfScorecardRepoScan>;
  /** An edge for our `OssfScorecardRepoScan`. May be used by Relay 1. */
  ossfScorecardRepoScanEdge?: Maybe<OssfScorecardRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `OssfScorecardRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our delete `OssfScorecardRepoScan` mutation. */
export type DeleteOssfScorecardRepoScanPayloadOssfScorecardRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<OssfScorecardRepoScansOrderBy>>;
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

/** All input for the `deleteSyftRepoScanByNodeId` mutation. */
export type DeleteSyftRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SyftRepoScan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSyftRepoScan` mutation. */
export type DeleteSyftRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `SyftRepoScan` mutation. */
export type DeleteSyftRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSyftRepoScanNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `SyftRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `SyftRepoScan` that was deleted by this mutation. */
  syftRepoScan?: Maybe<SyftRepoScan>;
  /** An edge for our `SyftRepoScan`. May be used by Relay 1. */
  syftRepoScanEdge?: Maybe<SyftRepoScansEdge>;
};


/** The output of our delete `SyftRepoScan` mutation. */
export type DeleteSyftRepoScanPayloadSyftRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<SyftRepoScansOrderBy>>;
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
  /** foreign key for public.repos.id */
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

/** All input for the `deleteYelpDetectSecretsRepoScanByNodeId` mutation. */
export type DeleteYelpDetectSecretsRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `YelpDetectSecretsRepoScan` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteYelpDetectSecretsRepoScan` mutation. */
export type DeleteYelpDetectSecretsRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our delete `YelpDetectSecretsRepoScan` mutation. */
export type DeleteYelpDetectSecretsRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedYelpDetectSecretsRepoScanNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `YelpDetectSecretsRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `YelpDetectSecretsRepoScan` that was deleted by this mutation. */
  yelpDetectSecretsRepoScan?: Maybe<YelpDetectSecretsRepoScan>;
  /** An edge for our `YelpDetectSecretsRepoScan`. May be used by Relay 1. */
  yelpDetectSecretsRepoScanEdge?: Maybe<YelpDetectSecretsRepoScansEdge>;
};


/** The output of our delete `YelpDetectSecretsRepoScan` mutation. */
export type DeleteYelpDetectSecretsRepoScanPayloadYelpDetectSecretsRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<YelpDetectSecretsRepoScansOrderBy>>;
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

/** git blame of all lines in all files of a repo */
export type GitBlame = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** email of the author who modified the line */
  authorEmail?: Maybe<Scalars['String']>;
  /** name of the author who modified the line */
  authorName?: Maybe<Scalars['String']>;
  authorWhen?: Maybe<Scalars['Datetime']>;
  /** hash of the commit the modification was made in */
  commitHash?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  /** line number of the modification */
  lineNo: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** path of the file the modification was made in */
  path: Scalars['String'];
  /** Reads a single `Repo` that is related to this `GitBlame`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author who modified the line */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who modified the line */
  authorName?: InputMaybe<Scalars['String']>;
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** hash of the commit the modification was made in */
  commitHash?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  /** line number of the modification */
  lineNo: Scalars['Int'];
  /** path of the file the modification was made in */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GitBlame`. Fields that are set will be updated. */
export type GitBlamePatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the author who modified the line */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who modified the line */
  authorName?: InputMaybe<Scalars['String']>;
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** hash of the commit the modification was made in */
  commitHash?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  /** line number of the modification */
  lineNo?: InputMaybe<Scalars['Int']>;
  /** path of the file the modification was made in */
  path?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
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

/** view of git refs of type branch of a repo */
export type GitBranch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: Maybe<Scalars['Datetime']>;
  fullName?: Maybe<Scalars['String']>;
  /** hash of the commit for refs that are not of type tag */
  hash?: Maybe<Scalars['String']>;
  /** name of the ref */
  name?: Maybe<Scalars['String']>;
  /** remote of the ref */
  remote?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** hash of the commit for refs that are of type tag */
  tagCommitHash?: Maybe<Scalars['String']>;
  /** target of the ref */
  target?: Maybe<Scalars['String']>;
  /** type of the ref */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName?: InputMaybe<Scalars['String']>;
  /** hash of the commit for refs that are not of type tag */
  hash?: InputMaybe<Scalars['String']>;
  /** name of the ref */
  name?: InputMaybe<Scalars['String']>;
  /** remote of the ref */
  remote?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** hash of the commit for refs that are of type tag */
  tagCommitHash?: InputMaybe<Scalars['String']>;
  /** target of the ref */
  target?: InputMaybe<Scalars['String']>;
  /** type of the ref */
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

/** git commit history of a repo */
export type GitCommit = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** email of the author of the modification */
  authorEmail: Scalars['String'];
  /** name of the author of the the modification */
  authorName: Scalars['String'];
  /** timestamp of when the modifcation was authored */
  authorWhen: Scalars['Datetime'];
  /** email of the author who committed the modification */
  committerEmail: Scalars['String'];
  /** name of the author who committed the modification */
  committerName: Scalars['String'];
  /** timestamp of when the commit was made */
  committerWhen: Scalars['Datetime'];
  /** hash of the commit */
  hash: Scalars['String'];
  /** message of the commit */
  message: Scalars['String'];
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
  authorEmail: Scalars['String'];
  /** name of the author of the the modification */
  authorName: Scalars['String'];
  /** timestamp of when the modifcation was authored */
  authorWhen: Scalars['Datetime'];
  /** email of the author who committed the modification */
  committerEmail: Scalars['String'];
  /** name of the author who committed the modification */
  committerName: Scalars['String'];
  /** timestamp of when the commit was made */
  committerWhen: Scalars['Datetime'];
  /** hash of the commit */
  hash: Scalars['String'];
  /** message of the commit */
  message: Scalars['String'];
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

/** git refs of a repo */
export type GitRef = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  fullName: Scalars['String'];
  /** hash of the commit for refs that are not of type tag */
  hash?: Maybe<Scalars['String']>;
  /** name of the ref */
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** remote of the ref */
  remote?: Maybe<Scalars['String']>;
  /** Reads a single `Repo` that is related to this `GitRef`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** hash of the commit for refs that are of type tag */
  tagCommitHash?: Maybe<Scalars['String']>;
  /** target of the ref */
  target?: Maybe<Scalars['String']>;
  /** type of the ref */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName: Scalars['String'];
  /** hash of the commit for refs that are not of type tag */
  hash?: InputMaybe<Scalars['String']>;
  /** name of the ref */
  name?: InputMaybe<Scalars['String']>;
  /** remote of the ref */
  remote?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** hash of the commit for refs that are of type tag */
  tagCommitHash?: InputMaybe<Scalars['String']>;
  /** target of the ref */
  target?: InputMaybe<Scalars['String']>;
  /** type of the ref */
  type?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GitRef`. Fields that are set will be updated. */
export type GitRefPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName?: InputMaybe<Scalars['String']>;
  /** hash of the commit for refs that are not of type tag */
  hash?: InputMaybe<Scalars['String']>;
  /** name of the ref */
  name?: InputMaybe<Scalars['String']>;
  /** remote of the ref */
  remote?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** hash of the commit for refs that are of type tag */
  tagCommitHash?: InputMaybe<Scalars['String']>;
  /** target of the ref */
  target?: InputMaybe<Scalars['String']>;
  /** type of the ref */
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

/** table of git repo remotes */
export type GitRemote = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** name of the remote */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `GitRemote`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** url of the remote */
  url: Scalars['String'];
};

/**
 * A condition to be used against `GitRemote` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type GitRemoteCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GitRemote` object types. All fields are combined with a logical ‘and.’ */
export type GitRemoteFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitRemoteFilter>>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitRemoteFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitRemoteFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GitRemote` */
export type GitRemoteInput = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** name of the remote */
  name: Scalars['String'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** url of the remote */
  url: Scalars['String'];
};

/** Represents an update to a `GitRemote`. Fields that are set will be updated. */
export type GitRemotePatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** name of the remote */
  name?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** url of the remote */
  url?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GitRemote` values. */
export type GitRemotesConnection = {
  /** A list of edges which contains the `GitRemote` and cursor to aid in pagination. */
  edges: Array<GitRemotesEdge>;
  /** A list of `GitRemote` objects. */
  nodes: Array<GitRemote>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitRemote` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitRemote` edge in the connection. */
export type GitRemotesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitRemote` at the end of the edge. */
  node: GitRemote;
};

/** Methods to use when ordering `GitRemote`. */
export enum GitRemotesOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** view of git refs of type tag of a repo */
export type GitTag = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: Maybe<Scalars['Datetime']>;
  fullName?: Maybe<Scalars['String']>;
  /** hash of the ref that are of type tag */
  hash?: Maybe<Scalars['String']>;
  /** name of the ref */
  name?: Maybe<Scalars['String']>;
  /** remote of the ref */
  remote?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** hash of the commit for refs that are of type tag */
  tagCommitHash?: Maybe<Scalars['String']>;
  /** target of the ref */
  target?: Maybe<Scalars['String']>;
  /** type of the ref */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  fullName?: InputMaybe<Scalars['String']>;
  /** hash of the ref that are of type tag */
  hash?: InputMaybe<Scalars['String']>;
  /** name of the ref */
  name?: InputMaybe<Scalars['String']>;
  /** remote of the ref */
  remote?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** hash of the commit for refs that are of type tag */
  tagCommitHash?: InputMaybe<Scalars['String']>;
  /** target of the ref */
  target?: InputMaybe<Scalars['String']>;
  /** type of the ref */
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

export type GithubActionsWorkflow = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  badgeUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  htmlUrl?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  path?: Maybe<Scalars['String']>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflow`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  url?: Maybe<Scalars['String']>;
  workflowNodeId?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GithubActionsWorkflow` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GithubActionsWorkflowCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `badgeUrl` field. */
  badgeUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `htmlUrl` field. */
  htmlUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `state` field. */
  state?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `workflowNodeId` field. */
  workflowNodeId?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GithubActionsWorkflow` object types. All fields are combined with a logical ‘and.’ */
export type GithubActionsWorkflowFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubActionsWorkflowFilter>>;
  /** Filter by the object’s `badgeUrl` field. */
  badgeUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `htmlUrl` field. */
  htmlUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubActionsWorkflowFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubActionsWorkflowFilter>>;
  /** Filter by the object’s `path` field. */
  path?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `state` field. */
  state?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
  /** Filter by the object’s `workflowNodeId` field. */
  workflowNodeId?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GithubActionsWorkflow` */
export type GithubActionsWorkflowInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  badgeUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
  state?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
  workflowNodeId?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubActionsWorkflow`. Fields that are set will be updated. */
export type GithubActionsWorkflowPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  badgeUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  state?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
  workflowNodeId?: InputMaybe<Scalars['String']>;
};

export type GithubActionsWorkflowRun = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  artifactsUrl?: Maybe<Scalars['String']>;
  cancelUrl?: Maybe<Scalars['String']>;
  checkSuiteId?: Maybe<Scalars['BigInt']>;
  checkSuiteNodeId?: Maybe<Scalars['String']>;
  checkSuiteUrl?: Maybe<Scalars['String']>;
  conclusion?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  event?: Maybe<Scalars['String']>;
  headBranch?: Maybe<Scalars['String']>;
  headCommit?: Maybe<Scalars['JSON']>;
  headRepositoryUrl?: Maybe<Scalars['String']>;
  htmlUrl?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  jobsUrl?: Maybe<Scalars['String']>;
  logsUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  pullRequests?: Maybe<Scalars['JSON']>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRun`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  repositoryUrl?: Maybe<Scalars['String']>;
  rerunUrl?: Maybe<Scalars['String']>;
  runAttempt?: Maybe<Scalars['Int']>;
  runNumber?: Maybe<Scalars['Int']>;
  runStartedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  url?: Maybe<Scalars['String']>;
  workflowId?: Maybe<Scalars['BigInt']>;
  workflowRunNodeId?: Maybe<Scalars['String']>;
  workflowUrl?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GithubActionsWorkflowRun` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GithubActionsWorkflowRunCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `artifactsUrl` field. */
  artifactsUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `cancelUrl` field. */
  cancelUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `checkSuiteId` field. */
  checkSuiteId?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `checkSuiteNodeId` field. */
  checkSuiteNodeId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `checkSuiteUrl` field. */
  checkSuiteUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `conclusion` field. */
  conclusion?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `event` field. */
  event?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `headBranch` field. */
  headBranch?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `headCommit` field. */
  headCommit?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `headRepositoryUrl` field. */
  headRepositoryUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `htmlUrl` field. */
  htmlUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `jobsUrl` field. */
  jobsUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `logsUrl` field. */
  logsUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `pullRequests` field. */
  pullRequests?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `repositoryUrl` field. */
  repositoryUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `rerunUrl` field. */
  rerunUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `runAttempt` field. */
  runAttempt?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `runNumber` field. */
  runNumber?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `runStartedAt` field. */
  runStartedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `workflowId` field. */
  workflowId?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `workflowRunNodeId` field. */
  workflowRunNodeId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `workflowUrl` field. */
  workflowUrl?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GithubActionsWorkflowRun` object types. All fields are combined with a logical ‘and.’ */
export type GithubActionsWorkflowRunFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubActionsWorkflowRunFilter>>;
  /** Filter by the object’s `artifactsUrl` field. */
  artifactsUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `cancelUrl` field. */
  cancelUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `checkSuiteId` field. */
  checkSuiteId?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `checkSuiteNodeId` field. */
  checkSuiteNodeId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `checkSuiteUrl` field. */
  checkSuiteUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `conclusion` field. */
  conclusion?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `event` field. */
  event?: InputMaybe<StringFilter>;
  /** Filter by the object’s `headBranch` field. */
  headBranch?: InputMaybe<StringFilter>;
  /** Filter by the object’s `headCommit` field. */
  headCommit?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `headRepositoryUrl` field. */
  headRepositoryUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `htmlUrl` field. */
  htmlUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `jobsUrl` field. */
  jobsUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `logsUrl` field. */
  logsUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubActionsWorkflowRunFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubActionsWorkflowRunFilter>>;
  /** Filter by the object’s `pullRequests` field. */
  pullRequests?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `repositoryUrl` field. */
  repositoryUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `rerunUrl` field. */
  rerunUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `runAttempt` field. */
  runAttempt?: InputMaybe<IntFilter>;
  /** Filter by the object’s `runNumber` field. */
  runNumber?: InputMaybe<IntFilter>;
  /** Filter by the object’s `runStartedAt` field. */
  runStartedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
  /** Filter by the object’s `workflowId` field. */
  workflowId?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `workflowRunNodeId` field. */
  workflowRunNodeId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `workflowUrl` field. */
  workflowUrl?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GithubActionsWorkflowRun` */
export type GithubActionsWorkflowRunInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  artifactsUrl?: InputMaybe<Scalars['String']>;
  cancelUrl?: InputMaybe<Scalars['String']>;
  checkSuiteId?: InputMaybe<Scalars['BigInt']>;
  checkSuiteNodeId?: InputMaybe<Scalars['String']>;
  checkSuiteUrl?: InputMaybe<Scalars['String']>;
  conclusion?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  event?: InputMaybe<Scalars['String']>;
  headBranch?: InputMaybe<Scalars['String']>;
  headCommit?: InputMaybe<Scalars['JSON']>;
  headRepositoryUrl?: InputMaybe<Scalars['String']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  jobsUrl?: InputMaybe<Scalars['String']>;
  logsUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pullRequests?: InputMaybe<Scalars['JSON']>;
  repoId: Scalars['UUID'];
  repositoryUrl?: InputMaybe<Scalars['String']>;
  rerunUrl?: InputMaybe<Scalars['String']>;
  runAttempt?: InputMaybe<Scalars['Int']>;
  runNumber?: InputMaybe<Scalars['Int']>;
  runStartedAt?: InputMaybe<Scalars['Datetime']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
  workflowId?: InputMaybe<Scalars['BigInt']>;
  workflowRunNodeId?: InputMaybe<Scalars['String']>;
  workflowUrl?: InputMaybe<Scalars['String']>;
};

export type GithubActionsWorkflowRunJob = Node & {
  _mergestatSyncedAt: Scalars['Datetime'];
  checkRunUrl?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['Datetime']>;
  conclusion?: Maybe<Scalars['String']>;
  headSha?: Maybe<Scalars['String']>;
  htmlUrl?: Maybe<Scalars['String']>;
  id: Scalars['BigInt'];
  jobNodeId?: Maybe<Scalars['String']>;
  labels?: Maybe<Scalars['JSON']>;
  log?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRunJob`. */
  repo?: Maybe<Repo>;
  repoId: Scalars['UUID'];
  runId?: Maybe<Scalars['BigInt']>;
  runUrl?: Maybe<Scalars['String']>;
  runnerGroupId?: Maybe<Scalars['BigInt']>;
  runnerGroupName?: Maybe<Scalars['String']>;
  runnerId?: Maybe<Scalars['BigInt']>;
  runnerName?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  steps?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
  workflowName?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GithubActionsWorkflowRunJob` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type GithubActionsWorkflowRunJobCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `checkRunUrl` field. */
  checkRunUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `completedAt` field. */
  completedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `conclusion` field. */
  conclusion?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `headSha` field. */
  headSha?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `htmlUrl` field. */
  htmlUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `jobNodeId` field. */
  jobNodeId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `labels` field. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `log` field. */
  log?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `runId` field. */
  runId?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `runUrl` field. */
  runUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `runnerGroupId` field. */
  runnerGroupId?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `runnerGroupName` field. */
  runnerGroupName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `runnerId` field. */
  runnerId?: InputMaybe<Scalars['BigInt']>;
  /** Checks for equality with the object’s `runnerName` field. */
  runnerName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `startedAt` field. */
  startedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `steps` field. */
  steps?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `workflowName` field. */
  workflowName?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GithubActionsWorkflowRunJob` object types. All fields are combined with a logical ‘and.’ */
export type GithubActionsWorkflowRunJobFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubActionsWorkflowRunJobFilter>>;
  /** Filter by the object’s `checkRunUrl` field. */
  checkRunUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `completedAt` field. */
  completedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `conclusion` field. */
  conclusion?: InputMaybe<StringFilter>;
  /** Filter by the object’s `headSha` field. */
  headSha?: InputMaybe<StringFilter>;
  /** Filter by the object’s `htmlUrl` field. */
  htmlUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `jobNodeId` field. */
  jobNodeId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `labels` field. */
  labels?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `log` field. */
  log?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubActionsWorkflowRunJobFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GithubActionsWorkflowRunJobFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `runId` field. */
  runId?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `runUrl` field. */
  runUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `runnerGroupId` field. */
  runnerGroupId?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `runnerGroupName` field. */
  runnerGroupName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `runnerId` field. */
  runnerId?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `runnerName` field. */
  runnerName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `startedAt` field. */
  startedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<StringFilter>;
  /** Filter by the object’s `steps` field. */
  steps?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
  /** Filter by the object’s `workflowName` field. */
  workflowName?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `GithubActionsWorkflowRunJob` */
export type GithubActionsWorkflowRunJobInput = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  checkRunUrl?: InputMaybe<Scalars['String']>;
  completedAt?: InputMaybe<Scalars['Datetime']>;
  conclusion?: InputMaybe<Scalars['String']>;
  headSha?: InputMaybe<Scalars['String']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  jobNodeId?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Scalars['JSON']>;
  log?: InputMaybe<Scalars['String']>;
  repoId: Scalars['UUID'];
  runId?: InputMaybe<Scalars['BigInt']>;
  runUrl?: InputMaybe<Scalars['String']>;
  runnerGroupId?: InputMaybe<Scalars['BigInt']>;
  runnerGroupName?: InputMaybe<Scalars['String']>;
  runnerId?: InputMaybe<Scalars['BigInt']>;
  runnerName?: InputMaybe<Scalars['String']>;
  startedAt?: InputMaybe<Scalars['Datetime']>;
  status?: InputMaybe<Scalars['String']>;
  steps?: InputMaybe<Scalars['JSON']>;
  url?: InputMaybe<Scalars['String']>;
  workflowName?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubActionsWorkflowRunJob`. Fields that are set will be updated. */
export type GithubActionsWorkflowRunJobPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  checkRunUrl?: InputMaybe<Scalars['String']>;
  completedAt?: InputMaybe<Scalars['Datetime']>;
  conclusion?: InputMaybe<Scalars['String']>;
  headSha?: InputMaybe<Scalars['String']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  jobNodeId?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Scalars['JSON']>;
  log?: InputMaybe<Scalars['String']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  runId?: InputMaybe<Scalars['BigInt']>;
  runUrl?: InputMaybe<Scalars['String']>;
  runnerGroupId?: InputMaybe<Scalars['BigInt']>;
  runnerGroupName?: InputMaybe<Scalars['String']>;
  runnerId?: InputMaybe<Scalars['BigInt']>;
  runnerName?: InputMaybe<Scalars['String']>;
  startedAt?: InputMaybe<Scalars['Datetime']>;
  status?: InputMaybe<Scalars['String']>;
  steps?: InputMaybe<Scalars['JSON']>;
  url?: InputMaybe<Scalars['String']>;
  workflowName?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GithubActionsWorkflowRunJob` values. */
export type GithubActionsWorkflowRunJobsConnection = {
  /** A list of edges which contains the `GithubActionsWorkflowRunJob` and cursor to aid in pagination. */
  edges: Array<GithubActionsWorkflowRunJobsEdge>;
  /** A list of `GithubActionsWorkflowRunJob` objects. */
  nodes: Array<GithubActionsWorkflowRunJob>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubActionsWorkflowRunJob` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubActionsWorkflowRunJob` edge in the connection. */
export type GithubActionsWorkflowRunJobsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubActionsWorkflowRunJob` at the end of the edge. */
  node: GithubActionsWorkflowRunJob;
};

/** Methods to use when ordering `GithubActionsWorkflowRunJob`. */
export enum GithubActionsWorkflowRunJobsOrderBy {
  CheckRunUrlAsc = 'CHECK_RUN_URL_ASC',
  CheckRunUrlDesc = 'CHECK_RUN_URL_DESC',
  CompletedAtAsc = 'COMPLETED_AT_ASC',
  CompletedAtDesc = 'COMPLETED_AT_DESC',
  ConclusionAsc = 'CONCLUSION_ASC',
  ConclusionDesc = 'CONCLUSION_DESC',
  HeadShaAsc = 'HEAD_SHA_ASC',
  HeadShaDesc = 'HEAD_SHA_DESC',
  HtmlUrlAsc = 'HTML_URL_ASC',
  HtmlUrlDesc = 'HTML_URL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  JobNodeIdAsc = 'JOB_NODE_ID_ASC',
  JobNodeIdDesc = 'JOB_NODE_ID_DESC',
  LabelsAsc = 'LABELS_ASC',
  LabelsDesc = 'LABELS_DESC',
  LogAsc = 'LOG_ASC',
  LogDesc = 'LOG_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  RunnerGroupIdAsc = 'RUNNER_GROUP_ID_ASC',
  RunnerGroupIdDesc = 'RUNNER_GROUP_ID_DESC',
  RunnerGroupNameAsc = 'RUNNER_GROUP_NAME_ASC',
  RunnerGroupNameDesc = 'RUNNER_GROUP_NAME_DESC',
  RunnerIdAsc = 'RUNNER_ID_ASC',
  RunnerIdDesc = 'RUNNER_ID_DESC',
  RunnerNameAsc = 'RUNNER_NAME_ASC',
  RunnerNameDesc = 'RUNNER_NAME_DESC',
  RunIdAsc = 'RUN_ID_ASC',
  RunIdDesc = 'RUN_ID_DESC',
  RunUrlAsc = 'RUN_URL_ASC',
  RunUrlDesc = 'RUN_URL_DESC',
  StartedAtAsc = 'STARTED_AT_ASC',
  StartedAtDesc = 'STARTED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  StepsAsc = 'STEPS_ASC',
  StepsDesc = 'STEPS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WorkflowNameAsc = 'WORKFLOW_NAME_ASC',
  WorkflowNameDesc = 'WORKFLOW_NAME_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** Represents an update to a `GithubActionsWorkflowRun`. Fields that are set will be updated. */
export type GithubActionsWorkflowRunPatch = {
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  artifactsUrl?: InputMaybe<Scalars['String']>;
  cancelUrl?: InputMaybe<Scalars['String']>;
  checkSuiteId?: InputMaybe<Scalars['BigInt']>;
  checkSuiteNodeId?: InputMaybe<Scalars['String']>;
  checkSuiteUrl?: InputMaybe<Scalars['String']>;
  conclusion?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  event?: InputMaybe<Scalars['String']>;
  headBranch?: InputMaybe<Scalars['String']>;
  headCommit?: InputMaybe<Scalars['JSON']>;
  headRepositoryUrl?: InputMaybe<Scalars['String']>;
  htmlUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['BigInt']>;
  jobsUrl?: InputMaybe<Scalars['String']>;
  logsUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  pullRequests?: InputMaybe<Scalars['JSON']>;
  repoId?: InputMaybe<Scalars['UUID']>;
  repositoryUrl?: InputMaybe<Scalars['String']>;
  rerunUrl?: InputMaybe<Scalars['String']>;
  runAttempt?: InputMaybe<Scalars['Int']>;
  runNumber?: InputMaybe<Scalars['Int']>;
  runStartedAt?: InputMaybe<Scalars['Datetime']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  url?: InputMaybe<Scalars['String']>;
  workflowId?: InputMaybe<Scalars['BigInt']>;
  workflowRunNodeId?: InputMaybe<Scalars['String']>;
  workflowUrl?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `GithubActionsWorkflowRun` values. */
export type GithubActionsWorkflowRunsConnection = {
  /** A list of edges which contains the `GithubActionsWorkflowRun` and cursor to aid in pagination. */
  edges: Array<GithubActionsWorkflowRunsEdge>;
  /** A list of `GithubActionsWorkflowRun` objects. */
  nodes: Array<GithubActionsWorkflowRun>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubActionsWorkflowRun` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubActionsWorkflowRun` edge in the connection. */
export type GithubActionsWorkflowRunsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubActionsWorkflowRun` at the end of the edge. */
  node: GithubActionsWorkflowRun;
};

/** Methods to use when ordering `GithubActionsWorkflowRun`. */
export enum GithubActionsWorkflowRunsOrderBy {
  ArtifactsUrlAsc = 'ARTIFACTS_URL_ASC',
  ArtifactsUrlDesc = 'ARTIFACTS_URL_DESC',
  CancelUrlAsc = 'CANCEL_URL_ASC',
  CancelUrlDesc = 'CANCEL_URL_DESC',
  CheckSuiteIdAsc = 'CHECK_SUITE_ID_ASC',
  CheckSuiteIdDesc = 'CHECK_SUITE_ID_DESC',
  CheckSuiteNodeIdAsc = 'CHECK_SUITE_NODE_ID_ASC',
  CheckSuiteNodeIdDesc = 'CHECK_SUITE_NODE_ID_DESC',
  CheckSuiteUrlAsc = 'CHECK_SUITE_URL_ASC',
  CheckSuiteUrlDesc = 'CHECK_SUITE_URL_DESC',
  ConclusionAsc = 'CONCLUSION_ASC',
  ConclusionDesc = 'CONCLUSION_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EventAsc = 'EVENT_ASC',
  EventDesc = 'EVENT_DESC',
  HeadBranchAsc = 'HEAD_BRANCH_ASC',
  HeadBranchDesc = 'HEAD_BRANCH_DESC',
  HeadCommitAsc = 'HEAD_COMMIT_ASC',
  HeadCommitDesc = 'HEAD_COMMIT_DESC',
  HeadRepositoryUrlAsc = 'HEAD_REPOSITORY_URL_ASC',
  HeadRepositoryUrlDesc = 'HEAD_REPOSITORY_URL_DESC',
  HtmlUrlAsc = 'HTML_URL_ASC',
  HtmlUrlDesc = 'HTML_URL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  JobsUrlAsc = 'JOBS_URL_ASC',
  JobsUrlDesc = 'JOBS_URL_DESC',
  LogsUrlAsc = 'LOGS_URL_ASC',
  LogsUrlDesc = 'LOGS_URL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PullRequestsAsc = 'PULL_REQUESTS_ASC',
  PullRequestsDesc = 'PULL_REQUESTS_DESC',
  RepositoryUrlAsc = 'REPOSITORY_URL_ASC',
  RepositoryUrlDesc = 'REPOSITORY_URL_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  RerunUrlAsc = 'RERUN_URL_ASC',
  RerunUrlDesc = 'RERUN_URL_DESC',
  RunAttemptAsc = 'RUN_ATTEMPT_ASC',
  RunAttemptDesc = 'RUN_ATTEMPT_DESC',
  RunNumberAsc = 'RUN_NUMBER_ASC',
  RunNumberDesc = 'RUN_NUMBER_DESC',
  RunStartedAtAsc = 'RUN_STARTED_AT_ASC',
  RunStartedAtDesc = 'RUN_STARTED_AT_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WorkflowIdAsc = 'WORKFLOW_ID_ASC',
  WorkflowIdDesc = 'WORKFLOW_ID_DESC',
  WorkflowRunNodeIdAsc = 'WORKFLOW_RUN_NODE_ID_ASC',
  WorkflowRunNodeIdDesc = 'WORKFLOW_RUN_NODE_ID_DESC',
  WorkflowUrlAsc = 'WORKFLOW_URL_ASC',
  WorkflowUrlDesc = 'WORKFLOW_URL_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** A connection to a list of `GithubActionsWorkflow` values. */
export type GithubActionsWorkflowsConnection = {
  /** A list of edges which contains the `GithubActionsWorkflow` and cursor to aid in pagination. */
  edges: Array<GithubActionsWorkflowsEdge>;
  /** A list of `GithubActionsWorkflow` objects. */
  nodes: Array<GithubActionsWorkflow>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GithubActionsWorkflow` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GithubActionsWorkflow` edge in the connection. */
export type GithubActionsWorkflowsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GithubActionsWorkflow` at the end of the edge. */
  node: GithubActionsWorkflow;
};

/** Methods to use when ordering `GithubActionsWorkflow`. */
export enum GithubActionsWorkflowsOrderBy {
  BadgeUrlAsc = 'BADGE_URL_ASC',
  BadgeUrlDesc = 'BADGE_URL_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  HtmlUrlAsc = 'HTML_URL_ASC',
  HtmlUrlDesc = 'HTML_URL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WorkflowNodeIdAsc = 'WORKFLOW_NODE_ID_ASC',
  WorkflowNodeIdDesc = 'WORKFLOW_NODE_ID_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** issues of a GitHub repo */
export type GithubIssue = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** login of the author of the issue */
  authorLogin?: Maybe<Scalars['String']>;
  /** body of the issue */
  body?: Maybe<Scalars['String']>;
  /** boolean to determine if the issue is closed */
  closed?: Maybe<Scalars['Boolean']>;
  /** timestamp of when the issue was closed */
  closedAt?: Maybe<Scalars['Datetime']>;
  commentCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  /** boolean to determine if the issue was created via email */
  createdViaEmail?: Maybe<Scalars['Boolean']>;
  /** GitHub database_id of the issue */
  databaseId: Scalars['Int'];
  /** login of the editor of the issue */
  editorLogin?: Maybe<Scalars['String']>;
  /** boolean to determine if the issue was edited and includes an edit with the creation data */
  includesCreatedEdit?: Maybe<Scalars['Boolean']>;
  /** number of labels associated to the issue */
  labelCount?: Maybe<Scalars['Int']>;
  /** labels associated to the issue */
  labels: Scalars['JSON'];
  /** timestamp when the issue was edited */
  lastEditedAt?: Maybe<Scalars['Datetime']>;
  /** boolean to determine if the issue is locked */
  locked?: Maybe<Scalars['Boolean']>;
  /** number of milestones associated to the issue */
  milestoneCount?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** GitHub number for the issue */
  number: Scalars['Int'];
  /** number of participants associated to the issue */
  participantCount?: Maybe<Scalars['Int']>;
  /** timestamp when the issue was published */
  publishedAt?: Maybe<Scalars['Datetime']>;
  /** number of reactions associated to the issue */
  reactionCount?: Maybe<Scalars['Int']>;
  /** Reads a single `Repo` that is related to this `GithubIssue`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** state of the issue */
  state?: Maybe<Scalars['String']>;
  /** title of the issue */
  title?: Maybe<Scalars['String']>;
  /** timestamp when the issue was updated */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** GitHub URL of the issue */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** login of the author of the issue */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** body of the issue */
  body?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the issue is closed */
  closed?: InputMaybe<Scalars['Boolean']>;
  /** timestamp of when the issue was closed */
  closedAt?: InputMaybe<Scalars['Datetime']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the issue was created via email */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** GitHub database_id of the issue */
  databaseId: Scalars['Int'];
  /** login of the editor of the issue */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the issue was edited and includes an edit with the creation data */
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>;
  /** number of labels associated to the issue */
  labelCount?: InputMaybe<Scalars['Int']>;
  /** labels associated to the issue */
  labels?: InputMaybe<Scalars['JSON']>;
  /** timestamp when the issue was edited */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the issue is locked */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** number of milestones associated to the issue */
  milestoneCount?: InputMaybe<Scalars['Int']>;
  /** GitHub number for the issue */
  number: Scalars['Int'];
  /** number of participants associated to the issue */
  participantCount?: InputMaybe<Scalars['Int']>;
  /** timestamp when the issue was published */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** number of reactions associated to the issue */
  reactionCount?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** state of the issue */
  state?: InputMaybe<Scalars['String']>;
  /** title of the issue */
  title?: InputMaybe<Scalars['String']>;
  /** timestamp when the issue was updated */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** GitHub URL of the issue */
  url?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubIssue`. Fields that are set will be updated. */
export type GithubIssuePatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** login of the author of the issue */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** body of the issue */
  body?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the issue is closed */
  closed?: InputMaybe<Scalars['Boolean']>;
  /** timestamp of when the issue was closed */
  closedAt?: InputMaybe<Scalars['Datetime']>;
  commentCount?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the issue was created via email */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** GitHub database_id of the issue */
  databaseId?: InputMaybe<Scalars['Int']>;
  /** login of the editor of the issue */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the issue was edited and includes an edit with the creation data */
  includesCreatedEdit?: InputMaybe<Scalars['Boolean']>;
  /** number of labels associated to the issue */
  labelCount?: InputMaybe<Scalars['Int']>;
  /** labels associated to the issue */
  labels?: InputMaybe<Scalars['JSON']>;
  /** timestamp when the issue was edited */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the issue is locked */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** number of milestones associated to the issue */
  milestoneCount?: InputMaybe<Scalars['Int']>;
  /** GitHub number for the issue */
  number?: InputMaybe<Scalars['Int']>;
  /** number of participants associated to the issue */
  participantCount?: InputMaybe<Scalars['Int']>;
  /** timestamp when the issue was published */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** number of reactions associated to the issue */
  reactionCount?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** state of the issue */
  state?: InputMaybe<Scalars['String']>;
  /** title of the issue */
  title?: InputMaybe<Scalars['String']>;
  /** timestamp when the issue was updated */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** GitHub URL of the issue */
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

/** GitHub Workflow Run Jobs */
export type GithubPullRequest = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** the number of additions in the pull request */
  additions?: Maybe<Scalars['Int']>;
  /** author association to the repo */
  authorAssociation?: Maybe<Scalars['String']>;
  /** URL to the avatar of the author of the pull request */
  authorAvatarUrl?: Maybe<Scalars['String']>;
  /** login of the author of the pull request */
  authorLogin?: Maybe<Scalars['String']>;
  /** name of the author of the pull request */
  authorName?: Maybe<Scalars['String']>;
  /** the name of base ref associated with the pull request */
  baseRefName?: Maybe<Scalars['String']>;
  /** the base ref object id associated with the pull request */
  baseRefOid?: Maybe<Scalars['String']>;
  /** the name of the base repo for the pull request */
  baseRepositoryName?: Maybe<Scalars['String']>;
  /** body of the pull request */
  body?: Maybe<Scalars['String']>;
  /** the number of files changed/modified in the pull request */
  changedFiles?: Maybe<Scalars['Int']>;
  /** boolean to determine if the pull request is closed */
  closed?: Maybe<Scalars['Boolean']>;
  /** timestamp of when the pull request was closed */
  closedAt?: Maybe<Scalars['Datetime']>;
  /** the number of comments in the pull request */
  commentCount?: Maybe<Scalars['Int']>;
  commitCount?: Maybe<Scalars['Int']>;
  /** timestamp of when the pull request was created */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** boolean to determine if the pull request was created via email */
  createdViaEmail?: Maybe<Scalars['Boolean']>;
  /** GitHub database_id of the pull request */
  databaseId: Scalars['Int'];
  /** the number of deletions in the pull request */
  deletions?: Maybe<Scalars['Int']>;
  /** login of the editor of the pull request */
  editorLogin?: Maybe<Scalars['String']>;
  /** the name of head ref associated with the pull request */
  headRefName?: Maybe<Scalars['String']>;
  /** the head ref object id associated with the pull request */
  headRefOid?: Maybe<Scalars['String']>;
  /** the name of the head repo for the pull request */
  headRepositoryName?: Maybe<Scalars['String']>;
  /** boolean to determine if the pull request is a draft */
  isDraft?: Maybe<Scalars['Boolean']>;
  /** number of labels associated to the pull request */
  labelCount?: Maybe<Scalars['Int']>;
  /** labels associated to the pull request */
  labels: Scalars['JSON'];
  /** timestamp of when the pull request was last edited */
  lastEditedAt?: Maybe<Scalars['Datetime']>;
  /** boolean to determine if the pull request is locked */
  locked?: Maybe<Scalars['Boolean']>;
  /** boolean to determine if a maintainer can modify the pull request */
  maintainerCanModify?: Maybe<Scalars['Boolean']>;
  /** mergeable state of the pull request */
  mergeable?: Maybe<Scalars['String']>;
  /** boolean to determine if the pull request is merged */
  merged?: Maybe<Scalars['Boolean']>;
  /** timestamp of when the pull request was merged */
  mergedAt?: Maybe<Scalars['Datetime']>;
  /** actor who merged the pull request */
  mergedBy?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** GitHub number of the pull request */
  number?: Maybe<Scalars['Int']>;
  /** number of participants associated to the pull request */
  participantCount?: Maybe<Scalars['Int']>;
  /** timestamp of when the pull request was published */
  publishedAt?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Repo` that is related to this `GithubPullRequest`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** review decision of the pull request */
  reviewDecision?: Maybe<Scalars['String']>;
  /** state of the pull request */
  state?: Maybe<Scalars['String']>;
  /** title of the pull request */
  title?: Maybe<Scalars['String']>;
  /** timestamp of when the pull request was updated */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** GitHub URL of the pull request */
  url?: Maybe<Scalars['String']>;
};

/** commits for all pull requests of a GitHub repo */
export type GithubPullRequestCommit = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** the number of additions in the commit */
  additions?: Maybe<Scalars['Int']>;
  /** email of the author of the modification */
  authorEmail?: Maybe<Scalars['String']>;
  /** name of the author of the the modification */
  authorName?: Maybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  authorWhen?: Maybe<Scalars['Datetime']>;
  /** the number of files changed/modified in the commit */
  changedFiles?: Maybe<Scalars['Int']>;
  /** email of the author who committed the modification */
  committerEmail?: Maybe<Scalars['String']>;
  /** name of the author who committed the modification */
  committerName?: Maybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  committerWhen?: Maybe<Scalars['Datetime']>;
  /** the number of deletions in the commit */
  deletions?: Maybe<Scalars['Int']>;
  /** hash of the commit */
  hash: Scalars['String'];
  /** message of the commit */
  message?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** GitHub pull request number of the commit */
  prNumber: Scalars['Int'];
  /** Reads a single `Repo` that is related to this `GithubPullRequestCommit`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** GitHub URL of the commit */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of additions in the commit */
  additions?: InputMaybe<Scalars['Int']>;
  /** email of the author of the modification */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  authorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** the number of files changed/modified in the commit */
  changedFiles?: InputMaybe<Scalars['Int']>;
  /** email of the author who committed the modification */
  committerEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  committerName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  /** the number of deletions in the commit */
  deletions?: InputMaybe<Scalars['Int']>;
  /** hash of the commit */
  hash: Scalars['String'];
  /** message of the commit */
  message?: InputMaybe<Scalars['String']>;
  /** GitHub pull request number of the commit */
  prNumber: Scalars['Int'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** GitHub URL of the commit */
  url?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubPullRequestCommit`. Fields that are set will be updated. */
export type GithubPullRequestCommitPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of additions in the commit */
  additions?: InputMaybe<Scalars['Int']>;
  /** email of the author of the modification */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** name of the author of the the modification */
  authorName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the modifcation was authored */
  authorWhen?: InputMaybe<Scalars['Datetime']>;
  /** the number of files changed/modified in the commit */
  changedFiles?: InputMaybe<Scalars['Int']>;
  /** email of the author who committed the modification */
  committerEmail?: InputMaybe<Scalars['String']>;
  /** name of the author who committed the modification */
  committerName?: InputMaybe<Scalars['String']>;
  /** timestamp of when the commit was made */
  committerWhen?: InputMaybe<Scalars['Datetime']>;
  /** the number of deletions in the commit */
  deletions?: InputMaybe<Scalars['Int']>;
  /** hash of the commit */
  hash?: InputMaybe<Scalars['String']>;
  /** message of the commit */
  message?: InputMaybe<Scalars['String']>;
  /** GitHub pull request number of the commit */
  prNumber?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** GitHub URL of the commit */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of additions in the pull request */
  additions?: InputMaybe<Scalars['Int']>;
  /** author association to the repo */
  authorAssociation?: InputMaybe<Scalars['String']>;
  /** URL to the avatar of the author of the pull request */
  authorAvatarUrl?: InputMaybe<Scalars['String']>;
  /** login of the author of the pull request */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** name of the author of the pull request */
  authorName?: InputMaybe<Scalars['String']>;
  /** the name of base ref associated with the pull request */
  baseRefName?: InputMaybe<Scalars['String']>;
  /** the base ref object id associated with the pull request */
  baseRefOid?: InputMaybe<Scalars['String']>;
  /** the name of the base repo for the pull request */
  baseRepositoryName?: InputMaybe<Scalars['String']>;
  /** body of the pull request */
  body?: InputMaybe<Scalars['String']>;
  /** the number of files changed/modified in the pull request */
  changedFiles?: InputMaybe<Scalars['Int']>;
  /** boolean to determine if the pull request is closed */
  closed?: InputMaybe<Scalars['Boolean']>;
  /** timestamp of when the pull request was closed */
  closedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of comments in the pull request */
  commentCount?: InputMaybe<Scalars['Int']>;
  commitCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of when the pull request was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the pull request was created via email */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** GitHub database_id of the pull request */
  databaseId: Scalars['Int'];
  /** the number of deletions in the pull request */
  deletions?: InputMaybe<Scalars['Int']>;
  /** login of the editor of the pull request */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** the name of head ref associated with the pull request */
  headRefName?: InputMaybe<Scalars['String']>;
  /** the head ref object id associated with the pull request */
  headRefOid?: InputMaybe<Scalars['String']>;
  /** the name of the head repo for the pull request */
  headRepositoryName?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the pull request is a draft */
  isDraft?: InputMaybe<Scalars['Boolean']>;
  /** number of labels associated to the pull request */
  labelCount?: InputMaybe<Scalars['Int']>;
  /** labels associated to the pull request */
  labels?: InputMaybe<Scalars['JSON']>;
  /** timestamp of when the pull request was last edited */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the pull request is locked */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** boolean to determine if a maintainer can modify the pull request */
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>;
  /** mergeable state of the pull request */
  mergeable?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the pull request is merged */
  merged?: InputMaybe<Scalars['Boolean']>;
  /** timestamp of when the pull request was merged */
  mergedAt?: InputMaybe<Scalars['Datetime']>;
  /** actor who merged the pull request */
  mergedBy?: InputMaybe<Scalars['String']>;
  /** GitHub number of the pull request */
  number?: InputMaybe<Scalars['Int']>;
  /** number of participants associated to the pull request */
  participantCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of when the pull request was published */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** review decision of the pull request */
  reviewDecision?: InputMaybe<Scalars['String']>;
  /** state of the pull request */
  state?: InputMaybe<Scalars['String']>;
  /** title of the pull request */
  title?: InputMaybe<Scalars['String']>;
  /** timestamp of when the pull request was updated */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** GitHub URL of the pull request */
  url?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubPullRequest`. Fields that are set will be updated. */
export type GithubPullRequestPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of additions in the pull request */
  additions?: InputMaybe<Scalars['Int']>;
  /** author association to the repo */
  authorAssociation?: InputMaybe<Scalars['String']>;
  /** URL to the avatar of the author of the pull request */
  authorAvatarUrl?: InputMaybe<Scalars['String']>;
  /** login of the author of the pull request */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** name of the author of the pull request */
  authorName?: InputMaybe<Scalars['String']>;
  /** the name of base ref associated with the pull request */
  baseRefName?: InputMaybe<Scalars['String']>;
  /** the base ref object id associated with the pull request */
  baseRefOid?: InputMaybe<Scalars['String']>;
  /** the name of the base repo for the pull request */
  baseRepositoryName?: InputMaybe<Scalars['String']>;
  /** body of the pull request */
  body?: InputMaybe<Scalars['String']>;
  /** the number of files changed/modified in the pull request */
  changedFiles?: InputMaybe<Scalars['Int']>;
  /** boolean to determine if the pull request is closed */
  closed?: InputMaybe<Scalars['Boolean']>;
  /** timestamp of when the pull request was closed */
  closedAt?: InputMaybe<Scalars['Datetime']>;
  /** the number of comments in the pull request */
  commentCount?: InputMaybe<Scalars['Int']>;
  commitCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of when the pull request was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the pull request was created via email */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** GitHub database_id of the pull request */
  databaseId?: InputMaybe<Scalars['Int']>;
  /** the number of deletions in the pull request */
  deletions?: InputMaybe<Scalars['Int']>;
  /** login of the editor of the pull request */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** the name of head ref associated with the pull request */
  headRefName?: InputMaybe<Scalars['String']>;
  /** the head ref object id associated with the pull request */
  headRefOid?: InputMaybe<Scalars['String']>;
  /** the name of the head repo for the pull request */
  headRepositoryName?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the pull request is a draft */
  isDraft?: InputMaybe<Scalars['Boolean']>;
  /** number of labels associated to the pull request */
  labelCount?: InputMaybe<Scalars['Int']>;
  /** labels associated to the pull request */
  labels?: InputMaybe<Scalars['JSON']>;
  /** timestamp of when the pull request was last edited */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the pull request is locked */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** boolean to determine if a maintainer can modify the pull request */
  maintainerCanModify?: InputMaybe<Scalars['Boolean']>;
  /** mergeable state of the pull request */
  mergeable?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the pull request is merged */
  merged?: InputMaybe<Scalars['Boolean']>;
  /** timestamp of when the pull request was merged */
  mergedAt?: InputMaybe<Scalars['Datetime']>;
  /** actor who merged the pull request */
  mergedBy?: InputMaybe<Scalars['String']>;
  /** GitHub number of the pull request */
  number?: InputMaybe<Scalars['Int']>;
  /** number of participants associated to the pull request */
  participantCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of when the pull request was published */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** review decision of the pull request */
  reviewDecision?: InputMaybe<Scalars['String']>;
  /** state of the pull request */
  state?: InputMaybe<Scalars['String']>;
  /** title of the pull request */
  title?: InputMaybe<Scalars['String']>;
  /** timestamp of when the pull request was updated */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** GitHub URL of the pull request */
  url?: InputMaybe<Scalars['String']>;
};

/** reviews for all pull requests of a GitHub repo */
export type GithubPullRequestReview = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** author association to the repo */
  authorAssociation?: Maybe<Scalars['String']>;
  /** boolean to determine if author can push to the repo */
  authorCanPushToRepository?: Maybe<Scalars['Boolean']>;
  /** login of the author of the review */
  authorLogin?: Maybe<Scalars['String']>;
  /** URL to the profile of the author of the review */
  authorUrl?: Maybe<Scalars['String']>;
  /** body of the review */
  body?: Maybe<Scalars['String']>;
  /** number of comments associated to the review */
  commentCount?: Maybe<Scalars['Int']>;
  /** timestamp of when the review was created */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** boolean to determine if the review was created via email */
  createdViaEmail?: Maybe<Scalars['Boolean']>;
  /** login of the editor of the review */
  editorLogin?: Maybe<Scalars['String']>;
  /** GitHub id of the review */
  id: Scalars['String'];
  /** timestamp of when the review was last edited */
  lastEditedAt?: Maybe<Scalars['Datetime']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** GitHub pull request number of the review */
  prNumber: Scalars['Int'];
  /** timestamp of when the review was published */
  publishedAt?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Repo` that is related to this `GithubPullRequestReview`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** state of the review */
  state?: Maybe<Scalars['String']>;
  /** timestamp of when the review was submitted */
  submittedAt?: Maybe<Scalars['Datetime']>;
  /** timestamp of when the review was updated */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** author association to the repo */
  authorAssociation?: InputMaybe<Scalars['String']>;
  /** boolean to determine if author can push to the repo */
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>;
  /** login of the author of the review */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** URL to the profile of the author of the review */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** body of the review */
  body?: InputMaybe<Scalars['String']>;
  /** number of comments associated to the review */
  commentCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of when the review was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the review was created via email */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** login of the editor of the review */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** GitHub id of the review */
  id: Scalars['String'];
  /** timestamp of when the review was last edited */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** GitHub pull request number of the review */
  prNumber: Scalars['Int'];
  /** timestamp of when the review was published */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** state of the review */
  state?: InputMaybe<Scalars['String']>;
  /** timestamp of when the review was submitted */
  submittedAt?: InputMaybe<Scalars['Datetime']>;
  /** timestamp of when the review was updated */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `GithubPullRequestReview`. Fields that are set will be updated. */
export type GithubPullRequestReviewPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** author association to the repo */
  authorAssociation?: InputMaybe<Scalars['String']>;
  /** boolean to determine if author can push to the repo */
  authorCanPushToRepository?: InputMaybe<Scalars['Boolean']>;
  /** login of the author of the review */
  authorLogin?: InputMaybe<Scalars['String']>;
  /** URL to the profile of the author of the review */
  authorUrl?: InputMaybe<Scalars['String']>;
  /** body of the review */
  body?: InputMaybe<Scalars['String']>;
  /** number of comments associated to the review */
  commentCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of when the review was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** boolean to determine if the review was created via email */
  createdViaEmail?: InputMaybe<Scalars['Boolean']>;
  /** login of the editor of the review */
  editorLogin?: InputMaybe<Scalars['String']>;
  /** GitHub id of the review */
  id?: InputMaybe<Scalars['String']>;
  /** timestamp of when the review was last edited */
  lastEditedAt?: InputMaybe<Scalars['Datetime']>;
  /** GitHub pull request number of the review */
  prNumber?: InputMaybe<Scalars['Int']>;
  /** timestamp of when the review was published */
  publishedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** state of the review */
  state?: InputMaybe<Scalars['String']>;
  /** timestamp of when the review was submitted */
  submittedAt?: InputMaybe<Scalars['Datetime']>;
  /** timestamp of when the review was updated */
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

/** info/metadata of a GitHub repo */
export type GithubRepoInfo = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** advanced security availability */
  advancedSecurity?: Maybe<Scalars['String']>;
  /** timestamp of when the repo was created */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** the name of the default branch for the repo */
  defaultBranchName?: Maybe<Scalars['String']>;
  /** the description for the repo */
  description?: Maybe<Scalars['String']>;
  /** number of forks associated to the repo */
  forkCount?: Maybe<Scalars['Int']>;
  /** the GitHub homepage URL for the repo */
  homepageUrl?: Maybe<Scalars['String']>;
  /** boolean to determine if the repo is archived */
  isArchived?: Maybe<Scalars['Boolean']>;
  /** boolean to determine if the repo is disabled */
  isDisabled?: Maybe<Scalars['Boolean']>;
  /** boolean to determine if the repo is private */
  isPrivate?: Maybe<Scalars['Boolean']>;
  /** the author of the latest release in the repo */
  latestReleaseAuthor?: Maybe<Scalars['String']>;
  /** timestamp of the creation of the latest release in the repo */
  latestReleaseCreatedAt?: Maybe<Scalars['Datetime']>;
  /** the name of the latest release in the repo */
  latestReleaseName?: Maybe<Scalars['String']>;
  /** timestamp of the publishing of the latest release in the repo */
  latestReleasePublishedAt?: Maybe<Scalars['Datetime']>;
  /** the license key for the repo */
  licenseKey?: Maybe<Scalars['String']>;
  /** the license name for the repo */
  licenseName?: Maybe<Scalars['String']>;
  mirrorUrl?: Maybe<Scalars['String']>;
  /** the name of the repo */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** the user or organization that owns the repo */
  owner: Scalars['String'];
  /** the primary language for the repo */
  primaryLanguage?: Maybe<Scalars['String']>;
  /** timestamp of the latest push to the repo */
  pushedAt?: Maybe<Scalars['Datetime']>;
  /** number of releases associated to the repo */
  releasesCount?: Maybe<Scalars['Int']>;
  /** Reads a single `Repo` that is related to this `GithubRepoInfo`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** secret scanning availability */
  secretScanning?: Maybe<Scalars['String']>;
  /** secret scanning push protection availability */
  secretScanningPushProtection?: Maybe<Scalars['String']>;
  /** the number of kilobytes on disk for the repo */
  size?: Maybe<Scalars['Int']>;
  /** number of stargazers associated to the repo */
  stargazersCount?: Maybe<Scalars['Int']>;
  /** number of issues associated to the repo */
  totalIssuesCount?: Maybe<Scalars['Int']>;
  /** timestamp of the latest update to the repo */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** number of watchers associated to the repo */
  watchersCount?: Maybe<Scalars['Int']>;
};

/**
 * A condition to be used against `GithubRepoInfo` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GithubRepoInfoCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `advancedSecurity` field. */
  advancedSecurity?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `defaultBranchName` field. */
  defaultBranchName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `forkCount` field. */
  forkCount?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `homepageUrl` field. */
  homepageUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `isArchived` field. */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isDisabled` field. */
  isDisabled?: InputMaybe<Scalars['Boolean']>;
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
  /** Checks for equality with the object’s `mirrorUrl` field. */
  mirrorUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
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
  /** Checks for equality with the object’s `secretScanning` field. */
  secretScanning?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `secretScanningPushProtection` field. */
  secretScanningPushProtection?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `size` field. */
  size?: InputMaybe<Scalars['Int']>;
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
  /** Filter by the object’s `advancedSecurity` field. */
  advancedSecurity?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GithubRepoInfoFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `defaultBranchName` field. */
  defaultBranchName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `forkCount` field. */
  forkCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `homepageUrl` field. */
  homepageUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isArchived` field. */
  isArchived?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `isDisabled` field. */
  isDisabled?: InputMaybe<BooleanFilter>;
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
  /** Filter by the object’s `mirrorUrl` field. */
  mirrorUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GithubRepoInfoFilter>;
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
  /** Filter by the object’s `secretScanning` field. */
  secretScanning?: InputMaybe<StringFilter>;
  /** Filter by the object’s `secretScanningPushProtection` field. */
  secretScanningPushProtection?: InputMaybe<StringFilter>;
  /** Filter by the object’s `size` field. */
  size?: InputMaybe<IntFilter>;
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** advanced security availability */
  advancedSecurity?: InputMaybe<Scalars['String']>;
  /** timestamp of when the repo was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** the name of the default branch for the repo */
  defaultBranchName?: InputMaybe<Scalars['String']>;
  /** the description for the repo */
  description?: InputMaybe<Scalars['String']>;
  /** number of forks associated to the repo */
  forkCount?: InputMaybe<Scalars['Int']>;
  /** the GitHub homepage URL for the repo */
  homepageUrl?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the repo is archived */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** boolean to determine if the repo is disabled */
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  /** boolean to determine if the repo is private */
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  /** the author of the latest release in the repo */
  latestReleaseAuthor?: InputMaybe<Scalars['String']>;
  /** timestamp of the creation of the latest release in the repo */
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>;
  /** the name of the latest release in the repo */
  latestReleaseName?: InputMaybe<Scalars['String']>;
  /** timestamp of the publishing of the latest release in the repo */
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>;
  /** the license key for the repo */
  licenseKey?: InputMaybe<Scalars['String']>;
  /** the license name for the repo */
  licenseName?: InputMaybe<Scalars['String']>;
  mirrorUrl?: InputMaybe<Scalars['String']>;
  /** the name of the repo */
  name: Scalars['String'];
  /** the user or organization that owns the repo */
  owner: Scalars['String'];
  /** the primary language for the repo */
  primaryLanguage?: InputMaybe<Scalars['String']>;
  /** timestamp of the latest push to the repo */
  pushedAt?: InputMaybe<Scalars['Datetime']>;
  /** number of releases associated to the repo */
  releasesCount?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** secret scanning availability */
  secretScanning?: InputMaybe<Scalars['String']>;
  /** secret scanning push protection availability */
  secretScanningPushProtection?: InputMaybe<Scalars['String']>;
  /** the number of kilobytes on disk for the repo */
  size?: InputMaybe<Scalars['Int']>;
  /** number of stargazers associated to the repo */
  stargazersCount?: InputMaybe<Scalars['Int']>;
  /** number of issues associated to the repo */
  totalIssuesCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of the latest update to the repo */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** number of watchers associated to the repo */
  watchersCount?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `GithubRepoInfo`. Fields that are set will be updated. */
export type GithubRepoInfoPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** advanced security availability */
  advancedSecurity?: InputMaybe<Scalars['String']>;
  /** timestamp of when the repo was created */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** the name of the default branch for the repo */
  defaultBranchName?: InputMaybe<Scalars['String']>;
  /** the description for the repo */
  description?: InputMaybe<Scalars['String']>;
  /** number of forks associated to the repo */
  forkCount?: InputMaybe<Scalars['Int']>;
  /** the GitHub homepage URL for the repo */
  homepageUrl?: InputMaybe<Scalars['String']>;
  /** boolean to determine if the repo is archived */
  isArchived?: InputMaybe<Scalars['Boolean']>;
  /** boolean to determine if the repo is disabled */
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  /** boolean to determine if the repo is private */
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  /** the author of the latest release in the repo */
  latestReleaseAuthor?: InputMaybe<Scalars['String']>;
  /** timestamp of the creation of the latest release in the repo */
  latestReleaseCreatedAt?: InputMaybe<Scalars['Datetime']>;
  /** the name of the latest release in the repo */
  latestReleaseName?: InputMaybe<Scalars['String']>;
  /** timestamp of the publishing of the latest release in the repo */
  latestReleasePublishedAt?: InputMaybe<Scalars['Datetime']>;
  /** the license key for the repo */
  licenseKey?: InputMaybe<Scalars['String']>;
  /** the license name for the repo */
  licenseName?: InputMaybe<Scalars['String']>;
  mirrorUrl?: InputMaybe<Scalars['String']>;
  /** the name of the repo */
  name?: InputMaybe<Scalars['String']>;
  /** the user or organization that owns the repo */
  owner?: InputMaybe<Scalars['String']>;
  /** the primary language for the repo */
  primaryLanguage?: InputMaybe<Scalars['String']>;
  /** timestamp of the latest push to the repo */
  pushedAt?: InputMaybe<Scalars['Datetime']>;
  /** number of releases associated to the repo */
  releasesCount?: InputMaybe<Scalars['Int']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** secret scanning availability */
  secretScanning?: InputMaybe<Scalars['String']>;
  /** secret scanning push protection availability */
  secretScanningPushProtection?: InputMaybe<Scalars['String']>;
  /** the number of kilobytes on disk for the repo */
  size?: InputMaybe<Scalars['Int']>;
  /** number of stargazers associated to the repo */
  stargazersCount?: InputMaybe<Scalars['Int']>;
  /** number of issues associated to the repo */
  totalIssuesCount?: InputMaybe<Scalars['Int']>;
  /** timestamp of the latest update to the repo */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** number of watchers associated to the repo */
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
  AdvancedSecurityAsc = 'ADVANCED_SECURITY_ASC',
  AdvancedSecurityDesc = 'ADVANCED_SECURITY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DefaultBranchNameAsc = 'DEFAULT_BRANCH_NAME_ASC',
  DefaultBranchNameDesc = 'DEFAULT_BRANCH_NAME_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ForkCountAsc = 'FORK_COUNT_ASC',
  ForkCountDesc = 'FORK_COUNT_DESC',
  HomepageUrlAsc = 'HOMEPAGE_URL_ASC',
  HomepageUrlDesc = 'HOMEPAGE_URL_DESC',
  IsArchivedAsc = 'IS_ARCHIVED_ASC',
  IsArchivedDesc = 'IS_ARCHIVED_DESC',
  IsDisabledAsc = 'IS_DISABLED_ASC',
  IsDisabledDesc = 'IS_DISABLED_DESC',
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
  MirrorUrlAsc = 'MIRROR_URL_ASC',
  MirrorUrlDesc = 'MIRROR_URL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
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
  SecretScanningAsc = 'SECRET_SCANNING_ASC',
  SecretScanningDesc = 'SECRET_SCANNING_DESC',
  SecretScanningPushProtectionAsc = 'SECRET_SCANNING_PUSH_PROTECTION_ASC',
  SecretScanningPushProtectionDesc = 'SECRET_SCANNING_PUSH_PROTECTION_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
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

/** stargazers of a GitHub repo */
export type GithubStargazer = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** URL to the avatar of the user who starred the repo */
  avatarUrl?: Maybe<Scalars['String']>;
  /** public profile bio of the user who starred the repo */
  bio?: Maybe<Scalars['String']>;
  /** company of the user who starred the repo */
  company?: Maybe<Scalars['String']>;
  /** timestamp of when the user was created who starred the repo */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** email of the user who starred the repo */
  email?: Maybe<Scalars['String']>;
  /** location of the user who starred the repo */
  location?: Maybe<Scalars['String']>;
  /** login of the user who starred the repo */
  login: Scalars['String'];
  /** name of the user who starred the repo */
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `GithubStargazer`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** timestamp the user starred the repo */
  starredAt?: Maybe<Scalars['Datetime']>;
  /** twitter of the user who starred the repo */
  twitter?: Maybe<Scalars['String']>;
  /** timestamp of the latest update to the user who starred the repo */
  updatedAt?: Maybe<Scalars['Datetime']>;
  /** website of the user who starred the repo */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** URL to the avatar of the user who starred the repo */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** public profile bio of the user who starred the repo */
  bio?: InputMaybe<Scalars['String']>;
  /** company of the user who starred the repo */
  company?: InputMaybe<Scalars['String']>;
  /** timestamp of when the user was created who starred the repo */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the user who starred the repo */
  email?: InputMaybe<Scalars['String']>;
  /** location of the user who starred the repo */
  location?: InputMaybe<Scalars['String']>;
  /** login of the user who starred the repo */
  login: Scalars['String'];
  /** name of the user who starred the repo */
  name?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** timestamp the user starred the repo */
  starredAt?: InputMaybe<Scalars['Datetime']>;
  /** twitter of the user who starred the repo */
  twitter?: InputMaybe<Scalars['String']>;
  /** timestamp of the latest update to the user who starred the repo */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** website of the user who starred the repo */
  website?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `GithubStargazer`. Fields that are set will be updated. */
export type GithubStargazerPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** URL to the avatar of the user who starred the repo */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** public profile bio of the user who starred the repo */
  bio?: InputMaybe<Scalars['String']>;
  /** company of the user who starred the repo */
  company?: InputMaybe<Scalars['String']>;
  /** timestamp of when the user was created who starred the repo */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** email of the user who starred the repo */
  email?: InputMaybe<Scalars['String']>;
  /** location of the user who starred the repo */
  location?: InputMaybe<Scalars['String']>;
  /** login of the user who starred the repo */
  login?: InputMaybe<Scalars['String']>;
  /** name of the user who starred the repo */
  name?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** timestamp the user starred the repo */
  starredAt?: InputMaybe<Scalars['Datetime']>;
  /** twitter of the user who starred the repo */
  twitter?: InputMaybe<Scalars['String']>;
  /** timestamp of the latest update to the user who starred the repo */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** website of the user who starred the repo */
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

/** view of Gitleaks repo scan detections */
export type GitleaksRepoDetection = {
  /** detection author */
  author?: Maybe<Scalars['String']>;
  /** detection commit */
  commit?: Maybe<Scalars['String']>;
  /** detection date */
  date?: Maybe<Scalars['String']>;
  /** description of the detection */
  description?: Maybe<Scalars['String']>;
  /** detection email */
  email?: Maybe<Scalars['String']>;
  /** detection end column */
  endColumn?: Maybe<Scalars['String']>;
  /** detection end line */
  endLine?: Maybe<Scalars['String']>;
  /** detection entropy */
  entropy?: Maybe<Scalars['String']>;
  /** detection file */
  file?: Maybe<Scalars['String']>;
  /** detection fingerprint */
  fingerprint?: Maybe<Scalars['String']>;
  /** detection match */
  match?: Maybe<Scalars['String']>;
  /** detection message */
  message?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** detection rule id */
  ruleId?: Maybe<Scalars['String']>;
  /** detection secret */
  secret?: Maybe<Scalars['String']>;
  /** detection start column */
  startColumn?: Maybe<Scalars['String']>;
  /** detection start line */
  startLine?: Maybe<Scalars['String']>;
  /** detected symlink file */
  symlinkFile?: Maybe<Scalars['String']>;
  /** detection tags */
  tags?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GitleaksRepoDetection` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GitleaksRepoDetectionCondition = {
  /** Checks for equality with the object’s `author` field. */
  author?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `commit` field. */
  commit?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `endColumn` field. */
  endColumn?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `endLine` field. */
  endLine?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `entropy` field. */
  entropy?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `file` field. */
  file?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fingerprint` field. */
  fingerprint?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `match` field. */
  match?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `message` field. */
  message?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `ruleId` field. */
  ruleId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `secret` field. */
  secret?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `startColumn` field. */
  startColumn?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `startLine` field. */
  startLine?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `symlinkFile` field. */
  symlinkFile?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GitleaksRepoDetection` object types. All fields are combined with a logical ‘and.’ */
export type GitleaksRepoDetectionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitleaksRepoDetectionFilter>>;
  /** Filter by the object’s `author` field. */
  author?: InputMaybe<StringFilter>;
  /** Filter by the object’s `commit` field. */
  commit?: InputMaybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `endColumn` field. */
  endColumn?: InputMaybe<StringFilter>;
  /** Filter by the object’s `endLine` field. */
  endLine?: InputMaybe<StringFilter>;
  /** Filter by the object’s `entropy` field. */
  entropy?: InputMaybe<StringFilter>;
  /** Filter by the object’s `file` field. */
  file?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fingerprint` field. */
  fingerprint?: InputMaybe<StringFilter>;
  /** Filter by the object’s `match` field. */
  match?: InputMaybe<StringFilter>;
  /** Filter by the object’s `message` field. */
  message?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GitleaksRepoDetectionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitleaksRepoDetectionFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `ruleId` field. */
  ruleId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `secret` field. */
  secret?: InputMaybe<StringFilter>;
  /** Filter by the object’s `startColumn` field. */
  startColumn?: InputMaybe<StringFilter>;
  /** Filter by the object’s `startLine` field. */
  startLine?: InputMaybe<StringFilter>;
  /** Filter by the object’s `symlinkFile` field. */
  symlinkFile?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tags` field. */
  tags?: InputMaybe<StringFilter>;
};

/** A connection to a list of `GitleaksRepoDetection` values. */
export type GitleaksRepoDetectionsConnection = {
  /** A list of edges which contains the `GitleaksRepoDetection` and cursor to aid in pagination. */
  edges: Array<GitleaksRepoDetectionsEdge>;
  /** A list of `GitleaksRepoDetection` objects. */
  nodes: Array<GitleaksRepoDetection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitleaksRepoDetection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitleaksRepoDetection` edge in the connection. */
export type GitleaksRepoDetectionsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitleaksRepoDetection` at the end of the edge. */
  node: GitleaksRepoDetection;
};

/** Methods to use when ordering `GitleaksRepoDetection`. */
export enum GitleaksRepoDetectionsOrderBy {
  AuthorAsc = 'AUTHOR_ASC',
  AuthorDesc = 'AUTHOR_DESC',
  CommitAsc = 'COMMIT_ASC',
  CommitDesc = 'COMMIT_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  EndColumnAsc = 'END_COLUMN_ASC',
  EndColumnDesc = 'END_COLUMN_DESC',
  EndLineAsc = 'END_LINE_ASC',
  EndLineDesc = 'END_LINE_DESC',
  EntropyAsc = 'ENTROPY_ASC',
  EntropyDesc = 'ENTROPY_DESC',
  FileAsc = 'FILE_ASC',
  FileDesc = 'FILE_DESC',
  FingerprintAsc = 'FINGERPRINT_ASC',
  FingerprintDesc = 'FINGERPRINT_DESC',
  MatchAsc = 'MATCH_ASC',
  MatchDesc = 'MATCH_DESC',
  MessageAsc = 'MESSAGE_ASC',
  MessageDesc = 'MESSAGE_DESC',
  Natural = 'NATURAL',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  RuleIdAsc = 'RULE_ID_ASC',
  RuleIdDesc = 'RULE_ID_DESC',
  SecretAsc = 'SECRET_ASC',
  SecretDesc = 'SECRET_DESC',
  StartColumnAsc = 'START_COLUMN_ASC',
  StartColumnDesc = 'START_COLUMN_DESC',
  StartLineAsc = 'START_LINE_ASC',
  StartLineDesc = 'START_LINE_DESC',
  SymlinkFileAsc = 'SYMLINK_FILE_ASC',
  SymlinkFileDesc = 'SYMLINK_FILE_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC'
}

/** scan output of a Gitleaks repo scan */
export type GitleaksRepoScan = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `GitleaksRepoScan`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON output of a Gitleaks scan */
  results: Scalars['JSON'];
};

/**
 * A condition to be used against `GitleaksRepoScan` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GitleaksRepoScanCondition = {
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `results` field. */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `GitleaksRepoScan` object types. All fields are combined with a logical ‘and.’ */
export type GitleaksRepoScanFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GitleaksRepoScanFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<GitleaksRepoScanFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GitleaksRepoScanFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `results` field. */
  results?: InputMaybe<JsonFilter>;
};

/** An input for mutations affecting `GitleaksRepoScan` */
export type GitleaksRepoScanInput = {
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON output of a Gitleaks scan */
  results: Scalars['JSON'];
};

/** Represents an update to a `GitleaksRepoScan`. Fields that are set will be updated. */
export type GitleaksRepoScanPatch = {
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** JSON output of a Gitleaks scan */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `GitleaksRepoScan` values. */
export type GitleaksRepoScansConnection = {
  /** A list of edges which contains the `GitleaksRepoScan` and cursor to aid in pagination. */
  edges: Array<GitleaksRepoScansEdge>;
  /** A list of `GitleaksRepoScan` objects. */
  nodes: Array<GitleaksRepoScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GitleaksRepoScan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GitleaksRepoScan` edge in the connection. */
export type GitleaksRepoScansEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GitleaksRepoScan` at the end of the edge. */
  node: GitleaksRepoScan;
};

/** Methods to use when ordering `GitleaksRepoScan`. */
export enum GitleaksRepoScansOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ResultsAsc = 'RESULTS_ASC',
  ResultsDesc = 'RESULTS_DESC'
}

/** view of gosec repo scan detections */
export type GosecRepoDetection = {
  /** detection column in line */
  column?: Maybe<Scalars['String']>;
  /** detection confidence */
  confidence?: Maybe<Scalars['String']>;
  /** detection CWE (Common Weakness Enumeration) ID */
  cweId?: Maybe<Scalars['String']>;
  /** detection details */
  details?: Maybe<Scalars['String']>;
  /** detection file */
  file?: Maybe<Scalars['String']>;
  /** detection line in file */
  line?: Maybe<Scalars['String']>;
  /** flag to determine if #nosec annotation was used */
  nosec?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** detection rule ID */
  ruleId?: Maybe<Scalars['String']>;
  /** detection severity */
  severity?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GosecRepoDetection` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GosecRepoDetectionCondition = {
  /** Checks for equality with the object’s `column` field. */
  column?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `confidence` field. */
  confidence?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `cweId` field. */
  cweId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `details` field. */
  details?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `file` field. */
  file?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `line` field. */
  line?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `nosec` field. */
  nosec?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `ruleId` field. */
  ruleId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `severity` field. */
  severity?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GosecRepoDetection` object types. All fields are combined with a logical ‘and.’ */
export type GosecRepoDetectionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GosecRepoDetectionFilter>>;
  /** Filter by the object’s `column` field. */
  column?: InputMaybe<StringFilter>;
  /** Filter by the object’s `confidence` field. */
  confidence?: InputMaybe<StringFilter>;
  /** Filter by the object’s `cweId` field. */
  cweId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `details` field. */
  details?: InputMaybe<StringFilter>;
  /** Filter by the object’s `file` field. */
  file?: InputMaybe<StringFilter>;
  /** Filter by the object’s `line` field. */
  line?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nosec` field. */
  nosec?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GosecRepoDetectionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GosecRepoDetectionFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `ruleId` field. */
  ruleId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `severity` field. */
  severity?: InputMaybe<StringFilter>;
};

/** A connection to a list of `GosecRepoDetection` values. */
export type GosecRepoDetectionsConnection = {
  /** A list of edges which contains the `GosecRepoDetection` and cursor to aid in pagination. */
  edges: Array<GosecRepoDetectionsEdge>;
  /** A list of `GosecRepoDetection` objects. */
  nodes: Array<GosecRepoDetection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GosecRepoDetection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GosecRepoDetection` edge in the connection. */
export type GosecRepoDetectionsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GosecRepoDetection` at the end of the edge. */
  node: GosecRepoDetection;
};

/** Methods to use when ordering `GosecRepoDetection`. */
export enum GosecRepoDetectionsOrderBy {
  ColumnAsc = 'COLUMN_ASC',
  ColumnDesc = 'COLUMN_DESC',
  ConfidenceAsc = 'CONFIDENCE_ASC',
  ConfidenceDesc = 'CONFIDENCE_DESC',
  CweIdAsc = 'CWE_ID_ASC',
  CweIdDesc = 'CWE_ID_DESC',
  DetailsAsc = 'DETAILS_ASC',
  DetailsDesc = 'DETAILS_DESC',
  FileAsc = 'FILE_ASC',
  FileDesc = 'FILE_DESC',
  LineAsc = 'LINE_ASC',
  LineDesc = 'LINE_DESC',
  Natural = 'NATURAL',
  NosecAsc = 'NOSEC_ASC',
  NosecDesc = 'NOSEC_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  RuleIdAsc = 'RULE_ID_ASC',
  RuleIdDesc = 'RULE_ID_DESC',
  SeverityAsc = 'SEVERITY_ASC',
  SeverityDesc = 'SEVERITY_DESC'
}

/** Table of gosec repo scans */
export type GosecRepoScan = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** JSON issues from gosec repo scan */
  issues: Scalars['JSON'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `GosecRepoScan`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/**
 * A condition to be used against `GosecRepoScan` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GosecRepoScanCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `issues` field. */
  issues?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `GosecRepoScan` object types. All fields are combined with a logical ‘and.’ */
export type GosecRepoScanFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GosecRepoScanFilter>>;
  /** Filter by the object’s `issues` field. */
  issues?: InputMaybe<JsonFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GosecRepoScanFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GosecRepoScanFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
};

/** An input for mutations affecting `GosecRepoScan` */
export type GosecRepoScanInput = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** JSON issues from gosec repo scan */
  issues: Scalars['JSON'];
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** Represents an update to a `GosecRepoScan`. Fields that are set will be updated. */
export type GosecRepoScanPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** JSON issues from gosec repo scan */
  issues?: InputMaybe<Scalars['JSON']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `GosecRepoScan` values. */
export type GosecRepoScansConnection = {
  /** A list of edges which contains the `GosecRepoScan` and cursor to aid in pagination. */
  edges: Array<GosecRepoScansEdge>;
  /** A list of `GosecRepoScan` objects. */
  nodes: Array<GosecRepoScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GosecRepoScan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GosecRepoScan` edge in the connection. */
export type GosecRepoScansEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GosecRepoScan` at the end of the edge. */
  node: GosecRepoScan;
};

/** Methods to use when ordering `GosecRepoScan`. */
export enum GosecRepoScansOrderBy {
  IssuesAsc = 'ISSUES_ASC',
  IssuesDesc = 'ISSUES_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  MergestatSyncedAtAsc = '_MERGESTAT_SYNCED_AT_ASC',
  MergestatSyncedAtDesc = '_MERGESTAT_SYNCED_AT_DESC'
}

/** Table for Grype repo scan results */
export type GrypeRepoScan = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `GrypeRepoScan`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results of Grype repo scanner */
  results: Scalars['JSON'];
};

/**
 * A condition to be used against `GrypeRepoScan` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type GrypeRepoScanCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `results` field. */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `GrypeRepoScan` object types. All fields are combined with a logical ‘and.’ */
export type GrypeRepoScanFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GrypeRepoScanFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<GrypeRepoScanFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GrypeRepoScanFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `results` field. */
  results?: InputMaybe<JsonFilter>;
};

/** An input for mutations affecting `GrypeRepoScan` */
export type GrypeRepoScanInput = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results of Grype repo scanner */
  results: Scalars['JSON'];
};

/** Represents an update to a `GrypeRepoScan`. Fields that are set will be updated. */
export type GrypeRepoScanPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** JSON results of Grype repo scanner */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `GrypeRepoScan` values. */
export type GrypeRepoScansConnection = {
  /** A list of edges which contains the `GrypeRepoScan` and cursor to aid in pagination. */
  edges: Array<GrypeRepoScansEdge>;
  /** A list of `GrypeRepoScan` objects. */
  nodes: Array<GrypeRepoScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GrypeRepoScan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GrypeRepoScan` edge in the connection. */
export type GrypeRepoScansEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GrypeRepoScan` at the end of the edge. */
  node: GrypeRepoScan;
};

/** Methods to use when ordering `GrypeRepoScan`. */
export enum GrypeRepoScansOrderBy {
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

/** A connection to a list of `GrypeRepoVulnerability` values. */
export type GrypeRepoVulnerabilitiesConnection = {
  /** A list of edges which contains the `GrypeRepoVulnerability` and cursor to aid in pagination. */
  edges: Array<GrypeRepoVulnerabilitiesEdge>;
  /** A list of `GrypeRepoVulnerability` objects. */
  nodes: Array<GrypeRepoVulnerability>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `GrypeRepoVulnerability` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `GrypeRepoVulnerability` edge in the connection. */
export type GrypeRepoVulnerabilitiesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `GrypeRepoVulnerability` at the end of the edge. */
  node: GrypeRepoVulnerability;
};

/** Methods to use when ordering `GrypeRepoVulnerability`. */
export enum GrypeRepoVulnerabilitiesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  Natural = 'NATURAL',
  PathAsc = 'PATH_ASC',
  PathDesc = 'PATH_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  SeverityAsc = 'SEVERITY_ASC',
  SeverityDesc = 'SEVERITY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

/** view of Grype repo scans results */
export type GrypeRepoVulnerability = {
  /** description  of vulnerability */
  description?: Maybe<Scalars['String']>;
  /** id of the current vulnerability */
  id?: Maybe<Scalars['String']>;
  /** programming language associated to vulnerability */
  language?: Maybe<Scalars['String']>;
  /** path to file of current vulnerability */
  path?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** level of severity */
  severity?: Maybe<Scalars['String']>;
  /** type of vulnerability */
  type?: Maybe<Scalars['String']>;
  /** current version of package vulnerable */
  version?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `GrypeRepoVulnerability` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type GrypeRepoVulnerabilityCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `path` field. */
  path?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `severity` field. */
  severity?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `GrypeRepoVulnerability` object types. All fields are combined with a logical ‘and.’ */
export type GrypeRepoVulnerabilityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<GrypeRepoVulnerabilityFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `language` field. */
  language?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<GrypeRepoVulnerabilityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<GrypeRepoVulnerabilityFilter>>;
  /** Filter by the object’s `path` field. */
  path?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `severity` field. */
  severity?: InputMaybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<StringFilter>;
};

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
  addToken?: Maybe<Scalars['Boolean']>;
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
  /** Creates a single `GitRemote`. */
  createGitRemote?: Maybe<CreateGitRemotePayload>;
  /** Creates a single `GitTag`. */
  createGitTag?: Maybe<CreateGitTagPayload>;
  /** Creates a single `GithubActionsWorkflow`. */
  createGithubActionsWorkflow?: Maybe<CreateGithubActionsWorkflowPayload>;
  /** Creates a single `GithubActionsWorkflowRun`. */
  createGithubActionsWorkflowRun?: Maybe<CreateGithubActionsWorkflowRunPayload>;
  /** Creates a single `GithubActionsWorkflowRunJob`. */
  createGithubActionsWorkflowRunJob?: Maybe<CreateGithubActionsWorkflowRunJobPayload>;
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
  /** Creates a single `GitleaksRepoScan`. */
  createGitleaksRepoScan?: Maybe<CreateGitleaksRepoScanPayload>;
  /** Creates a single `GosecRepoScan`. */
  createGosecRepoScan?: Maybe<CreateGosecRepoScanPayload>;
  /** Creates a single `GrypeRepoScan`. */
  createGrypeRepoScan?: Maybe<CreateGrypeRepoScanPayload>;
  /** Creates a single `Job`. */
  createJob?: Maybe<CreateJobPayload>;
  /** Creates a single `JobLog`. */
  createJobLog?: Maybe<CreateJobLogPayload>;
  /** Creates a single `Label`. */
  createLabel?: Maybe<CreateLabelPayload>;
  /** Creates a single `LabelAssociation`. */
  createLabelAssociation?: Maybe<CreateLabelAssociationPayload>;
  /** Creates a single `OssfScorecardRepoScan`. */
  createOssfScorecardRepoScan?: Maybe<CreateOssfScorecardRepoScanPayload>;
  /** Creates a single `OssfScorecardRepoScore`. */
  createOssfScorecardRepoScore?: Maybe<CreateOssfScorecardRepoScorePayload>;
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
  /** Creates a single `SyftRepoScan`. */
  createSyftRepoScan?: Maybe<CreateSyftRepoScanPayload>;
  /** Creates a single `TrivyRepoScan`. */
  createTrivyRepoScan?: Maybe<CreateTrivyRepoScanPayload>;
  /** Creates a single `Vendor`. */
  createVendor?: Maybe<CreateVendorPayload>;
  /** Creates a single `VendorType`. */
  createVendorType?: Maybe<CreateVendorTypePayload>;
  /** Creates a single `YelpDetectSecretsRepoScan`. */
  createYelpDetectSecretsRepoScan?: Maybe<CreateYelpDetectSecretsRepoScanPayload>;
  /** Deletes a single `ContainerImage` using a unique key. */
  deleteContainerImage?: Maybe<DeleteContainerImagePayload>;
  /** Deletes a single `ContainerImage` using its globally unique id. */
  deleteContainerImageByNodeId?: Maybe<DeleteContainerImagePayload>;
  /** Deletes a single `ContainerImageType` using a unique key. */
  deleteContainerImageType?: Maybe<DeleteContainerImageTypePayload>;
  /** Deletes a single `ContainerImageType` using its globally unique id. */
  deleteContainerImageTypeByNodeId?: Maybe<DeleteContainerImageTypePayload>;
  /** Deletes a single `ContainerSync` using a unique key. */
  deleteContainerSync?: Maybe<DeleteContainerSyncPayload>;
  /** Deletes a single `ContainerSync` using its globally unique id. */
  deleteContainerSyncByNodeId?: Maybe<DeleteContainerSyncPayload>;
  /** Deletes a single `ContainerSyncSchedule` using a unique key. */
  deleteContainerSyncSchedule?: Maybe<DeleteContainerSyncSchedulePayload>;
  /** Deletes a single `ContainerSyncSchedule` using its globally unique id. */
  deleteContainerSyncScheduleByNodeId?: Maybe<DeleteContainerSyncSchedulePayload>;
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
  /** Deletes a single `GitRemote` using a unique key. */
  deleteGitRemote?: Maybe<DeleteGitRemotePayload>;
  /** Deletes a single `GitRemote` using its globally unique id. */
  deleteGitRemoteByNodeId?: Maybe<DeleteGitRemotePayload>;
  /** Deletes a single `GithubActionsWorkflow` using a unique key. */
  deleteGithubActionsWorkflow?: Maybe<DeleteGithubActionsWorkflowPayload>;
  /** Deletes a single `GithubActionsWorkflow` using a unique key. */
  deleteGithubActionsWorkflowById?: Maybe<DeleteGithubActionsWorkflowPayload>;
  /** Deletes a single `GithubActionsWorkflow` using its globally unique id. */
  deleteGithubActionsWorkflowByNodeId?: Maybe<DeleteGithubActionsWorkflowPayload>;
  /** Deletes a single `GithubActionsWorkflowRun` using a unique key. */
  deleteGithubActionsWorkflowRun?: Maybe<DeleteGithubActionsWorkflowRunPayload>;
  /** Deletes a single `GithubActionsWorkflowRun` using a unique key. */
  deleteGithubActionsWorkflowRunById?: Maybe<DeleteGithubActionsWorkflowRunPayload>;
  /** Deletes a single `GithubActionsWorkflowRun` using its globally unique id. */
  deleteGithubActionsWorkflowRunByNodeId?: Maybe<DeleteGithubActionsWorkflowRunPayload>;
  /** Deletes a single `GithubActionsWorkflowRunJob` using a unique key. */
  deleteGithubActionsWorkflowRunJob?: Maybe<DeleteGithubActionsWorkflowRunJobPayload>;
  /** Deletes a single `GithubActionsWorkflowRunJob` using a unique key. */
  deleteGithubActionsWorkflowRunJobById?: Maybe<DeleteGithubActionsWorkflowRunJobPayload>;
  /** Deletes a single `GithubActionsWorkflowRunJob` using its globally unique id. */
  deleteGithubActionsWorkflowRunJobByNodeId?: Maybe<DeleteGithubActionsWorkflowRunJobPayload>;
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
  /** Deletes a single `GitleaksRepoScan` using a unique key. */
  deleteGitleaksRepoScan?: Maybe<DeleteGitleaksRepoScanPayload>;
  /** Deletes a single `GitleaksRepoScan` using its globally unique id. */
  deleteGitleaksRepoScanByNodeId?: Maybe<DeleteGitleaksRepoScanPayload>;
  /** Deletes a single `GosecRepoScan` using a unique key. */
  deleteGosecRepoScan?: Maybe<DeleteGosecRepoScanPayload>;
  /** Deletes a single `GosecRepoScan` using its globally unique id. */
  deleteGosecRepoScanByNodeId?: Maybe<DeleteGosecRepoScanPayload>;
  /** Deletes a single `GrypeRepoScan` using a unique key. */
  deleteGrypeRepoScan?: Maybe<DeleteGrypeRepoScanPayload>;
  /** Deletes a single `GrypeRepoScan` using its globally unique id. */
  deleteGrypeRepoScanByNodeId?: Maybe<DeleteGrypeRepoScanPayload>;
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
  /** Deletes a single `OssfScorecardRepoScan` using a unique key. */
  deleteOssfScorecardRepoScan?: Maybe<DeleteOssfScorecardRepoScanPayload>;
  /** Deletes a single `OssfScorecardRepoScan` using its globally unique id. */
  deleteOssfScorecardRepoScanByNodeId?: Maybe<DeleteOssfScorecardRepoScanPayload>;
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
  /** Deletes a single `SyftRepoScan` using a unique key. */
  deleteSyftRepoScan?: Maybe<DeleteSyftRepoScanPayload>;
  /** Deletes a single `SyftRepoScan` using its globally unique id. */
  deleteSyftRepoScanByNodeId?: Maybe<DeleteSyftRepoScanPayload>;
  /** Deletes a single `TrivyRepoScan` using a unique key. */
  deleteTrivyRepoScan?: Maybe<DeleteTrivyRepoScanPayload>;
  /** Deletes a single `TrivyRepoScan` using its globally unique id. */
  deleteTrivyRepoScanByNodeId?: Maybe<DeleteTrivyRepoScanPayload>;
  /** Deletes a single `Vendor` using a unique key. */
  deleteVendor?: Maybe<DeleteVendorPayload>;
  /** Deletes a single `Vendor` using its globally unique id. */
  deleteVendorByNodeId?: Maybe<DeleteVendorPayload>;
  /** Deletes a single `VendorType` using a unique key. */
  deleteVendorType?: Maybe<DeleteVendorTypePayload>;
  /** Deletes a single `VendorType` using its globally unique id. */
  deleteVendorTypeByNodeId?: Maybe<DeleteVendorTypePayload>;
  /** Deletes a single `YelpDetectSecretsRepoScan` using a unique key. */
  deleteYelpDetectSecretsRepoScan?: Maybe<DeleteYelpDetectSecretsRepoScanPayload>;
  /** Deletes a single `YelpDetectSecretsRepoScan` using its globally unique id. */
  deleteYelpDetectSecretsRepoScanByNodeId?: Maybe<DeleteYelpDetectSecretsRepoScanPayload>;
  dequeueJob?: Maybe<DequeueJobPayload>;
  fetchServiceAuthCredential?: Maybe<FetchServiceAuthCredentialPayload>;
  jsonbRecursiveMerge?: Maybe<JsonbRecursiveMergePayload>;
  markFailed?: Maybe<MarkFailedPayload>;
  markSuccess?: Maybe<MarkSuccessPayload>;
  reap?: Maybe<ReapPayload>;
  setSyncJobStatus?: Maybe<SetSyncJobStatusPayload>;
  simpleRepoSyncQueueCleanup?: Maybe<SimpleRepoSyncQueueCleanupPayload>;
  syncNow?: Maybe<Scalars['Boolean']>;
  /** Updates a single `ContainerImage` using a unique key and a patch. */
  updateContainerImage?: Maybe<UpdateContainerImagePayload>;
  /** Updates a single `ContainerImage` using its globally unique id and a patch. */
  updateContainerImageByNodeId?: Maybe<UpdateContainerImagePayload>;
  /** Updates a single `ContainerImageType` using a unique key and a patch. */
  updateContainerImageType?: Maybe<UpdateContainerImageTypePayload>;
  /** Updates a single `ContainerImageType` using its globally unique id and a patch. */
  updateContainerImageTypeByNodeId?: Maybe<UpdateContainerImageTypePayload>;
  /** Updates a single `ContainerSync` using a unique key and a patch. */
  updateContainerSync?: Maybe<UpdateContainerSyncPayload>;
  /** Updates a single `ContainerSync` using its globally unique id and a patch. */
  updateContainerSyncByNodeId?: Maybe<UpdateContainerSyncPayload>;
  /** Updates a single `ContainerSyncSchedule` using a unique key and a patch. */
  updateContainerSyncSchedule?: Maybe<UpdateContainerSyncSchedulePayload>;
  /** Updates a single `ContainerSyncSchedule` using its globally unique id and a patch. */
  updateContainerSyncScheduleByNodeId?: Maybe<UpdateContainerSyncSchedulePayload>;
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
  /** Updates a single `GitRemote` using a unique key and a patch. */
  updateGitRemote?: Maybe<UpdateGitRemotePayload>;
  /** Updates a single `GitRemote` using its globally unique id and a patch. */
  updateGitRemoteByNodeId?: Maybe<UpdateGitRemotePayload>;
  /** Updates a single `GithubActionsWorkflow` using a unique key and a patch. */
  updateGithubActionsWorkflow?: Maybe<UpdateGithubActionsWorkflowPayload>;
  /** Updates a single `GithubActionsWorkflow` using a unique key and a patch. */
  updateGithubActionsWorkflowById?: Maybe<UpdateGithubActionsWorkflowPayload>;
  /** Updates a single `GithubActionsWorkflow` using its globally unique id and a patch. */
  updateGithubActionsWorkflowByNodeId?: Maybe<UpdateGithubActionsWorkflowPayload>;
  /** Updates a single `GithubActionsWorkflowRun` using a unique key and a patch. */
  updateGithubActionsWorkflowRun?: Maybe<UpdateGithubActionsWorkflowRunPayload>;
  /** Updates a single `GithubActionsWorkflowRun` using a unique key and a patch. */
  updateGithubActionsWorkflowRunById?: Maybe<UpdateGithubActionsWorkflowRunPayload>;
  /** Updates a single `GithubActionsWorkflowRun` using its globally unique id and a patch. */
  updateGithubActionsWorkflowRunByNodeId?: Maybe<UpdateGithubActionsWorkflowRunPayload>;
  /** Updates a single `GithubActionsWorkflowRunJob` using a unique key and a patch. */
  updateGithubActionsWorkflowRunJob?: Maybe<UpdateGithubActionsWorkflowRunJobPayload>;
  /** Updates a single `GithubActionsWorkflowRunJob` using a unique key and a patch. */
  updateGithubActionsWorkflowRunJobById?: Maybe<UpdateGithubActionsWorkflowRunJobPayload>;
  /** Updates a single `GithubActionsWorkflowRunJob` using its globally unique id and a patch. */
  updateGithubActionsWorkflowRunJobByNodeId?: Maybe<UpdateGithubActionsWorkflowRunJobPayload>;
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
  /** Updates a single `GitleaksRepoScan` using a unique key and a patch. */
  updateGitleaksRepoScan?: Maybe<UpdateGitleaksRepoScanPayload>;
  /** Updates a single `GitleaksRepoScan` using its globally unique id and a patch. */
  updateGitleaksRepoScanByNodeId?: Maybe<UpdateGitleaksRepoScanPayload>;
  /** Updates a single `GosecRepoScan` using a unique key and a patch. */
  updateGosecRepoScan?: Maybe<UpdateGosecRepoScanPayload>;
  /** Updates a single `GosecRepoScan` using its globally unique id and a patch. */
  updateGosecRepoScanByNodeId?: Maybe<UpdateGosecRepoScanPayload>;
  /** Updates a single `GrypeRepoScan` using a unique key and a patch. */
  updateGrypeRepoScan?: Maybe<UpdateGrypeRepoScanPayload>;
  /** Updates a single `GrypeRepoScan` using its globally unique id and a patch. */
  updateGrypeRepoScanByNodeId?: Maybe<UpdateGrypeRepoScanPayload>;
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
  /** Updates a single `OssfScorecardRepoScan` using a unique key and a patch. */
  updateOssfScorecardRepoScan?: Maybe<UpdateOssfScorecardRepoScanPayload>;
  /** Updates a single `OssfScorecardRepoScan` using its globally unique id and a patch. */
  updateOssfScorecardRepoScanByNodeId?: Maybe<UpdateOssfScorecardRepoScanPayload>;
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
  /** Updates a single `SyftRepoScan` using a unique key and a patch. */
  updateSyftRepoScan?: Maybe<UpdateSyftRepoScanPayload>;
  /** Updates a single `SyftRepoScan` using its globally unique id and a patch. */
  updateSyftRepoScanByNodeId?: Maybe<UpdateSyftRepoScanPayload>;
  /** Updates a single `TrivyRepoScan` using a unique key and a patch. */
  updateTrivyRepoScan?: Maybe<UpdateTrivyRepoScanPayload>;
  /** Updates a single `TrivyRepoScan` using its globally unique id and a patch. */
  updateTrivyRepoScanByNodeId?: Maybe<UpdateTrivyRepoScanPayload>;
  /** Updates a single `Vendor` using a unique key and a patch. */
  updateVendor?: Maybe<UpdateVendorPayload>;
  /** Updates a single `Vendor` using its globally unique id and a patch. */
  updateVendorByNodeId?: Maybe<UpdateVendorPayload>;
  /** Updates a single `VendorType` using a unique key and a patch. */
  updateVendorType?: Maybe<UpdateVendorTypePayload>;
  /** Updates a single `VendorType` using its globally unique id and a patch. */
  updateVendorTypeByNodeId?: Maybe<UpdateVendorTypePayload>;
  /** Updates a single `YelpDetectSecretsRepoScan` using a unique key and a patch. */
  updateYelpDetectSecretsRepoScan?: Maybe<UpdateYelpDetectSecretsRepoScanPayload>;
  /** Updates a single `YelpDetectSecretsRepoScan` using its globally unique id and a patch. */
  updateYelpDetectSecretsRepoScanByNodeId?: Maybe<UpdateYelpDetectSecretsRepoScanPayload>;
  userMgmtAddUser?: Maybe<UserMgmtAddUserPayload>;
  userMgmtRemoveUser?: Maybe<UserMgmtRemoveUserPayload>;
  userMgmtSetUserRole?: Maybe<UserMgmtSetUserRolePayload>;
  userMgmtUpdateUserPassword?: Maybe<UserMgmtUpdateUserPasswordPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAddTokenArgs = {
  provider: Scalars['UUID'];
  token: Scalars['String'];
  type: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
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
export type MutationCreateGitRemoteArgs = {
  input: CreateGitRemoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGitTagArgs = {
  input: CreateGitTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubActionsWorkflowArgs = {
  input: CreateGithubActionsWorkflowInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubActionsWorkflowRunArgs = {
  input: CreateGithubActionsWorkflowRunInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGithubActionsWorkflowRunJobArgs = {
  input: CreateGithubActionsWorkflowRunJobInput;
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
export type MutationCreateGitleaksRepoScanArgs = {
  input: CreateGitleaksRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGosecRepoScanArgs = {
  input: CreateGosecRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateGrypeRepoScanArgs = {
  input: CreateGrypeRepoScanInput;
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
export type MutationCreateOssfScorecardRepoScanArgs = {
  input: CreateOssfScorecardRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOssfScorecardRepoScoreArgs = {
  input: CreateOssfScorecardRepoScoreInput;
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
export type MutationCreateSyftRepoScanArgs = {
  input: CreateSyftRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTrivyRepoScanArgs = {
  input: CreateTrivyRepoScanInput;
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
export type MutationCreateYelpDetectSecretsRepoScanArgs = {
  input: CreateYelpDetectSecretsRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageArgs = {
  input: DeleteContainerImageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerImageByNodeIdArgs = {
  input: DeleteContainerImageByNodeIdInput;
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
export type MutationDeleteContainerSyncScheduleArgs = {
  input: DeleteContainerSyncScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteContainerSyncScheduleByNodeIdArgs = {
  input: DeleteContainerSyncScheduleByNodeIdInput;
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
export type MutationDeleteGitRemoteArgs = {
  input: DeleteGitRemoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitRemoteByNodeIdArgs = {
  input: DeleteGitRemoteByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowArgs = {
  input: DeleteGithubActionsWorkflowInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowByIdArgs = {
  input: DeleteGithubActionsWorkflowByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowByNodeIdArgs = {
  input: DeleteGithubActionsWorkflowByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowRunArgs = {
  input: DeleteGithubActionsWorkflowRunInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowRunByIdArgs = {
  input: DeleteGithubActionsWorkflowRunByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowRunByNodeIdArgs = {
  input: DeleteGithubActionsWorkflowRunByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowRunJobArgs = {
  input: DeleteGithubActionsWorkflowRunJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowRunJobByIdArgs = {
  input: DeleteGithubActionsWorkflowRunJobByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGithubActionsWorkflowRunJobByNodeIdArgs = {
  input: DeleteGithubActionsWorkflowRunJobByNodeIdInput;
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
export type MutationDeleteGitleaksRepoScanArgs = {
  input: DeleteGitleaksRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGitleaksRepoScanByNodeIdArgs = {
  input: DeleteGitleaksRepoScanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGosecRepoScanArgs = {
  input: DeleteGosecRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGosecRepoScanByNodeIdArgs = {
  input: DeleteGosecRepoScanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGrypeRepoScanArgs = {
  input: DeleteGrypeRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteGrypeRepoScanByNodeIdArgs = {
  input: DeleteGrypeRepoScanByNodeIdInput;
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
export type MutationDeleteOssfScorecardRepoScanArgs = {
  input: DeleteOssfScorecardRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOssfScorecardRepoScanByNodeIdArgs = {
  input: DeleteOssfScorecardRepoScanByNodeIdInput;
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
export type MutationDeleteSyftRepoScanArgs = {
  input: DeleteSyftRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSyftRepoScanByNodeIdArgs = {
  input: DeleteSyftRepoScanByNodeIdInput;
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
export type MutationDeleteYelpDetectSecretsRepoScanArgs = {
  input: DeleteYelpDetectSecretsRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteYelpDetectSecretsRepoScanByNodeIdArgs = {
  input: DeleteYelpDetectSecretsRepoScanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDequeueJobArgs = {
  input: DequeueJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationFetchServiceAuthCredentialArgs = {
  input: FetchServiceAuthCredentialInput;
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
export type MutationSyncNowArgs = {
  queue?: InputMaybe<Scalars['String']>;
  sync: Scalars['UUID'];
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageArgs = {
  input: UpdateContainerImageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerImageByNodeIdArgs = {
  input: UpdateContainerImageByNodeIdInput;
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
export type MutationUpdateContainerSyncScheduleArgs = {
  input: UpdateContainerSyncScheduleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateContainerSyncScheduleByNodeIdArgs = {
  input: UpdateContainerSyncScheduleByNodeIdInput;
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
export type MutationUpdateGitRemoteArgs = {
  input: UpdateGitRemoteInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitRemoteByNodeIdArgs = {
  input: UpdateGitRemoteByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowArgs = {
  input: UpdateGithubActionsWorkflowInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowByIdArgs = {
  input: UpdateGithubActionsWorkflowByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowByNodeIdArgs = {
  input: UpdateGithubActionsWorkflowByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowRunArgs = {
  input: UpdateGithubActionsWorkflowRunInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowRunByIdArgs = {
  input: UpdateGithubActionsWorkflowRunByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowRunByNodeIdArgs = {
  input: UpdateGithubActionsWorkflowRunByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowRunJobArgs = {
  input: UpdateGithubActionsWorkflowRunJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowRunJobByIdArgs = {
  input: UpdateGithubActionsWorkflowRunJobByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGithubActionsWorkflowRunJobByNodeIdArgs = {
  input: UpdateGithubActionsWorkflowRunJobByNodeIdInput;
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
export type MutationUpdateGitleaksRepoScanArgs = {
  input: UpdateGitleaksRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGitleaksRepoScanByNodeIdArgs = {
  input: UpdateGitleaksRepoScanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGosecRepoScanArgs = {
  input: UpdateGosecRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGosecRepoScanByNodeIdArgs = {
  input: UpdateGosecRepoScanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGrypeRepoScanArgs = {
  input: UpdateGrypeRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateGrypeRepoScanByNodeIdArgs = {
  input: UpdateGrypeRepoScanByNodeIdInput;
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
export type MutationUpdateOssfScorecardRepoScanArgs = {
  input: UpdateOssfScorecardRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOssfScorecardRepoScanByNodeIdArgs = {
  input: UpdateOssfScorecardRepoScanByNodeIdInput;
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
export type MutationUpdateSyftRepoScanArgs = {
  input: UpdateSyftRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSyftRepoScanByNodeIdArgs = {
  input: UpdateSyftRepoScanByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrivyRepoScanArgs = {
  input: UpdateTrivyRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrivyRepoScanByNodeIdArgs = {
  input: UpdateTrivyRepoScanByNodeIdInput;
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
export type MutationUpdateYelpDetectSecretsRepoScanArgs = {
  input: UpdateYelpDetectSecretsRepoScanInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateYelpDetectSecretsRepoScanByNodeIdArgs = {
  input: UpdateYelpDetectSecretsRepoScanByNodeIdInput;
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

/** view of OSSF scorecard scan check results */
export type OssfScorecardRepoCheckResult = {
  /** details of the check in the scan run */
  details?: Maybe<Scalars['String']>;
  /** description of the check in the scan run */
  documentationShort?: Maybe<Scalars['String']>;
  /** URL to the documentation of the check in the scan run */
  documentationUrl?: Maybe<Scalars['String']>;
  /** name of the check in the scan run */
  name?: Maybe<Scalars['String']>;
  /** reason for the score of the check in the scan run */
  reason?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** score of the check in the scan run */
  score?: Maybe<Scalars['String']>;
  /** JSON of the check results in the scan run */
  value?: Maybe<Scalars['JSON']>;
};

/**
 * A condition to be used against `OssfScorecardRepoCheckResult` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type OssfScorecardRepoCheckResultCondition = {
  /** Checks for equality with the object’s `details` field. */
  details?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentationShort` field. */
  documentationShort?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentationUrl` field. */
  documentationUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `reason` field. */
  reason?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `score` field. */
  score?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `OssfScorecardRepoCheckResult` object types. All fields are combined with a logical ‘and.’ */
export type OssfScorecardRepoCheckResultFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OssfScorecardRepoCheckResultFilter>>;
  /** Filter by the object’s `details` field. */
  details?: InputMaybe<StringFilter>;
  /** Filter by the object’s `documentationShort` field. */
  documentationShort?: InputMaybe<StringFilter>;
  /** Filter by the object’s `documentationUrl` field. */
  documentationUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OssfScorecardRepoCheckResultFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OssfScorecardRepoCheckResultFilter>>;
  /** Filter by the object’s `reason` field. */
  reason?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `score` field. */
  score?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<JsonFilter>;
};

/** A connection to a list of `OssfScorecardRepoCheckResult` values. */
export type OssfScorecardRepoCheckResultsConnection = {
  /** A list of edges which contains the `OssfScorecardRepoCheckResult` and cursor to aid in pagination. */
  edges: Array<OssfScorecardRepoCheckResultsEdge>;
  /** A list of `OssfScorecardRepoCheckResult` objects. */
  nodes: Array<OssfScorecardRepoCheckResult>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OssfScorecardRepoCheckResult` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `OssfScorecardRepoCheckResult` edge in the connection. */
export type OssfScorecardRepoCheckResultsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `OssfScorecardRepoCheckResult` at the end of the edge. */
  node: OssfScorecardRepoCheckResult;
};

/** Methods to use when ordering `OssfScorecardRepoCheckResult`. */
export enum OssfScorecardRepoCheckResultsOrderBy {
  DetailsAsc = 'DETAILS_ASC',
  DetailsDesc = 'DETAILS_DESC',
  DocumentationShortAsc = 'DOCUMENTATION_SHORT_ASC',
  DocumentationShortDesc = 'DOCUMENTATION_SHORT_DESC',
  DocumentationUrlAsc = 'DOCUMENTATION_URL_ASC',
  DocumentationUrlDesc = 'DOCUMENTATION_URL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  ReasonAsc = 'REASON_ASC',
  ReasonDesc = 'REASON_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ScoreAsc = 'SCORE_ASC',
  ScoreDesc = 'SCORE_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

/** Output of OSSF scorecard scans on a git repository */
export type OssfScorecardRepoScan = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `OssfScorecardRepoScan`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results of the scan */
  results: Scalars['JSON'];
};

/**
 * A condition to be used against `OssfScorecardRepoScan` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type OssfScorecardRepoScanCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `results` field. */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `OssfScorecardRepoScan` object types. All fields are combined with a logical ‘and.’ */
export type OssfScorecardRepoScanFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OssfScorecardRepoScanFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<OssfScorecardRepoScanFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OssfScorecardRepoScanFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `results` field. */
  results?: InputMaybe<JsonFilter>;
};

/** An input for mutations affecting `OssfScorecardRepoScan` */
export type OssfScorecardRepoScanInput = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results of the scan */
  results: Scalars['JSON'];
};

/** Represents an update to a `OssfScorecardRepoScan`. Fields that are set will be updated. */
export type OssfScorecardRepoScanPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** JSON results of the scan */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `OssfScorecardRepoScan` values. */
export type OssfScorecardRepoScansConnection = {
  /** A list of edges which contains the `OssfScorecardRepoScan` and cursor to aid in pagination. */
  edges: Array<OssfScorecardRepoScansEdge>;
  /** A list of `OssfScorecardRepoScan` objects. */
  nodes: Array<OssfScorecardRepoScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OssfScorecardRepoScan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `OssfScorecardRepoScan` edge in the connection. */
export type OssfScorecardRepoScansEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `OssfScorecardRepoScan` at the end of the edge. */
  node: OssfScorecardRepoScan;
};

/** Methods to use when ordering `OssfScorecardRepoScan`. */
export enum OssfScorecardRepoScansOrderBy {
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

/** view of OSSF scorecard scan result scores */
export type OssfScorecardRepoScore = {
  /** commit of repo that the scan was run on */
  commit?: Maybe<Scalars['String']>;
  /** date of the scan */
  date?: Maybe<Scalars['String']>;
  /** URL to repo scan was run on */
  repo?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** resulting total score of the scan */
  score?: Maybe<Scalars['String']>;
  /** scorecard version used to run the scan */
  scorecardVersion?: Maybe<Scalars['JSON']>;
};

/**
 * A condition to be used against `OssfScorecardRepoScore` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type OssfScorecardRepoScoreCondition = {
  /** Checks for equality with the object’s `commit` field. */
  commit?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repo` field. */
  repo?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `score` field. */
  score?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `scorecardVersion` field. */
  scorecardVersion?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `OssfScorecardRepoScore` object types. All fields are combined with a logical ‘and.’ */
export type OssfScorecardRepoScoreFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OssfScorecardRepoScoreFilter>>;
  /** Filter by the object’s `commit` field. */
  commit?: InputMaybe<StringFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OssfScorecardRepoScoreFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OssfScorecardRepoScoreFilter>>;
  /** Filter by the object’s `repo` field. */
  repo?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `score` field. */
  score?: InputMaybe<StringFilter>;
  /** Filter by the object’s `scorecardVersion` field. */
  scorecardVersion?: InputMaybe<JsonFilter>;
};

/** An input for mutations affecting `OssfScorecardRepoScore` */
export type OssfScorecardRepoScoreInput = {
  /** commit of repo that the scan was run on */
  commit?: InputMaybe<Scalars['String']>;
  /** date of the scan */
  date?: InputMaybe<Scalars['String']>;
  /** URL to repo scan was run on */
  repo?: InputMaybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** resulting total score of the scan */
  score?: InputMaybe<Scalars['String']>;
  /** scorecard version used to run the scan */
  scorecardVersion?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `OssfScorecardRepoScore` values. */
export type OssfScorecardRepoScoresConnection = {
  /** A list of edges which contains the `OssfScorecardRepoScore` and cursor to aid in pagination. */
  edges: Array<OssfScorecardRepoScoresEdge>;
  /** A list of `OssfScorecardRepoScore` objects. */
  nodes: Array<OssfScorecardRepoScore>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OssfScorecardRepoScore` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `OssfScorecardRepoScore` edge in the connection. */
export type OssfScorecardRepoScoresEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `OssfScorecardRepoScore` at the end of the edge. */
  node: OssfScorecardRepoScore;
};

/** Methods to use when ordering `OssfScorecardRepoScore`. */
export enum OssfScorecardRepoScoresOrderBy {
  CommitAsc = 'COMMIT_ASC',
  CommitDesc = 'COMMIT_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  Natural = 'NATURAL',
  RepoAsc = 'REPO_ASC',
  RepoDesc = 'REPO_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ScorecardVersionAsc = 'SCORECARD_VERSION_ASC',
  ScorecardVersionDesc = 'SCORECARD_VERSION_DESC',
  ScoreAsc = 'SCORE_ASC',
  ScoreDesc = 'SCORE_DESC'
}

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
  containerImage?: Maybe<ContainerImage>;
  /** Reads a single `ContainerImage` using its globally unique `ID`. */
  containerImageByNodeId?: Maybe<ContainerImage>;
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
  /** Reads and enables pagination through a set of `ContainerSyncExecution`. */
  containerSyncExecutions?: Maybe<ContainerSyncExecutionsConnection>;
  containerSyncSchedule?: Maybe<ContainerSyncSchedule>;
  /** Reads a single `ContainerSyncSchedule` using its globally unique `ID`. */
  containerSyncScheduleByNodeId?: Maybe<ContainerSyncSchedule>;
  /** Reads and enables pagination through a set of `ContainerSyncSchedule`. */
  containerSyncSchedules?: Maybe<ContainerSyncSchedulesConnection>;
  /** Reads and enables pagination through a set of `ContainerSync`. */
  containerSyncs?: Maybe<ContainerSyncsConnection>;
  currentMergeStatUser?: Maybe<Scalars['String']>;
  databaseConnection?: Maybe<DisplayDatabaseConnection>;
  execSQL: ExecSqlResult;
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
  gitRemote?: Maybe<GitRemote>;
  /** Reads a single `GitRemote` using its globally unique `ID`. */
  gitRemoteByNodeId?: Maybe<GitRemote>;
  /** Reads and enables pagination through a set of `GitRemote`. */
  gitRemotes?: Maybe<GitRemotesConnection>;
  /** Reads and enables pagination through a set of `GitTag`. */
  gitTags?: Maybe<GitTagsConnection>;
  githubActionsWorkflow?: Maybe<GithubActionsWorkflow>;
  githubActionsWorkflowById?: Maybe<GithubActionsWorkflow>;
  /** Reads a single `GithubActionsWorkflow` using its globally unique `ID`. */
  githubActionsWorkflowByNodeId?: Maybe<GithubActionsWorkflow>;
  githubActionsWorkflowRun?: Maybe<GithubActionsWorkflowRun>;
  githubActionsWorkflowRunById?: Maybe<GithubActionsWorkflowRun>;
  /** Reads a single `GithubActionsWorkflowRun` using its globally unique `ID`. */
  githubActionsWorkflowRunByNodeId?: Maybe<GithubActionsWorkflowRun>;
  githubActionsWorkflowRunJob?: Maybe<GithubActionsWorkflowRunJob>;
  githubActionsWorkflowRunJobById?: Maybe<GithubActionsWorkflowRunJob>;
  /** Reads a single `GithubActionsWorkflowRunJob` using its globally unique `ID`. */
  githubActionsWorkflowRunJobByNodeId?: Maybe<GithubActionsWorkflowRunJob>;
  /** Reads and enables pagination through a set of `GithubActionsWorkflowRunJob`. */
  githubActionsWorkflowRunJobs?: Maybe<GithubActionsWorkflowRunJobsConnection>;
  /** Reads and enables pagination through a set of `GithubActionsWorkflowRun`. */
  githubActionsWorkflowRuns?: Maybe<GithubActionsWorkflowRunsConnection>;
  /** Reads and enables pagination through a set of `GithubActionsWorkflow`. */
  githubActionsWorkflows?: Maybe<GithubActionsWorkflowsConnection>;
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
  /** Reads and enables pagination through a set of `GitleaksRepoDetection`. */
  gitleaksRepoDetections?: Maybe<GitleaksRepoDetectionsConnection>;
  gitleaksRepoScan?: Maybe<GitleaksRepoScan>;
  /** Reads a single `GitleaksRepoScan` using its globally unique `ID`. */
  gitleaksRepoScanByNodeId?: Maybe<GitleaksRepoScan>;
  /** Reads and enables pagination through a set of `GitleaksRepoScan`. */
  gitleaksRepoScans?: Maybe<GitleaksRepoScansConnection>;
  /** Reads and enables pagination through a set of `GosecRepoDetection`. */
  gosecRepoDetections?: Maybe<GosecRepoDetectionsConnection>;
  gosecRepoScan?: Maybe<GosecRepoScan>;
  /** Reads a single `GosecRepoScan` using its globally unique `ID`. */
  gosecRepoScanByNodeId?: Maybe<GosecRepoScan>;
  /** Reads and enables pagination through a set of `GosecRepoScan`. */
  gosecRepoScans?: Maybe<GosecRepoScansConnection>;
  grypeRepoScan?: Maybe<GrypeRepoScan>;
  /** Reads a single `GrypeRepoScan` using its globally unique `ID`. */
  grypeRepoScanByNodeId?: Maybe<GrypeRepoScan>;
  /** Reads and enables pagination through a set of `GrypeRepoScan`. */
  grypeRepoScans?: Maybe<GrypeRepoScansConnection>;
  /** Reads and enables pagination through a set of `GrypeRepoVulnerability`. */
  grypeRepoVulnerabilities?: Maybe<GrypeRepoVulnerabilitiesConnection>;
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
  node?: Maybe<ContainerImage | ContainerImageType | ContainerSync | ContainerSyncSchedule | GitBlame | GitCommit | GitCommitStat | GitFile | GitRef | GitRemote | GithubActionsWorkflow | GithubActionsWorkflowRun | GithubActionsWorkflowRunJob | GithubIssue | GithubPullRequest | GithubPullRequestCommit | GithubPullRequestReview | GithubRepoInfo | GithubStargazer | GitleaksRepoScan | GosecRepoScan | GrypeRepoScan | Job | JobLog | Label | OssfScorecardRepoScan | Provider | Query | QueryHistory | Queue | Repo | RepoImport | RepoImportType | RepoSync | RepoSyncLog | RepoSyncLogType | RepoSyncQueue | RepoSyncQueueStatusType | RepoSyncType | RepoSyncTypeGroup | SavedQuery | SchemaMigration | SchemaMigrationsHistory | ServiceAuthCredential | ServiceAuthCredentialType | SqlqMigration | SyftRepoScan | TrivyRepoScan | Vendor | VendorType | YelpDetectSecretsRepoScan>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `OssfScorecardRepoCheckResult`. */
  ossfScorecardRepoCheckResults?: Maybe<OssfScorecardRepoCheckResultsConnection>;
  ossfScorecardRepoScan?: Maybe<OssfScorecardRepoScan>;
  /** Reads a single `OssfScorecardRepoScan` using its globally unique `ID`. */
  ossfScorecardRepoScanByNodeId?: Maybe<OssfScorecardRepoScan>;
  /** Reads and enables pagination through a set of `OssfScorecardRepoScan`. */
  ossfScorecardRepoScans?: Maybe<OssfScorecardRepoScansConnection>;
  /** Reads and enables pagination through a set of `OssfScorecardRepoScore`. */
  ossfScorecardRepoScores?: Maybe<OssfScorecardRepoScoresConnection>;
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
  /** Reads and enables pagination through a set of `SyftRepoArtifact`. */
  syftRepoArtifacts?: Maybe<SyftRepoArtifactsConnection>;
  syftRepoScan?: Maybe<SyftRepoScan>;
  /** Reads a single `SyftRepoScan` using its globally unique `ID`. */
  syftRepoScanByNodeId?: Maybe<SyftRepoScan>;
  /** Reads and enables pagination through a set of `SyftRepoScan`. */
  syftRepoScans?: Maybe<SyftRepoScansConnection>;
  trivyRepoScan?: Maybe<TrivyRepoScan>;
  /** Reads a single `TrivyRepoScan` using its globally unique `ID`. */
  trivyRepoScanByNodeId?: Maybe<TrivyRepoScan>;
  /** Reads and enables pagination through a set of `TrivyRepoScan`. */
  trivyRepoScans?: Maybe<TrivyRepoScansConnection>;
  /** Reads and enables pagination through a set of `TrivyRepoVulnerability`. */
  trivyRepoVulnerabilities?: Maybe<TrivyRepoVulnerabilitiesConnection>;
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
  /** Reads and enables pagination through a set of `YelpDetectSecretsRepoDetection`. */
  yelpDetectSecretsRepoDetections?: Maybe<YelpDetectSecretsRepoDetectionsConnection>;
  yelpDetectSecretsRepoScan?: Maybe<YelpDetectSecretsRepoScan>;
  /** Reads a single `YelpDetectSecretsRepoScan` using its globally unique `ID`. */
  yelpDetectSecretsRepoScanByNodeId?: Maybe<YelpDetectSecretsRepoScan>;
  /** Reads and enables pagination through a set of `YelpDetectSecretsRepoScan`. */
  yelpDetectSecretsRepoScans?: Maybe<YelpDetectSecretsRepoScansConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryContainerImageByNodeIdArgs = {
  nodeId: Scalars['ID'];
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
export type QueryGitRemoteArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitRemoteByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitRemotesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitRemoteCondition>;
  filter?: InputMaybe<GitRemoteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitRemotesOrderBy>>;
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
export type QueryGithubActionsWorkflowArgs = {
  id: Scalars['BigInt'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowByIdArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunArgs = {
  id: Scalars['BigInt'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunByIdArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunJobArgs = {
  id: Scalars['BigInt'];
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunJobByIdArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunJobByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubActionsWorkflowRunJobCondition>;
  filter?: InputMaybe<GithubActionsWorkflowRunJobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunJobsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowRunsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubActionsWorkflowRunCondition>;
  filter?: InputMaybe<GithubActionsWorkflowRunFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGithubActionsWorkflowsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubActionsWorkflowCondition>;
  filter?: InputMaybe<GithubActionsWorkflowFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubActionsWorkflowsOrderBy>>;
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
  repoId: Scalars['UUID'];
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
export type QueryGitleaksRepoDetectionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitleaksRepoDetectionCondition>;
  filter?: InputMaybe<GitleaksRepoDetectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitleaksRepoDetectionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGitleaksRepoScanArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitleaksRepoScanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGitleaksRepoScansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GitleaksRepoScanCondition>;
  filter?: InputMaybe<GitleaksRepoScanFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GitleaksRepoScansOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGosecRepoDetectionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GosecRepoDetectionCondition>;
  filter?: InputMaybe<GosecRepoDetectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GosecRepoDetectionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGosecRepoScanArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGosecRepoScanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGosecRepoScansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GosecRepoScanCondition>;
  filter?: InputMaybe<GosecRepoScanFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GosecRepoScansOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGrypeRepoScanArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGrypeRepoScanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryGrypeRepoScansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GrypeRepoScanCondition>;
  filter?: InputMaybe<GrypeRepoScanFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GrypeRepoScansOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryGrypeRepoVulnerabilitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GrypeRepoVulnerabilityCondition>;
  filter?: InputMaybe<GrypeRepoVulnerabilityFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GrypeRepoVulnerabilitiesOrderBy>>;
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
export type QueryOssfScorecardRepoCheckResultsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OssfScorecardRepoCheckResultCondition>;
  filter?: InputMaybe<OssfScorecardRepoCheckResultFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OssfScorecardRepoCheckResultsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOssfScorecardRepoScanArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOssfScorecardRepoScanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOssfScorecardRepoScansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OssfScorecardRepoScanCondition>;
  filter?: InputMaybe<OssfScorecardRepoScanFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OssfScorecardRepoScansOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOssfScorecardRepoScoresArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OssfScorecardRepoScoreCondition>;
  filter?: InputMaybe<OssfScorecardRepoScoreFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OssfScorecardRepoScoresOrderBy>>;
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
export type QuerySyftRepoArtifactsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SyftRepoArtifactCondition>;
  filter?: InputMaybe<SyftRepoArtifactFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SyftRepoArtifactsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySyftRepoScanArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySyftRepoScanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySyftRepoScansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SyftRepoScanCondition>;
  filter?: InputMaybe<SyftRepoScanFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SyftRepoScansOrderBy>>;
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


/** The root query type which gives access points into the data universe. */
export type QueryYelpDetectSecretsRepoDetectionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<YelpDetectSecretsRepoDetectionCondition>;
  filter?: InputMaybe<YelpDetectSecretsRepoDetectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<YelpDetectSecretsRepoDetectionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryYelpDetectSecretsRepoScanArgs = {
  repoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryYelpDetectSecretsRepoScanByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryYelpDetectSecretsRepoScansArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<YelpDetectSecretsRepoScanCondition>;
  filter?: InputMaybe<YelpDetectSecretsRepoScanFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<YelpDetectSecretsRepoScansOrderBy>>;
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
  /** Reads and enables pagination through a set of `ContainerSync`. */
  containerSyncs: ContainerSyncsConnection;
  /** timestamp of when the MergeStat repo entry was created */
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
  /** Reads a single `GitRemote` that is related to this `Repo`. */
  gitRemote?: Maybe<GitRemote>;
  /** Reads and enables pagination through a set of `GithubActionsWorkflowRunJob`. */
  githubActionsWorkflowRunJobs: GithubActionsWorkflowRunJobsConnection;
  /** Reads and enables pagination through a set of `GithubActionsWorkflowRun`. */
  githubActionsWorkflowRuns: GithubActionsWorkflowRunsConnection;
  /** Reads and enables pagination through a set of `GithubActionsWorkflow`. */
  githubActionsWorkflows: GithubActionsWorkflowsConnection;
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
  /** Reads a single `GitleaksRepoScan` that is related to this `Repo`. */
  gitleaksRepoScan?: Maybe<GitleaksRepoScan>;
  /** Reads a single `GosecRepoScan` that is related to this `Repo`. */
  gosecRepoScan?: Maybe<GosecRepoScan>;
  /** Reads a single `GrypeRepoScan` that is related to this `Repo`. */
  grypeRepoScan?: Maybe<GrypeRepoScan>;
  /** MergeStat identifier for the repo */
  id: Scalars['UUID'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `OssfScorecardRepoScan` that is related to this `Repo`. */
  ossfScorecardRepoScan?: Maybe<OssfScorecardRepoScan>;
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
  /** Reads a single `SyftRepoScan` that is related to this `Repo`. */
  syftRepoScan?: Maybe<SyftRepoScan>;
  /** array of tags for the repo for topics in GitHub as well as tags added in MergeStat */
  tags: Scalars['JSON'];
  /** Reads a single `TrivyRepoScan` that is related to this `Repo`. */
  trivyRepoScan?: Maybe<TrivyRepoScan>;
  /** Reads a single `YelpDetectSecretsRepoScan` that is related to this `Repo`. */
  yelpDetectSecretsRepoScan?: Maybe<YelpDetectSecretsRepoScan>;
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


/** git repositories to track */
export type RepoGithubActionsWorkflowRunJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubActionsWorkflowRunJobCondition>;
  filter?: InputMaybe<GithubActionsWorkflowRunJobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunJobsOrderBy>>;
};


/** git repositories to track */
export type RepoGithubActionsWorkflowRunsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubActionsWorkflowRunCondition>;
  filter?: InputMaybe<GithubActionsWorkflowRunFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunsOrderBy>>;
};


/** git repositories to track */
export type RepoGithubActionsWorkflowsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<GithubActionsWorkflowCondition>;
  filter?: InputMaybe<GithubActionsWorkflowFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<GithubActionsWorkflowsOrderBy>>;
};


/** git repositories to track */
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


/** git repositories to track */
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


/** git repositories to track */
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


/** git repositories to track */
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


/** git repositories to track */
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

/** view of Syft repo scans artifacts */
export type SyftRepoArtifact = {
  /** artifact JSON results from Syft repo scan */
  artifact?: Maybe<Scalars['JSON']>;
  /** artifact cpes */
  cpes?: Maybe<Scalars['String']>;
  /** artifact found_by */
  foundBy?: Maybe<Scalars['String']>;
  /** artifact id */
  id?: Maybe<Scalars['String']>;
  /** artifact language */
  language?: Maybe<Scalars['String']>;
  /** artifact licenses */
  licenses?: Maybe<Scalars['String']>;
  /** artifact locations */
  locations?: Maybe<Scalars['String']>;
  /** artifact name */
  name?: Maybe<Scalars['String']>;
  /** artifact purl */
  purl?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** artifact type */
  type?: Maybe<Scalars['String']>;
  /** artifact version */
  version?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `SyftRepoArtifact` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SyftRepoArtifactCondition = {
  /** Checks for equality with the object’s `artifact` field. */
  artifact?: InputMaybe<Scalars['JSON']>;
  /** Checks for equality with the object’s `cpes` field. */
  cpes?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `foundBy` field. */
  foundBy?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `licenses` field. */
  licenses?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `locations` field. */
  locations?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `purl` field. */
  purl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `SyftRepoArtifact` object types. All fields are combined with a logical ‘and.’ */
export type SyftRepoArtifactFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SyftRepoArtifactFilter>>;
  /** Filter by the object’s `artifact` field. */
  artifact?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `cpes` field. */
  cpes?: InputMaybe<StringFilter>;
  /** Filter by the object’s `foundBy` field. */
  foundBy?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `language` field. */
  language?: InputMaybe<StringFilter>;
  /** Filter by the object’s `licenses` field. */
  licenses?: InputMaybe<StringFilter>;
  /** Filter by the object’s `locations` field. */
  locations?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SyftRepoArtifactFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SyftRepoArtifactFilter>>;
  /** Filter by the object’s `purl` field. */
  purl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<StringFilter>;
};

/** A connection to a list of `SyftRepoArtifact` values. */
export type SyftRepoArtifactsConnection = {
  /** A list of edges which contains the `SyftRepoArtifact` and cursor to aid in pagination. */
  edges: Array<SyftRepoArtifactsEdge>;
  /** A list of `SyftRepoArtifact` objects. */
  nodes: Array<SyftRepoArtifact>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SyftRepoArtifact` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SyftRepoArtifact` edge in the connection. */
export type SyftRepoArtifactsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SyftRepoArtifact` at the end of the edge. */
  node: SyftRepoArtifact;
};

/** Methods to use when ordering `SyftRepoArtifact`. */
export enum SyftRepoArtifactsOrderBy {
  ArtifactAsc = 'ARTIFACT_ASC',
  ArtifactDesc = 'ARTIFACT_DESC',
  CpesAsc = 'CPES_ASC',
  CpesDesc = 'CPES_DESC',
  FoundByAsc = 'FOUND_BY_ASC',
  FoundByDesc = 'FOUND_BY_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  LicensesAsc = 'LICENSES_ASC',
  LicensesDesc = 'LICENSES_DESC',
  LocationsAsc = 'LOCATIONS_ASC',
  LocationsDesc = 'LOCATIONS_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PurlAsc = 'PURL_ASC',
  PurlDesc = 'PURL_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

/** Syft repo scans */
export type SyftRepoScan = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `SyftRepoScan`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results from Syft repo scan */
  results: Scalars['JSON'];
};

/**
 * A condition to be used against `SyftRepoScan` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SyftRepoScanCondition = {
  /** Checks for equality with the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `results` field. */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `SyftRepoScan` object types. All fields are combined with a logical ‘and.’ */
export type SyftRepoScanFilter = {
  /** Filter by the object’s `_mergestatSyncedAt` field. */
  _mergestatSyncedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SyftRepoScanFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<SyftRepoScanFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SyftRepoScanFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `results` field. */
  results?: InputMaybe<JsonFilter>;
};

/** An input for mutations affecting `SyftRepoScan` */
export type SyftRepoScanInput = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results from Syft repo scan */
  results: Scalars['JSON'];
};

/** Represents an update to a `SyftRepoScan`. Fields that are set will be updated. */
export type SyftRepoScanPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** JSON results from Syft repo scan */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `SyftRepoScan` values. */
export type SyftRepoScansConnection = {
  /** A list of edges which contains the `SyftRepoScan` and cursor to aid in pagination. */
  edges: Array<SyftRepoScansEdge>;
  /** A list of `SyftRepoScan` objects. */
  nodes: Array<SyftRepoScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SyftRepoScan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SyftRepoScan` edge in the connection. */
export type SyftRepoScansEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SyftRepoScan` at the end of the edge. */
  node: SyftRepoScan;
};

/** Methods to use when ordering `SyftRepoScan`. */
export enum SyftRepoScansOrderBy {
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

/** Trivy repo scans */
export type TrivyRepoScan = Node & {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `TrivyRepoScan`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results from Trivy repo scan */
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
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON results from Trivy repo scan */
  results: Scalars['JSON'];
};

/** Represents an update to a `TrivyRepoScan`. Fields that are set will be updated. */
export type TrivyRepoScanPatch = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: InputMaybe<Scalars['Datetime']>;
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** JSON results from Trivy repo scan */
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

/** view of Trivy repo scans vulnerabilities */
export type TrivyRepoVulnerability = {
  /** timestamp when record was synced into the MergeStat database */
  _mergestatSyncedAt?: Maybe<Scalars['Datetime']>;
  /** vulnerability class */
  class?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** vulnerability target */
  target?: Maybe<Scalars['String']>;
  /** vulnerability type */
  type?: Maybe<Scalars['String']>;
  /** vulnerability JSON results of Trivy scan */
  vulnerability?: Maybe<Scalars['JSON']>;
  /** vulnerability description */
  vulnerabilityDescription?: Maybe<Scalars['String']>;
  /** vulnerability id */
  vulnerabilityId?: Maybe<Scalars['String']>;
  /** vulnerability installed version */
  vulnerabilityInstalledVersion?: Maybe<Scalars['String']>;
  /** vulnerability package name */
  vulnerabilityPkgName?: Maybe<Scalars['String']>;
  /** vulnerability severity */
  vulnerabilitySeverity?: Maybe<Scalars['String']>;
  /** vulnerability title */
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
  /** line number of the modification */
  lineNo: Scalars['Int'];
  /** An object where the defined keys will be set on the `GitBlame` being updated. */
  patch: GitBlamePatch;
  /** path of the file the modification was made in */
  path: Scalars['String'];
  /** foreign key for public.repos.id */
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
  /** foreign key for public.repos.id */
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

/** All input for the `updateGitRemoteByNodeId` mutation. */
export type UpdateGitRemoteByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitRemote` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GitRemote` being updated. */
  patch: GitRemotePatch;
};

/** All input for the `updateGitRemote` mutation. */
export type UpdateGitRemoteInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `GitRemote` being updated. */
  patch: GitRemotePatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `GitRemote` mutation. */
export type UpdateGitRemotePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitRemote` that was updated by this mutation. */
  gitRemote?: Maybe<GitRemote>;
  /** An edge for our `GitRemote`. May be used by Relay 1. */
  gitRemoteEdge?: Maybe<GitRemotesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitRemote`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GitRemote` mutation. */
export type UpdateGitRemotePayloadGitRemoteEdgeArgs = {
  orderBy?: InputMaybe<Array<GitRemotesOrderBy>>;
};

/** All input for the `updateGithubActionsWorkflowById` mutation. */
export type UpdateGithubActionsWorkflowByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflow` being updated. */
  patch: GithubActionsWorkflowPatch;
};

/** All input for the `updateGithubActionsWorkflowByNodeId` mutation. */
export type UpdateGithubActionsWorkflowByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubActionsWorkflow` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflow` being updated. */
  patch: GithubActionsWorkflowPatch;
};

/** All input for the `updateGithubActionsWorkflow` mutation. */
export type UpdateGithubActionsWorkflowInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflow` being updated. */
  patch: GithubActionsWorkflowPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GithubActionsWorkflow` mutation. */
export type UpdateGithubActionsWorkflowPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubActionsWorkflow` that was updated by this mutation. */
  githubActionsWorkflow?: Maybe<GithubActionsWorkflow>;
  /** An edge for our `GithubActionsWorkflow`. May be used by Relay 1. */
  githubActionsWorkflowEdge?: Maybe<GithubActionsWorkflowsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflow`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubActionsWorkflow` mutation. */
export type UpdateGithubActionsWorkflowPayloadGithubActionsWorkflowEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowsOrderBy>>;
};

/** All input for the `updateGithubActionsWorkflowRunById` mutation. */
export type UpdateGithubActionsWorkflowRunByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflowRun` being updated. */
  patch: GithubActionsWorkflowRunPatch;
};

/** All input for the `updateGithubActionsWorkflowRunByNodeId` mutation. */
export type UpdateGithubActionsWorkflowRunByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubActionsWorkflowRun` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflowRun` being updated. */
  patch: GithubActionsWorkflowRunPatch;
};

/** All input for the `updateGithubActionsWorkflowRun` mutation. */
export type UpdateGithubActionsWorkflowRunInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflowRun` being updated. */
  patch: GithubActionsWorkflowRunPatch;
  repoId: Scalars['UUID'];
};

/** All input for the `updateGithubActionsWorkflowRunJobById` mutation. */
export type UpdateGithubActionsWorkflowRunJobByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflowRunJob` being updated. */
  patch: GithubActionsWorkflowRunJobPatch;
};

/** All input for the `updateGithubActionsWorkflowRunJobByNodeId` mutation. */
export type UpdateGithubActionsWorkflowRunJobByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GithubActionsWorkflowRunJob` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflowRunJob` being updated. */
  patch: GithubActionsWorkflowRunJobPatch;
};

/** All input for the `updateGithubActionsWorkflowRunJob` mutation. */
export type UpdateGithubActionsWorkflowRunJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['BigInt'];
  /** An object where the defined keys will be set on the `GithubActionsWorkflowRunJob` being updated. */
  patch: GithubActionsWorkflowRunJobPatch;
  repoId: Scalars['UUID'];
};

/** The output of our update `GithubActionsWorkflowRunJob` mutation. */
export type UpdateGithubActionsWorkflowRunJobPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubActionsWorkflowRunJob` that was updated by this mutation. */
  githubActionsWorkflowRunJob?: Maybe<GithubActionsWorkflowRunJob>;
  /** An edge for our `GithubActionsWorkflowRunJob`. May be used by Relay 1. */
  githubActionsWorkflowRunJobEdge?: Maybe<GithubActionsWorkflowRunJobsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRunJob`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubActionsWorkflowRunJob` mutation. */
export type UpdateGithubActionsWorkflowRunJobPayloadGithubActionsWorkflowRunJobEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunJobsOrderBy>>;
};

/** The output of our update `GithubActionsWorkflowRun` mutation. */
export type UpdateGithubActionsWorkflowRunPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GithubActionsWorkflowRun` that was updated by this mutation. */
  githubActionsWorkflowRun?: Maybe<GithubActionsWorkflowRun>;
  /** An edge for our `GithubActionsWorkflowRun`. May be used by Relay 1. */
  githubActionsWorkflowRunEdge?: Maybe<GithubActionsWorkflowRunsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GithubActionsWorkflowRun`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GithubActionsWorkflowRun` mutation. */
export type UpdateGithubActionsWorkflowRunPayloadGithubActionsWorkflowRunEdgeArgs = {
  orderBy?: InputMaybe<Array<GithubActionsWorkflowRunsOrderBy>>;
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
  /** GitHub database_id of the issue */
  databaseId: Scalars['Int'];
  /** An object where the defined keys will be set on the `GithubIssue` being updated. */
  patch: GithubIssuePatch;
  /** foreign key for public.repos.id */
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
  /** hash of the commit */
  hash: Scalars['String'];
  /** An object where the defined keys will be set on the `GithubPullRequestCommit` being updated. */
  patch: GithubPullRequestCommitPatch;
  /** GitHub pull request number of the commit */
  prNumber: Scalars['Int'];
  /** foreign key for public.repos.id */
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
  /** GitHub database_id of the pull request */
  databaseId: Scalars['Int'];
  /** An object where the defined keys will be set on the `GithubPullRequest` being updated. */
  patch: GithubPullRequestPatch;
  /** foreign key for public.repos.id */
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
  /** GitHub id of the review */
  id: Scalars['String'];
  /** An object where the defined keys will be set on the `GithubPullRequestReview` being updated. */
  patch: GithubPullRequestReviewPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
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
  /** the name of the repo */
  name: Scalars['String'];
  /** the user or organization that owns the repo */
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
  /** foreign key for public.repos.id */
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
  /** login of the user who starred the repo */
  login: Scalars['String'];
  /** An object where the defined keys will be set on the `GithubStargazer` being updated. */
  patch: GithubStargazerPatch;
  /** foreign key for public.repos.id */
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

/** All input for the `updateGitleaksRepoScanByNodeId` mutation. */
export type UpdateGitleaksRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GitleaksRepoScan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GitleaksRepoScan` being updated. */
  patch: GitleaksRepoScanPatch;
};

/** All input for the `updateGitleaksRepoScan` mutation. */
export type UpdateGitleaksRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `GitleaksRepoScan` being updated. */
  patch: GitleaksRepoScanPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `GitleaksRepoScan` mutation. */
export type UpdateGitleaksRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GitleaksRepoScan` that was updated by this mutation. */
  gitleaksRepoScan?: Maybe<GitleaksRepoScan>;
  /** An edge for our `GitleaksRepoScan`. May be used by Relay 1. */
  gitleaksRepoScanEdge?: Maybe<GitleaksRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GitleaksRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GitleaksRepoScan` mutation. */
export type UpdateGitleaksRepoScanPayloadGitleaksRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GitleaksRepoScansOrderBy>>;
};

/** All input for the `updateGosecRepoScanByNodeId` mutation. */
export type UpdateGosecRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GosecRepoScan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GosecRepoScan` being updated. */
  patch: GosecRepoScanPatch;
};

/** All input for the `updateGosecRepoScan` mutation. */
export type UpdateGosecRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `GosecRepoScan` being updated. */
  patch: GosecRepoScanPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `GosecRepoScan` mutation. */
export type UpdateGosecRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GosecRepoScan` that was updated by this mutation. */
  gosecRepoScan?: Maybe<GosecRepoScan>;
  /** An edge for our `GosecRepoScan`. May be used by Relay 1. */
  gosecRepoScanEdge?: Maybe<GosecRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GosecRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GosecRepoScan` mutation. */
export type UpdateGosecRepoScanPayloadGosecRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GosecRepoScansOrderBy>>;
};

/** All input for the `updateGrypeRepoScanByNodeId` mutation. */
export type UpdateGrypeRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `GrypeRepoScan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `GrypeRepoScan` being updated. */
  patch: GrypeRepoScanPatch;
};

/** All input for the `updateGrypeRepoScan` mutation. */
export type UpdateGrypeRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `GrypeRepoScan` being updated. */
  patch: GrypeRepoScanPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `GrypeRepoScan` mutation. */
export type UpdateGrypeRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `GrypeRepoScan` that was updated by this mutation. */
  grypeRepoScan?: Maybe<GrypeRepoScan>;
  /** An edge for our `GrypeRepoScan`. May be used by Relay 1. */
  grypeRepoScanEdge?: Maybe<GrypeRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `GrypeRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `GrypeRepoScan` mutation. */
export type UpdateGrypeRepoScanPayloadGrypeRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<GrypeRepoScansOrderBy>>;
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

/** All input for the `updateOssfScorecardRepoScanByNodeId` mutation. */
export type UpdateOssfScorecardRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OssfScorecardRepoScan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `OssfScorecardRepoScan` being updated. */
  patch: OssfScorecardRepoScanPatch;
};

/** All input for the `updateOssfScorecardRepoScan` mutation. */
export type UpdateOssfScorecardRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `OssfScorecardRepoScan` being updated. */
  patch: OssfScorecardRepoScanPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `OssfScorecardRepoScan` mutation. */
export type UpdateOssfScorecardRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OssfScorecardRepoScan` that was updated by this mutation. */
  ossfScorecardRepoScan?: Maybe<OssfScorecardRepoScan>;
  /** An edge for our `OssfScorecardRepoScan`. May be used by Relay 1. */
  ossfScorecardRepoScanEdge?: Maybe<OssfScorecardRepoScansEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `OssfScorecardRepoScan`. */
  repo?: Maybe<Repo>;
};


/** The output of our update `OssfScorecardRepoScan` mutation. */
export type UpdateOssfScorecardRepoScanPayloadOssfScorecardRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<OssfScorecardRepoScansOrderBy>>;
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

/** All input for the `updateSyftRepoScanByNodeId` mutation. */
export type UpdateSyftRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SyftRepoScan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SyftRepoScan` being updated. */
  patch: SyftRepoScanPatch;
};

/** All input for the `updateSyftRepoScan` mutation. */
export type UpdateSyftRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SyftRepoScan` being updated. */
  patch: SyftRepoScanPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `SyftRepoScan` mutation. */
export type UpdateSyftRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `SyftRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `SyftRepoScan` that was updated by this mutation. */
  syftRepoScan?: Maybe<SyftRepoScan>;
  /** An edge for our `SyftRepoScan`. May be used by Relay 1. */
  syftRepoScanEdge?: Maybe<SyftRepoScansEdge>;
};


/** The output of our update `SyftRepoScan` mutation. */
export type UpdateSyftRepoScanPayloadSyftRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<SyftRepoScansOrderBy>>;
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
  /** foreign key for public.repos.id */
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

/** All input for the `updateYelpDetectSecretsRepoScanByNodeId` mutation. */
export type UpdateYelpDetectSecretsRepoScanByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `YelpDetectSecretsRepoScan` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `YelpDetectSecretsRepoScan` being updated. */
  patch: YelpDetectSecretsRepoScanPatch;
};

/** All input for the `updateYelpDetectSecretsRepoScan` mutation. */
export type UpdateYelpDetectSecretsRepoScanInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `YelpDetectSecretsRepoScan` being updated. */
  patch: YelpDetectSecretsRepoScanPatch;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
};

/** The output of our update `YelpDetectSecretsRepoScan` mutation. */
export type UpdateYelpDetectSecretsRepoScanPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Repo` that is related to this `YelpDetectSecretsRepoScan`. */
  repo?: Maybe<Repo>;
  /** The `YelpDetectSecretsRepoScan` that was updated by this mutation. */
  yelpDetectSecretsRepoScan?: Maybe<YelpDetectSecretsRepoScan>;
  /** An edge for our `YelpDetectSecretsRepoScan`. May be used by Relay 1. */
  yelpDetectSecretsRepoScanEdge?: Maybe<YelpDetectSecretsRepoScansEdge>;
};


/** The output of our update `YelpDetectSecretsRepoScan` mutation. */
export type UpdateYelpDetectSecretsRepoScanPayloadYelpDetectSecretsRepoScanEdgeArgs = {
  orderBy?: InputMaybe<Array<YelpDetectSecretsRepoScansOrderBy>>;
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

export type YelpDetectSecretsRepoDetection = {
  /** detection filename */
  filename?: Maybe<Scalars['String']>;
  /** detection filters used */
  filtersUsed?: Maybe<Scalars['String']>;
  /** detection generated at */
  generatedAt?: Maybe<Scalars['String']>;
  /** detection secret */
  hashedSecret?: Maybe<Scalars['String']>;
  /** detection is verified */
  isVerified?: Maybe<Scalars['String']>;
  /** detection line number */
  lineNumber?: Maybe<Scalars['String']>;
  /** detection plugins used */
  pluginsUsed?: Maybe<Scalars['String']>;
  /** foreign key for public.repos.id */
  repoId?: Maybe<Scalars['UUID']>;
  /** detection type */
  type?: Maybe<Scalars['String']>;
  /** detection version */
  version?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `YelpDetectSecretsRepoDetection` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type YelpDetectSecretsRepoDetectionCondition = {
  /** Checks for equality with the object’s `filename` field. */
  filename?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `filtersUsed` field. */
  filtersUsed?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `generatedAt` field. */
  generatedAt?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `hashedSecret` field. */
  hashedSecret?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `isVerified` field. */
  isVerified?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lineNumber` field. */
  lineNumber?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `pluginsUsed` field. */
  pluginsUsed?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `YelpDetectSecretsRepoDetection` object types. All fields are combined with a logical ‘and.’ */
export type YelpDetectSecretsRepoDetectionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<YelpDetectSecretsRepoDetectionFilter>>;
  /** Filter by the object’s `filename` field. */
  filename?: InputMaybe<StringFilter>;
  /** Filter by the object’s `filtersUsed` field. */
  filtersUsed?: InputMaybe<StringFilter>;
  /** Filter by the object’s `generatedAt` field. */
  generatedAt?: InputMaybe<StringFilter>;
  /** Filter by the object’s `hashedSecret` field. */
  hashedSecret?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isVerified` field. */
  isVerified?: InputMaybe<StringFilter>;
  /** Filter by the object’s `lineNumber` field. */
  lineNumber?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<YelpDetectSecretsRepoDetectionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<YelpDetectSecretsRepoDetectionFilter>>;
  /** Filter by the object’s `pluginsUsed` field. */
  pluginsUsed?: InputMaybe<StringFilter>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<StringFilter>;
};

/** A connection to a list of `YelpDetectSecretsRepoDetection` values. */
export type YelpDetectSecretsRepoDetectionsConnection = {
  /** A list of edges which contains the `YelpDetectSecretsRepoDetection` and cursor to aid in pagination. */
  edges: Array<YelpDetectSecretsRepoDetectionsEdge>;
  /** A list of `YelpDetectSecretsRepoDetection` objects. */
  nodes: Array<YelpDetectSecretsRepoDetection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `YelpDetectSecretsRepoDetection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `YelpDetectSecretsRepoDetection` edge in the connection. */
export type YelpDetectSecretsRepoDetectionsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `YelpDetectSecretsRepoDetection` at the end of the edge. */
  node: YelpDetectSecretsRepoDetection;
};

/** Methods to use when ordering `YelpDetectSecretsRepoDetection`. */
export enum YelpDetectSecretsRepoDetectionsOrderBy {
  FilenameAsc = 'FILENAME_ASC',
  FilenameDesc = 'FILENAME_DESC',
  FiltersUsedAsc = 'FILTERS_USED_ASC',
  FiltersUsedDesc = 'FILTERS_USED_DESC',
  GeneratedAtAsc = 'GENERATED_AT_ASC',
  GeneratedAtDesc = 'GENERATED_AT_DESC',
  HashedSecretAsc = 'HASHED_SECRET_ASC',
  HashedSecretDesc = 'HASHED_SECRET_DESC',
  IsVerifiedAsc = 'IS_VERIFIED_ASC',
  IsVerifiedDesc = 'IS_VERIFIED_DESC',
  LineNumberAsc = 'LINE_NUMBER_ASC',
  LineNumberDesc = 'LINE_NUMBER_DESC',
  Natural = 'NATURAL',
  PluginsUsedAsc = 'PLUGINS_USED_ASC',
  PluginsUsedDesc = 'PLUGINS_USED_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

/** scan output of a Yelp detect-secrets repo scan */
export type YelpDetectSecretsRepoScan = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Repo` that is related to this `YelpDetectSecretsRepoScan`. */
  repo?: Maybe<Repo>;
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON output of a Yelp detect-secrets scan */
  results: Scalars['JSON'];
};

/**
 * A condition to be used against `YelpDetectSecretsRepoScan` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type YelpDetectSecretsRepoScanCondition = {
  /** Checks for equality with the object’s `repoId` field. */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `results` field. */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A filter to be used against `YelpDetectSecretsRepoScan` object types. All fields are combined with a logical ‘and.’ */
export type YelpDetectSecretsRepoScanFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<YelpDetectSecretsRepoScanFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<YelpDetectSecretsRepoScanFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<YelpDetectSecretsRepoScanFilter>>;
  /** Filter by the object’s `repoId` field. */
  repoId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `results` field. */
  results?: InputMaybe<JsonFilter>;
};

/** An input for mutations affecting `YelpDetectSecretsRepoScan` */
export type YelpDetectSecretsRepoScanInput = {
  /** foreign key for public.repos.id */
  repoId: Scalars['UUID'];
  /** JSON output of a Yelp detect-secrets scan */
  results: Scalars['JSON'];
};

/** Represents an update to a `YelpDetectSecretsRepoScan`. Fields that are set will be updated. */
export type YelpDetectSecretsRepoScanPatch = {
  /** foreign key for public.repos.id */
  repoId?: InputMaybe<Scalars['UUID']>;
  /** JSON output of a Yelp detect-secrets scan */
  results?: InputMaybe<Scalars['JSON']>;
};

/** A connection to a list of `YelpDetectSecretsRepoScan` values. */
export type YelpDetectSecretsRepoScansConnection = {
  /** A list of edges which contains the `YelpDetectSecretsRepoScan` and cursor to aid in pagination. */
  edges: Array<YelpDetectSecretsRepoScansEdge>;
  /** A list of `YelpDetectSecretsRepoScan` objects. */
  nodes: Array<YelpDetectSecretsRepoScan>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `YelpDetectSecretsRepoScan` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `YelpDetectSecretsRepoScan` edge in the connection. */
export type YelpDetectSecretsRepoScansEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `YelpDetectSecretsRepoScan` at the end of the edge. */
  node: YelpDetectSecretsRepoScan;
};

/** Methods to use when ordering `YelpDetectSecretsRepoScan`. */
export enum YelpDetectSecretsRepoScansOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RepoIdAsc = 'REPO_ID_ASC',
  RepoIdDesc = 'REPO_ID_DESC',
  ResultsAsc = 'RESULTS_ASC',
  ResultsDesc = 'RESULTS_DESC'
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
}>;


export type UpdateSavedQueryMutation = { updateSavedQuery?: { savedQuery?: { id: any, name: string, description?: string | null, sql: string } | null } | null };

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

export type SyncNowContainerMutationVariables = Exact<{
  sync: Scalars['UUID'];
}>;


export type SyncNowContainerMutation = { syncNow?: boolean | null };

export type UndateContainerSyncMutationVariables = Exact<{
  id: Scalars['UUID'];
  parameters: Scalars['JSON'];
}>;


export type UndateContainerSyncMutation = { updateContainerSync?: { containerSync?: { id: any, parameters: any } | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentMergeStatUser?: string | null };

export type GetDatabaseConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDatabaseConnectionQuery = { databaseConnection?: { database?: string | null, host?: string | null, port?: number | null, user?: string | null } | null };

export type GetGitSourcesListQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetGitSourcesListQuery = { all?: { totalCount: number } | null, providers?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null, createdAt: any, settings: any, vendor: string, reposByProvider: { totalCount: number } }> } | null };

export type GetGitSourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGitSourcesQuery = { github?: { totalCount: number } | null, providers?: { nodes: Array<{ id: any, name: string, description?: string | null, createdAt: any, settings: any, vendor: string }> } | null };

export type GetGitSourceQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetGitSourceQuery = { provider?: { id: any, name: string, description?: string | null, vendor: string, settings: any, auth: { nodes: Array<{ id: any, type: string, credentials?: string | null, createdAt: any }> }, auto: { nodes: Array<{ id: any, settings: any, repos: { totalCount: number } }> }, manual: { totalCount: number, nodes: Array<{ id: any, repo: string, settings: any }> } } | null };

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

export type GetRepoDataQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetRepoDataQuery = { repo?: { id: any, repo: string, tags: any, repoImport?: { settings: any } | null, provider?: { id: any, name: string, vendor: string, settings: any } | null } | null };

export type GetContainerImageQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetContainerImageQuery = { containerImage?: { id: any, name: string, description?: string | null, type: string, url: string, version: string, parameters: any, repos: { totalCount: number } } | null };

export type GetContainerImagesQueryVariables = Exact<{
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetContainerImagesQuery = { all?: { totalCount: number } | null, containerImages?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null, url: string, version: string, type: string, parameters: any, repos: { totalCount: number } }> } | null };

export type GetContainerSyncsQueryVariables = Exact<{
  id: Scalars['UUID'];
  search: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetContainerSyncsQuery = { containerSyncs?: { nodes: Array<{ id: any, parameters: any, image?: { id: any } | null, repo?: { id: any } | null, schedule: { nodes: Array<{ id: any }> }, executions: { nodes: Array<{ job?: { id: any, status: JobStates, queue: string, createdAt: any, startedAt?: any | null, completedAt?: any | null } | null }> } }> } | null, all?: { totalCount: number } | null, containerImages?: { totalCount: number, nodes: Array<{ id: any, name: string, description?: string | null }> } | null };

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

export type GetContainerSyncHistoryLogsQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetContainerSyncHistoryLogsQuery = { repo?: { id: any, repo: string, containerSyncs: { nodes: Array<{ id: any, parameters: any, image?: { id: any, name: string, description?: string | null } | null, repo?: { id: any } | null, schedule: { nodes: Array<{ id: any }> }, executions: { totalCount: number, nodes: Array<{ job?: { id: any, status: JobStates, queue: string, createdAt: any, startedAt?: any | null, completedAt?: any | null, errors: { totalCount: number }, warnings: { totalCount: number }, logs: { totalCount: number, nodes: Array<{ id: any, level?: LogLevel | null, message?: string | null, loggedAt?: any | null }> } } | null }> } }> } } | null };

export type GetLogsOfContainerSyncQueryVariables = Exact<{
  repoId: Scalars['UUID'];
  syncId: Scalars['UUID'];
  jobId: Scalars['UUID'];
}>;


export type GetLogsOfContainerSyncQuery = { repo?: { id: any, repo: string, containerSyncs: { nodes: Array<{ id: any, parameters: any, image?: { id: any, name: string, description?: string | null } | null, repo?: { id: any } | null, schedule: { nodes: Array<{ id: any }> }, executions: { totalCount: number, nodes: Array<{ job?: { id: any, status: JobStates, queue: string, createdAt: any, startedAt?: any | null, completedAt?: any | null, errors: { totalCount: number }, warnings: { totalCount: number }, logs: { totalCount: number, nodes: Array<{ id: any, level?: LogLevel | null, message?: string | null, loggedAt?: any | null }> } } | null }> } }> } } | null };

export type GetUsersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type GetUsersQuery = { userMgmtPgUsers?: { nodes: Array<{ memberof?: Array<string | null> | null, rolname?: string | null }> } | null };

export type ExecuteSqlQueryVariables = Exact<{
  sql: Scalars['String'];
  disableReadOnly?: InputMaybe<Scalars['Boolean']>;
  trackHistory?: InputMaybe<Scalars['Boolean']>;
}>;


export type ExecuteSqlQuery = { execSQL: { rowCount?: number | null, columns?: Array<any> | null, rows?: Array<any> | null, queryRunningTimeMs?: number | null } };
