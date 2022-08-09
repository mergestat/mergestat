import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import { AddRepositoryFromCSVModal } from './add-repository-from-csv-modal'
import { AddRepositoryFromGitOrganizationModal } from './add-repository-from-git-organization-modal'
import { AddRepositoryFromGitUserModal } from './add-repository-from-git-user-modal'
import { AddRepositoryFromURLModal } from './add-repository-from-url-modal'
import { ModalFooter } from './modal-footer'
import { ModalSideBar } from './modal-sidebar'

export const AddRepositoryModal: React.FC = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()

  // TODO: make this type global once we have the graphql api
  const [selectedTab, setSelectedTab] = React.useState<
    'url' | 'gh-org' | 'gh-user' | 'csv'
  >('url')

  const close = React.useCallback(() => {
    setShowAddRepositoryModal(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal open onClose={close} size="lg" className="max-w-6xl">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Add Repository</Modal.Title>
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
          {selectedTab === 'csv' && <AddRepositoryFromCSVModal />}
          {selectedTab === 'gh-org' && (
            <AddRepositoryFromGitOrganizationModal />
          )}
          {selectedTab === 'gh-user' && <AddRepositoryFromGitUserModal />}
          {selectedTab === 'url' && <AddRepositoryFromURLModal />}
        </div>
      </Modal.Body>
      <ModalFooter selectedTab={selectedTab} />
    </Modal>
  )
}
