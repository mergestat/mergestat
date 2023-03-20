import { Button, Modal, Toolbar, VerticalNav } from '@mergestat/blocks'
import React, { useCallback, useEffect, useState } from 'react'
import { ClockHistoryIcon, XIcon } from '@mergestat/icons'
import { useQuerySetState } from 'src/state/contexts'
import useQueryHistory from 'src/views/hooks/useQueryHistory'
import { mapToQueryHistoryData } from 'src/api-logic/mappers/history'
import { QueryHistoryData } from 'src/@types'
import Loading from 'src/components/Loading'
import Editor from '@monaco-editor/react'

export const QueryHistoryModal: React.FC = () => {
  const { setShowQueryHistoryModal, setQuery } = useQuerySetState()
  const { loading, data } = useQueryHistory()
  const [active, setActive] = useState<QueryHistoryData>()
  const [queryHistory, setQueryHistory] = useState<Array<QueryHistoryData>>()

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

  return (
    <Modal open onClose={close} size="lg">
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
      <Modal.Body className='overflow-hidden'>
        {
          loading
            ? <div className='h-720'><Loading /></div>
            : <div className='flex overflow-hidden'>
            <div className='w-1/3 border-r h-720 overflow-y-scroll'>
              <VerticalNav>
                {queryHistory?.map((history) => (
                  <VerticalNav.Item
                    key={`vertical-nav-item-${history.id}`}
                    active={active?.id === history.id}
                    onClick={() => setActive(history)}
                    className="border-b mt-0 h-65"
                    text={
                      <div className="flex flex-col items-start mx-2">
                        <p className='font-medium text-sm text-gray-700'>
                          {history.runAt?.toDateString() || ''}
                        </p>
                        <div className='text-xs font-mono text-gray-400'>
                          {history.query.length > 40 ? `${history.query.substring(0, 40)} ...` : history.query}
                        </div>
                      </div>
                    }
                  />
                ))}
              </VerticalNav>
            </div>
            <div className='w-2/3'>
              <div className='overflow-hidden flex justify-between items-center h-14 w-full border-b px-8'>
                <div className='flex justify-between items-center'>
                  <Button
                    isIconOnly
                    className='bg-gray-100 py-2 px-3'
                    skin='borderless-muted'
                    startIcon={<ClockHistoryIcon className='t-icon' />}
                  />
                  <p className='font-semibold text-gray-900 px-3'>
                    {active?.runAt?.toDateString() || ''}
                  </p>
                </div>
                <Button
                  className='whitespace-nowrap justify-center ml-0 w-32'
                  label='Use Query'
                  disabled={!active}
                  onClick={onUseQueryClick}
                />
              </div>
              <div className='bg-gray-50 p-3 h-full'>
                <Editor
                  className='text-sm font-mono'
                  value={active?.query}
                  language='sql'
                  options={
                    {
                      minimap: { enabled: false },
                      fontSize: 14,
                      scrollbar: {
                        vertical: 'auto',
                      },
                      readOnly: true,
                      domReadOnly: true,
                    }
                  }
                />
              </div>
            </div>
          </div>
        }
      </Modal.Body>
    </Modal>
  )
}
