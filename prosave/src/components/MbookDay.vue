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
    </div>
  </div>
</template>

<script>
export default {
  name: 'MbookDay',
  data() {
    return {
      msg: ' ',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mBookDay {
    width: 100%;
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
    float: left;
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
    font-size: 1em;
  }
</style>
