import { Avatar } from '@mergestat/blocks'
import { CircleInformationIcon, MinusIcon } from '@mergestat/icons'
import { QueryResultProps } from 'src/@types'

type QueryEditorEmptyProps = {
  executed: boolean
  data: QueryResultProps | undefined
  children?: React.ReactNode
}

const QueryEditorEmpty: React.FC<QueryEditorEmptyProps> = ({ executed, data }: QueryEditorEmptyProps) => {
  const getMessage = () => {
    if (!executed) {
      return 'Execute query to show results.'
    } else {
      if (data?.rowCount && data.rowCount > 0) {
        return `${data.rowCount} row${data.rowCount > 1 ? 's' : ''} impacted`
      } else {
        return data?.columns && data.columns.length > 0 ? 'Empty result set (no rows returned).' : 'No rows impacted'
      }
    }
  }

  return (
    <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
      <Avatar icon={executed ? <MinusIcon className="t-icon" /> : <CircleInformationIcon className='t-icon' />} />
      <p className='t-text-muted mt-6'>
        {getMessage()}
      </p>
    </div>
  )
}

export default QueryEditorEmpty
