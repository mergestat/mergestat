import { Alert, Badge, Button, Input, Label, Select, Toolbar } from '@mergestat/blocks'
import { ChevronLeftIcon, ChevronRightIcon, CircleCheckFilledIcon, ClipboardIcon, DownloadIcon, SearchIcon } from '@mergestat/icons'
import cx from 'classnames'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { copy, filterByAllFields, paginate } from 'src/utils'
import { EXPORT_FORMAT } from 'src/utils/constants'

type QueryEditorFilledProps = {
  rowLimit: number
  rowLimitReached: boolean
  data: Array<string | number | boolean>
  children?: React.ReactNode
}

const QueryEditorFilled: React.FC<QueryEditorFilledProps> = ({ rowLimit, rowLimitReached, data }: QueryEditorFilledProps) => {
  const [result, setResult] = useState<Array<string | number | boolean>>(data)
  const [rows, setRows] = useState<number>(20)
  const [page, setPage] = useState<number>(0)
  const [total, setTotal] = useState<number>(data.length)
  const [search, setSearch] = useState<string>('')
  const [exportFormat, setExportFormat] = useState<string>(EXPORT_FORMAT.JSON)

  const getData = (value: string | number | boolean) => {
    if (value === null) {
      return 'null'
    }
    if (value) {
      if (typeof value === 'boolean') {
        return value.toString()
      } else if (value.constructor === ({}).constructor || value.constructor === ([]).constructor) {
        return JSON.stringify(value)
      }
    }
    return value.toString().replace(/,/g, '.').replace(/\n/g, ' ')
  }

  const getMax = () => {
    const max = (page + 1) * rows
    return max > total ? total : max
  }

  const isSpecial = (value: string | number | boolean) => {
    return value === null || typeof value === 'boolean'
  }

  const getText = () => {
    let text
    if (exportFormat === EXPORT_FORMAT.JSON) {
      text = JSON.stringify(data)
    } else {
      text = [
        Object.keys(result[0]).join(','),
        ...data.map(d => Object.values(d).map(getData).join(','))
      ].join('\n')
    }
    return text
  }

  const copyToClipboard = () => {
    copy(getText())
  }

  const exportData = () => {
    const jsonString = `data:text/${exportFormat.toLowerCase()};charset=utf-8,${encodeURIComponent(getText())}`
    const link = document.createElement('a')
    link.href = jsonString
    link.download = `data.${exportFormat.toLowerCase()}`
    link.click()
  }

  const onChange = debounce((e) => setSearch(e.target.value), 300)

  useEffect(() => {
    let result
    if (search !== '') {
      result = filterByAllFields(data, search)
    } else {
      result = data
    }

    setResult(result)
    setTotal(result.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {
    const result = filterByAllFields(data, search)
    setResult(paginate(result, rows, page))
    setTotal(result.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, page])

  return (
    <>
      {/* Head section */}
      <div className='bg-white overflow-auto flex h-16 flex-shrink-0 w-full border-b px-8'>
        <Toolbar className='flex-1 w-auto h-full space-x-4'>
          <Toolbar.Left className='space-x-4'>
            <Toolbar.Item>
              <h3 className='t-h3 whitespace-nowrap mb-0'>Query results</h3>
            </Toolbar.Item>
            <Toolbar.Item>
              <Badge
                label='Success'
                variant='default'
                className='bg-gray-50 rounded-full'
                startIcon={
                  <CircleCheckFilledIcon className='t-icon t-icon-success ' />
                }
              />
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Input
              className='flex-1 ml-8 w-96 '
              placeholder='Search...'
              startIcon={<SearchIcon className='t-icon' />}
              onChange={onChange}
              onKeyPress={(e) => (e.key === 'Enter' && setSearch(e.target.value))}
            />
          </Toolbar.Right>
        </Toolbar>
      </div>

      {/* Table section */}
      <div className='overflow-hidden flex-1 flex flex-col bg-white h-full w-full'>
        {rowLimitReached && (
          <Alert theme="light" type="warning" className='t-alert-full-width items-center' >
            Query results are limited to {rowLimit} rows.
          </Alert>
        )}
        <div className='overflow-auto w-full flex-1'>
          <table className='t-table-default t-table-sticky-header t-table-nowrap t-table-bordered t-table-dense'>
            <thead>
              <tr className='bg-white'>
                {result.length > 0 && Object.keys(result[0]).map((key, index) => (
                  <th key={`th-record-${index}`} scope='col' className='whitespace-nowrap pr-6 pl-8'>
                    <span className='mr-1'>{key}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='bg-white'>
              {result.map((record, indexRecord) => (
                <tr key={`tr-record-${indexRecord}`}>
                  {Object.values(record).map((value, index) => (
                    <td key={`td-record-${index}`} className='w-0 pl-8 max-w-xs truncate'>
                      <span className={cx({ 'text-blue-700': isSpecial(value) })}>{getData(value)}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer section */}
      <div className='bg-white overflow-auto flex h-16 flex-shrink-0 w-full border-t px-8'>
        <Toolbar className='t-toolbar flex-1 w-auto h-full space-x-4'>
          <Toolbar.Left className='space-x-3'>
            <div className='flex items-center'>
              <Label className='mr-2' htmlFor='format'>
                Format
              </Label>
              <Select id='format' className="w-24"
                defaultValue={EXPORT_FORMAT.JSON}
                onChange={e => setExportFormat(e.target.value)}
              >
                <option value={EXPORT_FORMAT.JSON}>{EXPORT_FORMAT.JSON}</option>
                <option value={EXPORT_FORMAT.CSV}>{EXPORT_FORMAT.CSV}</option>
              </Select>
            </div>
            <Button
              skin='secondary'
              className='mr-2'
              startIcon={
                <ClipboardIcon className='t-icon t-icon-heroicons-clipboard' />
              }
              onClick={copyToClipboard}
            >
              Copy
            </Button>
            <Button
              skin='secondary'
              startIcon={
                <DownloadIcon className='t-icon t-icon-heroicons-download' />
              }
              onClick={exportData}
            >
              Download
            </Button>
          </Toolbar.Left>
          <Toolbar.Right className='space-x-4 divide-x'>
            <Toolbar.Item>
              <div className='flex items-center'>
                <Label className='mr-2 whitespace-nowrap' htmlFor='rowsPerPage'>
                  Rows per page
                </Label>
                <Select id='rowsPerPage' className="w-20" defaultValue='20' onChange={e => setRows(+e.target.value)}>
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </Select>
              </div>
            </Toolbar.Item>
            <Toolbar.Item className='pl-4'>
              <div className='flex items-center space-x-2'>
                <p className='t-text-muted whitespace-nowrap text-sm'>
                  {`${(page * rows) + 1}-${getMax()} of ${total}`}
                </p>
                <Button
                  isIconOnly
                  disabled={page === 0}
                  skin='borderless'
                  className='border-0'
                  startIcon={<ChevronLeftIcon className='t-icon' />}
                  onClick={() => setPage(page - 1)}
                />
                <Button
                  isIconOnly
                  disabled={getMax() >= total}
                  skin='borderless'
                  startIcon={<ChevronRightIcon className='t-icon' />}
                  onClick={() => setPage(page + 1)}
                />
              </div>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </div>
    </>
  )
}

export default QueryEditorFilled