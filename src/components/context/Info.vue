<template>
	<div>
		<p class="block-title">商行动态</p>
		<van-list>
			<van-cell v-for="item in list">{{item}}</van-cell>
		</van-list>
		<p class="block-title">商行公告</p>
		<van-cell-group>
			<van-cell v-for="item in list" :title="item" title-style="text-align:left" value="03/02" to="App" ></van-cell>
		</van-cell-group>
	</div>
</template>

<script>
	export default {
		name:'Info',
		data(){
			return{
				list:[
					"1.信息测试01",
					"2.信息测试02",
					"3.信息测试03",
					"4.信息测试04",
					"5.信息测试05",
					"6.信息测试06"
				]
			}
		}
	}
</script>
	
<style>
</style>
