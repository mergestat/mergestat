import { Badge } from '@mergestat/blocks'
import React from 'react'
import { TagType } from 'src/@types'
import { EditTagsListDropDown } from 'src/views/repos/drop-downs'

type RepositoryTagItemProps = TagType

export const RepositoryTagItem: React.FC<RepositoryTagItemProps> = (props) => {
  return (
    <Badge label={props.title} />
  )
}

export type RepositoryTagListProps = {
  idRepo: string
  tags: Array<TagType>
}

export const RepositoryTagList: React.FC<RepositoryTagListProps> = ({ idRepo, tags }) => {
  const TAGS_SHOWN = 2
  const checkedTags = tags.filter((tag) => tag.checked)

  return (
    <div className="flex gap-2 ml-6 items-center">
      {checkedTags.slice(0, TAGS_SHOWN).map(
        (tag, index) => (
          <RepositoryTagItem key={index} {...tag} />
        )
      )}
      <EditTagsListDropDown
        idRepo={idRepo}
        showMoreTags={checkedTags.length > TAGS_SHOWN}
        moreTags={checkedTags.length - TAGS_SHOWN}
        tags={tags}
      />
    </div>
  )
}
