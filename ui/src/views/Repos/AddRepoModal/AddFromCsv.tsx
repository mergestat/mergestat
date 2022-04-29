import React from "react"

type AddFromCsvPropsT = {
  setRepoCount: (num: number) => void
}

const AddFromCsv = ({
  setRepoCount
}: AddFromCsvPropsT) => {

  return (
    <div className="p-8 w-full">
      <p className="text-lg font-semibold mb-8">
        Add from CSV
      </p>
      <div className="flex w-full items-center gap-2">
        <p className="whitespace-nowrap mr-4 text-gray-500 font-medium">
          Paste CSV
        </p>
      </div>
      <div className="py-10 flex justify-center mt-8 border border-gray">

      </div>
    </div>
  )
}

export default AddFromCsv
