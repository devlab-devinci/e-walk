import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
const pathApi = "http://localhost:3000"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isAuth: false,
		token: '',
		pathApi: "http://localhost:3000",
		imageTesting: [],
		lastImageTested: null
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
			});
		},
		isAuth (store) {
			if (store.token == '') return false
			axios.post( pathApi + '/api/v1/isauth', {
				token: store.token
			})
			.then(function (response) {
				store.commit('setAuth', response.data.token)
			})
			.catch(function () {
			});
		},
		getImageTesting(store) {
			axios.post( pathApi + '/api/v1/imagetesting' )
			.then(function(response){
				store.commit('setImageTesting', response.data.message)
			})
		},
		getTestImage(store, data) {
			axios.post( pathApi + '/api/v1/imagetesting/new', {
				"imageName": data.name,
				"imageUrl": data.name
			}).then(function(response){
				store.commit('setLastImageTested', response.data)
			}).catch(function () {
			})
		}
	},
	mutations: { 
		setToken(state, token) {
			state.token = token
			state.isAuth = true
		},
		setAuth(state, data) {
			state.isAuth = data
		},
		setImageTesting(state, data) {
			state.imageTesting = data
		},
		setLastImageTested(state, data) {
			let returnData = "une jeune femme"
			if(data.message.jeune_homme > data.message.jeune_femme) returnData = "un jeune homme"
			if(data.message.mature_homme > data.message.jeune_homme) returnData = "un homme de plus de 50 ans"
			if(data.message.other > data.message.mature_homme) returnData = "? Nous n'avons pas réussi a le définir."
			state.lastImageTested = returnData
		}
	},
	getters: {
		isAuth: state => {
			return state.isAuth
		},
		getImageTesting: state => {
			return state.imageTesting
		},
		getLastImageTested: state => {
			return state.lastImageTested
		}
	}
})
