import { Button, Label, Panel } from '@mergestat/blocks'
import { CodeIcon } from '@mergestat/icons'
import Loading from 'src/components/Loading'
import RepoImage from 'src/components/RepoImage'
import { useRepoExploreContext } from 'src/state/contexts/repo-explore.context'
import { getRepoFromUrl } from 'src/utils'

const CardLoading: React.FC = () => {
  return (
    <div className='flex min-h-xs items-center'><Loading /></div>
  )
}

const CardsStatsExplore: React.FC = () => {
  const [{ loading, exploreData: { top_10_repos: top10Repos, top_10_authors: top10Authors } }] = useRepoExploreContext()

  return (
    <div className='py-8'>
      <div className='md_grid md_grid-cols-2 gap-6 space-y-4 md_space-y-0'>
        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>Top 10 Repos</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>
                <div className='flex flex-col space-y-2'>
                  {top10Repos && Object.entries(top10Repos).map(([repo], index) => (
                    <div className='flex items-center space-x-2' key={`top-repos-${index}`}>
                      <RepoImage vendor={'github'} vendorUrl={'https://github.com'} orgName={getRepoFromUrl(repo).split('/')[0]} size="6" />
                      <span className='text-gray-400 text-xs'>{getRepoFromUrl(repo)}</span>
                    </div>
                  ))}
                </div>
                <div></div>
              </div>
            }
          </Panel.Body>
        </Panel>

        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>Top 10 Authors</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>
                <div className='flex flex-col space-y-3'>
                  {top10Authors && Object.entries(top10Authors).map(([repo], index) => (
                    <div className='flex items-center space-x-2' key={`top-repos-${index}`}>
                      <span className='text-gray-400 text-xs'>{getRepoFromUrl(repo)}</span>
                    </div>
                  ))}
                </div>
                <div></div>
              </div>
            }
          </Panel.Body>
        </Panel>
      </div>

      <div className='md_grid md_grid-cols-2 gap-6 space-y-4 md_space-y-0 pt-6'>
        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>Repo Last Modified</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>

              </div>
            }
          </Panel.Body>
        </Panel>

        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>File Last Modified</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>

              </div>
            }
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default CardsStatsExplore
