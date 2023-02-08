import { useLazyQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AddSavedQueryMutation, GetSavedQueryQuery } from 'src/api-logic/graphql/generated/schema'
import { ADD_SAVED_QUERY, UPDATE_SAVED_QUERY } from 'src/api-logic/graphql/mutations/saved-query'
import { GET_SAVED_QUERY } from 'src/api-logic/graphql/queries/get-saved-query'
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

  const [getSavedQuery, { data }] = useLazyQuery<GetSavedQueryQuery>(GET_SAVED_QUERY, { fetchPolicy: 'no-cache' })

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
    onCompleted: () => {
      showSuccessAlert('Query saved')
    }
  })

  const addSavedQueryHandler = () => {
    addSavedQuery({
      variables: {
        createdBy: userData?.currentMergeStatUser,
        createdAt: 'now',
        name: title,
        description: desc,
        sql: query
      }
    })
  }

  const updateSavedQueryHandler = () => {
    updateSavedQuery({
      variables: {
        id: savedQueryId,
        name: title,
        description: desc,
        sql: query
      }
    })
  }

  return { savedQuery: data?.savedQuery, addSavedQueryHandler, updateSavedQueryHandler }
}

export default useSavedQuery
