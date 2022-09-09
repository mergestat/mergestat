import type { RepoDataStatusT, RepoSyncStateT } from 'src/@types'
import { RelativeTimeText } from 'src/components/Fields/relative-time-text'
import { SYNC_STATUS } from 'src/utils/constants'
import { RepoDataDropDown } from 'src/views/repositories/drop-downs'

export type RepositoryStatusProps = {
  idRepo: string
  status: Array<RepoDataStatusT>
}

const getLastSync = (type: RepoSyncStateT, lastSync: string) => {
  return type === SYNC_STATUS.running ? SYNC_STATUS.running : type === SYNC_STATUS.queued ? SYNC_STATUS.queued : lastSync ? <RelativeTimeText date={lastSync} prefix='Last sync' /> : ''
}

export const RepositoryStatus: React.FC<RepositoryStatusProps> = ({ idRepo, status }: RepositoryStatusProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      {status.length ? null : <span className="text-semantic-mutedText">No syncs</span>}
      {status.map((item, index) => (
        <RepoDataDropDown
          key={index}
          status={item.type}
          data={item.syncs?.map((sync) => ({
            url: `/repos/${idRepo}/${sync.idType}/${sync.idLastSync}`,
            title: sync.type,
            lastSync: getLastSync(item.type, sync.lastSync),
          })) || []}
        />
      ))}
    </div>
  )
}
