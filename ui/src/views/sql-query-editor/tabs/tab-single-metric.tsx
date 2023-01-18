import { Button, Dropdown, Input, Label, Menu } from '@mergestat/blocks'
import { CaretDownIcon } from '@mergestat/icons'
import { ChangeEvent, useEffect } from 'react'
import { QueryResultProps, SingleMetricData } from 'src/@types'
import { useQueryTabsContext, useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'

type TabSingleMetricProps = {
  data: QueryResultProps
  tabId?: string
  children?: React.ReactNode
}

const TabSingleMetric: React.FC<TabSingleMetricProps> = ({ data, tabId = '' }: TabSingleMetricProps) => {
  const tabsState = useQueryTabsContext()
  const dispatch = useQueryTabsDispatch()

  const { label, selectedColumnIndex, selectedColumnName, stat } = (tabsState[tabId] as SingleMetricData)

  const setState = (payload: SingleMetricData) => dispatch({ tab: tabId, payload })

  useEffect(() => {
    selectedColumnIndex !== undefined && setState({ stat: data.rows ? (data.rows[0][selectedColumnIndex]).toString() : '' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColumnIndex])

  return (
    <div className="flex h-full">
      <div className="w-72 p-5 border-r border-gray-200">
        <h3 className="t-h3">Settings</h3>
        <div className='mt-6'>
          <Label className='text-gray-500'>Label</Label>
          <Input
            value={label}
            placeholder='Describe your single value'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setState({ label: e.target.value })}
          />
        </div>
        <div className='mt-6'>
          <Label className='text-gray-500'>Column</Label>
          <Dropdown
            alignEnd
            trigger={
              <Button label={selectedColumnName || 'Select'} skin="ghost"
                className='text-gray-500' isBlockBetween
                endIcon={<CaretDownIcon className='t-icon' />}
              />
            }
            overlay={(close) => (
              <Menu className='whitespace-nowrap w-full'>
                {data.columns?.map((col, index) => (
                  <Menu.Item key={`col-number-${index}`} text={col.name}
                    onClick={() => {
                      setState({ selectedColumnName: col.name.toString(), selectedColumnIndex: index })
                      close()
                    }}
                  />
                ))}
              </Menu>
            )}
          />
        </div>
      </div>
      <div className="flex-1">
        {/* <div className='flex justify-end space-x-4 p-4'>
          <Dropdown
            alignEnd
            trigger={
              <Button label='Download' skin="secondary" disabled
                startIcon={<DownloadIcon className='t-icon' />}
                endIcon={<CaretDownIcon className='t-icon' />}
              />
            }
            overlay={() => (<></>)}
          />

          <Button label='Save to dashboard' skin="secondary" disabled />
          </div> */}
        <div className='mt-4 p-4'>
          {stat && <div className='w-3/5 border border-gray-200 px-8 py-6 rounded-lg'>
            <span className='text-gray-500'>{label}</span>
            <h1 className="t-h1 mt-1 mb-0">{stat}</h1>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default TabSingleMetric
