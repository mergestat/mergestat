import { RadioCard } from '@mergestat/blocks'
import { GithubIcon, LinkIcon, TableIcon } from '@mergestat/icons'
import React from 'react'

type ModalSideBarProps = {
  onTabSelected: (tab: 'url' | 'gh-org' | 'gh-user' | 'csv') => void
}

export const ModalSideBar: React.FC<ModalSideBarProps> = (props) => {
  const [selectedTab, setSelectedTab] = React.useState<
    'url' | 'gh-org' | 'gh-user' | 'csv'
  >('url')

  React.useEffect(() => {
    if (props.onTabSelected) {
      props.onTabSelected(selectedTab)
    }
  }, [selectedTab])

  return (
    <div className="border-r-gray-400 border-r p-6">
      <p className="text-lg font-semibold mb-8">Choose method</p>
      {sidebarTabs.map((item, index) => (
        <RadioCard
          key={index}
          className="mb-2"
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
  type: 'url' | 'gh-org' | 'gh-user' | 'csv'
}

const sidebarTabs: SideBarTab[] = [
  {
    startIcon: <LinkIcon />,
    label: 'Add from URL',
    type: 'url',
  },
  {
    startIcon: <GithubIcon />,
    label: 'Add from GitHub org',
    type: 'gh-org',
  },
  {
    startIcon: <GithubIcon />,
    label: 'Add from GitHub user',
    type: 'gh-user',
  },
  {
    startIcon: <TableIcon />,
    label: 'Add Add from CSV',
    type: 'csv',
  },
]
