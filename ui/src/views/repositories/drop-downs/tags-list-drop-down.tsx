import React, { useId, useState } from 'react'
import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Menu,
} from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import { TagListFilterModal } from '../modals'
import { TagType } from 'src/@types'


type TagsListDropDownProps = {
  trigger?: JSX.Element,
}
export const TagsListDropDown: React.FC<TagsListDropDownProps> = (props) => {
  const [tags, setTags] = useState(allTags)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>("")
  const id = useId()

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
        <Menu className="relative z-50 rounded w-80 flex flex-col shadow">
          <div className="p-4">
            <h4 className="font-semibold mb-3">Tags</h4>
            <Input
              placeholder="Search..."
              startIcon={<SearchIcon className="t-icon text-gray-400" />}
              value={searchText}
              onChange={(e: any) => handleSearch(e.target.value)}
            />
          </div>
          {tags.slice(0, 7).map((tag, index) => (
            <div key={`${id}-${index}`} className="t-menu-item my-0">
              <Checkbox
                className="cursor-pointer py-1.5"
                label={tag.title}
                checked={tag.checked}
                onClick={() => handleCheck(tag.checked, index)}
                onChange={(e) => {
                  const checked = e.currentTarget.checked
                }}
              />
            </div>
          ))}
          <div className="px-4 py-2">
            <Button
              onClick={() => setModalOpen(true)}
              skin="borderless"
              size="small"
            >
              Show more
            </Button>
          </div>
          <TagListFilterModal
            searchText={searchText}
            tags={tags}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            handleCheck={handleCheck}
            handleSearch={handleSearch}
          />
          <Menu.Divider />
          <div className="t-button-toolbar px-4 py-2">
            <Button skin="secondary" className="flex-1 justify-center">Reset</Button>
            <Button className="flex-1 justify-center">Apply Filter</Button>
          </div>
        </Menu>
      )}
      trigger={props.trigger}
      zIndex={11}
    />
  )
}

const allTags: TagType[] = [
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
