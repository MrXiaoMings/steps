<template>
  <div id="app">
    <div class="left-content">
      <LeftMenu></LeftMenu>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/common/LeftMenu'

export default {
  methods: {
  },
  components: {
    LeftMenu
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  overflow: hidden;
  .left-content{
    float: left;
    height: 100%;
    border-right: 1px solid lightgrey;
    padding-right: 10px;
  }
  .right-content{
    box-sizing: border-box;
    padding-left: 100px;
    float: left;
    min-width: 1000px;
  }
}
</style>
