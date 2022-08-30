import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { useCallback, useState } from 'react'
import { RepoExportT } from 'src/@types'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import { ADD_REPO } from 'src/utils/constants'
import { AddRepositoryFromCSVModal } from './add-repository-from-csv-modal'
import { AddRepositoryFromGitOrganizationModal } from './add-repository-from-git-organization-modal'
import { AddRepositoryFromGitUserModal } from './add-repository-from-git-user-modal'
import { AddRepositoryFromURLModal } from './add-repository-from-url-modal'
import { ModalFooter } from './modal-footer'
import { ModalSideBar } from './modal-sidebar'

export const AddRepositoryModal: React.FC = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()
  const [selectedTab, setSelectedTab] = useState<RepoExportT>(ADD_REPO.url)

  const close = useCallback(() => {
    setShowAddRepositoryModal(false)
  }, [setShowAddRepositoryModal])

  return (
    <Modal open onClose={close} size="lg" className="max-w-6xl">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Add Repositories</Modal.Title>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin="borderless-muted"
                onClick={close}
                startIcon={<XIcon className="t-icon" />}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full flex">
          <ModalSideBar onTabSelected={setSelectedTab} />
          {selectedTab === ADD_REPO.url && <AddRepositoryFromURLModal />}
          {selectedTab === ADD_REPO.csv && <AddRepositoryFromCSVModal />}
          {selectedTab === ADD_REPO.ghOrg && <AddRepositoryFromGitOrganizationModal />}
          {selectedTab === ADD_REPO.ghUser && <AddRepositoryFromGitUserModal />}
        </div>
      </Modal.Body>
      <ModalFooter selectedTab={selectedTab} />
    </Modal>
  )
}
