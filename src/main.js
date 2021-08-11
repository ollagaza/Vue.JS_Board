import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import axios from 'axios';

Vue.config.productionTip = false

Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
