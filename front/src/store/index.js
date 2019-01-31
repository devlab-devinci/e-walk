import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isAuth: false,
		token: ''
	},
	actions: {
		login (store, data) {
			axios.post('http://localhost:3000/api/v1/auth', {
				username: data.username,
				password: data.password
			})
			.then(function (response) {
				store.commit('setToken', response.data.token)
			})
			.catch(function (error) {
				console.log(error);
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
