import { Fragment, useState, ReactNode } from 'react'
import {
  Checkbox,
  Filter,
  Input,
  Menu,
  MultiSelect,
  Spinner,
  Table,
  Tooltip,
} from '@mergestat/blocks'
import {
  AutoImportIcon,
  CaretDownIcon,
  CaretUpIcon,
  CircleCheckFilledIcon,
  CircleErrorFilledIcon,
  CogIcon,
  DotsHorizontalIcon,
  GithubIcon,
  SearchIcon,
  TrashIcon,
} from '@mergestat/icons'

const AddedRepoTable: React.FC = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState('')

  const reposColumns: Array<Record<string, any>> = [
    {
      title: <Checkbox />,
      className: 'w-4',
      dataIndex: 'checkbox',
      key: 'checkbox',
    },
    {
      title: (
        <p className="whiteSpace-nowrap flex items-center gap-4">
          Repository{' '}
          <span>
            <CaretUpIcon />
            <CaretDownIcon className="-mt-3" />
          </span>
        </p>
      ),
      className: '',
      dataIndex: 'repository',
      key: 'repository',
    },
    {
      title: 'Tags',
      className: '',
      dataIndex: 'tags',
      key: 'tags',
    },
    {
      title: (
        <p className="flex items-center gap-4">
          Last sync <CaretDownIcon />
        </p>
      ),
      className: '',
      dataIndex: 'last',
      key: 'last',
    },
    {
      title: '',
      className: '',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '',
      className: 'w-4',
      dataIndex: 'option',
      key: 'option',
    },
  ]

  const reposData: {
    repositoryName: string
    lastUpdate: string
    icons: ReactNode[]
    tags: { title: string; checked: boolean }[]
    status: { icon: string; count: number }[]
    lastSync: string
  }[] = [
    {
      repositoryName: 'marko-js/marko',
      lastUpdate: 'Last updated today',
      icons: [<GithubIcon />],
      tags: [
        { title: 'javascript', checked: true },
        { title: 'nodejs', checked: true },
        { title: 'virtual-dom', checked: true },
        { title: 'virtual-dom', checked: false },
        { title: 'nodejs', checked: false },
        { title: 'virtual-dom', checked: false },
      ],
      status: [
        { icon: 'error', count: 2 },
        { icon: 'loading', count: 1 },
        { icon: 'check', count: 1 },
      ],
      lastSync: '3 minutes ago',
    },
    {
      repositoryName: 'marko-js/marko',
      lastUpdate: 'Last updated today',
      icons: [
        <GithubIcon />,
        <Tooltip content="Auto imported from user-name" placement="bottom">
          <AutoImportIcon />
        </Tooltip>,
      ],
      tags: [
        { title: 'javascript', checked: true },
        { title: 'nodejs', checked: true },
        { title: 'virtual-dom', checked: false },
        { title: 'virtual-dom', checked: false },
        { title: 'nodejs', checked: false },
        { title: 'virtual-dom', checked: false },
      ],
      status: [
        { icon: 'error', count: 1 },
        { icon: 'loading', count: 2 },
        { icon: 'check', count: 1 },
      ],
      lastSync: '3 minutes ago',
    },
    {
      repositoryName: 'marko-js/marko',
      lastUpdate: 'Last updated today',
      icons: [
        <GithubIcon />,
        <Tooltip content="Auto imported from user-name" placement="bottom">
          <AutoImportIcon />
        </Tooltip>,
      ],
      tags: [
        { title: 'javascript', checked: false },
        { title: 'nodejs', checked: false },
        { title: 'virtual-dom', checked: true },
        { title: 'virtual-dom', checked: false },
        { title: 'nodejs', checked: false },
        { title: 'virtual-dom', checked: false },
      ],
      status: [
        { icon: 'error', count: 1 },
        { icon: 'check', count: 5 },
      ],
      lastSync: '3 minutes ago',
    },
    {
      repositoryName: 'marko-js/marko',
      lastUpdate: 'Last updated today',
      icons: [
        <GithubIcon />,
        <Tooltip content="Auto imported from user-name" placement="bottom">
          <AutoImportIcon />
        </Tooltip>,
      ],
      tags: [
        { title: 'javascript', checked: true },
        { title: 'nodejs', checked: true },
        { title: 'virtual-dom', checked: true },
        { title: 'virtual-dom', checked: false },
        { title: 'nodejs', checked: false },
        { title: 'virtual-dom', checked: false },
      ],
      status: [
        { icon: 'loading', count: 1 },
        { icon: 'check', count: 3 },
      ],
      lastSync: '3 minutes ago',
    },
  ]

  let reposDataSource: {}[] = []
  reposData.map((item, index) => {
    reposDataSource.push({
      checkbox: <Checkbox />,
      repository: (
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-gray-300 rounded"></div>
          <div>
            <p className="cursor-pointer hover_text-blue-600">
              {item.repositoryName}
            </p>
            <div className="flex items-center">
              <p className="pr-2 text-sm text-gray-500">{item.lastUpdate}</p>
              {item.icons.map((icon: any, index: number) => {
                return (
                  <p
                    className="border-l border-gray-300 px-2"
                    key={`key1_${index}`}
                  >
                    {icon}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      ),
      tags: (
        <div className="flex items-center gap-2 relative">
          {item.tags
            .filter((tag: { title: string; checked: boolean }) => tag.checked)
            .map((tag: { title: string; checked: boolean }, ind: number) => {
              return (
                <div key={`key8_${ind}`} className="">
                  {ind < 2 && (
                    <div className="border border-gray-300 rounded px-2 text-sm w-max bg-gray-100 cursor-pointer">
                      {tag.title}
                    </div>
                  )}
                  {ind === 2 && (
                    <div className="flex items-center gap-2 border border-gray-300 rounded px-2 text-sm w-max bg-gray-100 cursor-pointer">
                      +{' '}
                      {item.tags.filter(
                        (tag: { title: string; checked: boolean }) =>
                          tag.checked
                      ).length - 2}{' '}
                      <DotsHorizontalIcon
                        onClick={() =>
                          openMenuIndex !== `multiSelect_${index}`
                            ? setOpenMenuIndex(`multiSelect_${index}`)
                            : setOpenMenuIndex('')
                        }
                      />
                      <div className="absolute bg-white py-2 w-100  top-full left-1/3 z-10">
                        {openMenuIndex === `multiSelect_${index}` && (
                          <MultiSelect
                            setStateToProps={item.tags}
                            getState={(e) => {
                              item.tags = e
                              console.log(item.tags)
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      ),
      last: item.lastSync,
      status: (
        <div className="flex items-center justify-end gap-2">
          {item.status.map((i: any, index: number) => {
            if (i.icon === 'error') {
              return (
                <div
                  key={`key2_${index}`}
                  className="flex items-center gap-1 border border-gray-300 rounded px-1 text-sm w-max bg-gray-100 cursor-pointer"
                >
                  <CircleErrorFilledIcon className="text-red-600 " />
                  {i.count}
                </div>
              )
            }
            if (i.icon === 'loading') {
              return (
                <div
                  key={`key3_${index}`}
                  className="flex items-center gap-1 border border-gray-300 rounded px-1 text-sm w-max bg-gray-100 cursor-pointer"
                >
                  <Spinner size="sm" />
                  {i.count}
                </div>
              )
            }
            if (i.icon === 'check') {
              return (
                <div
                  key={`key4_${index}`}
                  className="flex items-center gap-1 border border-gray-300 rounded px-1 text-sm w-max bg-gray-100 cursor-pointer"
                >
                  <CircleCheckFilledIcon className="text-green-600" />
                  {i.count}
                </div>
              )
            }
          })}
        </div>
      ),
      option: (
        <div className="relative">
          <DotsHorizontalIcon
            className="cursor-pointer"
            onClick={() => setOpenMenuIndex(`menu_${index}`)}
          />
          {openMenuIndex === `menu_${index}` && (
            <Menu
              className={`absolute z-1 whitespace-nowrap right-0  ${
                index === reposData.length - 1 && 'bottom-0 '
              }`}
            >
              <Menu.Item
                text="Repo settings"
                withIcon
                icon={<CogIcon className="mr-2" />}
              />
              <Menu.Divider />
              <Menu.Item
                text="Remove Repo"
                withIcon
                icon={<TrashIcon className="mr-2" />}
              />
            </Menu>
          )}
        </div>
      ),
    })
  })

  return (
    <Fragment>
      <div className="flex h-14 bg-white items-center justify-between px-8">
        <div className="flex gap-2">
          <Filter>Tags</Filter>
          <Filter>Filter label</Filter>
          <Filter>Filter label</Filter>
        </div>
        <label className="">
          <SearchIcon className="t-icon absolute left-2 text-gray-400" />
          <Input placeholder="Search..." className="pl-8" />
        </label>
      </div>
      <div className="m-8">
        <Table
          className="overflow-visible"
          columns={reposColumns}
          dataSource={reposDataSource}
        />
      </div>
    </Fragment>
  )
}

export default AddedRepoTable
