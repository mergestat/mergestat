import { Badge } from '@mergestat/blocks'
import { MinusIcon } from '@mergestat/icons'
import type { RepoDataStatusT, RepoSyncStateT } from 'src/@types'
import { RelativeTimeText } from 'src/components/Fields/relative-time-text'
import { SYNC_STATUS } from 'src/utils/constants'
import { RepoDataDropDown } from 'src/views/repositories/drop-downs'

export type RepositoryStatusProps = {
  idRepo: string
  status: Array<RepoDataStatusT>
  type: RepoSyncStateT
}

const getLastSync = (type: RepoSyncStateT, lastSync: string) => {
  return type === SYNC_STATUS.running ? SYNC_STATUS.running : type === SYNC_STATUS.queued ? SYNC_STATUS.queued : lastSync ? <RelativeTimeText date={lastSync} prefix='Last sync' /> : ''
}

export const RepositoryStatus: React.FC<RepositoryStatusProps> = ({ idRepo, status, type }: RepositoryStatusProps) => {
  const filteredArray = status.filter((item) => item.type === type)

  return (
    <>
      {filteredArray.length > 0
        ? filteredArray.map((item, index) => (
          <RepoDataDropDown
            key={`repo-status-${index}`}
            status={item.type}
            data={item.syncs?.map((sync) => ({
              url: `/repos/${idRepo}/${sync.idType}/${sync.idLastSync}`,
              title: sync.type,
              lastSync: getLastSync(item.type, sync.lastSync),
            })) || []}
          />
        ))
        : <Badge
          label="0"
          startIcon={<MinusIcon className="t-icon t-icon-muted" />}
        />
      }
    </>
  )
}
