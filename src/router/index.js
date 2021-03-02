import VueRouter from 'vue-router'
import Vue from 'vue'
import Vant from "vant";
import 'vant/lib/index.css';

import Home from '../view/Home.vue'
import Test from '../view/Test.vue'
import Login from '../view/Login.vue'
import App from '../view/App.vue'

Vue.use(Vant);
Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path:'/Home',
			component:Home
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
			path:'/App',
			component:App
		}
	]
})

export default router