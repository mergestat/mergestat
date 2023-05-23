/* eslint-disable @typescript-eslint/no-explicit-any */
import cx from 'classnames'
import RepoImage from 'src/components/RepoImage'

export const CustomizedTick: React.FC = (props: any) => {
  const { y, payload, showIcon } = props
  const { name, vendor, link, vendor_url: vendorUrl } = JSON.parse(payload.value)

  return (
    <foreignObject style={{ overflow: 'visible' }} x={0} y={y - 10}>
      <div className='flex items-center whitespace-nowrap space-x-2'>
        {showIcon && <RepoImage vendor={vendor || 'github'} vendorUrl={vendorUrl || 'https://github.com'} orgName={name.split('/')[0]} size="6" />}
        <a target="_blank" href={link} rel="noopener noreferrer">
          <span className={cx('text-sm t-text-muted', { 'hover_text-blue-600': showIcon })}>{name}</span>
        </a>
      </div>
    </foreignObject>
  )
}
