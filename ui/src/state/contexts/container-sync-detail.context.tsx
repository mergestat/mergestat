import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ContainerSyncDetail } from 'src/@types'

type ContainerSyncDetailContext = {
  loading: boolean
  idContainerSync: string | string[]
  containerSyncDetail: ContainerSyncDetail
  gitSourceToEnable: ContainerSyncDetail
  showEnableAllReposModal: boolean
}

type UseContainerSyncDetailContext = [
  ContainerSyncDetailContext,
  React.Dispatch<React.SetStateAction<ContainerSyncDetailContext>>
]

const initialState: ContainerSyncDetailContext = {
  loading: false,
  idContainerSync: '',
  containerSyncDetail: {} as ContainerSyncDetail,
  gitSourceToEnable: {} as ContainerSyncDetail,
  showEnableAllReposModal: false
}

function useContainerSyncDetail(): UseContainerSyncDetailContext {
  const [state, setState] = React.useState<ContainerSyncDetailContext>(initialState)
  return [state, setState]
}

// Generate context
const [useContainerSyncDetailContext, ContainerSyncDetailContextProvider] = createGenericContext<UseContainerSyncDetailContext>()

// Generate provider
const ContainerSyncDetailProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [containerSyncDetail, setContainerSyncDetail] = useContainerSyncDetail()

  return (
    <ContainerSyncDetailContextProvider value={[containerSyncDetail, setContainerSyncDetail]}>
      {props.children}
    </ContainerSyncDetailContextProvider>
  )
}

function useContainerSyncDetailSetState() {
  const [_, setState] = useContainerSyncDetailContext()

  const setLoading = (loading: boolean) => {
    setState(prev => ({
      ...prev,
      loading
    }))
  }

  const setIdContainerSync = (idContainerSync: string | string[]) => {
    setState(prev => ({
      ...prev,
      idContainerSync
    }))
  }

  const setContainerSyncDetail = (containerSyncDetail: ContainerSyncDetail) => {
    setState(prev => ({
      ...prev,
      containerSyncDetail
    }))
  }

  const setGitSourceToEnable = (gitSourceToEnable: ContainerSyncDetail) => {
    setState(prev => ({
      ...prev,
      gitSourceToEnable
    }))
  }

  const setShowEnableAllReposModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showEnableAllReposModal: show
    }))
  }

  return {
    _,
    setLoading,
    setIdContainerSync,
    setContainerSyncDetail,
    setGitSourceToEnable,
    setShowEnableAllReposModal
  }
}

export {
  useContainerSyncDetailContext,
  ContainerSyncDetailProvider,
  useContainerSyncDetailSetState,
}
