<template>
	<view>
		<user></user>
		<view class="box">
			<image src="http://api.lechehao.com:3001/gamelist/mitushenyuan.jpg" mode="scaleToFill"></image>
			<view class="cont">
				<view class="txt">
					<text>Play your</text>
					<text>Best Tournament</text>
				</view>
				<view class="join">
					Join
				</view>
			</view>
		</view>
		<view class="recommend">
			<text class="left">推荐游戏</text>
			<text class="right">全部</text>
		</view>
		<view v-for="(item,index) in gamelist" :key="index">
			<bestgame :gameinfo="item"  @click.native="todetale(item)"></bestgame>
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
		},
		onShow() {
			let isLogin = uni.getStorageSync('isLogin') //这里获取登录验证状态
			if(!isLogin){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		},
		methods:{
			todetale(item){
				uni.navigateTo({
					url:"/pages/detail/detail",
					success:function(res){
						res.eventChannel.emit('todetailData',{item})
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.box{
	padding: 0rpx 30rpx;
	margin-top: 30rpx;
	width: 690rpx;
	position: relative;
	margin-bottom: 30rpx;
	image{
		width: 100%;
		height: 340rpx;
		border-radius: 40rpx;
	}
	.cont{
		position: absolute;
		top: 90rpx;
		left: 30rpx;
		width: 400rpx;
		height: 200rpx;
		.txt{
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #FFF;
			font-size: 40rpx;
			padding: 0rpx 10rpx;
		}
		.join{
			width: 160rpx;
			height: 66rpx;
			background-color: #E72949;
			color: #FFF;
			font-size: 34rpx;
			line-height: 66rpx;
			text-align: center;
			border-radius: 40rpx;
			margin-left: 120rpx;
			margin-top: 30rpx;
		}
	}
}
.recommend{
		height:50rpx ;
		padding: 0rpx 50rpx;
		margin-bottom: 30rpx;
		.left{
			float: left;
			font-size: 36rpx;
		}
		.right{
			float:right;
			color:#aaa;
		}
	}
</style>
