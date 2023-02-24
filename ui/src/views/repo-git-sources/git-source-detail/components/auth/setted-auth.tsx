import { ListItem, Panel } from '@mergestat/blocks'
import { KeyIcon } from '@mergestat/icons'
import { useState } from 'react'
import { AuthDetail } from 'src/@types'
import { RemoveAuthModal } from '../../modals/remove-auth-credential'

const SettedAuth: React.FC<AuthDetail> = ({ id, createdAt }: AuthDetail) => {
  const [showRemoveAuthModal, setshowRemoveAuthModal] = useState(false)

  return (
    <>
      <Panel className='rounded-md shadow-sm m-auto'>
        <Panel.Body className='p-4'>
          <ListItem
            title={`Authenticated on ${createdAt}`}
            className={'p-2'}
            startIcon={<KeyIcon className='t-icon t-icon-muted' />}
            onTrashClick={() => setshowRemoveAuthModal(true)}
          />
        </Panel.Body>
      </Panel>

      {showRemoveAuthModal && <RemoveAuthModal id={id} setshowRemoveAuthModal={setshowRemoveAuthModal} />}
    </>
  )
}

export default SettedAuth
