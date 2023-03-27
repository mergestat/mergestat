import { Button } from '@mergestat/blocks'
import { CogIcon, TableIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import Loading from 'src/components/Loading'
import { useRepoSyncsContext, useRepoSyncsSetState } from 'src/state/contexts/repo-syncs.context'
import useRepoContainerSyncs from 'src/views/hooks/repoContainerSyncs/useRepoContainerSyncs'
import { EmptyData } from 'src/views/shared/empty-data'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { FilterHeader } from 'src/views/shared/filter-header'
import { SyncTypesTable } from '../components'

export const RepoSyncs: React.FC = () => {
  const [{ rows, page, total }] = useRepoSyncsContext()
  const { setSearch, setRows, setPage } = useRepoSyncsSetState()
  const { loading, records, syncs } = useRepoContainerSyncs()
  const router = useRouter()

  return (
    <>
      <div className='flex flex-col h-full'>
        <div className='flex-1 overflow-auto'>
          {records && <div className='flex'>
            <FilterHeader setSearch={setSearch} />
            <div className='flex px-5 items-center'>
              <Button className='whitespace-nowrap'
                skin="secondary"
                label='Manage Syncs'
                startIcon={<CogIcon className="t-icon" />}
                onClick={() => router.push('/repos/repo-syncs')}
              />
            </div>
          </div>}

          {loading
            ? <Loading />
            : records
              ? <SyncTypesTable syncs={syncs || []} />
              : <EmptyData
                message='No repo syncs yet'
                icon={<TableIcon className="t-icon" />}
                bottomElements={
                  <Button
                    skin="borderless"
                    label='Manage Syncs'
                    startIcon={<CogIcon className="t-icon" />}
                    onClick={() => router.push('/repos/repo-syncs')}
                  />
                }
              />
          }
        </div>
        {records && <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />}
      </div>
    </>
  )
}
