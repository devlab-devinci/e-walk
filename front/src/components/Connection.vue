<template>
	<div id="page-wrapper">
		<div>
			<input type="text" v-model="username">
			<input type="password" v-model="password">
			<button v-on:click="login({username, password})">Submit</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	data() {
		return {
			username: '',
			password: ''
		}
	},
	computed: {
		...mapGetters([
			'isAuth'
    	])
	},
	methods: {
		...mapActions([
			'login'
		])
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
	color: #fff;
}
</style>
