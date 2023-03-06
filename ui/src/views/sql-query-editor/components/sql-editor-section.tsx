
import { useQuery } from '@apollo/client'
import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect, useRef } from 'react'
import { GetSchemaQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_SCHEMA_INFO } from 'src/api-logic/graphql/queries/get-schema'
import { getRecordsFromSchema } from 'src/api-logic/mappers/schema'
import { useQueryContext, useQuerySetState } from 'src/state/contexts/query.context'
import { sqlKeywords } from 'src/utils/monaco-editor/autocomplete/sql-keywords'
import SchemaSection from './schema-section'

type SQLEditorSectionProps = {
  onEnterKey?: () => void
  children?: React.ReactNode
}

const SQLEditorSection: React.FC<SQLEditorSectionProps> = ({ onEnterKey }: SQLEditorSectionProps) => {
  const [{ query }] = useQueryContext()
  const { setQuery } = useQuerySetState()
  const monaco = useMonaco()

  const resizeElement = useRef<HTMLDivElement | null>(null)
  const resizerElement = useRef<HTMLDivElement | null>(null)

  const { data } = useQuery<GetSchemaQuery>(GET_SCHEMA_INFO, {
    variables: { search: '' },
    fetchPolicy: 'no-cache'
  })

  /**
   * useEffect for handle resizing (horizontal divider)
   */
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

  /**
   * useEffect for query execution with (shift + Enter)
   */
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

  /**
   * useEffect for adding autocomplete keywords
   */
  useEffect(() => {
    if (monaco && data) {
      monaco.languages.registerCompletionItemProvider('sql', {
        provideCompletionItems: (model, position) => {
          const word = model.getWordUntilPosition(position)
          const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          }

          const keywordSuggestions = sqlKeywords.map((keyword) => ({
            label: keyword,
            kind: monaco.languages.CompletionItemKind.Keyword,
            documentation: keyword + ' (SQL keyword)',
            insertText: keyword,
            range,
          }))

          const schemaSuggestions = getRecordsFromSchema(data, 'schema').map((schema) => ({
            label: schema,
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: schema + ' (schema)',
            insertText: schema,
            range,
          }))

          const tableSuggestions = getRecordsFromSchema(data, 'tableName').map((table) => ({
            label: table,
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: table + ' (table)',
            insertText: table,
            range,
          }))

          const columnSuggestions = getRecordsFromSchema(data, 'columnName').map((column) => ({
            label: column,
            kind: monaco.languages.CompletionItemKind.Field,
            documentation: column + ' (column)',
            insertText: column,
            range,
          }))

          return {
            suggestions: [
              ...keywordSuggestions,
              ...schemaSuggestions,
              ...tableSuggestions,
              ...columnSuggestions,
            ],
          }
        },
      })
    }
  }, [monaco, data])

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

        <div className='border-l flex-1' style={{ minWidth: '340px' }}>
          <SchemaSection />
        </div>
      </div>
      <div className='t-resizer z-10' ref={resizerElement} />
    </>
  )
}

export default SQLEditorSection
