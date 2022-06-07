import React, { useState } from 'react'
import { Button, Input, Modal, Label, RadioCard, Toolbar } from '@mergestat/blocks'
import { GithubIcon, XIcon } from '@mergestat/icons'

enum SYNC_REPO_METHOD {
  GH_ORG,
  GH_USER,
}

type ImportRadioType = {
  startIcon: React.ReactNode
  label: string
  type: SYNC_REPO_METHOD
}

const IMPORT_TYPE_RADIO_GROUP: ImportRadioType[] = [
  {
    startIcon: <GithubIcon className='t-icon' />,
    label: 'Add from GitHub Org',
    type: SYNC_REPO_METHOD.GH_ORG,
  },
  {
    startIcon: <GithubIcon className='t-icon' />,
    label: 'Add from GitHub User',
    type: SYNC_REPO_METHOD.GH_USER,
  },
]

type SyncRepoModalProps = {
  onClose: () => void
}

export const SyncAutoImportReposModal = ({ onClose }: SyncRepoModalProps) => {
  const [importType, setImportType] = useState<SYNC_REPO_METHOD>(
    SYNC_REPO_METHOD.GH_ORG
  )

  return (
    <Modal open onClose={onClose} modalWrapperClassName="z-50">
      <Modal.Header>
        <Toolbar className="h-16 px-8">
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
        <div className="w-full p-8">
          <div>
            <p className="text-gray-500 mb-6">
              This will automatically import all repos from your GitHub
              organization or GitHub User.
            </p>
          </div>
          <div className="mb-6">
            <Label className="mb-1">Import type</Label>
            <div className="flex gap-4">
              {IMPORT_TYPE_RADIO_GROUP.map((radio, index) => {
                return (
                  <RadioCard
                    key={index}
                    isSelected={radio.type === importType}
                    label={radio.label}
                    startIcon={radio.startIcon}
                    onChange={() => setImportType(radio.type)}
                    className="w-full"
                  />
                )
              })}
            </div>
          </div>
          <div>
            <Label>
              {importType === SYNC_REPO_METHOD.GH_ORG
                ? 'Organization name'
                : 'User name'}
            </Label>
            <div className="flex w-full items-center gap-2">
              <Input
                placeholder={
                  importType === SYNC_REPO_METHOD.GH_ORG
                    ? 'organization-name'
                    : 'user-name'
                }
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button skin="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button
                className="ml-2"
                skin="primary"
                onClick={() => {
                  onClose()
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
