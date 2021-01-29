<template>
  <div>
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../assets/img/Left-black@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 v-if="!noTit" class="title fontweight-m fontsize28 padding-20">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'NavAndTit',
  components: {},
  props: ['title', 'noTit'],
  data() {
    return {};
  },
  created() {},
  mounted() {
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
