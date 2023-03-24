import { Panel } from '@mergestat/blocks'
import Link from 'next/link'
import { ContainerSyncInfo, SyncLogsType } from 'src/@types'
import { LogsTable } from './logs-table'

interface RepoDataLogsProps {
  syncData?: ContainerSyncInfo
  logs?: Array<SyncLogsType>
}

export const RepoDataLogs = ({ syncData, logs }: RepoDataLogsProps) => {
  return (
    <div className='h-full'>
      <Panel className='shadow-sm mb-8'>
        <Panel.Body>
          <h4 className='t-h4 mb-2'>
            {syncData?.name}
          </h4>
          <p className='t-text-muted mb-4'>
            {syncData?.description}
          </p>
          <Link href='https://docs.mergestat.com/'>
            <a target='_blank' href='https://docs.mergestat.com/' rel='noopener noreferrer' className="t-button t-button-borderless">
              Learn more
            </a>
          </Link>
        </Panel.Body>
      </Panel>

      <div className='border-md shadow-sm'>
        <LogsTable logs={logs || []} />
      </div>
    </div>
  )
}
