<template>
  	<div id="page-wrapper">
		<header id="header">
			<h1>Admin</h1>
			<template>
  <div class="hello">
    <div class="my-8">
      <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage"
      >
        <label for="fileInput" slot="upload-label">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                class="path1"
                d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
              ></path>
            </svg>
          </figure>
          <span class="upload-caption">{{
            hasImage ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
    </div>
  </div>
</template>
		</header>
		<div id="result">
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
            msg: "Vue Image Upload and Resize Demo",
            hasImage: false,
            image: null
		}
	},
    methods: {
      setImage: function(output) {
        this.hasImage = true;
        this.image = output;
        console.log(this.image);
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
<style>
#fileInput {
  display: none;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>

