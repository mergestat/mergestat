import React from "react"
import {
  Button,
  Input,
  Modal,
  RadioCard,
  Toolbar,
} from "@mergestat/blocks"
import { GithubIcon, XIcon } from "@mergestat/icons"

type RadioType = {
  startIcon: React.ReactNode
  isSelected: boolean
  label: string
}

const AUTO_IMPORT_STATE: RadioType[] = [
  {
    startIcon: <GithubIcon />,
    isSelected: true,
    label: "Add from GitHub Org",
  },
  {
    startIcon: <GithubIcon />,
    isSelected: false,
    label: "Add from GitHub User",
  },
]

type SyncRepoModalProps = {
  onClose: () => void;
}

const SyncRepoModal = ({onClose}: SyncRepoModalProps) => {
  return (
    <Modal open onClose={onClose}>
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Sync repos</Modal.Title>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin="borderless-muted"
                startIcon={<XIcon className="t-icon" />}
                onClick={onClose}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full">
          <div>
            <p className="p-8 text-gray-500">
              This will automatically import all repos from your GitHub
              organization or GitHub User.
            </p>
          </div>
          <div className="p-8 pb-0">
            <p className="text-lg font-semibold mb-2">Choose method</p>
            <div className="flex gap-8">
              {AUTO_IMPORT_STATE.map((radio, index) => {
                return (
                  <RadioCard
                    key={index}
                    isSelected={radio.isSelected}
                    label={radio.label}
                    startIcon={radio.startIcon}
                    onChange={() => console.log("sdf")}
                  />
                )
              })}
            </div>
          </div>
          <div className="p-8 w-full">
            <p className="text-lg font-semibold mb-2">Organization name</p>
            <div className="flex w-full items-center gap-2">
              <Input placeholder="Organization name" />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin="secondary"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                className="ml-2"
                skin="primary"
                onClick={() => {
                  
                }}
              >
                Create Auto Import
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}

export default SyncRepoModal
