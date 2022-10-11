import { Label, Panel, Toggle, Typography } from '@mergestat/blocks'
import React, { PropsWithChildren } from 'react'

export const SyncSettingsForm = () => {
  return (
    <Panel className="shadow-sm">
      <Panel.Header>
        <Typography.Title className='text-semantic-header font-semibold'>Sync settings</Typography.Title>
      </Panel.Header>
      <Panel.Body>
        <form className="flex flex-col gap-2">
          <Formrow>
            <Label className='text-gray-600 font-medium'>Sync data</Label>
            <div className="w-64 flex gap-2 items-center">
              <Toggle isChecked onChange={() => null} />
              <span className="text-semantic-text">Enable</span>
            </div>
          </Formrow>
        </form>
      </Panel.Body>
    </Panel>
  )
}

const Formrow: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md">
      {props.children}
    </div>
  )
}
