import Link from 'next/link'
import React from 'react'

type RepositoryNameProps = {
  name: string
  icons: Array<any>
  lastUpdate: string
}

export const RepositoryName: React.FC<RepositoryNameProps> = (props) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 border border-gray-300 rounded"></div>
      <div>
        <Link href={`/repos/${props.name.replace('/', '-')}`}>
          <a className="cursor-pointer hover_text-blue-600">{props.name}</a>
        </Link>
        <div className="flex items-center">
          <p className="pr-2 text-sm text-gray-500">{props.lastUpdate}</p>
          {props.icons.map((icon: any, index: number) => {
            return (
              <p
                className="border-l border-gray-300 px-2"
                key={`key1_${index}`}
              >
                {icon}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}