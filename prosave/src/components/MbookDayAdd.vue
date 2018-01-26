<template>
  <div class="mBookDay-add">
    <div class="header">
      <div class="title">
        지출
        <router-link to="/"><span class="close">x</span></router-link>
      </div>
    </div>
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
</style>
