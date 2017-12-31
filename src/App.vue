<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'app',
  created() {
    const vm = this
    $.getJSON('/api/page/home', function(json) {
      console.log('titles ' + JSON.stringify(json))
      vm.items = json
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
