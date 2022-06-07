
import {
  Button,
  Checkbox,
  CHECKBOX_STATES,
  HelpText,
  Panel,
  Table,
  Toolbar
} from '@mergestat/blocks'
import { CaretDownIcon, PencilIcon, RefreshIcon } from '@mergestat/icons'
import React, { useMemo, useState } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { SyncDataDropDown } from '../../drop-downs/sync-repos-data-drop-down'
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
      <Panel.Header className='px-0'>
        <Toolbar>
          <Toolbar.Left>
            <div className='flex items-center gap-6'>
              <Checkbox
                value={checkedState}
                onChange={() => {
                  setIsSelectAll(!isSelectAllRepos)
                }}
              />
              <HelpText className='font-medium'>
                <span className='text-samantic-header'>
                  {selectedRepositoriesCount} of {sampleRepositoriesData.length}
                </span>{' '}
                repos selected
              </HelpText>
            </div>
          </Toolbar.Left>
          <Toolbar.Right>
            <div className='flex items-center gap-2'>
              <SyncDataDropDown
                triger={
                  <Button
                    endIcon={<CaretDownIcon className='t-icon' />}
                    startIcon={<RefreshIcon className='t-icon' />}
                    skin='secondary'
                    size="small"
                    disabled={selectedRepositoriesCount === 0}
                  >
                    Sync Data
                  </Button>
                }
              />

              <Button
                endIcon={<CaretDownIcon className='t-icon' />}
                startIcon={<PencilIcon className='t-icon' />}
                skin='secondary'
                size="small"
                disabled={selectedRepositoriesCount === 0}
              >
                Edit Tags
              </Button>
            </div>
          </Toolbar.Right>
        </Toolbar>
      </Panel.Header>
      <Panel.Body className='p-0'>
        <Table
          noWrapHeaders
          className="border-b"
          tableWrapperClassName='h-full'
          columns={columns}
          dataSource={sampleRepositoriesData}
          responsive
          borderless
          scrollY="100%"
          tableHeaderBackground="gray-50"
          checkable
          hasSelectAll={false}
          onSelectedChange={setSelectedRepos}
          selectAll={isSelectAllRepos}
        />
      </Panel.Body>
    </Panel>
  )
}
