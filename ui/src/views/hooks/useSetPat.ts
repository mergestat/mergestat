import { ChangeEvent, useEffect, useState } from 'react'
import { AuthDetail } from 'src/@types'
import { validateToken } from 'src/api-logic/axios/api'
import { validateGitHubPAT, validateGitLabPAT } from 'src/utils'
import { showSuccessAlert } from 'src/utils/alerts'
import useCredentials from './useCredentials'

const useSetPat = (idProvider: string, auth?: AuthDetail, isGithub = true) => {
  const [showValidation, setShowValidation] = useState(false)
  const [isTokenValid, setIsTokenValid] = useState(false)
  const [pat, setPAT] = useState<string>('')

  const { addCredential } = useCredentials(() => {
    showSuccessAlert(`${isGithub ? 'GitHub' : 'GitLab'} access token saved`)
    setShowValidation(false)
    setPAT('')
  })

  useEffect(() => {
    setPAT(auth?.credentials ?? '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setPAT(e.target.value)
    setShowValidation(false)
  }

  /**
   * Method to validate token with correct structure and login against GitHub API or GitLab API
   * @returns true if token is right, otherwise return false
   */
  const isARightToken = async () => {
    const isRigthToken = await validateToken(pat, isGithub)

    if (isGithub) {
      return validateGitHubPAT(pat) && isRigthToken
    } else {
      return validateGitLabPAT(pat) && isRigthToken
    }
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
      addCredential({
        variables: {
          provider: idProvider,
          token: pat,
          type: isGithub ? 'GITHUB_PAT' : 'GITLAB_PAT',
          username: isGithub ? 'github' : 'gitlab'
        }
      })
    } else {
      setShowValidation(true)
      setIsTokenValid(isRight)
    }
  }

  return {
    pat,
    showValidation,
    isTokenValid,
    validatePAT,
    changeToken,
    handleSavePAT
  }
}

export default useSetPat
