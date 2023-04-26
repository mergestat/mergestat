import { Button, Label, Panel } from '@mergestat/blocks'
import { CodeIcon } from '@mergestat/icons'
import Loading from 'src/components/Loading'
import RepoImage from 'src/components/RepoImage'
import { useRepoExploreContext } from 'src/state/contexts/repo-explore.context'
import { getRepoFromUrl } from 'src/utils'

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
              ? <div className='h-56'><Loading /></div>
              : <div className='flex justify-between h-56'>
                <div className='flex flex-col space-y-2'>
                  {/* {Object.entries(JSON.parse('{"https://github.com/mergestat/syncs":{"file_count":29},"https://github.com/mergestat/pqueue":{"file_count":1},"https://github.com/mergestat/mergestat":{"file_count":3},"https://github.com/mergestat/git-delivery":{"file_count":1},"https://github.com/mergestat/mysql-server":{"file_count":1},"https://github.com/mergestat/mergestat-lite":{"file_count":1},"https://github.com/mergestat/mergestat-gitstart":{"file_count":3}}')).map(([repo, data], index) => ( */}
                  {top10Repos && Object.entries(top10Repos).map(([repo, data], index) => (
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
              ? <div className='h-56'><Loading /></div>
              : <div className='flex justify-between h-56'>
                <div className='flex flex-col space-y-3'>
                  {/* {Object.entries(JSON.parse('{"Ramiro":{"commits_count":4},"RiyazAli":{"commits_count":19},"GermanCanon":{"commits_count":1},"renovate[bot]":{"commits_count":3},"PatrickDeVivo":{"commits_count":71},"MichielKalkman":{"commits_count":1},"german-mergestat":{"commits_count":1},"KrzysztofHasiński":{"commits_count":1}}')).map(([repo, data], index) => ( */}
                  {top10Authors && Object.entries(top10Authors).map(([repo, data], index) => (
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
              ? <div className='h-56'><Loading /></div>
              : <div className='flex justify-between h-56'>

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
              ? <div className='h-56'><Loading /></div>
              : <div className='flex justify-between h-56'>

              </div>
            }
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default CardsStatsExplore
