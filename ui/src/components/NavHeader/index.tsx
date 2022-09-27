import { Icon, Navbar, Toolbar } from '@mergestat/blocks'
import { BookIcon } from '@mergestat/icons'
import Link from 'next/link'
import React from 'react'

const NavHeader: React.FC = () => {
  return (
    <nav className="px-6 w-full bg-gray-700">
      <Toolbar className="h-14">
        <Toolbar.Left>
          <Toolbar.Item className='mr-3'>
            <Link href="/repos">
              <span className='cursor-pointer'>
                <Icon
                  as="/logo-inverse.svg"
                  width={132}
                  className="flex w-auto items-center"
                />
              </span>
            </Link>
          </Toolbar.Item>
          <Navbar.Divider />
          <Toolbar.Item>
            <div className="bg-gray-600 px-3 py-0.5 rounded-full text-gray-100 ml-3 text-sm font-medium">
              <a target='_blank' href='https://github.com/mergestat/fuse' rel='noopener noreferrer'>beta</a>
            </div>
          </Toolbar.Item>
        </Toolbar.Left>
        <Toolbar.Right className="space-x-4">
          <Toolbar.Item>
            <Navbar.Items>
              <Navbar.Item
                href="https://docs.mergestat.com/"
                target="_blank"
                icon={<BookIcon className="t-icon" />}
              />
            </Navbar.Items>
          </Toolbar.Item>
          <Navbar.Divider />
          <Toolbar.Item className="space-x-2">
            <p className="font-medium text-white ml-3">Username</p>
            <Link href="/login">
              <span className="text-white underline opacity-60 cursor-pointer">Log out</span>
            </Link>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>
    </nav>
  )
}

export default NavHeader
