import React from 'react'
import { LogsTable } from './logs-table'
import { RepoDataTypeDescription } from './repo-data-type-desctiption'

type RepoDataLogsProps={
  dataTypeName:string
}

export const RepoDataLogs:React.FC<RepoDataLogsProps> = (props) => {
  return (
    <div className=' flex flex-col gap-8'>
      <RepoDataTypeDescription
        title={props.dataTypeName}
        description=
        {` 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci quis pharetra sed sit.
          Non id habitasse at elementum tellus et. 
          Eget volutpat elit faucibus malesuada morbi aliquam faucibus tellus quis.
        `}

      />
      <LogsTable/>
    </div>
  )
}
