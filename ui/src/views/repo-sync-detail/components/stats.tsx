import { ColoredBox, Stat } from '@mergestat/blocks'
import { CircleErrorIcon, ClockIcon, RepositoryIcon } from '@mergestat/icons'
import { MetricNumber } from 'src/views/shared/metric-number'
import { MetricString } from 'src/views/shared/metric-string'

type ContainerSyncStatsProps = {
  loading: boolean
  totalRepos: number
  totalErrors: number
  meanRunningTime: string
}

const ContainerSyncStats: React.FC<ContainerSyncStatsProps> = ({ loading, totalRepos, totalErrors, meanRunningTime }: ContainerSyncStatsProps) => {
  return (
    <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0 mb-6'>
      <Stat className='shadow-sm w-full'>
        <Stat.Left>
          <Stat.Label>Associated repos</Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={totalRepos || 0} />
          </Stat.Number>
        </Stat.Left>
        <Stat.Right>
          <ColoredBox size='12'><RepositoryIcon className='t-icon t-icon-default' /></ColoredBox>
        </Stat.Right>
      </Stat>
      <Stat className='shadow-sm w-full'>
        <Stat.Left>
          <Stat.Label>Syncs with errors</Stat.Label>
          <Stat.Number>
            <MetricNumber loading={loading} metric={totalErrors || 0} />
          </Stat.Number>
        </Stat.Left>
        <Stat.Right>
          <ColoredBox size='12'><CircleErrorIcon className='t-icon t-icon-default' /></ColoredBox>
        </Stat.Right>
      </Stat>
      <Stat className='shadow-sm w-full'>
        <Stat.Left>
          <Stat.Label>Mean running time</Stat.Label>
          <Stat.Number>
            <MetricString loading={loading} metric={meanRunningTime || ''} />
          </Stat.Number>
        </Stat.Left>
        <Stat.Right>
          <ColoredBox size='12'><ClockIcon className='t-icon t-icon-default' /></ColoredBox>
        </Stat.Right>
      </Stat>
    </div>
  )
}

export default ContainerSyncStats
