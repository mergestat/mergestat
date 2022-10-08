import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ImportSync } from 'src/@types'

interface RepoInfoT {
  id: string
  name: string
  type?: string
  autoImported?: boolean
  redirect?: boolean
}

interface RepositoriesContextT {
  showOpenRepositoryModal: boolean
  showAutoImportModal: boolean
  showAddRepositoryModal: boolean
  showRemoveRepositoryModal: boolean
  showRemoveImportModal: boolean
  search: string
  reposToAdd: string[]
  repoToRemove: RepoInfoT | null
  importToRemove: RepoInfoT | null
  csvText: string
  imports: ImportSync[]
}

type UseRepositoriesContextT = [
  RepositoriesContextT,
  React.Dispatch<React.SetStateAction<RepositoriesContextT>>
]

const initialState: RepositoriesContextT = {
  showOpenRepositoryModal: false,
  showAutoImportModal: false,
  showAddRepositoryModal: false,
  showRemoveRepositoryModal: false,
  showRemoveImportModal: false,
  search: '',
  reposToAdd: [],
  repoToRemove: null,
  importToRemove: null,
  csvText: '',
  imports: []
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

  const setShowRemoveRepositoryModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showRemoveRepositoryModal: show
    }))
  }

  const setShowRemoveImportModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showRemoveImportModal: show
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

  const setRepoToRemove = (repoToRemove: RepoInfoT) => {
    setState(prev => ({
      ...prev,
      repoToRemove
    }))
  }

  const setImportToRemove = (importToRemove: RepoInfoT) => {
    setState(prev => ({
      ...prev,
      importToRemove
    }))
  }

  const setCSVText = (csvText: string) => {
    setState(prev => ({
      ...prev,
      csvText
    }))
  }

  const setImports = (imports: ImportSync[]) => {
    setState(prev => ({
      ...prev,
      imports
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
    setShowRemoveRepositoryModal,
    setShowRemoveImportModal,
    setSearch,
    setReposToAdd,
    setRepoToRemove,
    setImportToRemove,
    setCSVText,
    setImports,
    resetValues
  }
}

export {
  useRepositoriesContext,
  RepositoriesProvider,
  useRepositoriesSetState,
}
