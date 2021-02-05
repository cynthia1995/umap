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
        <van-field v-model="form.email" name="email" label="Email" placeholder="Please Enter Your Email" :rules="[{ required: true, message: 'Please Enter Your Email' }]" />
        <van-field
          v-model="form.password"
          name="password"
          label="Password"
          placeholder="Please Enter Your Password"
          type="password"
          :rules="[{ required: true, message: 'Please Enter Your Password' }]"
        />
        <van-field
          v-model="form.mobile"
          name="mobile"
          label="Phone Number"
          placeholder="Please Enter Your Phone Number"
          :rules="[{ required: true, message: 'Please Enter Your Phone Number' }]"
        />
        <van-field v-model="form.referral" name="referral" label="Referral ID(Optional)" placeholder="Please Enter Referral ID" :rules="[{ required: false }]" />
        <van-button type="primary" block native-type="submit">Register</van-button>
        <div class="agree">
          <van-checkbox name="agree" v-model="checked" shape="square"></van-checkbox>
          <label for="agree">
            I have read and agreed to the
            <router-link to="/home">Terms of Service</router-link>
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
      checked: false,
      form: {
        email: '',
        mobile: '',
        password: '',
        referralId: ''
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    register() {
      register(this.form)
        .then(res => {
          if (res.code === 200) {
            this.$router.push({
              path: '/verificationcode',
              query: {}
            });
            console.log(res.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSubmit() {
      if (this.checked) {
        this.register();
      } else {
        this.$toast('请阅读条款');
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
