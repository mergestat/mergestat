import { alertStack } from '@mergestat/blocks'

export type AlertStackType = 'warning' | 'info' | 'success' | 'error'

const callAlert = (message: string, title = 'Error', onClose?: () => void) => (type: AlertStackType) =>
  alertStack[type]({
    message,
    title,
    onClose
  })

export const showErrorAlert = (message: string, title = 'Error', onClose?: () => void) =>
  callAlert(message, title, onClose)('error')

export const showWarningAlert = (message: string, title = 'Warning', onClose?: () => void) =>
  callAlert(message, title, onClose)('warning')

export const showInfoAlert = (message: string, title = 'Info', onClose?: () => void) =>
  callAlert(message, title, onClose)('info')

export const showSuccessAlert = (message: string, title = 'Success', onClose?: () => void) =>
  callAlert(message, title, onClose)('success')
