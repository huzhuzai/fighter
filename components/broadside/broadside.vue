<template>
	<view class="broadside-box page">
		<view class="broadside-box-box ">
			<view class="broadside-box-head">
				<view class="broadside-box-head-img" >
					<image :class="loggingStatus " src="../../static/tx.jpg" mode=""></image>
				</view>
				<view class="broadside-box-head-user">
					<text class="uname">用户名:</text>
					<text class="signature">这是一个没意义的签名</text>
				</view>
			</view>
			<view class="separate"></view>
			<view class="broadside-box-con">
				<view class="broadside-box-con-ul">
					<view class="broadside-box-con-li" @click="toLogin" v-show="loggingStatus">
						<text class="iconfont icon-youxi1"> </text>
						<text>登录</text>
					</view>
					<view class="broadside-box-con-li" v-show="!loggingStatus" @click="logout">
						<text class="iconfont icon-youxi1"> </text>
						<text>退出登录</text>
					</view>
				</view>
			</view>
		</view>
		<view class="right" @click="conceal"></view>
	</view>
</template>

<script>
	export default {
		name: "broadside",
		data() {
			return {
				// sss:!uni.getStorageSync('token')?'grayscale':''
			};
		},
		props:['loggingStatus'],
		methods:{
			toLogin(){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			conceal(){
				this.$emit('showorhidetwo',0)
			},
			logout(){
				uni.clearStorageSync()
				this.conceal()
				
			}
		},
	}
</script>

<style lang="less" scoped>
	@bgccolor: #e2e2e2;
	@bgccolor2: #fff;

	.broadside-box {
		position: fixed;
		width: 750rpx;
		z-index: 99;
		display: flex;
		.broadside-box-box {
			width: 600rpx;
			background-color: antiquewhite;
			animation: liuguang 2s infinite linear;
			.broadside-box-head {
				width: 240rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				transform: translateX(-50%);
				margin-left: 50%;
				margin-top: 50rpx;

				.broadside-box-head-img {
					width: 160rpx;
					height: 160rpx;
					border: 6rpx solid #aeb2ff;
					border-radius: 50%;
					overflow: hidden;
					margin-bottom: 15rpx;

					image {
						width: 100%;
						height: 100%;
					}
					.grayscale{
						-webkit-filter: grayscale(1); /* Chrome, Safari, Opera */
						filter: grayscale(1)
					}
				}
				.broadside-box-head-user {
					display: flex;
					flex-direction: column;
					.uname {
						margin: 15rpx 0rpx;
					}
					.signature {
						font-size: 24rpx;
					}
				}
			}
			.separate {
				height: 4rpx;
				width: 500rpx;
				background-color: #e72949;
				transform: translateX(-50%);
				margin: 20rpx 0rpx 0rpx 50%;
			}
			.broadside-box-con{
				padding:50rpx 0rpx 0rpx 100rpx;
				.broadside-box-con-li{
					margin-bottom: 15rpx;
					text:nth-child(1){
						padding-right: 20rpx;
					}
				}
			}
			@keyframes liuguang {
				0% {
					background: linear-gradient(to bottom right, @bgccolor 0%, @bgccolor2 100%, @bgccolor 200%, @bgccolor2 300%);
				}

				5% {
					background: linear-gradient(to bottom right, @bgccolor -10%, @bgccolor2 90%, @bgccolor 190%, @bgccolor2 290%);
				}

				10% {
					background: linear-gradient(to bottom right, @bgccolor -20%, @bgccolor2 80%, @bgccolor 180%, @bgccolor2 280%);
				}

				15% {
					background: linear-gradient(to bottom right, @bgccolor -30%, @bgccolor2 70%, @bgccolor 170%, @bgccolor2 270%);
				}

				20% {
					background: linear-gradient(to bottom right, @bgccolor -40%, @bgccolor2 60%, @bgccolor 160%, @bgccolor2 260%);
				}

				25% {
					background: linear-gradient(to bottom right, @bgccolor -50%, @bgccolor2 50%, @bgccolor 150%, @bgccolor2 250%);
				}

				30% {
					background: linear-gradient(to bottom right, @bgccolor -60%, @bgccolor2 40%, @bgccolor 140%, @bgccolor2 240%);
				}

				35% {
					background: linear-gradient(to bottom right, @bgccolor -70%, @bgccolor2 30%, @bgccolor 130%, @bgccolor2 230%);
				}

				40% {
					background: linear-gradient(to bottom right, @bgccolor -80%, @bgccolor2 20%, @bgccolor 120%, @bgccolor2 220%);
				}

				45% {
					background: linear-gradient(to bottom right, @bgccolor -90%, @bgccolor2 10%, @bgccolor 110%, @bgccolor2 210%);
				}

				50% {
					background: linear-gradient(to bottom right, @bgccolor -100%, @bgccolor2 0%, @bgccolor 100%, @bgccolor2 200%);
				}

				55% {
					background: linear-gradient(to bottom right, @bgccolor -110%, @bgccolor2 -10%, @bgccolor 90%, @bgccolor2 190%);
				}

				60% {
					background: linear-gradient(to bottom right, @bgccolor -120%, @bgccolor2 -20%, @bgccolor 80%, @bgccolor2 180%);
				}

				65% {
					background: linear-gradient(to bottom right, @bgccolor -130%, @bgccolor2 -30%, @bgccolor 70%, @bgccolor2 170%);
				}

				70% {
					background: linear-gradient(to bottom right, @bgccolor -140%, @bgccolor2 -40%, @bgccolor 60%, @bgccolor2 160%);
				}

				75% {
					background: linear-gradient(to bottom right, @bgccolor -150%, @bgccolor2 -50%, @bgccolor 50%, @bgccolor2 150%);
				}

				80% {
					background: linear-gradient(to bottom right, @bgccolor -160%, @bgccolor2 -60%, @bgccolor 40%, @bgccolor2 140%);
				}

				85% {
					background: linear-gradient(to bottom right, @bgccolor -170%, @bgccolor2 -70%, @bgccolor 30%, @bgccolor2 130%);
				}

				90% {
					background: linear-gradient(to bottom right, @bgccolor -180%, @bgccolor2 -80%, @bgccolor 20%, @bgccolor2 120%);
				}

				95% {
					background: linear-gradient(to bottom right, @bgccolor -190%, @bgccolor2 -90%, @bgccolor 10%, @bgccolor2 110%);
				}

				100% {
					background: linear-gradient(to bottom right, @bgccolor -200%, @bgccolor2 -100%, @bgccolor 0%, @bgccolor2 100%);
				}
			}
		}

	}

	.right {
		width: 150rpx;
		background-color: #616161;
		opacity: .5;
	}
</style>
