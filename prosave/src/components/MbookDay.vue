<template>
  <div class="mBookDay">
    <!-- menu-bar start -->
    <div class="menu-bar">
      <div class="dropdown">
        <button class="dropbtn">Money Book <span class="main-color">▾ </span></button>
        <div class="dropdown-content">
          <a href="#">Calendar</a>
          <a href="#">Today</a>
        </div>
      </div> 
      <div class="today">
        Today
      </div>
      <!-- dropdown end -->
    </div>
    <!-- menu-bar end -->
    <div class="date-dropdown">
      03.01.2017 ▾
    </div>
    <div class="spend">
      지출 <span class="main-color">| 수입</span>
      <div class="total">
        <span class="main-color">총</span> ₩52,000
      </div>
    </div>
    <table class="list main-color">
      <!-- 경고 : vue 자체에서 v-for 쓸때 key는 원시타입으로 바인딩 해주는걸 추천 -->
      <tr v-for="list in spendList">
        <td class="col1"><span v-bind:class="list.circle"></span>{{ list.type }}</td>
        <td class="col2">{{ list.count }}</td>
        <td class="col3">{{ list.total }}</td>
      </tr>
    </table>

    <router-link to="add"><img class="btn-add" src="static/img/btnAdd.png"></router-link>
    <div class="footer-total main-color">
      <span class="circle4" style="font-size:2.5em"></span>
      <span class="footer-text"> 통계</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MbookDay',
  data() {
    return {
      circle: ['circle1', 'circle2', 'circle3', 'circle4', 'circle5'],
      spendList: [
        {
          type: '식품',
          count: '2건',
          total: '₩ 22,000',
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
  .mBookDay {
    width: 100%;
    height: 41.688em;
  }
  .menu-bar {
    height: 3.375em;
  }
  .today {
    float: right;
    padding: 1em;
  }

  /*------------- Style The Dropdown Button Start -------------*/
  .dropbtn {
      background-color: #ffffff;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
      display: none;
      position: absolute;
      background-color: #ffffff;
      min-width: 133.833px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: #000000;
    padding: 12px 16px;
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

  .date-dropdown {
    width: 100%;
    height: 1.313em;
    background-color: #efefef;
    color: #a3a3a4;
    font-size: 0.6em;
    padding: 0.313em 1em;
  }

  .spend {
    padding: 1em;
  }
  .total {
    float: right;
    font-size: 0.875em;
  }

   /* table css start  */
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
    width: 67%;
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
  /* table css end  */

  .footer-total {
    position: absolute;
    bottom: 0em;
    left: 1em;
  }
  .footer-text {
    position: absolute;
    top: 40%;
    width: 1.875em;
  }
  .btn-add {
    position: absolute;
    bottom: 1.5em;
    right: 1em;
  }
</style>
