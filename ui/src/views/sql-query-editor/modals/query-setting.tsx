import { Button, Modal, Toggle, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { useCallback, useState } from 'react'
import { useQueryContext, useQuerySetState } from 'src/state/contexts'
import { MSM_NON_READ_ONLY } from 'src/utils/constants'

export const QuerySettingsModal: React.FC = () => {
  const [{ readOnly }] = useQueryContext()
  const { setShowSettingsModal, setReadOnly } = useQuerySetState()
  const [readOnlyLocal, setReadOnlyLocal] = useState(readOnly)

  const close = useCallback(() => {
    setShowSettingsModal(false)
  }, [setShowSettingsModal])

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Query Settings</Modal.Title>
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
        <div className='flex px-6 py-6'>
          <div className='flex justify-center mt-1'>
            <Toggle isChecked={readOnlyLocal} onChange={(value) => setReadOnlyLocal(value)} />
          </div>
          <div className='flex flex-col pl-4'>
            <span className='text-gray-600 mb-2'>Read-only</span>
            <span className='text-gray-500 text-sm'>{MSM_NON_READ_ONLY}</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button skin="secondary" onClick={close} className="my-3 mr-3" >
                Cancel
              </Button>
              <Button className="my-3"
                onClick={() => {
                  setReadOnly(readOnlyLocal)
                  close()
                }}
              >
                Save
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
