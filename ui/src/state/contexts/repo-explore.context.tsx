import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ExploreData } from 'src/@types'

type RepoExploreContext = {
  loading: boolean
  search: string
  filterRepo: string | undefined
  filterFile: string | undefined
  filterAuthor: string | undefined
  filterRepoDays: string | undefined
  filterFileDays: string | undefined
  exploreData: ExploreData
}

type UseRepoExploreContext = [
  RepoExploreContext,
  React.Dispatch<React.SetStateAction<RepoExploreContext>>
]

const initialState: RepoExploreContext = {
  loading: true,
  search: '',
  filterRepo: undefined,
  filterFile: undefined,
  filterAuthor: undefined,
  filterRepoDays: undefined,
  filterFileDays: undefined,
  exploreData: {} as ExploreData
}

function useRepoExplore(): UseRepoExploreContext {
  const [state, setState] = React.useState<RepoExploreContext>(initialState)
  return [state, setState]
}

// Generate context
const [useRepoExploreContext, RepoExploreContextProvider] = createGenericContext<UseRepoExploreContext>()

// Generate provider
const RepoExploreProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [repoExplore, setRepoExplore] = useRepoExplore()

  return (
    <RepoExploreContextProvider value={[repoExplore, setRepoExplore]}>
      {props.children}
    </RepoExploreContextProvider>
  )
}

function useRepoExploreSetState() {
  const [_, setState] = useRepoExploreContext()

  const setLoading = (loading: boolean) => {
    setState(prev => ({
      ...prev,
      loading
    }))
  }

  const setSearch = (search: string) => {
    setState(prev => ({
      ...prev,
      search
    }))
  }

  const setFilterRepo = (filterRepo: string | undefined) => {
    setState(prev => ({
      ...prev,
      filterRepo
    }))
  }

  const setFilterFile = (filterFile: string | undefined) => {
    setState(prev => ({
      ...prev,
      filterFile
    }))
  }

  const setFilterAuthor = (filterAuthor: string | undefined) => {
    setState(prev => ({
      ...prev,
      filterAuthor
    }))
  }

  const setFilterRepoDays = (filterRepoDays: string | undefined) => {
    setState(prev => ({
      ...prev,
      filterRepoDays
    }))
  }

  const setFilterFileDays = (filterFileDays: string | undefined) => {
    setState(prev => ({
      ...prev,
      filterFileDays
    }))
  }

  const setExploreData = (exploreData: ExploreData) => {
    setState(prev => ({
      ...prev,
      exploreData
    }))
  }

  return {
    _,
    setLoading,
    setSearch,
    setFilterRepo,
    setFilterFile,
    setFilterAuthor,
    setFilterRepoDays,
    setFilterFileDays,
    setExploreData,
  }
}

export {
  useRepoExploreContext,
  RepoExploreProvider,
  useRepoExploreSetState,
}
