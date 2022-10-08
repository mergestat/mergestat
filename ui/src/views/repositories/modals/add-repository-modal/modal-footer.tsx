/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import React from 'react'
import { RepoExportT } from 'src/@types'
import { useRepositoriesContext } from 'src/state/contexts'
import { ADD_REPO as ADD_REPO_ENUM, TEST_IDS } from 'src/utils/constants'
import useAddRepos from 'src/views/hooks/useAddRepos'
import useImports from 'src/views/hooks/useImports'

interface ModalFooterProps {
  selectedTab: RepoExportT
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ selectedTab }) => {
  const [{ reposToAdd, csvText, imports }] = useRepositoriesContext()
  const { addFromURL, addFromCSV, closeModal } = useAddRepos()
  const { addImports } = useImports()

  return (
    <Modal.Footer>
      <Toolbar className="h-16 px-6">
        <Toolbar.Right>
          <Toolbar.Item>
            <Button skin="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              className="ml-2"
              skin="primary"
              data-testid={TEST_IDS.addRepoToDbButton}
              disabled={
                (selectedTab === ADD_REPO_ENUM.url && reposToAdd.length === 0) ||
                (selectedTab === ADD_REPO_ENUM.csv && csvText === '') ||
                (selectedTab === ADD_REPO_ENUM.ghAuto && imports.length === 0)
              }
              onClick={() => {
                selectedTab === ADD_REPO_ENUM.url && addFromURL()
                selectedTab === ADD_REPO_ENUM.csv && addFromCSV()
                selectedTab === ADD_REPO_ENUM.ghAuto && addImports()
              }}
            >
              Add Repositories
            </Button>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>
    </Modal.Footer>
  )
}
