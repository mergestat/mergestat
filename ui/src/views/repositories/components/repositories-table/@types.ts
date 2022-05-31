import type { RepSyncStateT } from 'src/@types'

export type RepoDataStatusT = {
  type: RepSyncStateT,
  count: number
}

export type RepoType = 'github' | 'gitlab' | 'bitbucket' | 'other'

export type RepoDataProps = {
  name: string,
  lastUpdate: string,
  type: RepoType,
  automaticImport?: boolean,
  tags: Array<{ title: string, checked: boolean }>,
  lastSync: string,
  status: Array<RepoDataStatusT>,
}
