import { useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import { ExecuteSqlQuery } from 'src/api-logic/graphql/generated/schema'
import { EXECUTE_SQL } from 'src/api-logic/graphql/queries/sql-queries'

const useExecuteSQL = () => {
  const [aborterRef, setAbortRef] = useState(new AbortController())

  const [executeSQL, { loading: loadingQuery, error, data }] = useLazyQuery<ExecuteSqlQuery>(EXECUTE_SQL, {
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        signal: aborterRef.signal
      },
      queryDeduplication: false
    }
  })

  return {
    loadingQuery,
    error,
    data,
    aborterRef,
    setAbortRef,
    executeSQL
  }
}

export default useExecuteSQL
