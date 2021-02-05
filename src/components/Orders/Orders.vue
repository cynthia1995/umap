<template>
  <div class="orders">
    <h3 class="flex">
      <b class="fontweight-m fontsize28">Orders</b>
      <span class="fontsize12 color-8c9fad">Tether-USDT</span>
    </h3>
    <van-tabs v-model="active">
      <van-tab title="Open">
        <div v-if="isLogin">
          <div class="noOpen" v-if="noOpen">
            <p class="text-center">
              <img src="../../assets/img/noOrder@2x.png" alt="" />
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
          <img src="../../assets/img/noLogin@2x.png" alt="" />
          <p class="text-center color-8f92a1 marginbottom-20">Please login with your account to access your orders.</p>
          <van-button type="primary" block @click="toLogin">Log In</van-button>
        </div>
      </van-tab>
      <van-tab title="Completed">
        <div v-if="isLogin">
          <div class="noCompleted" v-if="noCompleted">
            <p class="text-center">
              <img src="../../assets/img/noOrder@2x.png" alt="" />
              <b class="fontsize18 block marginbottom-10 fontweight-m">Looks like there’s no trades here</b>
              <span class="color-8f92a1">Sell USDT to see all your trades here</span>
            </p>
          </div>
          <div class="completed subTabs" v-else>
            <van-tabs v-model="completedActive" type="card">
              <van-tab title="ERC20">
                <ul class="orderList">
                  <li v-for="(item, index) in orderList2" :key="index" class="marginbottom-10 flex" @click="orderDetail(item.id)">
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
                      <span :class="'color-6d4ffd fontweight-m status' + item.status" v-if="item.status == '4'">Completed</span>
                      <span :class="'color-8c9fad fontweight-m status' + item.status" v-else-if="item.status == '5'">Canceled</span>
                    </p>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="TRC20">
                <ul class="orderList">
                  <li v-for="(item, index) in orderList2" :key="index" class="marginbottom-10 flex" @click="orderDetail(item.id)">
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
                      <span :class="'color-6d4ffd fontweight-m status' + item.status" v-if="item.status == '4'">Completed</span>
                      <span :class="'color-8c9fad fontweight-m status' + item.status" v-else-if="item.status == '5'">Canceled</span>
                    </p>
                  </li>
                </ul>
              </van-tab>
            </van-tabs>
          </div>
        </div>
        <div class="noLogin" v-else>
          <img src="../../assets/img/noLogin@2x.png" alt="" />
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
      completedActive: 0,
      isLogin: true,
      noOpen: false,
      noCompleted: true,
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
      ],
      orderList2: [
        {
          id: 2124,
          price: '84.22',
          quantity: '4000',
          status: '4'
        },
        {
          id: 523,
          price: '84.22',
          quantity: '4000',
          status: '5'
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
    justify-content: space-between;
    span {
      width: 114px;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      background: url(../../assets/img/USDT@2x.png) no-repeat 10px center #f7f8fc;
      background-size: 18px;
      text-indent: 32px;
    }
  }
}
.noLogin {
  padding: 80px 50px 0;
  img {
    width: 230px;
    margin: 0 auto 50px;
  }
  /deep/ .van-button--primary {
    width: 140px;
    height: 40px;
    margin: 0 auto;
  }
}
.noOpen,
.noCompleted {
  padding: 40px 20px 0;
  img {
    width: 255px;
    margin: 0 auto 20px;
  }
}
/deep/ .van-tabs__nav--line {
  padding: 0 20px 15px;
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
  padding: 0;
  margin-right: 35px;
  span {
    font-weight: 400;
  }
  &.van-tab--active {
    color: #1d2243;
    span {
      font-weight: 600;
    }
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
    margin: 0;
  }
  /deep/ .van-tabs__wrap {
    border-radius: 0;
  }
  /deep/ .van-tab {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    margin: 0;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    padding: 0 4px;
    flex: 1;
    &.van-tab--active {
      color: #6d4ffd;
      border-color: #6d4ffd;
      background-color: transparent;
    }
    &:nth-child(1) {
      margin-right: 5px;
    }
    &:nth-child(2) {
      margin-left: 5px;
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
