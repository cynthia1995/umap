<template>
  <div class="verificationCode paddingtop-50">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-white@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 class="title text-center fontsize18 white-color marginbottom-20 fontweight-m">{{title}}</h3>
    <section class="main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.code"
          name="code"
          label="E-mail/Mobile OTP"
          placeholder="Please Enter E-mail/Mobile OTP"
          :rules="[{ required: true, message: 'Please Enter E-mail/Mobile OTP' }]"
        >
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
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
      console.log(this.form);
      // if (this.checked) {
      //   console.log(this.form);
      // } else {
      //   this.$toast('请阅读条款');
      // }
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
  }
  /deep/ .van-button--disabled {
    background-color: #e7ebee;
    color: #bac7cf;
    border: 0;
  }
}
</style>
