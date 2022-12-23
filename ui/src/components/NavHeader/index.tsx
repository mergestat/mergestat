import { Avatar, BreadcrumbNav, Dropdown, Menu, Toolbar } from '@mergestat/blocks'
import { BookIcon, CaretDownIcon, CogIcon, LogoutIcon, UserIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { logout } from 'src/api-logic/axios/api'
import { CurrentUserQuery } from 'src/api-logic/graphql/generated/schema'
import { useGlobalContext } from 'src/state/contexts'

const NavHeader: React.FC<CurrentUserQuery> = ({ currentMergeStatUser }: CurrentUserQuery) => {
  const router = useRouter()
  const [{ crumbs }] = useGlobalContext()

  const handleLogout = async () => {
    const loggedout = await logout()
    loggedout && router.push('/login')
  }

  return (
    <Toolbar className="h-12 px-8 border-b t-border-default bg-white">
      <Toolbar.Left>
        <BreadcrumbNav data={crumbs} size="sm" />
      </Toolbar.Left>
      <Toolbar.Right className="space-x-4">
        <Toolbar.Item>
          <div className="flex items-center divide-x t-border-default">
            <a
              className="t-button t-button-borderless-muted t-button-icon mx-3"
              href="https://docs.mergestat.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BookIcon className="t-icon" />
            </a>
            <div className="h-auto px-3">
              <Dropdown
                alignEnd={false}
                overlay={() => (
                  <Menu data-popper-placement="bottom-end">
                    <Menu.Item text="User settings" onClick={() => router.push('/settings/user-settings')} icon={<CogIcon className="t-icon" />} />
                    <Menu.Item text="Log out" onClick={handleLogout} icon={<LogoutIcon className="t-icon" />} />
                  </Menu>
                )}
                trigger={
                  <button className="flex items-center border-0 bg-transparent outline-none space-x-2">
                    <Avatar size="sm" variant="primary" icon={<UserIcon className="t-icon" />} />
                    <span>{currentMergeStatUser}</span>
                    <CaretDownIcon className="t-icon t-icon-sm t-icon-muted" />
                  </button>
                }
              />
            </div>
          </div>
        </Toolbar.Item>
      </Toolbar.Right>
    </Toolbar>
  )
}

export default NavHeader
