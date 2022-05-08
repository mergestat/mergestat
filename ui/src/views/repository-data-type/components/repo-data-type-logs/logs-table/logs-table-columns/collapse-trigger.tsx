import { CaretDownIcon, CaretLeftIcon, CaretRightIcon } from '@mergestat/icons'
import React, { useState } from 'react'

type collapseTriggerProps = {
  collapsed: boolean,
  onClick?: () => void
}
export const CollapseTrigger: React.FC<collapseTriggerProps> = (props) => {
  const { collapsed, onClick } = props
  const [open, setOpen] = useState(collapsed)
  const handleClick = () => {
    setOpen(prev => !prev)
    onClick && onClick()
  }
  return (
    <div onClick={handleClick}>
      {open && <CaretDownIcon className=' text-gray-600'/>}
      {!open && <CaretRightIcon className=' text-gray-600' />}
    </div>

  )
}
