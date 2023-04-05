import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type RepoInfoT = {
  id: string
  name: string
  type?: string
  autoImported?: boolean
  redirect?: boolean
}

type RepositoriesContextT = {
  showRemoveRepositoryModal: boolean
  repoToRemove: RepoInfoT | null
  showReposTable: boolean
  reposQuantity: number
}

type UseRepositoriesContextT = [
  RepositoriesContextT,
  React.Dispatch<React.SetStateAction<RepositoriesContextT>>
]

const initialState: RepositoriesContextT = {
  showRemoveRepositoryModal: false,
  repoToRemove: null,
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
  useRepositoriesContext,
  RepositoriesProvider,
  useRepositoriesSetState,
}
