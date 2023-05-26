import { Button, Dropdown, Toolbar } from '@mergestat/blocks'
import { ChevronDownIcon, XIcon } from '@mergestat/icons'
import React, { PropsWithChildren, useEffect, useState } from 'react'

type FilterProps = PropsWithChildren<{
  label: string
  value?: string | number
  reset: () => void
  explore: () => void
  overlay: (close: () => void, show: () => void) => React.ReactNode
}>

const Filter: React.FC<FilterProps> = ({ label, value, reset, explore, overlay }: FilterProps) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    console.log('Value for: ', label, ': ', value)
    if (value === undefined) {
      setShow(false)
      console.log('Entre!!')
    }
  }, [value])

  return (
    <div className='flex mr-2 my-1'>
      <Dropdown
        trigger={!show
          ? <Button isBlockBetween skin='secondary' label={label} className='whitespace-nowrap t-button-small'
              endIcon={<ChevronDownIcon className="t-icon t-icon-muted" />}
            />
          : <div className='border inline-flex items-center rounded t-button-small t-button-secondary pr-1 cursor-pointer'>
              <span className='pr-1.5 font-medium'>{label}</span>
              <div className='border-l border-r border-gray-200 font-medium px-1.5 text-gray-500'>{value}</div>
              <Button isIconOnly
                className='mx-0 py-0 pl-0.5'
                skin='borderless'
                startIcon={<XIcon className="t-icon text-gray-500" />}
                onClick={(e) => {
                  e.preventDefault()
                  setShow(false)
                  reset()
                }}
              />
            </div>
        }
        overlay={(close) => (
          <div className='mt-1 p-5 w-80 bg-white shadow-lg rounded-md border border-gray-200'>
            {/* Header */}
            <h4 className='t-h4 mb-2'>{label}</h4>

            {/* Body */}
            {overlay(
              close,
              () => setShow(true)
            )}

            {/* Bottom buttons */}
            <Toolbar className='mt-5'>
              <Toolbar.Right>
                <div className='t-button-toolbar'>
                  <Button skin='secondary' label='Reset' onClick={reset} />
                  <Button
                    label='Apply'
                    disabled={!value}
                    onClick={() => {
                      value && setShow(true)
                      explore()
                      close()
                    }}
                  />
                </div>
              </Toolbar.Right>
            </Toolbar>
          </div>
        )}
      />
    </div>
  )
}

export default Filter
