import React from 'react'
import { Spinner, Tabs } from '@mergestat/blocks'
import {
  CaretUpIcon,
  CircleCheckFilledIcon,
  CircleErrorFilledIcon,
  CircleInformationFilledIcon,
  ExternalLinkIcon,
} from '@mergestat/icons'
import { useRouter } from 'next/router'
import { RepSyncStateT } from '../../@types'
import {
  PageHeader,
  RepoDataLogs,
  SyncSettings,
} from './components'

type RepositoryDataTypeViewProps = {
  repoName: string
  DataType: string
  syncState: RepSyncStateT
}
export const RepositoryDataTypeView: React.FC<RepositoryDataTypeViewProps> = (
  props
) => {
  const { repoName, DataType, syncState } = props
  const router = useRouter()

  return (
    <main className="w-full bg-gray-50">
      <PageHeader
        repo={{
          startIcon: (
            <div className="t-black-white">
              <CaretUpIcon className="t-icon" />
            </div>
          ),
          text: repoName,
          endIcon: <ExternalLinkIcon className="t-icon t-gray" />,
          onClick: router.back,
        }}
        datatype={{
          startIcon: getRepositorySyncIcon(syncState),
          text: DataType,
        }}
      />
      <Tabs.Group>
        <Tabs.List className="bg-white w-full flex justify-between px-8 items-center border-b border-gray-200">
          <Tabs.Item className="">
            Logs
          </Tabs.Item>
          <Tabs.Item className="">
            Sync Settings
          </Tabs.Item>
        </Tabs.List>
        <Tabs.Panels className="py-4 px-6">
          <Tabs.Panel>
            <RepoDataLogs dataTypeName={DataType} />
          </Tabs.Panel>
          <Tabs.Panel>
            <SyncSettings />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Group>
    </main>
  )
}
export const getRepositorySyncIcon = (syncStatus: RepSyncStateT, className?:string) => {
  switch (syncStatus) {
    case 'disabled':
      return <CircleInformationFilledIcon className={`text-samantic-mutedIcon ${className}` }  />
    case 'success':
      return <CircleCheckFilledIcon className={`text-samantic-success ${className}`}  />
    case 'loading':
      return <Spinner size="sm" className={className} />
    case 'error':
      return <CircleErrorFilledIcon className={`text-samantic-danger ${className}`}  />
    default:
      return <></>
  }
}
