import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

const initialSQL = `-- Run (read-only) queries directly against the Postgres database
-- For example, count commits by author across all repositories
SELECT author_name, count(*) FROM git_commits GROUP BY author_name ORDER BY count(*) DESC
`

type QueryContextT = {
  query: string
  nonReadOnly: boolean
}

type UseQueryContextT = [
  QueryContextT,
  React.Dispatch<React.SetStateAction<QueryContextT>>
]

const initialState: QueryContextT = {
  query: initialSQL,
  nonReadOnly: false
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

  const setNonReadOnly = (nonReadOnly: boolean) => {
    setState(prev => ({
      ...prev,
      nonReadOnly
    }))
  }

  return {
    _,
    setQuery,
    setNonReadOnly
  }
}

export {
  useQueryContext,
  QueryProvider,
  useQuerySetState,
}
