
import { useQueryContext } from 'src/state/contexts'
import ResultTable from 'src/views/shared/result-table'

const TabTable: React.FC = () => {
  const [{ dataQuery: data }] = useQueryContext()

  return (
    <ResultTable data={data} />
  )
}

export default TabTable
