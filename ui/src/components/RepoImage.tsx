import { ColoredBox } from '@mergestat/blocks'
import cx from 'classnames'
import Image from 'next/image'
import React from 'react'
import { getGitSourceIcon } from 'src/utils'

type RepoImagePropsT = {
  vendor: string
  vendorUrl?: string
  orgName?: string
  size?: '10' | '8' | '6'
}

const RepoImage: React.FC<RepoImagePropsT> = ({ vendor, vendorUrl, orgName, size = '8' }) => {
  return (
    <ColoredBox
      size={size}
      skin="default"
      className={cx({ 'border border-gray-200': vendor === 'github' })}
    >
      {vendor === 'github' && orgName
        ? <Image
          src={`${vendorUrl}/${orgName}.png?size=40`}
          width={40}
          height={40}
          loader={({ src }) => `${src}?w=1&q=50`}
          objectFit="contain"
          className="rounded"
          alt=''
        />
        : getGitSourceIcon(vendor, 't-icon-default')
      }
    </ColoredBox>
  )
}

export default RepoImage
