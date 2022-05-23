import '@babel/polyfill'
import 'mutationobserver-shim'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import "./assets/style.scss"

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

Vue.config.productionTip = false;
Vue.filter('capital', (value: any) => {
  if (value)
    return value.toUpperCase();
  else {
    return "";
  }
})

Vue.directive("size", {
  bind(el, binding) {
    if (binding.value === 'small') {
      el.style.fontSize = "16px"
    }
    else if (binding.value === 'medium') {
      el.style.fontSize = "26px"
    }
    else if (binding.value === 'large') {
      el.style.fontSize = "36px"
    }
    else {
      el.style.fontSize = "6px"
    }

  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
