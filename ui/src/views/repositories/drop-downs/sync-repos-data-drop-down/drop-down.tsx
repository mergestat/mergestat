import { Dropdown } from '@mergestat/blocks'
import { SyncDataTable } from './sync-data-table.tsx'

type SyncDataDropDownProps = {
  triger: React.ReactNode
}
export const SyncDataDropDown: React.FC<SyncDataDropDownProps> = (
  props
) => {
  return (
    <Dropdown 
      alignEnd
      overlay={() => (
        <SyncDataTable />
      )}
      trigger={props.triger}
      zIndex={11}
    />
  )
}
