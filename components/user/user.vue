<template>
	<view>
		<view class="heade">
			<view class="heade-le">
				<image :class="loggingStatus" src="../../static/tx.jpg" mode="widthFix" @click="broadside"></image>
			</view>
			<view class="heade-name">
				<text>Fighter</text>
			</view>
			<view class="heade-ri">
				<view class="rediu" @click="tosearh">
					搜
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"user",
		data() {
			return {
				// sss:!uni.getStorageSync('token')?'grayscale':''
			};
		},
		props:['loggingStatus'],
		methods:{
			tosearh(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			broadside(){
				this.$emit('showorhide',1)
			}
		},
	}
</script>

<style lang="less" scoped>
.heade{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 50rpx;
	width: 650rpx;
	// background-color: aqua;
	margin-left: 50rpx;
	.heade-le{
		image{
			width: 100rpx;
			border-radius: 50rpx;
		}
		.grayscale{
			-webkit-filter: grayscale(1); /* Chrome, Safari, Opera */
			filter: grayscale(1)
		}
	}
	.heade-name{
		text{
			font-size: 40rpx;
		}
	}
	.heade-ri{
		.rediu{
			width: 50rpx;
			height: 50rpx;
			background-color: #dcdcdc;
			border-radius: 25rpx;
			color:#FFF;
			line-height: 50rpx;
			text-align: center;
		}
	}
}
</style>