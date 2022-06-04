import React from 'react'
import { Button, Panel } from '@mergestat/blocks'
import { LogsTable } from './logs-table'

export const RepoDataLogs = ({ data }: { data: any}) => {
  return (
    <div className="flex flex-col gap-6">
      <Panel className="shadow-sm">
        <Panel.Body>
          <h4 className="t-h4 mb-2">
            {data.title}
          </h4>
          <p className="text-samantic-mutedText">
            {data.brief}
          </p>

          <Button skin="borderless" label="Learn more" />
        </Panel.Body>
      </Panel>

      <LogsTable />
    </div>
  )
}
