import { useLazyQuery } from '@apollo/client'
import { Alert, Button, Spinner, Toolbar } from '@mergestat/blocks'
import { useEffect, useState } from 'react'
import { ColumnInfo } from 'src/@types'
import { ExecuteSqlQuery } from 'src/api-logic/graphql/generated/schema'
import { EXECUTE_SQL } from 'src/api-logic/graphql/queries/sql-queries'
import { useQueryContext, useQuerySetState } from 'src/state/contexts/query.context'
import { formatTimeExecution } from 'src/utils'
import { States } from 'src/utils/constants'
import SQLEditorSection from './components/sql-editor-section'
import QueryEditorCanceled from './components/state-canceled'
import QueryEditorEmpty from './components/state-empty'
import QueryEditorError from './components/state-error'
import QueryEditorFilled from './components/state-filled'
import QueryEditorLoading from './components/state-loading'

const QueryEditor: React.FC = () => {
  const ROWS_LIMIT = 1000

  const [{ query, readOnly, expanded, dataQuery, projection }] = useQueryContext()
  const { setDataQuery, setProjection, setTabs, setActiveTab } = useQuerySetState()

  const [state, setState] = useState<States>(States.Empty)
  const [rowLimitReached, setRowLimitReached] = useState(true)
  const [executed, setExecuted] = useState(false)
  const [aborterRef, setAbortRef] = useState(new AbortController())
  const [loading, setLoading] = useState(false)
  const [time, setTime] = useState('')

  const [executeSQL, { loading: loadingQuery, error, data }] = useLazyQuery<ExecuteSqlQuery>(EXECUTE_SQL, {
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        signal: aborterRef.signal
      },
      queryDeduplication: false
    }
  })

  const projectionChanged = (columns: ColumnInfo[]) => {
    const newProjection = columns.map(c => c.name)
    const previousProjection = projection.map(c => c.name)

    let changed = false
    newProjection.forEach(p => {
      if (!previousProjection.includes(p)) {
        changed = true
      }
    })
    return changed
  }

  const checkProjection = () => {
    const columns = data?.execSQL.columns as ColumnInfo[]

    if (projection.length === 0) {
      setProjection(columns)
    } else {
      if (projectionChanged(columns)) {
        setProjection([])
        setTabs([])
        setActiveTab(0)
      }
    }
  }

  useEffect(() => {
    setLoading(loadingQuery)
  }, [loadingQuery])

  useEffect(() => {
    if (data?.execSQL.rows?.length && data?.execSQL.rows?.length > 0) {
      setTime(formatTimeExecution(data?.execSQL.queryRunningTimeMs || 0))
      setState(States.Filled)
      setRowLimitReached(data?.execSQL.rows?.length > ROWS_LIMIT)
      setDataQuery(data?.execSQL)
      checkProjection()
    } else {
      error ? setState(States.Error) : setState(States.Empty)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error])

  const executeSQLQuery = () => {
    setLoading(true)
    setAbortRef(new AbortController())
    executeSQL({ variables: { sql: query, disableReadOnly: !readOnly, trackHistory: true } })
    setExecuted(true)
  }

  const cancelSQLQuery = () => {
    setState(States.Canceled)
    aborterRef.abort()
    setLoading(false)
  }

  return (
    <>
      {/* Header */}
      {!expanded && <div className='bg-white overflow-auto flex h-16 w-full border-b px-8'>
        <Toolbar className='flex-1 space-x-4 w-auto h-full'>
          <Toolbar.Left>
            <h2 className='t-h2 mb-0'>Queries</h2>
          </Toolbar.Left>
          <Toolbar.Right>
            <Button skin="secondary" onClick={cancelSQLQuery} disabled={!loading}>
              Cancel
            </Button>
            <Button className='whitespace-nowrap' label='Execute (Shift + Enter)'
              endIcon={loading && <Spinner size='sm' className='ml-2' />}
              disabled={loading}
              onClick={() => executeSQLQuery()}
            />
          </Toolbar.Right>
        </Toolbar>
      </div>}
      {!readOnly && !expanded && <Alert isInline type="warning" className='pl-4 p-3 bg-yellow-50 border-b border-yellow-300'>
        <span className='text-yellow-900'>
          Non read-only queries are able to make changes in the underlying database, be careful!
        </span>
      </Alert>}

      <div className='flex flex-col flex-1 items-center overflow-auto'>
        {/* SQL editor */}
        {!expanded && <SQLEditorSection
          onEnterKey={() => {
            if (!loading && query) { executeSQLQuery() }
          }}
        />}

        {/* Empty state */}
        {!error && !loading && state === States.Empty && <QueryEditorEmpty executed={executed} data={dataQuery} />}

        {/* Canceled state */}
        {!error && !loading && state === States.Canceled && <QueryEditorCanceled />}

        {/* Error state */}
        {!loading && state === States.Error && error && <QueryEditorError errors={error} />}

        {/* Loading state */}
        {loading && <QueryEditorLoading />}

        {/* Filled state */}
        {!error && !loading && data && state === States.Filled &&
          <QueryEditorFilled rowLimit={ROWS_LIMIT} rowLimitReached={rowLimitReached} time={time} />
        }
      </div>
    </>
  )
}

export default QueryEditor
