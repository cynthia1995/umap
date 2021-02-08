<template>
  <div class="orders">
    <h3 class="flex">
      <b class="fontweight-m fontsize28">Orders</b>
      <span class="fontsize12 color-8c9fad">Tether-USDT</span>
    </h3>
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="Open">
        <div v-if="isLogin">
          <NoOrder v-if="noOpen" style="margin-top: 10px;"></NoOrder>
          <div class="open subTabs" v-else>
            <van-tabs v-model="openActive" type="card">
              <van-tab v-for="(item, index) in addressType" :title="item" :key="index">
                <ul class="orderList" v-if="openList[item] && openList[item].length > 0">
                  <li v-for="(subItem, subIndex) in openList[item]" :key="subIndex" class="marginbottom-10 flex" @click="orderDetail(subItem.goodsId)">
                    <p class="text-center">
                      <b class="fontsize12">
                        ₹
                        <span class="fontsize16 fontweight-m">{{ subItem.price }}</span>
                        <em class="block margintop-10 color-8c9fad">PRICE</em>
                      </b>
                    </p>
                    <p class="text-center">
                      <b class="fontsize12">
                        <span class="fontsize16 fontweight-m">{{ subItem.quantity }}</span>
                        <em class="block margintop-10 color-8c9fad">QUANTITY</em>
                      </b>
                    </p>
                    <p class="status fontsize16 flex text-left">
                      <span :class="'color-6d4ffd fontweight-m status' + subItem.status">{{ getStatus(subItem.status) }}</span>
                    </p>
                  </li>
                </ul>
                <NoOrder v-else></NoOrder>
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
          <NoOrder v-if="noCompleted" style="margin-top: 10px;"></NoOrder>
          <div class="completed subTabs" v-else>
            <van-tabs v-model="completedActive" type="card">
              <van-tab v-for="(item, index) in addressType" :title="item" :key="index">
                <ul class="orderList" v-if="completedList[item] && completedList[item].length > 0">
                  <li v-for="(subItem, subIndex) in completedList[item]" :key="subIndex" class="marginbottom-10 flex" @click="orderDetail(subItem.goodsId)">
                    <p class="text-center">
                      <b class="fontsize12">
                        ₹
                        <span class="fontsize16 fontweight-m">{{ subItem.price }}</span>
                        <em class="block margintop-10 color-8c9fad">PRICE</em>
                      </b>
                    </p>
                    <p class="text-center">
                      <b class="fontsize12">
                        <span class="fontsize16 fontweight-m">{{ subItem.quantity }}</span>
                        <em class="block margintop-10 color-8c9fad">QUANTITY</em>
                      </b>
                    </p>
                    <p class="status fontsize16 flex text-left">
                      <span :class="'color-6d4ffd fontweight-m status' + subItem.status">{{ getStatus(subItem.status) }}</span>
                    </p>
                  </li>
                </ul>
                <NoOrder v-else></NoOrder>
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
import { getOrders, getdict } from '@/api/api';
import NoOrder from '../NoOrder.vue';
export default {
  name: 'Orders',
  components: {
    NoOrder
  },
  data() {
    return {
      active: 0,
      openActive: 0,
      completedActive: 0,
      isLogin: true,
      noOpen: true,
      noCompleted: true,
      addressType: [],
      searchType: 'open',
      openList: {},
      completedList: {}
    };
  },
  created() {
    getdict({
      dictcode: 'addr_type'
    }).then(res => {
      for (let i = 0; i < res.result[0].itemList.length; i++) {
        this.addressType.push(res.result[0].itemList[i].itemText);
      }
    });
    this.getOrders();
  },
  mounted() {},
  methods: {
    getOrders() {
      const self = this;
      getOrders({
        searchType: self.searchType
      })
        .then(res => {
          if (res.code == 200) {
            if (self.searchType == 'open') {
              res.result.forEach(function(ele) {
                self.openList[ele.addressType] = ele.goodsList;
              });
              if (Object.keys(self.openList).length > 0) {
                self.noOpen = false;
              }
            } else if (self.searchType == 'completed') {
              res.result.forEach(function(ele) {
                self.completedList[ele.addressType] = ele.goodsList;
              });
              if (Object.keys(self.completedList).length > 0) {
                self.noCompleted = false;
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClick(name, title) {
      if (name === 0) {
        this.searchType = 'open';
        if (this.noOpen) {
          this.getOrders();
        }
      } else if (name === 1) {
        this.searchType = 'completed';
        if (this.noCompleted) {
          this.getOrders();
        }
      }
    },
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
  padding-bottom: 70px;
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
    .statusPaymentConfirm {
      padding: 0;
      background: #ff5a75;
      border-radius: 4px;
      font-size: 14px;
      height: 30px;
      width: 130px;
      line-height: 30px;
      color: #ffffff;
      text-align: center;
    }
    .statusOnSale,
    .statusUnderReview,
    .statusWaitPayment {
      color: #03ad8f;
    }
    .statusDisapproved,
    .satusCanceled{
      color: #8c9fad;
    }
  }
}
</style>
