<template>
  <div class="AddMethod paddingtop-50 padding-20">
    <NavTit :title="title" :noTit="false"></NavTit>
    <ul class="methodList">
      <li v-for="(item, index) in list" class="flex" @click="toAdd(item.type)">
        <img :src="item.icon" alt="" />
        <span class="fontweight-m fontsize20">{{ item.type }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
export default {
  name: 'AddMethod',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'AddMethod',
      list: [{ type: 'IMPS', icon: require('@/assets/img/UPI_icon@2x.png') }, { type: 'UPI', icon: require('@/assets/img/UPI@2x.png') }]
    };
  },
  created() {},
  mounted() {},
  methods: {
    toAdd(name) {
      this.$router.push({
        path: '/add',
        query: {
          type: name
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.methodList {
  padding-top: 30px;
  li {
    padding: 25px 20px;
    background-color: #f7f8fc;
    margin-bottom: 20px;
    line-height: 40px;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      background: url(../../assets/img/arrow_right@2x.png) no-repeat center;
      background-size: cover;
      width: 24px;
      height: 24px;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      height: 40px;
      width: 40px;
      margin-right: 20px;
    }
  }
}
</style>
