<template>
  <div class="uploadVoucher paddingtop-50">
    <NavTit :title="title" :noTit="false"></NavTit>
    <p class="desc padding-20 fontsize12 block">{{ desc }}</p>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
export default {
  name: 'UploadVoucher',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'Upload Transfer Voucher',
      desc: 'You’ll have to upload the transfer voucher'
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.uploadVoucher {
  .desc {
    color: #8c9fad;
    margin-top: 4px;
    background: url(../../assets/img/tips_icon@2x.png) no-repeat 20px center;
    background-size: 12px;
    text-indent: 18px;
  }
}
</style>
