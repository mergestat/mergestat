import { Alert, Button } from '@mergestat/blocks'
import { CogIcon, TableIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import Loading from 'src/components/Loading'
import { useDefaultRepoSyncsContext, useDefaultRepoSyncsSetState } from 'src/state/contexts/default-repo-syncs.context'
import { EmptyData } from 'src/views/shared/empty-data'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { FilterHeader } from 'src/views/shared/filter-header'
import useDefaultRepoSyncs from '../../../hooks/gitSources/useDefaultRepoSyncs'
import { DefaultSyncsTable } from '../components/default-syncs-table'

export const DefaultRepoSyncs: React.FC = () => {
  const [{ rows, page, total }] = useDefaultRepoSyncsContext()
  const { setSearch, setRows, setPage } = useDefaultRepoSyncsSetState()
  const { loading, records, defaultSyncs } = useDefaultRepoSyncs()
  const router = useRouter()

  return (
    <>
      <div className='py-6 pl-8 pr-5'>
        <Alert type='default' theme='light' className='bg-gray-100'>
          Default syncs are automatically enabled for all repos inside the git source. You can always override them on a per-repo basis. Learn more.{' '}
          <a className='font-medium cursor-pointer text-blue-600' target='_blank' rel='noreferrer' href='https://docs.mergestat.com/mergestat/setup/repo-auto-imports'>Learn more</a>
        </Alert>
      </div>

      <div className='flex flex-col flex-1'>
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
              ? <DefaultSyncsTable defaultSyncs={defaultSyncs || []} />
              : <EmptyData
                message='No default repo syncs yet'
                icon={<TableIcon className="t-icon" />}
              />
          }
        </div>
        {records && <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />}
      </div>
    </>
  )
}
