import React, { useState } from "react"
import dynamic from "next/dynamic"
import { Button, Modal, RadioCard, Toolbar } from "@mergestat/blocks"
import { GithubIcon, LinkIcon, TableIcon, XIcon } from "@mergestat/icons"

const AddFromUrl = dynamic(() => import('./AddFromUrl'))
const AddFromGitOrg = dynamic(() => import('./AddFromOrg'))
const AddFromGitUser = dynamic(() => import('./AddFromUser'))
const AddFromCsv = dynamic(() => import('./AddFromCsv'))

enum ADD_REPO_METHOD {
  URL,
  GH_ORG,
  GH_USER,
  CSV
}

type MethodRadioType = {
  startIcon: React.ReactNode
  label: string
  type: ADD_REPO_METHOD
}

const METHOD_RADIO_GROUP: MethodRadioType[] = [
  {
    startIcon: <LinkIcon />,
    label: "Add from URL",
    type: ADD_REPO_METHOD.URL
  },
  {
    startIcon: <GithubIcon />,
    label: "Add from GitHub org",
    type: ADD_REPO_METHOD.GH_ORG
  },
  {
    startIcon: <GithubIcon />,
    label: "Add from GitHub user",
    type: ADD_REPO_METHOD.GH_USER
  },
  {
    startIcon: <TableIcon />,
    label: "Add Add from CSV",
    type: ADD_REPO_METHOD.CSV
  },
]

type AddRepoModalPropsT = {
  handleOnClose: () => void;
};

const AddRepoModal = ({
  handleOnClose,
}: AddRepoModalPropsT) => {
  const [addRepoMethod, setAddRepoMethod] = useState<ADD_REPO_METHOD>(ADD_REPO_METHOD.URL)
  const [addButtonText, setAddButtonText] = useState<string>("Add Repository")

  return (
    <Modal open onClose={handleOnClose} size="lg">
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
                onClick={handleOnClose}
                startIcon={<XIcon className="t-icon" />}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full flex">
          <div className="border-r-gray-400 border-r p-8">
            <p className="text-lg font-semibold mb-8">Choose method</p>
            {METHOD_RADIO_GROUP.map((radio, index) => {
              return (
                <RadioCard
                  key={index}
                  className="mb-2"
                  isSelected={radio.type === addRepoMethod}
                  label={radio.label}
                  startIcon={radio.startIcon}
                  onChange={() => setAddRepoMethod(radio.type)}
                />
              )
            })}
          </div>
          {addRepoMethod === ADD_REPO_METHOD.GH_ORG ? (
            <AddFromGitOrg setAddButtonText={setAddButtonText} />
          ) : addRepoMethod === ADD_REPO_METHOD.GH_USER ? (
            <AddFromGitUser setAddButtonText={setAddButtonText} />
          ) : addRepoMethod === ADD_REPO_METHOD.CSV ? (
            <AddFromCsv setAddButtonText={setAddButtonText} />
          ) : (
            <AddFromUrl setAddButtonText={setAddButtonText} />
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button skin="secondary" onClick={handleOnClose}>
                Cancel
              </Button>
              <Button
                className="ml-2"
                skin="primary"
                disabled={true}
                onClick={handleOnClose}
              >
                {addButtonText}
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}

export default AddRepoModal
