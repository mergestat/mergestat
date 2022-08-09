import { Button, Modal, Toolbar } from '@mergestat/blocks'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'

type ModalFooterProps = {
  selectedTab: 'url' | 'gh-org' | 'gh-user' | 'csv'
}

export const ModalFooter: React.FC<ModalFooterProps> = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()

  const close = React.useCallback(() => {
    setShowAddRepositoryModal(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isActionDisabled = React.useMemo(() => true, [])

  return (
    <Modal.Footer>
      <Toolbar className="h-16 px-6">
        <Toolbar.Right>
          <Toolbar.Item>
            <Button skin="secondary" onClick={close}>
              Cancel
            </Button>
            <Button
              className="ml-2"
              skin="primary"
              disabled={isActionDisabled}
              onClick={close}
            >
              Add Repository
            </Button>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>
    </Modal.Footer>
  )
}
