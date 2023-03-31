import { useMutation } from '@apollo/client'
import { Button, Input, Label, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { ADD_CONTAINER_IMAGE } from 'src/api-logic/graphql/mutations/repo-syncs'
import { useContainerSyncsSetState } from 'src/state/contexts'
import { showSuccessAlert } from 'src/utils/alerts'
import { AddContainerImageMutation } from '../../../api-logic/graphql/generated/schema'

export const AddContainerSyncModal: React.FC = () => {
  const { setShowAddContainerSyncModal } = useContainerSyncsSetState()
  const router = useRouter()

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [version, setVersion] = useState('')

  const close = useCallback(() => {
    setShowAddContainerSyncModal(false)
  }, [setShowAddContainerSyncModal])

  const [addCI] = useMutation(ADD_CONTAINER_IMAGE, {
    onCompleted: (data: AddContainerImageMutation) => {
      close()
      router.push(`/repos/repo-syncs/${data.createContainerImage?.containerImage?.id}`)
      showSuccessAlert('Repo sync added')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerImages']
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
            A repo sync is executed as a container image. You can add a sync by referencing a container image URL.
          </p>
          <p className='mb-6 t-text-muted'>
            You can override parameters and enable the sync for repos once the sync is added.
            {' '}
            {/* TODO(patrickdevivo) update the documentation link */}
            <a target='_blank' className='t-link'
              rel='noopener noreferrer' href='https://docs.mergestat.com/' >
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
              <Label aria-required>Container image URL</Label>
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
                onClick={() => addCI({
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
