import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
  datasets: [
    {
      data: [30, 15, 20, 35],
      backgroundColor: ["#1E293B", "#EA580C", "#3B82F6", "#000000"],
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export function PieChart() {
  return <Pie data={data} options={options} />;
}
