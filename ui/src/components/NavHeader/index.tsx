import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HelpText, Icon, Navbar, Toolbar } from '@mergestat/blocks'
import { BookIcon, CaretDownIcon } from '@mergestat/icons'

const NavHeader: React.FC = () => {
  return (
    <nav className="bg-gray-700 px-6 w-full">
      <Toolbar className="h-14">
        <Toolbar.Left>
          <Toolbar.Item className="mr-3">
            <Link href={`#`} passHref>
              <a>
                <Icon
                  as="/logo-inverse.svg"
                  width={132}
                  className="flex w-auto items-center"
                />
              </a>
            </Link>
          </Toolbar.Item>
          <Toolbar.Item>
            <Navbar.Divider />
            <HelpText className="ml-3 text-white ">v1.0.0</HelpText>
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
