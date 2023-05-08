import { Button, Dropdown, Label, Menu } from '@mergestat/blocks'
import { CaretDownIcon, TableIcon } from '@mergestat/icons'
import { TimeGrain } from 'src/@types'
import { TIME_GRAIN } from 'src/utils/constants'

interface Props {
  selected: TimeGrain
  changeTimeGrain: (name: TimeGrain, close: () => void) => void
}

export const TimeGrainDropdown: React.FC<Props> = ({ selected, changeTimeGrain }: Props) => {
  return (
    <div className='flex space-x-4'>
      <Label>Time Grain</Label>
      <Dropdown
        alignEnd
        trigger={<Button
          endIcon={<CaretDownIcon className="t-icon" />}
          isBlockBetween
          className='t-text-default font-normal hover_from-white hover_to-white w-32'
          label={selected}
          skin="ghost"
        />}
        overlay={(close) => (
          <Menu className='whitespace-nowrap'>
            <Menu.Item text="Months" onClick={() => changeTimeGrain(TIME_GRAIN.MONTHS, close)} />
            <Menu.Item text="Years" onClick={() => changeTimeGrain(TIME_GRAIN.YEARS, close)} />
          </Menu>
        )}
      />
      <Button
        isIconOnly
        className='my-0'
        skin='borderless-muted'
        startIcon={<TableIcon className="t-icon" />}
      />
    </div>
  )
}
