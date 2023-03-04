import { useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { REMOVE_GIT_SOURCE } from 'src/api-logic/graphql/mutations/git-sources'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS } from 'src/utils/constants'

export const RemoveGitSourceModal: React.FC = () => {
  const router = useRouter()
  const { setShowRemoveGitSourceModal } = useGitSourceDetailSetState()
  const [{ idProvider }] = useGitSourceDetailContext()

  const close = useCallback(() => {
    setShowRemoveGitSourceModal(false)
  }, [setShowRemoveGitSourceModal])

  const [removeGitSource] = useMutation(REMOVE_GIT_SOURCE, {
    onCompleted: () => {
      showSuccessAlert('Git Source removed')
      close()
      router.push('/repos/git-sources')
    }
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove Git Source</Modal.Title>
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
        <div className='px-6 py-6'>
          Are you sure you want to remove this Git Source?
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
                onClick={() => removeGitSource({
                  variables: { idProvider }
                })}
                startIcon={<TrashIcon className="t-icon" />}
                data-testid={TEST_IDS.removeRepoButtonModal}
                className="my-3"
              >
                Remove Git Source
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
