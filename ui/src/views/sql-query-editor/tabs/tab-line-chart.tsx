import { Button, Dropdown, Label, Menu } from '@mergestat/blocks'
import { CaretDownIcon } from '@mergestat/icons'
import dynamic from 'next/dynamic'
import { LineChartData, QueryResultProps } from 'src/@types'
import { mapToAppexLine } from 'src/api-logic/mappers/charts/apex-line'
import { useQueryTabsContext, useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { lineChartOptions } from 'src/utils/charts/line-chart-config'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type TabLineChartProps = {
  data: QueryResultProps
  tabId?: string
  children?: React.ReactNode
}

const TabLineChart: React.FC<TabLineChartProps> = ({ data, tabId = '' }: TabLineChartProps) => {
  const tabsState = useQueryTabsContext()
  const dispatch = useQueryTabsDispatch()

  const { series, xAxis, yAxis } = (tabsState[tabId] as LineChartData)

  const setState = (payload: LineChartData) => dispatch({ tab: tabId, payload })

  return (
    <div className="flex h-full">
      <div className="w-72 p-5 border-r border-gray-200">
        <h3 className="t-h3">Settings</h3>
        <div className='mt-6'>
          <Label className='text-gray-500'>Series</Label>
          <Dropdown
            alignEnd
            trigger={
              <Button label={series || 'Select'} skin="ghost"
                className='text-gray-500' isBlockBetween
                endIcon={<CaretDownIcon className='t-icon' />}
              />
            }
            overlay={(close) => (
              <Menu className='whitespace-nowrap w-full'>
                {data.columns?.map((col, index) => (
                  <Menu.Item key={`col-series-${index}`} text={col.name}
                    onClick={() => {
                      setState({ series: col.name.toString() })
                      close()
                    }}
                  />
                ))}
              </Menu>
            )}
          />
        </div>
        <div className='mt-6'>
          <Label className='text-gray-500'>X-axis</Label>
          <Dropdown
            alignEnd
            trigger={
              <Button label={xAxis || 'Select'} skin="ghost"
                className='text-gray-500' isBlockBetween
                endIcon={<CaretDownIcon className='t-icon' />}
              />
            }
            overlay={(close) => (
              <Menu className='whitespace-nowrap w-full'>
                {data.columns?.map((col, index) => (
                  <Menu.Item key={`col-x-${index}`} text={col.name}
                    onClick={() => {
                      setState({ xAxis: col.name.toString() })
                      close()
                    }}
                  />
                ))}
              </Menu>
            )}
          />
        </div>
        <div className='mt-6'>
          <Label className='text-gray-500'>Y-axis</Label>
          <Dropdown
            alignEnd
            trigger={
              <Button label={yAxis || 'Select'} skin="ghost"
                className='text-gray-500' isBlockBetween
                endIcon={<CaretDownIcon className='t-icon' />}
              />
            }
            overlay={(close) => (
              <Menu className='whitespace-nowrap w-full'>
                {data.columns?.map((col, index) => (
                  <Menu.Item key={`col-y-${index}`} text={col.name}
                    onClick={() => {
                      setState({ yAxis: col.name.toString() })
                      close()
                    }}
                  />
                ))}
              </Menu>
            )}
          />
        </div>
      </div>
      <div className="px-8 py-4 w-full">
        {series && xAxis && yAxis && <Chart
          type='line'
          width='100%'
          height='100%'
          options={lineChartOptions}
          series={mapToAppexLine({
            data,
            series: series || '',
            xAxis: xAxis || '',
            yAxis: yAxis || ''
          })}
        />}
      </div>
    </div>
  )
}

export default TabLineChart
