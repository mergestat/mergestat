import { GitSourceDetail } from 'src/@types'
import { VENDOR_TYPE } from 'src/utils/constants'
import BitbucketAuth from '../components/auth/bitbucket'
import GitHubAuth from '../components/auth/github'
import GitSourceStats from '../components/stats'

type GitSourceOverviewTabProps = {
  loading: boolean
  data?: GitSourceDetail
}

const GitSourceOverviewTab: React.FC<GitSourceOverviewTabProps> = ({ loading, data }: GitSourceOverviewTabProps) => {
  const { totalAuto, totalManual, totalRepos, vendor } = data || {}

  return (
    <>
      <GitSourceStats loading={loading}
        totalAuto={totalAuto || 0}
        totalManual={totalManual || 0}
        totalRepos={totalRepos || 0}
      />

      {vendor === VENDOR_TYPE.GITHUB && <GitHubAuth idProvider={data?.id || ''} auth={data?.auth} />}
      {vendor === VENDOR_TYPE.BITBUCKET && <BitbucketAuth {...data?.auth} />}
    </>
  )
}

export default GitSourceOverviewTab
