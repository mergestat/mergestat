import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Toolbar, Panel, Tabs, Button, Label } from '@mergestat/blocks'
import { DuplicateIcon } from '@mergestat/icons'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat</title>
      </Head>
      <main className="w-full flex flex-col h-full bg-gray-50 overflow-hidden">
        <div className="bg-white h-16 w-full border-b px-8">
          <Toolbar className="h-full">
            <Toolbar.Left>
              <h2 className="t-h2 mb-0">Connect</h2>
            </Toolbar.Left>
          </Toolbar>
        </div>
        <div className="flex-1 items-center p-8 overflow-auto">
          <div className="sm_mx-auto sm_max-w-5xl">
            <Panel className="shadow-sm rounded-md">
              <Panel.Body className="p-8">
                <div className="mb-6">
                  <h3 className="t-h3">Connection details</h3>
                  <p className="text-gray-500">This is some helptext with a short description to explain how to use this connect page.</p>
                </div>

                <Tabs>
                  <Tabs.List>
                    <Tabs.Item>Parameters</Tabs.Item>
                    <Tabs.Item>URL</Tabs.Item>
                  </Tabs.List>
                  <Tabs.Panels>
                    <Tabs.Panel className="pt-6">
                      <div className="flex flex-col divide-y">
                        <div className="flex items-center w-full py-3">
                          <Label className="text-gray-500 w-56">Username</Label>
                          <div className="flex items-center w-full">
                            <p className="flex-1">admin</p>
                            <Button
                              isIconOnly
                              skin="borderless"
                              startIcon={<DuplicateIcon className="t-icon" />}
                            />
                          </div>
                        </div>
                        <div className="flex items-center w-full py-3">
                          <Label className="text-gray-500 w-56">Token</Label>
                          <div className="flex items-center w-full">
                            <pre className="flex-1"><code className="bg-gray-100 text-gray-500 px-1.5 py-0.5 font-mono text-sm rounded">0CSooWZ87tmqWT9BmS5nmXAZuuRQj8RC</code></pre>
                            <Button
                              isIconOnly
                              skin="borderless"
                              startIcon={<DuplicateIcon className="t-icon" />}
                            />
                          </div>
                        </div>
                        <div className="flex items-center w-full py-3">
                          <Label className="text-gray-500 w-56">Password</Label>
                          <div className="flex items-center w-full">
                            <p className="flex-1">••••••••••••</p>
                            <div className="t-button-toolbar">
                            <Button
                              label="Show"
                              skin="borderless"
                            />
                            <Button
                              isIconOnly
                              skin="borderless"
                              startIcon={<DuplicateIcon className="t-icon" />}
                            />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center w-full py-3">
                          <Label className="text-gray-500 w-56">Connection limit</Label>
                          <div className="flex items-center w-full">
                            <p className="flex-1">200</p>
                            <Button
                              isIconOnly
                              skin="borderless"
                              startIcon={<DuplicateIcon className="t-icon" />}
                            />
                          </div>
                        </div>
                        <div className="flex items-center w-full py-3">
                          <Label className="text-gray-500 w-56">SSL mode</Label>
                          <div className="flex items-center w-full">
                            <p className="flex-1">Require</p>
                            <Button
                              isIconOnly
                              skin="borderless"
                              startIcon={<DuplicateIcon className="t-icon" />}
                            />
                          </div>
                        </div>
                      </div>
                    </Tabs.Panel>
                    <Tabs.Panel className="pt-6">
                      <div className="bg-gray-50 border rounded-md p-5 font-mono text-sm text-gray-500 mb-4">
                          <pre>
                            <code className="whitespace-normal">postgresql://doadmin:show-password@focus-flow-dev-to-user-181985-9.b-db.ondigitalocean.com:25060/defaultdb?sslmode=require</code>
                          </pre>
                      </div>
                      <Button
                        label="Copy"
                        startIcon={<DuplicateIcon className="t-icon" />}
                        skin="secondary"
                        size="small"
                      />

                    </Tabs.Panel>
                  </Tabs.Panels>
                </Tabs>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Home
