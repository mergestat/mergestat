import React, {
  CSSProperties,
  useRef,
  useState,
} from 'react'
import type { SyncStatusDataT } from 'src/@types'

type RepositorySyncStatusProps = {
  data?: SyncStatusDataT[],
  disabled?: boolean,
  width?: number,
  height?: number,
  barWidth?: number,
  preserveAspectRatio?: string,
  style?: CSSProperties,
  limit?: number,
  margin?: number,
  max?: number,
  min?: number,
}

type PositionType = {
  x: number
  y: number
}

export const RepositorySyncStatus: React.FC<RepositorySyncStatusProps> = (
  {
    disabled,
    data=[],
    width = 100,
    height = 20,
    preserveAspectRatio = "none",
    style = { },
    barWidth = 4,
    margin = 2,
    limit = 15,
    max = 10,
    min = 0,
  }
) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [displayTooltip, setDisplayTooltip] = useState(false)
  const [tooltipData, setTooltipData] = useState<SyncStatusDataT | null>(null)
  const [eventPosition, setEventPosition] = useState<PositionType | null>(null)
  const [hoverPosition, setHoverPosition] = useState<PositionType | null>(null)
  const [activeBar, setActiveBar] = useState<number | null>(null)

  if (disabled)
    return <p className="h-full text-sm text-samantic-mutedText leading-20 bg-gray-50">Disabled</p>

    const len = data.length
    if (len === 0) return null

  if (limit < len) {
    data = data.slice(len - limit)
  }

  const valueArray = data.map((d: SyncStatusDataT) => d.value)
  const points = dataToPoints({ data: valueArray, limit, width, height, margin, max, min })

  const strokeWidth: number = 1 * ((style && style.strokeWidth ? +style.strokeWidth : 0) || 0)
  const marginWidth = margin ? 2 * margin : 0

  const bar_width = barWidth
    || (points && points.length >= 2
      ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth)
      : 0)

  const statusColor = (status: string) => {
    switch (status) {
      case 'succeeded':
        return '#78DDB5'
      case 'failed':
        return '#EC9393'
      default:
        return '#7DD3FC'
    }
  }

  const onMouseMove = (index: number) => {
    setDisplayTooltip(true)
    setHoverPosition(eventPosition)
    setTooltipData(data[index])
    setActiveBar(index);
  }

  const onBarClick = (p: SyncStatusDataT) => {
    alert(p.status)
  }

  const randomKey = Math.random();

  return (
    <div
      onMouseMove={(event) => {
        if (displayTooltip && hoverPosition) {
          const horizontalDisplacement = Math.abs(event.pageY - hoverPosition.y);
          const verticalDisplacement = Math.abs(event.pageX - hoverPosition.x);
          // hide the tooltip if the cursor moved more than 10 px in any direction
          if (horizontalDisplacement > 10 || verticalDisplacement > 10) {
            setDisplayTooltip(false);
            setHoverPosition(null);
          }
        }

        setEventPosition({ x: event.pageX, y: event.pageY });
      }}
      onMouseLeave={() => {
        setDisplayTooltip(false);
        setHoverPosition(null);
      }}
      className='my-3'
    >
      {displayTooltip && (
        <div
          ref = {tooltipRef}
          className={`${
            displayTooltip ? 'visible' : 'invisible'
          } absolute z-50 bg-white rounded border-gray-300 shadow-lg p-3`}
          style={{
            top: eventPosition?.y ? eventPosition?.y - 90 : 0,
            left: eventPosition?.x
                  ? eventPosition?.x
                    - ((tooltipRef?.current) ? tooltipRef?.current.clientWidth / 2 : 0)
                  : 0,
          }}
        >
          <div>value: {tooltipData?.value}</div>
          <div>status: {tooltipData?.status}</div>
        </div>
      )}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio={preserveAspectRatio}
      >
        <g transform="scale(1,-1)">
          {points.map((p, i) => {
            const id = randomKey + '_round-corner_' + i,
                  x = p.x - (bar_width + strokeWidth) / 2,
                  y = -height,
                  varHeight = Math.max(0, height - p.y),
                  r = 1.5,
                  color = statusColor(data[i].status);

            return (
              <>
                <defs>
                  <clipPath id={id}>
                    <rect
                      x={x}
                      y={y - 2*r}
                      width={bar_width}
                      height={varHeight}
                      rx={r}
                      strokeWidth={activeBar === i ? 2 : 0}
                    />
                  </clipPath>
                </defs>
                <rect
                  key={i}
                  clip-path={`url(#${id})`}
                  x={x}
                  y={y}
                  width={bar_width}
                  height={varHeight}
                  strokeWidth={activeBar === i ? 2 : 0}
                  fill={color}
                  style={style}
                  onMouseMove={onMouseMove.bind({}, i)}
                  onClick={onBarClick.bind({}, data[i])}
                  onMouseLeave={()=>setActiveBar(null)}
                />
              </>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

interface DataToPointsArgs {
  data: number[]
  limit: number
  width?: number
  height?: number
  margin?: number
  max?: number
  min?: number
}

const dataToPoints = ({
  data,
  limit,
  width = 1,
  height = 1,
  margin = 0,
  max = Math.max.apply(Math, data),
  min = Math.min.apply(Math, data),
}: DataToPointsArgs) => {
  const len = data.length

  const vfactor = (height - margin * 2) / (max - min || 2)
  const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0))

  return data.map((d, i) => ({
    x: (limit - len + i) * hfactor + margin,
    y: (max === min ? 1 : max - d) * vfactor + margin,
  }))
}
