<!-- 轮播图组件，需要父组件传递 bannerData-->
<template>
	<view>
		<swiper class="image-container" previous-margin="130rpx" next-margin="130rpx" circular autoplay
			@change="swiperChange">
			<swiper-item class="swiper-item" :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'"
				v-for="(item, index) in banner" :key="index">
				<image class="sf" @click="toDetail(item)" :class="currentIndex == index ? 'item-img' : 'item-img-side'" :src='"http://api.lechehao.com:3001/gamelist/"+item.imgUrl' lazy-load :style="dontFirstAnimation ? 'animation: none;' : ''" mode="aspectFill"></image>
				<floatPanel :bannerData="item"></floatPanel>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	
	export default {
		props: {
			imgList: {
				type: Array,
				default () {
					return []
				}
			},
			urlKey: {
				type: String,
				default () {
					return ''
				}
			},
		},
		data() {
			return {
				currentIndex: 0,
				dontFirstAnimation: true
			}
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
			clickImg(item) {
				// this.$emit('selected', item, this.currentIndex)
			},
			toDetail(item) {
				uni.navigateTo({
					url: "/pages/detail/detail",
					success:function(res){
						res.eventChannel.emit('todetailData',{item})
					}
				})
			}
		},
		computed:{
			banner(){
				return this.$store.getters.banner
			}
		}
	}
</script>
<style scoped>
	.image-container {
		width: 750rpx;
		height: 500rpx;
		margin-bottom: 60rpx;
	}

	.swiper-item {
		position: relative;
	}

	.item-img {
		width: 630rpx;
		height: 500rpx;
		border-radius: 18rpx;
		animation: to-big .3s;
	}

	.swiper-item {
		width: 630rpx;
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-img-side {
		width: 630rpx;
		height: 380rpx;
		border-radius: 18rpx;
		animation: to-mini .3s;
	}

	.swiper-item-side {
		width: 630rpx;
		height: 380rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sf {
		margin: 0rpx 10rpx;
	}

	@keyframes to-mini {
		from {
			height: 500rpx;
		}

		to {
			height: 380rpx;
		}
	}

	@keyframes to-big {
		from {
			height: 380rpx;
		}

		to {
			height: 500rpx;
		}
	}
</style>
