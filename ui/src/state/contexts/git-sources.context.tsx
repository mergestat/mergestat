import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type GitSourcesContext = {
  search: string
  total: number
  rows: number
  page: number
}

type UseGitSourcesContext = [
  GitSourcesContext,
  React.Dispatch<React.SetStateAction<GitSourcesContext>>
]

const initialState: GitSourcesContext = {
  search: '',
  total: 0,
  rows: 20,
  page: 0,
}

function useGitSources(): UseGitSourcesContext {
  const [state, setState] = React.useState<GitSourcesContext>(initialState)
  return [state, setState]
}

// Generate context
const [useGitSourcesContext, GitSourcesContextProvider] = createGenericContext<UseGitSourcesContext>()

// Generate provider
const GitSourcesProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [gitSources, setGitSources] = useGitSources()

  return (
    <GitSourcesContextProvider value={[gitSources, setGitSources]}>
      {props.children}
    </GitSourcesContextProvider>
  )
}

function useGitSourcesSetState() {
  const [_, setState] = useGitSourcesContext()

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
  useGitSourcesContext,
  GitSourcesProvider,
  useGitSourcesSetState,
}
