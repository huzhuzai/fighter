<template>
	<view>
		<view class="heade">
			<input class="inp" type="text" v-model="inp" placeholder="search...">
			<view class="sub" @click="search">
				<view class="radius"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				inp:'',
				gameInfo:[],
			};
		},
		methods:{
		 search(){
			  this.$store.dispatch('reqSearchGame',this.inp);
			}
		}
	}
</script>

<style lang="less" scoped>
.heade{
	padding-top: 50rpx;
	position: relative;
	margin-bottom: 50rpx;
	.inp{
		width: 540rpx;
		height: 80rpx;
		margin-left: 86rpx;
		padding-left: 40rpx;
		box-sizing: border-box;
		border-radius:40rpx 0rpx 0rpx  40rpx;
		box-shadow: 0rpx 0rpx 9rpx 1rpx #f1f1f1;
	}
	.sub{
		position: absolute;
		top: 50rpx;
		right: 50rpx;
		width: 80rpx;
		height: 80rpx;
		background-color: #E72949;
		border-radius: 0rpx 40rpx 40rpx 0rpx;
		.radius{
			position: absolute;
			top: 24rpx;
			left: 24rpx;
			width: 26rpx;
			height: 26rpx;
			background-color: #fff;
			border-radius: 24rpx;
		}
	}
}
</style>