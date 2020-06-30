import { RouteConfig } from 'vue-router';

const LoginPage = () => import(/* webpackChunkName: "LoginPage" */ './pages/LoginPage.vue');

/**
 * People feature routes.
 */
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  }
];

export default routes;
