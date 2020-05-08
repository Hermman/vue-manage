<template>
  <div class="nav-top">
    <i class="nav-top-icon"></i>
    <div v-if="userInfo !== null">
      <span>{{ userInfo.userinfo.user }}</span>
    </div>
    <div v-else>
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-top",
  props: ["userInfo"]
};
</script>

<style>
.nav-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #ccc;
}

.nav-top-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #666;
}
</style>