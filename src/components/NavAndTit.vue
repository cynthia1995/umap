<template>
  <div>
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <img v-if="isWhite" src="../assets/img/Left-white@2x.png" alt="" />
        <img v-else src="../assets/img/Left-black@2x.png" alt="" />
      </template>
      <template v-if="kefu" #right>
        <img v-if="isWhite" src="../assets/img/kefu_white@2x.png" alt="" />
        <img v-else src="../assets/img/kefu_black@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 v-if="!noTit" :class="isWhite ? 'title fontweight-m fontsize28 white-color' : 'title fontweight-m fontsize28'">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'NavAndTit',
  components: {},
  props: ['title', 'noTit', 'isWhite', 'kefu'],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      // this.$toast('客服');
    }
  }
};
</script>
