import React from 'react'
import Image from 'next/image'
import { ColoredBox } from '@mergestat/blocks'
import { RepositoryIcon } from '@mergestat/icons'
import type { RepoType } from 'src/@types'

type RepoImagePropsT = {
  repoType?: RepoType,
  orgName?: string,
  size?: '10' | '8',
}

const RepoImage: React.FC<RepoImagePropsT> = ({
  repoType,
  orgName,
  size='8'
}) => {
  return (
    <ColoredBox size={size} skin="default">
      {repoType === 'github' ? (
        <Image
          src={`https://github.com/${orgName}.png?size=40`}
          width={40}
          height={40}
          loader={({ src }) => `${src}?w=1&q=50`}
        />
      ) : (
        <RepositoryIcon className="t-icon text-samantic-icon"/>
      )}
    </ColoredBox>
  )
}

export default RepoImage
