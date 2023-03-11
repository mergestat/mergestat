import { useMutation } from '@apollo/client'
import { ADD_CREDENTIAL } from 'src/api-logic/graphql/mutations/auth-credentials'

const useCredentials = (onCompleted: () => void) => {
  const [addCredential] = useMutation(ADD_CREDENTIAL, {
    onCompleted,
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource']
  })

  return { addCredential }
}

export default useCredentials
