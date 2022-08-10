import { RadioCard, Tooltip } from '@mergestat/blocks'
import { GithubIcon, LinkIcon, TableIcon } from '@mergestat/icons'
import cx from 'classnames'
import React from 'react'
import { RepoExportT } from 'src/@types'

type ModalSideBarProps = {
  onTabSelected: (tab: RepoExportT) => void
}

export const ModalSideBar: React.FC<ModalSideBarProps> = ({ onTabSelected }: ModalSideBarProps) => {
  const [selectedTab, setSelectedTab] = React.useState<RepoExportT>('url')

  React.useEffect(() => {
    if (onTabSelected) {
      onTabSelected(selectedTab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab])

  return (
    <div className="border-r-gray-400 border-r p-6">
      <h3 className="t-h3 mb-6">Choose method</h3>
      {sidebarTabs.map((item, index) => {
        const radioProps = {
          className: cx('mb-3 whitespace-nowrap w-full', {
            'text-gray-400 pointer-events-none': item.disabled
          }),
          isSelected: selectedTab === item.type,
          label: item.label,
          startIcon: item.startIcon,
          onChange: () => !item.disabled ? setSelectedTab(item.type) : null
        }

        return item.commingSoon
          ? <Tooltip key={index} content='Coming soon!' placement='right' offset={[0, 10]}>
            <RadioCard {...radioProps} />
          </Tooltip>
          : <RadioCard {...radioProps} />
      }
      )}
    </div>
  )
}

type SideBarTab = {
  startIcon: JSX.Element
  label: string
  type: RepoExportT
  disabled?: boolean
  commingSoon?: boolean
}

const sidebarTabs: SideBarTab[] = [
  {
    startIcon: <LinkIcon className='t-icon' />,
    label: 'Add from URL',
    type: 'url',
  },
  {
    startIcon: <TableIcon className='t-icon' />,
    label: 'Add from CSV',
    type: 'csv',
  },
  {
    startIcon: <GithubIcon className='t-icon' />,
    label: 'Add from GitHub org',
    type: 'gh-org',
    disabled: true,
    commingSoon: true
  },
  {
    startIcon: <GithubIcon className='t-icon' />,
    label: 'Add from GitHub user',
    type: 'gh-user',
    disabled: true,
    commingSoon: true
  },
]
