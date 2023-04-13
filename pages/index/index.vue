<template>
	<view class="box">
		<broadside @showorhidetwo="testtwo" :loggingStatus="loggingStatus" v-if="showorhide!=0"></broadside>
		<user @showorhide="test" :loggingStatus="loggingStatus" ></user>
		<sortedNav @typeData="base"></sortedNav>
		<carousel url-key="url"  />
		<view class="recommend">
			<text class="left">推荐游戏</text>
			<text class="right" @click="toBestGame">全部</text>
		</view>
		<view v-for="(item,index) in type" :key="index">
			<bestgame :gameinfo="item" @click.native="todetale(item)"></bestgame>
		</view>

	</view>
</template>

<script>
	import {mapGetters} from "vuex"
	export default {
		data() {
			return {
				node:{},
				type:[],
				loginState:0,
				showorhide:0,
				loggingStatus:!uni.getStorageSync('token')?'grayscale':''
			};
		},
		methods: {
			toBestGame(){
				uni.navigateTo({
					url:"/pages/BastGame/BastGame"
				})
			},
			todetale(item){
				uni.navigateTo({
					url:"/pages/detail/detail",
					success:function(res){
						res.eventChannel.emit('todetailData',{item})
					}
				})
			},
			base(item){
				this.type=item
			},
			test(data){
				this.showorhide=data
			},
			testtwo(data){
				this.showorhide=data
				this.loggingStatus=!uni.getStorageSync('token')?'grayscale':''
			}	
		},
		computed:{
		 ...mapGetters(['placelist','action','strategy']),
		},
		mounted() {
			this.$store.dispatch('reqGameList');
			// this.type=this.$store.getters.action
			setTimeout(()=>{
				this.type=this.$store.getters.action
			},300)
		},

	};
</script>

<style lang="scss">
.box{
	position: relative;
	.recommend{
		margin-bottom: 30rpx;
		height:50rpx ;
		padding: 0rpx 50rpx;
		.left{
			float: left;
			font-size: 36rpx;
		}
		.right{
			float:right;
			color:#aaa;
		}
	}
}
.foot-null{
	height: 1rpx;
	margin-top: 150rpx;
}
</style>
