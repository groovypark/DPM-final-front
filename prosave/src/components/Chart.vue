<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart({
      // labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: [
            '#d1d1d2',
            '#747477',
            '#ffffff',
            '#efefef',
            '#a3a3a4',
          ],
          borderColor: '#efefef',
          data: [40, 20, 20, 10, 10],
        },
      ],
    });
  },
};
</script>