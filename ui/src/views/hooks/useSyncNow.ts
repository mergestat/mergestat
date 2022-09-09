import { ApolloError, useMutation } from '@apollo/client'
import SYNC_NOW from 'src/api-logic/graphql/mutations/syncs'
import { showErrorAlert } from 'src/utils/alerts'

const useSyncNow = (refetch: () => void) => {
  const [syncNow] = useMutation(SYNC_NOW, {
    onError: (error: ApolloError) => {
      showErrorAlert(error.message)
    },
    onCompleted: () => {
      refetch()
    }
  })
  return { syncNow }
}

export default useSyncNow
