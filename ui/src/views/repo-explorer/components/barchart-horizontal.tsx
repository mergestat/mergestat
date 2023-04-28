import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { MonthData, YearData } from 'src/api-logic/mappers/charts/recharts'
import { CustomTooltip } from './custom-shared'

interface Props {
  data: YearData[] | MonthData[]
  dataKey: keyof YearData | keyof MonthData
}

export const BarChartHorizontal: React.FC<Props> = ({ data, dataKey }: Props) => {
  return (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart data={data} barCategoryGap={6} margin={{ bottom: 40 }}>
        <YAxis type="number"
          tickSize={15}
          tickLine={false}
          axisLine={{ opacity: 0.1 }}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <XAxis interval={0}
          angle={-55}
          axisLine={false}
          tickLine={{ opacity: 0.1 }}
          dataKey='yearMonth'
          tick={{ fontSize: 12, fill: '#9CA3AF', dy: 25, dx: -15 }}
        />
        <CartesianGrid opacity={0.2} vertical={false} />
        <Bar dataKey={dataKey} fill="#95D8F8" stroke='#3BB6F1' radius={[4, 4, 4, 4]} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
      </BarChart>
    </ResponsiveContainer>
  )
}
