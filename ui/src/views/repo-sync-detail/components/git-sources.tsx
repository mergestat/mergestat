import { useQuery } from '@apollo/client'
import { Panel } from '@mergestat/blocks'
import cx from 'classnames'
import { useEffect, useState } from 'react'
import { GitSourceCSData } from 'src/@types'
import { GetGitSourcesListCsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_GIT_SOURCES_LIST_CS } from 'src/api-logic/graphql/queries/get-git-sources'
import { mapToGitSourceCS } from 'src/api-logic/mappers/repo-container/git-sources-cs'
import Loading from 'src/components/Loading'
import { useContainerSyncDetailContext } from 'src/state/contexts/container-sync-detail.context'
import { FilterHeader } from 'src/views/shared/filter-header'
import { EnableAllReposModal } from '../modals/enable-all-repos'
import { GitSourcesTable } from './git-sources-table'

type GitSourcesContainerProps = {
  containerSyncId?: string | string[]
}

const GitSourcesContainer: React.FC<GitSourcesContainerProps> = ({ containerSyncId }: GitSourcesContainerProps) => {
  const [{ showEnableAllReposModal }] = useContainerSyncDetailContext()

  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(true)
  const [search, setSearch] = useState('')
  const [gitSources, setGitSources] = useState<GitSourceCSData[]>([])

  const { loading, data, refetch } = useQuery<GetGitSourcesListCsQuery>(GET_GIT_SOURCES_LIST_CS, {
    variables: { search, imageId: containerSyncId },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if (!pageLoaded && data?.all) {
      setRecords(data?.all?.totalCount > 0)
      setPageLoaded(true)
    }
    setGitSources(mapToGitSourceCS(data))
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
            <h3 className='t-panel-title'>Git Sources</h3>
          </div>
        </Panel.Header>

        <Panel.Body className={cx(records ? 'bg-gray-50' : 'bg-white', { 'p-0': records })}>
          {records && <FilterHeader setSearch={setSearch} />}

          {loading
            ? <Loading />
            : records
              ? <GitSourcesTable gitSources={gitSources} />
              : <div className='flex justify-center bg-white p-6'>
                <span className='t-text-muted'>No repos yet.</span>
              </div>
          }
        </Panel.Body>
      </Panel>

      {showEnableAllReposModal && <EnableAllReposModal />}
    </>
  )
}

export default GitSourcesContainer
