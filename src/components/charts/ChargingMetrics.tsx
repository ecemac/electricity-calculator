import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

// The amount of charging events / actual max power demand / energy consumed per day/week/month
// Numbers are calculated according to:
// charging points/arrival probability (20/100%=20)
// chargin power (11kW)
// and car consumption (18kWh)
export const ChargingMetrics = () => {
  const data = {
    labels: ['Daily', 'Weekly', 'Monthly'],
    datasets: [
      {
        label: 'Charging Events',
        data: [20, 140, 600],
        backgroundColor: '#DC5F4C',
      },
      {
        label: 'Max Power Demand (kW)',
        data: [220, 1540, 6600],
        backgroundColor: '#172554',
      },
      {
        label: 'Energy Consumed (kWh)',
        data: [360, 2520, 10800],
        backgroundColor: '#F49D31',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Charging Events / Max Power Demand / Energy Consumed',
        font: { size: 12 },
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Period',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};
