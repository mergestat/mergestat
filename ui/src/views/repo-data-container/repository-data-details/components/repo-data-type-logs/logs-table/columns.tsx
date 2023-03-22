import type { RepoSyncStateT, SyncLogsType } from 'src/@types'
import { SyncType } from './components'

export const columns: Array<Record<string, unknown>> = [
  {
    title: 'Sync Type',
    className: 'py-3',
    dataIndex: 'syncType',
    key: 'syncType',
    render: (syncType: RepoSyncStateT, data: SyncLogsType) => (
      <SyncType id={data.id} syncType={syncType} />
    )
  },
  {
    title: 'Records',
    className: 'text-gray-500',
    headerClassName: 'pl-0 w-40',
    dataIndex: 'records',
    key: 'records',
    render: (records?: string) => (
      records ? <span className='t-text-muted'>{records}</span> : '-'
    )
  },
  {
    title: 'Duration',
    className: 'text-gray-500',
    headerClassName: 'pl-0 w-40',
    dataIndex: 'duration',
    key: 'duration',
    render: (duration: string) => (
      <span className='t-text-muted'>{duration}</span>
    )
  },
  {
    title: 'Sync Start',
    className: 'text-gray-500',
    headerClassName: 'pl-0 w-36',
    dataIndex: 'syncStart',
    key: 'syncStart',
    render: (syncStart: string) => (
      <span className='t-text-muted'>{syncStart}</span>
    )
  }
]
