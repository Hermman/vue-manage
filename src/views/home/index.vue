<template>
  <el-container>
    <el-header>vue manage</el-header>
    <el-container class="el-container">
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
    <!-- <Menu />
    <div class="content-right">
      <nav-top :userInfo="{ userinfo }"></nav-top>
    </div>
  </div> -->
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import sideBar from "@/components/sideBar";
// import navTop from "@/components/nav-top/navTop";

export default {
  name: "home",
  data() {
    return {
      user: "hehe",
    };
  },
  components: {
    "side-bar": sideBar,
    // "nav-top": navTop,
  },
  created() {
    const user = this.$store.state.userinfo.user;
    if (user === null) {
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapState(["userinfo"]),
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  height: 100vh;
}
</style>
