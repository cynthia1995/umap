<template>  <div class="AboutUs paddingtop-50 padding-20">
    <NavTit :title="title" :noTit="false"></NavTit>  </div></template><script>import NavTit from '../NavAndTit.vue';export default {  name: 'TermOfService',  components: {
    NavTit
  },  data() {    return {      title: 'Term & Service',    };  },  created() {  },  mounted() {},  methods: {  }};</script><style lang="scss" scoped></style>
