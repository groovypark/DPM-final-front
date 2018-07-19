<template>
  <div class="mBookDay-add">
    <!-- header start -->
    <div class="header">
      <div class="title">
        지출
        <router-link to="/">
          <svgicon class="close" name="close" width="20px" height="20px" color="#CAC6D1"></svgicon>
        </router-link>
      </div>
      <div class="header-center">
        <!-- 달력 -->
        <flatpickr class="flat-pickr"></flatpickr>
        <div class="cash">현금</div>
        <div class="add-money">
          <span class="add-money-font">금액</span>₩ 
          <input class="add-input" v-model="money" type="number" placeholder="입력해주세요">
        </div>
      </div>
    </div>
    <!-- header end -->
    <div class="category-div">
      <div class="title-choose-category">카테고리를 선택해주세요.</div>
      <div class="category-container" v-on:click="checkCategory">
        <div class="category-box" v-for="category in categorys" :key="category.id">
          <div class="circle"></div>
          <span class="category">{{ category }}</span>
        </div>
      </div>
    </div>
    <div class="category-div">
      <div class="title-choose-category">자세한 항목을 입력해주세요.</div>
      <input class="detail" v-on:click="btnActivate" placeholder="아침, 점심, 저녁, 간식 등">
    </div>
    <!-- FIX : 두 번 클릭해야 추가됨 -->
    <div class="footer" v-on:click="toggleAdding">
      <div class="btn-cancel">취소</div>
      <div class="btn-submit" v-on:click="addList">추가하기</div>
    </div>
  </div>
</template>

<script>
import Flatpickr from './Flatpickr';

export default {
  name: 'MbookDayAdd',
  components: { Flatpickr },
  props: {
    spendList: {
      type: Array,
      required: true,
      default: this.spendList,
    },
  },
  data() {
    return {
      // spendList: this.spendList,
      money: '',
      type: '',
      categorys: ['식품', '음료', '교통', '쇼핑', '주거', '디지털', '의료', '기타'],
    };
  },
  methods: {
    btnActivate: function btnActivate() {
      const button = document.getElementsByClassName('btn-submit')[0];
      button.setAttribute('style', 'background-color: #363639;');
    },
    //  todo:중복선택됨 수정필요
    checkCategory: function ckeckCategory() {
      const selectCategory = document.getElementsByClassName('category-box');
      for (let index = 0; index < selectCategory.length; index += 1) {
        const element = selectCategory[index];
        element.onclick = function onclick() {
          element.setAttribute('style', 'border: solid 1px black;');
        };
      }
    },
    toggleAdding: function toggleAdding() {
      this.adding = !this.adding;
      this.$emit('toggleAdding', this.adding);
    },
    addList: function addList() {
      this.spendList.push({
        type: '식품',
        count: '1건',
        total: this.money,
        circle: 'circle1',
      });
      this.$emit('addList', this.spendList);
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

.flat-pickr {
  position: relative;
  display: inline-block;
  padding: 4px 0 0 16px;
  height: 27px;
}
  
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
  padding: 0.938em 12em 0.938em 1.125em;
}
.add-money-total {
  float: right;
  padding-right: 1em;
  font-size: 1.125em;
}
.add-input {
  width: 80px;
  font-size: 14px;
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
.detail {
  width: 343px;
  height: 40px;
  background-color: #efefef;
  margin-left: 1em;
  padding-left: 1em;
  border:none
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
