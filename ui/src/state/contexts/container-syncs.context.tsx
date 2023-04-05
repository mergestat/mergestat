import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ContainerSyncData } from '../../@types'

type ContainerSyncsContext = {
  search: string
  total: number
  rows: number
  page: number
  containerSyncToRemove: ContainerSyncData | null
  showRemoveContainerSyncModal: boolean
  showAddContainerSyncModal: boolean
}

type UseContainerSyncsContext = [
  ContainerSyncsContext,
  React.Dispatch<React.SetStateAction<ContainerSyncsContext>>
]

const initialState: ContainerSyncsContext = {
  search: '',
  total: 0,
  rows: 20,
  page: 0,
  containerSyncToRemove: null,
  showRemoveContainerSyncModal: false,
  showAddContainerSyncModal: false
}

function useContainerSyncs(): UseContainerSyncsContext {
  const [state, setState] = React.useState<ContainerSyncsContext>(initialState)
  return [state, setState]
}

// Generate context
const [useContainerSyncsContext, ContainerSyncsContextProvider] = createGenericContext<UseContainerSyncsContext>()

// Generate provider
const ContainerSyncsProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [containerSyncs, setContainerSyncs] = useContainerSyncs()

  return (
    <ContainerSyncsContextProvider value={[containerSyncs, setContainerSyncs]}>
      {props.children}
    </ContainerSyncsContextProvider>
  )
}

function useContainerSyncsSetState() {
  const [_, setState] = useContainerSyncsContext()

  const setSearch = (search: string) => {
    setState(prev => ({
      ...prev,
      search
    }))
  }

  const setTotal = (total: number) => {
    setState(prev => ({
      ...prev,
      total
    }))
  }

  const setRows = (rows: number) => {
    setState(prev => ({
      ...prev,
      rows
    }))
  }

  const setPage = (page: number) => {
    setState(prev => ({
      ...prev,
      page
    }))
  }

  const setContainerSyncToRemove = (containerSyncToRemove: ContainerSyncData) => {
    setState(prev => ({
      ...prev,
      containerSyncToRemove
    }))
  }

  const setShowRemoveContainerSyncModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showRemoveContainerSyncModal: show
    }))
  }

  const setShowAddContainerSyncModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showAddContainerSyncModal: show
    }))
  }

  return {
    _,
    setSearch,
    setTotal,
    setRows,
    setPage,
    setContainerSyncToRemove,
    setShowRemoveContainerSyncModal,
    setShowAddContainerSyncModal
  }
}

export {
  useContainerSyncsContext,
  ContainerSyncsProvider,
  useContainerSyncsSetState,
}
