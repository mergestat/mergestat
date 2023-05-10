import { Button, Dropdown, Toolbar } from '@mergestat/blocks'
import { ChevronDownIcon, XIcon } from '@mergestat/icons'
import React, { PropsWithChildren, useEffect, useState } from 'react'

type FilterProps = PropsWithChildren<{
  label: string
  value?: string | number
  reset: () => void
  explore: () => void
}>

const Filter: React.FC<FilterProps> = ({ label, value, reset, explore, children }: FilterProps) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (value === undefined) {
      setShow(false)
    }
  }, [value])

  return (
    <div className='flex mr-3 my-1'>
      {!show && <Dropdown
        trigger={
          <Button isBlockBetween skin='secondary' label={label} className='whitespace-nowrap'
            endIcon={<ChevronDownIcon className="t-icon t-icon-muted" />}
          />
        }
        overlay={(close) => (
          <div className='mt-1 p-5 w-80 bg-white shadow-lg rounded-md border border-gray-200'>
            <h2 className='t-h2 mb-2'>{label}</h2>
            {children}
            <Toolbar className='mt-5'>
              <Toolbar.Right>
                <div className='t-button-toolbar'>
                  <Button skin='secondary' label='Reset' onClick={close} />
                  <Button label='Apply' disabled={!value} onClick={() => {
                    setShow(true)
                    explore()
                    close()
                  }} />
                </div>
              </Toolbar.Right>
            </Toolbar>
          </div>
        )}
      />}

      {show && <div className='flex border inline-flex items-center py-1 px-3 rounded t-button-secondary'>
        <span className='mr-2'>{label}</span>
        <div className='border-l border-r border-gray-200 px-2 text-gray-500'>{value}</div>
        <Button isIconOnly
          className='ml-2 p-0'
          skin='borderless'
          startIcon={<XIcon className="t-icon text-gray-500" />}
          onClick={() => {
            setShow(false)
            reset()
          }}
        />
      </div>}
    </div>
  )
}

export default Filter
