/* eslint-disable @typescript-eslint/no-explicit-any */
import RepoImage from 'src/components/RepoImage'

export const CustomizedTick: React.FC = (props: any) => {
  const { y, payload, showIcon } = props
  const { name, vendor, vendor_url: vendorUrl } = JSON.parse(payload.value)

  return (
    <foreignObject style={{ overflow: 'visible' }} x={0} y={y - 10}>
      <div className='flex items-center whitespace-nowrap space-x-2'>
        {showIcon && <RepoImage vendor={vendor || 'github'} vendorUrl={vendorUrl || 'https://github.com'} orgName={name.split('/')[0]} size="6" />}
        <span className='text-sm t-text-muted'>{name}</span>
      </div>
    </foreignObject>
  )
}
