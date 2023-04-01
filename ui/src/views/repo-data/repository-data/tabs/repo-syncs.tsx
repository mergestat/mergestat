import { TableIcon } from '@mergestat/icons'
import React from 'react'
import Loading from 'src/components/Loading'
import { useRepoSyncsContext, useRepoSyncsSetState } from 'src/state/contexts/repo-syncs.context'
import useRepoSyncs from 'src/views/hooks/repoSyncs/useRepoSyncs'
import { EmptyData } from 'src/views/shared/empty-data'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { FilterHeader } from 'src/views/shared/filter-header'
import { SyncTypesTable } from '../components'

export const RepoSyncs: React.FC = () => {
  const [{ rows, page, total }] = useRepoSyncsContext()
  const { setSearch, setRows, setPage } = useRepoSyncsSetState()
  const { loading, records, repoId, syncs } = useRepoSyncs()

  return (
    <>
      <div className='flex flex-col h-full'>
        <div className='flex-1 overflow-auto'>
          {records && <div className='flex'>
            <FilterHeader setSearch={setSearch} />
          </div>}

          {loading
            ? <Loading />
            : records
              ? <SyncTypesTable repoId={repoId} syncs={syncs || []} />
              : <EmptyData
                message='No repo syncs yet'
                icon={<TableIcon className="t-icon" />}
              />
          }
        </div>
        {records && <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />}
      </div>
    </>
  )
}
