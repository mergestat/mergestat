import { QueryResultProps } from 'src/@types'

interface AppexDataLine {
  x: Date | string | number
  y: string | number
}

interface AppexLine {
  name: string,
  data: AppexDataLine[]
}

interface MapApexLineParams {
  data: QueryResultProps
  series: string
  xAxis: string
  yAxis: string | number
}

export const mapToAppexLine = ({ data, series, xAxis, yAxis }: MapApexLineParams) => {
  let list: AppexLine[] = []

  const serieIndex = data.columns?.findIndex(d => d.name === series) || 0
  const xIndex = data.columns?.findIndex(d => d.name === xAxis) || 0
  const yIndex = data.columns?.findIndex(d => d.name === yAxis) || 0

  data.rows && data.rows.forEach(row => {
    const serie = list.find(s => s.name === row[serieIndex])
    const item = { x: (row[xIndex]).toString(), y: (row[yIndex]).toString() }

    if (!serie) { // If not exists, create a serie
      const newSerie = {
        name: (row[serieIndex]).toString(),
        data: [item]
      }
      list = [...list, newSerie]
    } else {
      serie.data = [...serie.data, item]
    }
  })

  return list
}
