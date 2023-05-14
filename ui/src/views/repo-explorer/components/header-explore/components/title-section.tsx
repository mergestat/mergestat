import { Alert, Button, Toolbar } from '@mergestat/blocks'
import { CogIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'

const TitleSection: React.FC = () => {
  const router = useRouter()

  return (
    <Toolbar className='h-full'>
      <Toolbar.Left>
        <h2 className='t-h2 mb-0'>Explore</h2>
      </Toolbar.Left>
      <Toolbar.Right>
        <Toolbar.Item>
          <Alert isInline
            type="info"
            className='text-gray-400'
            tooltip={<div className='w-80 font-thin leading-4 p-2'>
              Not all repos have been index, please modify the repo explore sync to search across all repos
            </div>}
          >
            100/1000 repos indexed
          </Alert>
        </Toolbar.Item>
        <Toolbar.Item>
          <Button className='whitespace-nowrap'
            skin="secondary"
            label='Manage'
            startIcon={<CogIcon className="t-icon" />}
            onClick={() => router.push('/repos/repo-syncs')}
          />
        </Toolbar.Item>
      </Toolbar.Right>
    </Toolbar>
  )
}

export default TitleSection
