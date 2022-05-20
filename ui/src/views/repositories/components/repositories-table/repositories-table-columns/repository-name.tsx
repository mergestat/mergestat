import { Tooltip } from '@mergestat/blocks'
import {
  AutoImportIcon,
  GithubIcon,
  RepositoryIcon,
} from '@mergestat/icons'
import Link from 'next/link'
import React from 'react'
import type { RepoType } from '../@types'

export type RepositoryNameProps = {
  name: string
  type: RepoType
  lastUpdate: string
  automaticImport?: boolean
}



export const RepositoryName: React.FC<RepositoryNameProps> = (props) => {
  const repoTypeIcon = () => {
    switch (props.type) {
      case 'gitlab':
      case 'bitbucket':
      case 'other':
        return <RepositoryIcon className='t-icon text-samantic-mutedIcon w-4' />
      default:
        return <GithubIcon className='t-icon text-samantic-mutedIcon w-4' />
    }
  }

  return (
    <div className="flex items-center gap-4 my-3">
      <div className="w-10 h-10 border flex border-samantic-border rounded flex-shrink-0">
        <RepositoryIcon className="t-icon text-samantic-icon m-auto"/>
      </div>
      <div>
        <Link href={`/repos/${props.name.replace('/', '-')}`}>
          <a className="cursor-pointer text-samantic-text hover_text-blue-600">
            {props.name}
          </a>
        </Link>
        <div className="flex items-center">
          <span className="pr-2 text-sm text-samantic-mutedText">
            {props.lastUpdate}
          </span>
          <div className="border-l border-samantic-border px-2">
              {/* <div className='text-samantic-mutedIcon'> */}
            {/* {icon} */}
            {repoTypeIcon()}
          </div>
          {props.automaticImport && (
            <div className="border-l border-samantic-border px-2">
              <Tooltip content="Auto imported from user-name" placement="bottom">
                <AutoImportIcon className='t-icon text-samantic-mutedIcon w-4' />
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
