import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type RepoSyncsContext = {
  search: string
  total: number
  rows: number
  page: number
}

type UseRepoSyncsContext = [
  RepoSyncsContext,
  React.Dispatch<React.SetStateAction<RepoSyncsContext>>
]

const initialState: RepoSyncsContext = {
  search: '',
  total: 0,
  rows: 20,
  page: 0,
}

function useRepoSyncs(): UseRepoSyncsContext {
  const [state, setState] = React.useState<RepoSyncsContext>(initialState)
  return [state, setState]
}

// Generate context
const [useRepoSyncsContext, RepoSyncsContextProvider] = createGenericContext<UseRepoSyncsContext>()

// Generate provider
const RepoSyncsProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [repoSyncs, setRepoSyncs] = useRepoSyncs()

  return (
    <RepoSyncsContextProvider value={[repoSyncs, setRepoSyncs]}>
      {props.children}
    </RepoSyncsContextProvider>
  )
}

function useRepoSyncsSetState() {
  const [_, setState] = useRepoSyncsContext()

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
  useRepoSyncsContext,
  RepoSyncsProvider,
  useRepoSyncsSetState,
}
