<template>
	<view>
		<scroll-view scroll-y="true" class="box" scroll-x>
			<view class="scroll-con">
				<view class="item-fa" v-for="(item,index) in  gametypeList"  @click="aa(index,item)"  :class="{active:itemindex==index?'active':''}">
					<view class="item">
						<view class="item-lef">
							<image class="item-lef-img"  src="../../static/sheji.png" mode=""></image>
						</view>
						<view class="item-rig">
							<text class="item-rig-text" >{{item.type}}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import{ mapGetters} from 'vuex'
	export default {
		name: "sortedNav",
		data() {
			return {
				itemindex: 0
			};
		},
		computed:{
			...mapGetters(['placelist','action','strategy']),
			gametypeList(){
				return [
				{	type:'动作',
					list: this.action},
				{	type:'放置',
					list:this.placelist},
				{	type:'策略',
					list:this.strategy}
				]
			}
		},
		methods:{
			aa(index,item){
				this.itemindex=index
				this.$emit('typeData',item.list)
			},
		},
		// directives:{
		// 	 trigger: {
		// 	      inserted (el, bin) {
		// 		   if(bin.value==0){
		// 				setTimeout(()=>{
		// 					el.click()
		// 				},100)
		// 		   }
		// 	      }
		// 	    }
		// }
	}
</script>

<style lang="less" scoped>
	.scroll-con {
		margin: 50rpx 0rpx;
		height: 90rpx;
		padding-left: 60rpx;
		white-space: nowrap;
		.item-fa {
			display: inline-block;
			.item {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 5rpx 10rpx;
				margin-left: 15rpx;
				width: 187rpx;
				height: 80rpx;
				background-color: #f7f7f7;
				border-radius: 40rpx;
				.item-lef {
					width: 60rpx;
					height: 60rpx;
					background-color: white;
					border-radius: 35rpx;
					.item-lef-img {
						width: 100%;
						height: 100%;
					}
				}
				.item-rig {
					.item-rig-text {
						color: #777;
					}
				}
			}
		}
		.active {
			.item {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 5rpx 10rpx;
				margin-left: 15rpx;
				width: 187rpx;
				height: 80rpx;
				background-color: #FBDAE0;
				border-radius: 40rpx;
				.item-lef {
					width: 60rpx;
					height: 60rpx;
					background-color: white;
					border-radius: 35rpx;
					.item-lef-img {
						width: 100%;
						height: 100%;
					}
				}
				.item-rig {
					.item-rig-text {
						color: #E72949;
					}
				}
			}
		}
	}
</style>
