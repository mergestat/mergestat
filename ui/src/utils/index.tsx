import { CHECKBOX_STATES } from '@mergestat/blocks'
import { formatDistance, formatDuration, intervalToDuration } from 'date-fns'
import { RepoSyncStateT, UserTypeUI } from 'src/@types'
import { RepoSyncQueue } from 'src/api-logic/graphql/generated/schema'
import { showSuccessAlert } from './alerts'
import { SYNC_STATUS, USER_TYPE, USER_TYPE_UI } from './constants'

export function checkRepoValidate(repo: string, checkDomain = true) {
  return checkDomain
    ? /((http|https):\/\/)?(www\.)?[a-z0-9\-.]{3,}\.[a-zA-Z0-9]+[/]{1,}.[^/.*]/.test(repo)
    : /(((http|https):\/\/)?(www\.)?[a-z0-9\-.]{3,}\.)?[a-zA-Z0-9]+[/]{1,}.[^/.*]/.test(repo)
}

export function getRepoFromUrl(url: string) {
  return url.replace(/((http|https):\/\/)?(www\.)?[a-z0-9\-.]{3,}\.[a-zA-Z0-9]+[/]{1,}/, '')
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function selectAllState(data: Array<{ isSelected: boolean, [key: string]: unknown }>) {
  const selectedDataLen: number = data.filter(
    (d) => d.isSelected === true
  ).length

  return selectedDataLen === 0
    ? CHECKBOX_STATES.Unchecked
    : selectedDataLen === data.length
      ? CHECKBOX_STATES.Checked
      : CHECKBOX_STATES.Indeterminate
}

/**
 * Method to validate given token is a right Github PAT
 * @param token Token string to validate
 * @returns true if token is a right Github PAT, otherwise return false
 */
export function validateGitHubPAT(token: string) {
  return /^ghp_[a-zA-Z0-9]{36}$/ig.test(token)
}

/**
 * Method to capitalize first letter of each word of given phrase
 * @param phrase Phrase to capitalize
 * @returns Given phrase capitalized
 */
export function capitalize(phrase: string) {
  return phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}

/**
 * Method to get time ago relative to current date
 * @param baseDate Date to evaluete
 * @returns Date time ago relative to current date (e.g.: 'less than 20 seconds ago', '1 minute ago')
 */
export function getRelativeTime(baseDate: Date): string {
  return formatDistance(baseDate, new Date(), { addSuffix: true }).replace(/less than a minute ago*/ig, 'just now')
}

/**
 * Method to get time in shorter words
 * @param time Time to abbreviated
 * @returns Abbreviated time (e.g.: '1h 2m 3s', '2m 3s')
 */
export function simplifyTime(time: string) {
  return time.replace(/ days*/ig, 'd').replace(/ hours*/ig, 'h').replace(/ minutes*/ig, 'm').replace(/ seconds*/ig, 's')
}

/**
 * Method to get duration time abbreviated
 * @param start Date from
 * @param end  Date to
 * @returns Abbreviated duration time (e.g.: '1h 2m 3s', '2m 3s')
 */
export function getSimpleDurationTime(start: Date, end: Date): string {
  const duration = simplifyTime(formatDuration(intervalToDuration({ start, end })))
  return duration !== '' ? duration : '-'
}

/**
 * Method to get duration time abbreviated given time in seconds
 * @param seconds Seconds to evaluate
 * @returns Abbreviated duration time (e.g.: '1h 2m 3s', '2m 3s')
 */
export function getSimpleDurationTimeSeconds(seconds: number) {
  const duration = simplifyTime(formatDuration(intervalToDuration({ start: 0, end: seconds * 1000 })))
  return duration !== '' ? duration : '-'
}

/**
 * Method to map data base status to table status
 * @param status Data base status
 * @returns Table status (RepoSyncStateT)
 */
export function mapToRepoSyncStateT(status: string): RepoSyncStateT {
  switch (status) {
    case 'DONE':
      return SYNC_STATUS.succeeded
    case 'RUNNING':
      return SYNC_STATUS.running
    case 'QUEUED':
      return SYNC_STATUS.queued
    case 'WARNING':
      return SYNC_STATUS.warning
    case 'ERROR':
      return SYNC_STATUS.error
    case 'DISABLED':
      return SYNC_STATUS.disabled
    default:
      return SYNC_STATUS.empty
  }
}

interface RepoSyncQueueW extends RepoSyncQueue {
  warnings?: {
    totalCount: number
  }
}

/**
 * Method to get sync queue status
 * @param syncQueue Sync type to evaluate
 * @returns sync queue status
 */
export const getStatus = (syncQueue: RepoSyncQueueW): RepoSyncStateT => {
  // TODO: Should we extend the schema to have a new property 'hasWarning'
  const status = syncQueue?.hasError ? 'ERROR' : syncQueue?.warnings?.totalCount && syncQueue?.warnings?.totalCount > 0 ? 'WARNING' : syncQueue?.status
  return mapToRepoSyncStateT(status)
}

/**
 * Method to paginate a given array
 * @param array list to evaluate
 * @param pageSize result size
 * @param pageNumber index to start from
 * @returns a new paginated array
 */
export const paginate = (array: Array<Array<string | number | boolean>>, pageSize: number, pageNumber: number) => {
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
}

/**
 * Method to copy to clipboard
 * @param text Text to copy
 */
export const copy = (text: string | null | undefined) => {
  navigator.clipboard.writeText(text || '')
  showSuccessAlert('Copied')
}

/**
 * Method to copy to clipboard a given strings array
 * @param array Strings array to process
 */
export const copyArrayToClipboard = (array: string[] = []) => {
  copy(array.join('\n'))
}

/**
 * Method to filter an array (comparing all properties) by given search text
 * @param array list to evaluate
 * @param searchText text to filter for
 * @returns a new filtered array
 */
export const filterByAllFields = (array: Array<Array<string | number | boolean>>, searchText: string) => {
  return array.filter((data) => {
    let flag = false
    data.forEach((val: string | number | boolean) => {
      if (val && val.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        flag = true
      }
    })

    if (flag) {
      return data
    } else {
      return false
    }
  })
}

/**
 * Method to get pagination last item
 * @param page Current page
 * @param rows Current rows per page
 * @param total Total items
 * @returns pagination last item
 */
export const getMaxPagination = (page: number, rows: number, total: number) => {
  const max = (page + 1) * rows
  return max > total ? total : max
}

/**
 * Method to map to a USER_TYPE
 * @param role Role to map
 * @returns UserType corresponding value
 */
export const mapToUserType = (role: UserTypeUI) => {
  switch (role) {
    case USER_TYPE_UI.ADMIN:
      return USER_TYPE.ADMIN
    case USER_TYPE_UI.USER:
      return USER_TYPE.USER
    case USER_TYPE_UI.READ_ONLY:
      return USER_TYPE.READ_ONLY
    default:
      return null
  }
}

/**
 * Method to measure time execution of a task
 * @param task Task to execute
 * @returns Time execution of a task in secounds or millisecounds
 */
export const getTimeExecution = async (task: () => void) => {
  const startTime = performance.now()
  await task()
  const endTime = performance.now()
  const millisecounds = endTime - startTime
  const secounds = millisecounds / 1000
  return millisecounds > 1000 ? `${Math.round(secounds * 100) / 100}s` : `${Math.trunc(millisecounds * 100) / 100}ms`
}
