import { Button, MultiSelect, Panel } from '@mergestat/blocks'
import { TrashIcon } from '@mergestat/icons'
import React from 'react'
import { TagType } from 'src/@types'

const tags: TagType[] = [
  { title: 'team-a', checked: true },
  { title: 'javascript', checked: true },
  { title: 'team-a', checked: true },
  { title: 'team-a', checked: true },
  { title: 'team-a', checked: true },
  { title: 'team-a', checked: false },
]

export const RepoSettings: React.FC = () => {
  return (
    <>
      <Panel className="overflow-visible">
        <Panel.Header>
          <h3 className="t-panel-title">Tags</h3>
        </Panel.Header>
        <Panel.Body>
          <MultiSelect setStateToProps={tags} />
        </Panel.Body>
      </Panel>
      <Button
        skin="danger"
        startIcon={<TrashIcon className="t-icon" />}
        className="mt-6"
      >
        Delete Repository
      </Button>
    </>
  )
}
