import type { RepoDataStatusT } from 'src/@types'
import { RepoDataDropDown } from 'src/views/repositories/drop-downs'

export type RepositoryStatusProps = {
  status: Array<RepoDataStatusT>
}

export const RepositoryStatus: React.FC<RepositoryStatusProps> = ({ status }: RepositoryStatusProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      {status.length ? null : <span className="text-semantic-mutedText">No syncs</span>}
      {status.map((item, index) => (
        <RepoDataDropDown
          key={index}
          status={item.type}
          data={Array(item.count)
            .fill(0)
            .map(() => ({
              title: 'Commit Status',
              lastSync: 'Last sync 2d ago',
            }))}
        />
      ))}
    </div>
  )
}
