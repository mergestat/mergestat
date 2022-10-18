import { useLazyQuery } from '@apollo/client'
import { Button, Spinner, Toolbar } from '@mergestat/blocks'
import { CogIcon } from '@mergestat/icons'
import { useEffect, useState } from 'react'
import { ExecuteSqlQuery } from 'src/api-logic/graphql/generated/schema'
import { EXECUTE_SQL } from 'src/api-logic/graphql/queries/sql-queries'
import { States } from 'src/utils/constants'
import SQLEditorSection from './components/sql-editor-section'
import QueryEditorEmpty from './components/state-empty'
import QueryEditorError from './components/state-error'
import QueryEditorFilled from './components/state-filled'
import QueryEditorLoading from './components/state-loading'

const QueryEditor: React.FC = () => {
  const ROWS_LIMIT = 1000
  const initialSQL = `-- AskGit is a tool for running SQL queries on data in git repos:
  -- https://github.com/augmentable-dev/askgit
  -- Use this page to try out queries in your browser, URLs are share-able

  SELECT author_name, count(*) FROM git_commits GROUP BY author_name ORDER BY count(*) DESC`

  const [query, setQuery] = useState<string>(initialSQL)
  const [state, setState] = useState<States>(States.Empty)
  const [rowLimitReached, setRowLimitReached] = useState(true)

  const [executeSQL, { loading, error, data }] = useLazyQuery<ExecuteSqlQuery>(EXECUTE_SQL, {
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if (data?.execSQL.length > 0) {
      setState(States.Filled)
      setRowLimitReached(data?.execSQL.length > ROWS_LIMIT)
    } else {
      setState(States.Empty)
    }
  }, [data])

  return (
    <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
      {/* Header */}
      <div className='bg-white overflow-auto flex h-16 w-full border-b px-8'>
        <Toolbar className='flex-1 space-x-4 w-auto h-full'>
          <Toolbar.Left>
            <h2 className='t-h2 mb-0'>Queries</h2>
          </Toolbar.Left>
          <Toolbar.Right>
            <Button className='whitespace-nowrap' label='Execute (Shift + Enter)'
              startIcon={loading
                ? <Spinner size='sm' className='mr-2' />
                : <CogIcon className="t-icon" />
              }
              disabled={loading}
              onClick={() => executeSQL({ variables: { sql: query } })}
            />
          </Toolbar.Right>
        </Toolbar>
      </div>

      <div className='flex flex-col flex-1 items-center overflow-auto'>
        {/* SQL editor */}
        <SQLEditorSection
          query={query}
          setQuery={(text) => setQuery(text || '')}
          onEnterKey={() => {
            if (!loading && query) { executeSQL({ variables: { sql: query } }) }
          }}
        />

        {/* Empty state */}
        {!error && state === States.Empty && <QueryEditorEmpty />}

        {/* Error state */}
        {error && <QueryEditorError errors={error} />}

        {/* Loading state */}
        {loading && <QueryEditorLoading />}

        {/* Filled state */}
        {!error && data && state !== States.Empty && <QueryEditorFilled rowLimit={ROWS_LIMIT} rowLimitReached={rowLimitReached} data={data.execSQL} />}
      </div>
    </main>
  )
}

export default QueryEditor
