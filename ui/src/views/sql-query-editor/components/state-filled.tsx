import { Alert, Badge, Button, Input, Label, Select, Toolbar } from '@mergestat/blocks'
import { ChevronLeftIcon, ChevronRightIcon, CircleCheckFilledIcon, ClipboardIcon, DownloadIcon, SearchIcon } from '@mergestat/icons'

type QueryEditorFilledProps = {
  rowLimit: number
  rowLimitReached: boolean
  data: Array<unknown>
  children?: React.ReactNode
}

interface RecordData {
  [key: string]: string | number | boolean
}

const QueryEditorFilled: React.FC<QueryEditorFilledProps> = ({ rowLimit, rowLimitReached, data }: QueryEditorFilledProps) => {
  const getData = (value: string | number | boolean) => {
    if (value) {
      if (typeof value === 'boolean') {
        return value.toString()
      } else if (value.constructor === ({}).constructor || value.constructor === ([]).constructor) {
        return JSON.stringify(value)
      }
    }
    return value
  }

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
                {Object.keys(data[0] as RecordData).map((key, index) => (
                  <th key={`th-record-${index}`} scope='col' className='whitespace-nowrap pr-6 pl-8'>
                    <span className='mr-1'>{key}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='bg-white'>
              {data.map((record, indexRecord) => (
                <tr key={`tr-record-${indexRecord}`}>
                  {Object.values(record as RecordData).map((value, index) => (
                    <td key={`td-record-${index}`} className='w-0 pl-8 max-w-xs truncate'>
                      {getData(value)}
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
              <Select
                id='format'
                className="w-24"
                defaultValue='JSON'
              >
                <option value='JSON'>JSON</option>
                <option value='CSV'>CSV</option>
              </Select>
            </div>
            <Button
              skin='secondary'
              className='mr-2'
              startIcon={
                <ClipboardIcon className='t-icon t-icon-heroicons-clipboard' />
              }
            >
              Copy
            </Button>
            <Button
              skin='secondary'
              startIcon={
                <DownloadIcon className='t-icon t-icon-heroicons-download' />
              }
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
                <Select
                  id='rowsPerPage'
                  className="w-20"
                  defaultValue='20'
                >
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </Select>
              </div>
            </Toolbar.Item>
            <Toolbar.Item className='pl-4'>
              <div className='flex items-center space-x-2'>
                <p className='text-semantic-mutedText whitespace-nowrap text-sm'>1-50 of 1000</p>
                <Button
                  isIconOnly
                  disabled
                  skin='borderless'
                  className='border-0'
                  startIcon={<ChevronLeftIcon className='t-icon' />}
                />
                <Button
                  isIconOnly
                  skin='borderless'
                  startIcon={<ChevronRightIcon className='t-icon' />}
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
