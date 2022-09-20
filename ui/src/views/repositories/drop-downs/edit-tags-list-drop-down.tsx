import { Dropdown, MultiSelect } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import useTags from 'src/views/hooks/useTags'

type RepositoryTagListProps = {
  idRepo: string
  showMoreTags: boolean
  moreTags: number
  tags: Array<{ title: string, checked: boolean }>
  setTags?: () => void
}

export const EditTagsListDropDown: React.FC<RepositoryTagListProps> = ({ showMoreTags, moreTags, idRepo, tags }: RepositoryTagListProps) => {
  const { saveTags } = useTags()

  return (
    <Dropdown
      alignEnd
      overlay={() => (
        <div className="relative border bg-white w-80 shadow p-3 rounded">
          <MultiSelect setStateToProps={tags} getState={(tags) => saveTags(idRepo, tags)} />
        </div>
      )}
      trigger={
        <div className="flex items-center gap-x-2 border border-semantic-border rounded px-2 w-max bg-gray-100 cursor-pointer">
          {showMoreTags && (
            <div className="text-sm font-medium text-gray-500">
              <span>+{moreTags}</span>
            </div>
          )}
          <DotsHorizontalIcon className="t-icon t-icon-small h-full text-semantic-icon" />
        </div>
      }
      zIndex={11}
    />
  )
}
