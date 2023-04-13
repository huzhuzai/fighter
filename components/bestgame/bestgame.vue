<template>
	<view>
		<view class="item">
			<view class="box">
				<view class="item-lef">
					<image class="item-lef-img" :src="'http://api.lechehao.com:3001/gamelist/'+gameinfo.imgUrl" mode="aspectFill"></image>
				</view>
				<view class="item-rig">
					<view class="item-rig-heade">
						<text>{{gameinfo.gamename}}</text>
						<view class="aixin aixin-active">
							<view class="aixin-le"></view>
							<view class="aixin-ri"></view>
						</view>
					</view>
					<view class="item-rig-center">
						{{gameinfo.gametype}}
					</view>
					<view class="item-rig-bottm">
						<text class="iconfont icon-jiaxingshoucangtianchong grade">{{gameinfo.grade}}</text> <text class="grade-rig">({{gameinfo.discuss}}评论)</text>
						<view class="iconfont icon-youxi numsize" >
							{{gameinfo.gamesize}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"bestgame",
		props:['gameinfo'],
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="less">
.item{
	position: relative;
	padding: 20rpx;
	margin-left: 36rpx;
	margin-bottom: 15rpx;
	width: 86%;
	height: 210rpx;
	// border: 1px solid red;
	background-color: #f9f9f9;
	border-radius: 30rpx;
	.box{
		display: flex;
		padding: 10rpx;
		border-radius: 30rpx;
		background-color: white;
		.item-lef{
			.item-lef-img{
				width: 180rpx;
				height: 180rpx;
				border-radius: 30rpx;
			}
		}
		.item-rig{
		 padding-left: 26rpx;
		 .item-rig-heade{
			
			 padding-top: 15rpx;
			 color: #383838;
			 .aixin{
				 position: absolute;
				 top: 55rpx;
				 right: 70rpx;
				 width: 20rpx;
				 height: 20rpx;
				 background-color: #cbcaca;
				 transform: rotate(-45deg);
				 opacity: .9;
				 .aixin-le{
					 position: absolute;
					 top:-10rpx;
					 width: 20rpx;
					 height: 20rpx;
					 background-color: #cbcaca;
					 border-radius: 50%;
				 }
				 .aixin-ri{
				 	position: absolute;
				 	left:10rpx;
				 	width: 20rpx;
				 	height: 20rpx;
				 	background-color: #cbcaca;
				 	border-radius: 50%;
				 }
			 }
			 .aixin-active{
				 background-color: #E72949;
				 .aixin-le{
				 	background-color: #E72949;
				 }
				 .aixin-ri{
				 	background-color: #E72949;
				 }
			 }
		 }
		 .item-rig-center{
			 margin: 15rpx 0rpx;
			 color: #bcbcbc;
			 font-size: 28rpx;
		 }
		 .item-rig-bottm{
			 display: flex;
			.grade{
				color: #ffa811;
				font-size: 28rpx;
			}
			.grade-rig{
				padding-left: 6rpx;
				color: #bcbcbc;
				font-size: 28rpx;
			}
		 }
		 .numsize{
			 margin-left: 40rpx;
			 color: #E72949;
			 font-size: 28rpx;
		 }
		}
	}
}
</style>