<template>
	<div id="page-wrapper">
		<header id="header">
			<h1>Admin</h1>
			<file-upload v-model="files" post-action="/">Upload file</file-upload>
		</header>
		<div id="result">
			<!-- eslint-disable-next-line -->
			<li v-for="file in files" v-if="files.lenght < 0">
				{{ file.name }}
			</li>
			<li>jeune_femme : {{ jeune_femme }} </li>
			<li>jeune_homme : {{ jeune_homme }} </li>
			<li>mature_homme : {{ mature_homme }} </li>
			<li>--other-- : {{ other }} </li>
		</div>
	</div>
</template>

<script>
import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
export default {
	components: {
		FileUpload,
	},
	data() {
		return {
			files: [],
			jeune_femme: (1 - (Math.random() * 1)).toFixed(3),
			jeune_homme: (1 - (Math.random() * 1)).toFixed(3),
			mature_homme: (Math.random() * 1).toFixed(3),
			other: (Math.random() * 1).toFixed(3),

		}
	},
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
	color: #fff;
}
</style>
