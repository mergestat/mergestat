import Head from 'next/head'
import { ChangeEvent, Fragment, useState } from 'react'

import { Alert, Button, HelpText, Icon, Input, Label, Panel } from '@mergestat/blocks'
import { auth } from 'src/api-logic/axios/api'

const LoginPage = () => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const loggedOut = false
  const error = false

  return (
    <Fragment>
      <Head>
        <title>MergeStat</title>
      </Head>
      <main className="w-full min-h-screen h-full flex flex-col items-center justify-center bg-gray-800">
        <Panel className="w-full max-w-lg">
          <Panel.Header>
            <Icon
              as="/logo.svg"
              width={144}
              className="flex w-auto items-center"
            />
          </Panel.Header>
          <Panel.Body>
            {loggedOut && (
              <Alert theme="light" type="warning" className="mb-6" >
                You’ve been logged out. Please log in again.
              </Alert>
            )}
            <Alert type="info" className="mb-6">
              Login using your MergeStat <strong>database credentials</strong>.
            </Alert>

            {/* <h2 className="t-h2">Log in</h2> */}
            <form className="space-y-4">
              <div>
                <Label>Database user
                  <Input value={user} placeholder="username"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value)}
                  />
                </Label>
              </div>
              <div>
                <Label>Database password
                  <Input type="password" value={password} placeholder="password" variant={error ? 'error' : 'default'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  />
                </Label>
                {error && (
                  <HelpText variant="error">Incorrect password</HelpText>
                )}
              </div>
              <Button
                isBlock
                label="Log in"
                onClick={() => auth(user, password)}
              />
            </form>
          </Panel.Body>
        </Panel>
      </main>
    </Fragment>
  )
}

LoginPage.layout = 'fullscreen'

export default LoginPage
