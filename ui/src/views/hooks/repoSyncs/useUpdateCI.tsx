import { useMutation } from '@apollo/client'
import { UPDATE_CONTAINER_IMAGE } from 'src/api-logic/graphql/mutations/repo-syncs'
import { showSuccessAlert } from 'src/utils/alerts'

const useUpdateCI = () => {
  const [updateCI] = useMutation(UPDATE_CONTAINER_IMAGE, {
    onCompleted: () => {
      showSuccessAlert('Repo sync updated')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerImage', 'getGitSourcesListCS']
  })

  return { updateCI }
}

export default useUpdateCI
