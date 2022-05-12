import { PlusIcon } from '@mergestat/icons'
import React from 'react'
import { tagType } from 'src/@types'
import { EditTagsListDropDown } from 'src/views/repositories/drop-downs'

type RepositoryTagItemProps = tagType

export const RepositoryTagItem: React.FC<RepositoryTagItemProps> = (props) => {
  return (
    <div className="flex gap-1.5 items-center border border-gray-300 rounded px-2 py-1 text-sm w-max bg-gray-100 cursor-pointer">
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: props.color }} />
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

  return (
    <React.Fragment>
      <div className="flex gap-2 ">
        {tags
          .filter((tag) => tag.checked)
          .slice(0, TAGS_SHOWN)
          .map((tag, index) => (
            <RepositoryTagItem key={index} {...tag} />
          ))
        }
        {tags.length > 2 && (
          <div className="flex items-center gap-x-2 border border-gray-300 rounded px-2 text-sm w-max bg-gray-100 cursor-pointer">
            <div className="flex items-center">
              <PlusIcon className="w-3 h-3 text-gray-900 mt-1 " />
              <span>{tags.length - TAGS_SHOWN}</span>
            </div>
            <EditTagsListDropDown tags={tags} />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
