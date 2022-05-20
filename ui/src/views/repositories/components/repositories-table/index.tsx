
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
import React from 'react'
import { SyncDataDropDown } from '../../drop-downs/sync-repos-data-drop-down'
import type { RepoDataProps } from './@types'
import { columns } from './columns'

import { sampleRepositoriesData } from './sample-data'

export const RepositoriesTable: React.FC = (props) => {

  const selectAllRepositories = (checked: boolean) => {
    sampleRepositoriesData.forEach((re: RepoDataProps & { isSelected?: boolean }) => re.isSelected = checked)
  }

  const selectedRepositoriesCount = sampleRepositoriesData.filter((repo: RepoDataProps & { isSelected?: boolean }) => repo.isSelected).length

  const checkedState = selectedRepositoriesCount === 0
    ? CHECKBOX_STATES.Unchecked
    : selectedRepositoriesCount === sampleRepositoriesData.length
      ? CHECKBOX_STATES.Checked
      : CHECKBOX_STATES.Indeterminate

  return (
    <Panel className="rounded-md h-full w-full shadow-sm">
      <Panel.Header className='px-0'>
        <Toolbar>
          <Toolbar.Left>
            <div className='flex items-center gap-6'>
              <Checkbox
                value={checkedState}
                onChange={(e) => {
                  const checked = e.currentTarget.checked
                  selectAllRepositories(checked)
                }}
              />
              <HelpText>
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
                    className='flex items-center gap-2'
                    endIcon={<CaretDownIcon className='w-4.5 h-4.5 text-samantic-icon' />}
                    startIcon={<RefreshIcon className='w-4.5 h-4.5 text-samantic-icon' />}
                    skin='secondary'
                    size="small"
                    disabled={selectedRepositoriesCount === 0}
                  >
                    Sync Data
                  </Button>
                }
              />

              <Button
                className='flex items-center gap-2'
                endIcon={<CaretDownIcon className='w-4.5 h-4.5 text-samantic-icon' />}
                startIcon={<PencilIcon className='w-4.5 h-4.5 text-samantic-icon' />}
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
          className="relative border-b"
          tableWrapperClassName='h-full'
          columns={columns}
          dataSource={sampleRepositoriesData}
          responsive
          borderless
          scrollY="100%"
          tableHeaderBackground="gray-50"
        />
      </Panel.Body>
    </Panel>
  )
}
