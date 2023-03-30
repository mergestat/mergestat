import { useQuery } from '@apollo/client'
import { Panel } from '@mergestat/blocks'
import cx from 'classnames'
import { useEffect, useState } from 'react'
import { GetGitSourcesListQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_GIT_SOURCES_LIST } from 'src/api-logic/graphql/queries/get-git-sources'
import Loading from 'src/components/Loading'
import { useContainerSyncDetailContext } from 'src/state/contexts/container-sync-detail.context'
import { FilterHeader } from 'src/views/shared/filter-header'
import { EnableAllReposModal } from '../modals/enable-all-repos'
import { GitSourcesTable } from './git-sources-table'

const GitSourcesContainer: React.FC = () => {
  const [{ showEnableAllReposModal }] = useContainerSyncDetailContext()

  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(true)
  const [search, setSearch] = useState('')

  const { loading, data, refetch } = useQuery<GetGitSourcesListQuery>(GET_GIT_SOURCES_LIST, {
    variables: { search },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if (!pageLoaded && data?.all) {
      setRecords(data?.all?.totalCount > 0)
      setPageLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    refetch({ search })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, search])

  return (
    <>
      <Panel className='rounded-md shadow-sm m-auto mt-8'>
        <Panel.Header>
          <div className='w-full flex justify-between'>
            <h4 className='t-h4 mb-0'>Git Sources</h4>
          </div>
        </Panel.Header>

        <Panel.Body className={cx(records ? 'bg-gray-50' : 'bg-white', { 'p-0': records })}>
          {records && <FilterHeader setSearch={setSearch} />}

          {loading
            ? <Loading />
            : records
              ? <GitSourcesTable gitSources={data?.providers ? data?.providers.nodes : []} />
              : <div className='flex justify-center bg-white p-6'>
                <span className='text-gray-500'>No repos yet.</span>
              </div>
          }
        </Panel.Body>
      </Panel>

      {showEnableAllReposModal && <EnableAllReposModal />}
    </>
  )
}

export default GitSourcesContainer
