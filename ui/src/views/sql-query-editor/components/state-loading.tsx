import { Badge, Spinner, Toolbar } from '@mergestat/blocks'

const QueryEditorLoading: React.FC = () => {
  return (
    <>
      <div className='bg-white flex -mt-2 h-16 w-full border-b px-8' style={{ minHeight: '64px' }}>
        <Toolbar className='flex-1 w-auto h-full'>
          <Toolbar.Left className='space-x-4'>
            <Toolbar.Item>
              <h3 className='t-h3 mb-0'>Query results</h3>
            </Toolbar.Item>
            <Toolbar.Item>
              <Badge
                label='Loading'
                variant='default'
                className='bg-gray-50 rounded-full'
                startIcon={
                  <Spinner size='sm' className='mr-2' />
                }
              />
            </Toolbar.Item>
          </Toolbar.Left>
        </Toolbar>
      </div>
      <div className='bg-white w-full flex-1 flex flex-col overflow-hidden'>
        <div className='animate-pulse'>
          <div className='grid grid-cols-4 w-full border-gray-100 border-b-2 h-14 items-center'>
            <div className='col-span-1 py-3 pl-8 pr-3 flex items-center border-gray-100 border-r h-full'>
              <div className='bg-gray-150 w-40 h-4 rounded'></div>
            </div>
            <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
              <div className='bg-gray-150 w-20 h-4 rounded'></div>
            </div>
            <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
              <div className='bg-gray-150 w-16 h-4 rounded'></div>
            </div>
            <div className='col-span-1 py-3 pl-3 pr-8 flex items-center border-gray-100 border-r h-full'>
              <div className='bg-gray-150 w-24 h-4 rounded'></div>
            </div>
          </div>
          {[1, 2, 3, 4, 5].map((row) => (
            <div key={row} className='grid grid-cols-4 w-full border-gray-100 border-b h-14'>
              <div className='col-span-1 py-3 pl-8 pr-3 flex items-center border-gray-100 border-r h-full'>
                <div className='bg-gray-150 w-32 h-4 rounded'></div>
              </div>
              <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
                <div className='bg-gray-150 w-20 h-4 rounded'></div>
              </div>
              <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
                <div className='bg-gray-150 w-36 h-4 rounded'></div>
              </div>
              <div className='col-span-1 py-3 pr-8 pl-3 flex items-center h-full'>
                <div className='bg-gray-150 w-16 h-4 rounded'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default QueryEditorLoading
