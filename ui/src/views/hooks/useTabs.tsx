import { ChartBarIcon, ChartLineIcon, SingleMetricIcon, TableIcon } from '@mergestat/icons'
import { ReactElement, useState } from 'react'
import { ChartData, QueryResultProps, SingleMetricData } from 'src/@types'
import { useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { useQueryContext, useQuerySetState } from 'src/state/contexts/query.context'
import { TAB_TYPE } from 'src/utils/constants'
import { v4 as uuidv4 } from 'uuid'
import TabBarChart from '../sql-query-editor/tabs/tab-bar-chart'
import TabLineChart from '../sql-query-editor/tabs/tab-line-chart'
import TabSingleMetric from '../sql-query-editor/tabs/tab-single-metric'
import TabTable from '../sql-query-editor/tabs/tab-table'

interface TabData {
  tabId: string
  title: ReactElement | string
  content: ReactElement | string
  disabled?: boolean
  closable?: boolean
}

const useTabs = (rowLimit: number, rowLimitReached: boolean, data: QueryResultProps) => {
  const [{ expanded }] = useQueryContext()
  const { setExpanded } = useQuerySetState()
  const dispatch = useQueryTabsDispatch()

  const [activeTab, setActiveTab] = useState<number>(0)

  const [tabs, setTabs] = useState<TabData[]>([
    {
      tabId: uuidv4(),
      title: <><TableIcon className='t-icon' /> <span className='ml-2'>Table</span></>,
      content: <TabTable rowLimit={rowLimit} rowLimitReached={rowLimitReached} data={data} />
    }
  ])

  const getTabData = (tab: string, tabId: string) => {
    switch (tab) {
      case TAB_TYPE.BAR:
        return {
          tabId,
          title: <><ChartBarIcon className='t-icon' /> <span className='ml-2'>Bar chart</span></>,
          content: <TabBarChart data={data} />,
          closable: true
        }
      case TAB_TYPE.LINE:
        return {
          tabId,
          title: <><ChartLineIcon className='t-icon' /> <span className='ml-2'>Line chart</span></>,
          content: <TabLineChart data={data} />,
          closable: true
        }
      default:
        return {
          tabId,
          title: <><SingleMetricIcon className='t-icon' /> <span className='ml-2'>Single metric</span></>,
          content: <TabSingleMetric data={data} />,
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
    setActiveTab(tabs.length)
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
