import { useEffect, useState } from 'react'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'

const useURLRepo = () => {
  const [url, setURL] = useState('')
  const [{ reposToAdd }] = useRepositoriesContext()
  const { setReposToAdd } = useRepositoriesSetState()

  useEffect(() => {
    return () => setReposToAdd([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addURL = (url: string) => {
    if (!url) return
    if (reposToAdd.includes(url)) return
    setReposToAdd([...reposToAdd, url])
    setURL('')
  }

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
