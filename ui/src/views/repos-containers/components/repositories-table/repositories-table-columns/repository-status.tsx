import { Badge } from '@mergestat/blocks'
import { MinusIcon } from '@mergestat/icons'
import type { RepoContainerSyncState } from 'src/@types'
import { JobsDropDown } from 'src/views/repos-containers/drop-downs'

export type RepositoryStatusProps = {
  repoId: string
  status: RepoContainerSyncState
  count: number
}

export const RepositoryStatus: React.FC<RepositoryStatusProps> = ({ repoId, status, count }: RepositoryStatusProps) => {
  return (
    <>
      {count === 0 &&
        <Badge
          label="0"
          startIcon={<MinusIcon className="t-icon t-icon-muted" />}
        />}

      {count > 0 && <JobsDropDown status={status} repoId={repoId} count={count} />}
    </>
  )
}
