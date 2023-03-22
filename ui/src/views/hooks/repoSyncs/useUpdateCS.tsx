import { useMutation } from '@apollo/client'
import { UPDATE_CONTAINER_SYNC } from 'src/api-logic/graphql/mutations/repo-syncs'
import { showSuccessAlert } from 'src/utils/alerts'

const useUpdateCS = () => {
  const [updateCS] = useMutation(UPDATE_CONTAINER_SYNC, {
    onCompleted: () => {
      showSuccessAlert('Repo sync updated')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerSync']
  })

  return { updateCS }
}

export default useUpdateCS
