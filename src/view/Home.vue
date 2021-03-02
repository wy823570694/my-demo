<template>
	<div>
		<!--<van-nav-bar title="主页" class="navbar" fixed/>-->
		<Swipe></Swipe>
		<Info></Info>
	</div>
</template>

<script>
	import Swipe from '../components/context/Swipe.vue'
	import Info from '../components/context/Info.vue'
	export default {
		name:'Home',
		components:{
			Swipe,
			Info
		}
	}
</script>
	
<style>
</style>
