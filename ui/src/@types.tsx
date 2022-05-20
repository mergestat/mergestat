export type RepSyncStateT = 'disabled' | 'loading' | 'success' | 'error'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type TagType = {
  title: string;
  checked: boolean;
  color?: string;
}
