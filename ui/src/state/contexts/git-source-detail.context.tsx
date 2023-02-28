import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { GitSourceDetail, ImportSync, RepoImportData } from 'src/@types'

type GitSourceDetailContext = {
  loading: boolean
  idProvider: string | string[]
  gsDetail: GitSourceDetail
  searchImport: string
  importAuto: ImportSync
  showAddRepoModal: boolean
  showAutoImportModal: boolean
  showRemoveImportModal: boolean
  importInfo: RepoImportData
}

type UseGitSourceDetailContext = [
  GitSourceDetailContext,
  React.Dispatch<React.SetStateAction<GitSourceDetailContext>>
]

const initialState: GitSourceDetailContext = {
  loading: false,
  idProvider: '',
  gsDetail: {} as GitSourceDetail,
  searchImport: '',
  importAuto: {} as ImportSync,
  showAddRepoModal: false,
  showAutoImportModal: false,
  showRemoveImportModal: false,
  importInfo: {} as RepoImportData
}

function useGitSourceDetail(): UseGitSourceDetailContext {
  const [state, setState] = React.useState<GitSourceDetailContext>(initialState)
  return [state, setState]
}

// Generate context
const [useGitSourceDetailContext, GitSourceDetailContextProvider] = createGenericContext<UseGitSourceDetailContext>()

// Generate provider
const GitSourceDetailProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [gitSourceState, setGitSourceState] = useGitSourceDetail()

  return (
    <GitSourceDetailContextProvider value={[gitSourceState, setGitSourceState]}>
      {props.children}
    </GitSourceDetailContextProvider>
  )
}

function useGitSourceDetailSetState() {
  const [_, setState] = useGitSourceDetailContext()

  const setLoading = (loading: boolean) => {
    setState(prev => ({
      ...prev,
      loading
    }))
  }

  const setIdProvider = (idProvider: string | string[]) => {
    setState(prev => ({
      ...prev,
      idProvider
    }))
  }

  const setGsDetail = (gsDetail: GitSourceDetail) => {
    setState(prev => ({
      ...prev,
      gsDetail
    }))
  }

  const setSearchImport = (searchImport: string) => {
    setState(prev => ({
      ...prev,
      searchImport
    }))
  }

  const setImportAuto = (importAuto: ImportSync) => {
    setState(prev => ({
      ...prev,
      importAuto
    }))
  }

  const setShowAddRepoModal = (showAddRepoModal: boolean) => {
    setState(prev => ({
      ...prev,
      showAddRepoModal
    }))
  }

  const setShowAutoImportModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showAutoImportModal: show
    }))
  }

  const setShowRemoveImportModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showRemoveImportModal: show
    }))
  }

  const setImportInfo = (importInfo: RepoImportData) => {
    setState(prev => ({
      ...prev,
      importInfo
    }))
  }

  return {
    _,
    setLoading,
    setIdProvider,
    setGsDetail,
    setSearchImport,
    setImportAuto,
    setShowAddRepoModal,
    setShowAutoImportModal,
    setShowRemoveImportModal,
    setImportInfo
  }
}

export {
  useGitSourceDetailContext,
  GitSourceDetailProvider,
  useGitSourceDetailSetState,
}
