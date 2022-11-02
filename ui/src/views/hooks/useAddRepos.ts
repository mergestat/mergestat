/* eslint-disable react-hooks/exhaustive-deps */
import { ApolloError, useMutation } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import { ADD_REPO } from 'src/api-logic/graphql/mutations/add-repo'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'
import { showErrorAlert, showSuccessAlert, showWarningAlert } from 'src/utils/alerts'
import { REPOS_REFETCHES } from 'src/utils/constants'

const useAddRepos = () => {
  const [addedSuccess, setAddedSuccess] = useState(0)
  const [addedWarning, setAddedWarning] = useState(0)

  const { setShowAddRepositoryModal, setReposToAdd } = useRepositoriesSetState()
  const [{ reposToAdd, csvText }] = useRepositoriesContext()

  const [addRepo] = useMutation(ADD_REPO, {
    onError: (error: ApolloError) => {
      const message = error.message.includes('duplicate key value violates unique constraint')
      message ? setAddedWarning(addedWarning + 1) : showErrorAlert(error.message)
    },
    onCompleted: () => {
      setAddedSuccess(addedSuccess + 1)
    },
    awaitRefetchQueries: true,
    refetchQueries: () => REPOS_REFETCHES
  })

  /**
   * Method to close repo addition modal
   */
  const closeModal = useCallback(() => {
    setReposToAdd([])
    setShowAddRepositoryModal(false)
  }, [])

  useEffect(() => {
    if (reposToAdd.length !== 0 && addedSuccess + addedWarning === reposToAdd.length) {
      addedSuccess > 0 && showSuccessAlert(`${addedSuccess} repo${addedSuccess > 1 ? 's' : ''} added`)
      addedWarning > 0 && showWarningAlert(`${addedWarning} repo${addedWarning > 1 ? 's' : ''} already exist${addedWarning === 1 ? 's' : ''}`)

      setReposToAdd([])
      closeModal()
    }
  }, [addedSuccess, addedWarning])

  /**
   * Method to record repos to database
   * @param repos Repositories to record
   */
  const add = (repos: string[]) => {
    repos.forEach(repo => {
      addRepo({
        variables: {
          repo,
          isGithub: repo.includes('github.com')
        }
      })
    })
  }

  /**
   * Method triggered when user is on CSV tab to add repos
   */
  const addFromCSV = () => {
    const lines = csvText.split(/\r?\n/)
    const matrix = lines.map(line => line.split(',').map(ele => ele.trim()))

    let newRepos: string[] = []
    matrix.forEach(line => {
      if (line[0] !== '' && !newRepos.includes(line[0])) {
        newRepos = [...newRepos, line[0]]
      }
    })

    setReposToAdd(newRepos)
    add(newRepos)
  }

  /**
   * Method triggered when user is on URL tab to add repos
   */
  const addFromURL = () => {
    add(reposToAdd)
  }

  return {
    addFromURL,
    addFromCSV,
    closeModal
  }
}

export default useAddRepos
