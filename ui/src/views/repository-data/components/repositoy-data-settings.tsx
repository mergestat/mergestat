import { Button, MultiSelect, Panel, Tabs } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useState } from 'react'

const tags: {
  title: string
  checked: boolean
}[] = [
  { title: 'team-a', checked: true },
  { title: 'javascript', checked: true },
  { title: 'team-a', checked: true },
  { title: 'team-a', checked: true },
  { title: 'team-a', checked: true },
  { title: 'team-a', checked: false },
]

export const RepositorySettings: React.FC = (props) => {
  return (
    <>
      <Panel>
        <Panel.Header>
          <h3 className="t-panel-title">Tags</h3>
        </Panel.Header>
        <Panel.Body>
          <MultiSelect setStateToProps={tags} />
        </Panel.Body>
      </Panel>
      <Button
        skin="secondary"
        startIcon={<TrashIcon className=" w-4 h-4 mt-0.5" />}
        className=" mt-6 text-red-500 flex gap-2"
      >
        Delete Repository
      </Button>
    </>
  )
}