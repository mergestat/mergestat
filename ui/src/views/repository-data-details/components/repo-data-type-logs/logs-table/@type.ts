
export type syncType="failed"|"succeeded"

export type SyncLogsType={
    collapsed:boolean
    sync_type:syncType
    records:number
    duration:string
    sync_start:string
}