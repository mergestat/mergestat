import { Label, Panel, Toggle } from '@mergestat/blocks'
import React, { PropsWithChildren } from 'react'
import Loading from 'src/components/Loading'
import useContainerSyncsLogs from 'src/views/hooks/repoContainerSyncs/useContainerSyncsLogs'

export const SyncSettingsForm = () => {
  const { loading, repoData, syncId, addSchedule, removeSchedule } = useContainerSyncsLogs()

  return (
    <>
      {loading
        ? <Loading />
        : <Panel className="shadow-sm">
          <Panel.Header>
            <h3 className="t-panel-title">Sync settings</h3>
          </Panel.Header>
          <Panel.Body>
            <form className="flex flex-col gap-2">
              <Formrow>
                <Label className='text-gray-600 font-medium'>Schedule</Label>
                <div className="w-64 flex gap-2 items-center">
                  <Toggle
                    isChecked={!!repoData.sync?.scheduleId}
                    onChange={() => {
                      repoData.sync?.scheduleId
                        ? removeSchedule({ variables: { id: repoData.sync?.scheduleId } })
                        : addSchedule({ variables: { syncId } })
                    }}
                  />
                  <span className="t-text-default">Enable</span>
                </div>
              </Formrow>
            </form>
          </Panel.Body>
        </Panel>}
    </>
  )
}

const Formrow: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md">
      {props.children}
    </div>
  )
}
