import { Panel } from '@mergestat/blocks'
import cx from 'classnames'
import { useState } from 'react'
import Loading from 'src/components/Loading'
import { useContainerSyncDetailContext } from 'src/state/contexts/container-sync-detail.context'
import { FilterHeader } from 'src/views/shared/filter-header'
import { EnableAllReposModal } from '../modals/enable-all-repos'
import { GitSourcesTable } from './git-sources-table'

const GitSourcesContainer: React.FC = () => {
  const [{ showEnableAllReposModal }] = useContainerSyncDetailContext()

  /** TODO: Implement query and logic to show git sources of a repo sync (container sync) */
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState(true)
  const [search, setSearch] = useState('')

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
              ? <GitSourcesTable gitSources={[{ id: 'a66fd525-057c-414f-bef9-49874581f6da', name: 'GitHub Flow', description: 'GitHub repos' }]} />
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
