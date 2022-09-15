import { Alert, Button, Panel } from '@mergestat/blocks'
import { AutoImportIcon, CircleCheckFilledIcon, ClockIcon, GithubIcon, TrashIcon, XIcon } from '@mergestat/icons'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import Loading from 'src/components/Loading'
import { useRepositoriesSetState } from 'src/state/contexts'
import { SYNC_REPO_METHOD, TEST_IDS } from 'src/utils/constants'
import useRepoImports from 'src/views/hooks/useRepoImports'

export const ManageAutoImportReposModal = () => {
  const { setShowAutoImportModal, setShowSyncRepoModal } = useRepositoriesSetState()
  const { loading, imports } = useRepoImports(true)

  return (
    <div className="absolute top-0 left-0 bg-gray-50 w-full h-full z-40">
      <div className="h-16 border-b bg-white border-semantic-border flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <Button
            skin="borderless-muted"
            startIcon={<XIcon className="t-icon" />}
            onClick={() => setShowAutoImportModal(false)}
          />

          <h2 className="t-toolbar-title border-l border-semantic-border ml-2 pl-5">
            Manage Repo Auto Imports
          </h2>
        </div>
        <Button
          skin="secondary"
          startIcon={<AutoImportIcon className="t-icon mr-2" />}
          onClick={() => setShowSyncRepoModal(true)}
        >
          Create Repo Auto import
        </Button>
      </div>
      {loading
        ? <Loading />
        : <div className="m-8 pb-8">
          <Panel className="rounded-md w-full shadow-sm">
            <Panel.Body className="p-10">
              <Alert type="info" className="mb-10">
                <strong>Repo auto imports</strong> automatically import repositories from a GitHub org or user, allowing MergeStat to pickup new repositories (and remove deleted ones) as they are added in GitHub.
              </Alert>

              {imports.length < 1
                ? <div className='flex justify-center items-center bg-white py-5'>
                  No data available!
                </div>
                : <div className='overflow-hidden bg-white h-full'>
                  <table data-testid={TEST_IDS.importsTableList} className='t-table-default'>
                    <thead>
                      <tr className='bg-white'>
                        <th scope="col" key='successIcon' className='px-6'>
                          <span className='mr-1 select-none'></span>
                        </th>

                        <th scope="col" key='tags' className='px-6'>
                          <span className='mr-1 select-none'>Org or username</span>
                        </th>

                        <th scope="col" key='last' className='px-6'>
                          <span className='mr-1 select-none'>Import type</span>
                        </th>

                        <th scope="col" key='status' className='px-6'>
                          <span className='mr-1 select-none'>Last sync</span>
                        </th>

                        <th scope="col" key='option' className='px-6'>
                          <span className='mr-1 select-none'></span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className='bg-white'>
                      {imports.map(imp => (
                        <tr key={imp.id} data-testid={TEST_IDS.importsRow}>
                          <td className='px-6 py-3 w-4 pr-0'>
                            {imp.importDone
                              ? <CircleCheckFilledIcon className="t-icon text-semantic-success" />
                              : <ClockIcon className='t-icon text-semantic-mutedIcon' />
                            }
                          </td>

                          <td className='px-6 py-3 col'>
                            {imp.source}
                          </td>

                          <td className='px-6 py-3 col'>
                            <div className="flex items-center gap">
                              <GithubIcon className="t-icon t-icon-small t-icon-muted mr-2" />
                              {imp.type === SYNC_REPO_METHOD.GH_USER ? 'GitHub User' : 'GitHub Organization'}
                            </div>
                          </td>

                          <td className='px-6 py-3 text-semantic-mutedText'>
                            <RelativeTimeField date={imp.lastSync} />
                          </td>

                          <td className='px-6 py-3 w-4 cursor-pointer'>
                            <Button
                              isIconOnly
                              size="small"
                              skin="borderless-muted"
                              startIcon={<TrashIcon className="t-icon" />}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>}
            </Panel.Body>
          </Panel>
        </div>
      }
    </div>
  )
}
