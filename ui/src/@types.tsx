export type repSyncState = 'disabled' | 'loading' | 'check' | 'error'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type tagType = {
  title: string;
  checked: boolean;
  color?: string;
}
