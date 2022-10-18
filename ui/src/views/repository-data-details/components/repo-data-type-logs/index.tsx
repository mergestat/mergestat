import { Panel } from '@mergestat/blocks'
import Link from 'next/link'
import { SyncLogsType, SyncTypeInfo } from 'src/@types'
import { LogsTable } from './logs-table'

interface RepoDataLogsProps {
  syncData?: SyncTypeInfo
  logs?: Array<SyncLogsType>
}

export const RepoDataLogs = ({ syncData, logs }: RepoDataLogsProps) => {
  return (
    <div className='h-full'>
      <Panel className='shadow-sm mb-8'>
        <Panel.Body>
          <h4 className='t-h4 mb-2'>
            {syncData?.title}
          </h4>
          <p className='text-semantic-mutedText mb-4'>
            {syncData?.brief}
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
