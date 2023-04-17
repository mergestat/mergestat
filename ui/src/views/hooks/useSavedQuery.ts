import { useLazyQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { isChartData } from 'src/@types'
import { AddSavedQueryMutation, GetSavedQueryQuery } from 'src/api-logic/graphql/generated/schema'
import { ADD_SAVED_QUERY, UPDATE_SAVED_QUERY } from 'src/api-logic/graphql/mutations/saved-query'
import { GET_SAVED_QUERY } from 'src/api-logic/graphql/queries/get-saved-query'
import { useQueryContext, useQueryTabsContext } from 'src/state/contexts'
import { showSuccessAlert } from 'src/utils/alerts'
import useCurrentUser from './useCurrentUser'

type useSavedQueryProps = {
  savedQueryId?: string | string[]
  title?: string
  desc?: string
  query?: string
}

const useSavedQuery = ({ savedQueryId, title, desc, query }: useSavedQueryProps) => {
  const router = useRouter()
  const { data: userData } = useCurrentUser()
  const [titleError, setTitleError] = useState<boolean>(false)
  const tabsState = useQueryTabsContext()
  const [{ tabs }] = useQueryContext()

  const [getSavedQuery, { loading, data }] = useLazyQuery<GetSavedQueryQuery>(GET_SAVED_QUERY, { fetchPolicy: 'no-cache' })

  useEffect(() => {
    savedQueryId && getSavedQuery({ variables: { id: savedQueryId } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [addSavedQuery] = useMutation(ADD_SAVED_QUERY, {
    onCompleted: (data: AddSavedQueryMutation) => {
      router.push(`/queries/saved/${data.createSavedQuery?.savedQuery?.id}`)
      showSuccessAlert('Saved as new query')
    }
  })

  const [updateSavedQuery] = useMutation(UPDATE_SAVED_QUERY, {
    onError: () => null,
    onCompleted: () => {
      showSuccessAlert('Query saved')
    }
  })

  const chartsMetadata = useMemo(() => {
    const tabIds = tabs.map(({ tabId }) => tabId)
    const chartsData = tabIds.map((id) => tabsState[id]).filter(isChartData)

    return chartsData.map((chart) => {
      const { xAxis, xAxisType, yAxis, chartType } = chart
      return { xAxis, xAxisType, yAxis, chartType }
    })
  }, [tabs, tabsState])

  const addSavedQueryHandler = () => {
    if (title) {
      addSavedQuery({
        variables: {
          createdBy: userData?.currentMergeStatUser,
          createdAt: 'now',
          name: title,
          description: desc,
          sql: query,
          metadata: {
            charts: chartsMetadata
          }
        }
      })
    } else {
      setTitleError(true)
    }
  }

  const updateSavedQueryHandler = () => {
    if (title) {
      updateSavedQuery({
        variables: {
          id: savedQueryId,
          name: title,
          description: desc,
          sql: query,
          metadata: {
            charts: chartsMetadata
          }
        }
      })
    } else {
      setTitleError(true)
    }
  }

  return {
    loadingSQ: loading,
    savedQuery: data?.savedQuery,
    titleError,
    setTitleError,
    addSavedQueryHandler,
    updateSavedQueryHandler
  }
}

export default useSavedQuery
