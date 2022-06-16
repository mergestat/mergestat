import React from 'react'
import { TagType } from 'src/@types'
import { EditTagsListDropDown } from 'src/views/repositories/drop-downs'
import { Badge } from '@mergestat/blocks'

type RepositoryTagItemProps = TagType

export const RepositoryTagItem: React.FC<RepositoryTagItemProps> = (props) => {
  return (
    <Badge
      label={props.title}
      />
  )
}

export type RepositoryTagListProps = {
  tags: Array<TagType>
}

export const RepositoryTagList: React.FC<RepositoryTagListProps> = (props) => {
  const { tags } = props
  const TAGS_SHOWN = 2
  const checkedTags = tags.filter((tag) => tag.checked)

  return (
    <div className="flex gap-2 ml-6">
      {checkedTags.slice(0, TAGS_SHOWN).map(
        (tag, index) => (
          <RepositoryTagItem key={index} {...tag} />
        )
      )}
      <div className="flex items-center gap-x-2 border border-samantic-border rounded px-2 w-max bg-gray-100 cursor-pointer">
        {checkedTags.length > TAGS_SHOWN && (
          <div className="text-sm font-medium text-gray-500">
            <span>+{checkedTags.length - TAGS_SHOWN}</span>
          </div>
        )}
        <EditTagsListDropDown tags={tags} />
      </div>
    </div>
  )
}
