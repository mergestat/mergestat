import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { ColumnInfo, QueryResultProps, TabData } from 'src/@types'

const initialSQL = `-- Run (read-only) queries directly against the Postgres database
-- For example, count commits by author across all repositories
SELECT author_name, count(*) FROM git_commits GROUP BY author_name ORDER BY count(*) DESC
`

type QueryContextT = {
  query: string
  readOnly: boolean
  expanded: boolean
  activeTab: number
  tabs: TabData[]
  dataQuery: QueryResultProps
  projection: ColumnInfo[]
}

type UseQueryContextT = [
  QueryContextT,
  React.Dispatch<React.SetStateAction<QueryContextT>>
]

const initialState: QueryContextT = {
  query: initialSQL,
  readOnly: true,
  expanded: false,
  activeTab: 0,
  tabs: [],
  dataQuery: {},
  projection: []
}

function useQueryEditor(): UseQueryContextT {
  const [state, setState] = React.useState<QueryContextT>(initialState)
  return [state, setState]
}

// Generate context
const [useQueryContext, QueryContextProvider] = createGenericContext<UseQueryContextT>()

// Generate provider
const QueryProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [queryEditor, setQueryEditor] = useQueryEditor()

  return (
    <QueryContextProvider value={[queryEditor, setQueryEditor]}>
      {props.children}
    </QueryContextProvider>
  )
}

function useQuerySetState() {
  const [_, setState] = useQueryContext()

  const setQuery = (query: string) => {
    setState(prev => ({
      ...prev,
      query
    }))
  }

  const setReadOnly = (readOnly: boolean) => {
    setState(prev => ({
      ...prev,
      readOnly
    }))
  }

  const setExpanded = (expanded: boolean) => {
    setState(prev => ({
      ...prev,
      expanded
    }))
  }

  const setActiveTab = (activeTab: number) => {
    setState(prev => ({
      ...prev,
      activeTab
    }))
  }

  const setTabs = (tabs: TabData[]) => {
    setState(prev => ({
      ...prev,
      tabs
    }))
  }

  const setDataQuery = (dataQuery: QueryResultProps) => {
    setState(prev => ({
      ...prev,
      dataQuery
    }))
  }

  const setProjection = (projection: ColumnInfo[]) => {
    setState(prev => ({
      ...prev,
      projection
    }))
  }

  return {
    _,
    setQuery,
    setReadOnly,
    setExpanded,
    setActiveTab,
    setTabs,
    setDataQuery,
    setProjection
  }
}

export {
  useQueryContext,
  QueryProvider,
  useQuerySetState,
}
