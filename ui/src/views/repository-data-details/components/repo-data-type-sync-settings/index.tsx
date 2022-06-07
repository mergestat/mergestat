import React from 'react'
import { SettingsTable } from './settings-table'
import { SyncSettingsForm } from './sync-settings-form'

export const SyncSettings = () => {
  return (
    <div className="grid gap-6 grid-rows-content-layout h-full">
      <SyncSettingsForm />
      <SettingsTable />
    </div>
  )
}
