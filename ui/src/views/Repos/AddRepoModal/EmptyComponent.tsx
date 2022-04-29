import React from "react"
import { HelpText } from "@mergestat/blocks"

export const EmptyComponent = ({ label }: { label: string }) => {      
  return (
    <div className="flex items-center h-20 border border-gray-100 rounded">
      <HelpText className="mx-auto">
        {label}
      </HelpText>
    </div>
  )
}
