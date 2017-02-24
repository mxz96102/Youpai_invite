<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  max-width: 414px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  max-width: 414px;
  background: #f1f1f1;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
