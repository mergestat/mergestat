import { BreadcrumbNav, Button, Checkbox, ColoredBox, Panel, Toolbar } from '@mergestat/blocks'
import { GithubIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import SettingsView from 'src/views/settings'

const AutoImports: NextPage = () => {
  const router = useRouter()
  const crumbs = [
    {
      text: 'Auto imports',
      onClick: () => router.push('/settings/auto-imports'),
    },
    {
      text: 'MergeStat',
      startIcon: (
        <ColoredBox size='10'>
          <GithubIcon className='t-icon' />
        </ColoredBox>
      ),
    },
  ]

  const syncsTypesArray = [
    {
      type: 'GIT_COMMITS',
      description: 'Retrieves the commit history of a repo',
      shortName: 'Git Commits',
    },
    {
      type: 'GIT_COMMIT_STATS',
      description: 'Retrieves commit stats for a repo',
      shortName: 'Git Commit Stats',
    },
    {
      type: 'GIT_FILES',
      description: 'Retrieves files (content and paths) of a git repo',
      shortName: 'Git Files',
    },
    {
      type: 'GITHUB_PR_COMMITS',
      description: 'Retrieves commits for all pull requests in a GitHub repo',
      shortName: 'GitHub PR Commits',
    },
    {
      type: 'GITHUB_PR_REVIEWS',
      description:
        'Retrieves the reviews of all pull requests in a GitHub repo',
      shortName: 'GitHub PR Reviews',
    },
    {
      type: 'GITHUB_REPO_ISSUES',
      description: 'Retrieves all the issues of a GitHub repo',
      shortName: 'GitHub Repo Issues',
    },
    {
      type: 'GITHUB_REPO_METADATA',
      description: 'Retrieves metadata about a GitHub repo',
      shortName: 'GitHub Repo Metadata',
    },
    {
      type: 'GITHUB_REPO_PRS',
      description: 'Retrieves all the pull requests of a GitHub repo',
      shortName: 'GitHub Repo Pull Requests',
    },
    {
      type: 'GITHUB_REPO_STARS',
      description: 'Retrieves all stargazers of a GitHub repo',
      shortName: 'GitHub Repo Stars',
    },
    {
      type: 'GIT_REFS',
      description: 'Retrieves all the refs of a git repo',
      shortName: 'Git Refs',
    },
  ]

  return (
    <>
      <Fragment>
        <Head>
          <title>MergeStat</title>
        </Head>
        <SettingsView>
          {/* Main content */}
          <div className='flex flex-col flex-1'>
            <div className='bg-white h-16 w-full border-b px-8'>
              <Toolbar className='h-full'>
                <Toolbar.Left>
                  <BreadcrumbNav data={crumbs} />
                </Toolbar.Left>
                <Toolbar.Right>
                  <Button label='Save' />
                </Toolbar.Right>
              </Toolbar>
            </div>
            <div className='flex-1 p-8'>
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
                            {syncType.shortName}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Panel.Body>
              </Panel>
            </div>
          </div>
        </SettingsView>
      </Fragment>
    </>
  )
}

export default AutoImports
