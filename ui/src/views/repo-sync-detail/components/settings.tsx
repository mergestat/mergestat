import { Button, CodeBox, Input, Label, Panel } from '@mergestat/blocks'
import { ChevronDownIcon, ChevronUpIcon } from '@mergestat/icons'
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
          <h4 className='t-h4 mb-0'>Settings</h4>
        </div>
      </Panel.Header>

      <Panel.Body className='p-6'>
        <div className='flex space-x-4'>
          <div className='flex-1'>
            <Label aria-required>Docker image URL</Label>
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
              <CodeBox
                className="h-60 my-2 text-gray-500"
                language='json'
                value={parameters}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setParameters(e.target.value)}
              />
              <p className='text-gray-400'>Override the default configuration by adding custom parameters in JSON format.</p>
            </>
          }
        </div>

        <Button
          label='Save'
          disabled={!url || !version || !parameters}
          onClick={saveSttings}
        />
      </Panel.Body>
    </Panel>
  )
}

export default SettingsCS
