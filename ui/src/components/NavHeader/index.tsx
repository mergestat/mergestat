import { HelpText, Icon, Navbar, Toolbar } from '@mergestat/blocks'
import { BookIcon, CaretDownIcon } from '@mergestat/icons'
import Image from 'next/image'
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
            <HelpText className="text-white ml-3">
              <a target='_blank' href='https://github.com/mergestat/fuse' rel='noopener noreferrer'>beta</a>
            </HelpText>
          </Toolbar.Item>
        </Toolbar.Left>
        <Toolbar.Right className="space-x-6">
          <Toolbar.Item>
            <Navbar.Items>
              <Navbar.Item
                href="https://docs.mergestat.com/"
                target="_blank"
                icon={<BookIcon className="t-icon" />}
              />
              <Navbar.Divider />

              <Navbar.Item
                image={
                  <Image
                    className="inline-block h-8 w-8 rounded-full"
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    width={30}
                    height={30}
                    alt="User Avatar"
                  />
                }
                icon={<CaretDownIcon className="t-icon ml-1" />}
              />
            </Navbar.Items>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>
    </nav>
  )
}

export default NavHeader
