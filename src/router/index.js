import VueRouter from 'vue-router'
import Vue from 'vue'
import Vant from "vant";
import 'vant/lib/index.css';

import Date from '../components/Date.vue'
import Test from '../components/Test.vue'
import Login from '../components/Login.vue'
import Info from '../components/Info.vue'

Vue.use(Vant);
Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path:'/Date',
			component:Date
		},
		{
			path:'/Test',
			component:Test
		},
		{
			path:'/Login',
			component:Login
		},
		{
			path:'/Info',
			component:Info
		}
	]
})

export default router