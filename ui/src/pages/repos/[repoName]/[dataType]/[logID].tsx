import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { RepositoryDataLogsDetailsView } from 'src/views/repository-data-logs-details'

const LogsDetailsPage: NextPage = () => {
  const router = useRouter()
  const { repoName, dataType, logID } = router.query

  if (typeof logID !== 'string') return <></>

  return <RepositoryDataLogsDetailsView logID={logID} />
}

export default LogsDetailsPage