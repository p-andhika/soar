import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const data = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Monthly Values",
      data: [100, 300, 210, 450, 720, 200, 530, 210, 600],
      fill: true,
      backgroundColor: "rgba(65, 105, 225, 0.2)", // Light blue with transparency
      borderColor: "rgb(65, 65, 255)", // Blue
      borderWidth: 4,
      tension: 0.4, // Smooth curve
      pointRadius: 0, // Hide points
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 800,
      ticks: {
        stepSize: 200,
        color: "rgb(100, 116, 139)",
        font: {
          size: 14,
        },
      },
      grid: {
        color: "rgba(100, 116, 139, 0.2)",
        borderDash: [5, 5],
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        color: "rgba(100, 116, 139, 0.2)",
        borderDash: [5, 5],
      },
      ticks: {
        color: "rgb(100, 116, 139)",
        font: {
          size: 14,
        },
      },
      border: {
        display: false,
      },
    },
  },
};

export function LineChart() {
  return (
    <div className="w-full h-[190px] md:h-[220px]">
      <Line data={data} options={options} />
    </div>
  );
}
