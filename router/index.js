import { hasPermission } from "./interceptor.js"


/* function hasPermission(url) {
	let isLogin = uni.getStorageSync('isLogin') //这里获取登录验证状态
	isLogin = Boolean(Number(isLogin))
	// 在白名单中或有登录判断条件可以直接跳转
	if (whiteList.indexOf(url) !== -1 || isLogin) {
		return true
	}
	return false
} */

// 执行uni.navigateTo拦截
uni.addInterceptor('navigateTo', {
	invoke(args) {
		console.log('navigateTo拦截了');
		if (uni.getStorageSync('isLogin') == 1 && args.url == '/pages/login/login') {
			uni.reLaunch({
				url: '/pages/index/index'
			})
			return false
		} else {
			if (!hasPermission(args.url)) {
				uni.reLaunch({
					url: "/pages/login/login"
				})
			}
			// return true
		}
		// return true
	}
})

// 执行tabbar页面跳转拦截
uni.addInterceptor('switchTab', {
	invoke(args) {
		console.log('tabbar拦截了');
		if (!hasPermission(args.url)) {
			console.log('aaaa');
			uni.reLaunch({
				url: "/pages/login/login"
			})
			console.log(555);
			return false
		}
		// if (args.url) {

		// }

	},
	success(args) {

	}
})
