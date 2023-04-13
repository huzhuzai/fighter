<template>
	<view class="tabbar"> 
		<view class="box">
			<view class="tabbar-item">
				<image src="../../static/shouye.png" mode="widthFix"></image>
			</view>
			<view class="tabbar-item">
				<image src="../../static/shouye.png" mode="widthFix"></image>
			</view>
			<view class="tabbar-item">
				<image src="../../static/shouye.png" mode="widthFix"></image>
			</view>
			<view class="tabbar-item">
				<image src="../../static/shouye.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbar",
		data() {
			return {
				"list": [{
					"pagePath":"pages/index/index",
					"iconPath": "static/shouye.png",
					"selectedIconPath": "static/shouye-1.png",
					"text": "首页"
				}, {
					"pagePath": "pages/live/live",
					"iconPath": "static/aixin.png",
					"selectedIconPath": "static/aixin-1.png",
					"text": "喜欢"
				},
				{
					"pagePath": "pages/game/game",
					"iconPath": "static/youxi.png",
					"selectedIconPath": "static/youxi-1.png",
					"text": "游戏"
				},{
					"pagePath": "pages/message/message",
					"iconPath": "static/xiaoxi.png",
					"selectedIconPath": "static/shouye-1.png",
					"text": "消息"
				}]
			};
		}
	}
</script>

<style lang="less" scoped>
	.tabbar{
		position: fixed;
		bottom:0px;
		left:0px;
		width: 750rpx;
		height: 120rpx;
		background-color: #FFF;
		box-shadow: 0px 5px 8px 1rpx #919191;
		.box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.tabbar-item{
				flex: 1;
				// background-color: #41dd65;
				image{
					width: 30%;
					height: 30%;
				}
			}
		}
	}
	
</style>