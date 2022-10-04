import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Pending','In-progress','Completed'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 19, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Donutchart() {
  return <> 
  <Doughnut data={data} options={{
    responsive:false,
    maintainAspectRatio:false,
    plugins: {
      legend: {
        display: false
      }
    }
  }} />
  </>
}

/*  responsive:false,
    maintainAspectRatio:false, 
*/