<template>
	<div>
		<h2 class="block-title">应用功能</h2>
		<van-grid  square :border="false" icon-size=20px column-num="5">
			<van-grid-item icon='location-o' text="位置"></van-grid-item>
			<van-grid-item icon='like-o' text="喜好"></van-grid-item>
			<van-grid-item icon='star-o' text="收藏"></van-grid-item>
			<van-grid-item icon='phone-o' text="电话"></van-grid-item>
			<van-grid-item icon='bar-chart-o' text="电话"></van-grid-item>
		</van-grid>
		<h2 class="block-title">消息</h2>
		<van-collapse v-model="activeName" accordion>
			<van-collapse-item title="标题1" name="1">内容1</van-collapse-item>
			<van-collapse-item title="标题2" name="2">内容2</van-collapse-item>
			<van-collapse-item title="标题3" name="3">内容3</van-collapse-item>
		</van-collapse>
	</div>
	
</template>

<script>
	export default {
	  data() {
	    return {
	      activeName: '1'
	    };
	  }
	};
</script>
