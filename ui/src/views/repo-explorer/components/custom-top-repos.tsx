/* eslint-disable @typescript-eslint/no-explicit-any */
import RepoImage from 'src/components/RepoImage'

export const CustomizedTick: React.FC = (props: any) => {
  const { x, y, payload } = props
  const { name, vendor, vendor_url: vendorUrl } = JSON.parse(payload.value)

  return (
    <foreignObject style={{ overflow: 'visible' }} x={x - 240} y={y - 10}>
      <div className='flex items-center whitespace-nowrap space-x-2'>
        <RepoImage vendor={vendor || 'github'} vendorUrl={vendorUrl || 'https://github.com'} orgName={name.split('/')[0]} size="6" />
        <span className='text-gray-400 text-xs'>{name}</span>
      </div>
    </foreignObject>
  )
}
