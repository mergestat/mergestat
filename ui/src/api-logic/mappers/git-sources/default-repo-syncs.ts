import { DefaultRepoSync } from 'src/@types'
import { GetDefaultRepoSyncsQuery } from '../../graphql/generated/schema'

const mapToDefaultRepoSyncs = (data: GetDefaultRepoSyncsQuery | undefined): DefaultRepoSync[] => {
  const defaultSyncs: DefaultRepoSync[] = []

  data?.containerImages?.nodes.forEach((ci) => {
    const dataSync: DefaultRepoSync = {
      id: ci.id,
      name: ci.name,
      description: ci.description,
      enabled: false
    }
    defaultSyncs.push(dataSync)
  })

  return defaultSyncs
}

export { mapToDefaultRepoSyncs }
