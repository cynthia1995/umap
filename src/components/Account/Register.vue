<template>
  <div class="register paddingtop-50">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-white@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <h3 class="title text-center fontsize18 white-color marginbottom-20 fontweight-m">{{ title }}</h3>
    <section class="main">
      <van-form @submit="onSubmit">
        <van-field v-model="form.email" name="email" label="Email" placeholder="Please Enter Your Email" @blur="checkEmail($event)" :error-message="errMsg.email" />
        <van-field
          v-model="form.password"
          name="password"
          label="Password"
          placeholder="Please Enter Your Password"
          type="password"
          @blur="checkPassword($event)"
          :error-message="errMsg.password"
        />
        <van-field v-model="form.phone" name="mobile" label="Phone Number" placeholder="Please Enter Your Phone Number" @blur="checkPhone($event)" :error-message="errMsg.phone" />
        <van-field
          style="display:none"
          v-model="form.referralId"
          name="referral"
          label="Referral ID(Optional)"
          placeholder="Please Enter Referral ID"
          :rules="[{ required: false }]"
        />
        <van-button type="primary" block native-type="submit">Register</van-button>
        <div class="agree">
          <van-checkbox name="agree" v-model="checked" shape="square"></van-checkbox>
          <label for="agree">
            I have read and agreed to the
            <router-link @click.native="saveForm" to="/termofservice">Terms of Service</router-link>
            of MAPU
          </label>
        </div>
      </van-form>
    </section>
  </div>
</template>

<script>
import { register } from '@/api/api';
export default {
  name: 'Login',
  data() {
    return {
      title: 'Create a free acount',
      checked: true,
      emailPattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
      phonePattern: /^[6-9]\d{9}$/,
      form: {
        email: '',
        phone: '',
        password: '',
        referralId: ''
      },
      errMsg: {
        email: '',
        phone: '',
        password: ''
      }
    };
  },
  created() {
    this.$store.state.loading = false;
    const registerForm = this.getStore('register_form');
    if (registerForm) {
      console.log(registerForm);
      this.form = JSON.parse(registerForm);
    }
    this.removeStore('register_form');
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    checkEmail(event) {
      if (!this.form.email) {
        this.errMsg.email = 'E-mail cannot be empty';
      } else {
        if (!this.emailPattern.test(this.form.email)) {
          this.errMsg.email = 'E-mail format is incorrect';
        } else {
          this.errMsg.email = '';
        }
      }
    },
    checkPhone(event) {
      if (!this.form.phone) {
        this.errMsg.phone = 'Phone Number cannot be empty';
      } else {
        // this.errMsg.phone = '';
        if (!this.phonePattern.test(this.form.phone)) {
          this.errMsg.phone = 'Phone Number format is incorrect';
        } else {
          this.errMsg.phone = '';
        }
      }
    },
    checkPassword(event) {
      if (!this.form.password) {
        this.errMsg.password = 'Password cannot be empty';
      } else {
        this.errMsg.password = '';
      }
    },
    saveForm() {
      this.setStore('register_form', this.form);
    },
    onSubmit() {
      this.checkEmail();
      this.checkPhone();
      this.checkPassword();
      if (!this.errMsg.email && !this.errMsg.phone && !this.errMsg.password) {
        if (this.checked) {
          register(this.form)
            .then(res => {
              if (res.code == 200) {
                this.$router.push({
                  path: '/verificationcode',
                  query: {
                    email: this.form.email,
                    phone: this.form.phone
                  }
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$toast('Please read and agree to the terms of service first');
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  background: url(../../assets/img/Base@2x.png) no-repeat center top;
  background-size: 100%;
}
.agree {
  margin-top: 10px;
  height: 14px;
  /deep/ .van-checkbox {
    height: 14px;
    width: 14px;
    display: inline-block;
  }
}
.agree label {
  padding-left: 5px;
  font-size: 10px;
  line-height: 14px;
  display: inline-block;
  position: relative;
  top: -4px;
  color: #8c9fad;
  a {
    color: #225bff;
  }
}
/deep/ .van-checkbox__icon .van-icon {
  display: none;
}
/deep/ .van-checkbox__icon {
  background: url(../../assets/img/CheckIcon_n@2x.png) no-repeat left center;
  background-size: 14px;
  position: relative;
  top: -3px;
}
/deep/ .van-checkbox__icon--checked {
  background: url(../../assets/img/CheckIcon_s@2x.png) no-repeat left center;
  background-size: 14px;
}
/deep/ .van-button--primary {
  margin-top: 30px;
}
</style>
