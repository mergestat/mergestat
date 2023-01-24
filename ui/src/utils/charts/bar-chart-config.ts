import { ApexOptions } from 'apexcharts'
import { FONT_FAMILY } from '../constants'

export const barChartOptions: ApexOptions = {
  chart: {
    height: 'auto',
    width: '100%',
    animations: {
      enabled: true,
      easing: 'easein'
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: '20%',
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false,
    style: {
      colors: ['#6B7280'],
    }
  },
  colors: ['#7DD3FC', '#6366f1', '#a78bfa'],
  series: [{
    data: [400, 430, 448, 470, 540]
  }],
  legend: {
    fontSize: '12px',
    fontFamily: FONT_FAMILY,
    offsetY: 8,
  },
  tooltip: {
    theme: 'custom',
    cssClass: 'text-gray-400',
    style: {
      fontSize: '12px',
      fontFamily: FONT_FAMILY
    }
  },
  yaxis: {
    labels: {
      offsetX: -8,
      style: {
        fontSize: '13px',
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
        colors: '#6B7280',
      },
    }
  },
  xaxis: {
    labels: {
      offsetY: 2,
      style: {
        fontSize: '13px',
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
        colors: '#6B7280',
      },
    }
  },
}
