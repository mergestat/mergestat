import { Button, Panel } from '@mergestat/blocks'
import { SyncLogsType, SyncTypeInfo } from 'src/@types'
import { LogsTable } from './logs-table'
import Link from 'next/link'

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
            <Button skin='borderless' label='Learn more' />
          </Link>
        </Panel.Body>
      </Panel>

      <div className='border-md shadow-sm'>
        <LogsTable logs={logs || []} />
      </div>
    </div>
  )
}
