import { Button } from '@mergestat/blocks'
import { TrashIcon } from '@mergestat/icons'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { RemoveGitSourceModal } from '../modals/remove-git-source'

const GitSourceSettingsTab: React.FC = () => {
  const { setShowRemoveGitSourceModal } = useGitSourceDetailSetState()
  const [{ showRemoveGitSourceModal }] = useGitSourceDetailContext()

  return (
    <div className='h-full'>
      <Button
        skin="danger"
        startIcon={<TrashIcon className="t-icon" />}
        onClick={() => setShowRemoveGitSourceModal(true)}
      >
        Remove Git Source
      </Button>

      {showRemoveGitSourceModal && <RemoveGitSourceModal />}
    </div>
  )
}

export default GitSourceSettingsTab
