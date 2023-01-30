import { Button, Dropdown, Label, Menu } from '@mergestat/blocks'
import { CaretDownIcon } from '@mergestat/icons'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { ApexSerie, ChartData, ChartType, QueryResultProps } from 'src/@types'
import { mapToApexChart } from 'src/api-logic/mappers/charts/apex-chart'
import { useQueryTabsContext, useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { chartOptions } from 'src/utils/charts/chart-config'
import { XAXIS_TYPE } from 'src/utils/constants'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

type TabChartProps = {
  data: QueryResultProps
  tabId?: string
  chartType: ChartType
  children?: React.ReactNode
}

const TabChart: React.FC<TabChartProps> = ({ data, tabId = '', chartType }: TabChartProps) => {
  const tabsState = useQueryTabsContext()
  const dispatch = useQueryTabsDispatch()

  const [options, setOptions] = useState(chartOptions)
  const [series, setSeries] = useState<ApexSerie[]>([])

  const { serie, xAxis, yAxis } = (tabsState[tabId] as ChartData)

  const setState = (payload: ChartData) => dispatch({ tab: tabId, payload })

  const getChartType = (xAxis: string | undefined) => {
    if (xAxis) {
      const xIndex = data.columns?.findIndex(d => d.name === xAxis) || 0
      const value = data.rows ? (data.rows[0][xIndex]).toString() : ''

      const date = (new Date(value)).valueOf()
      if (!isNaN(date)) {
        return XAXIS_TYPE.DATETIME
      }

      const num = (+value).valueOf()
      if (!isNaN(num)) {
        return XAXIS_TYPE.NUMERIC
      }
    }
    return XAXIS_TYPE.CATEGORY
  }

  useEffect(() => {
    const series = mapToApexChart({ data, serie, xAxis, yAxis })

    if (chartOptions.xaxis) {
      const newOptions = {
        ...chartOptions,
        ...{
          xaxis: {
            type: getChartType(xAxis),
            ...{
              labels: chartOptions.xaxis.labels
            }
          }
        }
      }
      setOptions(newOptions)
    }

    setSeries(series)
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
