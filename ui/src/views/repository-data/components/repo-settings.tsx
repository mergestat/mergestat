import { Button, MultiSelect, Panel } from '@mergestat/blocks'
import { TrashIcon } from '@mergestat/icons'
import React from 'react'
import { TagType } from 'src/@types'
import { useRepositoriesSetState } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import useTags from 'src/views/hooks/useTags'

type RepoSettingsProps = {
  id: string
  name: string
  tags: TagType[]
  autoImported: boolean
}

export const RepoSettings: React.FC<RepoSettingsProps> = ({ id, name, tags, autoImported }: RepoSettingsProps) => {
  const { setShowRemoveRepositoryModal, setRepoToRemove } = useRepositoriesSetState()
  const { saveTags } = useTags()

  const prepareToRemove = () => {
    setRepoToRemove({ id, name, autoImported, redirect: true })
    setShowRemoveRepositoryModal(true)
  }

  return (
    <>
      <Panel className="overflow-visible">
        <Panel.Header>
          <h3 className="t-panel-title">Tags</h3>
        </Panel.Header>
        <Panel.Body>
          <MultiSelect setStateToProps={tags} getState={(tags) => saveTags(id, tags)} />
        </Panel.Body>
      </Panel>
      <Button
        skin="danger"
        data-testid={TEST_IDS.removeRepoButton}
        startIcon={<TrashIcon className="t-icon" />}
        className="mt-6"
        onClick={prepareToRemove}
      >
        Remove Repository
      </Button>
    </>
  )
}
