
import Editor from '@monaco-editor/react'
import { useEffect, useRef } from 'react'

type SQLEditorSectionProps = {
  query: string
  setQuery: (text: string | undefined) => void
  children?: React.ReactNode
}

const SQLEditorSection: React.FC<SQLEditorSectionProps> = ({ query, setQuery }: SQLEditorSectionProps) => {
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

    resizerElement?.current?.addEventListener('mousedown', initResize, false)

    return () => {
      resizerElement?.current?.removeEventListener('mousedown', initResize, false)
      window.removeEventListener('mousemove', handleResize)
      window.removeEventListener('mouseup', handleStopResize)
    }
  }, [])

  return (
    <>
      <div
        className='w-full p-8'
        ref={resizeElement}
        style={{ height: '320px', minHeight: '200px' }}
      >
        <div className='h-full flex relative py-4 bg-white rounded border border-gray-300'>
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
      </div>
      <div className='t-resizer z-10' ref={resizerElement} />
    </>
  )
}

export default SQLEditorSection
