import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App.vue'
import Login from './modules/login/Login.vue'
import Home from './modules/home/home.vue'

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/home', component: Home}
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
