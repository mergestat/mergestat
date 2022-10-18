import { Avatar } from '@mergestat/blocks'
import { CircleInformationIcon } from '@mergestat/icons'

const QueryEditorEmpty: React.FC = () => {
  return (
    <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
      <Avatar icon={<CircleInformationIcon className='t-icon' />} />
      <p className='text-semantic-mutedText mt-6'>
        Execute query to show results.
      </p>
    </div>
  )
}

export default QueryEditorEmpty
