/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router'
import React, { CSSProperties, Fragment, useRef, useState } from 'react'
import type { JobData } from 'src/@types'

import { SYNC_STATUS } from 'src/utils/constants'

type RepositorySyncStatusProps = {
  data?: JobData[]
  width?: number
  height?: number
  barWidth?: number
  preserveAspectRatio?: string
  style?: CSSProperties
  limit?: number
  margin?: number
  max?: number
  min?: number
}

type PositionType = {
  x: number
  y: number
}

export const RepositorySyncStatus: React.FC<RepositorySyncStatusProps> = (
  {
    data = [],
    width = 112,
    height = 24,
    preserveAspectRatio = 'none',
    style = {},
    barWidth = 4,
    margin = 2,
    limit = 15
  }
) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [displayTooltip, setDisplayTooltip] = useState(false)
  const [tooltipData, setTooltipData] = useState<JobData | null>(null)
  const [eventPosition, setEventPosition] = useState<PositionType | null>(null)
  const [activeBar, setActiveBar] = useState<number | null>(null)

  const router = useRouter()

  const len = data.length

  if (limit < len) {
    data = data.slice(len - limit)
  }

  const chartArray = Array.from(
    { length: 15 },
    (x, i) => (i in data)
      ? data[i]
      : { id: '', repoId: '', syncId: '', runningTime: 3, runningTimeReadable: '', status: SYNC_STATUS.empty, doneAt: undefined }
  )

  const valueArray = chartArray.map((d: JobData) => d.runningTime)
  const points = dataToPoints({ data: valueArray, limit, width, margin })

  const strokeWidth: number = 1 * ((style && style.strokeWidth ? +style.strokeWidth : 0) || 0)
  const marginWidth = margin ? 2 * margin : 0

  const barLineWidth = barWidth ||
    (points && points.length >= 2
      ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth)
      : 0)

  const statusColor = (status: string) => {
    switch (status) {
      case SYNC_STATUS.empty:
        return '#E5E7EB'
      case SYNC_STATUS.succeeded:
        return '#6EE7B7'
      case SYNC_STATUS.warning:
        return '#F59E09'
      case SYNC_STATUS.error:
        return '#FB7185'
      default:
        return '#7DD3FC'
    }
  }

  const onBarClick = (p: JobData) => {
    router.push(`/repos/${p.repoId}/container-syncs/${p.syncId}/${p.id}`)
  }

  return (
    <>
      {/* * Tooltip
      {(displayTooltip && tooltipData?.status !== SYNC_STATUS.empty) && (
        <div
          ref={tooltipRef}
          className={`${displayTooltip ? 'visible' : 'invisible'
            } absolute z-50 bg-gray-900 rounded text-gray-300 text-sm opacity-80 p-3 whitespace-nowrap`}
          style={{
            top: eventPosition?.y ? eventPosition?.y - 95 : 0,
            left: eventPosition?.x
              ? eventPosition?.x -
              ((tooltipRef?.current) ? tooltipRef?.current.clientWidth / 2 : 0)
              : 0,
          }}
        >
          <div className="flex items-center">
            {(tooltipData?.status) && (
              <div className="mr-2">
                <RepoSyncIcon type={tooltipData?.status as RepoSyncStateT}
                />
              </div>
            )}
            <div>
              <span className="font-medium text-white mb-0.5">{tooltipData?.status ? tooltipData?.status.charAt(0).toUpperCase() + tooltipData?.status.slice(1) : ''}</span>
              <div className="flex flex-col justify-center">
                <span className="text-sm mr-1.5 pr-1.5 leading-4">
                  {tooltipData?.doneAt ? getRelativeTime(new Date(tooltipData?.doneAt)) : ''}
                </span>
                <span className="text-sm">{`Duration: ${tooltipData?.runningTimeReadable}`}</span>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/** Bars */}
      <div
        className='my-2 w-32 interactive'
        onMouseLeave={() => setDisplayTooltip(false)}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio={preserveAspectRatio}
        >
          <g transform="scale(1,-1)">
            {[...points].reverse().map((p, i) => {
              const id = 'round-corner_' + i
              const x = p.x - (barLineWidth + strokeWidth) / 2
              const y = -height
              const varHeight = Math.max(0, height - p.y)
              const r = 1
              const color = statusColor(chartArray[i].status)

              return (
                <Fragment key={Math.random()}>
                  <defs>
                    <clipPath id={id}>
                      <rect
                        x={x}
                        y={y - 2 * r}
                        width={barLineWidth}
                        height={varHeight}
                        rx={r}
                        strokeWidth={activeBar === i ? 2 : 0}
                      />
                    </clipPath>
                  </defs>
                  <rect
                    key={i}
                    clipPath={`url(#${id})`}
                    x={x}
                    y={y}
                    width={barLineWidth}
                    height={varHeight}
                    strokeWidth={activeBar === i ? 2 : 0}
                    fill={color}
                    style={style}
                    onClick={() => onBarClick(data[i])}
                    onMouseMove={(event) => {
                      setEventPosition({ x: event.pageX, y: event.pageY })
                      setTooltipData(chartArray[i])

                      setDisplayTooltip(true)
                      setActiveBar(i)
                    }}
                    onMouseLeave={() => setActiveBar(null)}
                    className={tooltipData?.status !== SYNC_STATUS.empty ? 'cursor-pointer' : ''}
                  />
                </Fragment>
              )
            })}
          </g>
        </svg>
      </div>
    </>
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
  margin = 0,
}: DataToPointsArgs) => {
  const len = data.length

  const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0))

  return data.map((d, i) => ({
    x: (limit - len + i) * hfactor + margin,
    y: 0,
  }))
}
