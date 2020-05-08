<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menuList">
        <el-menu-item
          class="sidebar-menu-item"
          :key="item.index"
          :index="item.index"
        >
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "side-bar",
  data() {
    return {
      collapse: false,
      menuList: [
        {
          icon: "el-icon-s-home",
          index: "home",
          title: "首页",
        },
        {
          icon: "el-icon-s-grid",
          index: "table",
          title: "基础表格",
        },
        {
          icon: "el-icon-postcard",
          index: "tabs",
          title: "tab选项卡",
        },
        {
          icon: "el-icon-s-data",
          index: "chart",
          title: "图表",
        },
        {
          icon: "el-icon-setting",
          index: "setting",
          title: "设置",
        },
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>

<style>
.sidebar {
  height: 100%;
}
.sidebar > ul {
  height: 100%;
}
.sidebar .sidebar-menu-item {
  display: flex;
  align-items: center;
}
</style>
