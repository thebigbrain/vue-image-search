<template>
  <form class="mdl-grid" v-on:submit.prevent="send">
    <div class="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--4-col">
      <input type="url" class="mdl-textfield__input" v-model="url">
      <label class="mdl-textfield__label">image url</label>
      <span class="mdl-textfield__error">invalid url</span>
    </div>
    <div class="upload mdl-button mdl-js-button mdl-button--raised mdl-cell mdl-cell--2-col">
      <span class="icon">photo</span>
      <input type="file" v-on:change="gotImage">
    </div>
    <div class="mdl-cell mdl-cell--2-col" style="text-align:center">
      <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">search</button>
    </div>
    <div class="mdl-cell mdl-cell--4-col">
      <img v-bind:src="iph" style="width:100%;">
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      url: '',
      iph: ''
    }
  },
  methods: {
    send: function (event) {
      var param = new window.FormData()
      this.url ? param.append('url', this.url) : ''
      this.image ? param.append('image', this.image) : ''
      console.log(this.url, this.image)
    },
    gotImage: function (event) {
      var file = event.target.files[0]
      if (file) {
        this.image = file
        this.iph = window.URL && window.URL.createObjectURL(file)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload {
  position: relative;
  overflow: hidden;
}
.upload .icon {
  text-align:center;
  display:inline-block;
}
.upload input {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
