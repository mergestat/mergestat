import '@blueprintjs/popover2/lib/css/blueprint-popover2.css'
import { Cell, Column, SelectionModes, Table2 } from '@blueprintjs/table'
import '@blueprintjs/table/lib/css/table.css'
import { Button, Dropdown, Input, Label, Menu, Select, Toolbar, Tooltip } from '@mergestat/blocks'
import { CaretDownIcon, ChevronLeftIcon, ChevronRightIcon, ClipboardIcon, DownloadIcon, SearchIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import Papa from 'papaparse'
import { KeyboardEvent, useEffect, useState } from 'react'
import { useQueryContext } from 'src/state/contexts'
import { copy, filterByAllFields, getMaxPagination, paginate } from 'src/utils'
import { EXPORT_FORMAT } from 'src/utils/constants'

const TabTable: React.FC = () => {
  const [{ dataQuery: data }] = useQueryContext()

  const [result, setResult] = useState<Array<Array<string | number | boolean>>>(data.rows || [])
  const [rows, setRows] = useState<number>(100)
  const [page, setPage] = useState<number>(0)
  const [total, setTotal] = useState<number>(data.rows?.length || 0)
  const [search, setSearch] = useState<string>('')

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
    return value.toString()
  }

  const getText = (exportFormat: string) => {
    const allData = [data.columns?.map(c => c.name) || [], ...(data.rows || [])]
    let text
    if (exportFormat === EXPORT_FORMAT.JSON) {
      text = JSON.stringify(allData)
    } else {
      const tratedData = allData.map(data => data.map(d => getData(d)))
      text = Papa.unparse(tratedData)
    }
    return text
  }

  const copyToClipboard = (exportFormat: string) => {
    copy(getText(exportFormat))
  }

  const exportData = (exportFormat: string) => {
    const jsonString = `data:text/${exportFormat.toLowerCase()};charset=utf-8,${encodeURIComponent(getText(exportFormat))}`
    const link = document.createElement('a')
    link.href = jsonString
    link.download = `data.${exportFormat.toLowerCase()}`
    link.click()
  }

  const onChange = debounce((e) => setSearch(e.target.value), 300)

  useEffect(() => {
    let result
    if (search !== '') {
      result = filterByAllFields(data.rows || [], search)
    } else {
      result = data.rows || []
    }

    setResult(result)
    setTotal(result.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {
    const result = filterByAllFields(data.rows || [], search)
    setResult(paginate(result, rows, page))
    setTotal(result.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, page])

  const renderDataCell = (rowIndex: number, columnIndex: number) => {
    const cell = result[rowIndex][columnIndex]
    return <Cell>{typeof cell === 'string' || typeof cell === 'number' ? cell : JSON.stringify(cell)}</Cell>
  }

  return (
    <>
      {/* Head section */}
      <Toolbar className='bg-white h-14 flex w-full border-b px-8'>
        <Toolbar.Left>
          <Input
            className='sm_w-150'
            placeholder='Search...'
            startIcon={<SearchIcon className='t-icon' />}
            onChange={onChange}
            onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter' && setSearch((e.target as HTMLInputElement).value))}
          />
        </Toolbar.Left>
        <Toolbar.Right>
          <Toolbar.Item>
            <div className='t-button-toolbar'>
              <Dropdown
                disabled={!window.isSecureContext}
                trigger={
                  window.isSecureContext
                    ? <Button label='Copy' skin='secondary' size='small'
                      startIcon={<ClipboardIcon className='t-icon t-icon-heroicons-clipboard' />}
                      endIcon={<CaretDownIcon className='t-icon' />}
                    />
                    : <Tooltip content='Copy is only available on HTTPs connections'>
                      <Button disabled label='Copy' skin='secondary' size='small'
                        startIcon={<ClipboardIcon className='t-icon t-icon-heroicons-clipboard' />}
                        endIcon={<CaretDownIcon className='t-icon' />}
                      />
                    </Tooltip>
                }
                overlay={(close) => (
                  <Menu className='whitespace-nowrap w-full'>
                    <Menu.Item text={EXPORT_FORMAT.JSON} onClick={() => {
                      copyToClipboard(EXPORT_FORMAT.JSON)
                      close()
                    }} />
                    <Menu.Item text={EXPORT_FORMAT.CSV} onClick={() => {
                      copyToClipboard(EXPORT_FORMAT.CSV)
                      close()
                    }} />
                  </Menu>
                )}
              />
              <Dropdown
                trigger={
                  <Button label='Download' skin='secondary' size='small'
                    startIcon={<DownloadIcon className='t-icon t-icon-heroicons-clipboard' />}
                    endIcon={<CaretDownIcon className='t-icon' />}
                  />
                }
                overlay={(close) => (
                  <Menu className='whitespace-nowrap w-full'>
                    <Menu.Item text={EXPORT_FORMAT.JSON} onClick={() => {
                      exportData(EXPORT_FORMAT.JSON)
                      close()
                    }} />
                    <Menu.Item text={EXPORT_FORMAT.CSV} onClick={() => {
                      exportData(EXPORT_FORMAT.CSV)
                      close()
                    }} />
                  </Menu>
                )}
              />
            </div>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>

      {/* Table section */}
      <div className='overflow-hidden flex-1 flex flex-col bg-white h-full w-full'>
        <div className='overflow-auto w-full flex-1'>
          <Table2
            enableGhostCells
            numRows={result.length}
            selectionModes={SelectionModes.COLUMNS_AND_CELLS}
            cellRendererDependencies={[result]}
          >
            {data.columns
              ? data.columns.map((col, index) => (
                <Column key={index} name={col.name.toString()} cellRenderer={renderDataCell} />
              ))
              : []}
          </Table2>
        </div>
      </div>

      {/* Footer section */}
      <div className='bg-white overflow-auto flex h-14 items-center flex-shrink-0 w-full border-t px-8'>
        <Toolbar className='t-toolbar flex-1 w-auto h-full space-x-4'>
          <Toolbar.Left className='space-x-3'>
            <div className='flex items-center'>
              <Label className='mr-2 whitespace-nowrap' htmlFor='rowsPerPage'>
                Rows per page
              </Label>
              <Select id='rowsPerPage' className="w-30" defaultValue='100' onChange={e => setRows(+e.target.value)}>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
                <option value='250'>250</option>
                <option value='500'>500</option>
              </Select>
            </div>
          </Toolbar.Left>
          <Toolbar.Right className='space-x-4 divide-x'>
            <Toolbar.Item className='pl-4'>
              <div className='flex items-center space-x-2'>
                <p className='t-text-muted whitespace-nowrap text-sm'>
                  {`${(page * rows) + 1}-${getMaxPagination(page, rows, total)} of ${total}`}
                </p>
                <Button
                  isIconOnly
                  disabled={page === 0}
                  skin='borderless'
                  startIcon={<ChevronLeftIcon className='t-icon' />}
                  onClick={() => setPage(page - 1)}
                />
                <Button
                  isIconOnly
                  disabled={getMaxPagination(page, rows, total) >= total}
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

export default TabTable
