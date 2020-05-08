<template>
  <div class="login-wrap">
    <div class="login">
      <h3 class="login-title">vue 管理系统</h3>
      <form action method="post" @submit.stop.prevent="onSubmit">
        <div class="use-wrap">
          <label for="username">用户名</label>
          <input type="text" name="username" v-model="loginForm.username" placeholder="请输入用户名" />
        </div>
        <div class="pas-wrap">
          <label for="password">密码</label>
          <input type="password" name="password" v-model="loginForm.password" placeholder="请输入密码" />
        </div>
        <button class="btn btn-color" type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    onSubmit() {
      const { username, password } = this.loginForm;
      if (username === null || password === null) {
        alert("用户名或密码不能为空！");
      } else if (username === "" || password === "") {
        alert("用户名或密码不能为空！");
      } else {
        console.log("提交");
      }
    }
  }
};
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#3cddff, #ecf036);
}
.login {
  background: #fff;
  padding: 30px;
  border-radius: 6px;
  transition: box-shadow 0.3s, margin-top 0.3s;
}
.login:hover {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  margin-top: -10px;
}
.login-title {
  font-size: 22px;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
}
.use-wrap,
.pas-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  width: 100%;
}
.use-wrap label,
.pas-wrap label {
  color: #666;
  font-size: 16px;
  text-align: right;
  flex: 1;
  padding-right: 15px;
}
.use-wrap input,
.pas-wrap input {
  line-height: 30px;
  text-indent: 10px;
  flex: 3;
}
.btn {
  display: inline-block;
  width: 100%;
  line-height: 30px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  outline: none;
  margin: 15px 0;
}
.btn-color {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.btn-color:hover {
  background-color: #218838;
  border-color: #218838;
  cursor: pointer;
}
</style>