import { Bar, BarChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AuthorBarChart, RepoBarChart } from 'src/api-logic/mappers/charts/recharts'
import { CustomTooltip } from './custom-shared'
import { CustomizedTick } from './custom-top-repos'

interface Props {
  data: RepoBarChart[] | AuthorBarChart[]
  dataKey: keyof RepoBarChart | keyof AuthorBarChart
  xAxisLabel: string
}

export const BarChartVertical: React.FC<Props> = ({ data, dataKey, xAxisLabel }: Props) => {
  return (
    <ResponsiveContainer width="95%" height={400}>
      <BarChart data={data} barCategoryGap={6} layout='vertical' margin={{ left: 190, bottom: 30 }}>
        <XAxis type="number"
          tickSize={15}
          tickLine={false}
          axisLine={{ opacity: 0.1 }}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        >
          <Label value={xAxisLabel} position="bottom" dy={10} fill='black' />
        </XAxis>
        <YAxis type="category"
          axisLine={false}
          tickLine={{ opacity: 0.1 }}
          dataKey={(record) => (JSON.stringify(record))}
          tick={<CustomizedTick />}
        />
        <CartesianGrid opacity={0.2} horizontal={false} />
        <Bar dataKey={dataKey} fill="#95D8F8" stroke='#3BB6F1' radius={[4, 4, 4, 4]} maxBarSize={40} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
      </BarChart>
    </ResponsiveContainer>
  )
}