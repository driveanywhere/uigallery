<template>
  <div class="details">
    <mt-header title="WebService Details" :fixed="true">
      <router-link slot="left" to="">
        <mt-button icon="back" @click="$router.go(-1)"></mt-button>
      </router-link>
    </mt-header>

    <mt-navbar v-model="selected" :fixed="true">
      <mt-tab-item id="1">General</mt-tab-item>
      <mt-tab-item id="2">Test</mt-tab-item>
      <mt-tab-item id="3">Consume</mt-tab-item>
      <mt-tab-item id="4">API Doc</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" :swipeable="true">
      <mt-tab-container-item id="1">
        <GeneralTab />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <TestTab />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
          Consume...
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
          API Doc...
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import { Header, Button, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
import GeneralTab from '../components/webservice/GeneralTab.vue';
import TestTab from '../components/webservice/TestTab.vue';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
  components: {
    GeneralTab,
    TestTab,
  },
  data() {
    return {
      selected: '1',
    };
  },
};
</script>
<style lang="scss" scoped>
  .mint-tab-container {
    padding: 12px;
    margin-top: 86px;
    margin-bottom: 46px;
  }
  .mint-navbar.is-fixed {
    top: 40px;
  }
</style>
