
import { Alert, Button, Input, Panel, Toolbar, VerticalNav } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleWarningFilledIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { LINKS_TO, TEST_IDS } from 'src/utils/constants'
import useSetPat from 'src/views/hooks/useSetPat'

const Settings: NextPage = () => {
  const { pat, showValidation, isTokenValid, validatePAT, changeToken, handleSavePAT } = useSetPat()

  return (
		<Fragment>
			<Head>
				<title>MergeStat</title>
			</Head>
			<main className="w-full flex flex-col h-full bg-gray-50 overflow-hidden">
				<div className="flex h-full">
					{/* Sidebar content */}
					<div className="flex flex-col w-72 h-full border-r">
						<div className="bg-white h-16 w-full border-b px-8">
							<Toolbar className="h-full">
								<Toolbar.Left>
									<h2 className="t-h2 mb-0">Settings</h2>
								</Toolbar.Left>
							</Toolbar>
						</div>
						<div className="flex-1 overflow-auto p-8">
							<VerticalNav>
								<VerticalNav.Item text="General" disabled={true} />
								<VerticalNav.Item text="GitHub Authentication" active={true} />
							</VerticalNav>
						</div>
					</div>

					{/* Main content */}
					<div className="flex flex-col flex-1">
						<div className="bg-white h-16 w-full border-b px-8">
							<Toolbar className="h-full">
								<Toolbar.Left>
									<h2 className="t-h2 mb-0">GitHub Authentication</h2>
								</Toolbar.Left>
							</Toolbar>
						</div>
						<div className="flex-1 p-8 overflow-auto">
							<Panel className="shadow-sm">
								<Panel.Body className="py-8">
									<h3 className="t-h3">GitHub Personal Access Token</h3>
									<Alert type="info" theme="light" className='mb-5'>
										<p>
											In order to access the  GitHub API and any private GitHub repositories, we need to authenticate with <a target='_blank' href={LINKS_TO.createPAt} className="t-link font-bold" rel='noopener noreferrer'>a personal access token</a> (PAT).
											Other authentication methods (such as an OAuth based flow) may become available in the future.
										</p>
									</Alert>
									<form className="mb-6">
										<div className="flex items-center space-x-3">
											<Input className="max-w-lg"
												data-testid={TEST_IDS.patInputText}
												placeholder="ghp_s0mEsecReTt0k3n"
												type="password"
												autoComplete="off"
												value={pat}
												onChange={changeToken}
											/>
											<Button
												label="Validate"
												skin="secondary"
												disabled={pat === ''}
												data-testid={TEST_IDS.patValidateToken}
												onClick={validatePAT}
											/>

											{(showValidation && isTokenValid) && (
												<div className="flex items-center">
													<CircleCheckFilledIcon className="t-icon t-icon-success flex-shrink-0" />
													<p className="text-green-700 ml-1.5">Token valid</p>
												</div>
											)}
											{(showValidation && !isTokenValid) && (
												<div className="flex items-center">
													<CircleWarningFilledIcon className="t-icon t-icon-danger flex-shrink-0" />
													<p className="text-red-700 ml-1.5">Token invalid</p>
												</div>
											)}
										</div>
									</form>
									<Button
										label="Save"
										disabled={pat === ''}
										data-testid={TEST_IDS.patSetToken}
										onClick={handleSavePAT} />
								</Panel.Body>
							</Panel>
						</div>
					</div>
				</div>
			</main>
		</Fragment>
  )
}

export default Settings
