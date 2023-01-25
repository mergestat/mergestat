import { ApexLineSerie, QueryResultProps } from 'src/@types'

interface MapApexLineParams {
  data: QueryResultProps
  series: string
  xAxis: string
  yAxis: string | number
}

export const mapToAppexLine = ({ data, series, xAxis, yAxis }: MapApexLineParams) => {
  let serieList: ApexLineSerie[] = []

  const serieIndex = data.columns?.findIndex(d => d.name === series) || 0
  const xIndex = data.columns?.findIndex(d => d.name === xAxis) || 0
  const yIndex = data.columns?.findIndex(d => d.name === yAxis) || 0

  data.rows && data.rows.forEach(row => {
    const serie = serieList.find(s => s.name === row[serieIndex])
    const item = { x: (row[xIndex]).toString(), y: (row[yIndex]).toString() }

    if (!serie) { // If not exists, create a serie
      const newSerie = {
        name: (row[serieIndex]).toString(),
        data: [item]
      }
      serieList = [...serieList, newSerie]
    } else {
      serie.data = [...serie.data, item]
    }
  })

  return serieList
}
