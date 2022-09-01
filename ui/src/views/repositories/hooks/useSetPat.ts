import { ApolloError, useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import SET_PAT from 'src/api-logic/graphql/mutations/set-pat'
import { validateGitHubPAT } from 'src/utils'
import { showErrorAlert, showSuccessAlert } from 'src/utils/alerts'

const useSetPat = () => {
  const [showValidation, setShowValidation] = useState(false)
  const [isTokenValid, setIsTokenValid] = useState(false)
  const [pat, setPAT] = useState('')

  const [savePAT] = useMutation(SET_PAT, {
    onError: (error: ApolloError) => {
      showErrorAlert(error.message)
    },
    onCompleted: () => {
      showSuccessAlert('PAT saved')
      setShowValidation(false)
      setPAT('')
    }
  })

  const validatePAT = () => {
    setShowValidation(true)
    setIsTokenValid(validateGitHubPAT(pat))
  }

  const changeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setPAT(e.target.value)
  }

  const handleSavePAT = () => {
    const isRight = validateGitHubPAT(pat)
    if (isRight) {
      savePAT({
        variables: {
          pat
        }
      })
    } else {
      setShowValidation(true)
      setIsTokenValid(isRight)
    }
  }

  return { pat, showValidation, isTokenValid, validatePAT, changeToken, handleSavePAT }
}

export default useSetPat
