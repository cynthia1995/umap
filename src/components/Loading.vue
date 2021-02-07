<template>
  <div>
    <van-overlay :show="loading">
      <div class="wrapper" @click.stop><van-loading class="loading" type="spinner" color="#ffffff" size="40px" /></div>
    </van-overlay>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    components: {},
    props: ['loading'],
    data() {
      return {};
    },
    created() {
      console.log(this.loading + 'loading');
    },
    mounted() {},
    methods: {
    }
  };
</script>

<style></style>
