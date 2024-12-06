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
import { hourlyData } from '../../helpers/dummyData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

// Total charging power per hour
export const ChargingValues = () => {
  const data = {
    labels: hourlyData.map((data) => data.hour),
    datasets: [
      {
        label: 'Total Power (kW)',
        data: hourlyData.map((data) => data.totalPower),
        backgroundColor: '#DC5F4C',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Charging Values (kW) per Chargepoint',
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
          text: 'Hours',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Power (kW)',
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
