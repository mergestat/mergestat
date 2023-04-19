import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { ContainerImage } from 'src/@types'
import { GetAllContainerImagesQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_ALL_CONTAINER_IMAGES } from 'src/api-logic/graphql/queries/get-git-sources'

const useContainerImages = () => {
  const [containerImages, setContainerImages] = useState<ContainerImage[]>([])

  const { data } = useQuery<GetAllContainerImagesQuery>(GET_ALL_CONTAINER_IMAGES, {
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    const list = data?.containerImages?.nodes.map(ci => ({ id: ci.id, description: ci.description, name: ci.name, checked: false }))
    setContainerImages(list || [])
  }, [data])

  return { containerImages, setContainerImages }
}

export default useContainerImages
