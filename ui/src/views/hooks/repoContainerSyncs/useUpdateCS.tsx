import { useMutation } from '@apollo/client'
import { UPDATE_CONTAINER_SYNC } from 'src/api-logic/graphql/mutations/syncs'
import { showSuccessAlert } from 'src/utils/alerts'

const useUpdateCS = () => {
  const [updateCS] = useMutation(UPDATE_CONTAINER_SYNC, {
    onCompleted: () => {
      showSuccessAlert('Repo sync updated')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerSyncHistoryLogs']
  })

  return { updateCS }
}

export default useUpdateCS
