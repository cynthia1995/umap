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
            <van-field
              @focus="focus($event)"
              v-model="form.email"
              name="email"
              label="Email"
              placeholder="Please Enter Your Email"
              @blur="checkEmail($event)"
              :error-message="errMsg.email"
            />
            <van-field
              @focus="focus($event)"
              v-model="form.password"
              name="password"
              label="Password"
              placeholder="Please Enter Your Password"
              :type="show ? 'text' : 'password'"
              :rules="[{ required: true, message: 'Please Enter Your Password' }]"
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
                <router-link to="/home">Terms of Service</router-link>
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
              :rules="[{ required: true, message: 'Please Enter Your Mobile' }]"
            />
            <van-field
              @focus="focus($event)"
              v-model="form.password"
              name="password"
              label="Password"
              placeholder="Please Enter Your Password"
              :type="show ? 'text' : 'password'"
              :rules="[{ required: true, message: 'Please Enter Your Password' }]"
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
                <router-link to="/home">Terms of Service</router-link>
                of MAPU
              </label>
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
      <router-link class="toRegister block white-color margin0auto text-center radius4" to="/register">Free Registration</router-link>
    </section>
  </div>
</template>

<script>
import { login } from '@/api/api';
import Cookies from 'js-cookie';
export default {
  name: 'Login',
  data() {
    return {
      active: 0,
      checked: false,
      show: false,
      emailPattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
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
      }
    };
  },
  created() {
    this.$store.state.loading = false;
  },
  mounted() {},
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
      console.log('event');
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
    onSubmit() {
      if (this.checked) {
        login(this.form)
          .then(res => {
            if (res.success) {
              Cookies.set('token', res.result.token, { expires: 7 });
              this.$router.push({ path: '/home' });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$toast('请阅读条款');
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
