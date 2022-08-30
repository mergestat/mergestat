import { Label, Textarea } from '@mergestat/blocks'
import React, { ChangeEvent, useCallback, useEffect } from 'react'
import { useRepositoriesSetState } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'

export const AddRepositoryFromCSVModal: React.FC = () => {
  const { setReposToAdd } = useRepositoriesSetState()

  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split(/\r?\n/)
    const matrix = lines.map(line => line.split(',').map(ele => ele.trim()))

    let newRepos: string[] = []
    matrix.forEach(line => {
      if (line[0] !== '' && !newRepos.includes(line[0])) {
        newRepos = [...newRepos, line[0]]
      }
    })
    setReposToAdd(newRepos)
  }, [setReposToAdd])

  useEffect(() => {
    return () => setReposToAdd([])
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
