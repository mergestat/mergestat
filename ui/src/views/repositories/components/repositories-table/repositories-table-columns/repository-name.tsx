import { RepositoryIcon } from '@mergestat/icons'
import Link from 'next/link'
import React from 'react'

export type RepositoryNameProps = {
  name: string
  icons: Array<any>
  lastUpdate: string
}

export const RepositoryName: React.FC<RepositoryNameProps> = (props) => {
  return (
    <div className="flex items-center gap-4 my-3">
      <div className="w-10 h-10 border flex border-samantic-border rounded flex-shrink-0">
        <RepositoryIcon className="text-samantic-icon w-4 h-4 m-auto"/>
      </div>
      <div>
        <Link href={`/repos/${props.name.replace('/', '-')}`}>
          <a className="cursor-pointer text-samantic-text hover_text-blue-600">
            {props.name}
          </a>
        </Link>
        <div className="flex items-center">
          <p className="pr-2 text-sm text-samantic-mutedText">
            {props.lastUpdate}
          </p>
          {props.icons.map((icon: any, index: number) => {
            return (
              <p
                className="border-l border-samantic-border px-2"
                key={index}
              >
                <div className='text-samantic-mutedIcon'>
                  {icon}
                </div>
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}
