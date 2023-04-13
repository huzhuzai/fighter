<template>
	<view class="msg-item">
		<view class="msg-item-box">
			<view class="msg-item-box-le">
				<image class="mibl-img" src="../../static/tx.jpg" mode="widthFix"></image>
			</view>
			<view class="msg-item-box-cen">
				<text class="msg-item-box-cen-heade" >john Smith</text>
				<text class="msg-item-box-cen-foot" > 你今天还是玩原神吗</text>
			</view>
			<view class="msg-item-box-ri">
				<text>07:20 AM</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"messageItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.msg-item{
		width: 650rpx;
		height: 130rpx;
		background-color: #fbfbfd;
		margin-left: 50rpx;
		margin-bottom: 16rpx;
		border-radius: 20rpx;
		padding-left: 10rpx;
		.msg-item-box{
			display: flex;
			justify-content: space-between;
			padding-top: 10rpx;
			.msg-item-box-le{
				flex: 20%;
				.mibl-img{
					width: 110rpx;
					border-radius: 70rpx;
					}
			}
			.msg-item-box-cen{
				flex: 60%;
				display: flex;
				flex-direction: column;
				padding-left: 15rpx;
				padding-top: 10rpx;
				box-sizing: border-box;
				.msg-item-box-cen-heade{
					
				}
				.msg-item-box-cen-foot{
					margin-top: 14rpx;
					color: #CCC;
					font-size: 26rpx;
					box-sizing: border-box;
				}
			}
			.msg-item-box-ri{
				flex: 20%;
				color:#CCC ;
				font-size: 26rpx;
				margin-top: 10rpx;
			}
		}
		
	}
</style>