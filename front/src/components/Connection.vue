<template>
	<div id="page-wrapper">
		<div>
			<input type="text" v-model="username">
			<input type="password" v-model="password">
			<button v-on:click="login()">Submit</button>
		</div>

		<router-link to="/admin">Go to Admin</router-link>
		<br>
		<router-link to="/aquisition">Go to Aquisition</router-link>
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
		login: function() {
			let data = {
				username: this.username,
				password: this.password,
			};
			this.$store
				.dispatch("login", data)
				.then(() => this.$router.push("admin"))
				.catch(err => console.log(err));
		}
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
	color: #fff;
}
</style>
