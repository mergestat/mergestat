import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Menu,
} from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import { TagListFilterModal } from '../modals'
import { tagType } from 'src/@types'


type TagsListDropDownProps = {
  trigger?: JSX.Element,
}
export const TagsListDropDown: React.FC<TagsListDropDownProps> = (props) => {
  const [tags, setTags] = useState(allTags)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>("")

  const handleCheck = (checked: boolean, index: number) => {
    setTags(prev => prev.map((tag, i) => {
      return i != index ? tag : { ...tag, checked: !checked }
    }))
  }
  const handleSearch = (text: string) => {
    setSearchText(text)

    const startPoint = 2
    if (!text || text.length < startPoint) {
      setTags(allTags)
      return
    }
    setTags(prev => prev.filter(t => t.title.includes(text)))
  }

  return (
    <Dropdown
      overlay={() => (
        <Menu className="relative z-50 rounded w-80 p-4 flex flex-col gap-y-4">
          <h4 className="font-semibold">Tags</h4>
          <Input
            placeholder="Search..."
            startIcon={<SearchIcon className="t-icon text-gray-400" />}
            value={searchText}
            onChange={(e: any) => handleSearch(e.target.value)}
          />
          {tags.slice(0, 7).map((tag, index) => (
            <div key={index} className="flex items-center gap-x-3 text-sm">
              <Checkbox
                checked={tag.checked}
                onClick={() => handleCheck(tag.checked, index)}
                onChange={(e) => {
                  const checked = e.currentTarget.checked
                }}
              />
              <span>{tag.title}</span>
            </div>
          ))}
          <span
            className='text-blue-600 font-medium cursor-pointer'
            onClick={() => setModalOpen(true)}
          >
            Show more
          </span>
          <TagListFilterModal
            searchText={searchText}
            tags={tags}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            handleCheck={handleCheck}
            handleSearch={handleSearch}
          />
          <Menu.Divider />
          <Button className="w-full flex justify-center">Filter</Button>
        </Menu>
      )}
      trigger={props.trigger}
    />
  )
}

const allTags: tagType[] = [
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
  { title: 'javascript', checked: true },
  { title: 'node', checked: false },
  { title: 'dom', checked: true },
  { title: 'c++', checked: false },
]
