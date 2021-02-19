<template>
  <div id="app">
		<van-nav-bar
		  title="标题"
		  left-text="返回"
		  right-text="主页"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		<router-view></router-view>
		<van-tabbar route>
		  <van-tabbar-item replace to="/Date" icon="wap-home-o">主页</van-tabbar-item>
		  <van-tabbar-item replace to="/Login" icon="user-o">登陆</van-tabbar-item>
			<van-tabbar-item replace to="/Info" icon="apps-o">应用</van-tabbar-item>
			<van-tabbar-item replace to="/About" icon="setting-o">设置</van-tabbar-item>
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
</style>
