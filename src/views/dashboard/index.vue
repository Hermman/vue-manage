<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover" class="card-color1">
          <span class="num">1000000</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="card-color2">
          <span class="num">88888</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="card-color3">
          <span class="num">66666</span>
        </el-card>
      </el-col>
    </el-row>
    <el-tabs
      class="dashborad-el-tabs"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane label="数据走势" name="first">
        <Echarts />
      </el-tab-pane>
      <el-tab-pane label="数据分布" name="second">
        <Echarts />
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Echarts from "@/components/echarts/echarts";

export default {
  name: "dashboard",
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    Echarts,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.dashboard .num {
  font-size: 30px;
  color: #fff;
}
.card-color1 {
  background: #67c23a;
}
.card-color2 {
  background: #e6a23c;
}
.card-color3 {
  background: #f56c6c;
}
.dashborad-el-tabs {
  line-height: 30px !important;
}
</style>
