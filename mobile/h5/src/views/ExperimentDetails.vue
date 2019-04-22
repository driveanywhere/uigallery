<template>
  <div class="details">
    <mt-header title="Experiment Details" :fixed="true">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <img src="@/assets/images/sample.png" alt="" width="80%" />
      <div class="btns-div">
        <mt-button type="primary" size="small" @click.native="handleClick">Run</mt-button>
        <mt-button type="primary" size="small" @click.native="handleClick">Predictive web service</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import { Header, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
};
</script>
<style lang="scss" scoped>
.details {
  background-color: #F2F2F2;
  height: calc(100vh - 40px);
}

.btns-div {
  position: fixed;
  bottom: 60px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  button {
    margin: 10px auto;
    width: 80%;
    display: block;
  }
}
.content {
  margin-top: 40px;
}
</style>


