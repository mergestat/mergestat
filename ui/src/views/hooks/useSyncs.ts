import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { GetRepoSyncsQuery } from 'src/api-logic/graphql/generated/schema'
import GET_REPO_SYNCS from 'src/api-logic/graphql/queries/get-repo-syncs.query'
import { mapToSyncsData } from 'src/api-logic/mappers/repo-syncs'
import { MERGESTAT_TITLE } from 'src/utils/constants'

const useSyncs = (poll = false) => {
  const router = useRouter()
  const { repository } = router.query

  const { loading, data, refetch } = useQuery<GetRepoSyncsQuery>(GET_REPO_SYNCS, {
    variables: { id: repository },
    fetchPolicy: 'no-cache',
    ...(poll && { pollInterval: 5000 }),
  })

  const repo = mapToSyncsData(data)
  const title = `${MERGESTAT_TITLE} ${repo?.name}`

  return { loading, repo, title, refetch }
}

export default useSyncs
