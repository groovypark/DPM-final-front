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
            '#efefef',
            '#efefef',
            '#efefef',
            '#a3a3a4',
            '#efefef',
          ],
          // borderColor: '#d1d1d2',
          // borderWidth: 1,
          data: [30, 20, 10, 50, 0, 0, 0],
        },
      ],
    }, {
      responsive: true,
      maintainAspectRatio: true,
      legend: { display: false },
      boxWidth: 80,
      scales: {
        xAxes: [{
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