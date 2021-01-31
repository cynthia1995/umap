<template>
  <div class="uploadVoucher paddingtop-50">
    <NavTit :title="title" :noTit="false"></NavTit>
    <p class="desc padding-20 fontsize12 block">{{ desc }}</p>
    <div class="confirmContent">
      <p class="flex">
        <b>
          AMOUNT
          <em class="inlineblock">(USDT)</em>
        </b>
        <span>243</span>
      </p>
      <p class="flex">
        <b>
          AT PRICE
          <em class="inlineblock">(Per USDT)</em>
        </b>
        <span>₹354</span>
      </p>
      <div class="fontweight-m flex">
        <b>TOTAL</b>
        <span>
          ₹
          <i class="fontsize20 fontweight-m">
            3657
            <!-- {{
              noFee
                ? (perUSDT * parseFloat(volumeUSDT.replace('₹', '')) - perUSDT * parseFloat(volumeUSDT.replace('₹', '')) * fee).toFixed(2)
                : (perUSDT * parseFloat(volumeUSDT.replace('₹', ''))).toFixed(2)
            }} -->
          </i>
        </span>
      </div>
    </div>
    <div class="padding-20">
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.from"
          name="from"
          label="From"
          placeholder="Please Enter Your Payment Address"
          :rules="[{ required: true, message: 'Please Enter Your Payment Address' }]"
        />
        <van-field v-model="form.to" name="to" label="To" :rules="[{ required: true }]" />
        <van-field v-model="form.txid" name="txid" label="TxID" placeholder="Please Enter transaction ID" :rules="[{ required: true, message: 'Please Enter transaction ID' }]" />
        <van-field v-model="form.paymentMethod" name="paymentMethod" label="Payment Method" :rules="[{ required: true }]" />
        <div class="bankCard white-color">
          <p class="p1 flex">
            <img class="icon" :src="paymentMethod.icon" alt="" />
            <span class="fontweight-m fontsize12">{{ paymentMethod.accountName }}</span>
          </p>
          <p class="p2 fontsize12 flex">{{ paymentMethod.userName }}</p>
          <p class="p3 fontweight-m flex ">
            <span class="fontweight-m fontsize16">{{ paymentMethod.addressCode }}</span>
            <!-- <img class="qrCode" src="../../assets/img/trc20.png" alt="" /> -->
          </p>
        </div>
        <van-field v-model="form.transferVoucher" name="transferVoucher" label="Transfer Voucher" :rules="[{ required: true, message: 'Please Upload Your Transfer Voucher' }]" />
        <van-uploader v-model="fileList" multiple :max-count="1" :after-read="afterRead" />
        <div class="bottomSubmit text-center">
          <p class="fontsize12">
            COUNTDOWN:
            <van-count-down class="inlineblock fontweight-m color-6d4ffd" :time="time" millisecond format="HH:mm:ss:SS" />
            <!-- <span class="fontweight-m color-6d4ffd">120min</span> -->
          </p>
          <van-button type="primary" block native-type="submit">Comfirm and Submit</van-button>
        </div>
      </van-form>
    </div>
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
      desc: 'You’ll have to upload the transfer voucher',
      form: {
        from: '',
        to: 'ERC',
        txid: '',
        paymentMethod: 'Bank Account',
        transferVoucher: ''
      },
      fileList: [],
      paymentMethod: {
        icon: require('@/assets/img/UPI_icon@2x.png'),
        accountName: '3409409049094',
        userName: 'Kun Max Yuan',
        addressCode: 'KSIB34034893883948'
      },
      time: 7200000
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    afterRead(file) {
      this.form.transferVoucher = file.content;
    }
  }
};
</script>

<style lang="scss" scoped>
.uploadVoucher {
  padding-bottom: 100px;
  .desc {
    color: #8c9fad;
    margin-top: 4px;
    background: url(../../assets/img/tips_icon@2x.png) no-repeat 20px center;
    background-size: 12px;
    text-indent: 18px;
  }
}
.confirmContent{
  margin-bottom: 10px;
}
/deep/ .van-cell {
  input {
    &[name='transferVoucher'] {
      height: 0;
    }
  }
  &:nth-child(2),
  &:nth-child(4) {
    position: relative;
    background: url(../../assets/img/arrow@2x.png) no-repeat right 38px;
    background-size: 24px;
  }
  &:nth-child(6) {
    border-bottom: 0;
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
  width: 335px;
  height: 92px;
  padding: 10px 20px;
  box-sizing: border-box;
  background: url(../../assets/img/card_bg@2x.png) no-repeat center top;
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
  // .qrCode {
  //   width: 30px;
  //   height: 30px;
  //   margin-left: 10px;
  // }
}
</style>
