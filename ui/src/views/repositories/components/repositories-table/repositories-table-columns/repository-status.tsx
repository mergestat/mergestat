import { RepoDataDropDown } from 'src/views/repositories/drop-downs'
import type { RepoDataStatusT } from '../@types'

export type RepositoryStatusProps = {
  status: Array<RepoDataStatusT>
}

export const RepositoryStatus: React.FC<RepositoryStatusProps> = (props) => {
  return (
    <div className="flex items-center justify-end gap-2">
      {props.status.map((item, index) => (
        <RepoDataDropDown
          key={index}
          status={item.type}
          data={Array(item.count)
            .fill(0)
            .map((a) => ({
              title: 'Commit Status',
              lastSync: 'Last sync 2d ago',
            }))}
        />
      ))}
    </div>
  )
}
