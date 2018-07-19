<template>
  <div class="mBookDay">
    <mbook-day-add 
      v-if="adding"
      v-on:toggle="toggleAdding"
      v-on:add="addList"
      v-bind:spendList="spendList"/>
    <div v-else>
      <!-- menu-bar start -->
      <div class="menu-bar">
        <div class="dropdown">
          <button class="dropbtn">Money Book &nbsp;
          <svgicon class="i-dropdown" name="dropdown" width="8" height="4" color="#55515B"></svgicon>
          </button>
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
      <!-- 달력 -->
      <flatpickr class="div-flatpickr"></flatpickr>
      <div class="spend">
        지출 <span class="main-color">| 수입</span>
        <div class="total">
          <span class="main-color">총</span> ₩52,000
        </div>
      </div>
      <table class="list main-color">
        <!-- 경고 : vue 자체에서 v-for 쓸때 key는 원시타입으로 바인딩 해주는걸 추천 -->
        <tr v-for="item in spendList" :key="item.id">
          <td class="col1"><span v-bind:class="item.circle"></span>{{ item.type }}</td>
          <td class="col2">{{ item.count }}</td>
          <td class="col3">{{ item.total }}</td>
        </tr>
      </table>
      <div class="footer-total main-color">
        <div class="btn-stats">
          <router-link to="/statistics"><span class="footer-text"> 통계</span></router-link>
        </div>
        <div class="btn-add" v-on:click="toggleAdding">
          <svgicon class="i-add" name="add" width="24px" height="24px" color="#FFFFFF"></svgicon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flatpickr from './Flatpickr';
import MbookDayAdd from './MbookDayAdd';
import '../assets/icons';

export default {
  name: 'MbookDay',
  components: { Flatpickr, MbookDayAdd },
  methods: {
    toggleAdding: function toggleAdding() {
      this.adding = !this.adding;
    },
  },
  data() {
    return {
      date: new Date(),
      adding: false,
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
    height: 100vh;
  }
  .menu-bar {
    height: 3.375em;
  }
  .today {
    float: right;
    padding: 1em;
    font-weight: bold;
    color: #4C4484;
  }

  /*------------- Style The Dropdown Button Start -------------*/
  .dropbtn {
      width: 148px;
      height: 54px;
      background-color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      color: var(--black);
      border: none;
      cursor: pointer;
  }

  .dropdown .i-dropdown {
    transform: translateY(-50%);

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
      padding: 6px 0 10px;
      background-color: #ffffff;
      min-width: 148px;
      box-shadow: 0px 5px 18px rgba(28,24,35,0.08);
      z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    display: block;
    padding: 14px 16px;
    font-weight: 600;
    color: var(--black);
    text-decoration: none;
    
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    font-weight: 600;
    color: var(--purple);
    background-color: rgba(var(--yellow-rgb),.1);
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
      display: block;
  }

  /*--------------- Style The Dropdown Button End -----------------*/

  .div-flatpickr {
    width: 100%;
    height: 30px;
    background-color: #efefef;
    color: var(--dark-gray);
    font-size: 0.7em;
    line-height: 15px;
    padding: 0.313em 1.5em 0.313em 1em;
  }

  .spend {
    padding: 1em;
  }
  .total {
    float: right;
    font-size: 0.875em;
  }

   /*-------------------- table css start  -----------------------*/
  .list {
    width: 100%;
    list-style: none;
    font-size: 0.813em;
  }
  .list tr {
    width: 100%;
    height: 38px;
    font-size: 14px;
    line-height: 38px; 
    box-shadow: inset 0 -1px 0 0 #efefef;
  }
  .col1 {
    position: relative;
    width: 67%;
    padding-left: 40px;
  }
  .col3 {
    text-align: right;
    padding-right: 1em;
  }
  .circle1:before, .circle2:before, .circle3:before, .circle4:before, .circle5:before {
    content: ' \25CF';
    position: absolute;
    top:1px;
    left: 16px;
    font-size: 1.5em;
    padding-right: 16px;
  }

  .circle1:before {
    color: #a3a3a4;
  }
  .circle2:before {
    color: #363639;
  }
  .circle3:before {
    color: #eeeded;
  }
  .circle4:before {
    color: #d1d1d2;
  }
  .circle5:before {
    color: #747477;
  }
  /*------------------ table css end  -----------------*/

  .footer-total {
    position: absolute;
    left: 0;
    bottom: 16px;
    width: 100%;
    height: 56px;
  }
  .footer-total .btn-stats { 
    position: absolute;
    left: 16px;
    bottom: 0;
    width: 1.875em;
    height: 56px;
  }
  .footer-text{
    font-weight: 600;
    color: var(--dark-gray);
    line-height: 56px;
    padding-left: 32px;
  }
  .footer-text:before {
    content: '';
    position: absolute; 
    left: 0;
    bottom: 15px; 
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
    background: var(--gray);
  }
  .footer-total .btn-add {
    position: absolute;
    bottom: 0;
    right: 16px;
    width: 54px;
    height: 54px;
    background-color: var(--purple);
    border-radius: 50%;
  }
  .btn-add .i-add {
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .footer-total .btn-add:hover {
    background-color: var(--gray);
    transition: all 0.18s ease-in;
  }

</style>
