import React, { useState } from "react"
import dynamic from "next/dynamic"
import { Button, Modal, RadioCard, Toolbar } from "@mergestat/blocks"
import { GithubIcon, LinkIcon, TableIcon, XIcon } from "@mergestat/icons"
import { ADD_REPO_METHOD, useReposContext } from './useAddRepoContext'

const AddFromUrl = dynamic(() => import('./AddFromUrl'))
const AddFromGitOrg = dynamic(() => import('./AddFromOrg'))
const AddFromGitUser = dynamic(() => import('./AddFromUser'))
const AddFromCsv = dynamic(() => import('./AddFromCsv'))

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
}

const AddRepoModal = ({
  handleOnClose,
}: AddRepoModalPropsT) => {
  const [{ addRepoMethod, addedRepos }, setReposState] = useReposContext()

  const [repoCount, setRepoCount] = useState<number>(0)

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
                  onChange={() => {
                    setReposState(prevState => ({
                      ...prevState,
                      addRepoMethod: radio.type
                    }))
                  }}
                />
              )
            })}
          </div>
          {addRepoMethod === ADD_REPO_METHOD.GH_ORG ? (
            <AddFromGitOrg setRepoCount={setRepoCount} />
          ) : addRepoMethod === ADD_REPO_METHOD.GH_USER ? (
            <AddFromGitUser setRepoCount={setRepoCount} />
          ) : addRepoMethod === ADD_REPO_METHOD.CSV ? (
            <AddFromCsv setRepoCount={setRepoCount} />
          ) : (
            <AddFromUrl />
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
                disabled={
                  addRepoMethod === ADD_REPO_METHOD.URL
                    ? addedRepos.length === 0
                    : true
                }
                onClick={handleOnClose}
              >
                {addRepoMethod === ADD_REPO_METHOD.URL ? (
                  addedRepos.length === 0 ? 'Add Repository' : `Add ${addedRepos.length} Repositories`
                ) : (
                  'Add Repository'
                )}
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}

export default AddRepoModal
