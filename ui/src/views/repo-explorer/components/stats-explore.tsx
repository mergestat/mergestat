import { Button, Stat } from '@mergestat/blocks'
import { CircleInformationFilledIcon, TableIcon } from '@mergestat/icons'
import { useRepoExploreContext } from 'src/state/contexts/repo-explore.context'
import { MetricNumber } from 'src/views/shared/metric-number'

const StatsExplore: React.FC = () => {
  const [{ loading, exploreData: { repos, files, authors } }] = useRepoExploreContext()

  return (
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
              />
            </div>
          </Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={repos || 0}
              icon={<CircleInformationFilledIcon className="t-icon t-icon-info" />}
              tooltip={<div className='w-80 font-thin leading-4 p-2'>
                Not all repos have been index, please modify
                the repo explore sync to search across all repos
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
              />
            </div>
          </Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={files || 0} />
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
              />
            </div>
          </Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={authors || 0} />
          </Stat.Number>
        </Stat.Left>
      </Stat>
    </div>
  )
}

export default StatsExplore
