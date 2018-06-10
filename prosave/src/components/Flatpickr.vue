<template>
  <div class="flatpickr">
    <flat-pickr :config="config" v-model="date"></flat-pickr>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'Flatpickr',
  components: { flatPickr },
  data() {
    return {
      date: new Date(),
      config: {
        disableMobile: true,
        dateFormat: 'Y-m-d   ▼',
      },
    };
  },
};
</script>

<style>
.flatpickr-input { 
  -webkit-appearance: none; 
  /* your custom styles here */ 
  background: #efefef;
  border-radius: 3px;
  border: solid 1px #d1d1d2;
  padding-top: 3px;
  height: 24px;
  width: 90px;
  padding: 3px 0 0 10px;
}
</style>
