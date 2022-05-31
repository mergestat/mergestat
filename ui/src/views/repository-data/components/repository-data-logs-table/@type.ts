import { RepSyncStateT } from 'src/@types'

export interface SyncStatusDataProps {
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
    data?: SyncStatusDataProps[],
    syncState: RepSyncStateT
  },
}
