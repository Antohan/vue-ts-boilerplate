import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/pages/Home.vue'
import AuthRoutes from '@/features/auth/router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  ...AuthRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
