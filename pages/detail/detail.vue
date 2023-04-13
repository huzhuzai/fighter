<template>
	<view>
		<user></user>
		<view class="detail">
			<view class="detail-headeimg">
				<image :src='"http://api.lechehao.com:3001/gamelist/"+gameInfo.imgUrl'></image>
			</view>
			<view class="game-name">
				<view class="game-name-con">
					<text>{{gameInfo.gamename}}</text>
				</view>
				<view class="game-detail">
					<text class="iconfont icon-jiaxingshoucangtianchong game-detail-he">5.0</text>
					<text class="game-detail-foot">({{gameInfo.discuss}} Re)</text>
				</view>
			</view>
			<view class="detail-live">
				<text class="iconfont icon-aixin_shixin aixin"></text>
			</view>
			<view class="message">
				<view class="message-chl">
					<text class="iconfont icon-youxitianchong iconred"></text>
					<text>{{gameInfo.downloads}}</text>
				</view>
				<view class="message-chl">
					<text class="iconfont icon-shoujitianchong iconred"></text>
					<text>{{gameInfo.gamesize}}</text>
				</view>
				<view class="message-chl">
					<text class="iconfont icon-sheji1-copy iconred"></text>
					<text>{{gameInfo.gametype}}</text>
				</view>
			</view>
			<view class="message-letter">
				<text>
					{{gameInfo.introduce}}
				</text>
			</view>
			<view class="scroll-max">
				<scroll-view scroll-x="true" show-scrollbar="false" class="scroll-vie">
					<view class="scroll-vie-cen" v-for="(item,index) in 3">
						<image src="http://api.lechehao.com:3001/gamelist/zhizaixiyou.jpg" mode="scaleToFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="install">
			<text @click="down">下载游戏</text> 
			<text v-if="isShowProgress==true"> {{jindu}}%</text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				gameInfo: {},
				progress:0,
				isShowProgress:false,
				jindu:0
			};
		},
		onLoad: function(option) {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('todetailData', (data) => {
				this.gameInfo = data.item
			})
		},
		methods: {
			down() {
				// H5 下载功能实现
				// window.open('http://api.lechehao.com:3001/fighter.apk')
				// uni下载功能实现
				console.log('点击了');
			const downloadTask=	uni.downloadFile({
					url: 'http://api.lechehao.com:3001/fighter.apk',
					success: (res) => {
						//statusCode状态为200表示请求成功，tempFilePath临时路径
						console.log('999', res);
						if (res.statusCode == 200) {
							//文件保存到本地
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: (res) => {
									uni.showToast({
										title: '下载成功' + res.savedFilePath, //保存路径
										duration: 3000
									})
									// 3秒后打开下载的文件
									setTimeout(() => {
										uni.openDocument({
											filePath: res.savedFilePath,
											success: () => {
												console.log('打开文件成功');
											}
										})
									}, 3000)
								}
							})

						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
				// 下载进度
				downloadTask.onProgressUpdate((res) => {
					if (res.progress > 0) {
						this.isShowProgress = true;
					}
					this.progress = res.progress;
					this.jindu=parseInt((res.totalBytesWritten/res.totalBytesExpectedToWrite)*100)
					// console.log('下载进度：' + res.progress);
					// console.log('已下载长度：' + res.totalBytesWritten);
					// console.log('文件总长度：' + res.totalBytesExpectedToWrite);
				})
			}
		},
		watch:{
			jindu(a){
				if(a==100){
					setTimeout(()=>{
						this.isShowProgress=false
					},1500)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail {
		position: relative;
		padding: 0rpx 50rpx;

		.detail-headeimg {
			margin: 40rpx 0rpx 30rpx 0rpx;

			image {
				width: 100%;
				height: 340rpx;
				border-radius: 40rpx;
			}
		}

		.game-name {
			display: flex;
			flex-direction: column;

			.game-name-con {
				font-weight: 500;
				font-size: 40rpx
			}

			.game-detail {
				font-size: 26rpx;
				margin-top: 15rpx;

				.game-detail-he {
					color: #f5aa13;
					padding-right: 6rpx;
				}

				.game-detail-foot {
					color: #9d9d9d;
				}
			}
		}

		.detail-live {
			position: absolute;
			top: 400rpx;
			right: 110rpx;
			width: 80rpx;
			height: 80rpx;
			background-color: rgba(251, 218, 224, .5);
			border-radius: 40rpx;

			.aixin {
				color: #E72949;
				font-size: 40rpx;
				position: absolute;
				top: 20rpx;
				left: 20rpx;
			}
		}

		.message {
			margin-top: 40rpx;
			height: 100rpx;
			background-color: #f4f4f4;
			border-radius: 50rpx;
			display: flex;
			justify-content: space-around;
			line-height: 100rpx;

			.message-chl {
				padding: 0rpx 40rpx;

				border-right: 6rpx solid #FFF;
				text-align: center;

				.iconred {
					color: #E72949;
					font-size: 36rpx;
				}
			}

			:nth-child(3) {
				border-right: transparent;
			}
		}

		.message-letter {
			margin-top: 30rpx;
			font-size: 29rpx;
			color: #bababa;
			line-height: 40rpx;
		}

		.scroll-max {
			height: 320rpx;
			position: relative;

			.scroll-vie {
				position: absolute;
				top: 40rpx;
				height: 260rpx;
				white-space: nowrap;

				// background-color: #aaa;
				.scroll-vie-cen {
					height: 100%;
					width: 350rpx;
					margin-right: 40rpx;
					display: inline-block;

					image {
						width: 100%;
						height: 100%;
						border-radius: 30rpx;
					}
				}
			}
		}
	}

	.install {
		position: fixed;
		left: 50%;
		bottom: 30rpx;
		transform: translateX(-50%);
		width: 650rpx;
		height: 120rpx;
		background-color: #E72949;
		font-size: 50rpx;
		font-weight: 600;
		color: #FFF;
		text-align: center;
		line-height: 120rpx;
		border-radius: 60rpx;
		margin-top: 40rpx;
		box-shadow: 0rpx 4rpx 8rpx 4rpx #b3b3b3;
	}
</style>
