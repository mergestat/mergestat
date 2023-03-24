import { ContainerSyncDetail } from '../../../@types'
import { GetContainerImageQuery } from '../../graphql/generated/schema'

const mapToContainerSyncDetail = (data: GetContainerImageQuery | undefined): ContainerSyncDetail => {
  const detail: ContainerSyncDetail = {
    id: data?.containerImage?.id,
    name: data?.containerImage?.name || '',
    description: data?.containerImage?.description,
    type: data?.containerImage?.type || '',
    url: data?.containerImage?.url || '',
    version: data?.containerImage?.version || '',
    parameters: data?.containerImage?.parameters,
    totalRepos: data?.containerImage?.repos.totalCount || 0,
  }

  return detail
}

export { mapToContainerSyncDetail }
