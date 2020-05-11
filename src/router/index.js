import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home"),
    children: [
      {
        path: "/dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/dashboard"),
        meta: { title: "系统首页" },
      },
      {
        path: "/table",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/table"),
        meta: { title: "基础表格" },
      },
    ],
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/login/login"),
    meta: { title: "登录页" },
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
