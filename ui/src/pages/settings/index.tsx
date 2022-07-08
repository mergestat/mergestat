
import React, { useState } from 'react'
import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Toolbar, Panel, Input, Button, Label } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleWarningFilledIcon } from '@mergestat/icons'

const Settings: NextPage = () => {
    const [showValidation, setShowValidation] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);


    function changeValidation() {
        setShowValidation(true);
        setIsTokenValid(!isTokenValid);
    }

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
                        <ul className="t-vertical-nav">
                            <li className="t-vertical-nav-item active">
                                <Link href="#">
                                    <a href='#'>Github authentication</a>
                                </Link>
                            </li>
                            <li className="t-vertical-nav-item">
                                <a href='#'>Preferences</a>
                            </li>
                            <li className="t-vertical-nav-item">
                                <a href='#'>Settings category</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex flex-col flex-1">
                    <div className="bg-white h-16 w-full border-b px-8">
                        <Toolbar className="h-full">
                            <Toolbar.Left>
                                <h2 className="t-h2 mb-0">GitHub authentication</h2>
                            </Toolbar.Left>
                            <Toolbar.Right>
                                <Button label="Save" />
                            </Toolbar.Right>
                        </Toolbar>
                    </div>
                    <div className="flex-1 p-8 overflow-auto">
                        <Panel>
                            <Panel.Body>
                                <p className="mb-6 text-gray-500">Learn more about <Link href="/"><a className="t-link">how to generate a personal access token</a></Link>.</p>
                                <Label>GitHub Personal Access Token</Label>
                                <div className="flex align-center space-x-3">
                                    <Input className="max-w-xl" type="password" />
                                    <Button
                                        label="Validate"
                                        skin="secondary"
                                        onClick={changeValidation}
                                    />
                                    {(showValidation && isTokenValid) && (
                                        <div className="flex items-center">
                                            <CircleCheckFilledIcon className="t-icon t-icon-success" />
                                            <p className="text-green-700 ml-1.5">Token valid</p>
                                        </div>
                                    )}
                                    {(showValidation && !isTokenValid) && (
                                        <div className="flex items-center">
                                            <CircleWarningFilledIcon className="t-icon t-icon-danger" />
                                            <p className="text-red-700 ml-1.5">Token invalid</p>
                                        </div>
                                    )}
                                </div>

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
