import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Deposit",
      data: [220, 100, 250, 350, 200, 230, 300],
      backgroundColor: "#000000",
      borderRadius: 10,
    },
    {
      label: "Withdraw",
      data: [500, 320, 330, 500, 150, 400, 380],
      backgroundColor: "#3B82F6",
      borderRadius: 10,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      barPercentage: 0.4,
      categoryPercentage: 0.8,
      grid: {
        display: false,
      },
    },
  },
  barThickness: 6,
};

export function BarChart() {
  return <Bar data={data} options={options} />;
}
