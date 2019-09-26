<template>
  <div id="app">
    <div class="camera-modal">
    <div ref="video" class="camera-stream"/>
    <div class="camera-modal-container">
    <span @click="capture" class="take-picture-button-mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
    <i class=material-icons>camera</i>
     </span>
     </div>
     </div>
  </div>
</template>
<script>
require('material-desing-lite)
import firebase from

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
