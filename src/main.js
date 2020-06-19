import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vants from './vant';
import 'lib-flexible/flexible.js';
import '@/assets/style/common.sass';
import '@/assets/style/icon.scss';
import '@/assets/style/vant.scss';

Vue.use(vants);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
