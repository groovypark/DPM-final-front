<template>
  <div>
    <div class="chart-div">
      <chart-line></chart-line>
    </div>
    <div class="item">
      <table class="list main-color">
        <tr><td class="table-title">지출 | 수입</td></tr>
        <!-- 경고 : vue 자체에서 v-for 쓸때 key는 원시타입으로 바인딩 해주는걸 추천 -->
        <tr v-for="item in spendList" :key="item.id">
          <td class="col1"><span v-bind:class="item.circle"></span>{{ item.type }}</td>
          <td class="col2">{{ item.count }}</td>
          <td class="col3">{{ item.total }}</td>
        </tr>
      </table>
      <div class="item-total">
        <span class="text-gray">총 &nbsp;</span>₩ 111,139,000
      </div>
    </div>
  </div>
</template>

<script>
import ChartLine from './ChartLine';

export default {
  name: 'ChartSpendIncome',
  components: { ChartLine },
  data() {
    return {
      spendList: [
        {
          type: '식품',
          count: '98건',
          total: '₩ 11,139,000',
          circle: 'circle1',
        },
        {
          type: '주거',
          count: '1건',
          total: '₩ 12,000',
          circle: 'circle2',
        },
        {
          type: '쇼핑',
          count: '1건',
          total: '₩ 10,000',
          circle: 'circle3',
        },
        {
          type: '교통',
          count: '3건',
          total: '₩ 5,000',
          circle: 'circle4',
        },
        {
          type: '기타',
          count: '1건',
          total: '₩ 3,000',
          circle: 'circle5',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .chart-div {
    width: 222px;
    text-align: center;
    margin: auto;
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
    font-size: 0.813em;
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
    padding-left: 1em;
  }
  .col3 {
    text-align: right;
    padding-right: 1em;
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
  .item-total {
    background-color: #efefef;
    font-size: 0.875em;
    text-align: right;
    padding: 1em;
  }
  .text-gray {
    font-size: 0.875em;
    color: #a3a3a4;
  }
</style>
