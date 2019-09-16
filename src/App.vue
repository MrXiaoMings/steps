<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Steps/>
  </div>
</template>

<script>
import Steps from './components/Steps'

export default {
  name: 'App',
  components: {
    Steps
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
