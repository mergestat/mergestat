import { Button, Dropdown, Label, Menu } from '@mergestat/blocks'
import { CaretDownIcon } from '@mergestat/icons'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { ChartData, QueryResultProps } from 'src/@types'
import { AppexBarData, mapToAppexBar } from 'src/api-logic/mappers/charts/apex-bar'
import { useQueryTabsContext, useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { barChartOptions } from 'src/utils/charts/bar-chart-config'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type TabBarChartProps = {
  data: QueryResultProps
  tabId?: string
  children?: React.ReactNode
}

const TabBarChart: React.FC<TabBarChartProps> = ({ data, tabId = '' }: TabBarChartProps) => {
  const tabsState = useQueryTabsContext()
  const dispatch = useQueryTabsDispatch()

  const [options, setOptions] = useState(barChartOptions)
  const [series, setSeries] = useState<AppexBarData[]>([])

  const { xAxis, yAxis } = (tabsState[tabId] as ChartData)

  const setState = (payload: ChartData) => dispatch({ tab: tabId, payload })

  useEffect(() => {
    const config = mapToAppexBar(data, xAxis, yAxis)

    if (barChartOptions.xaxis) {
      const newOptions = {
        ...barChartOptions,
        ...{
          xaxis: {
            categories: config.categories,
            ...{
              labels: barChartOptions.xaxis.labels
            }
          }
        }
      }
      setOptions(newOptions)
    }

    setSeries(config.series)
  }, [data, xAxis, yAxis])

  return (
    <div className="flex h-full">
      <div className="w-72 p-5 border-r border-gray-200">
        <h3 className="t-h3">Settings</h3>
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
        {xAxis && yAxis && <Chart
          type='bar'
          width='100%'
          height='100%'
          options={options}
          series={series}
        />}
      </div>
    </div>
  )
}

export default TabBarChart
