import { Badge, Dropdown, Menu, Spinner } from '@mergestat/blocks'
import { ChevronRightIcon, CircleCheckFilledIcon, CircleErrorFilledIcon } from '@mergestat/icons'
import { RepoSyncStateT } from 'src/@types'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'

type RepositoryDataProps = {
  data: Array<{ title: string, lastSync: string }>
  status: RepoSyncStateT
}

export const RepoDataDropDown: React.FC<RepositoryDataProps> = ({ data, status }: RepositoryDataProps) => {
  return (
    <Dropdown
      overlay={() => (
        <Menu className="rounded w-100 flex flex-col">
          {data.map((item, index) => (
            <div
              key={index}
              className="hover_bg-gray-50 py-3 px-4 flex items-center justify-between gap-3 focus-within_ text-base"
            >
              <div className="flex items-center gap-2">
                <RepoSyncIcon type={status} className="t-icon" />
                <span className='text-semantic-text leading-5'>{item.title}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className='text-sm text-semantic-mutedText'>{item.lastSync}</span>
                <ChevronRightIcon className='t-icon text-semantic-icon' />
              </div>
            </div>
          ))}
        </Menu>
      )}
      trigger={getRepoStatusComponent(status, data.length)}
    />
  )
}

function getRepoStatusComponent(
  status: RepoSyncStateT,
  count: number
): React.ReactNode {
  switch (status) {
    case 'succeeded':
      return <RepositoryCheckStatus count={count} />
    case 'failed':
      return <RepositoryErrorStatus count={count} />
    case 'running':
      return <RepositoryLoadingStatus count={count} />
    default:
      return <></>
  }
}

type RepositoryStatusProps = {
  count: number
}

const RepositoryCheckStatus: React.FC<RepositoryStatusProps> = ({ count }: RepositoryStatusProps) => {
  if (!count) return <></>
  return (
    <Badge
      label={'' + count}
      startIcon={<CircleCheckFilledIcon className="t-icon text-semantic-success" />}
      action={true}
    />
  )
}

const RepositoryLoadingStatus: React.FC<RepositoryStatusProps> = ({ count }: RepositoryStatusProps) => {
  return (
    <Badge
      label={'' + count}
      startIcon={<Spinner size="sm" className="mr-2" />}
      action={true}
    />
  )
}

const RepositoryErrorStatus: React.FC<RepositoryStatusProps> = ({ count }: RepositoryStatusProps) => {
  return (
    <Badge
      label={'' + count}
      startIcon={<CircleErrorFilledIcon className="t-icon text-semantic-danger" />}
      action={true}
    />
  )
}
