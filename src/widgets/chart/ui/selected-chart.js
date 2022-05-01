import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { chartsSettings, randomValue } from '../helper/helper';

export const SelectedChart = ({ chart, labels, diapason }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${chart}`,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: `${chart}`,
        data: labels.map(() => randomValue(diapason)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const charts = {
    Line: () => {
      return <Line options={options} data={data} />;
    },
    Bar: () => {
      return <Bar options={options} data={data} />;
    },
  };

  chartsSettings[chart]();

  return charts[chart]();
};
