import { Button, EditableText, Toolbar } from '@mergestat/blocks'
import { TableIcon } from '@mergestat/icons'
import { ChangeEvent } from 'react'
import { useContainerSyncDetailContext } from 'src/state/contexts/container-sync-detail.context'
import useContainerSyncUpdate from '../hooks/repoSyncs/useContainerSyncUpdate'
import useRepoSyncCrumb from '../hooks/repoSyncs/useRepoSyncCrumb'
import useRepoSyncDetail from '../hooks/repoSyncs/useRepoSyncDetail'
import GitSourcesContainer from './components/git-sources'
import SettingsCS from './components/settings'
import ContainerSyncStats from './components/stats'

type RepoSyncDetailView = {
  containerSyncId?: string | string[]
}

const RepoSyncDetailView: React.FC<RepoSyncDetailView> = ({ containerSyncId }: RepoSyncDetailView) => {
  useRepoSyncDetail(containerSyncId)
  useRepoSyncCrumb()

  const [{ loading, containerSyncDetail: { totalRepos } }] = useContainerSyncDetailContext()
  const { nameCS, descriptionCS, setNameCS, setDescriptionCS, updateCSNameDesc } = useContainerSyncUpdate()

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      <Toolbar className='bg-white border-b px-8 py-2'>
        <Toolbar.Left className='flex-grow'>
          <EditableText
            className='flex-grow mr-5'
            icon={<TableIcon className='t-icon' />}
            title={{
              value: nameCS || '',
              onChange: (e: ChangeEvent<HTMLInputElement>) => setNameCS(e.target.value)
            }}
            desc={{
              value: descriptionCS || '',
              placeholder: 'This is a short description',
              onChange: (e: ChangeEvent<HTMLInputElement>) => setDescriptionCS(e.target.value)
            }}
          />
        </Toolbar.Left>
        <Toolbar.Right className='flex-none'>
          <Button
            className='whitespace-nowrap justify-center'
            label='Save'
            skin="secondary"
            onClick={updateCSNameDesc}
          />
        </Toolbar.Right>
      </Toolbar>

      <div className="flex-1 space-y-6 w-full p-8 bg-gray-50 overflow-auto">
        <ContainerSyncStats loading={loading}
          totalRepos={totalRepos || 0}
          totalErrors={0}
          meanRunningTime={'0s'}
        />
        <SettingsCS />
        <GitSourcesContainer containerSyncId={containerSyncId} />
      </div>
    </div>
  )
}

export default RepoSyncDetailView
