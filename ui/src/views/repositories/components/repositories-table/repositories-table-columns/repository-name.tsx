import { Tooltip } from '@mergestat/blocks'
import { AutoImportIcon, GithubIcon, RepositoryIcon } from '@mergestat/icons'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import type { RepoType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { capitalize, getRelativeTime } from 'src/utils'
import { GITHUB_URL, TEST_IDS } from 'src/utils/constants'

export type RepositoryNameProps = {
  id: string
  name: string
  type: RepoType
  createdAt: Date
  autoImportFrom?: string
}

export const RepositoryName: React.FC<RepositoryNameProps> = (props) => {
  const repoTypeIcon = () => {
    switch (props.type) {
      case 'gitlab':
      case 'bitbucket':
      case 'other':
        return <RepositoryIcon className='t-icon t-icon-muted w-4' />
      default:
        return (
          <a target='_blank' href={GITHUB_URL + props.name} rel='noopener noreferrer'>
            <GithubIcon className='t-icon t-icon-muted w-4' />
          </a>
        )
    }
  }

  return (
    <div className='flex items-center gap-4 my-3'>
      <RepoImage
        repoType={props.type}
        orgName={props.name.split('/')[0]}
        size='10'
      />
      <div>
        <Link href={`/repos/${props.id}`}>
          <h4 data-testid={TEST_IDS.repoNameTable} className='font-medium mb-0.5 t-text-default cursor-pointer hover_text-blue-600'>
            {props.name}
          </h4>
        </Link>
        <div className='flex items-center'>
          <span className='pr-2 text-sm t-text-muted'>
            <Tooltip
              content={`Added ${format(props.createdAt, 'PPp')}`}
              placement='bottom'
            >
              {getRelativeTime(props.createdAt)}
            </Tooltip>
          </span>
          <div className='border-l border-semantic-border px-2'>
            <Tooltip
              content={`${capitalize(props.type)} repository`}
              placement='bottom'
            >
              {repoTypeIcon()}
            </Tooltip>
          </div>
          {props.autoImportFrom && (
            <div className='border-l border-semantic-border px-2'>
              <Tooltip
                content={`Auto imported from ${props.autoImportFrom}`}
                placement='bottom'
              >
                <Link href='/settings/repo-auto-imports' passHref>
                  <a href='/settings/repo-auto-imports'>
                    <AutoImportIcon className='t-icon t-icon-muted w-4 cursor-pointer' />
                  </a>
                </Link>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
