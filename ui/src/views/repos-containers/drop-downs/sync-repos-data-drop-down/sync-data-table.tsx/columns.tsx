import { Button, Typography } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import { RowOptions } from './row-options'

export const columns: Array<Record<string, unknown>> = [
  {
    title: (
      <Typography.Title className='t-text-header font-semibold ml-6'>
        Sync Data
      </Typography.Title>
    ),
    className: 'pr-40',
    dataIndex: 'dataType',
    key: 'dataType',
    render: (params: { title: string, brief?: string }) => (
      <div className='ml-6 my-3'>
        <h4 className="font-medium mb-0.5 t-text-default cursor-pointer hover_text-blue-600">
          {params.title}
        </h4>
        <p className="text-sm t-text-muted whitespace-nowrap">
          {params.brief}
        </p>
      </div>
    )
  },
  {
    dataIndex: 'syncNow',
    key: 'syncNow',
    render: (params: { disabled: boolean, doSync: () => void }) => (
      <Button
        className='whitespace-nowrap'
        skin='secondary'
        size="small"
        startIcon={
          <RefreshIcon className={`t-icon ${params.disabled ? 't-icon-muted' : 't-icon-default'}`} />
        }
        onClick={params.doSync}
        disabled={params.disabled}
      >
        Sync Now For Enabled
      </Button>
    )
  },
  {
    className: 'w-4 px-6',
    dataIndex: 'option',
    key: 'option',
    render: () => <RowOptions />
  },
]
