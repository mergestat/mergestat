import { Tooltip } from '@mergestat/blocks'
import { AutoImportIcon } from '@mergestat/icons'
import Link from 'next/link'
import React from 'react'
import { ProviderT } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { capitalize, getGitSourceIcon } from 'src/utils'
import { TEST_IDS } from 'src/utils/constants'

export type RepositoryNameProps = {
  id: string
  name: string
  provider: ProviderT
  createdAt: Date
  autoImportFrom?: string | null
}

export const RepositoryName: React.FC<RepositoryNameProps> = (props) => {
  return (
    <div className='flex items-center gap-4 my-3'>
      <RepoImage
        vendor={props.provider.vendor}
        vendorUrl={props.provider.url}
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
          <div className='flex items-center space-x-1.5 border-semantic-border pr-2'>
            <Tooltip
              content={`${capitalize(props.provider.vendor)} repository`}
              placement='bottom'
            >
              <a target='_blank' href={`${props.provider.url}/${props.name}`} rel='noopener noreferrer'>
                {getGitSourceIcon(props.provider.vendor, 't-icon-muted w-4')}
              </a>
            </Tooltip>
            <Link href={`/repos/git-sources/${props.provider.id}`}>
              <span className='cursor-pointer text-sm t-text-muted border-b border-gray-300 whitespace-nowrap'>
                {props.provider.name}
              </span>
            </Link>
          </div>
          {props.autoImportFrom && (
            <div className='border-l border-semantic-border px-2'>
              <Tooltip
                content={`Auto imported from ${props.autoImportFrom}`}
                placement='bottom'
              >
                <AutoImportIcon className='t-icon t-icon-muted w-4' />
              </Tooltip>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
