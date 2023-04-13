<template>
	<view class="bestgame">
		<user></user>
		<view class="bestgameList">
			<view v-for="(item,index) in  gamelist" :key="index">
				<bestgame :gameinfo="item"></bestgame>
			</view>
			
		</view>
		<!-- <view class="mask"> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			gamelist(){
				return this.$store.state.gamelist
			}
		}
	}
</script>

<style lang="less" scoped>
	.bestgame{
		.bestgameList{
			margin-top: 40rpx;
		}
		.mask{
			position: fixed;
			bottom: 0rpx;
			left: 0;
			width: 750rpx;
			height: 80rpx;
			// background-color: aqua;
			background-image: linear-gradient(to top,rgba(111,111,111),rgba(255,255,255,0));
		}
	}
	
</style>
