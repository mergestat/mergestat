import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type SavedQueryContext = {
  search: string
  total: number
  rows: number
  page: number
}

type UseSavedQueryContext = [
  SavedQueryContext,
  React.Dispatch<React.SetStateAction<SavedQueryContext>>
]

const initialState: SavedQueryContext = {
  search: '',
  total: 0,
  rows: 20,
  page: 0
}

function useSavedQuery(): UseSavedQueryContext {
  const [state, setState] = React.useState<SavedQueryContext>(initialState)
  return [state, setState]
}

// Generate context
const [useSavedQueryContext, SavedQueryContextProvider] = createGenericContext<UseSavedQueryContext>()

// Generate provider
const SavedQueryProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [savedQueries, setSavedQueries] = useSavedQuery()

  return (
    <SavedQueryContextProvider value={[savedQueries, setSavedQueries]}>
      {props.children}
    </SavedQueryContextProvider>
  )
}

function useSavedQuerySetState() {
  const [_, setState] = useSavedQueryContext()

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
    setPage
  }
}

export {
  useSavedQueryContext,
  SavedQueryProvider,
  useSavedQuerySetState,
}
