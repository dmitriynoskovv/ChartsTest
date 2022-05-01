import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';

export const randomValue = (diapason) => {
  const minMax = diapason ? diapason.replace(/\s+/g, '').split('-') : [0, 1000];
  console.log(minMax);
  return Math.floor(Math.random() * (+minMax[1] - +minMax[0]));
};

export const chartsSettings = {
  Bar: () => ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend),
  Line: () =>
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend),
};
