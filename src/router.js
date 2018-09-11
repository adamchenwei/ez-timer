import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Timer from './views/Timer';
import Interview from './views/Interview';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/timer',
      name: 'timer',
      component: Timer,
    },
    {
      path: '/interview',
      name: 'interview',
      component: Interview,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
