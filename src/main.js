// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Cartel from './components/Cartel.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment'

Vue.prototype.moment = moment
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const routes = [
  {
    name: 'index',
    path: '/index',
    component: Cartel
}
];
const router = new VueRouter({ mode: 'history', routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')