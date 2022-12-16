import { Avatar } from '@mergestat/blocks'
import { CircleInformationIcon, MinusIcon } from '@mergestat/icons'
import { QueryResultProps } from 'src/@types'

type QueryEditorEmptyProps = {
  executed: boolean
  data: QueryResultProps | undefined
  children?: React.ReactNode
}

const QueryEditorEmpty: React.FC<QueryEditorEmptyProps> = ({ executed, data }: QueryEditorEmptyProps) => {
  return (
    <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
      <Avatar icon={executed ? <MinusIcon className="t-icon" /> : <CircleInformationIcon className='t-icon' />} />
      <p className='t-text-muted mt-6'>
        {data?.rows && data.rows.length > 0
          ? executed ? 'Empty result set (no rows returned).' : 'Execute query to show results.'
          : data?.rowCount && data.rowCount > 0 ? `${data.rowCount} row${data.rowCount > 1 ? 's' : ''} impacted` : 'No rows impacted'
        }
      </p>
    </div>
  )
}

export default QueryEditorEmpty
