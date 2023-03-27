import { useEffect, useState } from 'react'
import { useContainerSyncDetailContext } from 'src/state/contexts/container-sync-detail.context'
import useUpdateCI from './useUpdateCI'

const useContainerSyncUpdate = () => {
  const [{ idContainerSync, containerSyncDetail: { name, description } }] = useContainerSyncDetailContext()

  const [nameCS, setNameCS] = useState('')
  const [descriptionCS, setDescriptionCS] = useState('')

  const { updateCI } = useUpdateCI()

  const updateCSNameDesc = () => {
    updateCI({
      variables: { id: idContainerSync, name: nameCS, description: descriptionCS }
    })
  }

  useEffect(() => {
    setNameCS(name || '')
    setDescriptionCS(description || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, description])

  return { nameCS, descriptionCS, setNameCS, setDescriptionCS, updateCSNameDesc }
}

export default useContainerSyncUpdate
