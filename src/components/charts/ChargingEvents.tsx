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
import { chargingEventsData } from '../../helpers/dummyData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

export const ChargingEvents = () => {
  const data = {
    labels: chargingEventsData.map((data) => data.period),
    datasets: [
      {
        label: 'Charging Events',
        data: chargingEventsData.map((data) => data.events),
        backgroundColor: ['#172554', '#F49D31', '#4F8C76', '#DC5F4C'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'The Number of Charging Events',
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
          text: 'Charging Events',
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
