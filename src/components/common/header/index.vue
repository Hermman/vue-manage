<template>
  <header class="header">
    <div class="header-lf">
      <div class="header-fold">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="header-logo">
        <span>vue 管理系统</span>
      </div>
    </div>
    <div class="header-rg">
      <div class="user-info">
        <div class="user-author">
          <img src="../../../assets/logo.png" alt="头像" />
        </div>
        <span class="user-name">Hermine</span>
        <div class="login-box">
          <router-link class="login-box-link" to="/login">退出</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .header-lf {
  display: flex;
  align-items: center;
}
.header .header-fold {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
}
.header .header-fold:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
}
.user-info {
  display: flex;
  align-items: center;
  position: relative;
}
.user-info:hover .login-box {
  display: block;
  cursor: pointer;
}
.user-author {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
}
.user-author img {
  width: 100%;
  height: auto;
}
.user-name {
  color: #666;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 30px;
}
.login-box {
  display: none;
  width: 100px;
  min-height: 0px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px 0;
  position: absolute;
  top: 60px;
  left: 0;
}
.login-box::before {
  display: block;
  content: "";
  width: 12px;
  height: 12px;
  background: #fff;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  transform: rotate(45deg);
  position: absolute;
  top: -7px;
  left: 35px;
}
.login-box-link {
  display: block;
  height: 30px;
  line-height: 30px;
  color: #333;
  font-size: 14px;
}
.login-box-link:hover {
  background: #ccc;
}
</style>
