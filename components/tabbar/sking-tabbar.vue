<template>
	<view class="tabbar">
		<view class="tabbar-item" :class="{'active':itemIndex==1}" @click="tabbarItemClick(1)">
			<text class="icon">&#xe7c6;</text>
			<view class="text">
				Home
			</view>
		</view>
		<view class="tabbar-item" :class="{'active':itemIndex==2}" @click="tabbarItemClick(2)">
			<text class="icon">&#xe619;</text>
			<view class="text">
				Photo
			</view>
		</view>
		<view class="tabbar-item" :class="{'active':itemIndex==3}" @click="tabbarItemClick(3)">
			<text class="icon">&#xe78a;</text>
			<view class="text">
				Message
			</view>
		</view>
		<view class="tabbar-item" :class="{'active':itemIndex==4}" @click="tabbarItemClick(4)">
			<text class="icon">&#xe78e;</text>
			<view class="text">
				Setting
			</view>
		</view>
		<view class="indicator" v-bind:style="[{ left: `${leftValue}px`}]"></view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				itemIndex: 0,
				leftValue: -100
			}
		},
		mounted() {
			this.tabbarItemClick(1)
		},
		methods: {
			tabbarItemClick(i) {
				this.itemIndex = i;
				let windowInfo = uni.getWindowInfo();
				let halfItem = windowInfo.windowWidth / 8 - 31
				this.leftValue = (i - 1) * (windowInfo.windowWidth / 4) + halfItem;
			}
		}
	}
</script>
<style lang="scss">
	@font-face {
		font-family: 'iconfont';
		/* Project id 3676987 */
		src:
			url('//at.alicdn.com/t/c/font_3676987_zj4z2gl74k.woff2?t=1665897587205') format('woff2'),
			url('//at.alicdn.com/t/c/font_3676987_zj4z2gl74k.woff?t=1665897587205') format('woff'),
			url('//at.alicdn.com/t/c/font_3676987_zj4z2gl74k.ttf?t=1665897587205') format('truetype');
	}

	.icon {
		font-family: iconfont;
	}

	// .main-content {
	// 	height: 100vh;
	// 	background: #222327;

	.tabbar {
		display: flex;
		height: 50px;
		background-color: white;
		border-radius: 10px;
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		justify-content: space-around;

		.tabbar-item {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: center;
			z-index: 1;

			.icon {

				font-size: 20px;
				text-align: center;
				transition: 0.5s;
				transform: translateY(10px);
			}

			.text {
				text-align: center;
				transition: 0.5s;
				opacity: 0;
			}

			&.active .text {
				transform: translateY(1px);
				opacity: 1;
			}

			&.active .icon {
				transform: translateY(-13px);
			}

		}

		.indicator {
			position: absolute;
			top: -30px;
			border-radius: 50%;
			border: 6px solid #222327;
			width: 50px;
			height: 50px;
			background: #29fd53;
			transition: 0.5s;
		}

		.indicator::before {
			content: '';
			position: absolute;
			top: 41%;
			left: -23px;
			width: 20px;
			height: 20px;
			background: transparent;
			border-top-right-radius: 20px;
			box-shadow: 0px -10px 0 0 #222327;
		}

		.indicator::after {
			content: '';
			position: absolute;
			top: 41%;
			right: -23px;
			width: 20px;
			height: 20px;
			background: transparent;
			border-top-left-radius: 20px;
			box-shadow: 0px -10px 0 0 #222327;
		}
	}
</style>
