<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    this.renderChart({
      labels: ['일', '월', '화', '수', '목', '금', '토'],
      datasets: [
        {
          backgroundColor: [
            '#d8d8d8',
          ],
          data: [40, 30, 20, 70, 0, 0, 0],
        },
        {
          backgroundColor: [
            '#747477', '#747477', '#747477', '#747477',
          ],
          data: [0, 0, 0, 25, 0, 0, 0],
        },
      ],
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      scales: {
        xAxes: [{
          stacked: true,
          maxBarThickness: 6,
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            max: 100,
            stepSize: 50,
          },
        }],
      },
    });
  },
};
</script>