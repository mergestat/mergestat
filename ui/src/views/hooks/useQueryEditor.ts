import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { ColumnInfo } from 'src/@types'
import { ExecuteSqlQuery } from 'src/api-logic/graphql/generated/schema'
import { EXECUTE_SQL } from 'src/api-logic/graphql/queries/sql-queries'
import { useQueryContext, useQuerySetState } from 'src/state/contexts'
import { useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { formatTimeExecution } from 'src/utils'
import { States } from 'src/utils/constants'

const useQueryEditor = (rowsLimit: number) => {
  const [{ query, readOnly, expanded, dataQuery, projection, showSettingsModal, showQueryHistoryModal }] = useQueryContext()
  const { setQuery, setDataQuery, setProjection, setTabs, setActiveTab, setShowSettingsModal, setShowQueryHistoryModal } = useQuerySetState()
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
    const rowsExist = data?.execSQL.rows?.length && data?.execSQL.rows?.length > 0
    const rowsAffected = data?.execSQL?.rowCount && data?.execSQL?.rowCount > 0
    const currentState = rowsExist ? States.Filled : States.Affected

    if (rowsExist || rowsAffected) {
      checkProjection(data?.execSQL.columns as ColumnInfo[])
      setDataQuery(data?.execSQL)
      setTime(formatTimeExecution(data?.execSQL.queryRunningTimeMs || 0))
      setState(currentState)
      if (data?.execSQL.rows?.length) {
        setRowLimitReached(data?.execSQL.rows?.length > rowsLimit)
      } else {
        setRowLimitReached(false)
      }
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

  return {
    setQuery,
    setShowSettingsModal,
    setShowQueryHistoryModal,
    setTitle,
    setDesc,
    executeSQLQuery,
    cancelSQLQuery,
    expanded,
    dataQuery,
    showSettingsModal,
    showQueryHistoryModal,
    state,
    rowLimitReached,
    executed,
    readOnly,
    loading,
    error,
    query,
    data,
    time,
    title,
    desc
  }
}

export default useQueryEditor
