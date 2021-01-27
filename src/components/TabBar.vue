import defaultUserImg from '@/static/staticImg/defaultUser.png';
<template>
  <div class="tab-bar" >
      <router-link to="/home" tag="li">
        home
      </router-link>
      <router-link to="/sell" tag="li">sell</router-link>
      <router-link to="/orders" tag="li">orders</router-link>
      <router-link to="/account" tag="li">account</router-link>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      msg: '这是底部导航栏',
      activeIndex: "1",
      tabIcons: [{
          default: "https://resource.yuedaoec.com/test1/home@2x.png",
          selected: "https://resource.yuedaoec.com/test1/home_a@2x.png"
        }, {
          default: "https://resource.yuedaoec.com/test1/sell@2x.png",
          selected: "https://resource.yuedaoec.com/test1/sell_a@2x.png"
        }, {
          default: "https://resource.yuedaoec.com/test1/order@2x.png",
          selected: "https://resource.yuedaoec.com/test1/order_a@2x.png"
        }, {
          default: "https://resource.yuedaoec.com/test1/account@2x.png",
          selected: "https://resource.yuedaoec.com/test1/account_a@2x.png"
        }]
    }
  },

  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style scoped>
.tab-bar {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0;
  text-align: center;
  height: 50px;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.05);
}

.tab-bar li {
    display: inline-block;
    width: 23%;
    font-size: 10px;
    height: 100%;
    position: relative;
    line-height: 74px;
}

.tab-bar li:nth-child(1)::before,
.tab-bar li:nth-child(2)::before,
.tab-bar li:nth-child(3)::before,
.tab-bar li:nth-child(4)::before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
}

.tab-bar li:nth-child(1)::before {
  background: url("https://resource.yuedaoec.com/test1/home@2x.png") no-repeat center;
  background-size: cover;
}

.tab-bar li:nth-child(2)::before {
  background: url("https://resource.yuedaoec.com/test1/sell@2x.png") no-repeat center;
  background-size: cover;
}

.tab-bar li:nth-child(3)::before {
  background: url("https://resource.yuedaoec.com/test1/order@2x.png") no-repeat center;
  background-size: cover;
}

.tab-bar li:nth-child(4)::before {
  background: url("https://resource.yuedaoec.com/test1/account@2x.png") no-repeat center;
  background-size: cover;
}

.tab-bar li:nth-child(4).router-link-active::before {
  background: url("https://resource.yuedaoec.com/test1/account_a@2x.png") no-repeat center;
  background-size: cover;
}


.tab-bar li.router-link-active{  
    color: #7041FF;
}  
</style>
