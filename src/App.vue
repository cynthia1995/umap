<template>
  <div id="app">
    <router-view />
    <TabBar></TabBar>
    <Loading></Loading>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue';
import Loading from './components/Loading.vue';
export default {
  name: 'App',
  components: {
    TabBar,
    Loading
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {}
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
