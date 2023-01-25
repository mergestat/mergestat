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
      borderRadiusApplication: 'end',
      columnWidth: '40%',
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['white'],
    }
  },
  colors: ['#1E3A8A', '#8A1E70', '#8A6E1E', '#1E8A38'],
  legend: {
    fontSize: '12px',
    fontFamily: FONT_FAMILY,
    offsetY: 8,
  },
  tooltip: {
    enabled: false,
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
