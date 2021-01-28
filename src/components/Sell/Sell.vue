<template>
  <div class="sell">
    <h3 class="white-color fontweight-m">Sell USDT</h3>
    <div class="line line1">
      <p class="bg-8ceaff">
        <img src="../../assets/img/USDT@2x.png" alt="" />
        USDT/INR
      </p>
      <p class="bg-00d0ff">
        ₹
        <b>81.33</b>
      </p>
    </div>
    <section class="main">
      <p class="notice text-center">{{ notice }}</p>
      <div class="exchange">
        <div class="line line2 bg-ffffff">
          <p class="bg-edf5ff fontweight-m">VOLUME USDT</p>
          <p class="bg-ffffff"><van-field v-model="volumeUSDT" @focus="focus1($event)" placeholder="₹00.00" /></p>
        </div>
        <div class="line line3 bg-ffffff">
          <p class="bg-edf5ff fontweight-m">TOTAL INR</p>
          <p class="bg-ffffff"><van-field v-model="totalINR" @focus="focus2($event)" placeholder="₹00.00" /></p>
        </div>
        <span @click="exchange"></span>
      </div>
      <p class="info color-4c528f">Limit ₹8800.00 - ₹3,000,000.00</p>
      <div class="icons">
        <img src="../../assets/img/UPI@2x.png" alt="" />
        <img src="../../assets/img/card_icon@2x.png" alt="" />
        <img src="../../assets/img/UPI_icon@2x.png" alt="" />
      </div>
      <van-button type="primary" block @click="confirmSubmit">Sell USDT</van-button>
      <p class="msg text-center">
        <span>₹0.00</span>
        ₹3.45 fee included
      </p>
    </section>
    <van-popup class="confirmPopup" v-model="confirmOrder" round position="bottom">
      <h4 class="text-center fontweight-m">{{ confirmOrderTit }}</h4>
      <div class="confirmContent">
        <p>
          <b>
            VOLUME
            <em>(USDT)</em>
          </b>
          <span>{{ volumeUSDT }}</span>
        </p>
        <p>
          <b>
            AT PRICE
            <em>(Per USDT)</em>
          </b>
          <span>₹{{ perUSDT }}</span>
        </p>
        <p>
          <b>0.25% Fee</b>
          <span>
            <em>₹2000.00</em>
            ₹0.00
          </span>
        </p>
        <div class="fontweight-m">
          <b>Total</b>
          <span>
            ₹
            <i>
              {{
                noFee
                  ? (perUSDT * parseFloat(volumeUSDT.replace('₹', '')) - perUSDT * parseFloat(volumeUSDT.replace('₹', '')) * fee).toFixed(2)
                  : (perUSDT * parseFloat(volumeUSDT.replace('₹', ''))).toFixed(2)
              }}
            </i>
          </span>
        </div>
      </div>
      <van-button type="primary" block @click="sellSubmit">Confirm Sell Order</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Sell',
  data() {
    return {
      notice: 'When you want to sell USDT and cash out to INR.It’s safe and hassle free!',
      confirmOrderTit: 'Comfirm USDT sell order',
      volumeUSDT: '',
      totalINR: '',
      confirmOrder: false,
      perUSDT: 80.0,
      fee: 0.0025,
      noFee: false
    }
  },
  methods: {
    focus1(event) {
      // console.log(event);
      if (this.volumeUSDT == '') {
        this.volumeUSDT = '₹' + this.volumeUSDT;
      }
    },
    focus2(event) {
      // console.log(event);
      if (this.totalINR == '') {
        this.totalINR = '₹' + this.totalINR;
      }
    },
    exchange() {
      const flag = this.volumeUSDT;
      this.volumeUSDT = this.totalINR;
      this.totalINR = flag;
    },
    confirmSubmit() {
      if (this.volumeUSDT && this.volumeUSDT) {
        if (this.isNumber(this.volumeUSDT.replace('₹', '')) && this.isNumber(this.totalINR.replace('₹', ''))) {
          this.confirmOrder = true;
        } else {
          this.$toast('必须输入数字');
        }
      } else {
        this.$toast('输入不能为空');
      }
    },
    sellSubmit() {
      this.confirmOrder = false;
    }
  }
};
</script>

<style lang="scss" scoped>
>>> .van-button--primary span {
  font-weight: 600;
}
>>> .van-field__control {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  &::placeholder {
    color: #bac7cf;
  }
}
.sell {
  background: url(../../assets/img/bg_sell@2x.png) no-repeat center top;
  background-size: 100%;
  h3 {
    font-size: 28px;
    padding: 22px 20px 0;
  }
  .line1 {
    width: 80%;
    border-radius: 4px;
    overflow: hidden;
    margin: 48px auto 30px;
    height: 70px;
    p:nth-child(1) {
      flex: 1;
      font-size: 12px;
      img {
        width: 26px;
        height: 26px;
        margin-right: 5px;
      }
    }
    p:nth-child(2) {
      flex: 2;
    }
    b {
      font-size: 30px;
      font-weight: 600;
    }
  }
  .main {
    background-color: #f7f8fc;
    border-top-left-radius: 0;
    .notice {
      color: #8f92a1;
      font-size: 12px;
      padding: 0 50px;
      line-height: 18px;
    }
    .exchange {
      position: relative;
      span {
        position: absolute;
        height: 26px;
        width: 26px;
        background: url(../../assets/img/exchang_icon@2x.png) no-repeat center;
        background-size: cover;
        top: 50%;
        transform: translateY(-50%);
        left: 16.6%;
        margin-left: -13px;
      }
    }
    .info {
      font-size: 12px;
      padding: 5px 10px;
    }
    .line2,
    .line3 {
      padding: 10px;
      height: 50px;
      margin-top: 20px;
      p {
        &:nth-child(1) {
          flex: 1;
          font-size: 12px;
        }
        &:nth-child(2) {
          flex: 2;
          color: #bac7cf;
        }
      }
    }
    .icons {
      display: flex;
      justify-content: center;
      margin: 30px auto 10px;
      img {
        width: 20px;
        height: 20px;
        margin: 0 2px;
      }
    }
    .msg {
      color: #8f92a1;
      margin-top: 12px;
      span {
        color: #6d4ffd;
      }
    }
  }
}

.confirmPopup {
  padding: 0 10px 10px;
  box-sizing: border-box;
  h4 {
    color: #14181f;
    font-size: 16px;
    padding: 30px 20px 20px;
  }
  .confirmOrderTit {
    background-color: #f7f8fc;
  }
  .confirmContent {
    background-color: #f7f8fc;
    margin: 0 10px 20px;
    padding: 0 20px;
    line-height: 50px;
    b {
      color: #4c528f;
      em {
        color: #8c9fad;
      }
    }
    div {
      border-top: 1px solid #e7ebee;
      display: flex;
      justify-content: space-between;
      i {
        font-size: 20px;
      }
    }
    p {
      display: flex;
      justify-content: space-between;
      span {
        em {
          color: #bac7cf;
          text-decoration: line-through;
          display: inline-block;
          margin-right: 3px;
        }
      }
    }
  }
}
</style>
