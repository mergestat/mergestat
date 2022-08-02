import { alertStack } from "@mergestat/blocks";

export type AlertStackType = 'warning' | 'info' | 'success' | 'error'

const callAlert = (message: string, title: string = 'Error', onClose?: () => {}) => (type: AlertStackType) =>
  alertStack[type]({
    message,
    title,
    onClose
  });

export const showErrorAlert = (message: string, title: string = 'Error', onClose?: () => {}) =>
  callAlert(message, title, onClose)('error')

export const showWarningAlert = (message: string, title: string = 'Warning', onClose?: () => {}) =>
  callAlert(message, title, onClose)('warning')

export const showInfoAlert = (message: string, title: string = 'Info', onClose?: () => {}) =>
  callAlert(message, title, onClose)('info')

export const showSuccessAlert = (message: string, title: string = 'Success', onClose?: () => {}) =>
  callAlert(message, title, onClose)('success')
