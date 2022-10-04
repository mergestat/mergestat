import { useMutation } from '@apollo/client'
import { TagType } from 'src/@types'
import { UPDATE_TAGS } from 'src/api-logic/graphql/mutations/repos'

const useTags = () => {
  const [updateTags] = useMutation(UPDATE_TAGS)

  const saveTags = (id: string, tags: TagType[]) => {
    const newTags = tags.filter(t => t.checked).map(t => t.title)
    updateTags({ variables: { id, tags: newTags } })
  }

  return { saveTags }
}

export default useTags
