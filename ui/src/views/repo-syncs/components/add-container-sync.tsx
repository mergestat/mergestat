import { useMutation } from '@apollo/client'
import { Button, Input, Label, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { ADD_REPO_SYNC } from 'src/api-logic/graphql/mutations/repo-syncs'
import { useContainerSyncsSetState } from 'src/state/contexts'
import { showSuccessAlert } from 'src/utils/alerts'

export const AddContainerSyncModal: React.FC = () => {
  const { setShowAddContainerSyncModal } = useContainerSyncsSetState()

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [version, setVersion] = useState('')

  const close = useCallback(() => {
    setShowAddContainerSyncModal(false)
  }, [setShowAddContainerSyncModal])

  const [addRepoSync] = useMutation(ADD_REPO_SYNC, {
    onCompleted: () => {
      showSuccessAlert('Repo sync added')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerSyncs']
  })

  return (
    <Modal open onClose={close}>
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Add sync</Modal.Title>
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
        <div className='p-8'>
          <p className='mb-6 t-text-muted'>
            A repo sync is a set of steps that retrieve data from sources related to git repositories and synchronizes it into a datastore, allowing for downstream querying and operationalization.
          </p>
          <p className='mb-6 t-text-muted'>
            Repo syncs can be added by adding a reference to a docker image URL that contains the configuration. You can override these parameters and enable the sync for repos once the sync is added.
            {' '}
            <a target='_blank' className='t-link'
              rel='noopener noreferrer' href='/' >
              Learn more
            </a>
          </p>

          <Label aria-required>Name</Label>
          <Input
            type='text'
            value={name}
            placeholder="Example sync"
            autoComplete='off'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value)
            }}
          />

          <div className='flex mt-4 space-x-4'>
            <div className='flex-1'>
              <Label aria-required>Docker image URL</Label>
              <Input
                type='text'
                value={url}
                placeholder="mergestat/example-syncer"
                autoComplete='off'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUrl(e.target.value)
                }}
              />

            </div>
            <div>
              <Label aria-required>Version</Label>
              <Input
                type='text'
                value={version}
                placeholder="v.1.2.3"
                autoComplete='off'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setVersion(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button label='Cancel' className="my-3 mr-3" skin="secondary" onClick={close} />
              <Button label='Add Sync'
                className="my-3"
                skin="primary"
                disabled={!name || !url || !version}
                onClick={() => addRepoSync({
                  variables: { name, url, version }
                })}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
