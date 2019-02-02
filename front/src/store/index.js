import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
const pathApi = "http://localhost:3000"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isAuth: false,
		token: ''
	},
	actions: {
		login (store, data) {
			axios.post( pathApi + '/api/v1/auth', {
				username: data.username,
				password: data.password
			})
			.then(function (response) {
				store.commit('setToken', response.data.token)
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		isAuth (store) {
			//if(typeof(store.token) == 'undefined') return false
			if (store.token == '') return false
			axios.post( pathApi + '/api/v1/isauth', {
				token: store.token
			})
			.then(function (response) {
				return response.success
			})
			.catch(function () {
				return false
			});
		}
	},
	mutations: { 
		setToken(state, token){ state.token = token}
	},
	getters: {
		isAuth: state => {
			return state.isAuth
		}
	}
})
