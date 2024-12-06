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

// Daily, weekly and monthly total energy
export const TotalEnergy = () => {
  const data = {
    labels: ['Daily', 'Weekly', 'Monthly'],
    datasets: [
      {
        label: 'Total Energy Charged (kWh)',
        data: [360, 2520, 10800], // 20*18=360kWh, 360*7=2520kWh, 360*30=10800kWh
        backgroundColor: ['#172554', '#F49D31', '#4F8C76'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Total Energy Charged (kWh)',
        font: { size: 12 },
      },
      legend: {
        display: false,
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
          text: 'Energy (kWh)',
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
