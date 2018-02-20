<template>
  <div>
    <chart-line class="chart-div"></chart-line>
    <div class="item">
      <table class="list main-color">
        <!-- 경고 : vue 자체에서 v-for 쓸때 key는 원시타입으로 바인딩 해주는걸 추천 -->
        <tr>
          <td class="col1">지출</td>
          <td class="col2">- ₩52,000</td>
        </tr>
        <tr>
          <td class="col1">수입</td>
          <td class="col2">+ ₩3,000</td>
        </tr>
        <tr>
          <td class="col1">총 잔액</td>
          <td class="col2">₩2,951,000</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ChartLine from './ChartLine';

export default {
  name: 'ChartSpendIncome',
  components: { ChartLine },
};
</script>

<style scoped>
  .chart-div {
    width: 365px;
    height: 200px;
    padding-top: 10px;
  }
  .chart-text {
    text-align: center;
    position: absolute;
    top: 41%;
    left: 41%;
  }
  /*-------------------- table css start  -----------------------*/
  .table-title {
    padding-left: 1em;
    font-size: 14px;
    letter-spacing: -0.2px;
    text-align: left;
    color: #25272c;
  }
  .list {
    width: 100%;
    list-style: none;
    font-size: 14px;
  }
  .list tr {
    width: 375px;
    height: 34px;
    vertical-align: center;
    box-shadow: inset 0 -1px 0 0 #efefef;
    padding: 0.3em 0.5em 0.1em 0.5em;
  }
  .col1 {
    width: 60%;
    padding-left: 24px;
    color: #747477;
  }
  .col2 {
    text-align: right;
    padding-right: 25px;
    color: #25272c;
  }
  .circle1:before {
    content: ' \25CF';
    font-size: 1.5em;
    color: #a3a3a4;
    padding-right: 0.2em;
  }
  .circle2:before {
    content: ' \25CF';
    font-size: 1.5em;
    color: #363639;
    padding-right: 0.2em;
  }
  .circle3:before {
    content: ' \25CF';
    font-size: 1.5em;
    color: #eeeded;
    padding-right: 0.2em;
  }
  .circle4:before {
    content: ' \25CF';
    font-size: 1.5em;
    color: #d1d1d2;
    padding-right: 0.2em;
  }
  .circle5:before {
    content: ' \25CF';
    font-size: 1.5em;
    color: #747477;
    padding-right: 0.2em;
  }
  /*------------------ table css end  -----------------*/
</style>
