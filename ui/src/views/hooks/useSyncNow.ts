import { ApolloError, useMutation } from '@apollo/client'
import { AddSyncTypeMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_SYNC_TYPE, SYNC_NOW } from 'src/api-logic/graphql/mutations/syncs'
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

  const [addSyncType] = useMutation(ADD_SYNC_TYPE, {
    onError: (error: ApolloError) => {
      showErrorAlert(error.message)
    },
    onCompleted: (data: AddSyncTypeMutation) => {
      syncNow({
        variables: {
          syncId: data.createRepoSync?.repoSync?.id
        }
      })
    }
  })

  return { syncNow, addSyncType }
}

export default useSyncNow
