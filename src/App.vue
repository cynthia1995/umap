<template>
  <div id="app">
    <router-view />
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue';
export default {
  name: 'App',
  components: {
    TabBar
  }
};
</script>

<style>
body,
html {
  margin: 0;
  font-size: 14px;
}
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
