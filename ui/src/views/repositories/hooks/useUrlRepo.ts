import { useEffect, useState } from 'react'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'

const useURLRepo = () => {
  const [url, setURL] = useState('')
  const [{ reposToAdd }] = useRepositoriesContext()
  const { setReposToAdd, resetValues } = useRepositoriesSetState()

  useEffect(() => {
    return () => resetValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Method to add url to preview list
   * @param url Repo url to add
   */
  const addURL = (url: string) => {
    if (url && !reposToAdd.includes(url)) {
      setReposToAdd([...reposToAdd, url])
      setURL('')
    }
  }

  /**
   * Method to remove url of preview list
   * @param url Repo url to remove
   */
  const removeURL = (url: string) => {
    setReposToAdd(reposToAdd.filter((repo) => repo !== url))
  }

  return {
    reposToAdd,
    url,
    setURL,
    addURL,
    removeURL,
  }
}

export default useURLRepo
