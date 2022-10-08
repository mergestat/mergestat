import { CHECKBOX_STATES } from '@mergestat/blocks'
import { formatDistance, formatDuration, intervalToDuration } from 'date-fns'
import { RepoSyncStateT } from 'src/@types'
import { RepoSyncQueue } from 'src/api-logic/graphql/generated/schema'
import { SYNC_STATUS } from './constants'

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
    (d) => d.isSelected
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
    case 'ERROR':
      return SYNC_STATUS.error
    case 'DISABLED':
      return SYNC_STATUS.disabled
    default:
      return SYNC_STATUS.empty
  }
}

/**
 * Method to get sync queue status
 * @param syncQueue Sync type to evaluate
 * @returns sync queue status
 */
export const getStatus = (syncQueue: RepoSyncQueue): RepoSyncStateT => {
  const status = syncQueue?.hasError ? 'ERROR' : syncQueue?.status
  return mapToRepoSyncStateT(status)
}
