<template>
  <div>
    <van-overlay :show="$store.state.loading">
      <div class="wrapper" @click.stop>
        <van-loading class="loading" type="spinner" color="#ffffff" size="32px" vertical="">loading</van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    components: {},
    props: [],
    data() {
      return {};
    },
    created() {
    },
    mounted() {},
    methods: {
    }
  };
</script>

<style></style>
