import { Badge, Dropdown, Menu, Spinner } from '@mergestat/blocks'
import { ChevronRightIcon, CircleCheckFilledIcon, CircleErrorFilledIcon, ClockIcon } from '@mergestat/icons'
import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'
import { RepoSyncStateT } from 'src/@types'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'

type RepoDataDropDownProps = {
  data: Array<{ url: string, title: string, lastSync: string | ReactNode }>
  status: RepoSyncStateT
}

export const RepoDataDropDown: React.FC<RepoDataDropDownProps> = ({ data, status }: RepoDataDropDownProps) => {
  return (
    <Dropdown
      overlay={() => (
        <Menu className="rounded w-100 flex flex-col max-h-80 overflow-auto">
          {data.map((item, index) => (
            <Link key={`repo-status-menu-${index}`} href={item.url}>
              <div data-testid={TEST_IDS.repoDataDropdown}
                className="hover_bg-gray-50 py-3 px-4 flex items-center justify-between gap-3 focus-within_ text-base cursor-pointer">
                <div className="flex items-center gap-3">
                  <RepoSyncIcon type={status} className="t-icon" />
                  <div className='flex flex-col text-left'>
                    <span className='text-sm font-medium t-text-default mb-0.5'>{item.title}</span>
                    <span className='text-sm t-text-muted'>{item.lastSync}</span>
                  </div>
                </div>
                <ChevronRightIcon className='t-icon t-icon-default' />
              </div>
            </Link>
          ))}
        </Menu>
      )}
      trigger={getRepoStatusComponent(status, data.length)}
    />
  )
}

function getRepoStatusComponent(status: RepoSyncStateT, count: number): React.ReactNode {
  switch (status) {
    case SYNC_STATUS.succeeded:
      return <IconAndQuantity count={count}>
        <CircleCheckFilledIcon className="t-icon t-icon-success" />
      </IconAndQuantity>
    case SYNC_STATUS.error:
      return <IconAndQuantity count={count}>
        <CircleErrorFilledIcon className="t-icon t-icon-danger" />
      </IconAndQuantity>
    case SYNC_STATUS.queued:
      return <IconAndQuantity count={count}>
        <ClockIcon className='t-icon t-icon-muted' />
      </IconAndQuantity>
    case SYNC_STATUS.running:
      return <IconAndQuantity count={count}>
        <Spinner size="sm" className="mr-2" />
      </IconAndQuantity>
    default:
      return <></>
  }
}

type RepositoryStatusProps = PropsWithChildren<{
  count: number
}>

const IconAndQuantity: React.FC<RepositoryStatusProps> = ({ count, children }: RepositoryStatusProps) => {
  return (
    <Badge
      className='interactive'
      label={'' + count}
      startIcon={children}
      action={true}
    />
  )
}
