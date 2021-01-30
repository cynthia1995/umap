<template>
  <div class="orders">
    <h3 class="fontweight-m fontsize28">Orders</h3>
    <van-tabs v-model="active">
      <van-tab title="Open">
        <div v-if="isLogin">
          <div class="noOpen" v-if="noOpen">
            <p class="text-center">
              <b class="fontsize18 block marginbottom-10 fontweight-m">Looks like there’s no trades here</b>
              <span class="color-8f92a1">Sell USDT to see all your trades here</span>
            </p>
          </div>
          <div class="open subTabs" v-else>
            <van-tabs v-model="openActive" type="card">
              <van-tab title="ERC20">
                <ul class="orderList">
                  <li v-for="(item, index) in orderList" :key="index" class="marginbottom-10 flex" @click="orderDetail(item.id)">
                    <p class="text-center">
                      <b class="fontsize12">
                        ₹
                        <span class="fontsize16 fontweight-m">{{ item.price }}</span>
                        <em class="block margintop-10 color-8c9fad">PRICE</em>
                      </b>
                    </p>
                    <p class="text-center">
                      <b class="fontsize12">
                        <span class="fontsize16 fontweight-m">{{ item.quantity }}</span>
                        <em class="block margintop-10 color-8c9fad">QUANTITY</em>
                      </b>
                    </p>
                    <p class="status fontsize16 flex text-left">
                      <span :class="'color-6d4ffd fontweight-m status' + item.status" v-if="item.status == '0'">Transfer USDT</span>
                      <span :class="'color-03ad8f fontweight-m status' + item.status" v-else-if="item.status == '1'">Under Review</span>
                      <span :class="'color-03ad8f fontweight-m status' + item.status" v-else-if="item.status == '2'">Wait Payment</span>
                      <span :class="'white-color fontweight-m text-center status' + item.status" v-else-if="item.status == '3'">Payment Confirm</span>
                    </p>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="TRC20">
                <ul class="orderList">
                  <li v-for="(item, index) in orderList" :key="index" class="marginbottom-10 flex" @click="orderDetail(item.id)">
                    <p class="text-center">
                      <b class="fontsize12">
                        ₹
                        <span class="fontsize16 fontweight-m">{{ item.price }}</span>
                        <em class="block margintop-10 color-8c9fad">PRICE</em>
                      </b>
                    </p>
                    <p class="text-center">
                      <b class="fontsize12">
                        <span class="fontsize16 fontweight-m">{{ item.quantity }}</span>
                        <em class="block margintop-10 color-8c9fad">QUANTITY</em>
                      </b>
                    </p>
                    <p class="status fontsize16 flex text-left">
                      <span :class="'color-6d4ffd fontweight-m status' + item.status" v-if="item.status == '0'">Transfer USDT</span>
                      <span :class="'color-03ad8f fontweight-m status' + item.status" v-else-if="item.status == '1'">Under Review</span>
                      <span :class="'color-03ad8f fontweight-m status' + item.status" v-else-if="item.status == '2'">Wait Payment</span>
                      <span :class="'white-color fontweight-m text-center status' + item.status" v-else-if="item.status == '3'">Payment Confirm</span>
                    </p>
                  </li>
                </ul>
              </van-tab>
            </van-tabs>
          </div>
        </div>
        <div class="noLogin" v-else>
          <p class="text-center color-8f92a1 marginbottom-20">Please login with your account to access your orders.</p>
          <van-button type="primary" block @click="toLogin">Log In</van-button>
        </div>
      </van-tab>
      <van-tab title="Completed">
        <div v-if="isLogin">
          <div class="noCompleted" v-if="noCompleted">
            <p class="text-center">
              <b class="fontsize18 block marginbottom-10 fontweight-m">Looks like there’s no trades here</b>
              <span class="color-8f92a1">Sell USDT to see all your trades here</span>
            </p>
          </div>
          <div class="completed subTabs" v-else></div>
        </div>
        <div class="noLogin" v-else>
          <p class="text-center color-8f92a1 marginbottom-20">Please login with your account to access your orders.</p>
          <van-button type="primary" block @click="toLogin">Log In</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data() {
    return {
      active: 0,
      openActive: 0,
      isLogin: true,
      noOpen: false,
      noCompleted: false,
      orderList: [
        {
          id: 2124,
          price: '84.22',
          quantity: '4000',
          status: '0'
        },
        {
          id: 523,
          price: '84.22',
          quantity: '4000',
          status: '1'
        },
        {
          id: 545,
          price: '84.22',
          quantity: '4000',
          status: '2'
        },
        {
          id: 897,
          price: '84.22',
          quantity: '4000',
          status: '3'
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    toLogin() {
      this.$router.push({
        path: '/login',
        query: {}
      });
    },
    orderDetail(id) {
      this.$router.push('/orderdetail/' + id);
    }
  }
};
</script>

<style lang="scss" scoped>
.orders {
  background-color: #f7f8fc;
  min-height: 100%;
  h3 {
    padding: 20px 20px 10px;
    background-color: #ffffff;
  }
}
.noLogin {
  padding: 200px 50px 0;
}
.noOpen,
.noCompleted {
  padding: 200px 20px 0;
}
/deep/ .van-tabs__wrap {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}
/deep/ .van-tab {
  font-size: 18px;
  color: #bac7cf;
  flex: 0;
  padding: 0 25px;
  &.van-tab--active {
    color: #1d2243;
  }
  span {
    font-weight: 600;
  }
}
/deep/ .van-tabs__line {
  background-color: #6730ff;
  width: 10px;
}
/deep/ .van-tabs__content {
  padding: 10px 20px 0;
}
.subTabs {
  /deep/ .van-tabs__nav--card {
    border: none;
    background-color: transparent;
    height: 34px;
  }
  /deep/ .van-tab {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    margin: 0 5px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    font-weight: 600;
    border-radius: 4px;
    flex: 1;
    &.van-tab--active {
      color: #6d4ffd;
      border-color: #6d4ffd;
      background-color: transparent;
    }
  }
  /deep/ .van-tabs__content {
    padding: 20px 0;
  }
}
.orderList li {
  background-color: #ffffff;
  padding: 25px 15px;
  justify-content: space-between;
  p {
    flex: 1;
  }
  .status {
    align-items: center;
    flex: 2.5;
    justify-content: flex-end;
    span {
      background: url(../../assets/img/arrow@2x.png) no-repeat right center;
      background-size: 22px;
      padding-right: 28px;
    }
    .status3 {
      padding: 0;
      background: #ff5a75;
      border-radius: 4px;
      font-size: 14px;
      height: 30px;
      width: 130px;
      line-height: 30px;
    }
  }
}
</style>
