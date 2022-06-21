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
export const ManageAutoImportReposModal = ({
  onClose,
  onSyncModalOpen,
}: AutoImportManagePropsT) => {
  const columns: ColumnsT[] = [
    {
      className: 'w-4 pr-0',
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
      className: 'text-semantic-mutedText ',
      dataIndex: 'last',
      key: 'last',
    },
    {
      title: '',
      className: 'w-4 cursor-pointer',
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
      successIcon: <CircleCheckFilledIcon className="t-icon text-semantic-success" />,
      source: 'user-name',
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="t-icon t-icon-small t-icon-muted  mr-2" />
          GitHub User
        </p>
      ),
      last: '2 hours ago',
      delIcon: <Button
      isIconOnly
      size="small"
      skin="borderless-muted"
      startIcon={<TrashIcon />}
      />

    },
    {
      successIcon: <CircleCheckFilledIcon className="t-icon text-semantic-success" />,
      source: 'organization-name',
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="t-icon t-icon-small t-icon-muted mr-2" />
          GitHub Organization
        </p>
      ),
      last: '2 hours ago',
      delIcon: <Button
      isIconOnly
      size="small"
      skin="borderless-muted"
      startIcon={<TrashIcon />}
      />
    },
    {
      successIcon: <CircleCheckFilledIcon className="t-icon text-semantic-success" />,
      source: 'organization-name',
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="t-icon t-icon-small t-icon-muted mr-2" />
          GitHub Organization
        </p>
      ),
      last: '2 hours ago',
      delIcon: <Button
      isIconOnly
      size="small"
      skin="borderless-muted"
      startIcon={<TrashIcon />}
      />
    },
  ]

  return (
    <div className="absolute top-0 left-0 bg-gray-50 w-full h-full z-40">
      <div className="h-16 border-b bg-white border-semantic-border flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <Button
            skin="borderless-muted"
            startIcon={<XIcon className="t-icon" />}
            onClick={onClose}
          />

          <h2 className="t-toolbar-title border-l border-semantic-border ml-2 pl-5">
            Manage auto imports
          </h2>
        </div>
        <Button
          skin="secondary"
          startIcon={<AutoImportIcon className="t-icon mr-2" />}
          onClick={onSyncModalOpen}
        >
          Create Auto import
        </Button>
      </div>
      <div className="m-8 shadow-sm">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  )
}
