/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from 'src/components/Loading'

export const CustomTooltip: React.FC = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='flex items-center justify-center rounded border border-gray-200 bg-gray-50 w-8'>
        <span className='text-gray-400 text-sm'>{payload[0].value}</span>
      </div>
    )
  }

  return null
}

export const CardLoading: React.FC = () => {
  return (
    <div className='flex min-h-xs items-center'><Loading /></div>
  )
}
