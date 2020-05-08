import Vue from "vue";
import EleElementUI from "element-ui";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "element-ui/lib/theme-chalk/index.css";
import "./style/reset.css";

Vue.use(EleElementUI, { size: "small" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
