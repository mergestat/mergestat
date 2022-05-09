import { Checkbox, Panel, Table, Typography } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import React from 'react'
import { numberWithCommas } from 'src/utils'
import { columns } from './columns'
import { LogsTableRowOptions } from './log-table-row-options'
import { CollapseTrigger, SyncType } from './logs-table-columns'

import { sampleDatatypesettingsData } from './sample-data'

export const LogsTable: React.FC = (props) => {
    // TODO: export this logic to a hook
    const processedData = sampleDatatypesettingsData.map((item, index) => ({
        collapse:<CollapseTrigger collapsed={item.collapsed}/>,
        sync_type:<SyncType sync_type={item.sync_type} last_sync_time={item.sync_start} />,
        records: numberWithCommas(item.records),
        duration: item.duration,
        sync_start:item.sync_start,
        options:<LogsTableRowOptions/>
    }))
    return (
        <Panel>
            <Panel.Header>
                <Typography.Title>
                    Table with data
                </Typography.Title>
            </Panel.Header>
            <Panel.Body className='p-0'>

                <Table
                    scrollY={'100%'}
                    responsive
                    borderless
                    noWrapHeaders
                    className="overflow-visible relative z-0"
                    columns={columns}
                    dataSource={processedData}
                />
            </Panel.Body>
        </Panel>


    )
}

