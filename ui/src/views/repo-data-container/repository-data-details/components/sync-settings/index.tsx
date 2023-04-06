import { Button, HelpText, Label, Panel, Toggle, Toolbar } from '@mergestat/blocks'
import { ChevronDownIcon, ChevronUpIcon, CogIcon } from '@mergestat/icons'
import Editor from '@monaco-editor/react'
import React, { useEffect, useState } from 'react'
import { ContainerSyncInfo } from 'src/@types'
import { isJSONValid, stringifyJsonCode } from 'src/utils'
import { showErrorAlert } from 'src/utils/alerts'
import useUpdateCS from 'src/views/hooks/repoContainerSyncs/useUpdateCS'
import { useRouter } from 'next/router'

type SyncSettingsProps = {
  sync?: ContainerSyncInfo
  addSchedule: (payload: { variables: { syncId: string } }) => void
  removeSchedule: (payload: { variables: { id: string } }) => void
  syncNow: (payload: { variables: { sync: string } }) => void
}

export const SyncSettings: React.FC<SyncSettingsProps> = ({ sync, addSchedule, removeSchedule }: SyncSettingsProps) => {
  const router = useRouter()

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
    <div className='border-b pb-3 mb-3'>
      <Panel className="shadow-sm m-8">
        <Panel.Header>
          <Toolbar>
            <Toolbar.Left>
              <h3 className="t-panel-title">Sync Settings</h3>
            </Toolbar.Left>
            <Toolbar.Right>
            <Button
              label='Manage Sync'
              skin='secondary'
              startIcon={<CogIcon className='t-icon' />}
              onClick={() => router.push(`/repos/repo-syncs/${sync?.imageId}`)}
            />
            </Toolbar.Right>
          </Toolbar>
        </Panel.Header>
        <Panel.Body>
          <div className='space-y-6'>
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

            <div>
              <Button
                label='Custom parameters'
                skin='borderless'
                className='whitespace-nowrap text-blue-600'
                endIcon={openParams ? <ChevronUpIcon className='t-icon' /> : <ChevronDownIcon className='t-icon' />}
                onClick={() => setOpenParams(!openParams)}
              />
              {openParams &&
                <>
                  <div className='w-full h-40 my-2 px-1 border rounded-md mt-2'>
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
                  <HelpText className='t-text-muted' variant='default'>Override the default configuration by adding custom parameters as JSON.</HelpText>
                </>
              }
            </div>

            <Button
              label='Save'
              disabled={!parameters}
              onClick={saveSttings}
            />

          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}
