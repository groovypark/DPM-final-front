<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  body, ul, li {
    margin:0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  :root {
    --gray: #CAC6D1;
    --purple: #4C4484;
    --black: #1C1823;
    --dark-gray: #55515B;
    --yellow: #EFDE40;
    --yellow-rgb: 239,222,63;
  }
  .main-color {
    color: var(--dark-gray);
    /* color: #a3a3a4; */
  }

  #app {
    font-family: 'NanumSquare', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /*
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    */
  }

</style>
