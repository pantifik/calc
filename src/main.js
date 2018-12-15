import Vue from 'vue'
import VueResource from "vue-resource"
import VueRouter from 'vue-router';

import store from './store'
import router from './router'

import App from './App.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://localhost:3000/';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
