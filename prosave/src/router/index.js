import Vue from 'vue';
import Router from 'vue-router';
import MbookDay from '@/components/MbookDay';
import MbookDayAdd from '@/components/MbookDayAdd';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MbookDay',
      component: MbookDay,
    },
    {
      path: '/add',
      name: 'MbookDayAdd',
      component: MbookDayAdd,
    },
  ],
});
