import { Button, Modal, Toolbar } from '@mergestat/blocks'
import React from 'react'

type ModalFooterProps={
  onClose:()=>void
}
export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  return (
    <Modal.Footer>
      <Toolbar className="h-16 px-6">
        <Toolbar.Right>
          <Toolbar.Item>
            <Button skin="secondary" onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              className="ml-2"
              skin="primary"
              onClick={props.onClose}
            >
              Applay Filter
            </Button>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>
    </Modal.Footer>
  )
}
