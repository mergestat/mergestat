import { useEffect, useState } from 'react'
import { Top10Author, Top10Repo } from 'src/@types'
import { AuthorBarChart, RepoBarChart, mapTop10Authors, mapTop10Repos } from 'src/api-logic/mappers/charts/recharts'

export const useTop10 = (top10Repos: Top10Repo[], top10Authors: Top10Author[]) => {
  const [top10ReposChart, setTop10ReposChart] = useState<RepoBarChart[]>()
  const [top10AuthorsChart, setTop10AuthorsChart] = useState<AuthorBarChart[]>()

  useEffect(() => {
    if (top10Repos) {
      setTop10ReposChart(mapTop10Repos(top10Repos))
    } else {
      setTop10ReposChart(undefined)
    }
  }, [top10Repos])

  useEffect(() => {
    if (top10Authors) {
      setTop10AuthorsChart(mapTop10Authors(top10Authors))
    } else {
      setTop10AuthorsChart(undefined)
    }
  }, [top10Authors])

  return {
    top10ReposChart,
    top10AuthorsChart
  }
}
