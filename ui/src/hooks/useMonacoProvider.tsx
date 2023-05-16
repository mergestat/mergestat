import { useLazyQuery } from '@apollo/client'
import { useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react'
import { GetSchemaQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_SCHEMA_INFO } from 'src/api-logic/graphql/queries/get-schema'
import { getRecordsFromSchema } from 'src/api-logic/mappers/schema'
import { sqlKeywords } from 'src/utils/monaco-editor/autocomplete/sql-keywords'

export const useMonacoProvider = () => {
  const monaco = useMonaco()

  const [getSchemaInfo, { data }] = useLazyQuery<GetSchemaQuery>(GET_SCHEMA_INFO, {
    variables: { search: '' },
    fetchPolicy: 'no-cache'
  })

  /**
   * useEffect for adding autocomplete keywords for SQL language
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

  return {
    getSchemaInfo
  }
}
