import { Button, Checkbox, Dropdown, Input, ListItem, Menu, Panel } from '@mergestat/blocks'
import { CaretDownIcon, PlusIcon, RepositoryIcon } from '@mergestat/icons'
import Image from 'next/image'
import React, { useState } from 'react'

const EmptyState: React.FC = () => {
  return (
    <div className='h-80'>
      <div className='flex items-center justify-center h-20 p-10 border border-gray-200 rounded'>
        <p className='text-semantic-mutedText text-center text-sm'>
          Enter GitHub organization or username to configure the auto import settings.
        </p>
      </div>
    </div>
  )
}

const OrgIcon: React.FC<{ organization: string }> = ({ organization }) => {
  return (organization.includes('github')
    ? <Image
      src={''}
      width={40}
      height={40}
      loader={({ src }) => `${src}?w=1&q=50`}
      objectFit='contain'
      className='rounded'
      alt=''
    />
    : <RepositoryIcon className='t-icon' />
  )
}

const syncsTypesArray = [
  {
    type: 'GIT_COMMITS',
    description: 'Retrieves the commit history of a repo',
    shortName: 'Git Commits'
  },
  {
    type: 'GIT_COMMIT_STATS',
    description: 'Retrieves commit stats for a repo',
    shortName: 'Git Commit Stats'
  },
  {
    type: 'GIT_FILES',
    description: 'Retrieves files (content and paths) of a git repo',
    shortName: 'Git Files'
  },
  {
    type: 'GITHUB_PR_COMMITS',
    description: 'Retrieves commits for all pull requests in a GitHub repo',
    shortName: 'GitHub PR Commits'
  },
  {
    type: 'GITHUB_PR_REVIEWS',
    description: 'Retrieves the reviews of all pull requests in a GitHub repo',
    shortName: 'GitHub PR Reviews'
  },
  {
    type: 'GITHUB_REPO_ISSUES',
    description: 'Retrieves all the issues of a GitHub repo',
    shortName: 'GitHub Repo Issues'
  },
  {
    type: 'GITHUB_REPO_METADATA',
    description: 'Retrieves metadata about a GitHub repo',
    shortName: 'GitHub Repo Metadata'
  },
  {
    type: 'GITHUB_REPO_PRS',
    description: 'Retrieves all the pull requests of a GitHub repo',
    shortName: 'GitHub Repo Pull Requests'
  },
  {
    type: 'GITHUB_REPO_STARS',
    description: 'Retrieves all stargazers of a GitHub repo',
    shortName: 'GitHub Repo Stars'
  },
  {
    type: 'GIT_REFS',
    description: 'Retrieves all the refs of a git repo',
    shortName: 'Git Refs'
  }
]

export const AutoImportFromGitModal: React.FC = () => {
  const [value, setValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  const [organization, setOrganization] = useState<string>('')
  const addAutoImport = () => setOrganization(value)

  return (
    <div className='w-full flex flex-col'>
      <div className='p-6 flex-1 overflow-auto'>
        <div className='mb-6'>
          <h3 className='t-h3'>Auto import from GitHub</h3>
          <p className='text-semantic-mutedText'>This will automatically import all repos from your GitHub organization or GitHub User.</p>
        </div>
        <div className='flex items-center gap-2 mb-6'>
            <div className='t-input-with-prepend flex-1'>
              <Dropdown
                alignEnd
                trigger={
                  <Button
                    label='Organization'
                    endIcon={<CaretDownIcon className='t-icon' />}
                    skin='secondary'
                  />
                }
                overlay={() => (
                  <Menu className='whitespace-nowrap w-full'>
                    <Menu.Item text='Organization' />
                    <Menu.Item text='User' />
                  </Menu>
                )}
              />
              <Input
                id='orgName'
                type='text'
                value={value}
                onChange={handleChange}
                placeholder='organization-name'
              />
            </div>
            <Button
              skin='secondary'
              className='whitespace-nowrap'
              startIcon={<PlusIcon className='t-icon' />}
              onClick={addAutoImport}
            >
              Add
            </Button>
          </div>

        {organization.length === 0 && <EmptyState />}

        {organization.length > 0 && (
          <>
            <div className='border border-gray-200 rounded mb-6'>
              <ListItem
                title={organization}
                subline='GitHub organization'
                className={'px-4 py-2'}
                startIcon={<OrgIcon organization={organization} />}
                onClick={() => false}
                onTrashClick={() => (console.log('test'))}
              />
            </div>
            <Panel className='rounded-md w-full shadow-sm'>
              <Panel.Header>
                  <h4 className='t-h4 mb-0'>Select default syncs</h4>
              </Panel.Header>
              <Panel.Body className='p-0'>
                  <table className='t-table-default'>
                      <thead>
                      <tr className='bg-white'>
                          <th scope='col' key='name' className='whitespace-nowrap px-4'></th>
                          <th scope='col' key='name' className='whitespace-nowrap px-4'>Name</th>
                      </tr>
                      </thead>

                      <tbody className='bg-white'>
                          {syncsTypesArray.map((syncType, index) => (
                              <tr key={index}>
                                  <td className='py-3 pl-8 pr-4 w-0'>
                                      <Checkbox />
                                  </td>
                                  <td className='py-3 pl-4 pr-8'>
                                    <h4 className='font-medium mb-0.5'>{syncType.shortName}</h4>
                                    <p className='text-semantic-mutedText text-sm'>{syncType.description}</p>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </Panel.Body>
            </Panel>
          </>
        )}
      </div>
    </div>
  )
}
