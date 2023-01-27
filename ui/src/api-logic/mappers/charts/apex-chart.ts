import { ApexSerie, QueryResultProps } from 'src/@types'

interface MapApexParams {
  data: QueryResultProps
  serie?: string
  xAxis?: string
  yAxis?: string | number
}

export const mapToApexChart = ({ data, serie, xAxis, yAxis }: MapApexParams) => {
  let serieList: ApexSerie[] = []

  if (!serie) {
    serieList = [...serieList, { name: '', data: [] }]
  }

  if (xAxis && yAxis) {
    const xIndex = data.columns?.findIndex(d => d.name === xAxis) || 0
    const yIndex = data.columns?.findIndex(d => d.name === yAxis) || 0

    const serieIndex = data.columns?.findIndex(d => d.name === serie) || 0

    data.rows && data.rows.forEach(row => {
      const foundSerie = serie ? serieList.find(s => s.name === row[serieIndex]) : serieList[0]
      const item = { x: (row[xIndex]).toString(), y: (row[yIndex]).toString() }

      if (!foundSerie) { // If not exists, create a serie
        const newSerie = {
          name: (row[serieIndex]).toString(),
          data: [item]
        }
        serieList = [...serieList, newSerie]
      } else {
        foundSerie.data = [...foundSerie.data, item]
      }
    })
  }
  return serieList
}
