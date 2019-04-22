<template>
  <div id="app">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="explist">
        <div><i class="fullmdl2-icon-testbeaker" /></div>
        Experiments
      </mt-tab-item>
      <mt-tab-item id="webservice">
        <div><i class="fullmdl2-icon-global" /></div>
        WebService
      </mt-tab-item>
      <mt-tab-item id="notification">
        <div><i class="fullmdl2-icon-notification" /></div>
        Notifications
      </mt-tab-item>
      <mt-tab-item id="settings">
        <div><i class="fullmdl2-icon-settings" /></div>
        Settings
      </mt-tab-item>
    </mt-tabbar>
    <router-view/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  data() {
    return {
      selected: 'explist',
    };
  },
  mounted() {
    document.title = 'Experiments';
  },
  watch: {
    selected(val) {
      this.$router.push({name: this.selected});
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Segoe UI';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
}
ul {
  padding-left: 0;
  list-style-type: none;
}
#app .mint-tabbar {
  background-image: none;
  z-index: 100;
  position: fixed;
}
#app .mint-cell-wrapper {
  background-image: none;
}
#app .mint-tab-item {
  padding: 14px 0;
}
[class*="fullmdl2-icon-"] {
  font-size: 18px;
}
</style>
