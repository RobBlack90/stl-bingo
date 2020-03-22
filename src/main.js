import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import './assets/css/tailwind.css';
import router from './router'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "UA-161613753-1" }
}, router)

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})