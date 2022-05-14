import { Button, MultiSelect, Panel, Tabs } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useState } from 'react'
import { tagType } from 'src/@types'

const tags: tagType[] = [
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
        startIcon={<TrashIcon className="w-4 h-4" />}
        className="mt-6 text-samantic-danger flex gap-2"
      >
        Delete Repository
      </Button>
    </>
  )
}