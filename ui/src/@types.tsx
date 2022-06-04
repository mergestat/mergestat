export type RepSyncStateT = 'disabled' | 'loading' | 'success' | 'error'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type TagType = {
  title: string;
  checked: boolean;
  color?: string;
}

/** Repositories Data Props Type */
export type RepoDataStatusT = {
  type: RepSyncStateT,
  count: number
}

export type RepoType = 'github' | 'gitlab' | 'bitbucket' | 'other'

export type RepoDataPropsT = {
  name: string,
  lastUpdate: string,
  type: RepoType,
  automaticImport?: boolean,
  tags: Array<{ title: string, checked: boolean }>,
  lastSync: string,
  status: Array<RepoDataStatusT>,
}

/** Repository Data Props Type */
export type SyncStatusDataT = {
  value: number;
  status: string;
}

export type RepoSyncDataType = {
  data: {
    title: string,
    brief: string,
  },
  latestRun: string,
  status: {
    data?: SyncStatusDataT[],
    syncState: RepSyncStateT
  },
}
