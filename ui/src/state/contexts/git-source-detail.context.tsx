import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { GitSourceDetail, ImportSync } from 'src/@types'

type GitSourceDetailContext = {
  loading: boolean
  gsDetail: GitSourceDetail
  importAuto: ImportSync
  showAddRepoModal: boolean
}

type UseGitSourceDetailContext = [
  GitSourceDetailContext,
  React.Dispatch<React.SetStateAction<GitSourceDetailContext>>
]

const initialState: GitSourceDetailContext = {
  loading: false,
  gsDetail: {} as GitSourceDetail,
  importAuto: {} as ImportSync,
  showAddRepoModal: false,
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

  const setGsDetail = (gsDetail: GitSourceDetail) => {
    setState(prev => ({
      ...prev,
      gsDetail
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

  return {
    _,
    setLoading,
    setGsDetail,
    setImportAuto,
    setShowAddRepoModal
  }
}

export {
  useGitSourceDetailContext,
  GitSourceDetailProvider,
  useGitSourceDetailSetState,
}
