import { Button, Spinner } from "@mergestat/blocks";
import { RefreshIcon } from "@mergestat/icons";
import React from "react";
import { repSyncState } from "../@type";

type RepositorySyncNowProps = {
  syncStatus: repSyncState
  doSync?:()=>void
}

export const RepositorySyncNow:React.FC<RepositorySyncNowProps> =(props)=>{
  const { syncStatus,doSync} = props

  return (
    <>
    {syncStatus === "disabled" ?
      <></>
      :
      <Button
      disabled={syncStatus === "syncing"}
      skin='secondary'
      startIcon={
        syncStatus === "syncing" ? <Spinner className=' w-3 h-3 mt-1' /> : <RefreshIcon className=' w-3 h-3 mt-1' />
      }
      size='small'
      className=' flex items-center gap-1'

      onClick={doSync}
      >
      {syncStatus === "syncing" ? "Syncing..." : "Sync Now"}
      </Button>}
    </>
  )
}
