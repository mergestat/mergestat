import React from 'react'
import Image from 'next/image'
import cx from 'classnames'
import { ColoredBox } from '@mergestat/blocks'
import { RepositoryIcon } from '@mergestat/icons'
import type { RepoType } from 'src/@types'

type RepoImagePropsT = {
  repoType?: RepoType
  urlIcon?: string
  size?: '10' | '8'
}

const RepoImage: React.FC<RepoImagePropsT> = ({
  repoType,
  urlIcon,
  size = '8',
}) => {
  return (
    <ColoredBox
      size={size}
      skin="default"
      className={cx({ 'border border-gray-200': repoType === 'github' })}
    >
      {repoType === 'github' ? (
        <Image
          src={`${urlIcon}`}
          width={40}
          height={40}
          loader={({ src }) => `${src}?w=1&q=50`}
          objectFit="contain"
          className="rounded"
        />
      ) : (
        <RepositoryIcon className="t-icon text-semantic-icon" />
      )}
    </ColoredBox>
  )
}

export default RepoImage
