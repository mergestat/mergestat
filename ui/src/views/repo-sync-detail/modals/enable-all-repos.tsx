import { useMutation } from '@apollo/client'
import { Alert, Button, Modal, Toolbar } from '@mergestat/blocks'
import { ChevronRightIcon, XIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { ENABLE_CONTAINER_SYNC_FOR_ALL } from 'src/api-logic/graphql/mutations/syncs'
import { useContainerSyncDetailContext, useContainerSyncDetailSetState } from 'src/state/contexts/container-sync-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'

export const EnableAllReposModal: React.FC = () => {
  const router = useRouter()

  const [{
    idContainerSync,
    gitSourceToEnable: { id, name: nameGitSource, totalRepos },
    containerSyncDetail: { name: nameImage }
  }] = useContainerSyncDetailContext()
  const { setShowEnableAllReposModal } = useContainerSyncDetailSetState()

  const close = useCallback(() => {
    setShowEnableAllReposModal(false)
  }, [setShowEnableAllReposModal])

  const [enableForAll] = useMutation(ENABLE_CONTAINER_SYNC_FOR_ALL, {
    onCompleted: () => {
      showSuccessAlert(`${nameImage} enabled for all repos in ${nameGitSource}`)
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerImage', 'getGitSourcesListCS']
  })

  return (
    <Modal open onClose={close}>
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Confirm enabling for all repos</Modal.Title>
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
      <Modal.Body className='p-6 space-y-6'>
        <div>
          Do you want to enable the scheduling of <strong className="font-semibold text-gray-800">{nameImage}</strong>{' '}
          for all <strong className="font-semibold text-gray-800">{totalRepos}</strong> repos inside the {' '}
          <strong className="font-semibold text-gray-800">{nameGitSource}</strong> git source?
        </div>

        <Alert type='default' theme='light'>
          <p className='mb-4'>You can enable the scheduling by default for all repos inside a git source in the Git Source settings.</p>
          <Button
            label='Manage Git Source'
            skin='borderless'
            className='whitespace-nowrap text-blue-600'
            endIcon={<ChevronRightIcon className='t-icon' />}
            onClick={() => router.push('/repos/git-sources')}
          />
        </Alert>
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
                skin="primary"
                onClick={() => {
                  enableForAll({ variables: { imageId: idContainerSync, providerId: id } })
                  close()
                }}
                className="my-3"
              >
                Enable For All
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
