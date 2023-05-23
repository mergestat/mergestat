import { Button, Stat } from '@mergestat/blocks'
import { CircleInformationFilledIcon, TableIcon } from '@mergestat/icons'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'
import { MetricNumber } from 'src/views/shared/metric-number'
import { DataTableModal } from '../modals/data-table'

const StatsExplore: React.FC = () => {
  const [{
    params,
    loading,
    showDataTableModal,
    exploreData: { repos, files, authors }
  }] = useRepoExploreContext()

  const { setQueryModal, setShowDataTableModal } = useRepoExploreSetState()

  const openTableModal = (query: string) => {
    setQueryModal(query)
    setShowDataTableModal(true)
  }

  const computeParams = () => {
    const dataParams = JSON.stringify(params)
    return dataParams !== '{}' ? `${dataParams.substring(1, dataParams.length - 1)},` : ''
  }

  const queryRepos = () => {
    return `SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{${computeParams()} "RESPONSE_TYPE":"REPOS"}'))) AS specs(repo TEXT, repo_last_modified TIMESTAMP WITH TIME ZONE, file_count BIGINT)`
  }

  const queryFiles = () => {
    return `SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{${computeParams()} "RESPONSE_TYPE":"FILES"}'))) AS specs(repo TEXT, file_path TEXT, file_last_modified TIMESTAMP WITH TIME ZONE)`
  }

  const queryAuthors = () => {
    return `SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{${computeParams()} "RESPONSE_TYPE":"AUTHORS"}'))) AS specs(author_name TEXT, commits_count BIGINT)`
  }

  return (
    <>
      <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0'>
        <Stat className='shadow-sm w-full'>
          <Stat.Left className='mr-0'>
            <Stat.Label>
              <div className='flex justify-between items-center'>
                Repos
                <Button
                  isIconOnly
                  className='my-0'
                  skin='borderless-muted'
                  startIcon={<TableIcon className="t-icon" />}
                  onClick={() => openTableModal(queryRepos())}
                />
              </div>
            </Stat.Label>
            <Stat.Number>
              <MetricNumber loading={loading} metric={repos || 0}
                icon={<CircleInformationFilledIcon className="t-icon t-icon-info" />}
                tooltip={<div className='w-80 font-thin leading-4 p-2'>
                  Total count of repos matching the selected filters
                </div>}
              />
            </Stat.Number>
          </Stat.Left>
        </Stat>
        <Stat className='shadow-sm w-full'>
          <Stat.Left className='mr-0'>
            <Stat.Label>
              <div className='flex justify-between items-center'>
                Files
                <Button
                  isIconOnly
                  skin='borderless-muted'
                  startIcon={<TableIcon className="t-icon" />}
                  onClick={() => openTableModal(queryFiles())}
                />
              </div>
            </Stat.Label>
            <Stat.Number>
              <MetricNumber
                loading={loading} metric={files || 0}
                icon={<CircleInformationFilledIcon className="t-icon t-icon-info" />}
                tooltip={<div className='w-80 font-thin leading-4 p-2'>
                  Total count of files matching the selected filters
                </div>}
              />
            </Stat.Number>
          </Stat.Left>
        </Stat>
        <Stat className='shadow-sm w-full'>
          <Stat.Left className='mr-0'>
            <Stat.Label>
              <div className='flex justify-between items-center'>
                Unique authors
                <Button
                  isIconOnly
                  skin='borderless-muted'
                  startIcon={<TableIcon className="t-icon" />}
                  onClick={() => openTableModal(queryAuthors())}
                />
              </div>
            </Stat.Label>
            <Stat.Number>
              <MetricNumber loading={loading} metric={authors || 0}
                icon={<CircleInformationFilledIcon className="t-icon t-icon-info" />}
                tooltip={<div className='w-80 font-thin leading-4 p-2'>
                  Unique authors who have modified files matching the selected filters
                </div>}
              />
            </Stat.Number>
          </Stat.Left>
        </Stat>
      </div>

      {showDataTableModal && <DataTableModal />}
    </>
  )
}

export default StatsExplore
