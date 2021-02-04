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
#app {
  width: 100%;
  min-height: 100%;
  height: 100%;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
