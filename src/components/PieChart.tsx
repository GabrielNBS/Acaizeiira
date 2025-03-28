import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Relatórios de\nlucro e despesas", 
    "Fechamento de\ncaixa diário", 
    "Alerta e estoque\nbaixo"
  ],
  datasets: [
    {
      data: [200, 130, 100],
    // Gráficos
      backgroundColor: ["#60A5FA", "#2DD4BF", "#F472B6"]
    }
  ]
};

const options = {
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        usePointStyle: true,
        padding: 15,
        boxWidth: 12,
        boxHeight: 12,
        font: {
          size: 12
        }
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 30,
      right: 30,
      top: 20,
      bottom: 20
    }
  }
};

const PieChartWithRightLegend = () => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%',
      minHeight: '400px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartWithRightLegend;