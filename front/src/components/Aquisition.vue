<template>
	<div id="page-wrapper">
		<header id="header">
			<h1>Aquisition</h1>
    </header>
    <div class="hello">
      <div class="my-8">
        <h2>Dalle de sol</h2>
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
                  d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91   6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30   8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0  1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16   27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875   8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875  8.875zM30 14h-4v-2h4v2z"
                ></path>
              </svg>
            </figure>
            <span class="upload-caption">{{
              hasImage ? "Replace" : "Click to upload"
            }}</span>
          </label>
        </image-uploader>
        <button v-if="image != null" v-on:click="testImage">Récupérer les informations</button>
        <div class="info" v-if="result != null">Vous êtes : {{ result }}</div>
		<div v-if="result != null">
			Correction
			<br>
			<input type="radio" id="one" value="Femme" v-model="picked">
			<label for="one">Femme</label>
			<br>
			<input type="radio" id="two" value="Homme" v-model="picked">
			<label for="two">Homme</label>
			<br>
			<input type="number" placeholder="age">
			<button>Confirmer</button>
		</div>
      </div>
    </div>
	</div>
</template>

<script>
import FileUpload from 'vue-upload-component/dist/vue-upload-component.part.js'
import { mapGetters } from 'vuex'
export default {
	components: {
    // eslint-disable-next-line
		FileUpload,
	},
	data() {
		return {
      msg: "Vue Image Upload and Resize Demo",
      hasImage: false,
      image: null,
      images: this.getImageTesting,
      result: this.getLastImageTested,
		}
  },
  computed: {
    ...mapGetters([
      'getImageTesting',
      'getLastImageTested'
    ])
  },
  methods: {
    setImage: function(output) {
      this.hasImage = true;
      this.image = output;
    },
    testImage: function (){
      this.$store.dispatch("getTestImage", this.image)
        .then( this.result = this.getLastImageTested )
			  .catch(err => console.log(err));
    }
  },
  mounted() {
    // eslint-disable-next-line
    this.$store
      .dispatch("getImageTesting")
      .then( this.images = this.getImageTesting )
			.catch(err => console.log(err));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
	color: #fff;
  display: block;
}
.info{
  background-color: #D7EBF5;
  width: 60%;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  color: black;
}
div{
	color: #fff
}
input{
	color: black;
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

