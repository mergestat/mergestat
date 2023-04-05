import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type DefaultRepoSyncsContext = {
  search: string
  total: number
  rows: number
  page: number
}

type UseDefaultRepoSyncsContext = [
  DefaultRepoSyncsContext,
  React.Dispatch<React.SetStateAction<DefaultRepoSyncsContext>>
]

const initialState: DefaultRepoSyncsContext = {
  search: '',
  total: 0,
  rows: 20,
  page: 0,
}

function useDefaultRepoSyncs(): UseDefaultRepoSyncsContext {
  const [state, setState] = React.useState<DefaultRepoSyncsContext>(initialState)
  return [state, setState]
}

// Generate context
const [useDefaultRepoSyncsContext, DefaultRepoSyncsContextProvider] = createGenericContext<UseDefaultRepoSyncsContext>()

// Generate provider
const DefaultRepoSyncsProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [defaultRepoSyncs, setDefaultRepoSyncs] = useDefaultRepoSyncs()

  return (
    <DefaultRepoSyncsContextProvider value={[defaultRepoSyncs, setDefaultRepoSyncs]}>
      {props.children}
    </DefaultRepoSyncsContextProvider>
  )
}

function useDefaultRepoSyncsSetState() {
  const [_, setState] = useDefaultRepoSyncsContext()

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
  useDefaultRepoSyncsContext,
  DefaultRepoSyncsProvider,
  useDefaultRepoSyncsSetState,
}
