import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ExploreData } from 'src/@types'

export interface ExploreParams {
  file_path_pattern?: string
  repo_pattern?: string
  file_contents_pattern?: string
  author_name_pattern?: string
  days_since_repo_modified_last?: string
  days_since_repo_not_modified_last?: string
  days_since_file_modified_last?: string
  days_since_file_not_modified_last?: string
}

type RepoExploreContext = {
  loading: boolean
  params: ExploreParams
  exploreData: ExploreData
  queryModal: string
  showDataTableModal: boolean
}

type UseRepoExploreContext = [
  RepoExploreContext,
  React.Dispatch<React.SetStateAction<RepoExploreContext>>
]

const initialState: RepoExploreContext = {
  loading: true,
  params: {} as ExploreParams,
  exploreData: {} as ExploreData,
  queryModal: '',
  showDataTableModal: false,
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

  const setParams = (params: ExploreParams) => {
    setState(prev => ({
      ...prev,
      params
    }))
  }

  const setExploreData = (exploreData: ExploreData) => {
    setState(prev => ({
      ...prev,
      exploreData
    }))
  }

  const setQueryModal = (queryModal: string) => {
    setState(prev => ({
      ...prev,
      queryModal
    }))
  }

  const setShowDataTableModal = (showDataTableModal: boolean) => {
    setState(prev => ({
      ...prev,
      showDataTableModal
    }))
  }

  return {
    _,
    setLoading,
    setParams,
    setExploreData,
    setQueryModal,
    setShowDataTableModal
  }
}

export {
  useRepoExploreContext,
  RepoExploreProvider,
  useRepoExploreSetState,
}
