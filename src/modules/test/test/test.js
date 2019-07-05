import Vue from 'vue'
import App from './test.vue'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// import router from './router'


//绑定axios->Vue，可在子组件使用

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
