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
    <div class="chart-title"><a class="title-active">카테고리</a><a> | 지출/수입</a></div>

    <chart-category></chart-category>
  </div>
</template>

<script>
import ChartCategory from './ChartCategory';

export default {
  name: 'MbookStatistics',
  components: { ChartCategory },
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
  }
  .chart-title a{
    color: #a3a3a4;
  }
  .title-active {
    color: #25272c !important;
  }
</style>