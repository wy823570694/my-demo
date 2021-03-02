<template>
	<div>
		<van-nav-bar
		  title="测试"
		  left-text="返回"
		  right-text="主页"
		  left-arrow
		/>
		<van-divider>调用和修改Vuex.store状态</van-divider>
		<van-row>
			<van-col span="8"></van-col>
			<van-col span="2">
				<van-button icon="minus" type="primary" size="small" @click="minus"/>
			</van-col>
			<van-col span="4">
				<span>{{$store.state.count}}</span>
			</van-col>
			<van-col span="2">
				<van-button icon="plus" type="primary" size="small" @click="plus"/>
			</van-col>
			<van-col span="8"></van-col>
		</van-row>	
	</div>
</template>

<script>
	export default {
		name:'Test',
		methods:{
			minus(){
				this.$store.commit('minus')
			},
			plus(){
				this.$store.commit('add')
			}
		}
	}
</script>

<style>
</style>
