import { Label, Panel, Toggle } from '@mergestat/blocks'
import React, { PropsWithChildren } from 'react'
import Loading from 'src/components/Loading'
import useSyncsLogs from 'src/views/hooks/useSyncsLogs'
import { showErrorAlert, showSuccessAlert } from 'src/utils/alerts'
import { ApolloError } from '@apollo/client'
import { ScheduleMutation } from 'src/api-logic/graphql/generated/schema'

export const SyncSettingsForm = () => {
  const { loading, repoData, syncTypeId, updateSchedule } = useSyncsLogs()

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
                    isChecked={repoData.sync?.scheduleEnabled || false}
                    onChange={() => updateSchedule({
                      variables: { syncId: syncTypeId, schedule: !repoData.sync?.scheduleEnabled },
                      onCompleted(data: ScheduleMutation) {
                        showSuccessAlert(`Schedule ${data.updateRepoSync?.repoSync?.scheduleEnabled ? 'enabled' : 'disabled'}`)
                      },
                      onError(error: ApolloError) {
                        showErrorAlert(error.message)
                      },
                    })}
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
