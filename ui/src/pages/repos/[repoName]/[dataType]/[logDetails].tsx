import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { RepositoryDataLogsDetailsView } from 'src/views/repository-data-logs-details'

const LogsDetailsPage:NextPage = () => {
  const router = useRouter()
  const { repoName,dataType,logDetails } = router.query

  return (
    <RepositoryDataLogsDetailsView />
  )
}

export default LogsDetailsPage