<template>
  <div class="mbookStatistics">
    <div class="header">
      <router-link to="/moneybook/"><span class="go-mbook"> &lt; Money Book </span></router-link>
      <div class="add">+ 추가하기</div>
    </div>
    <div class="title">통계</div>
    <div class="dropdown">
      <!-- http://jqueryui.com/datepicker/ -->
      <button class="dropbtn">03.01.2018 &nbsp;<span class="main-color">▾ </span></button>
      <div class="dropdown-content">
        <a href="#">03.02.2018</a>
        <a href="#">03.03.2018</a>
      </div>
    </div>
    <div class="btn-div">
      <button class="btnActive">Day</button>
      <button class="btn">Week</button>
      <button class="btn">Month</button>
    </div>
    <div class="chart-title"><span class="title-active">카테고리</span><span> | 지출/수입</span></div>
    <div class="chart-text">지출<br>₩ 52,000</div>
    <div class="chart-div">
      <chart></chart>
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
import Chart from './Chart';

export default {
  name: 'MbookStatistics',
  components: { Chart },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    height: 3.375em;
  }
  .title {
    padding: 0 0 1em 1em;
  }
  .go-mbook {
    float: left;
    font-size: 0.688em;
    color: #a3a3a4;
    padding: 1.5em 0 1em 1.8em;
  }
  .add {
    float: right;
    padding: 1em;
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
  /*------------- Style The Dropdown Button Start -------------*/
  .dropbtn {
      background-color: white;
      padding: 0.438em 1em;
      font-size: 0.875em;
      border-radius: 3px;
      border: solid 1px #d1d1d2;
      cursor: pointer;
  }
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
    padding-left: 1em;
  }
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 114.73px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
  }
  /* Links inside the dropdown */
  .dropdown-content a {
    color: #000000;
    font-size: 0.875em;
    padding: 0.438em 1em;
    text-decoration: none;
    display: block;
  }
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #efefef}
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
      display: block;
  }
  /*--------------- Style The Dropdown Button End -----------------*/
  .chart-title {
    font-size: 18px;
    padding: 32px 0 0 1em;
    color: #a3a3a4;
  }
  .title-active {
    color: #25272c;
  }
  .chart-div {
    width: 13em;
    text-align: center;
    margin: auto;
  }
  .chart-text {
    text-align: center;
    position: absolute;
    top: 40%;
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