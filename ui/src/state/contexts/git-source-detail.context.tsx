import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { GitSourceDetail, ImportSync, RepoImportData, RepoManualImportData } from 'src/@types'

type GitSourceDetailContext = {
  loading: boolean
  idProvider: string | string[]
  gsDetail: GitSourceDetail
  searchImport: string
  searchManualImport: string
  importAuto: ImportSync
  showAddRepoModal: boolean
  showAutoImportModal: boolean
  showRemoveImportModal: boolean
  showRemoveGitSourceModal: boolean
  importInfo: RepoImportData
  repoInfo: RepoManualImportData
  totalManualRepos: number
  rowsManualRepos: number
  pageManualRepos: number
  reposToAdd: string[]
  showBulk: boolean
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
  searchManualImport: '',
  importAuto: {} as ImportSync,
  showAddRepoModal: false,
  showAutoImportModal: false,
  showRemoveImportModal: false,
  showRemoveGitSourceModal: false,
  importInfo: {} as RepoImportData,
  repoInfo: {} as RepoManualImportData,
  totalManualRepos: 0,
  rowsManualRepos: 20,
  pageManualRepos: 0,
  reposToAdd: [],
  showBulk: false
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

  const setSearchManualImport = (searchManualImport: string) => {
    setState(prev => ({
      ...prev,
      searchManualImport
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

  const setShowRemoveGitSourceModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showRemoveGitSourceModal: show
    }))
  }

  const setImportInfo = (importInfo: RepoImportData) => {
    setState(prev => ({
      ...prev,
      importInfo
    }))
  }

  const setRepoInfo = (repoInfo: RepoManualImportData) => {
    setState(prev => ({
      ...prev,
      repoInfo
    }))
  }

  const setTotalManualRepos = (totalManualRepos: number) => {
    setState(prev => ({
      ...prev,
      totalManualRepos
    }))
  }

  const setRowsManualRepos = (rowsManualRepos: number) => {
    setState(prev => ({
      ...prev,
      rowsManualRepos
    }))
  }

  const setPageManualRepos = (pageManualRepos: number) => {
    setState(prev => ({
      ...prev,
      pageManualRepos
    }))
  }

  const setReposToAdd = (reposToAdd: string[]) => {
    setState(prev => ({
      ...prev,
      reposToAdd
    }))
  }

  const setShowBulk = (showBulk: boolean) => {
    setState(prev => ({
      ...prev,
      showBulk
    }))
  }

  return {
    _,
    setLoading,
    setIdProvider,
    setGsDetail,
    setSearchImport,
    setSearchManualImport,
    setImportAuto,
    setShowAddRepoModal,
    setShowAutoImportModal,
    setShowRemoveImportModal,
    setShowRemoveGitSourceModal,
    setImportInfo,
    setRepoInfo,
    setTotalManualRepos,
    setRowsManualRepos,
    setPageManualRepos,
    setReposToAdd,
    setShowBulk
  }
}

export {
  useGitSourceDetailContext,
  GitSourceDetailProvider,
  useGitSourceDetailSetState,
}
