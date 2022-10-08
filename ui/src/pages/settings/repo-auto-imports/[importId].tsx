import { useMutation, useQuery } from '@apollo/client'
import { BreadcrumbNav, Button, Checkbox, ColoredBox, Panel, Toolbar } from '@mergestat/blocks'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { SyncType } from 'src/@types'
import { GetRepoImportQuery } from 'src/api-logic/graphql/generated/schema'
import { UPDATE_AUTO_IMPORT_REPOS } from 'src/api-logic/graphql/mutations/add-repo'
import { GET_REPO_IMPORT } from 'src/api-logic/graphql/queries/get-repo-imports'
import Loading from 'src/components/Loading'
import RepoImage from 'src/components/RepoImage'
import { showSuccessAlert } from 'src/utils/alerts'
import { SYNC_REPO_METHOD } from 'src/utils/constants'

import SettingsView from 'src/views/settings'

const AutoImportsDetail: NextPage = () => {
  const [name, setName] = useState('')
  const [syncsTypesArray, setSyncsTypesArray] = useState<SyncType[]>([])

  const router = useRouter()
  const { importId } = router.query

  const { loading, data } = useQuery<GetRepoImportQuery>(GET_REPO_IMPORT, {
    variables: { id: importId },
    fetchPolicy: 'no-cache',
  })

  const [updateAutoImport] = useMutation(UPDATE_AUTO_IMPORT_REPOS, {
    onCompleted: () => {
      showSuccessAlert('Default syncs saved')
      router.push('/settings/repo-auto-imports')
    }
  })

  useEffect(() => {
    const property = data?.repoImport?.type === SYNC_REPO_METHOD.GH_ORG ? 'org' : 'user'
    setName(data?.repoImport?.settings[property])

    const defaultSyncs = data?.repoImport?.settings.defaultSyncTypes

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
    updateAutoImport({ variables: { id: importId, settings: newSettings } })
  }

  const crumbs = [
    {
      text: 'Repo Auto Imports',
      onClick: async () => await router.push('/settings/repo-auto-imports'),
    },
    {
      text: name,
      startIcon: (
        <ColoredBox size='10'>
          <RepoImage repoType='github' orgName={name} size="10" />
        </ColoredBox>
      ),
    },
  ]

  return (
    <>
      <Fragment>
        <Head>
          <title>MergeStat</title>
        </Head>
        <SettingsView>
          {/* Main content */}
          {loading
            ? <Loading />
            : <div className='w-full h-full flex flex-col flex-1 overflow-hidden'>
              <div className='bg-white h-16 w-full border-b px-8 flex-0'>
                <Toolbar className='h-full'>
                  <Toolbar.Left>
                    <BreadcrumbNav data={crumbs} />
                  </Toolbar.Left>
                  <Toolbar.Right>
                    <Button label='Save' onClick={updateImport} />
                  </Toolbar.Right>
                </Toolbar>
              </div>
              <div className='flex-1 p-8 overflow-auto'>
                <Panel className='rounded-md w-full shadow-sm'>
                  <Panel.Header>
                    <h4 className='t-h4 mb-0'>Select default syncs</h4>
                  </Panel.Header>
                  <Panel.Body className='p-0'>
                    <table className='t-table-default t-table-clickable'>
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
                              <p className='text-semantic-mutedText text-sm'>{syncType.description}</p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Panel.Body>
                </Panel>
              </div>
            </div>}
        </SettingsView>
      </Fragment>
    </>
  )
}

export default AutoImportsDetail
