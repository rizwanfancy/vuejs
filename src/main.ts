import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style.scss"

Vue.config.productionTip = false;
Vue.filter('capital', (value: any) => {
  if (value)
    return value.toUpperCase();
  else {
    return "";
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
