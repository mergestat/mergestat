import React, { useState } from "react"
import { HelpText, Textarea } from "@mergestat/blocks"
import { useReposContext } from './useAddRepoContext'

const AddFromCsv = () => {
  const [{ reposFromCSV }, setReposState] = useReposContext()

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-1">
        <h3 className="t-h3 mb-3">Add from CSV</h3>     
        <HelpText>Paste CSV</HelpText>
      </div>

      <Textarea
        className="h-84"
        defaultValue={reposFromCSV.join('\n')}
        onChange={(e) => {
          const repos = e.currentTarget.value.split('\n')
          setReposState(prevState => ({
            ...prevState,
            reposFromCSV: repos,
          }))
        }}
      />
    </div>
  )
}

export default AddFromCsv
