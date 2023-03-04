import { useMutation, useQuery } from '@apollo/client'
import { Button, Checkbox, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { useCallback, useEffect, useState } from 'react'
import { SyncType } from 'src/@types'
import { GetRepoImportQuery } from 'src/api-logic/graphql/generated/schema'
import { UPDATE_AUTO_IMPORT_REPOS } from 'src/api-logic/graphql/mutations/add-repo'
import { GET_REPO_IMPORT } from 'src/api-logic/graphql/queries/get-repo-imports'
import Loading from 'src/components/Loading'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'

export const UpdateAutoImportModal: React.FC = () => {
  const { setShowAutoImportModal } = useGitSourceDetailSetState()
  const [{ importInfo }] = useGitSourceDetailContext()

  const close = useCallback(() => {
    setShowAutoImportModal(false)
  }, [setShowAutoImportModal])

  const [syncsTypesArray, setSyncsTypesArray] = useState<SyncType[]>([])

  const { loading, data } = useQuery<GetRepoImportQuery>(GET_REPO_IMPORT, {
    variables: { id: importInfo.id },
    fetchPolicy: 'no-cache'
  })

  const [updateAutoImport] = useMutation(UPDATE_AUTO_IMPORT_REPOS, {
    onCompleted: () => {
      showSuccessAlert('Default syncs saved')
      close()
    }
  })

  useEffect(() => {
    const defaultSyncs = data?.repoImport?.settings.defaultSyncTypes || []
    const list = data?.repoSyncTypes?.nodes.map(st => ({ type: st.type, description: st.description, shortName: st.shortName, checked: defaultSyncs.includes(st.type) }))
    setSyncsTypesArray(list || [])
  }, [data])

  const handleCheckBox = (type: string) => {
    setSyncsTypesArray(
      syncsTypesArray.map((st) => {
        if (st.type === type) {
          return { ...st, checked: !st.checked }
        }
        return st
      })
    )
  }

  const updateImport = () => {
    const newDefaultSyncs = syncsTypesArray.filter(ds => ds.checked).map(ds => ds.type)
    const newSettings = {
      ...data?.repoImport?.settings,
      defaultSyncTypes: newDefaultSyncs
    }
    updateAutoImport({ variables: { id: importInfo.id, settings: newSettings } })
  }

  return (
    <Modal open onClose={close} size="lg">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Edit default syncs ({data?.repoImport?.settings.userOrOrg})</Modal.Title>
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
          : <table className='t-table-default t-table-hover'>
            <tbody className='bg-white'>
              {syncsTypesArray.map((syncType, index) => (
                <tr key={index} onClick={() => handleCheckBox(syncType.type)}>
                  <td className='py-3 pl-8 pr-4 w-0'>
                    <Checkbox
                      checked={syncType.checked}
                      onChange={() => handleCheckBox(syncType.type)}
                    />
                  </td>
                  <td className='py-3 pl-4 pr-8'>
                    <h4 className='font-medium mb-0.5'>{syncType.shortName}</h4>
                    <p className='t-text-muted text-sm'>{syncType.description}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
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
