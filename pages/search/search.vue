<template>
	<view>
		<user></user>
		<search ></search>
		<view v-if="searchinfo.id">
				<bestgame :gameinfo="searchinfo" @click.native="todetale(searchinfo)"></bestgame>
		</view>
		<view class="nullsearch" v-if="!searchinfo.id">
			<image src="../../static/null.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods:{
			todetale(item){
				uni.navigateTo({
					url:"/pages/detail/detail",
					success:function(res){
						res.eventChannel.emit('todetailData',{item})
					}
				})
			},
		},
		computed: {
			searchinfo() {
				return this.$store.state.searchgame
			}
		},
	}
</script>

<style lang="less">
.results{
	display: flex;
	justify-content: space-between;
	margin-bottom: 30rpx;
	padding: 0rpx 50rpx;
	.lef{
		font-size: 30rpx
	}
	.rig{
		font-style: 30rpx;
		color: #b5b5b5;
	}
}
.nullsearch{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	image{
		width: 500rpx;
		height: 400rpx;
	}
	text{
		font-size: 30rpx;
		color: #b5b5b5;
	}
}
</style>
