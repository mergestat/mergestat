import { Spinner } from '@mergestat/blocks'

interface MetricStringProp {
  loading: boolean
  metric: string
  className?: string
}

export const MetricString: React.FC<MetricStringProp> = ({ loading, metric, className }: MetricStringProp) => {
  return (
    <div className={`${className}`}>
      {loading ? <Spinner size="sm" /> : metric}
    </div>
  )
}
