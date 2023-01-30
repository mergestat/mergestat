import { ApexOptions } from 'apexcharts'
import { FONT_FAMILY } from '../constants'

export const chartOptions: ApexOptions = {
  chart: {
    height: 'auto',
    width: '100%',
    animations: {
      enabled: true,
      easing: 'easein'
    },
    toolbar: {
      tools: {
        selection: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 7V10M10 10V13M10 10H13M10 10H7" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        zoom: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#6B7280"/></svg>',
        zoomin: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 8C12.5523 8 13 8.44772 13 9V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H11V9C11 8.44772 11.4477 8 12 8Z" fill="#6B7280"/></svg>',
        zoomout: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z" fill="#6B7280"/></svg>',
        pan: false,
        reset: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4.55228 3 5 3.44772 5 4V6.34298C6.64938 4.30446 9.17168 3 12 3C16.5903 3 20.3767 6.43564 20.9304 10.8763C20.9988 11.4243 20.6099 11.924 20.0618 11.9923C19.5138 12.0607 19.0141 11.6718 18.9458 11.1237C18.5153 7.67174 15.5689 5 12 5C9.62231 5 7.51998 6.18566 6.25442 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H4C3.44772 10 3 9.55228 3 9V4C3 3.44772 3.44772 3 4 3ZM3.93815 12.0077C4.48619 11.9393 4.98587 12.3282 5.05421 12.8763C5.48467 16.3283 8.43109 19 12 19C14.3777 19 16.48 17.8143 17.7456 16H15C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14H20C20.5523 14 21 14.4477 21 15V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V17.657C17.3506 19.6955 14.8283 21 12 21C7.40967 21 3.62332 17.5644 3.06958 13.1237C3.00124 12.5757 3.39011 12.076 3.93815 12.0077Z" fill="#6B7280"/></svg>'
      },
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      columnWidth: '60%',
      horizontal: false,
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  grid: {
    show: true,
    borderColor: '#e2e8f0',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
    style: {
      fontSize: '14px',
      fontFamily: FONT_FAMILY,
      fontWeight: 'bold',
      colors: ['#6B7280']
    },
  },
  colors: ['#6366f1', '#06b6d4', '#AA8F66', '#61C9A8', '#ED9B40', '#C32F27', '#3A1772', '#D741A7'],
  legend: {
    fontSize: '12px',
    fontFamily: FONT_FAMILY,
    offsetY: 8,
    markers: {
      radius: 3,
      offsetX: -4
    },
    itemMargin: {
      horizontal: 12
    }
  },
  tooltip: {
    theme: 'custom',
    cssClass: 'text-gray-400',
    style: {
      fontSize: '12px',
      fontFamily: FONT_FAMILY,
    }
  },
  yaxis: {
    labels: {
      offsetX: -8,
      style: {
        fontSize: '13px',
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
        colors: '#6B7280'
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
        colors: '#6B7280'
      },
    }
  }
}
