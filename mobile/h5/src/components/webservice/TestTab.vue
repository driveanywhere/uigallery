<template>
  <div class="test-tab">
    <mt-button type="primary" size="small" class="test-btn">Test</mt-button>
    <mt-field v-for="(item, key) in input1" :key="key" :label="key" :placeholder="`input ${key}`" v-model="input1[key]"></mt-field>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import { Field, Button } from 'mint-ui';
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

export default {
  data() {
    return {
      input1: {
        'symboling': 3,
        'normalized-losses': '',
        'make': 'alfa-romero',
        'fuel-type': 'gas',
        'aspiration': 'std',
        'num-of-doors': 'two',
        'body-style': 'convertible',
        'drive-wheels': 'rwd',
        'engine-location': 'front',
        'wheel-base': 88.6,
        'length': 168.8,
        'width': 64.1,
        'height': 48.8,
        'curb-weight': 2548,
        'engine-type': 'dohc',
        'num-of-cylinders': 'four',
        'engine-size': 130,
      },
    };
  },
};
</script>
<style lang="scss">
  .test-tab .mint-cell-wrapper {
    font-size: 14px;
  }
</style>
