import { useQuery } from '@apollo/client'
import { Button } from '@mergestat/blocks'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetSavedQueryListQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_SAVED_QUERY_LIST } from 'src/api-logic/graphql/queries/get-saved-query'
import { useSavedQueryContext, useSavedQuerySetState } from 'src/state/contexts/saved-query.context'
import { EmptySavedQueries } from './components/empty-saved-queries'
import { FilterHeader } from './components/filter-header'
import { SavedQueriesTable } from './components/saved-queries-table'
import { RemoveSavedQueryModal } from './modals/remove-saved-query'

const SavedQueryList: React.FC = () => {
  const router = useRouter()

  const [{ search, rows, page, showRemoveSQModal }] = useSavedQueryContext()
  const { setTotal } = useSavedQuerySetState()
  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(false)

  const { data, refetch } = useQuery<GetSavedQueryListQuery>(GET_SAVED_QUERY_LIST, {
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
      <div className='bg-white overflow-auto flex justify-between items-center h-17 w-full border-b px-8 py-2'>
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
      {records && <FilterHeader />}
      {records
        ? <SavedQueriesTable savedQueries={data?.savedQueries ? data?.savedQueries.nodes : []} />
        : <EmptySavedQueries />
      }

      {showRemoveSQModal && <RemoveSavedQueryModal />}
    </>
  )
}

export default SavedQueryList
