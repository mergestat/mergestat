
import {
  Button,
  Checkbox,
  CHECKBOX_STATES,
  HelpText,
  Panel,
  Table,
  Toolbar
} from '@mergestat/blocks'
import React, { useMemo, useState } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { columns } from './columns'

import { sampleRepositoriesData } from 'src/sample-data/repositories-data'

export const RepositoriesTable: React.FC = (props) => {
  const [selectedRepos, setSelectedRepos] = useState<RepoDataPropsT[]>([])
  const [isSelectAllRepos, setIsSelectAll] = useState<boolean>(false)

  const selectedRepositoriesCount: number =
    useMemo(() => selectedRepos.length, [selectedRepos])

  const checkedState = selectedRepositoriesCount === 0
    ? CHECKBOX_STATES.Unchecked
    : selectedRepositoriesCount === sampleRepositoriesData.length
      ? CHECKBOX_STATES.Checked
      : CHECKBOX_STATES.Indeterminate

  return (
    <Panel className="rounded-md w-full shadow-sm">
      <Panel.Body className='p-0'>
        <Table
          noWrapHeaders
          className="border-b"
          tableWrapperClassName='h-full'
          columns={columns}
          dataSource={sampleRepositoriesData}
          responsive
          borderless
          checkable
          onSelectedChange={setSelectedRepos}
          selectAll={isSelectAllRepos}
        />
      </Panel.Body>
    </Panel>
  )
}
