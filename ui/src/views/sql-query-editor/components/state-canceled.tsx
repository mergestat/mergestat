import { Avatar, Badge, Toolbar } from '@mergestat/blocks'
import { WarningFilledIcon, WarningIcon } from '@mergestat/icons'

const QueryEditorCanceled: React.FC = () => {
  return (
    <>
      <div className='bg-white flex -mt-2 h-16 w-full border-b px-8' style={{ minHeight: '64px' }}>
        <Toolbar className='flex-1 w-auto space-x-4 h-full'>
          <Toolbar.Left className='space-x-4'>
            <Toolbar.Item>
              <h3 className='t-h3 whitespace-nowrap mb-0'>Query results</h3>
            </Toolbar.Item>
            <Toolbar.Item>
              <Badge
                label='Canceled'
                variant='default'
                className='bg-gray-50 rounded-full'
                startIcon={
                  <WarningFilledIcon className='t-icon t-icon-warning' />
                }
              />
            </Toolbar.Item>
          </Toolbar.Left>
        </Toolbar>
      </div>
      <div className='bg-white w-full overflow-hidden flex-1 flex flex-col items-center justify-center'>
        <Avatar
          variant='warning'
          icon={<WarningIcon className='t-icon' />}
        />
        <div className='text-center mt-6'>
          <h4 className='t-h4'>Query Canceled</h4>
        </div>
      </div>
    </>
  )
}

export default QueryEditorCanceled
