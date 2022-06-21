import { Label, Panel, Select, Toggle, Typography } from '@mergestat/blocks'
import React from 'react'

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
              <Toggle isChecked onChange={() => { }} />
              <span className="text-semantic-text">Enable</span>
            </div>
          </Formrow>
          <Formrow>
            <Label className='text-gray-600 font-medium'>Sync frequency</Label>
            <Select className="w-64 bg-white">
              {Array(4).fill(0).map((_, i) => (
                <Select.Option
                  key={i}
                  className='text-semantic-text'
                  value="option1"
                >
                  Option {i+1}
                </Select.Option>
              ))}
            </Select>
          </Formrow>
          <Formrow>
            <Label className='text-gray-600 font-medium'>Label</Label>
            <Select className="w-64 bg-white">
              {Array(5).fill(0).map((_, i) => (
                <Select.Option
                  key={i}
                  className='text-semantic-text'
                  value="option1"
                >
                  Option {i+1}
                </Select.Option>
              ))}
            </Select>
          </Formrow>
        </form>
      </Panel.Body>
    </Panel>
  )
}

const Formrow: React.FC = (props) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md">
      {props.children}
    </div>
  )
}
