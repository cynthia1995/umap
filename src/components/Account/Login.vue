<template>
  <div class="login paddingtop-50">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <img src="../../assets/img/Left-white@2x.png" alt="" />
      </template>
    </van-nav-bar>
    <img class="logo" src="../../assets/img/logo@2x.png" alt="" />
    <section class="main">
      <van-tabs v-model="active">
        <van-tab title="Email">
          <van-form @submit="onSubmit">
            <van-field
              :foucs="focus()"
              v-model="form.email"
              name="email"
              label="Email"
              placeholder="Please Enter Your Email"
              :rules="[{ required: true, message: 'Please Enter Your Email' }]"
            />
            <van-field
              :foucs="focus()"
              v-model="form.password"
              name="password"
              label="Password"
              placeholder="Please Enter Your Password"
              :rules="[{ required: true, message: 'Please Enter Your Password' }]"
            />
            <van-button type="primary" block native-type="submit">Log In</van-button>
          </van-form>
        </van-tab>
        <van-tab title="Mobile">
          <van-form @submit="onSubmit">
            <van-field
              :foucs="focus()"
              v-model="form.mobile"
              name="mobile"
              label="Mobile"
              placeholder="Please Enter Your Mobile"
              :rules="[{ required: true, message: 'Please Enter Your Mobile' }]"
            />
            <van-field
              :foucs="focus()"
              v-model="form.password"
              name="password"
              label="Password"
              placeholder="Please Enter Your Password"
              :rules="[{ required: true, message: 'Please Enter Your Password' }]"
            />
            <van-button type="primary" block native-type="submit">Log In</van-button>
          </van-form>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      title: 'Transfer USDT',
      active: 0,
      form: {
        email: '',
        mobile: '',
        password: ''
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    focus() {
      console.log("event");
    },
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: url(../../assets/img/Base@2x.png) no-repeat center top;
  background-size: 100%;
  .title {
    font-size: 28px;
  }
}
.logo {
  width: 133px;
  margin: 100px auto 150px;
}
section.main {
  padding-top: 0;
  overflow: visible;
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
</style>
