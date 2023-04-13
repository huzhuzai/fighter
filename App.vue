<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		/* 	uni.getStorage({ //获取保存在本地的token  暂时不需要用户信息，所以不开启
				key: 'token',
				success: (res) => {
					console.log('111token', res);
					// 再次校验并刷新token的有效时间  
					this.$store.dispatch("reqTokenUserInfo", res.data)
				}
			}) */
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	.page{
		height: 100%;
	}
</style>
