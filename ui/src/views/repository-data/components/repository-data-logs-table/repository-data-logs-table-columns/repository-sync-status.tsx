import React from "react"

type RepositorySyncStatusProps = {
  Graph: React.ReactNode,
  disabled?: boolean
}

export const RepositorySyncStatus: React.FC<RepositorySyncStatusProps> = (props) => {
  const { Graph, disabled = false } = props
  if (disabled) return (
    <p className='text-sm text-gray-500'>
      Disabld
    </p>
  )
  return (
    <>
      {Graph}
    </>
  )
}
