import { useMutation } from '@apollo/client'
import { Alert, Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { REMOVE_REPO } from 'src/api-logic/graphql/mutations/repos'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'
import { showSuccessAlert } from 'src/utils/alerts'
import { REPOS_REFETCHES, TEST_IDS } from 'src/utils/constants'

export const RemoveRepositoryModal: React.FC = () => {
  const [{ repoToRemove, reposQuantity }] = useRepositoriesContext()
  const { setShowRemoveRepositoryModal, setShowReposTable, setReposQuantity } = useRepositoriesSetState()
  const router = useRouter()

  const close = useCallback(() => {
    setShowRemoveRepositoryModal(false)
  }, [setShowRemoveRepositoryModal])

  const [removeRepo] = useMutation(REMOVE_REPO, {
    onCompleted: () => {
      // When we are deleting the last repo we set showReposTable to false
      const showTables = reposQuantity === 1
      setShowReposTable(!showTables)
      repoToRemove?.redirect && router.push('/repos')
      showSuccessAlert('Repository removed successfully')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => REPOS_REFETCHES
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove Repository</Modal.Title>
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
        {repoToRemove?.autoImported &&
          <Alert type="warning" theme="light" className='mb-6'>
            This repo was added by an automatic import, it will be re-added on the next run, unless the repo auto import is removed.
          </Alert>
        }
        <div>
          Are you sure you want to remove <strong className="font-semibold text-gray-800">{repoToRemove?.name}</strong>?
        </div>
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
                skin="danger"
                onClick={() => removeRepo({
                  variables: { id: repoToRemove?.id }
                })}
                startIcon={<TrashIcon className="t-icon" />}
                data-testid={TEST_IDS.removeRepoButtonModal}
                className="my-3"
              >
                Remove Repository
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
