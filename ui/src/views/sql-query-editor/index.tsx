import { Button, EditableText, Spinner, SplitButton, Tooltip } from '@mergestat/blocks'
import { ClockHistoryIcon, CogIcon, TerminalIcon, WarningFilledIcon } from '@mergestat/icons'
import { ChangeEvent, useEffect } from 'react'
import { MSM_NON_READ_ONLY, States } from 'src/utils/constants'
import useQueryEditor from '../hooks/useQueryEditor'
import useSavedQuery from '../hooks/useSavedQuery'
import SQLEditorSection from './components/sql-editor-section'
import QueryEditorCanceled from './components/state-canceled'
import QueryEditorEmpty from './components/state-empty'
import QueryEditorError from './components/state-error'
import QueryEditorFilled from './components/state-filled'
import QueryEditorLoading from './components/state-loading'
import QueryEditorRowsImpacted from './components/state-rows-affected'
import { QuerySettingsModal } from './modals/query-setting'
import { QueryHistoryModal } from './modals/query-history'

type QueryEditorProps = {
  savedQueryId?: string | string[]
  children?: React.ReactNode
}

const QueryEditor: React.FC<QueryEditorProps> = ({ savedQueryId }: QueryEditorProps) => {
  const ROWS_LIMIT = 1000
  const {
    setQuery, setShowSettingsModal, setShowQueryHistoryModal, setTitle, setDesc, executeSQLQuery, cancelSQLQuery,
    expanded, showSettingsModal, showQueryHistoryModal, state, rowLimitReached, executed, readOnly,
    loading, error, query, data, time, title, desc
  } = useQueryEditor(ROWS_LIMIT)

  const { savedQuery, titleError, setTitleError, addSavedQueryHandler, updateSavedQueryHandler } = useSavedQuery({ savedQueryId, title, desc, query })

  useEffect(() => {
    setTitle(savedQuery?.name || '')
    setDesc(savedQuery?.description || '')
    savedQueryId && setQuery(savedQuery?.sql || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedQuery])

  useEffect(() => {
    title !== '' && setTitleError(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return (
    <>
      {/* Header */}
      {!expanded &&
        <div className='bg-white overflow-auto flex justify-between items-center h-17 w-full border-b px-8 py-2'>
          <EditableText
            className='flex-grow mr-5'
            icon={<TerminalIcon className="t-icon" />}
            title={{
              placeholder: `${!query ? 'Loading...' : 'Untitled Saved Query'}`,
              value: title,
              required: titleError,
              onChange: (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
            }}
            desc={{
              placeholder: `${!query ? 'Loading...' : 'Enter a short description for this query (optional)'}`,
              value: desc,
              onChange: (e: ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)
            }}
          />

          <div className='flex items-center gap-x-6'>
            {!readOnly && !expanded && <div className='flex items-center'>
              <WarningFilledIcon className="t-icon t-icon-warning" />
              <Tooltip placement='bottom' offset={[0, 10]}
                content={<div className='w-52'>{MSM_NON_READ_ONLY}</div>}
              >
                <span className='ml-2 text-gray-500 border-b-2 border-gray-400 border-dotted'>Non read-only!</span>
              </Tooltip>
            </div>}

            <Button isIconOnly
              skin='borderless-muted'
              startIcon={<CogIcon className='t-icon' />}
              onClick={() => setShowSettingsModal(true)}
            />

            <Button isIconOnly
              skin='borderless-muted'
              startIcon={<ClockHistoryIcon className='t-icon' />}
              onClick={() => setShowQueryHistoryModal(true)}
            />

            <div className='flex gap-x-2'>
              {savedQueryId
                ? <SplitButton
                  text="Save"
                  items={[{ text: 'Save as new...' }]}
                  onButtonClick={updateSavedQueryHandler}
                  onItemClick={addSavedQueryHandler}
                />
                : <Button
                  className='whitespace-nowrap justify-center'
                  label='Save As New'
                  skin="secondary"
                  onClick={addSavedQueryHandler}
                />}

              {loading
                ? <Button
                  className='whitespace-nowrap justify-center w-32'
                  label='Cancel'
                  skin="secondary"
                  startIcon={loading && <Spinner size='sm' className='mr-4' />}
                  onClick={cancelSQLQuery} />
                : <Button
                  className='whitespace-nowrap justify-center ml-0 w-32'
                  label='Run (⇧ + ↵)'
                  onClick={() => executeSQLQuery()}
                />}
            </div>
          </div>
        </div>}

      {/* Body */}
      <div className='flex flex-col flex-1 items-center overflow-auto'>
        {/* SQL editor */}
        {!expanded && <SQLEditorSection
          onEnterKey={() => {
            if (!loading && query) { executeSQLQuery() }
          }}
        />}

        {/* Empty state */}
        {!error && !loading && state === States.Empty && <QueryEditorEmpty executed={executed} data={data} />}

        {/* Canceled state */}
        {!error && !loading && state === States.Canceled && <QueryEditorCanceled />}

        {/* Error state */}
        {!loading && state === States.Error && error && <QueryEditorError errors={error} />}

        {/* Loading state */}
        {loading && <QueryEditorLoading />}

        {!error && !loading && data?.execSQL.rows?.length === 0 && state === States.Affected && data.execSQL.rowCount &&
          <QueryEditorRowsImpacted data={data} />
        }

        {/* Filled state */}
        {!error && !loading && data && state === States.Filled &&
          <QueryEditorFilled rowLimit={ROWS_LIMIT} rowLimitReached={rowLimitReached} time={time} />
        }
      </div>

      {showSettingsModal && <QuerySettingsModal />}
      {showQueryHistoryModal && <QueryHistoryModal />}
    </>
  )
}

export default QueryEditor
