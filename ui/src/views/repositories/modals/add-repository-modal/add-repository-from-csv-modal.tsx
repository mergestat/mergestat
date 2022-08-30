import { Label, Textarea } from '@mergestat/blocks'
import React, { ChangeEvent, useEffect } from 'react'
import { useRepositoriesSetState } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'

export const AddRepositoryFromCSVModal: React.FC = () => {
  const { resetValues, setCSVText } = useRepositoriesSetState()

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCSVText(e.target.value)
  }

  useEffect(() => {
    return () => resetValues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-1">
        <h3 className="t-h3 mb-6">Add from CSV</h3>
        <Label>Repository URL per line:</Label>
      </div>
      <Textarea data-testid={TEST_IDS.addRepoTextArea} className="h-84" defaultValue={''} onChange={onChange} />
    </div>
  )
}
