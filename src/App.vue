<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import request from "./utils/request";

export default {
  name: "App",
  components: {},
  methods: {
    handleClick() {
      console.log("开始发送请求");
      return request("/login");
    }
  }
};
</script>

<style>
</style>
