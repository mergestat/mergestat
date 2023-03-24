import React, { useCallback, useEffect, useState } from 'react'
import cx from 'classnames'
import { Avatar, Button, ColoredBox, Modal, Toolbar } from '@mergestat/blocks'
import { ClockHistoryIcon, XIcon } from '@mergestat/icons'
import { useQuerySetState } from 'src/state/contexts'
import useQueryHistory from 'src/views/hooks/useQueryHistory'
import { mapToQueryHistoryData } from 'src/api-logic/mappers/history'
import { QueryHistoryData } from 'src/@types'
import Loading from 'src/components/Loading'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const QueryHistoryModal: React.FC = () => {
  const { setShowQueryHistoryModal, setQuery } = useQuerySetState()
  const { loading, data } = useQueryHistory()
  const [queryHistory, setQueryHistory] = useState<Array<QueryHistoryData>>()
  const [active, setActive] = useState<QueryHistoryData>()

  const close = useCallback(() => {
    setShowQueryHistoryModal(false)
  }, [setShowQueryHistoryModal])

  const onUseQueryClick = () => {
    if (active) {
      setQuery(active.query)
      close()
    }
  }

  useEffect(() => {
    setQueryHistory(mapToQueryHistoryData(data))
  }, [data])

  useEffect(() => {
    if (queryHistory && queryHistory.length > 0) {
      setActive(queryHistory[0])
    }
  }, [queryHistory])

  return (
    <Modal open onClose={close} size="lg" className='h-full'>
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>View query history</Modal.Title>
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
      <Modal.Body className='overflow-hidden text-left flex flex-col h-full'>
        { loading
          ? <div className='h-720'><Loading /></div>
          : <div className='flex overflow-hidden'>
            { queryHistory && queryHistory.length < 1
              ? <div className='flex flex-col items-center w-full justify-center px-6 py-12'>
                  <Avatar icon={<ClockHistoryIcon className='t-icon' />} />
                  <p className='t-text-muted mt-6'>
                    No queries ran yet.
                  </p>
                </div>
              : <>
              <div className='w-1/3 border-r flex flex-col overflow-hidden h-720'>
                <div className='t-master-detail-list flex-1 overflow-auto'>
                  {queryHistory?.map((history) => (
                  <button
                    className={cx('t-master-detail-item', { 't-master-detail-item-active': active?.id === history.id })}
                    key={`master-detail-item-${history.id}`}
                    onClick={() => setActive(history)}
                    >
                      <div className='t-master-detail-item-title'>
                        {history.runAt?.toDateString() || ''}
                      </div>
                      <div className='t-master-detail-item-preview'>
                          {history.query.length > 36 ? `${history.query.substring(0, 36)} ...` : history.query}
                      </div>
                  </button>
                  ))}
                </div>
            </div>
            <div className='w-2/3 flex flex-col overflow-hidden h-720'>
              <div className='flex-none flex justify-between items-center h-14 w-full border-b px-8'>
                <div className='flex items-center space-x-3'>
                  <ColoredBox size='8'><ClockHistoryIcon className='t-icon'/></ColoredBox>
                  <p className='t-h4 mb-0'>
                    {active?.runAt?.toDateString() || ''}
                  </p>
                </div>
                <Button
                  className='whitespace-nowrap'
                  label='Use Query'
                  disabled={!active}
                  onClick={onUseQueryClick}
                />
              </div>
              <div className='bg-gray-50 p-3 flex-1 overflow-auto'>
              <SyntaxHighlighter
                language='sql'
                style={a11yLight}
                showLineNumbers={true}
                customStyle={{
                  backgroundColor: undefined,
                  userSelect: undefined,
                  lineHeight: '20px',
                  fontSize: 14
                }}>
                {active?.query as string}
              </SyntaxHighlighter>
              </div>
            </div>
            </>
            }

          </div>
        }
      </Modal.Body>
    </Modal>
  )
}
