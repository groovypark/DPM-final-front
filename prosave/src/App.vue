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
    --gray: #a3a3a4;
  }
  .main-color {
    color: var(--gray);
    /* color: #a3a3a4; */
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /*
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    */
  }

</style>
