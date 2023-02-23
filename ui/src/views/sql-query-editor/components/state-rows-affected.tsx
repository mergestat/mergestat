import { Avatar } from '@mergestat/blocks'
import { MinusIcon } from '@mergestat/icons'
import { QueryResultProps } from 'src/@types'

type QueryEditorRowsImpactedProps = {
    data: QueryResultProps | undefined
    children?: React.ReactNode
}

const QueryEditorRowsImpacted: React.FC<QueryEditorRowsImpactedProps> = ({ data }: QueryEditorRowsImpactedProps) => (
    <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
        <Avatar icon={<MinusIcon className="t-icon" />} />
        <p className='t-text-muted mt-6'>
            {`rows impacted ${data?.rowCount}`}
        </p>
    </div>)

export default QueryEditorRowsImpacted
