
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const SettingsView = ({ children }: Props) => {
  return (
    <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
      {children}
    </main>
  )
}

export default SettingsView
