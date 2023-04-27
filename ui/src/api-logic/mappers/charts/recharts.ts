import { TopTenData } from 'src/@types'
import { getRepoFromUrl } from 'src/utils'

interface Params {
  [key: string]: TopTenData
}

export interface TopDataBarChart {
  name: string
  fileCount?: number
  commitsCount?: number
}

export const mapTop10Repos = (topRepos: Params): TopDataBarChart[] => {
  const labels: TopDataBarChart[] = []
  Object.entries(topRepos).forEach(([repo, value]) => {
    labels.push({
      name: getRepoFromUrl(repo),
      fileCount: value.file_count
    })
  })
  return labels
}

export const mapTop10Authors = (topAuthors: Params): TopDataBarChart[] => {
  const labels: TopDataBarChart[] = []
  Object.entries(topAuthors).forEach(([author, value]) => {
    labels.push({
      name: author,
      commitsCount: value.commits_count
    })
  })
  return labels
}
