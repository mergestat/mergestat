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
  days_since_authored_last?: string
  days_since_not_authored_last?: string
  days_since_committed_last?: string
  days_since_not_committed_last?: string
}

type ExploreContext = {
  loading: boolean
  empty: boolean
  results: boolean
  params: ExploreParams
  exploreData: ExploreData
  queryModal: string
  showDataTableModal: boolean
  savedExploreId?: string | string[]
}

type UseExploreContext = [
  ExploreContext,
  React.Dispatch<React.SetStateAction<ExploreContext>>
]

const initialState: ExploreContext = {
  loading: true,
  empty: true,
  results: true,
  params: {} as ExploreParams,
  exploreData: {} as ExploreData,
  queryModal: '',
  showDataTableModal: false,
  savedExploreId: undefined
}

function useExplore(): UseExploreContext {
  const [state, setState] = React.useState<ExploreContext>(initialState)
  return [state, setState]
}

// Generate context
const [useExploreContext, ExploreContextProvider] = createGenericContext<UseExploreContext>()

// Generate provider
const ExploreProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [explore, setExplore] = useExplore()

  return (
    <ExploreContextProvider value={[explore, setExplore]}>
      {props.children}
    </ExploreContextProvider>
  )
}

function useExploreSetState() {
  const [_, setState] = useExploreContext()

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

  const setEmpty = (empty: boolean) => {
    setState(prev => ({
      ...prev,
      empty
    }))
  }

  const setResults = (results: boolean) => {
    setState(prev => ({
      ...prev,
      results
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

  const setSavedExloreId = (savedExploreId: string | string[]) => {
    setState(prev => ({
      ...prev,
      savedExploreId
    }))
  }

  return {
    _,
    setLoading,
    setParams,
    setEmpty,
    setResults,
    setExploreData,
    setQueryModal,
    setShowDataTableModal,
    setSavedExloreId
  }
}

export {
  useExploreContext,
  ExploreProvider,
  useExploreSetState,
}
