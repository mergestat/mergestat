import React from 'react'

export type RepositorySyncStatusProps = {
  graphNode: React.ReactNode
  disabled?: boolean
}

export const RepositorySyncStatus: React.FC<RepositorySyncStatusProps> = (
  props
) => {
  const { graphNode, disabled = false } = props

  return disabled ? (
    <p className="text-sm text-samantic-mutedText">Disabled</p>
  ) : (
    <div className='text-samantic-mutedText'>
      {graphNode}
    </div>
  )
}
