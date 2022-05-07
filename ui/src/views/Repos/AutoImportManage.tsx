import React from 'react'
import { Button, Table } from '@mergestat/blocks'
import {
  AutoImportIcon,
  CircleCheckFilledIcon,
  GithubIcon,
  TrashIcon,
  XIcon,
} from '@mergestat/icons'

type ColumnsT = {
  title?: string | undefined
  dataIndex?: any
  className?: string | undefined
  key?: any
  render?: any
}

type AutoImportManagePropsT = {
  onClose: () => void
  onSyncModalOpen: () => void
}
const AutoImportManage = ({
  onClose,
  onSyncModalOpen,
}: AutoImportManagePropsT) => {
  const columns: ColumnsT[] = [
    {
      title: '',
      className: 'w-4',
      dataIndex: 'successIcon',
      key: 'successIcon',
    },
    {
      title: 'Source',
      className: 'col',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'Import type',
      className: 'col',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Last sync',
      className: 'text-gray-300',
      dataIndex: 'last',
      key: 'last',
    },
    {
      title: '',
      className: 'w-4',
      dataIndex: 'delIcon',
      key: 'delIcon',
    },
  ]

  const dataSource: {
    successIcon: string | React.ReactElement
    source: string
    type: React.ReactElement
    last: string
    delIcon: React.ReactElement
  }[] = [
    {
      successIcon: <CircleCheckFilledIcon className="text-green-600" />,
      source: 'user-name',
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="mr-2" />
          GitHub User
        </p>
      ),
      last: '2 hours ago',
      delIcon: <TrashIcon />,
    },
    {
      successIcon: <CircleCheckFilledIcon className="text-green-600" />,
      source: 'organization-name',
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="mr-2" />
          GitHub Organization
        </p>
      ),
      last: '2 hours ago',
      delIcon: <TrashIcon />,
    },
    {
      successIcon: <CircleCheckFilledIcon className="text-green-600" />,
      source: 'organization-name',
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="mr-2" />
          GitHub Organization
        </p>
      ),
      last: '2 hours ago',
      delIcon: <TrashIcon />,
    },
  ]

  return (
    <div className="absolute top-0 left-0 bg-gray-100 w-full h-full z-50">
      <div className="h-16 border-b bg-white border-gray-300 flex justify-between items-center p-5">
        <div className="flex items-center">
          <Button
            skin="borderless-muted"
            startIcon={<XIcon className=" mr-4" />}
            onClick={onClose}
          />

          <p className="text-xl border-l border-gray-300 pl-4">
            Manage auto imports
          </p>
        </div>
        <Button
          skin="secondary"
          startIcon={<AutoImportIcon className="mr-2" />}
          onClick={onSyncModalOpen}
        >
          Create Auto import
        </Button>
      </div>
      <div className="m-8">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  )
}

export default AutoImportManage
