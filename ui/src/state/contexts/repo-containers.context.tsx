import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type RepoInfoT = {
  id: string
  name: string
  type?: string
  autoImported?: boolean
  redirect?: boolean
}

type RepoContainersContext = {
  showRemoveRepositoryModal: boolean
  repoToRemove: RepoInfoT | null
  showReposTable: boolean
  reposQuantity: number
}

type UseRepoContainersContext = [
  RepoContainersContext,
  React.Dispatch<React.SetStateAction<RepoContainersContext>>
]

const initialState: RepoContainersContext = {
  showRemoveRepositoryModal: false,
  repoToRemove: null,
  showReposTable: false,
  reposQuantity: 0
}

function useRepoContainers(): UseRepoContainersContext {
  const [state, setState] = React.useState<RepoContainersContext>(initialState)
  return [state, setState]
}

// Generate context
const [useRepoContainersContext, RepoContainersContextProvider] = createGenericContext<UseRepoContainersContext>()

// Generate provider
const RepoContainersProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [repocontainers, setRepoContainers] = useRepoContainers()

  return (
    <RepoContainersContextProvider value={[repocontainers, setRepoContainers]}>
      {props.children}
    </RepoContainersContextProvider>
  )
}

function useRepoContainersSetState() {
  const [_, setState] = useRepoContainersContext()

  const setShowRemoveRepositoryModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showRemoveRepositoryModal: show
    }))
  }

  const setRepoToRemove = (repoToRemove: RepoInfoT) => {
    setState(prev => ({
      ...prev,
      repoToRemove
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
    setShowRemoveRepositoryModal,
    setRepoToRemove,
    setShowReposTable,
    setReposQuantity
  }
}

export {
  useRepoContainersContext,
  RepoContainersProvider,
  useRepoContainersSetState,
}
