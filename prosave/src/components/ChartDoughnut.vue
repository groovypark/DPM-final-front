<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart({
      datasets: [
        {
          backgroundColor: [
            '#d1d1d2',
            '#747477',
            '#ffffff',
            '#efefef',
            '#a3a3a4',
          ],
          borderColor: '#d1d1d2',
          borderWidth: 1,
          data: [40, 20, 20, 10, 10],
        },
      ],
    }, { cutoutPercentage: 80 });
  },
};
</script>