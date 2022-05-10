import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { BreadcrumbNav, Button, SplitButton } from '@mergestat/blocks'
import { AutoImportIcon, CogIcon, PlusIcon } from '@mergestat/icons'
import { AutoManagedBreadCrumb } from 'src/components/bread-crumb'

export type RepoDetailsHeaderProps = {
  repo: {
    text: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick?: (() => void) | undefined
  }
}

export const PageHeader: React.FC<RepoDetailsHeaderProps> = (props) => {
  const { repo } = props
  const router = useRouter()
  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        <AutoManagedBreadCrumb />
      </div>
    </div>
  )
}

