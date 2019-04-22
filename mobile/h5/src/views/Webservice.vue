<template>
  <div>
    <ul>
      <li v-for="(item) in expData" :key="item.id">
        <mt-cell :title="item.name" :label="item.desc" :to="{name: 'webservicedetails', params:{id: item.id}}" is-link></mt-cell>
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);

export default {
  data() {
    return {
      expData: [{
        id: 1,
        name: 'Automobile Price Prediction [Predictive Exp.]',
        desc: '4/2/2019 3:56:26 PM',
      }, {
        id: 2,
        name: 'Credit Risk Prediction [Predictive Exp.]',
        desc: '3/29/2019 3:32:52 PM',
      }],
    };
  },
};
</script>
<style>
</style>
