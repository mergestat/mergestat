/* eslint-disable @typescript-eslint/no-explicit-any */
import RepoImage from 'src/components/RepoImage'

export const CustomizedTick: React.FC = (props: any) => {
  const { x, y, payload } = props

  return (
    <foreignObject style={{ overflow: 'visible' }} x={x - 240} y={y - 10}>
      <div className='flex items-center whitespace-nowrap space-x-2'>
        <RepoImage vendor='github' vendorUrl='https://github.com' orgName={payload.value?.split('/')[0]} size="6" />
        <span className='text-gray-400 text-xs'>{payload.value}</span>
      </div>
    </foreignObject>
  )
}
