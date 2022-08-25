import { ApolloError, useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import React, { useCallback } from 'react'
import { RepoExportT } from 'src/@types'
import { AddRepoMutation } from 'src/api-logic/graphql/generated/schema'
import ADD_REPO from 'src/api-logic/graphql/mutations/add-repo'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import { showErrorAlert, showSuccessAlert, showWarningAlert } from 'src/utils/alerts'
import { GITHUB_URL, TEST_IDS } from 'src/utils/constants'

type ModalFooterProps = {
  selectedTab: RepoExportT
}

export const ModalFooter: React.FC<ModalFooterProps> = () => {
  const { setShowAddRepositoryModal, setReposToAdd } = useRepositoriesSetState()
  const [{ reposToAdd }] = useRepositoriesContext()

  const [addRepo] = useMutation(ADD_REPO, {
    onError: (error: ApolloError) => {
      const message = error.message.includes('duplicate key value violates unique constraint')
      message ? showWarningAlert('Repo already added') : showErrorAlert(error.message)
    },
    onCompleted: (data: AddRepoMutation) => {
      showSuccessAlert(`Repo '${data?.createRepo?.repo?.repo.replace(GITHUB_URL, '')}' added`)
    }
  })

  const close = useCallback(() => {
    setShowAddRepositoryModal(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const add = () => {
    reposToAdd.forEach(repo => {
      addRepo({
        variables: {
          repo,
          isGithub: repo.includes('github.com')
        }
      })
    })
    setReposToAdd([])
    close()
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
