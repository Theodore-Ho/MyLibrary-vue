import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from "vue-i18n";
import './plugins/element.js'
import './assets/css/reset.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en: {
      loginText: "Login",
      change: "Change"
    },
    zh: {
      loginText: "登陆",
      change: "切换"
    }
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
