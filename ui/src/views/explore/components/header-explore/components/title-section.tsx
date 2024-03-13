import { MutationFunctionOptions, useQuery } from '@apollo/client'
import { Alert, Button, EditableText, SplitButton } from '@mergestat/blocks'
import { CogIcon, SearchIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import { ExploreUiQuery, GetExploreMetadataQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_EXPLORE_METADATA } from 'src/api-logic/graphql/queries/explore'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { useExploreContext } from 'src/state/contexts/repo-explore.context'
import useSavedExplore from 'src/views/hooks/explore/useSavedExplore'

type Props = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
}>

const TitleSection: React.FC<Props> = ({ explore }: Props) => {
  const router = useRouter()

  const { data } = useQuery<GetExploreMetadataQuery>(GET_EXPLORE_METADATA, {
    fetchPolicy: 'no-cache',
  })

  const [{ savedExploreId }] = useExploreContext()
  const {
    loadingExplore,
    titleError,
    title,
    desc,
    setTitle,
    setDesc,
    addSavedExploreHandler,
    updateSavedExploreHandler
  } = useSavedExplore(explore)

  return (
    <div className='flex h-full'>
      <EditableText
        className='flex-grow mr-5'
        icon={<SearchIcon className="t-icon" />}
        title={{
          placeholder: `${loadingExplore ? 'Loading...' : 'Untitled Saved Exploration'}`,
          value: title,
          required: titleError,
          onChange: (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
        }}
        desc={{
          placeholder: `${loadingExplore ? 'Loading...' : 'Enter a short description for this exploration (optional)'}`,
          value: desc,
          onChange: (e: ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)
        }}
      />

      <div className='flex items-center gap-x-4'>
        <Alert isInline
          type="info"
          className='text-gray-400'
          tooltip={<div className='flex font-thin leading-4 p-2'>
            All {data?.metadata?.totalCount} repos indexed as of {<RelativeTimeField date={data?.metadata?.nodes[0]?._mergestatSyncedAt} styles={'ml-1 whitespace-nowrap'} />}
          </div>}
        >
          {`${data?.metadata?.totalCount}/${data?.repos?.totalCount} repos indexed`}
        </Alert>

        {savedExploreId
          ? <SplitButton
            text="Save"
            items={[{ text: 'Save as new...' }]}
            onButtonClick={updateSavedExploreHandler}
            onItemClick={addSavedExploreHandler}
          />
          : <Button
            className='whitespace-nowrap justify-center'
            label='Save As New'
            skin="secondary"
            onClick={addSavedExploreHandler}
          />}

        <Button className='whitespace-nowrap'
          skin="secondary"
          label='Manage'
          startIcon={<CogIcon className="t-icon" />}
          onClick={() => router.push(`/repos/repo-syncs/${data?.exploreContainer?.id}`)}
        />
      </div>
    </div>
  )
}

export default TitleSection
