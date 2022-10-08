import { Badge, Dropdown, Menu, Spinner } from '@mergestat/blocks'
import { ChevronRightIcon, CircleCheckFilledIcon, CircleErrorFilledIcon, ClockIcon } from '@mergestat/icons'
import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'
import { RepoSyncStateT } from 'src/@types'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'

interface RepoDataDropDownProps {
  data: Array<{ url: string, title: string, lastSync: string | ReactNode }>
  status: RepoSyncStateT
}

export const RepoDataDropDown: React.FC<RepoDataDropDownProps> = ({ data, status }: RepoDataDropDownProps) => {
  return (
    <Dropdown
      overlay={() => (
        <Menu className="rounded w-100 flex flex-col">
          {data.map((item, index) => (
            <Link key={index} href={item.url}>
              <div data-testid={TEST_IDS.repoDataDropdown}
                className="hover_bg-gray-50 py-3 px-4 flex items-center justify-between gap-3 focus-within_ text-base cursor-pointer">
                <div className="flex items-center gap-2">
                  <RepoSyncIcon type={status} className="t-icon" />
                  <span className='text-semantic-text leading-5'>{item.title}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className='text-sm text-semantic-mutedText'>{item.lastSync}</span>
                  <ChevronRightIcon className='t-icon text-semantic-icon' />
                </div>
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
        <CircleCheckFilledIcon className="t-icon text-semantic-success" />
      </IconAndQuantity>
    case SYNC_STATUS.error:
      return <IconAndQuantity count={count}>
        <CircleErrorFilledIcon className="t-icon text-semantic-danger" />
      </IconAndQuantity>
    case SYNC_STATUS.queued:
      return <IconAndQuantity count={count}>
        <ClockIcon className='t-icon text-semantic-mutedIcon' />
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
      label={`${count}`}
      startIcon={children}
      action={true}
    />
  )
}
