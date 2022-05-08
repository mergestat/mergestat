import { PlusIcon } from "@mergestat/icons"
import React from "react"
import { EditTagsListDropDown } from "src/views/repositories/drop-downs"


type RepositoryTagItemProps = {
    title: string
    checked: boolean
    index: number
  }
  
  export const RepositoryTagItem: React.FC<RepositoryTagItemProps> = (props) => {
    return (
      <div key={props.index} className="">
        {props.index < 2 && (
          <div className="border border-gray-300 rounded px-2 py-1 text-sm w-max bg-gray-100 cursor-pointer">
            {props.title}
          </div>
        )}
      </div>
    )
  }
  
  export type RepositoryTagListProps = {
    tags: Array<{ title: string; checked: boolean }>
  }
  
  export const RepositoryTagList: React.FC<RepositoryTagListProps> = (props) => {
    const { tags } = props
    return (
      <React.Fragment>
        <div className='flex gap-2 '>
          {tags
            .filter((tag) => tag.checked).slice(0, 2)
            .map((tag, index) => (
              <RepositoryTagItem key={index} index={index} {...tag} />
            ))
          }
          {
            tags.length > 2 &&
            <div className="flex items-center gap-x-2 border border-gray-300 rounded px-2 text-sm w-max bg-gray-100 cursor-pointer">
              <div className=' flex items-center'>
                <PlusIcon className='w-3 h-3 text-gray-900 mt-1 ' />
                <span>{tags.length - 2}</span>
              </div>
              <EditTagsListDropDown tags={tags} />
            </div>
          }
        </div>
  
      </React.Fragment>
    )
  }
  