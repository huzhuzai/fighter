<template>
	<view class="zai-box">
		<image src="../../static/Fighterlogo-2.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-form">
			<input class="zai-input" v-model="userInfo.username"  placeholder="请输入用户名" />
			<input class="zai-input" v-model="userInfo.password"  password placeholder="请输入密码"/>
			<button class="zai-btn" @click="register">立即注册</button>
			<navigator url="../login/login.vue" open-type='navigateBack' hover-class="none" class="zai-label">已有账号，点此去登录.</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userInfo:{
					username:'',
					password:''
				}
			}
		},
		methods:{
			 register(){
				 this.$store.dispatch("reqRegister",this.userInfo)
				 console.log('ss',this.$store.state.users);
				if(this.$store.state.users==0){
					uni.showToast({
						title:'注册成功,即将跳转登录页',
						mask:true,
						duration:1500,
						success:setTimeout(()=>{
							uni.navigateTo({
								url:"/pages/login/login"
							})
						},1500)
					})
				}
			}
		}
	}
</script>

<style>
	.zai-box{
		padding: 0 100rpx;
		position: relative;
	}
	.zai-logo{
		width: 100%;
		width: 100%;
		height: 200rpx;
		margin-top: 200rpx;
	}
	.zai-title{
		position: absolute;
		top: 0;
		line-height: 360rpx;
		font-size: 68rpx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100rpx;
	}
	.zai-form{
		margin-top: 300rpx;
	}
	.zai-input{
		background: #e2f5fc;
		margin-top: 30rpx;
		border-radius: 100rpx;
		padding: 20rpx 40rpx;
		font-size: 36rpx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label{
		padding: 60rpx 0;
		text-align: center;
		font-size: 30rpx;
		color: #a7b6d0;
	}
	.zai-btn{
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100rpx;
		font-size: 36rpx;
		margin-top: 60rpx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1rpx, 1rpx);
	}
</style>
