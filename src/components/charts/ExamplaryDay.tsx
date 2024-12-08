import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  PointElement,
} from 'chart.js';
import { hourlyData, CHARGING_POWER } from '../../helpers/dummyData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Title,
);

// Hourly energy consumption
export const ExamplaryDay = () => {
  const energyData = hourlyData.map((data) => ({
    hour: data.hour,
    totalEnergy: data.usedChargePoints * CHARGING_POWER,
  }));

  const data = {
    labels: energyData.map((data) => data.hour),
    datasets: [
      {
        label: 'Energy Consumed (kWh)',
        data: energyData.map((data) => data.totalEnergy),
        borderColor: '#172554',
        backgroundColor: '#172554',
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Examplary Day: Hourly Energy Consumption',
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
          text: 'Energy (kWh)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
