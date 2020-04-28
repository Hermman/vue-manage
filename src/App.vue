<template>
  <div id="app">
    <button @click="handleClick">测试跨域请求</button>
    <!-- <Login /> -->
    <div>
      <router-link to="/login">login</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import request from "./utils/request";
// import Login from "./views/login/login";

export default {
  name: "App",
  components: {
    // Login
  },
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
