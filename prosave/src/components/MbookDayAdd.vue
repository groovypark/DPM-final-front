<template>
  <div class="mBookDay-add">
    <!-- header start -->
    <div class="header">
      <div class="title">
        지출
        <router-link to="/"><span class="close">x</span></router-link>
      </div>
      <div>
        <div class="dropdown">
          <button class="dropbtn">화 12월 25일 2017년 <span class="main-color">▾ </span></button>
          <div class="dropdown-content">
            <a href="#">수 12월 26일 2017년</a>
            <a href="#">목 12월 27일 2017년</a>
          </div>
        </div> 
        <div class="cash">현금</div>
      </div>
    </div>
    <!-- header end -->

  </div>
</template>

<script>
export default {
  name: 'MbookDayAdd',
  data() {
    return {

    };
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
    width: 77px;
    height: 27px;
    border-radius: 3px;
    background-color: #d1d1d2;
    font-size: 0.875em;
    text-align: center;
    float: right;
    margin-right: 1em;
  }
</style>
