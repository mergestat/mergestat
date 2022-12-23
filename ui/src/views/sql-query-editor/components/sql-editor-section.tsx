
import { Toggle, Tooltip } from '@mergestat/blocks'
import { CircleInformationIcon } from '@mergestat/icons'
import Editor from '@monaco-editor/react'
import { useEffect, useRef } from 'react'
import { useQueryContext, useQuerySetState } from 'src/state/contexts/query.context'

type SQLEditorSectionProps = {
  onEnterKey?: () => void
  children?: React.ReactNode
}

const SQLEditorSection: React.FC<SQLEditorSectionProps> = ({ onEnterKey }: SQLEditorSectionProps) => {
  const [{ query, readOnly }] = useQueryContext()
  const { setQuery, setReadOnly } = useQuerySetState()
  const message = 'Non read-only queries are able to make changes in the underlying database, be careful!'

  const resizeElement = useRef<HTMLDivElement | null>(null)
  const resizerElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = (e: MouseEvent) => {
      if (resizeElement?.current) {
        const resizeHight = e.clientY - resizeElement.current.offsetTop + 'px'
        resizeElement.current.style.height = resizeHight
      }
    }

    const handleStopResize = () => {
      window.removeEventListener('mousemove', handleResize, false)
      window.removeEventListener('mouseup', handleStopResize, false)
    }

    const initResize = () => {
      window.addEventListener('mousemove', handleResize, false)
      window.addEventListener('mouseup', handleStopResize, false)
    }

    const current = resizerElement?.current
    current?.addEventListener('mousedown', initResize, false)

    return () => {
      current?.removeEventListener('mousedown', initResize, false)
      window.removeEventListener('mousemove', handleResize)
      window.removeEventListener('mouseup', handleStopResize)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.code === 'Enter') {
        event.preventDefault()
        if (onEnterKey) onEnterKey()
      }
    }

    window.addEventListener('keydown', handleKeyDown, false)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEnterKey])

  return (
    <>
      <div
        className='w-full p-8'
        ref={resizeElement}
        style={{ height: '360px', minHeight: '200px' }}
      >
        <div className='h-full flex-col relative pb-14 pt-4 bg-white rounded border border-gray-300'>
          <Editor
            className='text-sm font-mono'
            value={query}
            language='sql'
            onChange={(text: string | undefined) => setQuery(text || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              scrollbar: {
                vertical: 'auto',
              },
            }}
          />
          <div className='flex items-center pl-4 py-4 border-t border-gray-300'>
            <Toggle isChecked={readOnly} onChange={(value) => setReadOnly(value)} />
            <span className='text-gray-500 pl-2 pr-1'>Read-only</span>
            <Tooltip content={message} offset={[0, 10]}>
              <CircleInformationIcon className='t-icon t-icon-muted pl-1' />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='t-resizer z-10' ref={resizerElement} />
    </>
  )
}

export default SQLEditorSection
