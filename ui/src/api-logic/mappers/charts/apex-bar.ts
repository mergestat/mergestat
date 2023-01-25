import { ApexBarSerie, QueryResultProps } from 'src/@types'

interface AppexBar {
  categories: string[],
  series: ApexBarSerie[]
}

export const mapToAppexBar = (data: QueryResultProps, categoryColumn: string | undefined, ...dataColumn: (string | undefined)[]) => {
  const configBar: AppexBar = {
    categories: [],
    series: []
  }

  if (categoryColumn) {
    const categoryIndex = data.columns?.findIndex(d => d.name === categoryColumn) || 0

    if (data.rows) {
      configBar.categories = data.rows.map(row => (row[categoryIndex]).toString())
    }
  }

  dataColumn.forEach(column => {
    if (column) {
      const serieIndex = data.columns?.findIndex(d => d.name === column) || 0

      if (data.rows) {
        const serie: ApexBarSerie = {
          data: data.rows.map(row => {
            if (!isNaN(+row[serieIndex])) {
              return +row[serieIndex]
            }
            return 0
          })
        }
        configBar.series = [...configBar.series, serie]
      }
    }
  })

  return configBar
}
