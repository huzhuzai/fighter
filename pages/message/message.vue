<template>
	<view>
		<user></user>
		<search></search>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
		<messageItem></messageItem>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onShow() {
			let isLogin = uni.getStorageSync('isLogin') //这里获取登录验证状态
			if (!isLogin) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="less">

</style>
