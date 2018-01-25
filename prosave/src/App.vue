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
body {
  margin:0;
}
.main-color {
  color:#a0a0a0;
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
