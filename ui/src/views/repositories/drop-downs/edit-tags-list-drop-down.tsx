import { Dropdown, MultiSelect } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'

type RepositoryTagListProps = {
  tags: Array<{ title: string, checked: boolean }>
  setTags?: () => void
}
export const EditTagsListDropDown: React.FC<RepositoryTagListProps> = ({ tags }: RepositoryTagListProps) => {
  return (
    <Dropdown
      alignEnd
      overlay={() => (
        <div className="relative border bg-white w-80 shadow p-3 rounded">
          <MultiSelect setStateToProps={tags} />
        </div>
      )}
      trigger={<DotsHorizontalIcon className="t-icon t-icon-small h-full text-semantic-icon" />}
      zIndex={11}
    />
  )
}
