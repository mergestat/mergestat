import type { RepoDataStatusT, RepoSyncStateT } from 'src/@types'
import { TimeAgoText } from 'src/components/Fields/time-ago-text'
import { RepoDataDropDown } from 'src/views/repositories/drop-downs'

export type RepositoryStatusProps = {
  status: Array<RepoDataStatusT>
}

const getLastSync = (type: RepoSyncStateT, lastSync: string) => {
  return type === 'running' ? 'running' : type === 'queued' ? 'queued' : lastSync ? <TimeAgoText date={lastSync} prefix='Last sync' /> : ''
}

export const RepositoryStatus: React.FC<RepositoryStatusProps> = ({ status }: RepositoryStatusProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      {status.length ? null : <span className="text-semantic-mutedText">No syncs</span>}
      {status.map((item, index) => (
        <RepoDataDropDown
          key={index}
          status={item.type}
          data={item.syncs?.map((sync) => ({
            title: sync.type,
            lastSync: getLastSync(item.type, sync.lastSync),
          })) || []}
        />
      ))}
    </div>
  )
}
