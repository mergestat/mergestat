import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type RepoExploreContext = {
  search: string
}

type UseRepoExploreContext = [
  RepoExploreContext,
  React.Dispatch<React.SetStateAction<RepoExploreContext>>
]

const initialState: RepoExploreContext = {
  search: '',
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

  const setSearch = (search: string) => {
    setState(prev => ({
      ...prev,
      search
    }))
  }

  return {
    _,
    setSearch,
  }
}

export {
  useRepoExploreContext,
  RepoExploreProvider,
  useRepoExploreSetState,
}
