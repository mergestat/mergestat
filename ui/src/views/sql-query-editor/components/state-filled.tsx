import { Alert, Badge, Button, HoverCard, Menu, Tabs, Toolbar, Tooltip } from '@mergestat/blocks'
import { ArrowCollapseIcon, ArrowExpandIcon, CaretDownIcon, ChartBarIcon, ChartLineIcon, CircleCheckFilledIcon, PlusIcon, SingleMetricIcon } from '@mergestat/icons'
import { cloneElement } from 'react'
import { ChartData } from 'src/@types'
import { useQueryContext } from 'src/state/contexts'
import { TAB_TYPE } from 'src/utils/constants'
import useTabs from 'src/views/hooks/useTabs'

type QueryEditorFilledProps = {
  time: string
  children?: React.ReactNode
  charts: ChartData[]
}

const QueryEditorFilled: React.FC<QueryEditorFilledProps> = ({ time, charts }: QueryEditorFilledProps) => {
  const [{ rowLimitReached }] = useQueryContext()
  const { tabs, expanded, activeTab, setActiveTab, setExpanded, addTab, removeTab } = useTabs(charts)

  return (
    <div className="flex flex-col flex-1 w-full bg-white" style={{ minHeight: '48px' }}>
      <Tabs variant='secondary' defaultIndex={0} selectedIndex={activeTab} onChange={(index) => setActiveTab(index)}>
        <Tabs.List>
          {tabs.map((tab, index) => (
            <Tabs.Item key={`tab-item-${index}`}
              disabled={tab.disabled}
              closable={tab.closable}
              onClose={() => removeTab(tab.tabId)}
            >
              {tab.title}
            </Tabs.Item>
          ))}

          <Toolbar className='flex flex-1 border-b border-t t-border-default'>
            <Toolbar.Left>
              <HoverCard
                interaction='click'
                placement='bottom'
                className='h-full'
                offset={[2, 4]}
                overlay={(close) => (
                  <Menu className='mt-0'>
                    <Menu.Item text="Single metric" withIcon
                      icon={<SingleMetricIcon className="t-icon t-icon-default" />}
                      onClick={() => {
                        addTab(TAB_TYPE.SINGLE_METRIC)
                        close()
                      }}
                    />
                    <Menu.Item text="Line chart" withIcon
                      icon={<ChartLineIcon className="t-icon t-icon-default" />}
                      onClick={() => {
                        addTab(TAB_TYPE.LINE)
                        close()
                      }}
                    />
                    <Menu.Item text="Bar chart" withIcon
                      icon={<ChartBarIcon className="t-icon t-icon-default" />}
                      onClick={() => {
                        addTab(TAB_TYPE.BAR)
                        close()
                      }}
                    />
                  </Menu>
                )}
              >
                <div className='t-tab-btn border-gray-200 border-t-0 border-b-0'>
                  <PlusIcon className="t-icon" />
                  <span className='whitespace-nowrap'>Add View</span>
                  <CaretDownIcon className="t-icon" />
                </div>
              </HoverCard>
            </Toolbar.Left>
            <Toolbar.Right className='flex-1 pr-8 space-x-4'>
              <Toolbar.Item>
                <span className='text-sm t-text-muted pl-3 pr-1'>{time}</span>
              </Toolbar.Item>
              {rowLimitReached && <Toolbar.Item>
                <Alert isInline type="warning" className='text-gray-400'>
                  <Tooltip placement='bottom' offset={[0, 10]}
                    content={<div className='w-56 font-thin pl-2 pr-1 py-3 leading-2'>
                      Result set exceeds the limits of the UI. Please use another SQL client to access more rows
                    </div>}>
                    <span className='border-b-2 border-dotted border-gray-400'>Limited to 1000 rows</span>
                  </Tooltip>
                </Alert>
              </Toolbar.Item>}
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
              {cloneElement(tab.content as React.ReactElement, { tabId: tab.tabId })}
            </Tabs.Panel>
          ))}
        </Tabs.Panels>
      </Tabs>
    </div>
  )
}

export default QueryEditorFilled
