import { Badge, Button, HoverCard, Menu, Tabs, Toolbar, Tooltip } from '@mergestat/blocks'
import { ArrowCollapseIcon, ArrowExpandIcon, CaretDownIcon, ChartBarIcon, ChartLineIcon, CircleCheckFilledIcon, PlusIcon, SingleMetricIcon, TableIcon } from '@mergestat/icons'
import { cloneElement, ReactElement, useState } from 'react'
import { QueryResultProps } from 'src/@types'
import { useQueryTabsDispatch } from 'src/state/contexts/query-tabs.context'
import { useQueryContext, useQuerySetState } from 'src/state/contexts/query.context'
import { TAB_TYPE } from 'src/utils/constants'
import TabSingleMetric from '../tabs/tab-single-metric'
import TabTable from '../tabs/tab-table'

type QueryEditorFilledProps = {
  rowLimit: number
  rowLimitReached: boolean
  data: QueryResultProps
  children?: React.ReactNode
}

interface TabData {
  tabIndex: number
  title: ReactElement | string
  content: ReactElement | string
  disabled?: boolean
}

const QueryEditorFilled: React.FC<QueryEditorFilledProps> = ({ rowLimit, rowLimitReached, data }: QueryEditorFilledProps) => {
  const [{ expanded }] = useQueryContext()
  const { setExpanded } = useQuerySetState()
  const dispatch = useQueryTabsDispatch()

  const [tabs, setTabs] = useState<TabData[]>([
    {
      tabIndex: 0,
      title: <><TableIcon className='t-icon' /> <span className='ml-2'>Table</span></>,
      content: <TabTable rowLimit={rowLimit} rowLimitReached={rowLimitReached} data={data} />
    }
  ])

  const getTabData = (tab: string, tabIndex: number) => {
    switch (tab) {
      case TAB_TYPE.BAR:
        return {
          tabIndex,
          title: <><ChartBarIcon className='t-icon' /> <span className='ml-2'>Bar chart</span></>,
          content: 'Content Bar chart',
          disabled: true
        }
      case TAB_TYPE.LINE:
        return {
          tabIndex,
          title: <><ChartLineIcon className='t-icon' /> <span className='ml-2'>Line chart</span></>,
          content: 'Content Line chart',
          disabled: true
        }
      default:
        return {
          tabIndex,
          title: <><SingleMetricIcon className='t-icon' /> <span className='ml-2'>Single metric</span></>,
          content: <TabSingleMetric data={data} />
        }
    }
  }

  const addTab = (tab: string) => {
    dispatch({ tab: tabs.length, payload: { label: '' } })
    setTabs([...tabs, getTabData(tab, tabs.length)])
  }

  return (
    <div className="flex flex-col flex-1 w-full bg-white" style={{ minHeight: '57px' }}>
      <Tabs variant='secondary' className='flex-1'>
        <Tabs.List className='w-full'>
          {tabs.map((tab, index) => (
            <Tabs.Item key={`tab-item-${index}`} disabled={tab.disabled}>{tab.title}</Tabs.Item>
          ))}

          <Toolbar className='flex flex-1 border-b border-gray-200'>
            <Toolbar.Left>
              <HoverCard
                interaction='click'
                placement='bottom-start'
                overlay={(close) => (
                  <Menu className='mt-0'>
                    <Menu.Item text="Single metric" withIcon
                      icon={<SingleMetricIcon className="t-icon" />}
                      onClick={() => {
                        addTab(TAB_TYPE.SINGLE_METRIC)
                        close()
                      }}
                    />
                    <Tooltip content='Coming soon!' placement='right' offset={[0, 10]}>
                      <Menu.Item text="Bar chart" withIcon disabled
                        icon={<ChartBarIcon className="t-icon" />}
                        onClick={() => {
                          addTab(TAB_TYPE.BAR)
                          close()
                        }}
                      />
                    </Tooltip>
                    <Tooltip content='Coming soon!' placement='right' offset={[0, 10]}>
                      <Menu.Item text="Line chart" withIcon disabled
                        icon={<ChartLineIcon className="t-icon" />}
                        onClick={() => {
                          addTab(TAB_TYPE.LINE)
                          close()
                        }}
                      />
                    </Tooltip>
                  </Menu>
                )}
              >
                <div className='flex px-3 py-4 text-blue-600 hover_bg-gray-100 cursor-pointer'>
                  <PlusIcon className="t-icon" />
                  <span className='px-1'>Add view</span>
                  <CaretDownIcon className="t-icon" />
                </div>
              </HoverCard>
            </Toolbar.Left>
            <Toolbar.Right className='flex-1 pr-5'>
              <Toolbar.Item>
                <span className='text-sm t-text-muted pr-1'>5.2s</span>
              </Toolbar.Item>
              <Toolbar.Item>
                <Badge
                  label='Success'
                  variant='default'
                  className='bg-gray-50 rounded-full'
                  startIcon={
                    <CircleCheckFilledIcon className='t-icon t-icon-success' />
                  }
                />
              </Toolbar.Item>
              <Toolbar.Item>
                <Button
                  isIconOnly
                  size="small"
                  skin="secondary"
                  startIcon={
                    expanded ? <ArrowCollapseIcon className="t-icon" /> : <ArrowExpandIcon className="t-icon" />
                  }
                  onClick={() => setExpanded(!expanded)}
                />
              </Toolbar.Item>
            </Toolbar.Right>
          </Toolbar>
        </Tabs.List>
        <Tabs.Panels className='flex-1 overflow-auto'>
          {tabs.map((tab, index) => (
            <Tabs.Panel key={`tab-panel-${index}`} className='h-full flex flex-col'>
              {cloneElement(tab.content as React.ReactElement, { tabIndex: tab.tabIndex })}
            </Tabs.Panel>
          ))}
        </Tabs.Panels>
      </Tabs>
    </div>
  )
}

export default QueryEditorFilled
