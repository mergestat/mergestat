import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { GetRepoDataQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPO_DATA } from 'src/api-logic/graphql/queries/get-repo-syncs'
import { mapToRepoData } from 'src/api-logic/mappers/repo/repo-syncs'
import { MERGESTAT_TITLE } from 'src/utils/constants'

const useRepoData = () => {
  const router = useRouter()
  const { repository } = router.query

  const { loading, data } = useQuery<GetRepoDataQuery>(GET_REPO_DATA, {
    variables: { id: repository },
    fetchPolicy: 'no-cache',
  })

  const repo = useMemo(() => mapToRepoData(data), [data])

  const title = `${repo?.name} - Repos ${MERGESTAT_TITLE}`

  return { loading, repo, title }
}

export default useRepoData
