import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type RepositoriesContextT = {
  showOpenRepositoryModal: boolean
  showAutoImportModal: boolean
  showAddRepositoryModal: boolean
  showSyncRepoModal: boolean
  search: string
  reposToAdd: string[]
  csvText: string
}

type UseRepositoriesContextT = [
  RepositoriesContextT,
  React.Dispatch<React.SetStateAction<RepositoriesContextT>>
]

const initialState: RepositoriesContextT = {
  showOpenRepositoryModal: false,
  showAutoImportModal: false,
  showAddRepositoryModal: false,
  showSyncRepoModal: false,
  search: '',
  reposToAdd: [],
  csvText: '',
}

function useRepositories(): UseRepositoriesContextT {
  const [state, setState] = React.useState<RepositoriesContextT>(initialState)
  return [state, setState]
}

// Generate context
const [useRepositoriesContext, RepositoriesContextProvider] = createGenericContext<UseRepositoriesContextT>()

// Generate provider
const RepositoriesProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [repositories, setRepositories] = useRepositories()

  return (
    <RepositoriesContextProvider value={[repositories, setRepositories]}>
      {props.children}
    </RepositoriesContextProvider>
  )
}

function useRepositoriesSetState() {
  const [_, setState] = useRepositoriesContext()

  const setShowOpenRepositoryModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showOpenRepositoryModal: show
    }))
  }

  const setShowAutoImportModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showAutoImportModal: show
    }))
  }

  const setShowAddRepositoryModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showAddRepositoryModal: show
    }))
  }

  const setShowSyncRepoModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showSyncRepoModal: show
    }))
  }

  const setSearch = (search: string) => {
    setState(prev => ({
      ...prev,
      search
    }))
  }

  const setReposToAdd = (reposToAdd: string[]) => {
    setState(prev => ({
      ...prev,
      reposToAdd
    }))
  }

  const setCSVText = (csvText: string) => {
    setState(prev => ({
      ...prev,
      csvText
    }))
  }

  const resetValues = () => {
    setState(prev => ({
      ...prev,
      csvText: '',
      reposToAdd: []
    }))
  }

  return {
    _,
    setShowOpenRepositoryModal,
    setShowAutoImportModal,
    setShowAddRepositoryModal,
    setShowSyncRepoModal,
    setSearch,
    setReposToAdd,
    setCSVText,
    resetValues
  }
}

export {
  useRepositoriesContext,
  RepositoriesProvider,
  useRepositoriesSetState,
}
