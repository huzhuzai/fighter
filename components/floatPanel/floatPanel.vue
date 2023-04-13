<template>
	<view>
		<view class="panel" >
			<view class="panel-title">
				{{bannerData.gamename}}
			</view>
			<view class="panel-type">
				{{bannerData.gametype}}
			</view>
			<view class="panel-con">
				<view class="panel-con-grade">
					<view class="pcg-view">
						<text class="iconfont icon-jiaxingshoucangtianchong pcg-text">{{bannerData.grade}}</text>
					</view>
				</view>
				<view class="panel-con-install">
					下载
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "floatPanel",
		props:['bannerData'],
		data() {
			return {
				gameInfo:{}
			};
		},

		methods:{

		}
		
	}
</script>

<style lang="less">
	.panel{
		display: flex;
		flex-direction: column;
		padding-left: 25rpx;
		position: absolute;
		bottom:20rpx ;
		left:44rpx;
		width: 400rpx;
		height: 150rpx;
		background-color: transparent;
		border-radius: 30rpx;
		backdrop-filter: blur(10px);
		.panel-title{
			color: #f8f8f8;
			font-size: 35rpx;
		}
		.panel-type{
			color: #e7e7e7;
			margin: 5rpx 0rpx;
		}
		.panel-con{

			.panel-con-grade{
				position: relative;
				.pcg-view{
					display: inline-block;
					background-color: rgba(248, 248, 248, .3);
					padding: 3rpx 15rpx;
					border-radius: 20rpx;
				}
				.pcg-text{
					color: #E72949;
					font-size: 26rpx;
				}
			}
			.panel-con-install{
				position: absolute;
				bottom: 10rpx;
				right: 20rpx;
				padding: 5rpx 20rpx;
				width: 80rpx;
				height: 50rpx;
				text-align: center;
				line-height: 50rpx;
				color:#e7e7e7 ;
				border-radius: 30rpx;
				background-color:#E72949 ;
			}
		}
		
	}
</style>
