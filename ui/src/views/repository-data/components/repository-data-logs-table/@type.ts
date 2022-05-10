import { repSyncState } from 'src/views/@types'

export type RepoSyncDataType = {
  syncStateIcon: JSX.Element
  Data: { title: string; brief: string }
  latest_run: string
  status: { disabled: boolean; graphNode: JSX.Element }
  syncNow: { syncState: repSyncState; doSync?: () => void }
  options: JSX.Element
}
