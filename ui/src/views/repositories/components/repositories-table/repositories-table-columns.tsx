import { Dropdown, Menu, Spinner } from '@mergestat/blocks'
import {
  CircleCheckFilledIcon,
  CircleErrorFilledIcon,
  CogIcon,
  DotsHorizontalIcon,
  TrashIcon,
} from '@mergestat/icons'
import React from 'react'

type RepositoryNameProps = {
  name: string
  icons: Array<any>
  lastUpdate: string
}

export const RepositoryName: React.FC<RepositoryNameProps> = (props) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 border border-gray-300 rounded"></div>
      <div>
        <p className="cursor-pointer hover_text-blue-600">{props.name}</p>
        <div className="flex items-center">
          <p className="pr-2 text-sm text-gray-500">{props.lastUpdate}</p>
          {props.icons.map((icon: any, index: number) => {
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
  )
}
type RepositoryTagItemProps = {
  title: string
  checked: boolean
  index: number
}

export const RepositoryTagItem: React.FC<RepositoryTagItemProps> = (props) => {
  return (
    <div key={props.index} className="">
      {props.index < 2 && (
        <div className="border border-gray-300 rounded px-2 text-sm w-max bg-gray-100 cursor-pointer">
          {props.title}
        </div>
      )}
    </div>
  )
}

type RepositoryTagListProps = {
  tags: Array<{ title: string; checked: boolean }>
}

export const RepositoryTagList: React.FC<RepositoryTagListProps> = (props) => {
  return (
    <React.Fragment>
      {props.tags
        .filter((tag) => tag.checked)
        .map((tag, index) => (
          <RepositoryTagItem key={index} index={index} {...tag} />
        ))}
    </React.Fragment>
  )
}

type RepositoryErrorStatusProps = {
  count: number
  index: number
}

const RepositoryErrorStatus: React.FC<RepositoryErrorStatusProps> = (props) => {
  return (
    <div
      className="flex items-center gap-1 border border-gray-300 rounded px-1 text-sm w-max bg-gray-100 cursor-pointer"
    >
      <CircleErrorFilledIcon className="text-red-600 " />
      {props.count}
    </div>
  )
}

type RepositoryLoadingStatusProps = {
  count: number
  index: number
}

const RepositoryLoadingStatus: React.FC<RepositoryLoadingStatusProps> = (
  props
) => {
  return (
    <div
      key={`key3_${props.index}`}
      className="flex items-center gap-1 border border-gray-300 rounded px-1 text-sm w-max bg-gray-100 cursor-pointer"
    >
      <Spinner size="sm" />
      {props.count}
    </div>
  )
}

type RepositoryCheckStatusProps = {
  count: number
  index: number
}

const RepositoryCheckStatus: React.FC<RepositoryCheckStatusProps> = (props) => {
  return (
    <div
      key={`key4_${props.index}`}
      className="flex items-center gap-1 border border-gray-300 rounded px-1 text-sm w-max bg-gray-100 cursor-pointer"
    >
      <CircleCheckFilledIcon className="text-green-600" />
      {props.count}
    </div>
  )
}

type RepositoryStatusProps = {
  status: Array<{ count: number; icon: 'loading' | 'error' | 'check' }>
}

export const RepositoryStatus: React.FC<RepositoryStatusProps> = (props) => {
  return (
    <div className="flex items-center justify-end gap-2">
      {props.status.map((item, index) => {
        switch (item.icon) {
          case 'check':
            return <RepositoryCheckStatus count={item.count} index={index} key={index} />
          case 'loading':
            return <RepositoryLoadingStatus count={item.count} index={index} key={index}/>
          case 'error':
            return <RepositoryErrorStatus count={item.count} index={index} key={index}/>
        }
      })}
    </div>
  )
}

type RepositoryAdditionalActionsProps = {}

export const RepositoryAdditionalActions: React.FC<RepositoryAdditionalActionsProps> =
  (prpos) => {
    return (
      <Dropdown
        trigger={<DotsHorizontalIcon className="cursor-pointer" />}
        overlay={() => (
          <Menu className={`absolute z-10 whitespace-nowrap right-0`}>
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
      />
    )
  }
