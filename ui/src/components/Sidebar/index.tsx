import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Sidebar } from "@mergestat/blocks"
import { CogIcon, DatabaseIcon, RepositoryIcon } from "@mergestat/icons"

const SidebarView: React.FC = () => {
  const { pathname, push } = useRouter()

  const isSidebarActive = (path: string) => !!pathname.match(path)?.length

  return (
    <Sidebar>
      <Link href={`#`} passHref>
        <Sidebar.Item
          label="Repos"
          active={isSidebarActive("repos")}
          icon={<RepositoryIcon />}
        />
      </Link>
      <Link href={`#`} passHref>
        <Sidebar.Item
          label="Connect"
          active={isSidebarActive("connect")}
          icon={<DatabaseIcon />}
        />
      </Link>
      <Sidebar.Divider />
      <Link href={`#`} passHref>
        <Sidebar.Item
          label="Settings"
          active={isSidebarActive("settings")}
          icon={<CogIcon />}
        />
      </Link>
    </Sidebar>
  )
}

export default SidebarView
