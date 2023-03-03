import { useGitSourceDetailContext } from 'src/state/contexts/git-source-detail.context'
import { VENDOR_TYPE } from 'src/utils/constants'
import BitbucketAuth from '../components/auth/bitbucket'
import GitHubAuth from '../components/auth/github'
import ReposAutoManual from '../components/repos'
import GitSourceStats from '../components/stats'

const GitSourceOverviewTab: React.FC = () => {
  const [{ loading, gsDetail: { totalAuto, totalManual, totalRepos, vendor } }] = useGitSourceDetailContext()

  return (
    <>
      <GitSourceStats loading={loading}
        totalAuto={totalAuto || 0}
        totalManual={totalManual || 0}
        totalRepos={totalRepos || 0}
      />

      {/** Auth */}
      {vendor === VENDOR_TYPE.GITHUB && <GitHubAuth />}
      {vendor === VENDOR_TYPE.BITBUCKET && <BitbucketAuth />}

      {/** Repo list */}
      <ReposAutoManual />
    </>
  )
}

export default GitSourceOverviewTab
