<template>
  <div class="login paddingtop-50">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-white@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <img class="logo" src="../../assets/img/logo_login@2x.png" alt="" />
    <section class="main">
      <van-tabs v-model="active" @change="changeType">
        <van-tab title="Email">
          <van-form @submit="onSubmit">
            <!-- <van-field
              @focus="focus($event)"
              v-model="form.email"
              name="email"
              label="Email"
              placeholder="Please Enter Your Email"
              @blur="checkEmail($event)"
              :error-message="errMsg.email"
            /> -->
            <van-field
              @focus="focus($event)"
              v-model="form.email"
              name="email"
              label="Email"
              placeholder="Please Enter Your Email"
              :rules="[{ required: true, message: 'E-mail cannot be empty' }]"
            />
            <van-field
              @focus="focus($event)"
              v-model="form.password"
              name="password"
              label="Password"
              placeholder="Please Enter Your Password"
              :type="show ? 'text' : 'password'"
              :rules="[{ required: true, message: 'Password cannot be empty' }]"
            >
              <template #right-icon>
                <img v-show="show" @click="toggleEye" src="../../assets/img/login_show_icon@2x.png" alt="" />
                <img v-show="!show" @click="toggleEye" src="../../assets/img/login_close_icon@2x.png" alt="" />
              </template>
            </van-field>
            <router-link class="color-6d4ffd block margintop-10 fontweight-m" to="/forgetpwd">Forget Password?</router-link>
            <van-button :disabled="form.email && form.password ? false : true" type="primary" block native-type="submit">Log In</van-button>
            <div class="agree">
              <van-checkbox name="agree" v-model="checked" shape="square"></van-checkbox>
              <label for="agree">
                I have read and agreed to the
                <router-link @click.native="saveForm" to="/termofservice">Terms of Service</router-link>
                of MAPU
              </label>
            </div>
          </van-form>
        </van-tab>
        <van-tab title="Mobile">
          <van-form @submit="onSubmit">
            <van-field
              @focus="focus($event)"
              v-model="form.phone"
              name="phone"
              label="Mobile"
              placeholder="Please Enter Your Mobile"
              :rules="[{ required: true, message: 'Mobile cannot be empty' }]"
            />
            <van-field
              @focus="focus($event)"
              v-model="form.password"
              name="password"
              label="Password"
              placeholder="Please Enter Your Password"
              :type="show ? 'text' : 'password'"
              :rules="[{ required: true, message: 'Password cannot be empty' }]"
            >
              <template #right-icon>
                <img v-show="show" @click="toggleEye" src="../../assets/img/login_show_icon@2x.png" alt="" />
                <img v-show="!show" @click="toggleEye" src="../../assets/img/login_close_icon@2x.png" alt="" />
              </template>
            </van-field>
            <router-link class="color-6d4ffd block margintop-10 fontweight-m" to="/forgetpwd">Forget Password?</router-link>
            <van-button :disabled="form.phone && form.password ? false : true" type="primary" block native-type="submit">Log In</van-button>
            <div class="agree">
              <van-checkbox name="agree" v-model="checked" shape="square"></van-checkbox>
              <label for="agree">
                I have read and agreed to the
                <router-link @click.native="saveForm" to="/termofservice">Terms of Service</router-link>
                of MAPU
              </label>
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
      <router-link v-show="hideshow" class="toRegister block white-color margin0auto text-center radius4" to="/register">Free Registration</router-link>
    </section>
  </div>
</template>

<script>
import { login } from '@/api/api';
// import Cookies from 'js-cookie';
export default {
  name: 'Login',
  data() {
    return {
      active: 0,
      checked: true,
      show: false,
      emailPattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      phonePattern: /^(6|7|8|9)\\d{9}$/,
      form: {
        email: '',
        phone: '',
        password: ''
      },
      errMsg: {
        email: '',
        phone: '',
        password: ''
      },
      docmHeight: document.documentElement.clientHeight || document.body.clientHeight,
      showHeight: document.documentElement.clientHeight || document.body.clientHeight,
      hideshow: true //显示或者隐藏footer
    };
  },
  watch: {
    //监听显示高度
    showHeight: function() {
      if (this.docmHeight > this.showHeight) {
        //隐藏
        this.hideshow = false;
      } else {
        //显示
        this.hideshow = true;
      }
    }
  },
  created() {
    this.$store.state.loading = false;
    const loginActive = this.getStore('login_active');
    if (loginActive) {
      this.active = parseInt(loginActive);
      if (this.active === 0) {
        this.form = JSON.parse(this.getStore('emailform'));
      } else if (this.active === 1) {
        this.form = JSON.parse(this.getStore('mobileform'))
      }
    }
    window.localStorage.clear();
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.showHeight = document.documentElement.clientHeight || document.body.clientHeight;
      })();
    };
  },
  methods: {
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
    onClickLeft() {
      this.$router.go(-1);
    },
    focus(event) {
      document.getElementsByClassName('main')[0].className = 'main slideUp';
      const toRegister = document.getElementsByClassName('toRegister')[0];
      toRegister.className = 'toRegister block white-color margin0auto text-center radius4 fixed';
    },
    toggleEye() {
      this.show = !this.show;
    },
    changeType() {
      this.form = {
        email: '',
        phone: '',
        password: ''
      };
    },
    saveForm() {
      if (this.active === 0) {
        this.setStore('emailform', this.form);
      } else if (this.active === 1) {
        this.setStore('mobileform', this.form);
      }
      this.setStore('login_active', this.active);
    },
    onSubmit() {
      if (this.checked) {
        login(this.form)
          .then(res => {
            if (res.success) {
              this.setStoreToken(res.result.token)
              // Cookies.set('token', res.result.token, { expires: 7 });
              this.$router.push({ path: '/home' });
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
};
</script>

<style lang="scss" scoped>
.login {
  background: url(../../assets/img/Base@2x.png) no-repeat center top;
  background-size: 100%;
  padding-bottom: 180px;
  .title {
    font-size: 28px;
  }
}
.logo {
  width: 100px;
  margin: 60px auto 150px;
}
.main {
  padding-top: 0;
  overflow: visible;
  position: absolute;
  top: 380px;
  transition: ease 0.5s;
  width: 100%;
  box-sizing: border-box;
}
.van-form {
  padding-top: 30px;
}
.slideUp {
  top: 90px;
}
.van-tabs {
  top: -44px;
}
/deep/ .van-tabs__nav {
  background-color: transparent;
  span {
    color: #bac7cf;
    font-size: 16px;
  }
}
/deep/ .van-tab--active {
  span {
    color: #ffffff;
    font-weight: 600;
  }
}
/deep/ .van-tabs__line {
  width: 10px;
  height: 3px;
  background-color: #00d0ff;
  bottom: 17px;
}
/deep/ .van-button--primary {
  margin-top: 30px;
}
.van-form {
  /deep/ .van-button--disabled {
    color: #bac7cf;
    background-color: #e7ebee;
  }
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
/deep/ .van-field__right-icon {
  img {
    width: 20px;
    height: 20px;
  }
}
.toRegister {
  background-color: #00d0ff;
  width: 140px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  &.fixed {
    position: fixed;
  }
}
</style>
