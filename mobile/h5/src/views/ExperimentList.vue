<template>
  <div>
    <ul>
      <li v-for="(item) in expData" :key="item.id">
        <mt-cell :title="item.name" :label="item.desc" :to="{name: 'expdetails', params:{expId: item.id}}" is-link></mt-cell>
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
        name: 'Automobile Price Prediction',
        desc: 'Draft',
      }, {
        id: 2,
        name: 'Credit Risk Prediction',
        desc: 'Running',
      }, {
        id: 3,
        name: 'Customer Relationship Prediction',
        desc: 'Finished',
      }, {
        id: 4,
        name: 'Income Prediction',
        desc: 'Draft',
      }, {
        id: 5,
        name: 'Sample 5',
        desc: 'Draft',
      }],
    };
  },
};
</script>
<style>
</style>
