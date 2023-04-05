import { ContainerImageData, ContainerSyncDetail } from '../../../@types'
import { GetContainerImageQuery, GetContainerImagesQuery } from '../../graphql/generated/schema'

const mapToContainerSyncList = (data: GetContainerImagesQuery | undefined): ContainerImageData[] => {
  const containerImages: ContainerImageData[] = []

  data?.containerImages?.nodes.forEach((im) => {
    const ci: ContainerImageData = {
      id: im.id,
      name: im.name,
      description: im.description,
      version: im.version,
      totalRepos: im.repos.nodes.filter(cs => cs.scheduled.totalCount > 0).length || 0
    }
    containerImages.push(ci)
  })

  return containerImages
}

const mapToContainerSyncDetail = (data: GetContainerImageQuery | undefined): ContainerSyncDetail => {
  const detail: ContainerSyncDetail = {
    id: data?.containerImage?.id,
    name: data?.containerImage?.name || '',
    description: data?.containerImage?.description,
    type: data?.containerImage?.type || '',
    url: data?.containerImage?.url || '',
    version: data?.containerImage?.version || '',
    parameters: data?.containerImage?.parameters,
    totalRepos: data?.containerImage?.repos.nodes.filter(cs => cs.scheduled.totalCount > 0).length || 0
  }

  return detail
}

export { mapToContainerSyncList, mapToContainerSyncDetail }
