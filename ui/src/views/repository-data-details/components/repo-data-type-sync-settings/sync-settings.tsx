import React from 'react'
import { SettingsTable } from './settings-table'
import { SyncSettingsForm } from './sync-settings-form'

export const SyncSettings = () => {
  return (
    <div className="flex flex-col gap-8">
      <SyncSettingsForm />
      <SettingsTable />
    </div>
  )
}
