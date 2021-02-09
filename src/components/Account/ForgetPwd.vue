<template>
  <div class="forgetPwd paddingtop-50">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-white@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 class="title text-center fontsize18 white-color marginbottom-20 fontweight-m">{{ title }}</h3>
    <section class="main">
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.phone"
          name="phone"
          label="Phone Number"
          placeholder="Please Enter your registered phone"
          :rules="[{ required: true, message: 'registered phone cannot be empty' }]"
        />
        <van-field
          v-model="form.smsCode"
          name="smsCode"
          label="Verfication"
          placeholder="Phone Verificaiton code"
          :rules="[{ required: true, message: 'Phone Verificaiton code cannot be empty' }]"
        >
          <template #button>
            <van-button @click="send()" :disabled="disabled" size="small" type="primary">{{ btnTxt }}</van-button>
          </template>
        </van-field>
        <van-field
          v-model="form.password"
          name="password"
          label="Reset Pssword"
          placeholder="Enter the new Password"
          :rules="[{ required: true, message: 'New Password cannot be empty' }]"
        />
        <van-field
          v-model="form.newpwd"
          name="newpwd"
          label="Re-Enter the new Password"
          placeholder="Re-Enter the new Password"
          :rules="[{ required: true, message: 'Re-Enter the new Password' }]"
        />
        <van-button type="primary" block native-type="submit">Next</van-button>
      </van-form>
    </section>
  </div>
</template>

<script>
import { resetPwd, verifyPhone } from '@/api/api';
export default {
  name: 'Login',
  data() {
    return {
      title: 'Forget Password',
      checked: false,
      disabled: false,
      btnTxt: 'send',
      countDown: 60,
      form: {
        phone: '',
        smsCode: '',
        password: '',
        newpwd: ''
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
      if (this.form.phone) {
        verifyPhone({
          phone: this.form.phone
        }).then(res => {
          if (res.code == 200) {
            this.$toast('Verification code sent successfully');
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
          }
        });
      } else {
        this.$toast('Please input mobile phone number first');
      }
    },
    onSubmit() {
      console.log(this.form);
      if (this.form.password === this.form.newpwd) {
        resetPwd(this.form)
          .then(res => {
            if (res.code == 200) {
              this.$toast('Password modified successfully');
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$toast('The two passwords are inconsistent');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.forgetPwd {
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
