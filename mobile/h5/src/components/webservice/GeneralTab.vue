<template>
  <div>
    <table>
      <tbody>
        <tr><td>Deployment State</td><td>Healthy</td></tr>
        <tr><td>Operation Status</td><td>Update - Success - 4/10/2019 10:22:18 AM</td></tr>
        <tr><td>Region</td><td>eastus</td></tr>
        <tr><td>Created on</td><td>4/09/2019 12:03:34 PM</td></tr>
        <tr><td>Last Updated</td><td>4/09/2019 12:03:34 PM</td></tr>
        <tr><td>Description</td><td>No description provided for this web service.</td></tr>
      </tbody>
    </table>
    <div class="links">
      <a href="javascript:;">View Deployment</a>
      <a href="javascript:;">View experiment snapshot</a>
      <a href="javascript:;">View lastest experiment</a>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
  table {
    border-collapse: collapse;
    td {
      padding: 6px 0;
      &:first-child {
        color: rgb(102, 102, 102);
      }
    }
  }
  .links {
    margin-top: 12px;
    a {
      display: block;
      padding: 6px 0px;
      color: rgb(0, 99, 177);
      text-decoration: none;
    }
  }
</style>
