<template>
  <div class="Add paddingtop-50 padding-20">
    <NavTit :title="title" :noTit="false"></NavTit>
    <div v-if="$route.query.name === 'IMPS'">
      <van-form @submit="onSubmitIMPS" class="imps">
        <van-field v-model="impsForm.name" name="name" label="Name" placeholder="Please Enter Your Name" :rules="[{ required: true, message: 'Please Enter Your Name' }]" />
        <van-field
          v-model="impsForm.bankAccount"
          name="bankAccount"
          label="Bank account"
          placeholder="Please Enter Your Bank account"
          :rules="[{ required: true, message: 'Please Enter Your Bank account' }]"
        />
        <van-field
          v-model="impsForm.ifscCode"
          name="ifscCode"
          label="IFSC code"
          placeholder="Please Enter IFSC code"
          :rules="[{ required: true, message: 'Please Enter IFSC code' }]"
        />
        <van-field v-model="impsForm.backName" name="backName" label="Bank name(optional)" :rules="[{ required: true, message: '' }]" />
        <van-button type="primary" block native-type="submit">Save</van-button>
      </van-form>
    </div>
    <div v-else-if="$route.query.name === 'UPI'">
      <van-form @submit="onSubmitUPI" class="upiForm">
        <van-field v-model="upiForm.name" name="name" label="Name" placeholder="Please Enter Your Name" :rules="[{ required: true, message: 'Please Enter Your Name' }]" />
        <van-field
          v-model="upiForm.Account"
          name="account"
          label="Account"
          placeholder="Please Enter Your account"
          :rules="[{ required: true, message: 'Please Enter Your Bank account' }]"
        />
        <van-field v-model="upiForm.qrCode" name="qrCode" label="Add your receipt QR code (optional)" :rules="[{ required: true, message: 'Please Upload Your QRCode' }]" />
        <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" />
        <van-button type="primary" block native-type="submit">Save</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
export default {
  name: 'Add',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'Add ' + this.$route.query.name,
      impsForm: {
        name: '',
        bankAccount: '',
        ifscCode: '',
        backName: '2023092093209'
      },
      upiForm: {
        name: '',
        account: '',
        qrCode: ''
      },
      fileList: []
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmitIMPS() {
      console.log(this.impsForm);
    },
    onSubmitUPI() {
      console.log(this.upiForm);
    },
    afterRead(file) {
      this.upiForm.qrCode = file.content;
      console.log(this.upiForm);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .van-form.upiForm {
  .van-cell:nth-child(3)::after {
    border: none;
  }
}
/deep/ .van-cell {
  input {
    &[name='qrCode'] {
      height: 0;
    }
  }
  &:nth-child(3) {
    border-bottom: 0;
  }
}
/deep/ .van-button--primary {
  margin-top: 30px;
}
</style>
