/* eslint-disable react-hooks/exhaustive-deps */
import { ApolloError, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { ADD_REPO } from 'src/api-logic/graphql/mutations/add-repo'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { showErrorAlert, showSuccessAlert, showWarningAlert } from 'src/utils/alerts'

const useAddRepos = () => {
  const [addedSuccess, setAddedSuccess] = useState(0)
  const [addedWarning, setAddedWarning] = useState(0)

  const [{ idProvider, reposToAdd }] = useGitSourceDetailContext()
  const { setReposToAdd } = useGitSourceDetailSetState()

  const [addRepo] = useMutation(ADD_REPO, {
    onError: (error: ApolloError) => {
      const message = error.message.includes('duplicate key value violates unique constraint')
      message ? setAddedWarning(prevWarning => prevWarning + 1) : showErrorAlert(error.message)
    },
    onCompleted: () => {
      setAddedSuccess(prevSuccess => prevSuccess + 1)
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource', 'getAllRepoManualImports', 'getRepoManualImports']
  })

  useEffect(() => {
    // TO-DO: It does not work all times because async executions. The better solution would be have the bulk creation on the backend.
    if (reposToAdd.length !== 0 && addedSuccess + addedWarning === reposToAdd.length) {
      addedSuccess > 0 && showSuccessAlert(`${addedSuccess} repo${addedSuccess > 1 ? 's' : ''} added`)
      addedWarning > 0 && showWarningAlert(`${addedWarning} repo${addedWarning > 1 ? 's' : ''} already exist${addedWarning === 1 ? 's' : ''}`)
      setAddedWarning(0)
      setAddedSuccess(0)
      setReposToAdd([])
    }
  }, [addedSuccess, addedWarning])

  useEffect(() => {
    add(reposToAdd)
  }, [reposToAdd])

  /**
   * Method to record repos to database
   * @param repos Repositories to record
   */
  const add = (repos: string[]) => {
    // TO-DO: Would be better to have the bulck creation on the backend.
    repos.forEach(repo => {
      addRepo({
        variables: { repo, idProvider }
      })
    })
  }

  /**
   * Method triggered when user is on CSV tab to add repos
   */
  const addFromCSV = (urls: string) => {
    const lines = urls.split(/\r?\n/)
    const matrix = lines.map(line => line.split(',').map(ele => ele.trim()))

    let newRepos: string[] = []
    matrix.forEach(line => {
      if (line[0] !== '' && !newRepos.includes(line[0])) {
        newRepos = [...newRepos, line[0]]
      }
    })

    setReposToAdd(newRepos)
  }

  /**
   * Method triggered when user is on URL tab to add repos
   */
  const addFromURL = (url: string) => {
    setReposToAdd([url])
  }

  return {
    addFromURL,
    addFromCSV
  }
}

export default useAddRepos
