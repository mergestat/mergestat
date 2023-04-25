import { useQuery } from '@apollo/client'
import { Button, Toolbar } from '@mergestat/blocks'
import { BranchIcon, PlusIcon, RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetGitSourcesListQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_GIT_SOURCES_LIST } from 'src/api-logic/graphql/queries/get-git-sources'
import Loading from 'src/components/Loading'
import { useGlobalSetState } from 'src/state/contexts'
import { useGitSourcesContext, useGitSourcesSetState } from 'src/state/contexts/git-sources.context'
import { EmptyData } from 'src/views/shared/empty-data'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { FilterHeader } from 'src/views/shared/filter-header'
import { GitSourcesTable } from './components/git-sources-table'

const GitSourcesView: React.FC = () => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  const [{ search, rows, page, total }] = useGitSourcesContext()
  const { setTotal, setSearch, setRows, setPage } = useGitSourcesSetState()

  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(false)

  const { loading, data, refetch } = useQuery<GetGitSourcesListQuery>(GET_GIT_SOURCES_LIST, {
    variables: { search, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/v1/repos'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTotal(data?.providers?.totalCount || 0)

    if (!pageLoaded && data?.all) {
      setRecords(data?.all?.totalCount > 0)
      setPageLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    refetch({ search, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, search, rows, page])

  useEffect(() => {
    if (total) {
      (page * rows) + 1 > total && setPage(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {/* Header */}
      <div className='bg-white h-16 w-full border-b px-8 flex-none'>
        <Toolbar className='h-full'>
          <Toolbar.Left>
            <h2 className='t-h2 mb-0'>Git Sources</h2>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item>
              <Button className='whitespace-nowrap'
                label='Add Repos'
                startIcon={<PlusIcon className='t-icon' />}
                onClick={() => router.push('/v1/repos/add-git-source')}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </div>

      {/* Body */}
      {records && <FilterHeader setSearch={setSearch} />}
      {loading
        ? <Loading />
        : records
          ? <GitSourcesTable gitSources={data?.providers ? data?.providers.nodes : []} />
          : <EmptyData message='No git sources yet' icon={<BranchIcon className="t-icon" />} />
      }
      {records && <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />}
    </div>
  )
}

export default GitSourcesView
