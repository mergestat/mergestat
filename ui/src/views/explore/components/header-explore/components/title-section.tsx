import { useQuery } from '@apollo/client'
import { Alert, Button, Toolbar } from '@mergestat/blocks'
import { CogIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { GetExploreMetadataQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_EXPLORE_METADATA } from 'src/api-logic/graphql/queries/explore'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'

const TitleSection: React.FC = () => {
  const router = useRouter()

  const { data } = useQuery<GetExploreMetadataQuery>(GET_EXPLORE_METADATA, {
    fetchPolicy: 'no-cache',
  })

  return (
    <Toolbar className='h-full'>
      <Toolbar.Left>
        <h2 className='t-h2 mb-0'>Explore</h2>
      </Toolbar.Left>
      <Toolbar.Right>
        <Toolbar.Item>
          <Alert isInline
            type="info"
            className='text-gray-400'
            tooltip={<div className='flex font-thin leading-4 p-2'>
              All {data?.metadata?.totalCount} repos indexed as of {<RelativeTimeField date={data?.metadata?.nodes[0]?._mergestatSyncedAt} styles={'ml-1 whitespace-nowrap'} />}
            </div>}
          >
            {`${data?.metadata?.totalCount}/${data?.repos?.totalCount} repos indexed`}
          </Alert>
        </Toolbar.Item>
        <Toolbar.Item>
          <Button className='whitespace-nowrap'
            skin="secondary"
            label='Manage'
            startIcon={<CogIcon className="t-icon" />}
            onClick={() => router.push(`/repos/repo-syncs/${data?.exploreContainer?.id}`)}
          />
        </Toolbar.Item>
      </Toolbar.Right>
    </Toolbar>
  )
}

export default TitleSection
