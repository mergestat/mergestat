import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { MonthData, YearData } from 'src/api-logic/mappers/charts/recharts'
import { CustomTooltip } from './custom-shared'

interface Props {
  data: YearData[] | MonthData[]
  dataKey: keyof YearData | keyof MonthData
  dataXAxis: keyof YearData | keyof MonthData
}

export const BarChartHorizontal: React.FC<Props> = ({ data, dataKey, dataXAxis }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} barCategoryGap={6} margin={{ bottom: 40 }}>
        <YAxis type="number"
          tickSize={15}
          tickLine={false}
          axisLine={{ opacity: 0.1 }}
          tick={{ fontSize: 12, fill: '#727C8D' }}
        />
        <XAxis interval={0}
          angle={dataXAxis === 'year' ? 0 : -55}
          axisLine={false}
          tickLine={{ opacity: 0.1 }}
          dataKey={dataXAxis}
          tick={{ fontSize: 12, fill: '#727C8D', dy: 25, dx: (dataXAxis === 'year' ? 0 : -15) }}
        />
        <CartesianGrid opacity={0.2} vertical={false} />
        <Bar dataKey={dataKey} fill="#95D8F8" stroke='#3BB6F1' radius={[4, 4, 4, 4]} maxBarSize={40} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  )
}
