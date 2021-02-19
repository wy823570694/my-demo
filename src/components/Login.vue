<template>
	<van-grid :column-num='1' :border='false' >
		<van-grid-item>
			<van-image
				:src="require('../assets/img/LoginLogo.png')" 
				width='18rem'
			/>
		</van-grid-item>
		<van-grid-item>
			<van-form @submit="onSubmit">
			  <van-field
			    v-model="username"
			    name="用户名"
			    label="用户名"
			    placeholder="用户名"
			    :rules="[{ required: true, message: '请填写用户名' }]"
			  />
			  <van-field
			    v-model="password"
			    type="password"
			    name="密码"
			    label="密码"
			    placeholder="密码"
			    :rules="[{ required: true, message: '请填写密码' }]"
			  />
			  <div style="margin: 16px;">
			    <van-button round block type="info" native-type="submit">提交</van-button>
			  </div>
			</van-form>
		</van-grid-item>
	</van-grid> 
</template>
<script>
 export default {
  data() {
    return { username: "", password: "",
			imageList: [
				require('../assets/img/LoginLogo.png')
			],
		}
  },
  methods: {
    onSubmit(values) {
      //console.log(values['用户名'])
			this.axios({
				method:'post',
				url:'http://220.179.251.187/wy/vueTest/response.php',
				data:{
					userId:values["用户名"],
					userPwd:values["密码"]
				}
			}).then(response=>{
					console.log(response.data)
				})
    }
  }
};
</script>
<style>
</style>
