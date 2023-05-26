import { MutationFunctionOptions, useLazyQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AddSavedExploreMutation, ExploreUiQuery, GetSavedExploreQuery } from 'src/api-logic/graphql/generated/schema'
import { ADD_SAVED_EXPLORE, UPDATE_SAVED_EXPLORE } from 'src/api-logic/graphql/mutations/explore'
import { GET_SAVED_EXPLORE } from 'src/api-logic/graphql/queries/explore'
import { useExploreContext, useExploreSetState } from 'src/state/contexts/repo-explore.context'
import { showSuccessAlert } from 'src/utils/alerts'
import useCurrentUser from '../useCurrentUser'
import { useExploreFilters } from './useExploreFilters'

const useSavedExplore = (explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void) => {
  const router = useRouter()
  const { data: userData } = useCurrentUser()
  const [{ savedExploreId, params }] = useExploreContext()
  const { setParams, setSavedParams } = useExploreSetState()
  const { setParamsAndExplore } = useExploreFilters(explore)

  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [titleError, setTitleError] = useState<boolean>(false)

  const [getSavedExplore, { loading, data }] = useLazyQuery<GetSavedExploreQuery>(GET_SAVED_EXPLORE, { fetchPolicy: 'no-cache' })

  useEffect(() => {
    savedExploreId && getSavedExplore({ variables: { id: savedExploreId } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedExploreId])

  const [addSavedExplore] = useMutation(ADD_SAVED_EXPLORE, {
    onCompleted: (data: AddSavedExploreMutation) => {
      router.push(`/explore/saved/${data.createSavedExplore?.savedExplore?.id}`)
      showSuccessAlert('Saved as new exploration')
    }
  })

  const [updateSavedExplore] = useMutation(UPDATE_SAVED_EXPLORE, {
    onError: () => null,
    onCompleted: () => {
      showSuccessAlert('Exploration saved')
    }
  })

  useEffect(() => {
    setTitle(data?.savedExplore?.name || '')
    setDesc(data?.savedExplore?.description || '')

    if (savedExploreId) {
      setSavedParams(data?.savedExplore?.metadata?.params || '') // The first state of the saved params (just to show selected filter at first time)
      setParams(data?.savedExplore?.metadata?.params || '') // Dynamic params once the page has been loaded
      setParamsAndExplore(data?.savedExplore?.metadata?.params)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    title !== '' && setTitleError(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  const addSavedExploreHandler = () => {
    if (title) {
      addSavedExplore({
        variables: {
          createdBy: userData?.currentMergeStatUser,
          createdAt: 'now',
          name: title,
          description: desc,
          metadata: {
            params
          }
        }
      })
    } else {
      setTitleError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  const updateSavedExploreHandler = () => {
    if (title) {
      updateSavedExplore({
        variables: {
          id: savedExploreId,
          name: title,
          description: desc,
          metadata: {
            params
          }
        }
      })
    } else {
      setTitleError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  return {
    loadingExplore: loading,
    savedExplore: data?.savedExplore,
    titleError,
    title,
    desc,
    setTitle,
    setDesc,
    addSavedExploreHandler,
    updateSavedExploreHandler
  }
}

export default useSavedExplore
