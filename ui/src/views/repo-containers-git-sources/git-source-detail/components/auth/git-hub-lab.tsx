import { Badge, Button, Input, Label, Panel } from '@mergestat/blocks'
import { CheckIcon, CircleCheckFilledIcon, CircleWarningFilledIcon } from '@mergestat/icons'
import { useGitSourceDetailContext } from 'src/state/contexts/git-source-detail.context'
import { LINKS_TO, TEST_IDS, VENDOR_TYPE } from 'src/utils/constants'
import useSetPat from 'src/views/hooks/useSetPat'
import SettedAuth from './setted-auth'

const GitHubOrLabAuth: React.FC = () => {
  const [{ gsDetail: { id, auth, vendor, settings } }] = useGitSourceDetailContext()
  console.log(settings)
  let baseURL = ''
  if (vendor === VENDOR_TYPE.GITLAB && 'url' in settings) {
    baseURL = settings.url as string
    console.log(settings.url)
  }
  const {
    pat,
    showValidation,
    isTokenValid,
    validatePAT,
    changeToken,
    handleSavePAT,
  } = useSetPat(id, auth, vendor === VENDOR_TYPE.GITHUB, baseURL)

  return (
    <Panel className='rounded-md shadow-sm m-auto'>
      <Panel.Header>
        <div className='w-full flex justify-between'>
          <h4 className='t-panel-title'>Authentication</h4>
          {auth?.credentials &&
            <Badge
              label='Token is set'
              endIcon={<CheckIcon className="t-icon" />}
              variant="success"
            />}
        </div>
      </Panel.Header>

      <Panel.Body className='p-6'>
        {auth && <SettedAuth {...auth} />}

        {!auth && <>
          {vendor === VENDOR_TYPE.GITHUB &&
            <p className='mb-6 t-text-muted'>
              In order to access the GitHub API and any private GitHub
              repos, we need to authenticate with{' '}
              <a
                target='_blank'
                href={LINKS_TO.createGithubPAT}
                className='t-link font-semibold'
                rel='noopener noreferrer'
              >
                a (classic) personal access token
              </a>{' '}
              (PAT). Other authentication methods (such as an OAuth based
              flow) may become available in the future.
            </p>}

          {vendor === VENDOR_TYPE.GITLAB &&
            <p className='mb-6 t-text-muted'>
              In order to access the GitLab API and any private GitLab repositories,
              we need to authenticate with an{' '}
              <a
                target='_blank'
                href={LINKS_TO.createGitlabPAT}
                className='t-link font-semibold'
                rel='noopener noreferrer'
              >
                API Access Token
              </a>.{' '}
            </p>}

          <form className='mb-4'>
            <div className='flex flex-col mt-8 mb-5'>
              {vendor === VENDOR_TYPE.GITHUB && <Label>GitHub personal access token</Label>}
              {vendor === VENDOR_TYPE.GITLAB && <Label>API Access Token</Label>}
              <div className='flex space-x-2'>
                <Input
                  className='max-w-lg'
                  data-testid={TEST_IDS.patInputText}
                  placeholder={vendor === VENDOR_TYPE.GITHUB ? 'ghp_s0mEsecReTt0k3n' : 'glpat-s0mEsecReTt0k3n'}
                  type='password'
                  autoComplete='off'
                  value={pat}
                  onChange={changeToken}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleSavePAT()
                    }
                  }}
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
            </div>
          </form>

          <Button
            label='Save'
            disabled={pat === ''}
            data-testid={TEST_IDS.patSetToken}
            onClick={handleSavePAT}
          />
        </>}
      </Panel.Body>
    </Panel>
  )
}

export default GitHubOrLabAuth
