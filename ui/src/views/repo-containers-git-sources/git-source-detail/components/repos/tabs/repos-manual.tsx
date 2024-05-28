import { Alert, Button, Input, Label, Panel, Textarea } from '@mergestat/blocks'
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from '@mergestat/icons'
import { ChangeEvent, useState } from 'react'
import Loading from 'src/components/Loading'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { getVendor } from 'src/utils'
import { VENDOR_TYPE, VENDOR_URL } from 'src/utils/constants'
import useAddRepos from 'src/views/hooks/gitSources/useAddRepos'
import useRepoManualImports from 'src/views/hooks/gitSources/useRepoManualImports'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { FilterHeader } from 'src/views/shared/filter-header'
import { ManualImportTable } from '../components/manual-import-table'

const ReposManual: React.FC = () => {
  const [{ gsDetail: { vendor, settings }, rowsManualRepos, pageManualRepos, totalManualRepos, searchManualImport, showBulk }] = useGitSourceDetailContext()
  const { setSearchManualImport, setRowsManualRepos, setPageManualRepos, setShowBulk } = useGitSourceDetailSetState()
  const { loading, repos, records } = useRepoManualImports()
  const { addFromURL, addFromCSV } = useAddRepos()

  const [url, setUrl] = useState('')
  const [urls, setUrls] = useState('')

  const addRepos = () => {
    if (showBulk) {
      addFromCSV(urls)
      setUrls('')
    } else {
      addFromURL(url)
      setUrl('')
    }
  }

  const getVendorUrl = () => {
    if ('url' in settings) {
      return settings.url
    }
    return vendor === VENDOR_TYPE.BITBUCKET
      ? VENDOR_URL.BITBUCKET
      : vendor === VENDOR_TYPE.GITHUB
        ? VENDOR_URL.GITHUB
        : vendor === VENDOR_TYPE.GITLAB ? VENDOR_URL.GITLAB : VENDOR_URL.GITHUB
  }

  return (
    <>
      <div className='bg-white p-6'>
        <Alert type="default" className="bg-gray-50 mb-6">
          Manual repos are added directly to this Git Source.
        </Alert>

        <Label>Repo url(s)</Label>
        <div className='flex items-start gap-2 mb-2'>
          <div className='flex-1'>
            {showBulk
              ? <Textarea className="h-60" value={urls}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setUrls(e.target.value)}
              />
              : <Input
                id='url'
                type='text'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={`${getVendorUrl()}/owner/repo`}
                onKeyPress={(e) => (e.key === 'Enter' && addFromURL(url))}
              />}
          </div>
          <Button
            label='Add'
            disabled={showBulk ? !urls : !url}
            className='whitespace-nowrap'
            startIcon={<PlusIcon className='t-icon' />}
            onClick={addRepos}
          />
        </div>
        <Button
          label={showBulk ? 'Hide bulk add' : 'Bulk add'}
          skin='borderless'
          size='small'
          className='whitespace-nowrap text-blue-600'
          endIcon={showBulk ? <ChevronUpIcon className='t-icon' /> : <ChevronDownIcon className='t-icon' />}
          onClick={() => setShowBulk(!showBulk)}
        />
      </div>

      {/** Manual Import Table */}
      {records && <div className='border-t pt-2'>
        <FilterHeader initValue={searchManualImport} setSearch={setSearchManualImport} />
      </div>}

      {loading
        ? <div className='my-14'><Loading /></div>
        : records
          ? <ManualImportTable repos={repos} />
          : <div className='bg-white p-6 pt-0'>
            <Panel className='rounded-md shadow-sm'>
              <Panel.Body className='p-12 m-auto'>
                <span className='text-gray-500'>{`Enter ${getVendor(vendor)} repo url`}</span>
              </Panel.Body>
            </Panel>
          </div>
      }
      {records && <FilterFooter
        total={totalManualRepos}
        rows={rowsManualRepos}
        page={pageManualRepos}
        setRows={setRowsManualRepos}
        setPage={setPageManualRepos}
      />}
    </>
  )
}

export default ReposManual
