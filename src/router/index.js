import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/Users.vue'
import UserInfo from '../components/UserInfo'
import Rights from '../components/Rights'
import Goods from '../components/Goods'
import Orders from '../components/Orders'
import Settings from '../components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/users', component: Users },
    { path: '/userinfo/:id', component: UserInfo, props: true },
    { path: '/rights', component: Rights },
    { path: '/goods', component: Goods },
    { path: '/orders', component: Orders },
    { path: '/settings', component: Settings }
  ]
})
