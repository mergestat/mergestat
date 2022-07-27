import { CHECKBOX_STATES, Panel, Table } from '@mergestat/blocks'
import React, { useMemo, useState } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { columns } from './columns'
import { sampleRepositoriesData } from 'src/sample-data/repositories-data'
import { mapToRepoData } from 'src/api-logic/mappers/repos'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'

type RepositoriesTableProps = {
  data?: GetReposQuery
  children?: React.ReactNode
}

export const RepositoriesTable: React.FC<RepositoriesTableProps> = ({ data }: RepositoriesTableProps) => {
  const [selectedRepos, setSelectedRepos] = useState<RepoDataPropsT[]>([])
  const [isSelectAllRepos, setIsSelectAll] = useState<boolean>(false)

  const selectedRepositoriesCount: number = useMemo(
    () => selectedRepos.length,
    [selectedRepos]
  )

  const repos = mapToRepoData(data)

  const checkedState =
    selectedRepositoriesCount === 0
      ? CHECKBOX_STATES.Unchecked
      : selectedRepositoriesCount === sampleRepositoriesData.length
        ? CHECKBOX_STATES.Checked
        : CHECKBOX_STATES.Indeterminate

  return (
    <Panel className="rounded-md w-full shadow-sm">
      <Panel.Body className="p-0">
        <Table
          noWrapHeaders
          className="border-b"
          tableWrapperClassName="h-full"
          columns={columns}
          dataSource={repos || []}
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
