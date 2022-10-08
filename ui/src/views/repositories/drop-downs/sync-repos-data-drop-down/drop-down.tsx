import { Dropdown } from '@mergestat/blocks'
import { SyncDataTable } from './sync-data-table.tsx'

interface SyncDataDropDownProps {
  triger: React.ReactNode
}

export const SyncDataDropDown: React.FC<SyncDataDropDownProps> = ({ triger }: SyncDataDropDownProps) => {
  return (
    <Dropdown
      alignEnd
      overlay={() => (
        <SyncDataTable />
      )}
      trigger={triger}
      zIndex={11}
    />
  )
}
