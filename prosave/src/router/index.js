import Vue from 'vue';
import Router from 'vue-router';
import MbookDay from '@/components/MbookDay';
import MbookDayAdd from '@/components/MbookDayAdd';
import MbookStatistics from '@/components/MbookStatistics';
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
    {
      path: '/statistics',
      name: 'MbookStatistics',
      component: MbookStatistics,
    },
  ],
});
