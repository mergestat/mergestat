import { useMutation, useQuery } from '@apollo/client'
import { ChangeEvent, useEffect, useState } from 'react'
import { validateGtihubToken } from 'src/api-logic/axios/api'
import { GetPatQuery } from 'src/api-logic/graphql/generated/schema'
import SET_PAT from 'src/api-logic/graphql/mutations/set-pat'
import { GET_PAT } from 'src/api-logic/graphql/queries/auth'
import { validateGitHubPAT } from 'src/utils'
import { showSuccessAlert } from 'src/utils/alerts'

const useSetPat = () => {
  const [showValidation, setShowValidation] = useState(false)
  const [isTokenValid, setIsTokenValid] = useState(false)
  const [isTokenSet, setIsTokenSet] = useState(false)
  const [anyRepo, setAnyRepo] = useState(false)
  const [pat, setPAT] = useState('')

  const [savePAT] = useMutation(SET_PAT, {
    onCompleted: () => {
      showSuccessAlert('GitHub access token saved')
      setShowValidation(false)
      setIsTokenSet(true)
      setPAT('')
    }
  })

  const { data } = useQuery<GetPatQuery>(GET_PAT, {
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    setIsTokenSet(data?.serviceAuthCredentials ? data?.serviceAuthCredentials?.totalCount > 0 : false)
    setAnyRepo(data?.repos ? data?.repos?.totalCount > 0 : false)
  }, [data])

  const changeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setPAT(e.target.value)
    setShowValidation(false)
  }

  /**
   * Method to validate token with correct structure and login against GitHub API
   * @returns true if token is right, otherwise return false
   */
  const isARightToken = async () => {
    const isRigthGitHubToken = await validateGtihubToken(pat)
    return validateGitHubPAT(pat) && isRigthGitHubToken
  }

  /**
   * Method just to validate given token (triggered when click 'Validate' button)
   */
  const validatePAT = async () => {
    setIsTokenValid(await isARightToken())
    setShowValidation(true)
  }

  /**
   * Method to save access token in data base
   */
  const handleSavePAT = async () => {
    setShowValidation(false)
    const isRight = await isARightToken()
    if (isRight) {
      savePAT({ variables: { pat } })
    } else {
      setShowValidation(true)
      setIsTokenValid(isRight)
    }
  }

  return {
    pat,
    showValidation,
    isTokenValid,
    isTokenSet,
    anyRepo,
    validatePAT,
    changeToken,
    handleSavePAT
  }
}

export default useSetPat
