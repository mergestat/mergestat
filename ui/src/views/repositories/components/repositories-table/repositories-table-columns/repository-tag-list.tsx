import React from 'react'
import { tagType } from 'src/@types'
import { EditTagsListDropDown } from 'src/views/repositories/drop-downs'

type RepositoryTagItemProps = tagType

export const RepositoryTagItem: React.FC<RepositoryTagItemProps> = (props) => {
  return (
    <div className="border border-samantic-border rounded-md px-2 py-1 text-gray-500 text-sm w-max bg-gray-50 cursor-pointer">
      {props.title}
    </div>
  )
}

export type RepositoryTagListProps = {
  tags: Array<tagType>
}

export const RepositoryTagList: React.FC<RepositoryTagListProps> = (props) => {
  const { tags } = props
  const TAGS_SHOWN = 2
  const checkedTags = tags.filter((tag) => tag.checked)

  return (
    <React.Fragment>
      <div className="flex gap-2">
        {checkedTags.slice(0, TAGS_SHOWN).map(
          (tag, index) => (
            <RepositoryTagItem key={index} {...tag} />
          )
        )
        }
        {checkedTags.length > TAGS_SHOWN && (
          <div className="flex items-center gap-x-2 border border-samantic-border rounded px-2 text-sm w-max bg-gray-100 cursor-pointer">
            <div className="flex items-center text-gray-500">
              <span>+{checkedTags.length - TAGS_SHOWN}</span>
            </div>
            <EditTagsListDropDown tags={tags} />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
