import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ImportSync } from 'src/@types'

type RepoInfoT = {
  id: string
  name: string
  type?: string
  autoImported?: boolean
  redirect?: boolean
}

type RepositoriesContextT = {
  showOpenRepositoryModal: boolean
  showAutoImportModal: boolean
  showRemoveRepositoryModal: boolean
  showRemoveImportModal: boolean
  search: string
  reposToAdd: string[]
  repoToRemove: RepoInfoT | null
  importToRemove: RepoInfoT | null
  csvText: string
  imports: ImportSync[]
  totalRepos: number
  rowsRepos: number
  pageRepos: number
  showReposTable: boolean
  reposQuantity: number
}

type UseRepositoriesContextT = [
  RepositoriesContextT,
  React.Dispatch<React.SetStateAction<RepositoriesContextT>>
]

const initialState: RepositoriesContextT = {
  showOpenRepositoryModal: false,
  showAutoImportModal: false,
  showRemoveRepositoryModal: false,
  showRemoveImportModal: false,
  search: '',
  reposToAdd: [],
  repoToRemove: null,
  importToRemove: null,
  csvText: '',
  imports: [],
  totalRepos: 0,
  rowsRepos: 20,
  pageRepos: 0,
  showReposTable: false,
  reposQuantity: 0
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

  const setTotalRepos = (totalRepos: number) => {
    setState(prev => ({
      ...prev,
      totalRepos
    }))
  }

  const setRowsRepos = (rowsRepos: number) => {
    setState(prev => ({
      ...prev,
      rowsRepos
    }))
  }

  const setPageRepos = (pageRepos: number) => {
    setState(prev => ({
      ...prev,
      pageRepos
    }))
  }

  const resetValues = () => {
    setState(prev => ({
      ...prev,
      csvText: '',
      reposToAdd: []
    }))
  }

  const setShowReposTable = (showReposTable: boolean) => {
    setState(prev => ({
      ...prev,
      showReposTable,
    }))
  }

  const setReposQuantity = (reposQuantity: number) => {
    setState(prev => ({
      ...prev,
      reposQuantity,
    }))
  }

  return {
    _,
    setShowOpenRepositoryModal,
    setShowAutoImportModal,
    setShowRemoveRepositoryModal,
    setShowRemoveImportModal,
    setSearch,
    setReposToAdd,
    setRepoToRemove,
    setImportToRemove,
    setCSVText,
    setImports,
    setTotalRepos,
    setRowsRepos,
    setPageRepos,
    resetValues,
    setShowReposTable,
    setReposQuantity
  }
}

export {
  useRepositoriesContext,
  RepositoriesProvider,
  useRepositoriesSetState,
}
