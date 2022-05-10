import { Label, Panel, Select, Toggle, Typography } from '@mergestat/blocks'
import React, { Children } from 'react'

export const SyncSettingsForm = () => {
  return (
    <Panel className=" bg-white rounded p-4">
      <Panel.Header>
        <Typography.Title>Sync settings</Typography.Title>
      </Panel.Header>
      <Panel.Body>
        <form className=" flex flex-col gap-2">
          <Formrow>
            <Label>Sync data</Label>
            <div className=" w-64 flex gap-2 items-center">
              <Toggle isChecked onChange={() => {}} />
              <span className=" text-sm font-semibold"> Enable</span>
            </div>
          </Formrow>
          <Formrow>
            <Label>Sync frequency</Label>
            <Select className=" w-64 bg-white">
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
              <Select.Option value="option4">Option 4</Select.Option>
              <Select.Option value="option5">Option 5</Select.Option>
            </Select>
          </Formrow>
          <Formrow>
            <Label>Label</Label>
            <Select className=" w-64 bg-white">
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
              <Select.Option value="option4">Option 4</Select.Option>
              <Select.Option value="option5">Option 5</Select.Option>
            </Select>
          </Formrow>
        </form>
      </Panel.Body>
    </Panel>
  )
}

const Formrow: React.FC = (props) => {
  return (
    <div className=" flex items-center justify-between w-full max-w-md">
      {props.children}
    </div>
  )
}
