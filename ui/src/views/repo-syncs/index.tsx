import { useQuery } from '@apollo/client'
import { Button, Toolbar } from '@mergestat/blocks'
import { PlusIcon, RepositoryIcon, TableIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GET_CONTAINER_IMAGES } from 'src/api-logic/graphql/queries/get-repo-syncs'
import Loading from 'src/components/Loading'
import { useContainerSyncsContext, useContainerSyncsSetState, useGlobalSetState } from 'src/state/contexts'
import { EmptyData } from 'src/views/shared/empty-data'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { FilterHeader } from 'src/views/shared/filter-header'
import { GetContainerSyncsQuery } from '../../api-logic/graphql/generated/schema'
import { AddContainerSyncModal } from './components/add-container-sync'
import { ContainerSyncsTable } from './components/container-syncs-table'
import { RemoveContainerSyncModal } from './modals/remove-container-sync'

const ContainerSyncsView: React.FC = () => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  const [{ search, rows, page, total, showAddContainerSyncModal, showRemoveContainerSyncModal }] = useContainerSyncsContext()
  const { setTotal, setSearch, setRows, setPage, setShowAddContainerSyncModal } = useContainerSyncsSetState()

  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(false)

  const { loading, data, refetch } = useQuery<GetContainerSyncsQuery>(GET_CONTAINER_IMAGES, {
    variables: { search, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/repos'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTotal(data?.containerImages?.totalCount || 0)

    if (!pageLoaded && data?.all) {
      setRecords(data?.all?.totalCount > 0)
      setPageLoaded(true)
    }

    if (data?.all?.totalCount === 0) {
      setRecords(false)
      setPageLoaded(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    search && setPage(0)
    refetch({ search, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, search, rows, page])

  return (
    <>
      <div className='flex flex-col flex-1 overflow-hidden'>
        {/* Header */}
        <div className='bg-white h-16 w-full border-b px-8 flex-none'>
          <Toolbar className='h-full'>
            <Toolbar.Left>
              <h2 className='t-h2 mb-0'>Repo Syncs</h2>
            </Toolbar.Left>
            <Toolbar.Right>
              <Toolbar.Item>
                <Button className='whitespace-nowrap'
                  label='Add Sync'
                  startIcon={<PlusIcon className='t-icon' />}
                  onClick={() => setShowAddContainerSyncModal(true)}
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
            ? <ContainerSyncsTable containerSyncs={data?.containerImages ? data?.containerImages.nodes : []} />
            : <EmptyData message='No repo syncs yet' icon={<TableIcon className="t-icon" />} />
        }
        {records && <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />}
      </div>

      {showAddContainerSyncModal && <AddContainerSyncModal />}
      {showRemoveContainerSyncModal && <RemoveContainerSyncModal />}
    </>
  )
}

export default ContainerSyncsView
