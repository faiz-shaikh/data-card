import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js'

import React from 'react'

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale)

const buildData = y => ({
  labels: ['', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: '',
      data: y,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 1)',
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      fill: 'start',
      tension: 0.4,
    },
  ],
})

const options = {
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: 'rgba(255, 255, 255, 1)',
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },

    xAxes: {
      ticks: {
        color: 'rgba(255, 255, 255, 1)',
      },
      grid: {
        circular: true,
        borderColor: 'rgba(255, 255, 255, .2)',
        color: 'rgba(255, 255, 255, .2)',
        borderDash: [5, 5],
      },
    },
  },
  layout: {
    padding: {
      right: 10,
    },
  },
}

const Chart = ({info}) => {
  const data = buildData(info)

  return (
    <>
      <div className="rounded overflow-hidden w-full">
        <div className="flex w-full px-5 pb-4 pt-8 bg-orange-400 text-white items-center">
          <Line type="line" data={data} options={options} />
        </div>
      </div>
    </>
  )
}

export default Chart
