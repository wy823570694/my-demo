<template>
  <div id="app">
		<router-view class="content"></router-view>
		<van-tabbar>
		  <van-tabbar-item replace to="/Home" icon="wap-home-o">主页</van-tabbar-item>
		  <van-tabbar-item replace to="/Login" icon="user-o">登陆</van-tabbar-item>
			<van-tabbar-item replace to="/App" icon="apps-o">应用</van-tabbar-item>
			<van-tabbar-item replace to="/Test" icon="setting-o">设置</van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
	
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background-color: #;
  margin-top: 10px;
}
.block-title {
    margin: 0;
    padding: 8px 8px 8px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
		text-align: left;
}
body {
	background-color: #f7f8fa;
}
.content {
	margin-bottom: 50px;
	margin-top:auto;
}
</style>
