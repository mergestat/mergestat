import { Alert, Button, Modal, Toolbar } from '@mergestat/blocks'
import { ChevronRightIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { useContainerSyncDetailContext, useContainerSyncDetailSetState } from 'src/state/contexts/container-sync-detail.context'

export const EnableAllReposModal: React.FC = () => {
  const [{ gitSourceToEnable, containerSyncDetail: { name } }] = useContainerSyncDetailContext()
  const { setShowEnableAllReposModal } = useContainerSyncDetailSetState()

  const close = useCallback(() => {
    setShowEnableAllReposModal(false)
  }, [setShowEnableAllReposModal])

  return (
    <Modal open onClose={close}>
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Confirm enabling for all repos</Modal.Title>
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
      <Modal.Body className='p-6'>
        <div>
          Do you want to enable the scheduling of <strong className="font-semibold text-gray-800">{name}</strong>{' '}
          for all 50 repos inside the <strong className="font-semibold text-gray-800">{gitSourceToEnable.name}</strong> git source?
        </div>

        <Alert type='default' theme='light' className='mt-6'>
          <p>You can enable the scheduling by default for all repos inside a git source in the Git Source settings.</p>
          <Button
            label='Manage Git Source'
            skin='borderless'
            size='small'
            className='whitespace-nowrap text-blue-600 mt-2'
            endIcon={<ChevronRightIcon className='t-icon' />}
            onClick={() => null}
          />
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin="secondary"
                onClick={close}
                className="my-3 mr-3"
              >
                Cancel
              </Button>
              <Button
                skin="primary"
                onClick={() => null}
                className="my-3"
              >
                Enable For All
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
