import { Bar, BarChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AuthorBarChart, RepoBarChart } from 'src/api-logic/mappers/charts/recharts'
import { CustomTooltip } from './custom-shared'
import { CustomizedTick } from './custom-top-repos'

interface Props {
  data: RepoBarChart[] | AuthorBarChart[]
  dataKey: keyof RepoBarChart | keyof AuthorBarChart
  xAxisLabel: string,
  showIcon?: boolean
}

export const BarChartVertical: React.FC<Props> = ({ data, dataKey, xAxisLabel, showIcon = true }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={440}>
      <BarChart data={data} barCategoryGap={6} layout='vertical' margin={{ left: 190, bottom: 30 }}>
        <XAxis type="number"
          tickSize={15}
          tickLine={false}
          axisLine={{ opacity: 0.1 }}
          tick={{ fontSize: 12, fill: '#727C8D' }}
        >
          <Label value={xAxisLabel} position="bottom" dy={10} fill='#111827' style={{ fontWeight: '500' }} />
        </XAxis>
        <YAxis type="category"
          axisLine={false}
          tickLine={{ opacity: 0.1 }}
          dataKey={(record) => (JSON.stringify(record))}
          tick={(props) => <CustomizedTick showIcon={showIcon} {...props} />}
        />
        <CartesianGrid opacity={0.2} horizontal={false} />
        <Bar dataKey={dataKey} fill="#95D8F8" stroke='#3BB6F1' radius={[4, 4, 4, 4]} maxBarSize={40} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  )
}
