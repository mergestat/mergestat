import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type ContainerSyncsLogsContext = {
  search: string
  total: number
  rows: number
  page: number
}

type UseContainerSyncsLogsContext = [
  ContainerSyncsLogsContext,
  React.Dispatch<React.SetStateAction<ContainerSyncsLogsContext>>
]

const initialState: ContainerSyncsLogsContext = {
  search: '',
  total: 0,
  rows: 20,
  page: 0,
}

function useContainerSyncsLogs(): UseContainerSyncsLogsContext {
  const [state, setState] = React.useState<ContainerSyncsLogsContext>(initialState)
  return [state, setState]
}

// Generate context
const [useContainerSyncsLogsContext, ContainerSyncsLogsContextProvider] = createGenericContext<UseContainerSyncsLogsContext>()

// Generate provider
const ContainerSyncsLogsProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [containerSyncsLogs, setContainerSyncsLogs] = useContainerSyncsLogs()

  return (
    <ContainerSyncsLogsContextProvider value={[containerSyncsLogs, setContainerSyncsLogs]}>
      {props.children}
    </ContainerSyncsLogsContextProvider>
  )
}

function useContainerSyncsLogsSetState() {
  const [_, setState] = useContainerSyncsLogsContext()

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

  return {
    _,
    setSearch,
    setTotal,
    setRows,
    setPage,
  }
}

export {
  useContainerSyncsLogsContext,
  ContainerSyncsLogsProvider,
  useContainerSyncsLogsSetState,
}
