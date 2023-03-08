import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { UPDATE_GIT_SOURCE } from 'src/api-logic/graphql/mutations/git-sources'
import { useGitSourceDetailContext } from 'src/state/contexts/git-source-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'

const useGitSourceUpdate = () => {
  const [{ idProvider, gsDetail: { name, description, vendor } }] = useGitSourceDetailContext()

  const [nameGS, setNameGS] = useState('')
  const [descriptionGS, setDescriptionGS] = useState('')

  const [updateGS] = useMutation(UPDATE_GIT_SOURCE, {
    onCompleted: () => {
      showSuccessAlert('Git Source updated')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource']
  })

  const updateGitSource = () => {
    updateGS({
      variables: { idProvider, name: nameGS, description: descriptionGS }
    })
  }

  useEffect(() => {
    setNameGS(name || '')
    setDescriptionGS(description || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, description])

  return { vendor, nameGS, descriptionGS, setNameGS, setDescriptionGS, updateGitSource }
}

export default useGitSourceUpdate
