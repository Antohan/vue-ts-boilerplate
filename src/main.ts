import Vue from 'vue'
import * as Rx from 'rxjs';
import VueRx from 'vue-rx';

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

Vue.use(VueRx, Rx);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
