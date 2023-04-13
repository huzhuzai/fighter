<template>
	<view class="zai-box">
		<image src="../../static/Fighterlogo-2.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-form">
			<input class="zai-input" v-model="userInfo.username" placeholder="请输入用户名" />
			<input class="zai-input" v-model="userInfo.password" password placeholder="请输入密码" />
			<button class="zai-btn" @click="login">立即登录</button>
			<view hover-class="none" class="zai-label" @click="toRegister">还没有账号？点此注册.</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			toRegister() {
				uni.navigateTo({
					url: "/pages/register/register"
				})
			},
			login() {
				this.$store.dispatch("reqLogin", this.userInfo)
// ----------------
			}
		},
		computed: {
			token() {
				return this.$store.state.token
			}
		},
		watch: {
			token() {
				if (this.$store.state.token) {
					uni.showToast({
						title: '登录成功',
						success: setTimeout(() => {
							uni.setStorageSync('token', this.$store.state.token)
							uni.setStorageSync('isLogin',1)//登录判断
							uni.reLaunch({
								url: "/pages/index/index"
							})
						}, 1000)
					})
				}
			}
		}
	}
</script>

<style lang="less">
	.zai-box {
		padding: 0 100rpx;

	}

	.zai-logo {
		width: 100%;
		width: 100%;
		height: 200rpx;
		margin-top: 200rpx;
	}

	.zai-title {
		position: absolute;
		top: 0;
		line-height: 360rpx;
		font-size: 68rpx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100rpx;
	}

	.zai-form {
		margin-top: 250rpx;
	}

	.zai-input {
		background: #e2f5fc;
		margin-top: 30rpx;
		border-radius: 100rpx;
		padding: 20rpx 40rpx;
		font-size: 36rpx;
	}

	.input-placeholder,
	.zai-input {
		color: #94afce;
	}

	.zai-label {
		padding: 30rpx 0;
		text-align: center;
		font-size: 30rpx;
		color: #a7b6d0;
	}

	.zai-btn {
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100rpx;
		font-size: 36rpx;
		margin-top: 40rpx;
	}

	.zai-btn:after {
		border: 0;
	}

	/*按钮点击效果*/
	.zai-btn.button-hover {
		transform: translate(1rpx, 1rpx);
	}
</style>
