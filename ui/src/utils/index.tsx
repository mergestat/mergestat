import { CHECKBOX_STATES } from '@mergestat/blocks'
import { formatDistance } from 'date-fns'

export function checkRepoValidate(repo: string, checkDomain: boolean = true) {
  return checkDomain
    ? /((http|https):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-zA-Z0-9]+[\/]{1,}.[^\/.*]/.test(
      repo
    )
    : /(((http|https):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.)?[a-zA-Z0-9]+[\/]{1,}.[^\/.*]/.test(
      repo
    )
}

export function getRepoFromUrl(url: string) {
  return url.replace(
    /((http|https):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-zA-Z0-9]+[\/]{1,}/,
    ''
  )
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function selectAllState(data: Array<any>) {
  const selectedDataLen: number = data.filter(
    (d) => d.isSelected === true
  ).length

  return selectedDataLen === 0
    ? CHECKBOX_STATES.Unchecked
    : selectedDataLen === data.length
      ? CHECKBOX_STATES.Checked
      : CHECKBOX_STATES.Indeterminate
}

export function getTimeAgoFromNow(baseDate: Date): string {
  const distance = formatDistance(new Date(), baseDate, {
    includeSeconds: true,
  })

  return `${distance} ago`
}

/**
 * Method to map data base status to table status
 * @param status Data base status
 * @returns Table status (RepSyncStateT)
 */
export function mapToRepoSyncStateT(status: string) {
  switch (status) {
    case 'DONE':
      return 'succeeded'
    case 'RUNNING':
      return 'running'
    default:
      return 'failed'
  }
}