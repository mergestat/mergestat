import { LastModified, Top10Author, Top10Repo } from 'src/@types'
import { formatMonth, getRepoFromUrl } from 'src/utils'

export interface RepoBarChart {
  name: string
  vendor: string
  vendorUrl: string
  fileCount: number
}

export interface AuthorBarChart {
  name: string
  commitsCount: number
}

export interface YearData {
  year: string
  count: number
}

export interface MonthData {
  yearMonth: string
  count: number
}

export interface LasModifiedBarChart {
  year: YearData[]
  month: MonthData[]
}

export const mapTop10Repos = (topRepos: Top10Repo[]): RepoBarChart[] => {
  return topRepos.map(data => ({
    name: getRepoFromUrl(data.repo),
    vendor: data.vendor,
    vendorUrl: data.vendor,
    fileCount: data.file_count
  }))
}

export const mapTop10Authors = (topAuthors: Top10Author[]): AuthorBarChart[] => {
  return topAuthors.map(data => ({
    name: data.author_name,
    commitsCount: data.commits_count
  }))
}

export const mapLastModified = (fileLastModified: LastModified): LasModifiedBarChart => {
  return {
    year: fileLastModified.year,
    month: fileLastModified.month?.map(data => ({
      yearMonth: formatMonth(data.year_month),
      count: data.count
    }))
  }
}
