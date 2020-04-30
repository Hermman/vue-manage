import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App";
import Login from "../views/login/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ ",
    component: App,
    children: [
      {
        path: "/login",
        component: Login,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
