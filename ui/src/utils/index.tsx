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
  const selectedDataLen: number = data.filter(
    (d) => d.isSelected === true
  ).length

  return selectedDataLen === 0
    ? CHECKBOX_STATES.Unchecked
    : selectedDataLen === data.length
    ? CHECKBOX_STATES.Checked
    : CHECKBOX_STATES.Indeterminate
}

export function dateToTimeAgo(date: Date): string {
  const now = new Date(Date.now())
  const difftime = now.getTime() - date.getTime()
  const diffDate = new Date(difftime - 5.5 * 60 * 60 * 1000)

  const [sec, min, hr, day, month] = [
    diffDate.getSeconds(),
    diffDate.getMinutes(),
    diffDate.getHours(),
    diffDate.getDate() - 1,
    diffDate.getMonth(),
  ]

  const f = (property: any, end: any) => {
    return `${property} ${end}${property > 1 ? 's' : ''} ago`
  }

  return month >= 1
    ? f(month, 'month')
    : day >= 1
    ? f(day, 'day')
    : hr >= 1
    ? f(hr, 'hr')
    : min >= 1
    ? f(min, 'min')
    : day >= 1
    ? f(sec, 'sec')
    : ''
}
