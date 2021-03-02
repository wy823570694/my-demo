<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="6000" indicator-color="white">
			<van-swipe-item v-for="(image,index) in images" :key="index">
				<van-image :src="image" fit="fill"/>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name:'Swipe',
		data(){
			return{
				images:[
					'http://220.179.251.187/wy/app/swipe/01.jpg',
					'http://220.179.251.187/wy/app/swipe/02.jpg',
					'http://220.179.251.187/wy/app/swipe/03.jpg',
					'http://220.179.251.187/wy/app/swipe/04.jpg'
				]
			}
		}
	}
</script>
	
<style>
	.my-swipe .van-swipe-item {
	  color: #fff;
	  font-size: 20px;
		height: 200px;
	  text-align: center;
	  background-color: #39a9ed;
	}
</style>