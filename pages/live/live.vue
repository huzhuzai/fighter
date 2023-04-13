<template>
	<view class="">
		<user></user>
		<view  class="live-box">
				<view class="live-item" v-for="(item,index) in 8">
					<view class="conten">
						<image src="http://api.lechehao.com:3001/gamelist/yijianjianghu.png" mode="aspectFill"></image>
						<!-- 毛玻璃 -->
					</view>
					<view class="panel">
						<view class="panel-box">
							<view class="panel-title">
								叔叔大作战
							</view>
							<view class="panel-con">
								<view class="panel-type">射击</view>
								<text class="iconfont icon-jiaxingshoucangtianchong">7.7</text>
							</view>
						</view>
						<view class="panel-while">
						</view>
					</view>
						
				</view>
			</view>
		
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
			if(!isLogin){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="less">
.live-box{
		padding: 0rpx 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-top: 30rpx;
	.live-item{
		display: inline-block;
		box-sizing: border-box;
		margin-bottom: 25rpx;
		width: 330rpx;
		position: relative;
		.conten{
			image{
				width: 100%;
				height: 450rpx;
				border-radius: 30rpx;
				}
		}
		.panel{
				padding-left: 25rpx;
				position: absolute;
				bottom:20rpx ;
				left:20rpx;
				width: 80%;
				height: 150rpx;
				background-color: transparent;
				border-radius: 30rpx;
				backdrop-filter: blur(5px);
				.panel-box{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					height: 150rpx;
					padding: 15rpx 0rpx;
					box-sizing: border-box;
					.panel-title{
						color: #fff;
					}
					.panel-con{
						display: flex;
						justify-content: space-between;
						.panel-type{
							color: #ffffff;
							opacity: .8;
							font-size: 30rpx;
						}
						text{
							padding-right: 20rpx;
							color: #ffcc00;
							font-size: 30rpx;
						}
					}
				}
				.panel-while{
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					border-radius: 30rpx;
					background-color: #fff;
					opacity: .4;
					z-index: -1;
				}
			}
		
	}
}
</style>
