import React from "react"
import {
  BreadcrumbNav,
  Button,
  SplitButton,
} from "@mergestat/blocks"
import {
  AutoImportIcon,
  CogIcon,
  PlusIcon,
} from "@mergestat/icons"


type ReposNavBarPropsT = {
  onAddRepo: () => void
  onSyncModalOpen: () => void
  onOpenAutoImport: () => void
}
const ReposNavBar = ({ onAddRepo, onSyncModalOpen, onOpenAutoImport }: ReposNavBarPropsT) => {
  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        <BreadcrumbNav data={[{ text: "Repos" }]} />
      </div>
      <div className="flex justify-between gap-3 items-center">
        <div className="relative">
          <SplitButton
            text="Create Auto Import"
            startIcon={<AutoImportIcon className="t-icon" />}
            onButtonClick={onSyncModalOpen}
            items={[
              {
                text: "Manage auto imports",
                icon: <CogIcon className="t-icon mr-2" />
              }
            ]}
            onItemClick={onOpenAutoImport}
          />
        </div>

        <Button
          startIcon={<PlusIcon className="t-icon" />}
          onClick={onAddRepo}
        >
          Add Repository
        </Button>
      </div>
    </div>
  )
}

export default ReposNavBar
