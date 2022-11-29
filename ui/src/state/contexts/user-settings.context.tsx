import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { UserType } from 'src/@types'

type UserSettingsContextT = {
  showChangePasswordModal: boolean
  showAddUserModal: boolean
  showEditUserModal: boolean
  showRemoveUserModal: boolean
  usernameEdit: string | null
  roleEdit: UserType | null
}

type UseUserSettingsContextT = [
  UserSettingsContextT,
  React.Dispatch<React.SetStateAction<UserSettingsContextT>>
]

const initialState: UserSettingsContextT = {
  showChangePasswordModal: false,
  showAddUserModal: false,
  showEditUserModal: false,
  showRemoveUserModal: false,
  usernameEdit: null,
  roleEdit: null
}

function useUserSettings(): UseUserSettingsContextT {
  const [state, setState] = React.useState<UserSettingsContextT>(initialState)
  return [state, setState]
}

// Generate context
const [useUserSettingsContext, UserSettingsContextProvider] = createGenericContext<UseUserSettingsContextT>()

// Generate provider
const UserSettingsProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [userSettings, setUserSettings] = useUserSettings()

  return (
    <UserSettingsContextProvider value={[userSettings, setUserSettings]}>
      {props.children}
    </UserSettingsContextProvider>
  )
}

function useUserSettingsSetState() {
  const [_, setState] = useUserSettingsContext()

  const setShowChangePasswordModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showChangePasswordModal: show
    }))
  }

  const setShowAddUserModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showAddUserModal: show
    }))
  }

  const setShowEditUserModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showEditUserModal: show
    }))
  }

  const setShowRemoveUserModal = (show: boolean) => {
    setState(prev => ({
      ...prev,
      showRemoveUserModal: show
    }))
  }

  const setUsernameEdit = (usernameEdit: string | null) => {
    setState(prev => ({
      ...prev,
      usernameEdit
    }))
  }

  const setRolEdit = (roleEdit: UserType | null) => {
    setState(prev => ({
      ...prev,
      roleEdit
    }))
  }

  return {
    _,
    setShowChangePasswordModal,
    setShowAddUserModal,
    setShowEditUserModal,
    setShowRemoveUserModal,
    setUsernameEdit,
    setRolEdit
  }
}

export {
  useUserSettingsContext,
  UserSettingsProvider,
  useUserSettingsSetState,
}
