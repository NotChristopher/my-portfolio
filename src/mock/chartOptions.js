
const getRandomInt = (min, max)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const multiLineAreaSeries = [{
  name: 'Revenue for 2023',
  data: [200000, 40000, 120000, 500000, 320000, 175000, 250000, 45000, 455555, 340000,760000, 1000000],
  type: 'line',
},
{name: 'Avg Revenue for past 5 years',
data: Array.from({length: 12}, () =>getRandomInt(0, 750000)),
type: 'line',},
];

const LineColors=['#3C80F4', '#FFAC00',];
const legendFill = [''];

export const LineOptions = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'right',
    fontSize: '16px',
    fontFamily: 'Exo 2',
    fontWeight: 400,
    // offsetY: -40,
    labels: {
      colors: '#FFFFFF',
    },
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 1,
      radius: 12,
      strokeColor: LineColors,
      fillColors: legendFill,
      // customHTML:
      onClick: undefined,
      offsetX: -5,
    },
    itemMargin: {
      horizontal: 30,
    },
  },
  markers: {
    size: [4, 4, 4, 0, 4, 0, 4, 0],
    colors: LineColors,
    strokeColors: LineColors,
    strokeWidth: 3,
    hover: {
      size: 6,
    },
  },
  fill: {
    colors: LineColors,
    type: ['solid'],
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0,
    },
  },
  colors: LineColors,
  grid: {
    show: true,
    borderColor: '#474747',
  },
  stroke: {
    curve: 'smooth',
    dashArray: [0, 0, 4, 4, 0, 0, 4, 4],
    width: 3,
  },
  chart: {
    // parentHeightOffset: 40,
    // offsetY: 40,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    y: {
      formatter: undefined,
      title: {
        formatter: (seriesName) => null,
      },
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    labels: {
      style: {
        colors: '#FFFFFF',
        fontSize: '16px',
        fontFamily: 'Oxygen',
        fontWeight: 300,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: [
    {
      min: 0,
      max: undefined,
      showAlways: true,
      title: {
        text: 'Value (£)',
        style: {
          color: '#fff',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'Exo 2',
        },
      },
      labels: {
        style: {
          colors: '#FFF',
          fontSize: '16px',
          fontFamily: 'Oxygen',
          fontWeight: 300,
        },
      },
    },
    {
      min: 0,
      max: 20,
      showAlways: true,
      opposite: true,
      title: {
        text: 'Rate (%)',
        style: {
          color: '#fff',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'Exo 2',
        },
      },
      labels: {
        style: {
          colors: '#FFF',
          fontSize: '16px',
          fontFamily: 'Oxygen',
          fontWeight: 300,
        },
      },
    },
  ],
  dataLabels: {
    enabled: false,
  },
  responsive: [{
    breakpoint: 800,
    options: {
      xaxis: {
        labels: {
          style: {
            fontSize: '10px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#FFFFFF',
            fontSize: '10px',
            fontFamily: 'Oxygen',
            fontWeight: 300,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
      },

    },
  }],
};

