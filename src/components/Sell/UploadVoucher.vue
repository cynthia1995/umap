<template>
  <div class="uploadVoucher paddingtop-50 padding-20">
    <NavTit :title="title" :noTit="false"></NavTit>
    <p class="desc fontsize12 block">{{ desc }}</p>
    <div class="confirmContent">
      <p class="flex">
        <b>
          AMOUNT
          <em class="inlineblock">(USDT)</em>
        </b>
        <span class="fontweight-m">{{ orderDetail.amountTransfer }}</span>
      </p>
      <p class="flex">
        <b>
          AT PRICE
          <em class="inlineblock">(Per USDT)</em>
        </b>
        <span class="fontweight-m">₹{{ orderDetail.price }}</span>
      </p>
      <div class="fontweight-m flex">
        <b>TOTAL</b>
        <span>
          ₹
          <i class="fontsize20 fontweight-m">
            {{ orderDetail.totalINR }}
            <!-- {{
              noFee
                ? (perUSDT * parseFloat(volumeUSDT.replace('₹', '')) - perUSDT * parseFloat(volumeUSDT.replace('₹', '')) * fee).toFixed(2)
                : (perUSDT * parseFloat(volumeUSDT.replace('₹', ''))).toFixed(2)
            }} -->
          </i>
        </span>
      </div>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.from"
          name="from"
          label="From"
          placeholder="Please Enter Your Payment Address"
          :rules="[{ required: true, message: 'Please Enter Your Payment Address' }]"
        />
        <van-field v-model="form.addrType" name="addrType" label="To" readonly :rules="[{ required: true }]" />
        <van-field v-model="form.txid" name="txid" label="TxID" placeholder="Please Enter transaction ID" :rules="[{ required: true, message: 'Please Enter transaction ID' }]" />
        <van-field @click="toSelectPayment" v-model="form.paymentMethod" readonly name="paymentMethod" label="Payment Method" :rules="[{ required: true }]" />
        <div v-if="paymentMethod" class="bankCard white-color">
          <p class="p1 flex">
            <img class="icon" :src="getIcon(paymentMethod.payType)" alt="" />
            <span class="fontweight-m fontsize12">{{ paymentMethod.account }}</span>
          </p>
          <p class="p2 fontsize12 flex">{{ paymentMethod.name }}</p>
          <p class="p3 fontweight-m flex ">
            <span v-if="paymentMethod.payType == 'IMPS'" class="fontweight-m fontsize16">{{ paymentMethod.isfcCode }}</span>
            <span v-if="paymentMethod.payType == 'UPI'" class="fontweight-m fontsize16">Receipt QR code</span>
            <img v-if="paymentMethod.payType == 'UPI'" class="qrCode" :src="paymentMethod.qrCode" alt="" />
          </p>
        </div>
        <van-field v-model="form.voucher" name="voucher" label="Transfer Voucher" :rules="[{ required: true, message: 'Please Upload Your Transfer Voucher' }]" />
        <!-- <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" /> -->
        <div class="uploader">
          <span class="uploaderImg" v-if="!form.voucher"><van-icon name="plus" size="24px" color="#6d4ffd" /></span>
          <img v-else class="uploadImg" :src="form.voucher" alt="" />
          <form enctype="multipart/form-data" id="uploadForm"><input class="file" accept="image/*" @change="upload($event)" type="file" name="file" /></form>
        </div>
        <div class="bottomSubmit text-center">
          <!-- <p class="fontsize12">
            COUNTDOWN:
            <van-count-down class="inlineblock fontweight-m color-6d4ffd" :time="time" millisecond format="HH:mm:ss:SS" />
          </p> -->
          <van-button type="primary" block native-type="submit">Comfirm and Submit</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
