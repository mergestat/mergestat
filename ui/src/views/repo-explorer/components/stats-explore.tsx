import { Stat } from '@mergestat/blocks'
import { CircleInformationFilledIcon } from '@mergestat/icons'
import { MetricNumber } from 'src/views/shared/metric-number'

type StatsExploreProps = {
  loading: boolean
  repos: number
  files: number
  authors: number
}

const StatsExplore: React.FC<StatsExploreProps> = ({ loading, repos, files, authors }: StatsExploreProps) => {
  return (
    <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0'>
      <Stat className='shadow-sm w-full'>
        <Stat.Left>
          <Stat.Label>Repos</Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={repos || 0}
              icon={<CircleInformationFilledIcon className="t-icon t-icon-info" />}
              tooltip={<div className='w-80 font-thin'>
                Not all repos have been index, please modify
                the repo explore sync to search across all repos
              </div>}
            />
          </Stat.Number>
        </Stat.Left>
      </Stat>
      <Stat className='shadow-sm w-full'>
        <Stat.Left>
          <Stat.Label>Files</Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={files || 0} />
          </Stat.Number>
        </Stat.Left>
      </Stat>
      <Stat className='shadow-sm w-full'>
        <Stat.Left>
          <Stat.Label>Unique authors</Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={authors || 0} />
          </Stat.Number>
        </Stat.Left>
      </Stat>
    </div>
  )
}

export default StatsExplore
