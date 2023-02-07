import { useLazyQuery } from '@apollo/client'
import { Alert, Button, EditableText, Spinner, SplitButton } from '@mergestat/blocks'
import { ClockHistoryIcon, CogIcon, TerminalIcon } from '@mergestat/icons'
import { ChangeEvent, useEffect, useState } from 'react'
import { ColumnInfo } from 'src/@types'
import { ExecuteSqlQuery } from 'src/api-logic/graphql/generated/schema'
import { EXECUTE_SQL } from 'src/api-logic/graphql/queries/sql-queries'
import { useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
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
  const dispatch = useQueryTabsDispatch()

  const [state, setState] = useState<States>(States.Empty)
  const [rowLimitReached, setRowLimitReached] = useState(true)
  const [executed, setExecuted] = useState(false)
  const [aborterRef, setAbortRef] = useState(new AbortController())
  const [loading, setLoading] = useState(false)
  const [time, setTime] = useState('')
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  const [executeSQL, { loading: loadingQuery, error, data }] = useLazyQuery<ExecuteSqlQuery>(EXECUTE_SQL, {
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        signal: aborterRef.signal
      },
      queryDeduplication: false
    }
  })

  const projectionChanged = (newProjection: string[]) => {
    for (const p of newProjection) {
      if (!projection.includes(p)) {
        return true
      }
    }
    return false
  }

  const checkProjection = (columns: ColumnInfo[]) => {
    const newProjection = columns.map(c => c.name)
    if (projectionChanged(newProjection)) {
      setTabs([])
      setActiveTab(0)
      setProjection(newProjection)
      dispatch({ reset: true })
    }
  }

  useEffect(() => {
    setLoading(loadingQuery)
  }, [loadingQuery])

  useEffect(() => {
    if (data?.execSQL.rows?.length && data?.execSQL.rows?.length > 0) {
      checkProjection(data?.execSQL.columns as ColumnInfo[])
      setDataQuery(data?.execSQL)
      setTime(formatTimeExecution(data?.execSQL.queryRunningTimeMs || 0))
      setState(States.Filled)
      setRowLimitReached(data?.execSQL.rows?.length > ROWS_LIMIT)
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
      {!expanded &&
        <div className='bg-white overflow-auto flex justify-between items-center h-17 w-full border-b px-8 py-2'>
          <EditableText
            className='flex-grow mr-5'
            icon={<TerminalIcon className="t-icon" />}
            title={{
              placeholder: 'Untitled',
              value: title,
              onChange: (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
            }}
            desc={{
              placeholder: 'This is a short description',
              value: desc,
              onChange: (e: ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)
            }}
          />

          <div className='flex items-center gap-x-8'>
            <CogIcon className='t-icon cursor-pointer text-gray-500' />
            <ClockHistoryIcon className='t-icon cursor-pointer text-gray-500' />

            <div className='flex gap-x-2'>
              <SplitButton
                text="Save"
                items={[
                  {
                    text: 'Save as new...',
                  }
                ]}
                onButtonClick={() => console.log('button click')}
                onItemClick={(index: number) => console.log('item click: ' + index)}
              />

              {loading
                ? <Button
                  className='whitespace-nowrap justify-center w-32'
                  label='Cancel'
                  skin="secondary"
                  startIcon={loading && <Spinner size='sm' className='mr-4' />}
                  onClick={cancelSQLQuery} />
                : <Button
                  className='whitespace-nowrap justify-center ml-0 w-32'
                  label='Run (⇧ + ↵)'
                  onClick={() => executeSQLQuery()}
                />}
            </div>
          </div>
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
