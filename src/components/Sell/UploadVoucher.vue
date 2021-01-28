<template>
  <div class="uploadVoucher">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-black@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 class="title padding-20 fontweight-m">{{ title }}</h3>
    <p class="desc padding-20">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'UploadVoucher',
  data() {
    return {
      title: 'Upload Transfer Voucher',
      desc: 'You’ll have to upload the transfer voucher'
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
>>> .van-nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
}
>>> .van-hairline--bottom::after {
  border: none;
}
>>> .van-hairline--bottom::after {
  border: none;
}
.van-nav-bar__left img {
  height: 24px;
  width: 24px;
}
.uploadVoucher {
  padding-top: 50px;
  .title {
    font-size: 28px;
  }
  .desc {
    display: block;
    font-size: 12px;
    color: #8c9fad;
    margin-top: 4px;
    background: url(../../assets/img/tips_icon@2x.png) no-repeat 20px center;
    background-size: 12px;
    text-indent: 18px;
  }
}
</style>
