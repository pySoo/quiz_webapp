import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';

import { getPercentage } from '@/utils/math';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
  dataset: number[];
  totalLength: number;
}

export default function QuizPieChart({ dataset, totalLength }: PieChartProps) {
  const data = {
    labels: ['정답', '오답'],
    datasets: [
      {
        label: '개수',
        data: [...dataset],
        backgroundColor: ['rgb(0, 200, 150, 0.2)', 'rgb(255, 107, 107, 0.2)'],
        borderColor: ['rgb(0, 200, 150)', 'rgb(255, 107, 107)'],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        color: '#000',
        formatter: function (value: number) {
          return `${getPercentage(value, totalLength)}%`;
        },
      },
    },
  };

  return (
    <>
      <Pie
        data={data}
        options={options}
      />
    </>
  );
}
