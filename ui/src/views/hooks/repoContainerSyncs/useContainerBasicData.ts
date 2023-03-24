import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { GET_CONTAINER_BASIC_DATA } from 'src/api-logic/graphql/queries/get-sync-history-logs'
import { mapToContainerBasicData } from 'src/api-logic/mappers/repo-container/container-syncs-logs'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import { ContainerBasicData } from '../../../@types'
import { GetContainerBasicDataQuery } from '../../../api-logic/graphql/generated/schema'

const useContainerBasicData = () => {
  const router = useRouter()
  const { repository, syncId } = router.query

  const { loading, data } = useQuery<GetContainerBasicDataQuery>(GET_CONTAINER_BASIC_DATA, {
    variables: { repoId: repository, syncId },
    fetchPolicy: 'no-cache'
  })

  const basicData: ContainerBasicData = mapToContainerBasicData(data)
  const title = `${basicData.sync?.name} - ${basicData.repo.name} - Repos  ${MERGESTAT_TITLE}`

  return { loading, title, basicData }
}

export default useContainerBasicData
