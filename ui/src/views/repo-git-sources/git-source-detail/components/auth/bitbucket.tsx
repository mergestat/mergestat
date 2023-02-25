import { useGitSourceDetailContext } from 'src/state/contexts/git-source-detail.context'

const BitbucketAuth: React.FC = () => {
  const [{ gsDetail: { id, auth } }] = useGitSourceDetailContext()

  return (
    <></>
  )
}

export default BitbucketAuth
