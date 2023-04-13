// 页面白名单，不受拦截
const whiteList = [
	'/pages/index/index',
	'/pages/detail/detail',
	'/pages/register/register'
]

export const hasPermission = function (url) {
	let isLogin = uni.getStorageSync('isLogin') //这里获取登录验证状态
	isLogin = Boolean(Number(isLogin))
	// 在白名单中或有登录判断条件可以直接跳转
	if (whiteList.indexOf(url) !== -1 || isLogin) {
		return true
	}
	return false
}