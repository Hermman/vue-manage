import Vue from "vue";
import VueRouter from "vue-router";
// import App from "../App";
import Login from "../views/login/login";
import Home from "../views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/login.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
