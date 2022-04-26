import React from "react"
import { Button, Input } from "@mergestat/blocks"
import { PlusIcon } from "@mergestat/icons"

type AddFromUrlPropsT = {
  setAddButtonText: (text: string) => void
}

const AddFromUrl = ({
  setAddButtonText
}: AddFromUrlPropsT) => {
  const isEmpty = true
  setAddButtonText("Add 4 Repostories")
      
  return (
    <div className="p-8 w-full">
      <p className="text-lg font-semibold mb-8">
        Add from URL
      </p>
      <div className="flex w-full items-center gap-2">
        <p className="whitespace-nowrap mr-4 text-gray-500 font-medium">
          URL
        </p>
        <Input placeholder="github.com/owner/repo" />
        <Button
          skin="secondary"
          className="whitespace-nowrap"
          startIcon={<PlusIcon className="t-icon" />}
          // onClick={}
        >
          Add
        </Button>
      </div>
      {isEmpty ? (
        <div className="m-8 border border-gray-100 rounded">
          No repository added yet
        </div>
      ) : (
        <div className="py-10 flex justify-center mt-8 border border-gray">
        </div>
      )}
    </div>
  )
}

export default AddFromUrl
