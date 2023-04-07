import { Alert, Button, ColoredBox, Toolbar } from '@mergestat/blocks'
import { CogIcon, GithubIcon, TableIcon } from '@mergestat/icons'
import React, { useState } from 'react'
import Loading from 'src/components/Loading'
import { EmptyData } from 'src/views/shared/empty-data'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { FilterHeader } from 'src/views/shared/filter-header'
import { DefaultSyncsTable } from './components'
import { useRouter } from 'next/router'

const AutoImportDetailView: React.FC = () => {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  const [rows, setRows] = useState<number>(1)
  const [page, setPage] = useState<number>(1)

  const loading = false
  const isEmpty = false
  const total = 3

  console.log(search)

  return (
    <>
      <div className='flex flex-col h-full overflow-hidden'>
        <div className='bg-white h-20 w-full border-b px-8'>
          <Toolbar className='h-full'>
            <Toolbar.Left>
              <div className='flex items-center space-x-4'>
                <ColoredBox size='10'>
                  <GithubIcon className='t-icon' />
                </ColoredBox>
                <div>
                  <h2 className='t-h3 mb-0'>mergestat/mergestat</h2>
                  <p className='t-text-muted text-sm'>Github org</p>
                </div>
              </div>
            </Toolbar.Left>
          </Toolbar>
        </div>
        <div className='flex-1 overflow-auto'>
          <div className='my-4 px-8'>
            <Alert className='mix-blend-multiply' type='default'>
              Default syncs are automatically enabled for all repos inside the git source. You can always override them on a per-repo basis.
              <a className='cursor-pointer t-link' target='_blank' rel='noreferrer' href='https://docs.mergestat.com/mergestat/setup/repo-auto-imports'>Learn more</a>
            </Alert>
          </div>
          {!isEmpty && <div className='flex'>
            <FilterHeader setSearch={setSearch} />
            <div className='flex px-5 items-center'>
              <Button className='whitespace-nowrap'
                skin="secondary"
                label='Manage Syncs'
                startIcon={<CogIcon className="t-icon" />}
                onClick={() => router.push('/repos/repo-syncs')}
              />
            </div>
          </div>}

          {loading
            ? <Loading />
            : !isEmpty
                ? <DefaultSyncsTable />
                : <EmptyData
                message='No repo syncs yet'
                icon={<TableIcon className="t-icon" />}
                bottomElements={
                  <Button
                    skin="borderless"
                    label='Manage Syncs'
                    startIcon={<CogIcon className="t-icon" />}
                    onClick={() => router.push('/repos/repo-syncs')}
                  />
                }
              />
          }
        </div>
        {!isEmpty && <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />}
      </div>
    </>
  )
}

export default AutoImportDetailView
