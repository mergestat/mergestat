import { Avatar } from '@mergestat/blocks'
import { CircleInformationIcon, MinusIcon } from '@mergestat/icons'

type QueryEditorEmptyProps = {
  executed: boolean
  children?: React.ReactNode
}

const QueryEditorEmpty: React.FC<QueryEditorEmptyProps> = ({ executed }: QueryEditorEmptyProps) => {
  return (
    <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
      <Avatar icon={executed ? <MinusIcon className="t-icon" /> : <CircleInformationIcon className='t-icon' />} />
      <p className='t-text-muted mt-6'>
        {executed ? 'Empty result set (no rows returned).' : 'Execute query to show results.'}
      </p>
    </div>
  )
}

export default QueryEditorEmpty
