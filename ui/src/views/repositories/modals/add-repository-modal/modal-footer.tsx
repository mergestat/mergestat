import { ApolloError, useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import React, { useCallback, useEffect, useState } from 'react'
import { RepoExportT } from 'src/@types'
import ADD_REPO from 'src/api-logic/graphql/mutations/add-repo'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import { showErrorAlert, showSuccessAlert, showWarningAlert } from 'src/utils/alerts'
import { TEST_IDS } from 'src/utils/constants'

type ModalFooterProps = {
  selectedTab: RepoExportT
}

export const ModalFooter: React.FC<ModalFooterProps> = () => {
  const [addedSuccess, setAddedSuccess] = useState(0)
  const [addedWarning, setAddedWarning] = useState(0)

  const { setShowAddRepositoryModal, setReposToAdd } = useRepositoriesSetState()
  const [{ reposToAdd }] = useRepositoriesContext()

  const [addRepo] = useMutation(ADD_REPO, {
    onError: (error: ApolloError) => {
      const message = error.message.includes('duplicate key value violates unique constraint')
      message ? setAddedWarning(addedWarning + 1) : showErrorAlert(error.message)
    },
    onCompleted: () => {
      setAddedSuccess(addedSuccess + 1)
    }
  })

  const close = useCallback(() => {
    setShowAddRepositoryModal(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (reposToAdd.length !== 0 && addedSuccess + addedWarning === reposToAdd.length) {
      addedSuccess > 0 && showSuccessAlert(`${addedSuccess} repos added`)
      addedWarning > 0 && showWarningAlert(`${addedWarning} already existing repos`)

      setReposToAdd([])
      close()
    }
  }, [addedSuccess, addedWarning, reposToAdd, setReposToAdd, close])

  const add = () => {
    reposToAdd.forEach(repo => {
      addRepo({
        variables: {
          repo,
          isGithub: repo.includes('github.com')
        }
      })
    })
  }

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
              data-testid={TEST_IDS.addRepoToDbButton}
              disabled={reposToAdd.length === 0}
              onClick={add}
            >
              Add Repository
            </Button>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>
    </Modal.Footer>
  )
}
