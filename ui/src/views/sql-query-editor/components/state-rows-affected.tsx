import { Avatar } from '@mergestat/blocks'
import { MinusIcon } from '@mergestat/icons'
import { ExecuteSqlQuery } from 'src/api-logic/graphql/generated/schema'

type QueryEditorRowsImpactedProps = {
  data: ExecuteSqlQuery | undefined
  children?: React.ReactNode
}

const QueryEditorRowsImpacted: React.FC<QueryEditorRowsImpactedProps> = ({ data }: QueryEditorRowsImpactedProps) => (
  <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
    <Avatar icon={<MinusIcon className="t-icon" />} />
    <p className='t-text-muted mt-6'>
      `${data?.execSQL?.rowCount} row${data?.execSQL?.rowCount ? 's' : ''} impacted`
    </p>
  </div>)

export default QueryEditorRowsImpacted
