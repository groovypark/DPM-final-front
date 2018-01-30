<template>
  <div class="mBookDay-add">
    <!-- header start -->
    <div class="header">
      <div class="title">
        지출
        <router-link to="/"><span class="close">x</span></router-link>
      </div>
      <div class="dropdown">
        <button class="dropbtn">화 12월 25일 2017년 <span class="main-color">▾ </span></button>
        <div class="dropdown-content">
          <a href="#">수 12월 26일 2017년</a>
          <a href="#">목 12월 27일 2017년</a>
        </div>
      </div> 
      <div class="cash">현금</div>
      <div class="add-money">
        <span class="add-money-font">금액</span>
        <span class="add-money-total">₩ 12,000</span>
      </div>
    </div>
    <!-- header end -->
    <div class="title-choose-category">카테고리를 선택해주세요.</div>
    <!-- <div class="category-box">
      <span class="circle"></span><br/><span></span>
    </div> -->
    <div class="category-container" v-on:click="checkCategory">
      <div class="category-box" v-for="category in categorys" :key="category.id">
        <div class="circle"></div>
        <span class="category">{{ category }}</span>
      </div>
    </div>

    <div class="footer">
      <div class="btn-cancel"><a href="">취소</a></div>
      <div class="btn-submit"><a href="">추가하기</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MbookDayAdd',
  data() {
    return {
      categorys: ['식품', '음료', '교통', '쇼핑', '주거', '디지털', '의료', '기타'],
    };
  },
  methods: {
    checkCategory: function ckeckCategory() {
      const selectCategory = document.getElementsByClassName('category-box');
      for (let index = 0; index < selectCategory.length; index += 1) {
        const element = selectCategory[index];
        element.onclick = function onclick() {
          element.setAttribute('style', 'border: solid 1px black;');
        };
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 11.313em;
  background-color: #efefef;
}
.title {
  padding: 1.2em;
  font-size: 1em;
}
.close {
  float: right;
  color: var(--gray);
  font-size: 1.3em;
  margin-right: 0.2em;
}

/*------------- Style The Dropdown Button Start -------------*/
  .dropbtn {
      background-color: #efefef;
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
      background-color: #efefef;
      min-width: 10.072em;
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

  .cash {
    width: 5em;
    height: 1.3em;
    border-radius: 3px;
    background-color: #d1d1d2;
    padding: 0.375em 0;
    font-size: 0.875em;
    color: #747477;
    text-align: center;
    float: right;
    margin-right: 1em;
  }

  .add-money {
  width: 21em;
  /* height: 50px; */
  border-radius: 3px;
  background-color: #ffffff;
  margin: 1em;
  padding: 0.8em 0.2em;
}

.add-money-font {
  font-size: 0.875em;
  line-height: 1;
  letter-spacing: -0.2px;
  text-align: left;
  color: #747477;
  padding: 0.938em 1.125em;
}

.add-money-total {
  float: right;
  padding-right: 1em;
  font-size: 1.125em;
}

.title-choose-category {
  font-size: 0.875em;
  margin: 2em 0em 1.3em 1em;
}

.category-container {
  display: grid;
  grid-template-columns: 79px 79px 79px 79px;
  grid-template-rows: 64px 64px;
  grid-gap: 0.563em;
}
.category-box {
  width: 79px;
  height: 64px;
  border-radius: 3px;
  background-color: #efefef;
  margin-left: 1em;
  margin-bottom: 0.563em;
  text-align: center;
  cursor: pointer;
}

.circle {
    background-color:#d8d8d8;
    border: solid 1px #979797;
    height:1.375em;
    width:1.375em;
    border-radius:75px;
    margin: 0.5em 1.7em 0 1.7em;
}

.category {
  font-size: 0.813em;
  color: #363639;
}

.footer {
  float: bottom;
  text-align: center;
}
.btn-cancel {
  width: 50%;
  background-color: #efefef;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.1em 0em;
}
.btn-submit {
  width: 50%;
  background-color: #d1d1d2;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.1em 0em;
}

.footer a {
  color: #a3a3a4;
}
</style>
