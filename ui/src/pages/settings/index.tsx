
import React, { useState } from 'react'
import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Toolbar, Panel, Input, Button, VerticalNav } from '@mergestat/blocks'
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
                        <VerticalNav>
                            <VerticalNav.Item text="Github Authentication" active={true} />
                            <VerticalNav.Item text="General" disabled={true} />
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
                                <p className="mb-6 text-gray-500">Learn more about <Link href="/"><a className="t-link">how to generate a personal access token</a></Link>.</p>
                                <form className="mb-6">
                                    <div className="flex items-center space-x-3">
                                        <Input className="max-w-lg" type="password" />
                                        <Button
                                            label="Validate"
                                            skin="secondary"
                                            onClick={changeValidation}
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
                                <Button label="Save" />
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
