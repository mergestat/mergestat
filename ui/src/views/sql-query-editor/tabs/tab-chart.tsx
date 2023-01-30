import { Button, Dropdown, Label, Menu } from '@mergestat/blocks'
import { CaretDownIcon } from '@mergestat/icons'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { ChartData, ChartType } from 'src/@types'
import { mapToApexChart } from 'src/api-logic/mappers/charts/apex-chart'
import { useQueryContext } from 'src/state/contexts'
import { useQueryTabsContext, useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { chartOptions } from 'src/utils/charts/chart-config'
import { XAXIS_TYPE } from 'src/utils/constants'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type TabChartProps = {
  tabId?: string
  chartType: ChartType
  children?: React.ReactNode
}

const TabChart: React.FC<TabChartProps> = ({ tabId = '', chartType }: TabChartProps) => {
  const [{ dataQuery: data }] = useQueryContext()
  const tabsState = useQueryTabsContext()
  const dispatch = useQueryTabsDispatch()

  const { serie, xAxis, yAxis, options, series } = (tabsState[tabId] as ChartData)

  const setState = (payload: ChartData) => dispatch({ tab: tabId, payload })

  const getChartType = (xAxis: string | undefined) => {
    if (xAxis) {
      const xIndex = data.columns?.findIndex(d => d.name === xAxis) || 0
      const value = data.rows ? (data.rows[0][xIndex]).toString() : ''
      console.log('Value: ', value)

      const date = (new Date(value)).valueOf()
      console.log('Date: ', date)
      if (!isNaN(date)) {
        return XAXIS_TYPE.DATETIME
      }

      const num = (+value).valueOf()
      console.log('Num: ', num)
      if (!isNaN(num)) {
        return XAXIS_TYPE.NUMERIC
      }
    }
    return XAXIS_TYPE.CATEGORY
  }

  useEffect(() => {
    const typeX = getChartType(xAxis)
    console.log('Type: ', typeX)
    const series = mapToApexChart({ data, serie, xAxis, yAxis, typeX })
    setState({ series })

    if (chartOptions.xaxis) {
      const options = {
        ...chartOptions,
        ...{
          xaxis: {
            type: typeX,
            ...{
              labels: chartOptions.xaxis.labels
            }
          }
        }
      }
      setState({ options })
      console.log('Options: ', chartOptions)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, serie, xAxis, yAxis])

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
        <div className='mt-6'>
          <Label className='text-gray-500'>Series</Label>
          <Dropdown
            alignEnd
            trigger={
              <Button label={serie || 'Select'} skin="ghost"
                className='text-gray-500' isBlockBetween
                endIcon={<CaretDownIcon className='t-icon' />}
              />
            }
            overlay={(close) => (
              <Menu className='whitespace-nowrap w-full'>
                <Menu.Item key='col-series-no-selected' text='Select'
                  onClick={() => {
                    setState({ serie: undefined })
                    close()
                  }}
                />
                {data.columns?.map((col, index) => (
                  <Menu.Item key={`col-series-${index + 1}`} text={col.name}
                    onClick={() => {
                      setState({ serie: col.name.toString() })
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
          type={chartType}
          width='100%'
          height='100%'
          options={options}
          series={series}
        />}
      </div>
    </div>
  )
}

export default TabChart
