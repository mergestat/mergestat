import { Label, Textarea } from '@mergestat/blocks'
import React from 'react'

export const AddRepositoryFromCSVModal: React.FC = (props) => {
  const onChange = React.useCallback(() => {}, [])

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-1">
        <h3 className="t-h3 mb-6">Add from CSV</h3>
        <Label>Paste CSV</Label>
      </div>
      <Textarea className="h-84" defaultValue={''} onChange={onChange} />
    </div>
  )
}
