import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Início',
    },
  },
  /* {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  }, */
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
      ? `${to.meta.title} | Lista casamento - Innovafatto`
      : 'Lista casamento - Innovafatto';
  });
});

store.$router = router;

export default router;
