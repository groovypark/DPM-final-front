<template>
  <div class="mbookStatistics">
    <div class="header">
      <router-link to="/">
        <span class="go-mbook">Money Book</span>
        <svgicon class="i-previous" name="previous" width="14px" height="14px" color="#CAC6D1"></svgicon>        
      </router-link>
      <div class="add">
        <svgicon class="i-add" name="add" width="14px" height="14px" color="#4C4484"></svgicon>
        <span>추가하기</span>
      </div>
    </div>
    <div class="title">통계</div>
    <div class="flat-pickr">
      <flat-pickr v-model="date"></flat-pickr>
    </div>
    <div class="btn-div">
      <button class="btnActive">Day</button>
      <button class="btn">Week</button>
      <button class="btn">Month</button>
    </div>
    <div class="chart-title">
      <a v-on:click="ActiveCategory" id="category">카테고리</a> | 
      <a v-on:click="ActiveSpendIncome" id="spendIncome" class="title-inactive">지출/수입</a></div>
    <div v-if="categoryActive">
      <chart-category></chart-category>
    </div>
    <div v-if="spendIncomeActive">
      <ChartSpendIncome></ChartSpendIncome>
    </div>

  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import ChartCategory from './ChartCategory';
import ChartSpendIncome from './ChartSpendIncome';
import '../assets/icons';

export default {
  name: 'MbookStatistics',
  components: { ChartCategory, ChartSpendIncome, flatPickr },
  data() {
    return {
      date: new Date(),
      categoryActive: true,
      spendIncomeActive: false,
    };
  },
  methods: {
    ActiveCategory: function ActiveCategory() {
      const category = document.getElementById('category');
      const spendIncome = document.getElementById('spendIncome');
      this.categoryActive = true;
      this.spendIncomeActive = false;
      category.setAttribute('style', 'color: #25272c;');
      spendIncome.setAttribute('style', 'color: #a3a3a4;');
    },
    ActiveSpendIncome: function ActiveSpendIncome() {
      const category = document.getElementById('category');
      const spendIncome = document.getElementById('spendIncome');
      this.categoryActive = false;
      this.spendIncomeActive = true;
      spendIncome.setAttribute('style', 'color: #25272c;');
      category.setAttribute('style', 'color: #a3a3a4;');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    height: 54px;
  }
  .title {
    font-size: 18px;
    padding: 0 0 0.7em 1em;
    color: #1C1823;
  }
  .go-mbook {
    float: left;
    font-size: 0.688em;
    color: #a3a3a4;
    padding-left: 32px;
    line-height: 44px;
  }
  .i-previous{
    position: absolute;
    top: 14px; 
    left: 16px;
  }
  .add {
    float: right;
    padding: 1em;
    font-size: 14px;
    font-weight: 600;
    color: var(--purple);
  }
  .add .i-add {
    margin-bottom: -3px;
  }
  .btn-div {
    float: right;
    padding-right: 1em;
  }
  .btnActive {
    width: 45px;
    height: 27px;
    border-radius: 3px;
    background-color: #efefef;
    border: solid 1px #d1d1d2;
    margin-left: 0.3em;
  }
  .btn {
    width: 55px;
    height: 27px;
    border-radius: 3px;
    border: solid 1px #d1d1d2;
    background: white;
    margin-left: 0.3em;
  }
  .item {
    position: absolute;
    bottom: 0;
    width: 100%
  }

  .flat-pickr {
    position: relative;
    display: inline-block;
    margin-left: 1em;
    padding-top: 3px;
    width: 118px;
    height: 24px;
    border-radius: 3px;
    border: solid 1px #d1d1d2;
  }

  .chart-title {
    font-size: 18px;
    padding: 32px 0 0 1em;
    color: #a3a3a4;
  }
  .title-inactive {
    color: #a3a3a4;
  }
</style>