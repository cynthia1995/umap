<template>
  <div class="AboutUs paddingtop-50 padding-20">
    <NavTit :title="title" :noTit="false"></NavTit>
    <img class="logo" src="../../assets/img/logo2_aboutus@2x.png" alt="" />
    <div class="contxt color-8c9fad">
      UMAP helps you Sell USDT for Fiat directly with other Buyers. It's 24x7, safe and absolutely legal!
      simple things you can do with UMAP -
      Cash Out - If you want to move Fiat to your bank account, Sell your cryptos for USDT and then sell that USDT for Fiat via UMAP!
      Broadly, here's how UMAP P2P works -
      UMAP matches the person looking to buy USDT for Fiat with someone who’s looking to sell USDT for Fiat
      UMAP escrows the USDT for safekeeping during the transaction
      Buyer transfers Fiat to the seller's bank account via IMPS/UPI
      Seller confirms payment and UMAP releases the USDT to the buyer
    </div>
  </div>
</template>

<script>
import NavTit from '../NavAndTit.vue';
export default {
  name: 'AboutUs',
  components: {
    NavTit
  },
  data() {
    return {
      title: 'About Us',
      answer: {
        id: 1,
        question: 'How to apply for a loan？',
        contxt:
          'Open the app, log in the personal account, enter the home page and click "borrow now" to enter the borrowing page;\nAfter filling in the relevant identity information and real name authentication, you can see the initial credit line of the system;\nAfter confirming the loan information, you can submit it. The system enters the approval process. After approval, the loan will be released.'
      }
    };
  },
  created() {
    console.log(this.$route.params.id);
  },
  mounted() {},
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 92px;
  width: 100px;
  margin: 50px auto 30px;
}
.contxt {
  line-height: 22px;
}
</style>
