import { Spinner, Tooltip } from '@mergestat/blocks'
import cx from 'classnames'

interface MetricNumberProp {
  loading: boolean
  metric: number
  className?: string
  icon?: React.ReactElement
  tooltip?: React.ReactElement | string
}

export const MetricNumber: React.FC<MetricNumberProp> = ({ loading, metric, className, icon, tooltip }: MetricNumberProp) => {
  return (
    <div className={cx('flex items-center h-8', className)}>
      <div className='w-8'>
        {loading ? <Spinner size="sm" /> : new Intl.NumberFormat().format(metric)}
      </div>

      <div className='ml-1'>
        {icon && tooltip &&
          <Tooltip placement='bottom' offset={[0, 10]}
            content={tooltip}>
            {icon}
          </Tooltip>}
        {icon && !tooltip && icon}
      </div>
    </div>
  )
}
