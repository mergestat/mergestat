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
