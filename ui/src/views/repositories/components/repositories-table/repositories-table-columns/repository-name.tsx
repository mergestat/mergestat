import { Tooltip } from '@mergestat/blocks'
import { AutoImportIcon, GithubIcon, RepositoryIcon } from '@mergestat/icons'
import Link from 'next/link'
import React from 'react'
import type { RepoType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'

export type RepositoryNameProps = {
  name: string
  type: RepoType
  lastUpdate: string
  automaticImport?: boolean
  urlIcon: string
}

export const RepositoryName: React.FC<RepositoryNameProps> = (props) => {
  const repoTypeIcon = () => {
    switch (props.type) {
      case 'gitlab':
      case 'bitbucket':
      case 'other':
        return <RepositoryIcon className="t-icon text-semantic-mutedIcon w-4" />
      default:
        return <GithubIcon className="t-icon text-semantic-mutedIcon w-4" />
    }
  }

  return (
    <div className="flex items-center gap-4 my-3 ml-6">
      <RepoImage repoType={props.type} urlIcon={props.urlIcon} size="10" />
      <div>
        <Link href={`/repos/${props.name.replace('/', '-')}`}>
          <h4 className="font-medium mb-0.5 text-semantic-text cursor-pointer hover_text-blue-600">
            {props.name}
          </h4>
        </Link>
        <div className="flex items-center">
          <span className="pr-2 text-sm text-semantic-mutedText">
            {props.lastUpdate}
          </span>
          <div className="border-l border-semantic-border px-2">
            {repoTypeIcon()}
          </div>
          {props.automaticImport && (
            <div className="border-l border-semantic-border px-2">
              <Tooltip
                content="Auto imported from user-name"
                placement="bottom"
              >
                <AutoImportIcon className="t-icon text-semantic-mutedIcon w-4" />
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
