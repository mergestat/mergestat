import {
  Button,
  Checkbox,
  Dropdown,
  Filter,
  Input,
  Menu,
} from '@mergestat/blocks'
import { PlusIcon, SearchIcon, XIcon } from '@mergestat/icons'

export const TagsFilterDropDown: React.FC = (props) => {
  const tags: Array<{ title: string; checked: boolean }> = [
    { title: 'javascript', checked: true },
    { title: 'node', checked: false },
    { title: 'dom', checked: true },
    { title: 'c++', checked: false },
  ]
  return (
    <Dropdown
      overlay={() => (
        <Menu className=" relative z-50 rounded max-w-xs w-full p-4 flex flex-col gap-y-4 ">
          <h4 className=" font-semibold">Tags</h4>
          <label className="relative">
            <SearchIcon className="t-icon absolute left-2 text-gray-400" />
            <Input placeholder="Search..." className="pl-8" />
          </label>
          {tags.map((tag, index) => (
            <div key={index} className=" flex items-center gap-x-3 text-sm">
              <Checkbox
                checked={tag.checked}
                onChange={(e) => {
                  const checked = e.currentTarget.checked
                }}
              />
              <span>{tag.title}</span>
            </div>
          ))}

          <Button className=" w-full flex justify-center">Filter</Button>
        </Menu>
      )}
      trigger={<Filter>Tags</Filter>}
    />
  )
}
