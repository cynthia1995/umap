<template>
  <div class="account">
    <div class="infos padding-20">
      <div class="userInfo white-color">
        <img v-if="isLogin" class="left" src="../../assets/img/user_Headimage@2x.png" alt="" />
        <img v-else class="left" src="../../assets/img/user_Headimage@2x.png" alt="" />
        <p>
          <b v-if="isLogin" class="userEmail fontweight-m fontsize20 block" style="margin-bottom: 2px;">{{ userInfo.email }}</b>
          <b v-else class="fontweight-m fontsize24 block" style="line-height: 60px;" @click="toLogin">Please log In</b>
          <span v-if="isLogin">{{ userInfo.phone.substr(0, 3) + '****' + userInfo.phone.substr(7) }}</span>
        </p>
      </div>
      <div class="accountInfo white-color flex">
        <div class="totalSoldUSDT">
          <em class="fontsize12">TOTAL SOLD USDT</em>
          <!-- <count-to
            v-if="isLogin"
            class="fontweight-m fontsize28 color-00d0ff block"
            :decimals="2"
            :start-val="0"
            :end-val="userInfo.totalSoldUsdt"
            :duration="2000"
          /> -->
          <span class="fontweight-m fontsize28 color-00d0ff block">{{ isLogin ? userInfo.totalSoldUsdt : '?' }}</span>
        </div>
        <div class="TotalINRAmount">
          <em class="fontsize12">TOTAL AMOUNT(INR)</em>
          <!-- <count-to v-if="isLogin" class="fontweight-m fontsize28 color-00d0ff block" :decimals="2" :start-val="0" :end-val="userInfo.totalAmount" :duration="1000" /> -->
          <span class="fontweight-m fontsize28 color-00d0ff block">{{ isLogin ? userInfo.totalAmount : '?' }}</span>
        </div>
      </div>
    </div>
    <ul class="userList padding-20">
      <li v-for="(item, index) in list" :key="index" @click="navigate(item.path)">
        <b class="fontweight-m fontsize16">{{ item.name }}</b>
        <span v-if="noAdded && index == 0" class="color-ff5a75 fontweight-m">Not added</span>
        <img :src="item.img" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/api';
import CountTo from 'vue-count-to';
import Cookies from 'js-cookie';
export default {
  name: 'Account',
  components: {
    CountTo
  },
  data() {
    return {
      isLogin: false,
      noAdded: false,
      userInfo: {},
      list: [
        {
          name: 'Payment Method(s)',
          path: '/payment',
          img: require('@/assets/img/icon_payment@2x.png')
        },
        {
          name: 'Help & Support',
          path: '/helpandsupport',
          img: require('@/assets/img/icon_Help@2x.png')
        },
        {
          name: 'About Us',
          path: '/aboutus',
          img: require('@/assets/img/icon_about@2x.png')
        },
        // {
        //   name: 'Invite & Earn 20% Fees',
        //   path: '/invite',
        //   img: require('@/assets/img/icon_Invite@2x.png')
        // },
        {
          name: 'Account Settings',
          path: '/settings',
          img: require('@/assets/img/icon_Settings@2x.png')
        }
      ]
    };
  },
  created() {
    if (Cookies.get('token')) {
      getUserInfo()
        .then(res => {
          if (res.code == 200) {
            this.isLogin = true;
            this.userInfo = res.result;
            if (this.userInfo.paymentMethod && this.userInfo.paymentMethod.length > 0) {
              this.noAdded = false;
            } else {
              this.noAdded = true;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  methods: {
    navigate(path) {
      this.$router.push({
        path: path,
        query: {}
      });
    },
    toLogin() {
      this.$router.push({
        path: '/login'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.infos {
  background: url(../../assets/img/bg@2x.png) no-repeat center top;
  background-size: 100%;
}
.userInfo {
  padding: 42px 15px 0;
  img {
    width: 60px;
    height: 60px;
  }
  p {
    margin-left: 80px;
    overflow: hidden;
    .userEmail {
      margin-top: 7px;
      line-height: 32px;
    }
  }
}
.accountInfo {
  background: url(../../assets/img/account_card@2x.png) no-repeat center top;
  margin-top: 40px;
  padding: 26px 25px;
  background-size: 100%;
  justify-content: space-between;
  span {
    margin-top: 5px;
  }
}
.userList {
  margin-top: 10px;
  li {
    height: 30px;
    line-height: 30px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    b {
      flex: 4;
    }
    img {
      height: 30px;
      width: 30px;
    }
    span {
      position: absolute;
      right: 40px;
      top: 15px;
    }
  }
}
</style>
