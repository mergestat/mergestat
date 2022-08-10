import { RadioCard } from '@mergestat/blocks'
import { GithubIcon, LinkIcon, TableIcon } from '@mergestat/icons'
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
      {sidebarTabs.map((item, index) => (
        <RadioCard
          key={index}
          className="mb-3 whitespace-nowrap w-full"
          isSelected={selectedTab === item.type}
          label={item.label}
          startIcon={item.startIcon}
          onChange={() => setSelectedTab(item.type)}
        />
      ))}
    </div>
  )
}

type SideBarTab = {
  startIcon: JSX.Element
  label: string
  type: RepoExportT
}

const sidebarTabs: SideBarTab[] = [
  {
    startIcon: <LinkIcon className='t-icon' />,
    label: 'Add from URL',
    type: 'url',
  },
  {
    startIcon: <GithubIcon className='t-icon' />,
    label: 'Add from GitHub org',
    type: 'gh-org',
  },
  {
    startIcon: <GithubIcon className='t-icon' />,
    label: 'Add from GitHub user',
    type: 'gh-user',
  },
  {
    startIcon: <TableIcon className='t-icon' />,
    label: 'Add Add from CSV',
    type: 'csv',
  },
]
