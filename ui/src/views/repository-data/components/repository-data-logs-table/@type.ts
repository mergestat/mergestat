import { repSyncState } from 'src/@types'

export interface SyncStatusDataProps {
  value: number;
  status: string;
}

export type RepoSyncDataType = {
  data: {
    title: string,
    brief: string,
  },
  latest_run: string,
  status: {
    data?: SyncStatusDataProps[],
    syncState: repSyncState
  },
}
