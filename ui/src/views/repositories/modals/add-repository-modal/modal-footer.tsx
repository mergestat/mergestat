import { Button, Modal, Toolbar } from '@mergestat/blocks'
import React from 'react'
import { useRepositoriesContext } from 'src/state/contexts/repositories.context'

type ModalFooterProps = {
  selectedTab: 'url' | 'gh-org' | 'gh-user' | 'csv'
}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  const { setShowAddRepositoryModal } = useRepositoriesContext()

  const close = React.useCallback(() => {
    setShowAddRepositoryModal(false)
  }, [])

  const isActionDisabled = React.useMemo(() => true, [props.selectedTab])

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
