<template>
  <div id="myChart" :style="{ maxWidth: '800px', height: '500px' }"></div>
</template>

<script>
import Vue from "vue";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

export default {
  name: "echarts",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        grid: {
          width: "auto",
          height: "auto",
          left: "3%",
          right: "4%",
          containLabel: false,
        },
        xAxis: {
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {},
        series: [
          {
            name: "销量1",
            type: "line",
            data: [5, 20, 36, 10, 10, 20, 27],
          },
          {
            name: "销量2",
            type: "line",
            data: [10, 25, 13, 30, 50, 33, 33],
          },
        ],
      });
    },
  },
};
</script>

<style scoped></style>