import { orderDetail, uploadcertificate } from '@/api/api';
export default {
  name: 'UploadVoucher',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'Upload Transfer Voucher',
      desc: 'You’ll have to upload the transfer voucher',
      id: '',
      fileList: [],
      paymentMethod: {},
      orderDetail: {},
      time: 7200000,
      form: {
        from: '',
        addrType: '',
        txid: '',
        paymentMethod: '',
        voucher: '',
        paymentMethodId: ''
      }
    };
  },
  created() {
    this.$store.state.loading = false;
    this.id = this.$route.query.id;
    this.form.goodsId = this.id;
    orderDetail({
      goodsId: this.id
    })
      .then(res => {
        if (res.code == 200) {
          this.orderDetail = res.result;
          this.form.addrType = this.orderDetail.addrType;
          if (this.getStore('from_' + this.id)) {
            this.form.from = this.getStore('from_' + this.id);
            this.removeStore('from_' + this.id);
          } else {
            this.form.from = this.orderDetail.fromAddress;
          }
          if (this.getStore('txid_' + this.id)) {
            this.form.txid = this.getStore('txid_' + this.id);
            this.removeStore('txid_' + this.id);
          } else {
            this.form.txid = this.orderDetail.transactionNumber;
          }
          if (this.getStore('voucher_' + this.id)) {
            this.form.voucher = this.getStore('voucher_' + this.id);
            this.removeStore('voucher_' + this.id);
          }
          if (this.getStore('payment_' + this.id)) {
            this.paymentMethod = JSON.parse(this.getStore('payment_' + this.id));
            this.removeStore('payment_' + this.id);
          } else {
            this.paymentMethod = this.orderDetail.paymentVo;
          }
          this.form.paymentMethod = this.paymentMethod.account;
          this.form.paymentMethodId = this.paymentMethod.id;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  beforeDestroy() {
    // if (this.form.from) {
    //   this.setStore('from_' + this.id, this.form.from);
    // }
    // if (this.form.txid) {
    //   this.setStore('txid_' + this.id, this.form.txid);
    // }
    //  if (this.paymentMethod) {
    //   this.setStore('payment_' + this.id, this.paymentMethod);
    // }
    // if (this.form.voucher) {
    //   this.setStore('voucher_' + this.id, this.form.voucher);
    // }
  },
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
            self.form.voucher = res.result.ossUrl;
            self.$store.commit('hideLoading');
          }
        }
      };
      xhr.open('POST', 'http://api.umap.vip:8080/exchange/m/sell/upload');
      xhr.send(formdata);
    },
    onSubmit() {
      uploadcertificate(this.form)
        .then(res => {
          if (res.code == 200) {
            this.$toast('Transaction receipt uploaded successfully');
            setTimeout(() => {
              this.$router.push({
                path: 'orders'
              });
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // afterRead(file) {
    //   this.form.voucher = file.content;
    // },
    // toSelectAdress() {
    //   this.$router.push({
    //     path: '/selladdress',
    //     query: {
    //       amount: this.orderDetail.amountTransfer,
    //       id: this.id
    //     }
    //   });
    // },
    toSelectPayment() {
      if (this.form.from) {
        this.setStore('from_' + this.id, this.form.from);
      }
      if (this.form.txid) {
        this.setStore('txid_' + this.id, this.form.txid);
      }
      if (this.paymentMethod) {
        this.setStore('payment_' + this.id, this.paymentMethod);
      }
      if (this.form.voucher) {
        this.setStore('voucher_' + this.id, this.form.voucher);
      }
      this.$router.push({
        path: '/payment',
        query: {
          from: 'UploadVoucher',
          id: this.$route.query.id
        }
      });
    }
  }
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     if (from.path === 'xxx') {
  //       document.getElementById('app').scrollTop = to.meta.scollTopPosition;
  //     }
  //   });
  // },
  // beforeRouteLeave(to, from, next) {
  //   if (from.meta.keepAlive) {
  //     from.meta.scollTopPosition = document.getElementById('app').scrollTop;
  //   }
  //   next();
  // }
};
</script>

<style lang="scss" scoped>
.uploadVoucher {
  padding-bottom: 100px;
  .desc {
    color: #8c9fad;
    margin-top: 4px;
    background: url(../../assets/img/tips_icon@2x.png) no-repeat left center;
    background-size: 12px;
    text-indent: 18px;
  }
}
.confirmContent {
  margin: 20px 0 0;
  padding: 22px 20px 18px;
  line-height: 1;
  p {
    &:nth-child(2) {
      margin: 24px 0 22px;
    }
  }
  div {
    padding-top: 15px;
  }
}
/deep/ .van-cell {
  input {
    &[name='voucher'] {
      height: 0;
    }
  }
  &:nth-child(4) {
    position: relative;
    background: url(../../assets/img/arrow@2x.png) no-repeat right 38px;
    background-size: 24px;
  }
  &:nth-child(4) {
    margin-bottom: 10px;
  }
  &:nth-child(6) {
    &::after {
      border: none;
    }
  }
}
/deep/ .van-button--primary {
  height: 50px;
  &.van-button--disabled {
    background-color: #e7ebee;
    opacity: 1;
    color: #bac7cf;
  }
}
.bankCard {
  width: 100%;
  height: 92px;
  padding: 10px 20px;
  box-sizing: border-box;
  background: url(../../assets/img/card_bg@2x.png) repeat-y center top;
  border-radius: 10px;
  background-size: 100%;
  .p1 {
    line-height: 18px;
    margin-bottom: 15px;
  }
  .p2 {
    margin-bottom: 2px;
  }
  .p3 {
    line-height: 30px;
  }
  .icon {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }
  .qrCode {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }
}
.uploader {
  background-color: transparent;
  max-width: 170px;
  width: 100%;
  height: auto;
  .uploaderImg {
    width: 80px;
    height: 80px;
    display: block;
    position: relative;
    background-color: #f7f8fc;
  }
  .uploadImg {
    width: 100%;
    height: auto;
  }
}
</style>
