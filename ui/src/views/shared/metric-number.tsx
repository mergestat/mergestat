import { Spinner } from '@mergestat/blocks'

interface MetricNumberProp {
  loading: boolean
  metric: number
  className?: string
}

export const MetricNumber: React.FC<MetricNumberProp> = ({ loading, metric, className }: MetricNumberProp) => {
  return (
    <div className={`${className}`}>
      {loading ? <Spinner size="sm" /> : new Intl.NumberFormat().format(metric)}
    </div>
  )
}
