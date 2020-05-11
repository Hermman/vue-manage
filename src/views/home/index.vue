<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container class="el-container">
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/common/header";
import sideBar from "@/components/sideBar";

export default {
  name: "home",
  data() {
    return {
      user: "hehe"
    };
  },
  components: {
    Header,
    "side-bar": sideBar
  },
  created() {
    const user = this.$store.state.userinfo.user;
    if (user === null) {
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapState(["userinfo"])
  }
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
