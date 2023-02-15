
import Editor from '@monaco-editor/react'
import { useEffect, useRef } from 'react'
import { useQueryContext, useQuerySetState } from 'src/state/contexts/query.context'
import SchemaSection from './schema-section'

type SQLEditorSectionProps = {
  onEnterKey?: () => void
  children?: React.ReactNode
}

const SQLEditorSection: React.FC<SQLEditorSectionProps> = ({ onEnterKey }: SQLEditorSectionProps) => {
  const [{ query }] = useQueryContext()
  const { setQuery } = useQuerySetState()

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
        className='flex w-full bg-white overflow-x-auto'
        ref={resizeElement}
        style={{ height: '360px', minHeight: '200px' }}
      >
        <div className='w-3/4 h-full'>
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
        </div>

        <div className='border-l' style={{ minWidth: '340px' }}>
          <SchemaSection />
        </div>
      </div>
      <div className='t-resizer z-10' ref={resizerElement} />
    </>
  )
}

export default SQLEditorSection
