import { Button } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import React from 'react'
import { BreadcrumbNav } from '@mergestat/blocks'

export const PageHeader: React.FC = () => {
  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        <AutoManagedBreadCrumb />
      </div>
      <div className="flex gap-3">
        <Button
          skin="secondary"
          isIconOnly
          startIcon={<DotsHorizontalIcon className="t-icon" />}
        />
      </div>
    </div>
  )
}
