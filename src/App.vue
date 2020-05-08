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
    goLogin() {
      return request("/login");
    }
  }
};
</script>

<style>
</style>
