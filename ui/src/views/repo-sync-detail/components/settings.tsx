import { Button, Input, HelpText, Label, Panel } from '@mergestat/blocks'
import { ChevronDownIcon, ChevronUpIcon } from '@mergestat/icons'
import Editor from '@monaco-editor/react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useContainerSyncDetailContext } from 'src/state/contexts/container-sync-detail.context'
import { isJSONValid, stringifyJsonCode } from 'src/utils'
import { showErrorAlert } from 'src/utils/alerts'
import useUpdateCI from 'src/views/hooks/repoSyncs/useUpdateCI'

const SettingsCS: React.FC = () => {
  const [{ idContainerSync, containerSyncDetail }] = useContainerSyncDetailContext()
  const { updateCI } = useUpdateCI()

  const [url, setUrl] = useState('')
  const [version, setVersion] = useState('')
  const [parameters, setParameters] = useState('')
  const [openParams, setOpenParams] = useState(false)

  useEffect(() => {
    const { url, version, parameters } = containerSyncDetail
    setUrl(url || '')
    setVersion(version || '')
    setParameters(stringifyJsonCode(parameters) || '')
  }, [containerSyncDetail])

  const saveSttings = () => {
    const jsonValid = isJSONValid(parameters)
    if (jsonValid) {
      updateCI({
        variables: { id: idContainerSync, url, version, parameters: JSON.parse(parameters) }
      })
    } else {
      showErrorAlert('Custom parameters are not valid (Check JSON format)')
    }
  }

  return (
    <Panel className='rounded-md shadow-sm m-auto'>
      <Panel.Header>
        <div className='w-full flex justify-between'>
          <h3 className='t-panel-title'>Settings</h3>
        </div>
      </Panel.Header>

      <Panel.Body className='p-6'>
        <div className='space-y-6'>
          <div className='md_flex space-y-6 md_space-y-0 md_space-x-4'>
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
                <div className='w-full h-40 py-3 border rounded-md mt-2'>
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
          disabled={!url || !version || !parameters}
          onClick={saveSttings}
        />

        </div>
      </Panel.Body>
    </Panel>
  )
}

export default SettingsCS
