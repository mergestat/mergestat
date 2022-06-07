import {
  Dropdown,
  Menu,
  Spinner,
} from '@mergestat/blocks'
import {
  ChevronRightIcon,
  CircleCheckFilledIcon,
  CircleErrorFilledIcon,
} from '@mergestat/icons'
import { RepSyncStateT } from 'src/@types';
import { RepoSyncIcon } from 'src/components/RepoSyncIcon';

type RepositoryDataProps = {
  data: Array<{ title: string; lastSync: string }>
  status: RepSyncStateT
}
export const RepoDataDropDown: React.FC<RepositoryDataProps> = (props) => {
  const { data, status } = props

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
                <RepoSyncIcon type={status} className="w-4.5 h-4.5" />
                <span className='text-samantic-text leading-5'>{item.title}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className='text-samantic-mutedText'>{item.lastSync}</span>
                <ChevronRightIcon className='t-icon text-samantic-icon' />
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
  status: RepSyncStateT,
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

const RepositoryCheckStatus: React.FC<RepositoryStatusProps> = (props) => {
  const { count } = props
  if (!count) return <></>
  return (
    <div className="flex items-center gap-2 border border-samantic-border rounded py-1 px-2 text-sm w-max bg-gray-50 text-samantic-mutedText cursor-pointer">
      <CircleCheckFilledIcon className="text-samantic-success w-3.5 h-3.5" />
      {count}
    </div>
  )
}

const RepositoryLoadingStatus: React.FC<RepositoryStatusProps> = (props) => {
  const { count } = props
  return (
    <div className="flex items-center gap-2 border border-samantic-border rounded py-1 px-2 text-sm w-max bg-gray-50 text-samantic-mutedText cursor-pointer">
      <Spinner size="sm" />
      {count}
    </div>
  )
}

const RepositoryErrorStatus: React.FC<RepositoryStatusProps> = (props) => {
  const { count } = props
  return (
    <div className="flex items-center gap-2 border border-samantic-border rounded py-1 px-2 text-sm w-max bg-gray-50 text-samantic-mutedText cursor-pointer">
      <CircleErrorFilledIcon className="text-samantic-danger w-3.5 h-3.5" />
      {count}
    </div>
  )
}
