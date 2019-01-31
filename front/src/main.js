import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Admin from './components/Admin'
import Vitrine from './components/HelloWorld'
import Connection from './components/Connection'
import store from './store'

//const Bar = { template: '<div>bar</div>' }

Vue.use(VueRouter)
// Vue.config.productionTip = false

const routes = [
  { path: '/connection', component: Connection },
  { path: '/admin', component: Admin },
  { path: '/', component: Vitrine },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App }
}).$mount('#app')
