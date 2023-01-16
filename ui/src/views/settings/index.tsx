
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const SettingsView = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default SettingsView
