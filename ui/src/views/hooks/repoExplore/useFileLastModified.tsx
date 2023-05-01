import { useEffect, useState } from 'react'
import { LastModified, TimeGrain } from 'src/@types'
import { LasModifiedBarChart, MonthData, YearData, mapLastModified } from 'src/api-logic/mappers/charts/recharts'
import { TIME_GRAIN } from 'src/utils/constants'

export const useFileLastModified = (fileLastModified: LastModified) => {
  const [fileLastModifiedChart, setFileLastModifiedChart] = useState<LasModifiedBarChart>()
  const [timeGrainFile, setTimeGrainFile] = useState<TimeGrain>(TIME_GRAIN.MONTHS)
  const [xAxisFile, setXAxisFile] = useState<keyof YearData | keyof MonthData>('yearMonth')
  const [dataLastModifiedFile, setDataLastModifiedFile] = useState<MonthData[] | YearData[]>([])

  useEffect(() => {
    if (fileLastModified) {
      const data = mapLastModified(fileLastModified)
      setFileLastModifiedChart(data)
      setDataLastModifiedFile(data.month)
    }
  }, [fileLastModified])

  useEffect(() => {
    if (fileLastModified) {
      setFileLastModifiedChart(mapLastModified(fileLastModified))
    }
  }, [fileLastModified])

  useEffect(() => {
    setDataLastModifiedFile((timeGrainFile === TIME_GRAIN.MONTHS ? fileLastModifiedChart?.month : fileLastModifiedChart?.year) || [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeGrainFile])

  const changeTimeGrainFile = (name: TimeGrain, close: () => void) => {
    setTimeGrainFile(name)
    setXAxisFile(name === TIME_GRAIN.MONTHS ? 'yearMonth' : 'year')
    close()
  }

  return {
    xAxisFile,
    timeGrainFile,
    dataLastModifiedFile,
    changeTimeGrainFile
  }
}
