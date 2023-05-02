import { Button, Dropdown, Menu } from '@mergestat/blocks'
import { PlusIcon } from '@mergestat/icons'

const FilterExplore: React.FC = () => {
  return (
    <div className='flex px-8 py-4'>
      <Dropdown
        trigger={
          <Button label="Add Filter" skin="borderless" startIcon={<PlusIcon className="t-icon" />} />
        }
        overlay={(close) => (
          <Menu className='whitespace-nowrap'>
            <Menu.Item
              text="Repo Last Modified"
              onClick={close}
            />
            <Menu.Item
              text="File Last Modified"
              onClick={close}
            />
            <Menu.Item
              text="File Contents"
              onClick={close}
            />
            <Menu.Item
              text="Author"
              onClick={close}
            />

            <Menu.Divider />
            <Menu.Item
              text="Advanced Filter"
              onClick={close}
            />
          </Menu>
        )}
      />
    </div>
  )
}

export default FilterExplore
