import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Admin from './components/Admin'
import Aquisition from './components/Aquisition'
import Vitrine from './components/HelloWorld'
import Connection from './components/Connection'
import store from './store'
import ImageUploader from 'vue-image-upload-resize'

//const Bar = { template: '<div>bar</div>' }

Vue.use(VueRouter)
Vue.use(ImageUploader);
// Vue.config.productionTip = false

function requireAuth (to, from, next) {
  if (store.getters.isAuth){
    next()
  }else {
    next({ path: '/connection' })
  }
}

const routes = [
  { path: '/connection', component: Connection },
  {
    name: 'admin',
    path: '/admin', 
    component: Admin,
    beforeEnter: requireAuth
  },
  {
    name: 'adminAquisition',
    path: '/aquisition', 
    component: Aquisition,
    beforeEnter: requireAuth
  },
  { path: '/', component: Vitrine },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// eslint-disable-next-line
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App }
}).$mount('#app')
