<template>
  <div class="Add paddingtop-50 padding-20">
    <NavTit :title="title + type" :noTit="false"></NavTit>
    <div>
      <van-form @submit="onSubmit" class="imps">
        <van-field v-model="form.name" name="name" label="Name" placeholder="Please Enter Your Name" :rules="[{ required: true, message: 'Name cannot be empty' }]" />
        <van-field
          v-model="form.account"
          name="bankAccount"
          label="Bank account"
          placeholder="Please Enter Your Bank account"
          :rules="[{ required: true, message: 'Bank account cannot be empty' }]"
        />
        <van-field
          v-if="type == 'IMPS'"
          v-model="form.ifscCode"
          name="ifscCode"
          label="IFSC code"
          placeholder="Please Enter IFSC code"
          :rules="[{ required: true, message: 'IFSC code cannot be empty' }]"
        />
        <van-field
          v-if="type == 'IMPS'"
          v-model="form.bankName"
          name="bankName"
          label="Bank name(optional)"
          placeholder="Please Enter Your Bank name"
          :rules="[{ required: false, message: '' }]"
        />
        <van-field v-if="type == 'UPI'" class="qrCode" v-model="form.qrCode" name="qrCode" label="Add your receipt QR code (optional)" :rules="[{ required: false }]" />
        <!-- <van-uploader v-if="type == 'UPI'" v-model="fileList" multiple :max-count="1" :after-read="afterRead" /> -->
        <div v-if="type == 'UPI'" class="uploader">
          <van-icon v-if="!form.qrCode" name="plus" size="24px" color="#6d4ffd" />
          <img v-else class="uploadImg" :src="form.qrCode" alt="" />
          <form enctype="multipart/form-data" id="uploadForm"><input class="file" accept="image/*" @change="upload($event)" type="file" name="file" /></form>
        </div>
        <van-button type="primary" block native-type="submit">Save</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
import { addPayment, upload } from '@/api/api';
import axios from 'axios';
export default {
  name: 'Add',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'Add ',
      type: '',
      form: {
        paymentType: this.$route.query.type,
        name: '',
        account: '',
        ifscCode: '',
        bankName: '',
        qrCode: ''
      },
      errMsg: {
        name: '',
        account: '',
        ifscCode: '',
        bankName: ''
      },
      fileList: []
    };
  },
  created() {
    this.type = this.$route.query.type;
    this.$store.state.loading = false;
  },
  mounted() {},
  methods: {
    upload(event) {
      const self = this;
      self.$store.commit('showLoading');
      const form = document.getElementById('uploadForm');
      const formdata = new FormData(form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          const res = JSON.parse(xhr.responseText);
          if (res.code == 200) {
            self.form.qrCode = res.result.ossUrl;
            self.$store.commit('hideLoading');
          }
        }
      };
      xhr.open('POST', 'http://api.testumap.lxk-soft.cn:8080/exchange/m/sell/upload');
      xhr.send(formdata);
    },
    addPayment(parmas) {
      addPayment(parmas)
        .then(res => {
          if (res.code == 200) {
            this.$toast('Payment method added successfully');
            setTimeout(() => {
              this.$router.go(-2);
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSubmit() {
      console.log(this.form);
      this.addPayment(this.form);
    }
    // afterRead(file) {
    //   // console.log(file);
    //   // this.form.qrCode = file.content;
    //   // console.log(this.form);
    //   // upload(file)
    //   //   .then(res => {
    //   //     // console.log(res);
    //   //   })
    //   //   .catch(err => {});
    // }
  }
};
</script>

<style lang="scss" scoped>
.qrCode {
  &::after {
    border: none;
  }
  /deep/ input {
    display: none;
  }
}
/deep/ .van-button--primary {
  margin-top: 30px;
}
</style>
