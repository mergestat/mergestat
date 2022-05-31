import { Button, Panel, Typography } from '@mergestat/blocks'
import React from 'react'

type RepoDataDescriptionProps = {
  title: string
  description: string
}
export const RepoDataTypeDescription: React.FC<RepoDataDescriptionProps> = (
  props
) => {
  return (
    <Panel className="shadow-sm">
      <Panel.Body>
        <h4 className="t-h4 mb-2">
          {props.title}
        </h4>
        <p className="text-samantic-mutedText">
          {props.description}
        </p>

        <Button skin="borderless" label="Learn more" />
      </Panel.Body>
    </Panel>
  )
}
