import { ChartBarIcon, ChartLineIcon, SingleMetricIcon, TableIcon } from '@mergestat/icons'
import { useEffect } from 'react'
import { ChartData, SingleMetricData } from 'src/@types'
import { useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { useQueryContext, useQuerySetState } from 'src/state/contexts/query.context'
import { TAB_TYPE } from 'src/utils/constants'
import { v4 as uuidv4 } from 'uuid'
import TabChart from '../sql-query-editor/tabs/tab-chart'
import TabSingleMetric from '../sql-query-editor/tabs/tab-single-metric'
import TabTable from '../sql-query-editor/tabs/tab-table'

const useTabs = (charts: ChartData[]) => {
  const [{ expanded, activeTab, tabs }] = useQueryContext()
  const { setExpanded, setActiveTab, setTabs } = useQuerySetState()
  const dispatch = useQueryTabsDispatch()

  useEffect(() => {
    const tableTab = {
      tabId: uuidv4(),
      title: <><TableIcon className='t-icon' /> <span className='ml-2'>Table</span></>,
      content: <TabTable />
    }
    let tabData = [tableTab]

    charts.forEach((chartData) => {
      const { chartType } = chartData
      const id = uuidv4()

      dispatch({ tab: id, payload: chartData })
      tabData = [...tabData, getTabData(chartType, id)]
    })
    setTabs(tabData)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setActiveTab(tabs.length - 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs])

  const getTabData = (tab: string, tabId: string) => {
    switch (tab) {
      case TAB_TYPE.BAR:
        return {
          tabId,
          title: <><ChartBarIcon className='t-icon' /> <span className='ml-2'>Bar chart</span></>,
          content: <TabChart chartType={TAB_TYPE.BAR} />,
          closable: true
        }
      case TAB_TYPE.LINE:
        return {
          tabId,
          title: <><ChartLineIcon className='t-icon' /> <span className='ml-2'>Line chart</span></>,
          content: <TabChart chartType={TAB_TYPE.LINE} />,
          closable: true
        }
      default:
        return {
          tabId,
          title: <><SingleMetricIcon className='t-icon' /> <span className='ml-2'>Single metric</span></>,
          content: <TabSingleMetric />,
          closable: true
        }
    }
  }

  const getTabPayload = (tab: string) => {
    switch (tab) {
      case TAB_TYPE.BAR:
      case TAB_TYPE.LINE:
        return { xAxis: '', yAxis: '' } as ChartData
      default:
        return { label: '' } as SingleMetricData
    }
  }

  const addTab = (tab: string) => {
    const tabId = uuidv4()
    dispatch({ tab: tabId, payload: getTabPayload(tab) })
    setTabs([...tabs, getTabData(tab, tabId)])
  }

  const removeTab = (tabId: string) => {
    dispatch({ tab: tabId, remove: true })
    const newTabs = tabs.filter((tab) => tab.tabId !== tabId)
    setTabs(newTabs)
    setActiveTab(0)
  }

  return { tabs, expanded, activeTab, setActiveTab, setExpanded, addTab, removeTab }
}

export default useTabs
