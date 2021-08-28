<template>
  <div id="app">
    <nav-bar />
    <div class="main container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: {NavBar}
}
</script>

<style lang="scss">
app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main {
  padding-top: 5em;
}
</style>
