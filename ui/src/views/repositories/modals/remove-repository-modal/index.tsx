import { ApolloError, useMutation } from '@apollo/client'
import { Alert, Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import cx from 'classnames'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { REMOVE_REPO } from 'src/api-logic/graphql/mutations/repos'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'
import { showErrorAlert, showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS } from 'src/utils/constants'
import useRepos from 'src/views/hooks/useRepos'

export const RemoveRepositoryModal: React.FC = () => {
  const [{ repoToRemove, search }] = useRepositoriesContext()
  const { setShowRemoveRepositoryModal } = useRepositoriesSetState()
  const { refetch } = useRepos(search)
  const router = useRouter()

  const close = useCallback(() => {
    setShowRemoveRepositoryModal(false)
  }, [setShowRemoveRepositoryModal])

  const [removeRepo] = useMutation(REMOVE_REPO, {
    onError: (error: ApolloError) => {
      showErrorAlert(error.message)
    },
    onCompleted: () => {
      repoToRemove?.redirect && router.push('/repos')
      showSuccessAlert('Repository removed successfully')
      refetch()
      close()
    }
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
      <Modal.Body>
        {repoToRemove?.autoImported &&
          <Alert type="warning" theme="light" className='mx-4 mt-6 mb-2 text-xs'>
            This repo was added by an automatic import, it will be re-added on the next run, unless the repo auto import is removed.
          </Alert>
        }
        <div className={cx('px-6 pb-6', { 'pt-2': repoToRemove?.autoImported }, { 'pt-6': !repoToRemove?.autoImported })}>
          Are you sure you want to remove <b>{repoToRemove?.name}</b>?
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
