import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	actions: {
		// 获取所有游戏数据
		reqGameList(context) {
			uni.request({
				url: 'http://api.lechehao.com:3001/api/gamelist',
			}).then((data)=>{
				// console.log(data.data.data);
				context.commit('REQGAMELIST', data.data.data)
			})
		},
		// 搜索游戏
		reqSearchGame(context, value) {
			uni.request({
				url: 'http://api.lechehao.com:3001/api/serch',
				method: 'get',
				data: {
					gamename: value
				}
			}).then((data)=>{
				 // var [err, res] = data;
				    // console.log(data.data.data[0]);
					context.commit('REQSEAECHGAME', data.data.data[0])
			})

			
		},
		// 登录
		reqLogin(context, value) {
			uni.request({
				url: 'http://api.lechehao.com:3001/api/login',
				header: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' //重点
				},
				method: 'post',
				data: {
					username: value.username,
					password: value.password
				},
				success: (res) => {
					if (res.data.status == 0) {
						context.commit("REQLOGIN", res.data.token)
					}
				},
				fail: (err) => {
					reject('err')
				}
			})
		},
		// 注册
		reqRegister(context, value) {
			uni.request({
				url: 'http://api.lechehao.com:3001/api/reguser',
				header: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' //重点
				},
				method: 'post',
				data: {
					username: value.username,
					password: value.password,
				},
				success: (res) => {
					if (res.data.status == 0) {
						context.commit("REQREGISTER", res.data)
					}
				}
			})
		},
		// token获取用户信息 (不开启)
		/* 	reqTokenUserInfo(context, value) {
				uni.request({
					url: `http://127.0.0.1:3001/my/userinfo`,
					header: {
						"Content-Type": "application/x-www-form-urlencoded",
						"Token": value
					},
					method: "get",
					success: (e) => {
						console.log('555',e);
						// if (e.status === 0 ) {
						// 	this.login(e.data);
						// }
					}
				})
			} */
	},
	mutations: {
		REQGAMELIST(state, value) {
			state.gamelist = value
		},
		REQSEAECHGAME(state, value) {
			state.searchgame = value
		},
		REQREGISTER(state, value) {
			state.users = value.status
		},
		REQLOGIN(state, value) {
			state.token = value
			uni.setStorageSync('token', value);
		}
	},
	state: {
		gamelist: [],
		searchgame: {},
		users: {},
		token: uni.getStorageSync('token')
	},
	getters: {
		// 放置类游戏数据
		placelist(state) {
			return state.gamelist.filter((item) => {
				return item.gametype == '放置'
			})
		},
		// 动作类游戏数据
		action(state) {
			return state.gamelist.filter((item) => {
				return item.gametype == '动作'
			})
		},
		// 策略类游戏数据
		strategy(state) {
			return state.gamelist.filter((item) => {
				return item.gametype == '策略'
			})
		},
		// banner数据
		banner(state) {
			return state.gamelist.filter((item) => {
				return item.banner == '1'
			})
		},
	}
})

export default store
