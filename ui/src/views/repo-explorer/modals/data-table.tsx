import { Alert, Button, Modal, Toolbar, Tooltip } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { useCallback, useEffect } from 'react'
import Loading from 'src/components/Loading'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'
import useExecuteSQL from 'src/views/hooks/useExecuteSQL'
import ResultTable from 'src/views/shared/result-table'

export const DataTableModal: React.FC = () => {
  const [{ queryModal }] = useRepoExploreContext()
  const { setShowDataTableModal } = useRepoExploreSetState()

  const { loadingQuery, data, executeSQL } = useExecuteSQL()

  const close = useCallback(() => {
    setShowDataTableModal(false)
  }, [setShowDataTableModal])

  useEffect(() => {
    executeSQL({ variables: { sql: queryModal, disableReadOnly: false, trackHistory: true, rowLimit: 1001 } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal open onClose={close} size="lg">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Data Table</Modal.Title>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            {data?.execSQL.rows && data?.execSQL.rows.length > 1000 &&
              <Toolbar.Item>
                <Alert isInline type="warning" className='text-gray-400'>
                  <Tooltip placement='bottom' offset={[0, 10]}
                    content={<div className='w-56 font-thin pl-2 pr-1 py-3 leading-2'>
                      Result set exceeds the limits of the UI. Please use another SQL client to access more rows
                    </div>}>
                    <span className='border-b-2 border-dotted border-gray-400'>Limited to 1000 rows</span>
                  </Tooltip>
                </Alert>
              </Toolbar.Item>
            }
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
        <div style={{ height: '30rem' }}>
          <div className='h-full flex flex-col'>
            {loadingQuery
              ? <div className='h-96 my-40'><Loading /></div>
              : <ResultTable data={data?.execSQL || {}} />}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
