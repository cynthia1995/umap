<template>
  <div class="verificationCode paddingtop-50">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-white@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 class="title text-center fontsize18 white-color marginbottom-20 fontweight-m">{{ title }}</h3>
    <section class="main">
      <van-form @submit="onSubmit">
        <van-field v-model="form.code" name="code" label="E-mail/Mobile OTP" placeholder="Please Enter E-mail/Mobile OTP" :error-message="errMsg.code" @blur="checkCode($event)">
          <template #button>
            <van-button @click="send()" :disabled="disabled" size="small" type="primary">{{ btnTxt }}</van-button>
          </template>
        </van-field>
        <van-button type="primary" block native-type="submit">Confirm</van-button>
      </van-form>
    </section>
  </div>
</template>

<script>
import { verifyRegister } from '@/api/api';
export default {
  name: 'Login',
  data() {
    return {
      title: 'Create a free acount',
      checked: false,
      flag: false,
      disabled: false,
      btnTxt: 'send',
      countDown: 5,
      form: {
        code: ''
      },
      errMsg: {
        code: ''
      },
      phone: ''
    };
  },
  created() {
    this.phone = this.$route.query.phone;
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    checkCode(event) {
      if (!this.form.code) {
        this.errMsg.code = 'E-mail cannot be empty';
      } else {
        this.errMsg.code = '';
      }
    },
    send() {
      const countDown = this.countDown;
      this.disabled = true;
      this.btnTxt = 'Resend in ' + this.countDown + 's';
      let timer = setInterval(() => {
        this.countDown--;
        if (this.countDown >= 0) {
          this.btnTxt = 'Resend in ' + this.countDown + 's';
          this.disabled = true;
        } else {
          this.countDown = countDown;
          this.disabled = false;
          this.btnTxt = 'Resend';
          clearInterval(timer);
        }
      }, 1000);
    },
    onSubmit() {
      this.checkCode();
      verifyRegister({
        code: this.form.code,
        phone: this.phone
      })
        .then(res => {
          if (res.success) {
            this.$toast(res.message);
          } else {
            this.$toast(res.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.verificationCode {
  background: url(../../assets/img/Base@2x.png) no-repeat center top;
  background-size: 100%;
}
/deep/ .van-button--primary {
  margin-top: 30px;
}
/deep/ .van-cell {
  .van-button--primary {
    margin-top: 0;
    width: 115px;
    background-color: #ffffff;
    border: 1px solid #6d4ffd;
    color: #6d4ffd;
    font-size: 14px;
    height: 30px;
  }
  /deep/ .van-button--disabled {
    background-color: #e7ebee;
    color: #bac7cf;
    border: 0;
  }
}
</style>
