import { useEffect, useState } from 'react'
import { LastModified, TimeGrain } from 'src/@types'
import { LasModifiedBarChart, MonthData, YearData, mapLastModified } from 'src/api-logic/mappers/charts/recharts'
import { TIME_GRAIN } from 'src/utils/constants'

export const useRepoLastModified = (repoLastModified: LastModified) => {
  const [repoLastModifiedChart, setRepoLastModifiedChart] = useState<LasModifiedBarChart>()
  const [timeGrainRepo, setTimeGrainRepo] = useState<TimeGrain>(TIME_GRAIN.MONTHS)
  const [xAxisRepo, setXAxisRepo] = useState<keyof YearData | keyof MonthData>('yearMonth')
  const [dataLastModifiedRepo, setDataLastModifiedRepo] = useState<MonthData[] | YearData[]>([])

  useEffect(() => {
    if (repoLastModified) {
      const data = mapLastModified(repoLastModified)
      setRepoLastModifiedChart(data)
      setDataLastModifiedRepo(data.month)
    }
  }, [repoLastModified])

  useEffect(() => {
    setDataLastModifiedRepo((timeGrainRepo === TIME_GRAIN.MONTHS ? repoLastModifiedChart?.month : repoLastModifiedChart?.year) || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeGrainRepo])

  const changeTimeGrainRepo = (name: TimeGrain, close: () => void) => {
    setTimeGrainRepo(name)
    setXAxisRepo(name === TIME_GRAIN.MONTHS ? 'yearMonth' : 'year')
    close()
  }

  return {
    xAxisRepo,
    timeGrainRepo,
    dataLastModifiedRepo,
    changeTimeGrainRepo
  }
}
