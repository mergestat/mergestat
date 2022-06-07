import { CHECKBOX_STATES } from '@mergestat/blocks'

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
  const selectedDataLen: number = data.filter(d => d.isSelected === true).length

  return selectedDataLen === 0
    ? CHECKBOX_STATES.Unchecked
    : selectedDataLen === data.length
      ? CHECKBOX_STATES.Checked
      : CHECKBOX_STATES.Indeterminate
}
