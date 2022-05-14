import { Dropdown, MultiSelect } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'

type RepositoryTagListProps = {
  tags: Array<{ title: string; checked: boolean }>
  setTags?: () => void
}
export const EditTagsListDropDown: React.FC<RepositoryTagListProps> = (
  props
) => {
  const { tags } = props

  return (
    <Dropdown
      alignEnd
      overlay={() => (
        <div className="relative z-50 bg-white w-80">
          <MultiSelect setStateToProps={tags} />
        </div>
      )}
      trigger={<DotsHorizontalIcon className="w-4 h-4 mt-2 text-samantic-icon" />}
    />
  )
}
