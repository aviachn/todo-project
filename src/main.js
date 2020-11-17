import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false

new Vue({
  router,
  iconfont: 'md',
  theme: {
      primary: '#9652ff',
      success: '#20B2AA',
      info: '#ffaa2c',
      error: '#f83e70'
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
