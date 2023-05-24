import { Alert, Button, HelpText, Input, Label, Panel } from '@mergestat/blocks'
import { Icon } from '@mergestat/icons'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, Fragment, useState } from 'react'
import { auth } from 'src/api-logic/axios/api'
import { MERGESTAT_TITLE } from 'src/utils/constants'

const LoginPage = () => {
  const title = `Login  ${MERGESTAT_TITLE}`
  const router = useRouter()
  const { lostSession } = router.query

  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleLogin = async () => {
    setError(false)
    const login = await auth(user, password)
    login ? router.push('/explore') : setError(true)
  }

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
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
            {lostSession && (
              <Alert theme="light" type="warning" className="mb-6" >
                Your session has expired. Please log in again.
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
                    onKeyPress={(e) => (e.key === 'Enter' && handleLogin())}
                  />
                </Label>
              </div>
              <div>
                <Label>Database password
                  <Input type="password" value={password} placeholder="password" variant={error ? 'error' : 'default'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    onKeyPress={(e) => (e.key === 'Enter' && handleLogin())}
                  />
                </Label>
                {error && (
                  <HelpText variant="error">Incorrect password</HelpText>
                )}
              </div>
              <Button isBlock label="Log in" onClick={handleLogin} />
            </form>
          </Panel.Body>
        </Panel>
      </main>
    </Fragment>
  )
}

LoginPage.layout = 'fullscreen'

export default LoginPage
