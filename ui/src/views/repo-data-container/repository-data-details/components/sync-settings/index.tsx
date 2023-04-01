import { Button, Label, Panel, Spinner, Toggle, Toolbar } from '@mergestat/blocks'
import { ChevronDownIcon, ChevronUpIcon, ClockIcon, RefreshIcon } from '@mergestat/icons'
import Editor from '@monaco-editor/react'
import React, { useEffect, useState } from 'react'
import { ContainerSyncInfo } from 'src/@types'
import { isJSONValid, stringifyJsonCode } from 'src/utils'
import { showErrorAlert } from 'src/utils/alerts'
import { SYNC_STATUS } from 'src/utils/constants'
import useUpdateCS from 'src/views/hooks/repoContainerSyncs/useUpdateCS'

type SyncSettingsProps = {
  sync?: ContainerSyncInfo
  addSchedule: (payload: { variables: { syncId: string } }) => void
  removeSchedule: (payload: { variables: { id: string } }) => void
  syncNow: (payload: { variables: { sync: string } }) => void
}

export const SyncSettings: React.FC<SyncSettingsProps> = ({ sync, addSchedule, removeSchedule, syncNow }: SyncSettingsProps) => {
  const [parameters, setParameters] = useState('')
  const [openParams, setOpenParams] = useState(false)
  const { updateCS } = useUpdateCS()

  useEffect(() => {
    setParameters(stringifyJsonCode(sync?.parameters) || '')
  }, [sync])

  const saveSttings = () => {
    const jsonValid = isJSONValid(parameters)
    if (jsonValid) {
      updateCS({
        variables: { id: sync?.id, parameters: JSON.parse(parameters) }
      })
    } else {
      showErrorAlert('Custom parameters are not valid (Check JSON format)')
    }
  }

  return (
    <Panel className="shadow-sm m-8">
      <Panel.Header>
        <h3 className="t-panel-title">Sync settings</h3>
      </Panel.Header>
      <Panel.Body>
        <Toolbar>
          <Toolbar.Left>
            <Toolbar.Item>
              <div className='flex space-x-8'>
                <Label className='text-gray-600 font-medium'>Sync</Label>
                <div className="w-64 flex gap-2 items-center">
                  <Toggle
                    isChecked={!!sync?.scheduleId}
                    onChange={() => {
                      sync?.scheduleId
                        ? removeSchedule({ variables: { id: sync.scheduleId } })
                        : addSchedule({ variables: { syncId: `${sync?.id}` } })
                    }}
                  />
                </div>
              </div>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                className="ml-3"
                label='Sync Now'
                startIcon={sync?.syncState === SYNC_STATUS.queued
                  ? <ClockIcon className='t-icon' />
                  : sync?.syncState === SYNC_STATUS.running
                    ? <Spinner size='sm' className='mr-2' />
                    : <RefreshIcon className="t-icon" />
                }
                disabled={sync?.syncState === SYNC_STATUS.queued || sync?.syncState === SYNC_STATUS.running}
                onClick={() => syncNow({ variables: { sync: `${sync?.id}` } })}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>

        <div className='mt-4 mb-8'>
          <Button
            label='Custom parameters'
            skin='borderless'
            size='small'
            className='whitespace-nowrap text-blue-600'
            endIcon={openParams ? <ChevronUpIcon className='t-icon' /> : <ChevronDownIcon className='t-icon' />}
            onClick={() => setOpenParams(!openParams)}
          />
          {openParams &&
            <>
              <div className='w-full h-40 my-2 px-1 border rounded-md'>
                <Editor
                  className='text-sm font-mono'
                  value={parameters}
                  language='json'
                  onChange={(text: string | undefined) => setParameters(text || '')}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollbar: {
                      vertical: 'auto',
                    },
                  }}
                />
              </div>
              <p className='text-gray-400'>Override the default configuration by adding custom parameters as JSON.</p>
            </>
          }
        </div>

        <Button
          label='Save'
          disabled={!parameters}
          onClick={saveSttings}
        />
      </Panel.Body>
    </Panel>
  )
}
