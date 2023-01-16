import { Button, Dropdown, Input, Label, Menu, Tooltip } from '@mergestat/blocks'
import { CaretDownIcon, DownloadIcon } from '@mergestat/icons'
import { ChangeEvent, useEffect, useState } from 'react'
import { QueryResultProps } from 'src/@types'

type TabSingleMetricProps = {
  data: QueryResultProps
  children?: React.ReactNode
}

const TabSingleMetric: React.FC<TabSingleMetricProps> = ({ data }: TabSingleMetricProps) => {
  const [label, setLabel] = useState<string>('')
  const [selectedColumnName, setSelectedColumnName] = useState<string>()
  const [selectedColumnIndex, setSelectedColumnIndex] = useState<number>()
  const [stat, setStat] = useState<string>()

  useEffect(() => {
    selectedColumnIndex !== undefined && setStat(data.rows ? (data.rows[0][selectedColumnIndex]).toString() : '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColumnIndex])

  return (
    <div className="flex h-full">
      <div className="p-5 border-r border-gray-200">
        <h3 className="t-h3">Settings</h3>
        <div className='mt-6'>
          <Label className='text-gray-500'>Label</Label>
          <Input
            value={label}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
          />
        </div>
        <div className='mt-6'>
          <Label className='text-gray-500'>Number</Label>
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
                      setSelectedColumnName(col.name.toString())
                      setSelectedColumnIndex(index)
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
        <div className='flex justify-end space-x-4 p-4'>
          <Tooltip content='Coming soon!' placement='bottom' offset={[0, 10]}>
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
          </Tooltip>

          <Tooltip content='Coming soon!' placement='bottom' offset={[0, 10]}>
            <Button label='Save to dashboard' skin="secondary" disabled />
          </Tooltip>
        </div>
        <div className='p-4'>
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
