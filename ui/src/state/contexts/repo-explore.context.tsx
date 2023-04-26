import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ExploreData } from 'src/@types'

type RepoExploreContext = {
  loading: boolean
  search: string
  exploreData: ExploreData
}

type UseRepoExploreContext = [
  RepoExploreContext,
  React.Dispatch<React.SetStateAction<RepoExploreContext>>
]

const initialState: RepoExploreContext = {
  loading: true,
  search: '',
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
    setExploreData,
  }
}

export {
  useRepoExploreContext,
  RepoExploreProvider,
  useRepoExploreSetState,
}
