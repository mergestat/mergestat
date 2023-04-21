import { useMutation, useQuery } from '@apollo/client'
import { Button, Checkbox, Modal, Toolbar } from '@mergestat/blocks'
import { CogIcon, TableIcon, XIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { ContainerImage } from 'src/@types'
import { GetRepoImportContainerQuery } from 'src/api-logic/graphql/generated/schema'
import { UPDATE_AUTO_IMPORT_REPOS_CONTAINER } from 'src/api-logic/graphql/mutations/add-repo'
import { GET_REPO_IMPORT_CONTAINER } from 'src/api-logic/graphql/queries/get-repo-imports'
import Loading from 'src/components/Loading'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { getVendorProp } from 'src/utils'
import { showSuccessAlert } from 'src/utils/alerts'
import { EmptyData } from 'src/views/shared/empty-data'

export const UpdateAutoImportModal: React.FC = () => {
  const router = useRouter()

  const { setShowAutoImportModal } = useGitSourceDetailSetState()
  const [{ importInfo }] = useGitSourceDetailContext()

  const close = useCallback(() => {
    setShowAutoImportModal(false)
  }, [setShowAutoImportModal])

  const [containerImages, setContainerImages] = useState<ContainerImage[]>([])

  const { loading, data } = useQuery<GetRepoImportContainerQuery>(GET_REPO_IMPORT_CONTAINER, {
    variables: { id: importInfo.id },
    fetchPolicy: 'no-cache'
  })

  const [updateAutoImport] = useMutation(UPDATE_AUTO_IMPORT_REPOS_CONTAINER, {
    onCompleted: () => {
      showSuccessAlert('Default syncs saved')
      close()
    }
  })

  useEffect(() => {
    const defaultSyncs = data?.repoImport?.settings.defaultContainerImages || []
    const list = data?.containerImages?.nodes.map(ci => ({ id: ci.id, description: ci.description, name: ci.name, checked: defaultSyncs.includes(ci.id) }))
    setContainerImages(list || [])
  }, [data])

  const handleCheckBox = (id: string) => {
    setContainerImages(
      containerImages.map((ci) => {
        if (ci.id === id) {
          return { ...ci, checked: !ci.checked }
        }
        return ci
      })
    )
  }

  const updateImport = () => {
    const newDefaultSyncs = containerImages.filter(ci => ci.checked).map(ci => ci.id)
    updateAutoImport({
      variables: { repoImportId: importInfo.id, defaultContainerImageIds: newDefaultSyncs }
    })
  }

  return (
    <Modal open onClose={close} size="lg">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Edit default syncs ({data?.repoImport?.settings[getVendorProp(importInfo.vendor)]})</Modal.Title>
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
        {loading
          ? <div className='h-96 my-40'><Loading /></div>
          : <>
            {containerImages.length === 0 &&
              <div className='my-12'>
                <EmptyData
                  message='No repo syncs yet'
                  icon={<TableIcon className="t-icon" />}
                  bottomElements={
                    <Button
                      skin="borderless"
                      label='Manage Syncs'
                      startIcon={<CogIcon className="t-icon" />}
                      onClick={() => router.push('/repos/repo-syncs')}
                    />
                  }
                />
              </div>}

            {containerImages.length > 0 &&
              <table className='t-table-default t-table-hover'>
                <tbody className='bg-white'>
                  {containerImages.map((ci, index) => (
                    <tr key={index} onClick={() => handleCheckBox(ci.id)}>
                      <td className='py-3 pl-8 pr-4 w-0'>
                        <Checkbox
                          checked={ci.checked}
                          onChange={() => handleCheckBox(ci.id)}
                        />
                      </td>
                      <td className='py-3 pl-4 pr-8'>
                        <h4 className='font-medium mb-0.5'>{ci.name}</h4>
                        <p className='t-text-muted text-sm'>{ci.description}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>}
          </>
        }
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button label='Cancel' className="my-3 mr-3" skin="secondary" onClick={close} />
              <Button label='Save' className="my-3" skin="primary" onClick={updateImport} />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
