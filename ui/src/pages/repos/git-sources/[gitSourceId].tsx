import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { GitSourceDetail } from 'src/@types'
import { GetGitSourceQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_GIT_SOURCE } from 'src/api-logic/graphql/queries/get-git-sources'
import { mapToGitSourceDetail } from 'src/api-logic/mappers/git-source-detail'
import { capitalize } from 'src/utils'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import GitSourceDetailView from 'src/views/repo-git-sources/git-source-detail'

const GitSourceDetailPage: NextPage = () => {
  const router = useRouter()
  const { gitSourceId } = router.query
  const [detail, setDetail] = useState<GitSourceDetail>()

  const { loading, data } = useQuery<GetGitSourceQuery>(GET_GIT_SOURCE, {
    variables: { id: gitSourceId },
    fetchPolicy: 'no-cache',
  })

  const title = `${capitalize(data?.provider?.vendor || '')} Source ${MERGESTAT_TITLE}`

  useEffect(() => {
    setDetail(mapToGitSourceDetail(data))
  }, [data])

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <GitSourceDetailView loading={loading} data={detail} />
    </Fragment>
  )
}

export default GitSourceDetailPage
