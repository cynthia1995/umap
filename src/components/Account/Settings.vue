<template>
  <div class="settings paddingtop-50">
    <div class="padding-20"><NavTit :title="title" :noTit="false"></NavTit></div>
    <ul class="list fontsize16">
      <li>
        <b class="fontweight-m">Privacy Policy</b>
        <img :src="arrow" alt="" />
      </li>
      <li>
        <b class="fontweight-m">Terms & Service</b>
        <img :src="arrow" alt="" />
      </li>
      <li>
        <b class="fontweight-m">Version</b>
        <span class="color-8c9fad">v1.2.1</span>
      </li>
    </ul>
    <div class="fixedLogout"><van-button type="primary" block>Logout</van-button></div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
export default {
  name: 'Settings',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'Settings',
      arrow: require('@/assets/img/arrow@2x.png')
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.list {
  line-height: 60px;
  li {
    position: relative;
    margin-top: 20px;
    padding: 0 28px;
  }
  img {
    width: 22px;
    height: 22px;
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
  }
  span {
    font-size: 14px;
    position: absolute;
    right: 28px;
  }
}
.fixedLogout {
  position: fixed;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  bottom: 60px;
  /deep/ .van-button--primary {
    border: 1px solid #e7ebee;
    background-color: transparent;
    span {
      color: #f6100c;
    }
  }
}
</style>
