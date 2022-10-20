import { Alert, Button, Input, Panel, Toolbar } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleWarningFilledIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { LINKS_TO, TEST_IDS } from 'src/utils/constants'
import useSetPat from 'src/views/hooks/useSetPat'

import SettingsView from 'src/views/settings'

const Settings: NextPage = () => {
  const {
    pat,
    showValidation,
    isTokenValid,
    validatePAT,
    changeToken,
    handleSavePAT,
  } = useSetPat()

  return (
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
                <h2 className='t-h2 mb-0'>GitHub Authentication</h2>
              </Toolbar.Left>
            </Toolbar>
          </div>
          <div className='flex-1 p-8 overflow-auto'>
            <Panel className='shadow-sm'>
              <Panel.Header>
                <h3 className='t-panel-title'>GitHub Personal Access Token</h3>
              </Panel.Header>
              <Panel.Body>
                <Alert type='default' theme='light' className='mb-6'>
                  <span>
                    In order to access the GitHub API and any private GitHub
                    repositories, we need to authenticate with{' '}
                    <a
                      target='_blank'
                      href={LINKS_TO.createPAt}
                      className='t-link font-semibold'
                      rel='noopener noreferrer'
                    >
                      a personal access token
                    </a>{' '}
                    (PAT). Other authentication methods (such as an OAuth based
                    flow) may become available in the future.
                  </span>
                </Alert>
                <form className='mb-4'>
                  <div className='flex items-center space-x-3'>
                    <Input
                      className='max-w-lg'
                      data-testid={TEST_IDS.patInputText}
                      placeholder='ghp_s0mEsecReTt0k3n'
                      type='password'
                      autoComplete='off'
                      value={pat}
                      onChange={changeToken}
                    />
                    <Button
                      label='Validate'
                      skin='secondary'
                      disabled={pat === ''}
                      data-testid={TEST_IDS.patValidateToken}
                      onClick={validatePAT}
                    />

                    {showValidation && isTokenValid && (
                      <div className='flex items-center'>
                        <CircleCheckFilledIcon className='t-icon t-icon-success flex-shrink-0' />
                        <p className='text-green-700 ml-1.5'>Token valid</p>
                      </div>
                    )}
                    {showValidation && !isTokenValid && (
                      <div className='flex items-center'>
                        <CircleWarningFilledIcon className='t-icon t-icon-danger flex-shrink-0' />
                        <p className='text-red-700 ml-1.5'>Token invalid</p>
                      </div>
                    )}
                  </div>
                </form>
                <Button
                  label='Save'
                  disabled={pat === ''}
                  data-testid={TEST_IDS.patSetToken}
                  onClick={handleSavePAT}
                />
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </SettingsView>
    </Fragment>
  )
}

export default Settings
