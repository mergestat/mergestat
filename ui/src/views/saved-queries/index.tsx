import { useQuery } from '@apollo/client'
import { Button } from '@mergestat/blocks'
import { TerminalIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetSavedQueryListQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_SAVED_QUERY_LIST } from 'src/api-logic/graphql/queries/get-saved-query'
import Loading from 'src/components/Loading'
import { useSavedQueryContext, useSavedQuerySetState } from 'src/state/contexts/saved-query.context'
import { EmptyData } from '../shared/empty-data'
import { FilterFooter } from '../shared/filter-footer'
import { FilterHeader } from '../shared/filter-header'
import { SavedQueriesTable } from './components/saved-queries-table'
import { RemoveSavedQueryModal } from './modals/remove-saved-query'

const SavedQueryList: React.FC = () => {
  const router = useRouter()

  const [{ search, rows, page, total, showRemoveSQModal }] = useSavedQueryContext()
  const { setTotal, setSearch, setRows, setPage } = useSavedQuerySetState()
  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(false)

  const { loading, data, refetch } = useQuery<GetSavedQueryListQuery>(GET_SAVED_QUERY_LIST, {
    variables: { search, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    setTotal(data?.savedQueries?.totalCount || 0)

    if (!pageLoaded && data?.all) {
      setRecords(data?.all?.totalCount > 0)
      setPageLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    refetch({ search, first: rows, offset: (page * rows) })
  }, [refetch, search, rows, page])

  const gotToQueryEditor = () => {
    router.push('/queries')
  }

  return (
    <>
      {/* Header */}
      <div className='bg-white overflow-auto flex justify-between items-center h-16 flex-none w-full border-b px-8 py-2'>
        <div className="text-xl font-semibold">Saved Queries</div>

        <div className='flex items-center gap-x-7'>
          <Button
            className='whitespace-nowrap justify-center'
            label='Query'
            onClick={gotToQueryEditor}
          />
        </div>
      </div>

      {/* Body */}
      {records && <FilterHeader setSearch={setSearch} />}
      {loading
        ? <Loading />
        : records
          ? <SavedQueriesTable savedQueries={data?.savedQueries ? data?.savedQueries.nodes : []} />
          : <EmptyData message='No saved queries yet' icon={<TerminalIcon className="t-icon" />} />
      }
      {records && <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />}

      {showRemoveSQModal && <RemoveSavedQueryModal />}
    </>
  )
}

export default SavedQueryList
